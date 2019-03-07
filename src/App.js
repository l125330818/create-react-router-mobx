
/**
 * Created by luojie on 2018/3/12.
 * 路由配置。
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Modules, SModules } from "./config/routeConfig";
import { Provider } from 'mobx-react';
import Store from "./store";

import utils from "./utils";

class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <Switch >
            <Route path="/login" component={SModules.login}></Route>
            <Redirect to='/login' />
          </Switch>
        </Router>
      </Provider>

    );
  }
}

export default App;
