import React from 'react'

import i18n from '@dhis2/d2-i18n'
import { Table, TableHead, TableRowHead, TableCellHead, TableBody, TableRow, TableCell } from '@dhis2/ui-core'

const SettingsTable = (tableData) => {
    console.log('props table data', tableData)
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