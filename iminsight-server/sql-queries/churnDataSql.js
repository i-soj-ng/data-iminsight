function churnDataSql() {
    return (
        `select *\n` +
        `from \"imweb-s3-real-20220701-rawdata-layer-data-catalog\".churn_prediction_prediction_results\n` +
        `order by score desc;`
    );
}

module.exports = churnDataSql;