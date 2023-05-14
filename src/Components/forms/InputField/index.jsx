import React from 'react';
import {Field, ErrorMessage} from 'formik';
import styles from './InputField.module.css';

export default function InputField(props) {
  const {name, ...rest} = props;
  return (
    <div className={styles.container}>
        <Field name={name} className={styles.container2}>
            {({field, form, meta}) => {
                return <input {...field} {...rest} />;
            }}
        </Field>
        <ErrorMessage name={name} component="div" />
    </div>
  )
}
