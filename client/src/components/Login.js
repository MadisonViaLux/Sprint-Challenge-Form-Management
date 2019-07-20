import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosAuth } from "./axiosAuth";


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

            <div>
                <button>Login</button>
                {isSubmitting && 'Loading Login'}
            </div>

            

        </Form>
    )
}


export default withFormik({

    mapPropsToValues(){
        return{
            username: 'username',
            password: '123456789'
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
        .max(25, 'Password must be under 25 characters')
        .required(),

        password: Yup.string()
        .min(4, 'Password must be above 4 characters')
        .required()
    }),

    handleSubmit(values, formikBag){
        console.log(values)

        const url='/register'

        return axiosAuth().post(url, values).then(res => {
            console.log(res)

            localStorage.setItem('token', res.data.token);
            formikBag.resetForm();
            formikBag.props.history.push('')
        })
    }

})(Login)