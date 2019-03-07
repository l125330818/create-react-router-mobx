const util = {
	invalid: {
		mobileReg: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,  //验证手机号正则表达式
		mailReg: /^([a-zA-Z0-9]+[_|/_|/.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|/_|/.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/,  //验证邮箱正则表达式
		numReg: /^[0-9]*$/,
		cardReg: /^[a-zA-Z0-9]+$/,
		moneyReg: /^(0(?:[.](?:[1-9]\d?|0[1-9]))|[1-9]\d{0,6}(?:[.]\d{0,2}|$)|0([.]0{0,2})?)$/, //7位数字加2位小数
		codeReg: /^[0-9]\d{5}$/,//验证码校验，6位数字
		pwdReg: /^[0-9A-Za-z]{6,30}$/,//验证密码，6-30位
		routine: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,//除特殊字符
		pathReg: /\/([a-zA-Z]+)+/g,//路由匹配(/user/index)
		devHostReg:/^(http?(s)?:\/\/)?((localhost)|(192\.168\.1\.))(.+)$/,//匹配开发环境的正则表达式
		prodHostReg:/^(http?(s)?:\/\/)?((crm\.)|(crmprod\.))(.+)$/,//匹配正式环境的正则表达式
		uatHostReg:/^(http?(s)?:\/\/)?(crmuat\.)(.+)$/,//匹配uat环境的正则表达式
	},
	trim: function (str = "") {//去空格
		if (!str) {
			return "";
		}
		return str.replace(/(^\s+)|(\s+$)/g, "");
	},
	setCookie: function (key, value, day) {
		return setCookie(key, value, day)
	},
	removeCookie: function (key) {
		setCookie(key, '', -1);//这里只需要把Cookie保质期退回一天便可以删除
	},
	getCookie: function (key) {
		let cookieArr = document.cookie.split('; ');
		for (let i = 0; i < cookieArr.length; i++) {
			let arr = cookieArr[i].split('=');
			if (arr[0] === key) {
				return decodeURIComponent(arr[1]);
			}
		}
		return "";
	},
	getQueryString: (name) => {//获取浏览器参数
		let {href} = location;
		let search = href.substr(href.indexOf("?")+1)
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
		var r = search.match(reg);
		if (r != null) {
			return unescape(r[2]);
		}
		return "";
	},
	trimLeftRight:(s)=>{//去前后空格
		return s.replace(/(^\s*)|(\s*$)/g, "");
	},
	getButtonAuth: (str = "") => {//获取按钮操作权限。
		if (!str) {
			return false;
		}
		let cookieStr = util.getCookie("parameters");
		let arr = cookieStr.split(",") || [];
		let flag = "";
		for (var i =0;i<arr.length;i++){
			if(arr[i] === str ){
				flag = arr[i];
				break;
			}
		}
		// let flag = arr.find((item) => item === str);  //ie不支持find方法。
		return !flag;
	},
	getTimeStr:(timeTamp,fmt)=>{
		let t = parseInt(timeTamp);
		return new Date(t).Format(fmt || "yyyy-MM-dd hh:mm:ss")
	}
};

function setCookie(key, value, day = 1) {
	let exp = new Date();
	exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
	document.cookie = key + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString() + ";path=/";

}
export default util;