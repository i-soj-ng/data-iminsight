function siteOrderProdSql(site_code) {
    return (
        `select \'${ site_code }\' as site_code, dd.yyyy, dd.mm, coalesce(sum(order_prod_count), 0) as order_prod_count\n` +
        `from \"imweb-s3-real-stage-layer-data-catalog\".date_dimension as dd\n` +
        `left join (\n` +
            `select * from \"imweb-s3-real-stage-layer-data-catalog\".shop_order_prod_count_day\n` +
            `where site_code = \'${ site_code }\'\n` +
            `group by site_code, order_day, order_prod_count)\n` +
        `as sp\n`+
        `on dd.yyyymm = substring(sp.order_day, 1, 7)\n` +
        `where 1=1\n` +
        `and dd.yyyymm >= \'2022-02\'\n` +
        `and dd.yyyymm <= \'2022-08\'\n` +
        `group by dd.yyyymm, dd.yyyy, dd.mm\n` +
        `order by yyyymm;`
    );
}

module.exports = siteOrderProdSql;