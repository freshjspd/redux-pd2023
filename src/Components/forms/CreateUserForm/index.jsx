import React from 'react'
import {Formik, Form, Field} from 'formik';
import {CreateUser} from '../../../slices/userSlice';
import { connect } from 'react-redux';

function CreateUserForm(props) {
    const {createAction} = props;
    return (
        <>
            <h1>Create new user:</h1>
            <Formik
                initialValues={{
                    name: '',
                    surname: ''
                }}
                onSubmit={(values) => {createAction(values);}}
            >
            <Form>
                <label htmlFor="name">Name</label>
                <Field id="name" name="name" placeholder="name" type="text"/>
                <label htmlFor="surname">Surname</label>
                <Field id="surname" name="surname" placeholder="surname" type="text"/>
                <button type="submit">Ok</button>
            </Form>
            </Formik>
        </>
      )
}


const mapActions = (dispatch) => {
    return{
        createAction: (data) => dispatch(CreateUser(data)),
    }
  }
  
  const mapStates = (state) => state.userReducer;
  
  export default connect(mapStates, mapActions)(CreateUserForm);
