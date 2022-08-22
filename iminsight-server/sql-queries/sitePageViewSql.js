function sitePageViewSql(site_code) {
    return (
        `select \'${ site_code }\' as site_code, dd.yyyy, dd.mm, coalesce(page_view_count, 0) as page_view_count\n` +
        `from \"imweb-s3-real-stage-layer-data-catalog\".date_dimension as dd\n` +
        `left join (\n` +
            `select * from \"imweb-s3-real-stage-layer-data-catalog\".iminsight_site_page_view_monthly\n` +
            `where site_code = \'${ site_code }\'\n` +
            `group by site_code, yyyy, mm, page_view_date, page_view_count)\n` +
            `as sv\n` +
            `on dd.yyyy = cast(sv.yyyy as integer) and dd.mm = cast(sv.mm as integer)\n` +
        `where 1=1\n` +
        `and dd.yyyymm >= \'2022-02\'\n` +
        `and dd.yyyymm <= \'2022-08\'\n` +
        `order by yyyymm;`
);
}

module.exports = sitePageViewSql;