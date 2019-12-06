import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { useDataQuery } from '@dhis2/app-runtime'
import { Card } from '@dhis2/ui-core'
import { users, organisationUnits } from '../constants/queries'
import './styles/MainContent.css'
import styles from './styles/MainContent.style'
import AndroidSetting from './AndroidSetting'
import ProgramSettings from './ProgramSetting'

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
} */

const MainContent = () => {
    const { loading, error, data } = useDataQuery(query)
    testFunction(users)
    testFunction(organisationUnits("ImspTQPwCqd"))

    return (
        <div>
            <header className="header">
                <h1 className="paper__two-panel__main-title">
                    {i18n.t('Android Settings')}
                </h1>
            </header>

            <AndroidSetting />
            {/* <ProgramSettings /> */}
        </div>
    )
}

export default MainContent