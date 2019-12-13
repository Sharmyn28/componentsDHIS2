import React, { useState } from 'react'

import i18n from '@dhis2/d2-i18n'
import { useDataMutation } from '@dhis2/app-runtime'
import { InputField, SingleSelectField, SingleSelectOption, RadioGroupField, Radio ,Button } from '@dhis2/ui-core'
import * as components from '@dhis2/ui-core'

import { metadataOptions, dataOptions, androidSettingsDefault } from '../../constants/android-settings'

console.log('components', components)

const mutation = {
    type: "create",
    resource: "dataStore/TEST_MILAGROS/test_m",
    data: {
        prueba: "prueba"
    }
}




const AndroidSetting = () => {
    const [metadataState, setMetadata] = useState(androidSettingsDefault.metadataSync)
    const [dataState, setData] = useState(androidSettingsDefault.dataSync)
    const [encryptState, setEncrypt] = useState(androidSettingsDefault.encryptDB)
    /* const testFunction = (mutationParam) => {
        const [mutate] = useDataMutation(mutationParam)


        console.log('mutation', mutation)
    }
    
    testFunction(mutation) */

    const handleChange = e => {
        //e.preventDefault()
        /* if (e.target.name === 'valuesTEI') {
            const valueInput = e.target.value
            e.target.value > maxValues.valuesTEI
                ? (e.target.value = maxValues.valuesTEI)
                : (e.target.value = valueInput)
        }
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
        this.updateGlobal = true */
        console.log(e)
        setMetadata(e.selected)
    }

    return(
        <div>
            <SingleSelectField
                id="metadataSync"
                name="Metadata"
                label="Metadata Sync"
                onChange={handleChange}
                selected={metadataState}
            >
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
            </SingleSelectField>

            <SingleSelectField
                id="dataSync"
                name="dataSync"
                label="Data Sync"
                onChange={ e => { setData(e.selected) } }
                selected={dataState}
            >   
                {
                    dataOptions.map( option => (
                            <SingleSelectOption
                                key={option.value}
                                label={option.label}
                                value={option.value}
                            />
                        )
                    )
                }
            </SingleSelectField>

            <InputField
                label="SMS Gateway Phone number where SMS are sent"
                id="numberSmsToSent"
                name="numberSmsToSent"
                onChange={e => setEncrypt(e.value)}
            />
            <InputField
                id="numberSmsConfirmation"
                name="numberSmsConfirmation"
                label="Confirm SMS Gateway Phone number"
                onChange={e => console.log(e, e.value)}
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
                    value={encryptState}
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
