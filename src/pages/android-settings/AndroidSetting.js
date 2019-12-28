import React, { useState } from 'react'

import i18n from '@dhis2/d2-i18n'
import { useDataMutation } from '@dhis2/app-runtime'
import { InputField, SingleSelectField, SingleSelectOption, RadioGroupField, Radio ,Button } from '@dhis2/ui-core'

import { metadataOptions, dataOptions, androidSettingsDefault, maxValues } from '../../constants/android-settings'
import InputTextField from '../../components/InputField/InputTextField'
import InputNumberField from '../../components/InputField/InputNumberField';

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
    const [numberState, setNumber] = useState()
    const [numberConfirmationState, setNumberConfirmation] = useState()
    const [valueTEIState, setValueTEI] = useState()
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

    const handleChangeInput = e => {
        console.log('change input', e, e.target)
        let inputName
        let valueInput
        /* if (e.target) {
            inputName = e.target.name
        } else {
            inputName = e.name
        } */
        e.target ? inputName = e.target.name : inputName = e.name
        console.log('inputname', inputName)
        switch (inputName) {
            case 'numberSmsToSent':
                //e.preventDefault();
                setNumber(e.target.value)
                break;
            case 'numberSmsConfirmation':
                //e.preventDefault();
                setNumberConfirmation(e.target.value)
                break;
            case 'valuesTEI':
                e.preventDefault();
                valueInput = e.target.value
                e.target.value > maxValues.valuesTEI
                    ? (e.target.value = maxValues.valuesTEI)
                    : (e.target.value = valueInput)
                
                setValueTEI(e.target.value)
                break;
            case 'encryptDB':
                setEncrypt(e.value)
                break;
            default:
                break;
        }
        
    }

    const setDefaultState = () => {
        console.log('current', {
            metadata: metadataState,
            data: dataState,
            number: numberState,
            confirm: numberConfirmationState,
            values: valueTEIState,
            encrypt: encryptState
        })
        console.log('default', {
            metadata: androidSettingsDefault.metadataSync,
            data: androidSettingsDefault.dataSync,
            number: androidSettingsDefault.numberSmsToSent,
            confirm: androidSettingsDefault.numberSmsConfirmation,
            values: androidSettingsDefault.valuesTEI,
            encrypt: androidSettingsDefault.encryptDB
        })
    }

    return(
        <div>
            <SingleSelectField
                id="metadataSync"
                name="metadataSync"
                label={i18n.t("Metadata Sync")}
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
                label={i18n.t("Data Sync")}
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
            
            <InputTextField
                label={i18n.t("SMS Gateway Phone number where SMS are sent")}
                name="numberSmsToSent"
                length="9"
                value={numberState}
                onChange={handleChangeInput}
                id="numberSmsToSent"
            />

            <InputTextField
                label={i18n.t("Confirm SMS Gateway Phone number")}
                name="numberSmsConfirmation"
                length="9"
                value={numberConfirmationState}
                onChange={handleChangeInput}
                id="numberSmsConfirmation"
            />

            <InputNumberField
                label={i18n.t("Reserved values downloaded per TEI attribute")}
                name="valuesTEI"
                min="0"
                max={maxValues.valuesTEI}
                step="10"
                value={valueTEIState}
                onChange={handleChangeInput}
                id="valuesTEI"
            />
            
            <div>
                <RadioGroupField
                    label={i18n.t("Encrypt")}
                    name="encryptDB"
                    onChange={handleChangeInput}
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
                onClick={setDefaultState}
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
