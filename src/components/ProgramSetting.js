import React from 'react'

import i18n from '@dhis2/d2-i18n'
// import { Table, TableHead, TableRowHead, TableCellHead, TableBody, TableRow, TableCell } from '@dhis2/ui-core'
import SettingsTable from './SettingTable/SettingTable'
import { Program, SpecificProgram, maxValues, ProgramSettingsDefault } from '../constants/program-settings'

const ProgramSettings = () => {
    return(
        <div>
            <p>{i18n.t('Program Settings')}</p>

            <SettingsTable 
                tableData={Program}
            />
            
        </div>
    )
}

export default ProgramSettings