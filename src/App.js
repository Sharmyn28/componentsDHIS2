import React, { useEffect, useRef, useState } from 'react'
import { useDataMutation, useDataQuery } from '@dhis2/app-runtime'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import { BrowserRouter as Router } from 'react-router-dom';
import { android_setting_mutation, program_setting_mutation, dataset_setting_mutation, query_dataStore } from './constants/mutation-datastore';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/layout.css';

const MyApp = () => {
    const didMountRef = useRef(false)
    const [namespaceState, setNamespace] = useState()
    const [mutateAndroid] = useDataMutation(android_setting_mutation.create)
    const [mutateProgram] = useDataMutation(program_setting_mutation)
    const [mutateDataSet] = useDataMutation(dataset_setting_mutation)
    let namespaceFound

    // add namespaceFound or state to mainContent as attr then create namespace in case is needed
    useEffect(() => {
        if (didMountRef.current) {
            console.log('updated app', namespaceState)
            if (namespaceState !== 'ANDROID_SETTINGS_APP2' || namespaceFound !== 'ANDROID_SETTINGS_APP2' ) {
                // check if there is dataStore namespaces
                // console.log(namespaceState, 'se encontro namespace')
                console.log('no hay namespace, crear name')
                //doMutation()
            }
            // if updateGlobal === true save data in dataStore
        } else {
            didMountRef.current = true
            // checkDataStoreNameSpace()
            console.log('mounted app', namespaceState)
        }
    })

    const checkDataStoreNameSpace = async () => {
        const { loading, error, data } = useDataQuery(query_dataStore)

        if (loading) {
            console.log('loading')
        } else if (error) {
            console.log('error', error)
        } else if (data) {
            console.log('data', data, data.data)
            await data
            namespaceFound = data.data.find(namespace => namespace == 'ANDROID_SETTINGS_APP2') //'ANDROID_SETTINGS_APP2' 'TEST_MILAGROS'
            await setNamespace(namespaceFound)
            console.log('found', namespaceFound, namespaceState)
        }
    }
    //checkDataStoreNameSpace()

    const doMutation = async () => {
        await mutateAndroid()
        await mutateProgram()
        await mutateDataSet()
    }   

    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <SideBar />
                    <MainContent />
                </div>
            </div>
        </Router>
    );
}

export default MyApp

// Grid container
 //<div className="container">
        {/* <style jsx>{`
            .container {
                position: absolute;
                top: 48px;
                bottom: 0px;
                left: 0px;
                right: 0px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
            }
        }`}</style> */}
        {/* <DataQuery query={query}>
            {({ error, loading, data }) => {
                if (error) return <span>ERROR</span>
                if (loading) return <span>...</span>
                return (
                    <>
                        <h1>
                            {i18n.t('Hello {{name}}', { name: data.me.name })}
                        </h1>
                        <h3>{i18n.t('Welcome to DHIS2!')}</h3>
                    </>
                )
            }}
        </DataQuery> */}
        {/* <SideBar />
        <MainContent />
    </div> */}