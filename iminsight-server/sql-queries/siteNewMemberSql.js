function siteNewMemberSql(site_code) {
    return (
        `select \'${ site_code }\' as site_code, dd.yyyy, dd.mm, coalesce(sd.cnt, 0) as cnt\n` +
        `from \"imweb-s3-real-stage-layer-data-catalog\".date_dimension as dd\n` +
        `left join (select site_code, yyyy, mm, sum(cnt) as cnt from \"imweb-s3-real-stage-layer-data-catalog\".site_member_join_count_by_day where site_code = \'${ site_code }\' group by site_code, yyyy, mm) as sd on  dd.yyyy = sd.yyyy and dd.mm = sd.mm\n` +
        `where 1=1\n` +
        `and dd.yyyymm >= \'2022-02\'\n` +
        `and dd.yyyymm <= \'2022-08\'\n` +
        `order by yyyymm`
    );
}

module.exports = siteNewMemberSql;