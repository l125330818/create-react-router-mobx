/**
 * Created by luojie on 2018/3/12.
 * 路由模块配置。
 */
import Bundle from "./bundle";


import loginComp from "bundle-loader?lazy&name=app-[name]!../pages/login";

let arr = [
	{ key: "login", comp: loginComp, path: "/login" },
	
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