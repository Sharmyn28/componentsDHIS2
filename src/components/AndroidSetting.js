import React from 'react'
import i18n from '@dhis2/d2-i18n'
/* import {
  SingleSelectField,
  SingleSelectOption
} from "@dhis2/ui-core"; */

import { InputField, SelectField } from '@dhis2/ui-core'
// import { SingleSelectOption } from '@dhis2/ui-core/build/cjs/SingleSelectOption'

const AndroidSetting = () => {

    return(
        <div>
            {i18n.t('Android Settings')}

            <SelectField
                name="Metadata"
                label="Metadata Sync"
                onChange={function onChange(selected) { return alert("Selected changed to: ".concat(JSON.stringify(selected, null, 2))) }}
                option="1"
            >
            </SelectField>
            {/* <SingleSelectField
                label="Metadata Sync"
                onChange={function onChange(selected) { return alert("Selected changed to: ".concat(JSON.stringify(selected, null, 2))) }}
                selected={{
                    label: 'one',
                    value: '1'
                }}
            >
                <SingleSelectOption
                    label="one"
                    value="1"
                />
                <SingleSelectOption
                    label="two"
                    value="2"
                />
                <SingleSelectOption
                    label="three"
                    value="3"
                />
                <SingleSelectOption
                    label="four"
                    value="4"
                />
            </SingleSelectField> */}
            <InputField
                label="Search"
                name="search"
                value="1"
                placeholder="Search..."
                onChange={e => setValue(e.target.value)}
            />
        </div>
    )
}

export default AndroidSetting

{/* <Card styles={styles.paperLayout}>
    
    {i18n.t('Android')}
    {loading && <span> ... </span>}
    {error && <span> {`ERROR: ${error.message}`} </span>}
    {data &&
        (
            <pre>
                {data.users.users.map(user => user.name).join('\n')}
            </pre>
        )
    }
</Card> */}