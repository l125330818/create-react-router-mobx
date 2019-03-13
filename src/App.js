
/**
 * Created by luojie on 2018/3/12.
 * 路由配置。
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Store from "./store";
import LocaleProvider from 'antd/lib/locale-provider';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {SModules} from "./config/routeConfig";
import Layout from "./layoutWrapper";
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class App extends Component {
	render() {
		return (
			<LocaleProvider locale={zhCN}>
				<Provider store={Store}>
					<Router>
						<Switch >
							<Route path="/login" component={SModules.login}></Route>
							<Route  path="/" render={(props) => <Layout {...props} />}></Route>
							<Redirect to='/customerList' />

						</Switch>
					</Router>
				</Provider>
			</LocaleProvider>

		);
	}
}

export default App;
