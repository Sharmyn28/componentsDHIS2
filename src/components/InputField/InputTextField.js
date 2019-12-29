import React from 'react'
import styles from '../styles/inputField.module.css';
import PropTypes from '@dhis2/prop-types';

/* const InputTextField = (inputData) => {
    return (
        <div className={styles.input_container}>
            <label className={styles.input_container_label}>
                <span> {inputData.label} </span>
            </label>
            <div className={styles.input_container_text}>
                <div className={styles.input_field_container}>
                    <input
                        name={inputData.name}
                        maxLength={inputData.length}
                        className={inputData.error ? styles.input_error + ' ' + styles.input_field : styles.input_field}
                        value={inputData.value}
                        onChange={inputData.onChange}
                        onBlur = {inputData.onBlur}
                    />
                </div>
            </div>
        </div>
    )
} */

const InputTextField = ({ label, name, length, value, onChange, onBlur, error }) => {
    console.log({ label: label, name: name, length: length, value: value, onChange: onChange, onBlur: onBlur, error })
    return (
        <div className={styles.input_container}>
            <label className={styles.input_container_label}>
                <span> {label} </span>
            </label>
            <div className={styles.input_container_text}>
                <div className={styles.input_field_container}>
                    <input
                        name={name}
                        maxLength={length}
                        className={error ? styles.input_error + ' ' + styles.input_field : styles.input_field}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                </div>
            </div>
        </div>
    )
}

InputTextField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
    length: PropTypes.string,
    onBlur: PropTypes.func,
}


export default InputTextField
