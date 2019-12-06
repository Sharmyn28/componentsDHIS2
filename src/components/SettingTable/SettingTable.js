import React from 'react'

import i18n from '@dhis2/d2-i18n'
import { Table, TableHead, TableRowHead, TableCellHead, TableBody, TableRow, TableCell } from '@dhis2/ui-core'

const SettingsTable = (tableData) => {
    
    return (
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead>

                    </TableCellHead>
                    <TableCellHead>
                        {i18n.t('Download')}
                    </TableCellHead>
                    <TableCellHead>
                        {i18n.t('DB Trimming')}
                    </TableCellHead>
                </TableRowHead>
            </TableHead>
            <TableBody>
                {
                    tableData.tableData.map(row => (
                        <TableRow key={row.option}>
                            <TableCell>
                                {i18n.t(row.option)}
                            </TableCell>
                            <TableCell>
                                {i18n.t('Download')}
                            </TableCell>
                            <TableCell>
                                {i18n.t('DB Trimming')}
                            </TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>
    )
}

export default SettingsTable

    /* < TableRow >
    <TableCell>
        Amaka
                    </TableCell>
    <TableCell>
        Pretorius
                    </TableCell>
    <TableCell>
        01/25/1996
                    </TableCell>
                </TableRow >
    <TableRow>
        <TableCell>
            Meti
                    </TableCell>
        <TableCell>
            Abiodun
                    </TableCell>
        <TableCell>
            10/24/2010
                    </TableCell>
    </TableRow>
    <TableRow>
        <TableCell>
            Eshe
                    </TableCell>
        <TableCell>
            Okeke
                    </TableCell>
        <TableCell>
            01/31/1995
                    </TableCell>
    </TableRow> */