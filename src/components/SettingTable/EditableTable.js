// should add Column call Actions where I'll put edit and delete
import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { Table, TableHead, TableRowHead, TableCellHead, TableBody, TableRow, TableCell } from '@dhis2/ui-core'

const EditableTable = (tableData) => {
    return(
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead>
                        {i18n.t('settingsType')}
                        {i18n.t('name')}
                    </TableCellHead>
                    <TableCellHead>
                        {i18n.t('Settings Summary')}
                    </TableCellHead>
                    <TableCellHead>
                        
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
                                {i18n.t('Settings Summary')}
                            </TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>
    )
}

export default EditableTable