function siteGmvSql(site_code) {
    return (
        `select \'${ site_code }\' as site_code, dd.yyyy, dd.mm, coalesce(pg_or_cash, \'pg\') as pg_or_cash, coalesce(monthly_gmv, 0) as monthly_gmv, coalesce(order_count, 0) as order_count\n` +
        `from \"imweb-s3-real-stage-layer-data-catalog\".date_dimension as dd\n` +
        `left join (\n` +
            `select * from \"imweb-s3-real-stage-layer-data-catalog\".iminsight_site_gmv_monthly\n` +
            `where site_code = \'${ site_code }\'\n` +
            `group by site_code, yyyy, mm, pg_or_cash, monthly_gmv, order_count)\n` +
        `as sg\n` +
        `on dd.yyyy = cast(sg.yyyy as integer) and dd.mm = cast(sg.mm as integer)\n` +
        `where 1=1\n` +
        `and dd.yyyymm >= \'2022-02\'\n` +
        `and dd.yyyymm <= \'2022-08\'\n` +
        `order by yyyymm;`
    );
}

module.exports = siteGmvSql;