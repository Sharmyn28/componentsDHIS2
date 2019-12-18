import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { useDataQuery } from '@dhis2/app-runtime'
import { users, organisationUnits } from '../constants/queries'
import './styles/MainContent.css'
// import styles from './styles/MainContent.style'
import { Switch, Route, useLocation } from 'react-router-dom';

import AndroidSetting from '../pages/android-settings/AndroidSetting'
import ProgramSetting from '../pages/program-settings/ProgramSetting'
import DataSetSetting from '../pages/dataset-settings/DataSetSetting'
import TestAndroid from '../pages/test-android/TestAndroid'

const query = {
    users: {
        resource: 'users.json',
        params: {
            paging: false,
            fields: 'id,name,userCredentials,userGroups'
        }
    }
}

const query2 = {
    users: {
        resource: 'users.json',
        params: {
            order: 'name:asc',
            paging: false,
            fields: 'id,name,userCredentials,userGroups'
        }
    }
}

function testFunction (query) {
    const { loading, error, data } = useDataQuery(query)

    if (loading) {
        console.log('loading')
    } else if (error) {
        console.log({
            error: error
        })
    } else if (data) {
        console.log({
            data: data,
            /* user: data.users,
            list: data.users.users */
            //toArray: data.toArray()
        })
    }
}

/* "query" = {
    "users": {
        "resource": "users.json",
        "params": {
            "paging": false,
            "fields": "id,name,userCredentials,userGroups"
        }
    }
} 
 const { loading, error, data } = useDataQuery(query)
 testFunction(users)
    testFunction(organisationUnits("ImspTQPwCqd"))
*/

/* const AppRouter = ({ pageState }) => {
    const routes = sections.map(section => {
        const routeRender = () => {
            const Page = section.component
            return <Page sectionKey={section.key} {...pageState} />
        }
        return (
            <Route
                key={section.key}
                exact
                path={section.path}
                render={routeRender}
            />
        )
    })

    // Home route
    const homeRouteRender = () => <Home sectionKey="home" />

    routes.push(<Route key="home" exact path="/" render={homeRouteRender} />)

    // No Match Route
    routes.push(<Route key="no-match-route" component={NoMatch} />)

    return (
        <main>
            <Switch>{routes}</Switch>
        </main>
    )
} */

const NoMatch = () => {
    const location = useLocation()
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    )
}

const MainContent = () => {
    return (
        <div className="col-sm-10" >
            <header className="header">
                <h1 className="paper__two-panel__main-title">
                    {i18n.t('Android Settings')}
                </h1>
            </header>

            <Switch>
                <Route exact path="/">
                    <AndroidSetting />
                </Route>
                <Route exact path="/android-setting">
                    <AndroidSetting />
                </Route>
                <Route exact path="/program-setting">
                    <ProgramSetting />
                </Route>
                <Route exact path="/dataset-setting">
                    <DataSetSetting />
                </Route>
                <Route exact path="/test-android-login">
                    <TestAndroid />
                </Route>
                {/* <Route key="no-match-route" path="*">
                   <NoMatch />
                </Route> */}
            </Switch>

            {/* <AndroidSetting /> */}
            {/* <ProgramSetting /> */}
            {/* <DataSetSetting /> */}
        </div>
    )
}

export default MainContent