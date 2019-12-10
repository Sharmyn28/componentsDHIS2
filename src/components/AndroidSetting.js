import React from 'react'

import i18n from '@dhis2/d2-i18n'
import { InputField, SingleSelectField, SingleSelectOption, RadioGroupField, Radio ,Button } from '@dhis2/ui-core'
import * as components from '@dhis2/ui-core'

/* import {
    metadataOptions } from '../constants/android-settings' */

import { metadataOptions } from '../constants/android-settings'

console.log('components', components)

const AndroidSetting = () => {

    return(
        <div>
            <SingleSelectField
                id="metadataSync"
                name="Metadata"
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

                {
                    metadataOptions.map(
                        option => 
                        (
                            <SingleSelectOption
                                key={option.value}
                                label={option.value}
                                value={option.value}
                            />
                        )
                    )
                }

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
            </SingleSelectField>

            <SingleSelectField
                id="dataSync"
                name="dataSync"
                label="Data Sync"
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
            </SingleSelectField>

            <InputField
                label="SMS Gateway Phone number where SMS are sent"
                id="numberSmsToSent"
                name="numberSmsToSent"
                onChange={e => console.log(e.value)}
            />
            <InputField
                id="numberSmsConfirmation"
                name="numberSmsConfirmation"
                label="Confirm SMS Gateway Phone number"
                onChange={e => console.log(e.value)}
            />
            <InputField
                id="valuesTEI"
                label="Reserved values downloaded per TEI attribute"
                name="valuesTEI"
                type="number"
                min="0"
                max="50"
                onChange={e => console.log(e)}
            />
            
            <div>
                {/* <RadioGroup 
                    inline
                    label="Encrypt"
                    name="encryptDB"
                    options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]}
                    onChange={e => console.log(e.target.value)}
                >
                </RadioGroup> */}

                <RadioGroupField
                    label="Encrypt"
                    name="encryptDB"
                    onChange={e => console.log(e)}
                    value="second"
                >
                    <Radio
                        label="Yes"
                        value="yes"
                    />
                    <Radio
                        label="No"
                        value="no"
                    />
                </RadioGroupField>

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