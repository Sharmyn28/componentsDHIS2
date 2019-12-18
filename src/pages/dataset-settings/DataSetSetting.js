import React from 'react'

import i18n from '@dhis2/d2-i18n'
import { DataSetting } from '../../constants/data-set-settings'
import SettingsPage from '../SettingsPage'
// SpecificProgram, maxValues, ProgramSettingsDefault

const DataSetSetting = () => {
    console.log('program s', DataSetting)
    return (
        <div>
            <p>{i18n.t('Data set Settings')}</p>

            <SettingsPage
                settingsType="Data set"
                tableData={DataSetting}
            />
        </div>
    )
}

export default DataSetSetting