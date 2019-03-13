

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Modules } from "./config/routeConfig";
import Layout from "./components/layout";

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout {...this.props}>
                <Switch>
                    {
                        Modules.map((item, index) => {
                            return (
                                <Route exact key={`router-${index}`} path={item.path} component={item.comp} />
                            )
                        })
                    }
                    <Redirect to='/login' />
                </Switch>
            </Layout>
        )
    }
}