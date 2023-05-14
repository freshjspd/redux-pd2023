import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import InputField from '../InputField';
import VSLoginUser from '../../validate/VSLoginUser';

const SignInForm = (props) => {
  return (
    <>
        <h1>SignIn Form</h1>
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={VSLoginUser}
            onSubmit={(values, bag) => {
                console.log('values:', values);
                bag.resetForm();
            }}
        >
        <Form>
            <label htmlFor="email">Email</label>
            <InputField name="email" id="email" type="email" placeholder="email" />

            <label htmlFor="password">Password</label>
            <InputField name="password" id="password" placeholder="password" type="password"/>
            
            <button type="submit">Ok</button>
        </Form>

        </Formik>
    </>
  )
};

export default SignInForm;
