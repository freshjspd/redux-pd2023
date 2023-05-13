import React from 'react';
import {Formik, Form, Field} from 'formik';

export default function LoginForm(props) {
  return (
    <>
        <h1>SignIn</h1>
        <Formik
            initialValues={{
                login: '',
                password: ''
            }}
            onSubmit={async(values) => {
                await new Promise((res) => setTimeout(res, 1000));
                alert(JSON.stringify(values, null, 2));                   
            }}
        >
        <Form>
            <label htmlFor="login">Login</label>
            <Field id="login" name="login" placeholder="login" type="text"/>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" placeholder="password" type="password"/>
            <button type="submit">Ok</button>
        </Form>
        </Formik>
    </>
  )
};
