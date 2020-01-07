import React, { useState, useEffect, useRef } from 'react'

import i18n from '@dhis2/d2-i18n'
import { useDataMutation } from '@dhis2/app-runtime'
import { SingleSelectField, SingleSelectOption, RadioGroupField, Radio ,Button } from '@dhis2/ui-core'

import { android_setting_mutation } from '../../constants/mutation-datastore';
import { metadataOptions, dataOptions, androidSettingsDefault, maxValues } from '../../constants/android-settings'
import InputTextField from '../../components/InputField/InputTextField'
import InputNumberField from '../../components/InputField/InputNumberField';

const AndroidSetting = () => {
    const didMountRef = useRef(false)

    const [metadataState, setMetadata] = useState(androidSettingsDefault.metadataSync)
    const [dataState, setData] = useState(androidSettingsDefault.dataSync)
    const [inputValues, setInputValues] = useState({
        metadataSync: androidSettingsDefault.metadataSync.value,
        dataSync: androidSettingsDefault.dataSync.value,
        numberSmsToSent: '',
        numberSmsConfirmation: '',
        valuesTEI: '',
        encryptDB: androidSettingsDefault.encryptDB
    })
    const [ updateGlobal, setUpdateGlobal ] = useState(false)
    const [ errorConfirmation, setErrorConfirmation ] = useState(false)
    const [ mutateAndroid ] = useDataMutation(android_setting_mutation.update)

    useEffect(() => {
        if (didMountRef.current) {
            console.log('updated', updateGlobal, inputValues)
            if (updateGlobal) {
                submitData()
                setUpdateGlobal(false)
            }
            
            // if updateGlobal === true save data in dataStore
        } else {
            didMountRef.current = true
            console.log('mounted?', updateGlobal)
            //doMutation()
        }
    })

    const handleSelectedMetadata = e => {
        //e.preventDefault()
        console.log(e)
        setMetadata(e.selected)
        setInputValues({ ...inputValues, metadataSync: e.selected.value });
        setUpdateGlobal(true)
    }

    const handleSelectedData = e => {
        //e.preventDefault()
        console.log(e)
        setData(e.selected)
        setInputValues({ ...inputValues, dataSync: e.selected.value });
        setUpdateGlobal(true)
    }


    /**
    * Handle change input number and text and radio types
    */
    const handleChangeInput = e => {
        if (e.target) {
            console.log(e.target.name, e.target.value)
            const valueInput = e.target.value
            if (e.target.name === 'valuesTEI') {
                e.target.value > maxValues.valuesTEI
                    ? (e.target.value = maxValues.valuesTEI)
                    : (e.target.value = valueInput)
            }
            const { name, value } = e.target;
            setInputValues({ ...inputValues, [name]: value });
        } else {
            const { name, value } = e
            setInputValues({ ...inputValues, [name]: value });
        }

        setUpdateGlobal(true)
        
    }

    /**
    * Updates Settings calling update api
    */
    const submitData = () => {
        const androidData = inputValues
        androidData.lastUpdated = new Date().toJSON()
        saveDataApi(androidData)
        console.log('submit data', androidData)
    }

    const saveDataApi = async (data) => {
        // save data in datastore
        await mutateAndroid({
            id: 'android_settings',
            data : data
        })
    }

    /**
     * Checks if sms number and confirm number match
     */
    const checkMatchingConfirmation = () => {
        if (
            inputValues.numberSmsToSent !== '' &&
            inputValues.numberSmsConfirmation !== ''
        ) {
            inputValues.numberSmsToSent !== inputValues.numberSmsConfirmation
                ? setErrorConfirmation(true) 
                : setErrorConfirmation(false)
            console.log('cambiar', errorConfirmation)
        } 
        console.log(inputValues.numberSmsConfirmation, inputValues.numberSmsToSent)
    }

    const setDefaultState = () => {
        console.log('default', {
            metadata: androidSettingsDefault.metadataSync,
            data: androidSettingsDefault.dataSync,
            number: androidSettingsDefault.numberSmsToSent,
            confirm: androidSettingsDefault.numberSmsConfirmation,
            values: androidSettingsDefault.valuesTEI,
            encrypt: androidSettingsDefault.encryptDB
        })
        const androidDataDefault = {
            metadataSync: androidSettingsDefault.metadataSync.value,
            dataSync: androidSettingsDefault.dataSync.value,
            numberSmsToSent: androidSettingsDefault.numberSmsToSent,
            numberSmsConfirmation: androidSettingsDefault.numberSmsConfirmation,
            valuesTEI: androidSettingsDefault.valuesTEI,
            encryptDB: androidSettingsDefault.encryptDB
        }
        androidDataDefault.lastUpdated = new Date().toJSON()
        console.log('submit default data', androidDataDefault)
        saveDataApi(androidDataDefault)
        setUpdateGlobal(true)
    }

    return(
        <div>
            <SingleSelectField
                id="metadataSync"
                name="metadataSync"
                label={i18n.t("Metadata Sync")}
                onChange={handleSelectedMetadata}
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
                onChange={ handleSelectedData }
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
                value={inputValues.numberSmsToSent}
                onChange={handleChangeInput}
                onBlur={checkMatchingConfirmation}
                error={errorConfirmation}
                id="numberSmsToSent"
            />

            <InputTextField
                label={i18n.t("Confirm SMS Gateway Phone number")}
                name="numberSmsConfirmation"
                length="9"
                value={inputValues.numberSmsConfirmation}
                onChange={handleChangeInput}
                onBlur={checkMatchingConfirmation}
                error={errorConfirmation}
                id="numberSmsConfirmation"
            />

            <InputNumberField
                label={i18n.t("Reserved values downloaded per TEI attribute")}
                name="valuesTEI"
                max={maxValues.valuesTEI}
                min="0"
                step="10"
                value={inputValues.valuesTEI}
                onChange={handleChangeInput}
                id="valuesTEI"
            />
            
            <div>
                <RadioGroupField
                    label={i18n.t("Encrypt")}
                    name="encryptDB"
                    onChange={handleChangeInput}
                    value={inputValues.encryptDB}
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
