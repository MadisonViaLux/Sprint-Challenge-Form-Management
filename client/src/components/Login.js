import React from "react";
import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
// import {axiosAuth} from './axiosAuth';


function Login ({touched, errors, isSubmitting}){

    return(
        <Form>
            <div>
                <label>User's Name</label>

                <Field 
                name='username'
                placeholder='Name'
                type='text'
                autoComplete='off' 
                />

                <h3>{touched.username && errors.username}</h3>
            </div>

            <div>
                <label>User's Password</label>

                <Field 
                name='password'
                placeholder='password'
                type='password'
                autoComplete='off' 
                />

                <h3>{touched.password && errors.password}</h3>
            </div>

        </Form>
    )
}


export default withFormik({

    mapPropsToValues(){
        return{
            username: 'Name',
            password: 'Password'
        }
    },



})(Login)