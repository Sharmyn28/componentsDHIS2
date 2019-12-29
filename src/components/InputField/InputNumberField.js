import React from 'react'
import styles from '../styles/inputField.module.css';
import PropTypes from '@dhis2/prop-types';

const InputNumberField = ({ label, name, max, min, step, value, onChange }) => {
    return (
        <div className={styles.input_container}>
            <label className={styles.input_container_label}>
                <span> {label} </span>
            </label>
            <div className={styles.input_container_text}>
                <div className={styles.input_field_container}>
                    <input
                        type="number"
                        name={name}
                        max={max}
                        min={min}
                        step={step}
                        value={value}
                        className={styles.input_field}
                        onChange={onChange} />
                </div>
            </div>
        </div>
    )
}

InputNumberField.propTypes = {
    label: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired,
    value: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default InputNumberField
