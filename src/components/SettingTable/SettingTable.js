import React from 'react'

import i18n from '@dhis2/d2-i18n'
import { Table, TableHead, TableRowHead, TableCellHead, TableBody, TableRow, TableCell, SingleSelectField, SingleSelectOption } from '@dhis2/ui-core'
import { InputField } from '@dhis2/ui-core/build/cjs/InputField'

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
                                {Array.isArray(row.download) === true ? (
                                        <SingleSelectField
                                            key={row.keyDownload}
                                            onChange={e=> console.log(e)}
                                            id={row.keyDownload}
                                            name={row.keyDownload}
                                            inputWidth="200px"
                                        >
                                            {row.download.map(option => (
                                                <SingleSelectOption
                                                    key={option.value}
                                                    name={option.value}
                                                    value={option.value}
                                                    label={i18n.t(option.label)}
                                                />
                                            ))}
                                        </SingleSelectField>
                                    ) : (
                                        <InputField
                                            id={row.keyDownload}
                                            name={row.keyDownload}
                                            onChange={e=> console.log(e)}
                                            inputWidth="200px"
                                        />
                                    ) 
                                }
                                {/* {i18n.t('Download')} */}
                            </TableCell>
                            <TableCell>
                                {Array.isArray(row.DBTrimming) === true ? (
                                    <SingleSelectField
                                        key={row.keyDBTrimming}
                                        onChange={e => console.log(e)}
                                        id={row.keyDBTrimming}
                                        name={row.keyDBTrimming}
                                        inputWidth="200px"
                                    >
                                        {row.DBTrimming.map(option => (
                                            <SingleSelectOption
                                                key={option.value}
                                                name={option.value}
                                                value={option.value}
                                                label={i18n.t(option.label)}
                                            />
                                        ))}
                                    </SingleSelectField>
                                ) : (
                                        <InputField
                                            id={row.keyDBTrimming}
                                            name={row.keyDBTrimming}
                                            onChange={e => console.log(e)}
                                            inputWidth="200px"
                                        />
                                    )
                                }
                                {/* {i18n.t('DB Trimming')} */}
                            </TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>
    )
}

export default SettingsTable