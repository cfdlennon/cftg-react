import React from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
import {routes} from './pages/routes'
import MainLayout from './pages/MainLayout'
import 'typeface-roboto'
import './index.css'

ReactDOM.render(
    <Router>
        <MainLayout>
            <Switch>
                {routes.map((route, i) => <Route
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                    key={i}/>)}
            </Switch>
        </MainLayout>
    </Router>, document.getElementById('root'))
registerServiceWorker()
