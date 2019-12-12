import React from 'react'

import i18n from '@dhis2/d2-i18n'
// import SettingsTable from '../../components/SettingTable/SettingTable'
import { Program } from '../../constants/program-settings'
import SettingsPage from '../SettingsPage'
// SpecificProgram, maxValues, ProgramSettingsDefault

const ProgramSetting = () => {
    console.log('program s', Program)
    return(
        <div>
            <p>{i18n.t('Program Settings')}</p>

            {/* <SettingsTable
                settingsType="Program"
                tableData={Program}
            /> */}
            
            <SettingsPage
                settingsType="Program"
                tableData={Program}
            />
        </div>
    )
}

export default ProgramSetting