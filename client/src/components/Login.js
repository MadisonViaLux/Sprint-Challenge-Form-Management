import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
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

    validationSchema: Yup.object().shape({
        username: Yup.string()
        .min(5, 'Username must be above 5 characters')
        .max(25, 'Password must be under 25 characters')
        .required(),

        password: Yup.string()
        .min(8, 'Password must be above 8 characters')
        .required()
    })

})(Login)