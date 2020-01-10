import React from 'react';
import InputNumberField from '../../components/InputField/InputNumberField';
import InputTextField from '../../components/InputField/InputTextField';
import { SingleSelectField, SingleSelectOption, RadioGroupField, Radio, Button } from  '@dhis2/ui-core';
import i18n from '@dhis2/d2-i18n';

const Android = ({ handleSelectedMetadata, firstSelected, handleSelectedData, secondSelected, maxValues, inputValues, handleChangeInput, onBlur, error, handleSetDeffault, dataStoreValues }) => {
    //check if I can change the values dataStorevalues and inputvalues

    return (
        <div>
            <SingleSelectField
                id="metadataSync"
                name="metadataSync"
                label={i18n.t("Metadata Sync")}
                onChange={handleSelectedMetadata} //handleSelectedMetadata firstSelected.handleSelect
                selected={firstSelected.selected} //metadataState metadataOptions
            >
                {
                    firstSelected.options.map(
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
                onChange={handleSelectedData} //secondSelected.handleSelect  handleSelectedData
                selected={secondSelected.selected} //dataState dataOptions
            >
                {
                    secondSelected.options.map(option => (
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
                onBlur={onBlur} //checkMatchingConfirmation
                error={error}  //errorConfirmation
                id="numberSmsToSent"
            />

            <InputTextField
                label={i18n.t("Confirm SMS Gateway Phone number")}
                name="numberSmsConfirmation"
                length="9"
                value={inputValues.numberSmsConfirmation}
                onChange={handleChangeInput}
                onBlur={onBlur} //checkMatchingConfirmation
                error={error} // errorConfirmation
                id="numberSmsConfirmation"
            />

            <InputNumberField
                label={i18n.t("Reserved values downloaded per TEI attribute")}
                name="valuesTEI"
                max={maxValues.valuesTEI}
                min="0"
                step="10"
                value={inputValues.valuesTEI} // (dataStoreValues == undefined) ? inputValues.valuesTEI : dataStoreValues  (data.data.data.valuesTEI == undefined) ? inputValues.valuesTEI : data.data.data.valuesTEI
                onChange={handleChangeInput}
                id="valuesTEI"
            />

            <p>  max values {maxValues.valuesTEI} </p>
            <p> value {inputValues.valuesTEI}  </p>
            <p> dataStore {dataStoreValues} </p>

            
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


            <Button
                name="Button"
                onClick={handleSetDeffault} //handleSubmit setDefaultState
                primary
                type="button"
                value="default"
            >
                {i18n.t('SET TO DEFAULT')}
            </Button>

        </div>
    )
}

export default Android