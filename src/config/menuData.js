/*
 * @Author: luojie 
 * @Date: 2019-03-13 11:16:25 
 * @Last Modified by:   luojie 
 * @Last Modified time: 2019-03-13 11:16:25 
 * 配置菜单路由。
 */
const data = [
    {
        name: "客户业务",
        path: "customer",
        icon:"team",
        childList:[
            {name:"客户列表",path:"list"}
        ]
    },
    {
        name: "产品销售",
        path: "product",
        icon:"shop",
        childList:[
            {name:"产品列表",path:"list"},
            {name:"订单管理",path:"orderList"},
        ]
    },
];

export default data;