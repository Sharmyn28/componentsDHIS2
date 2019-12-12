import React from 'react'

import i18n from '@dhis2/d2-i18n'
import { Button } from '@dhis2/ui-core'
import SettingsTable from '../components/SettingTable/SettingTable'

const SettingsPage = (settingsType) => {
    console.log('props page', settingsType)
    return (
        <div>
            <div>
                <p> {i18n.t(settingsType.settingsType)}
                    {i18n.t('s Global Settings')}
                </p>
                
                <p>
                    {/* style={style.mainContent__subtitle} */}
                    {/* className="main-content__title main-content__subtitle" */}
                    {i18n.t('Applies to all ')}
                    {i18n.t(settingsType.settingsType)}
                    {i18n.t('s that an Android user has access to, unless an specific set of values has been configured for a ')}
                    {i18n.t(settingsType.settingsType)}
                    {i18n.t(' see below')}
                </p>


                <SettingsTable
                    tableData={settingsType.tableData}
                />
            </div>
            
            <div>
                <p> {i18n.t(settingsType.settingsType)} 
                    {i18n.t('s Specific Settings')}
                </p>
                <p>
                    {/* style={style.mainContent__subtitle} */}
                    {/* className="main-content__title main-content__subtitle" */}
                    {i18n.t(settingsType.settingsType)}
                    {i18n.t('s settings listed below overwrite the global settings above')}
                </p>

                {/* Table for specific Settings with actions */}
            </div>

            <Button
                name="Button"
                onClick={function () { console.log("default") }}
                primary
                type="button"
                value="default"
            >
                {i18n.t('SET TO DEFAULT')}
            </Button>
        </div>
    )
}

export default SettingsPage