import React from 'react'

import i18n from '@dhis2/d2-i18n'
import { InputField, SelectField, RadioGroup, Button } from '@dhis2/ui-core'
import * as components from '@dhis2/ui-core'
import { Select } from '@dhis2/ui-core/build/cjs/Select'
// import { Select } from '@dhis2/ui-core/build/cjs/Select'
//import moduleName from '@dhis2/ui-core/build/cjs/SingleSelect'
// import { SingleSelectOption } from '@dhis2/ui-core/build/cjs/SingleSelectOption'

console.log('components', components)

const AndroidSetting = () => {

    return(
        <div>
            {/* Selected need option */}
            <SelectField
                id="metadataSync"
                name="Metadata"
                label="Metadata Sync"
                onChange={e => console.log(e.target)}
                selected={{
                    label: 'one',
                    value: '1'
                }}
            >
            </SelectField>

            <SelectField
                id="dataSync"
                name="dataSync"
                label="Data Sync"
                onChange={e => console.log(e.target)}
                selected={{
                    label: 'one',
                    value: '1'
                }}
            >
            </SelectField>

            <InputField
                inputWidth="220px"
                label="SMS Gateway Phone number where SMS are sent"
                id="numberSmsToSent"
                name="numberSmsToSent"
                onChange={e => console.log(e.target.value)}
            />
            <InputField
                inputWidth="220px"
                id="numberSmsConfirmation"
                name="numberSmsConfirmation"
                label="Confirm SMS Gateway Phone number"
                onChange={e => console.log(e.target.value)}
            />
            <InputField
                inputWidth="220px"
                id="valuesTEI"
                label="Reserved values downloaded per TEI attribute"
                name="valuesTEI"
                type="number"
                min="0"
                max="50"
                onChange={e => console.log(e.target.value)}
            />
            
            <div>
                <RadioGroup 
                    inline
                    label="Encrypt"
                    name="encryptDB"
                    options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]}
                    onChange={e => console.log(e.target.value)}
                >
                </RadioGroup>
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