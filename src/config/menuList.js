const data = [
    {
        name: "工作台",
        code: "workbench",
        level:1,
    },
    {
        name: "线索",
        code: "clue",
        level:1,
        childList:[
            // {label:"线索详情",path:"clue/details"},
            {label:"部门线索",type:2,path:"allClue"},
            {label:"我的线索",type:2,path:"myClue"},
            // {label:"试听课",type:2,path:"clueLesson"}
        ]
    },
    {
        name: "意向客户",
        code: "business",
        level:1,
        childList:[
            {name:"全部意向客户",level:2,code:"allBusiness"},
            {name:"我的意向客户",level:2,code:"myBusiness"},
            {name:"试听课",level:2,code:"businessLesson"},
        ]
    },{
        name:"客户公海",
        code:"customerGroup",
        level:1,
    },{   
        name: "订单中心",
        code: "orderCenter",
        level:1,
        childList:[
            {name:"客户中心",level:2,code:"allCustomer"},
            {name:"部门订单",level:2,code:"allOrder"},
            {name:"我的订单",level:2,code:"myOrder"},
        ]
    },
    {
        name: "用户管理",
        code: "user",
        level:1,
        childList:[
            {name:"用户设置",level:2,code:"setting"}
        ]
    },
    {
        name:"系统管理",
        code:"system",
        level:1,
        childList:[
            {name:"系统设置",level:2,code:"systemSettings",childList:[
                {name:"菜单管理",level:3,code:"menuManagement"},
                {name:"角色管理",level:3,code:"roleManagement"},
            ]},
            {name:"组织管理",level:2,code:"organization"},
            {name:"机构管理",level:2,code:"mechanismComp"},
            {name:"学校管理",level:2,code:"school"},
            {name:"小区管理",level:2,code:"plot"},
            {name:"数据字典",level:2,code:"dataDictionary"}
        ]
    },
    {
        name:"公告管理",
        code:"noticeManagement",
        level:1,
        childList:[
            {name:"公告信息",level:2,code:"noticeList",childList:[
                {name:"全部线索",level:3,code:"menuManagement"},
            ]},
        ]
    },
    {
        name:"营销管理",
        code:"marketingManagement",
        level:1,
        childList:[
            {name:"营销统计",level:2,code:"marketingStatistics",childList:[
                {name:"营销总计",level:3,code:"marketingTotal"},
                {name:"个人营销统计",level:3,code:"personalMarketingStatistics"},
                {name:"营销信息设置",level:3,code:"markeingRange"}
            ]},
        ]
    },


];
export default data;