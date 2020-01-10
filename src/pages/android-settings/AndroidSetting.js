import React, { useState, useEffect, useRef } from 'react'

import i18n from '@dhis2/d2-i18n'
import { useDataMutation, useDataQuery } from '@dhis2/app-runtime'
import { SingleSelectField, SingleSelectOption, RadioGroupField, Radio ,Button } from '@dhis2/ui-core'

import { android_setting_mutation } from '../../constants/mutation-datastore';
import { metadataOptions, dataOptions, androidSettingsDefault, maxValues } from '../../constants/android-settings'
import InputTextField from '../../components/InputField/InputTextField'
import InputNumberField from '../../components/InputField/InputNumberField';
import Android from './AndroidS';

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
    const [ updateDataStore, setUpdateStore ] = useState(false)
    const [ errorConfirmation, setErrorConfirmation ] = useState(false)
    const [ mutateAndroid ] = useDataMutation(android_setting_mutation.update)
    const { loading, error, data } = useDataQuery(android_setting_mutation.get)
    let firstSelect = {
        selected: metadataState,
        options: metadataOptions,
        handleSelect: handleSelectedMetadata
    }

    let secondSelect = {
        selected: dataState,
        options: dataOptions,
        handleSelect: handleSelectedData
    }

    useEffect(() => {
        if (didMountRef.current) {
            console.log ('updated state')

            if (updateDataStore) {
                if (loading) {
                    console.log('loading')
                } else if (error) {
                    console.log('error', error)
                } else if (data) {
                    console.log('updated state', updateGlobal, inputValues)
                    console.log('data', data, data.data, inputValues, data.data.valuesTEI, data.valuesTEI, data.data.data.valuesTEI)
                    createB(data.data.data)
                    //setInputValues({ valuesTEI: data.data.valuesTEI})
                    setUpdateStore(false)
                    console.log('datastore', inputValues)
                    //setUpdateGlobal(false)
                }
            } else if (updateGlobal) {
                console.log('submit in dataStore', updateGlobal, inputValues)
                submitData()
                setUpdateGlobal(false)
            } 
            // if updateGlobal === true save data in dataStore
        } else {
            didMountRef.current = true
            console.log('mounted?', updateGlobal)
            if (loading) {
                console.log('loading')
                setUpdateStore(true)
            }
        }
    })

    const createB = (data) => {
        const metadataV = {
            value: data.metadataSync,
            label: data.metadataSync
        }
        const dataV = {
            value: data.dataSync,
            label: data.dataSync
        }
        setMetadata(metadataV)
        setData(dataV)
        setInputValues({ 
            metadataSync: data.metadataSync,
            dataSync: data.dataSync,
            numberSmsToSent: data.numberSmsToSent,
            numberSmsConfirmation: data.numberSmsConfirmation,
            valuesTEI: data.valuesTEI,
            encryptDB: data.encryptDB
        })
        //setUpdateStore(false)
        //setUpdateGlobal(false)
        console.log('update input values with data store', inputValues);
        
    }

    const handleSelectedMetadata = e => {
        //e.preventDefault()
        console.log('change metadata', e)
        setMetadata(e.selected)
        setInputValues({ ...inputValues, metadataSync: e.selected.value });
        setUpdateGlobal(true)
    }

    const handleSelectedData = e => {
        //e.preventDefault()
        console.log('change data', e)
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
        setInputValues(androidDataDefault)
        setUpdateGlobal(true)
    }

    if (loading) {
        return (
           <p> loading ... </p> 
        )
    } 
    
    return (
            <div>
                {/* <SingleSelectField
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
                    onChange={handleSelectedData}
                    selected={dataState}
                >
                    {
                        dataOptions.map(option => (
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
                    value={(data.data.data.valuesTEI == undefined) ? inputValues.valuesTEI : data.data.data.valuesTEI}
                    onChange={handleChangeInput}
                    id="valuesTEI"
                />

                <p>  p {data.data.data.valuesTEI} </p>

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
                </Button> */}
                <Android
                    handleSelectedMetadata= {handleSelectedMetadata}
                    firstSelected= {firstSelect}
                    //firstSelected={{ selected: metadataState, options: metadataOptions}} 
                    handleSelectedData= {handleSelectedData}
                    secondSelected= {secondSelect}
                    //secondSelected={{ selected: dataState, options: dataOptions }}
                    maxValues= {maxValues}
                    inputValues= {inputValues}
                    handleChangeInput= {handleChangeInput}
                    onBlur={checkMatchingConfirmation}
                    error={errorConfirmation}
                    handleSetDeffault= {setDefaultState}
                    dataStoreValues={data.data.data.valuesTEI}
            />
            </div>
        )
}

export default AndroidSetting
