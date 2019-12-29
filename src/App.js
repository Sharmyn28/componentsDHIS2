import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import { BrowserRouter as Router } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/layout.css';

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp = () => {
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