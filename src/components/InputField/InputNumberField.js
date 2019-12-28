import React from 'react'
import styles from '../styles/inputField.module.css';

const InputNumberField = (inputData) => {
    return (
        <div className={styles.input_container}>
            <label className={styles.input_container_label}>
                <span> {inputData.label} </span>
            </label>
            <div className={styles.input_container_text}>
                <div className={styles.input_field_container}>
                    <input
                        type="number"
                        name={inputData.name}
                        max={inputData.max}
                        min={inputData.min}
                        step={inputData.step}
                        value={inputData.value}
                        className={styles.input_field}
                        onChange={inputData.onChange} />
                </div>
            </div>
        </div>
    )
}

export default InputNumberField

/* e => {
    e.preventDefault()
    console.log(e.target, e.target.value)
} */