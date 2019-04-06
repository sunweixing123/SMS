const menuList = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: '基本信息',
        key: '/charts',
        children: [
            {
                title: '学校',
                key: '/charts/bar'
            },
            {
                title: '学生',
                key: '/charts/pie'
            },
            {
                title: '老师',
                key: '/charts/line'
            },
        ]
    },
    {
        title: '项目申报管理',
        key: '/charts',
    },
    {
        title: '中期考核管理',
        key: '/charts',
    },
    {
        title: '项目结题管理',
        key: '/charts',
    },
    {
        title: '权限设置',
        key: '/permission'
    },
];
export default menuList;