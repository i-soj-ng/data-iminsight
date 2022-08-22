const express = require('express');
const app = express();

require("dotenv").config();

const PORT = 8000;

const AWS = require('aws-sdk');
const Queue = require('async.queue');
const _ = require('lodash');

const ATHENA_DB = process.env.DB;
const ATHENA_OUTPUT_LOCATION = process.env.LOCATION
const RESULT_SIZE = 1000
const POLL_INTERVAL = 1000

let client = new AWS.Athena({region: process.env.REGION});

const sql = "select \'S201706275951b78686e29\' as site_code, dd.yyyy, dd.mm, coalesce(sd.cnt, 0) as cnt\n" +
"from \"imweb-s3-real-stage-layer-data-catalog\".date_dimension as dd\n" +
"left join (select site_code, yyyy, mm, sum(cnt) as cnt from \"imweb-s3-real-stage-layer-data-catalog\".site_member_join_count_by_day where site_code = \'S201706275951b78686e29\' group by site_code, yyyy, mm) as sd on  dd.yyyy = sd.yyyy and dd.mm = sd.mm\n" +
"where 1=1\n" +
   "and dd.yyyymm >= \'2017-05\'\n" +
   "and dd.yyyymm < \'2018-05\'\n" +
"order by yyyymm"

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/get-site-data", (req, res) => {
    makeQuery(sql)
        .then((data) => {
            res.send(data);
        })
        .catch((e) => { res.send(e) })
});

app.get("/get-churn-data", (req, res) => {
    makeQuery(sql)
        .then((data) => {
            res.send(data);
        })
        .catch((e) => { res.send(e) })
});

app.listen(PORT, () => console.log("Running..."));

let q = Queue((id, cb) => {
    startPolling(id)
        .then((data) => { return cb(null, data) })
        .catch((err) => { console.log('Failed to poll query: ', err); return cb(err) })
}, 5);

function makeQuery(sql) {
    return new Promise((resolve, reject) => {
        let params = {
            QueryString: sql,
            ResultConfiguration: { OutputLocation: ATHENA_OUTPUT_LOCATION },
            QueryExecutionContext: { Database: ATHENA_DB }
        }

        /* Make API call to start the query execution */
        client.startQueryExecution(params, (err, results) => {
            if (err) return reject(err)
            /* If successful, get the query ID and queue it for polling */
            q.push(results.QueryExecutionId, (err, qid) => {
                if (err) return reject(err)
                /* Once query completed executing, get and process results */
                return buildResults(qid)
                    .then((data) => { return resolve(data) })
                    .catch((err) => { return reject(err) })
            })
        })
    })
}

function buildResults(query_id, max, page) {
    let max_num_results = max ? max : RESULT_SIZE
    let page_token = page ? page : undefined
    return new Promise((resolve, reject) => {
        let params = {
            QueryExecutionId: query_id,
            MaxResults: max_num_results,
            NextToken: page_token
        }

        let dataBlob = []
        go(params)

        /* Get results and iterate through all pages */
        function go(param) {
            getResults(param)
                .then((res) => {
                    dataBlob = _.concat(dataBlob, res.list)
                    if (res.next) {
                        param.NextToken = res.next
                        return go(param)
                    } else return resolve(dataBlob)
                }).catch((err) => { return reject(err) })
        }

        /* Process results merging column names and values into a JS object */
        function getResults() {
            return new Promise((resolve, reject) => {
                client.getQueryResults(params, (err, data) => {
                    if (err) return reject(err)
                    var list = []
                    let header = buildHeader(data.ResultSet.ResultSetMetadata.ColumnInfo)
                    let top_row = _.map(_.head(data.ResultSet.Rows).Data, (n) => { return n.VarCharValue })
                    let resultSet = (_.difference(header, top_row).length > 0) ?
                        data.ResultSet.Rows :
                        _.drop(data.ResultSet.Rows)
                    resultSet.forEach((item) => {
                        list.push(_.zipObject(header, _.map(item.Data, (n) => {return n.VarCharValue })))
                    })
                    return resolve({next: ('NextToken' in data) ? data.NextToken : undefined, list: list})
                })
            })
        }
    })
}

function startPolling(id) {
    return new Promise((resolve, reject) => {
        function poll(id) {
            client.getQueryExecution({QueryExecutionId: id}, (err, data) => {
                if (err) return reject(err)
                if (data.QueryExecution.Status.State === 'SUCCEEDED') return resolve(id)
                else if (['FAILED', 'CANCELLED'].includes(data.QueryExecution.Status.State)) return reject(new Error(`Query ${data.QueryExecution.Status.State}`))
                else { setTimeout(poll, POLL_INTERVAL, id) }
            })
        }
        poll(id)
    })
}

function buildHeader(columns) {
    return _.map(columns, (i) => { return i.Name })
}