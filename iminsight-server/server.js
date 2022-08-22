const churnDataSql = require('./sql-queries/churnDataSql');
const siteNewMemberSql = require('./sql-queries/siteNewMemberSql');
const siteGmvSql = require('./sql-queries/siteGmvSql');
const sitePageViewSql = require('./sql-queries/sitePageViewSql');
const siteOrderProdSql = require('./sql-queries/siteOrderProdSql');

const makeQuery = require('./athena');

const express = require('express');
const server = express();

const PORT = 8000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, () => console.log("Running..."));

// 상위 이탈률 사이트 리스트 send
server.get("/get-churn-data", (req, res) => {
    const churnDataQuery = churnDataSql();

    makeQuery(churnDataQuery)
        .then((data) => {
            res.send(data);
        })
        .catch((e) => { res.send(e) })
});

// 사이트 신규 회원 수 데이터 send
server.get("/get-site-new-member-data", (req, res) => {
    console.log(req.query.site_code);
    const sql = siteNewMemberSql(req.query.site_code);

    makeQuery(sql)
        .then((data) => {
            res.send(data);
        })
        .catch((e) => { res.send(e) })
});

// 사이트 GMV 데이터 send
server.get("/get-site-gmv-data", (req, res) => {
    console.log(req.query.site_code);
    const sql = siteGmvSql(req.query.site_code);

    makeQuery(sql)
        .then((data) => {
            res.send(data);
        })
        .catch((e) => { res.send(e) })
});

// 사이트 Page View 데이터 send
server.get("/get-site-page-view-data", (req, res) => {
    console.log(req.query.site_code);
    const sql = sitePageViewSql(req.query.site_code);

    makeQuery(sql)
        .then((data) => {
            res.send(data);
        })
        .catch((e) => { res.send(e) })
});

// 사이트 상품 주문 수 데이터 send
server.get("/get-site-order-prod-data", (req, res) => {
    console.log(req.query.site_code);
    const sql = siteOrderProdSql(req.query.site_code);

    makeQuery(sql)
        .then((data) => {
            res.send(data);
        })
        .catch((e) => { res.send(e) })
});
