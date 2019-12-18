import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { Button } from '@dhis2/ui-core'

const TestAndroid = () => {
    return (
        <div>
            <p> {i18n.t('Test Android Login')} </p> 
            <p> {i18n.t('Enter a user to check access to')} </p> 

            <Button> {i18n.t('RUN TEST')}  </Button>
        </div>
    )
}

export default TestAndroid