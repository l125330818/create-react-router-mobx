/**
 * Created by luojie on 2018/3/12.
 * 路由模块配置。
 */
import Bundle from "./bundle";
import loadComp from "./loadComp";

const loginComp = loadComp("login");
const customerListComp = loadComp("customer/customerList");
const productListComp = loadComp("product/productList");
const orderListComp = loadComp("product/orderList");


let arr = [
	{comp: customerListComp, path: "/customer/list" },
	{comp: productListComp, path: "/product/list" },
	{comp: orderListComp, path: "/product/orderList" },
];

let Modules = [];
arr.forEach((item) => {
	let obj = {};
	obj["comp"] = (props) => (
		<Bundle {...props} load={item.comp}>
			{(Comps) => <Comps {...props} />}
		</Bundle>
	);
	obj["path"] = item.path;
	Modules.push(obj);
});

let SModules = { //不需要layout包裹的页面。
	login: (props) => (
		<Bundle {...props} load={loginComp}>
			{(Comps) => <Comps {...props} />}
		</Bundle>),
}

export { Modules, SModules }