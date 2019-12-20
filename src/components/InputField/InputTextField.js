import React from 'react'
import styles from '../styles/inputField.module.css';

/* const InputTextField = () => {
    console.log('input')
    return (
        <div className={styles.input_container}>
            <label className={styles.input_container_label}>
                <span> Hola </span>
            </label>
            <div className={styles.input_container_text}>
                <div className={styles.input_field_container}>
                    <input
                        name="hola"
                        type="text"
                        className={styles.input_field}
                        onChange={e => {
                            e.preventDefault()
                            console.log(e.target, e.target.value)
                        }} />
                </div>
            </div>
        </div>
    )
}
 */

const InputTextField = (inputData) => {
    console.log('input', inputData)
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
                        className={styles.input_field}
                        onChange={e => {
                            e.preventDefault()
                            console.log(e.target, e.target.value)
                        }} />
                </div>
            </div>
        </div>
    )
}

export default InputTextField