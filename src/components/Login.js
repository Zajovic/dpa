import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import '../css/scss/components/_login.scss';


const Login = ({ errors, touched }) => {
    return (
        <div className="login-box">
            <Link to="/signup">
                <span><a>Registration</a></span>
            </Link>
            <Form>
                <div>
                    {touched.email && errors.email && <span>{errors.email}</span>}
                    <Field type="email" name="email" className="bp3-input" placeholder="Enter your email..." />
                </div>
                <div>
                    {touched.email && errors.password && <span>{errors.password}</span>}
                    <Field type="password" name="password" className="bp3-input" placeholder="Enter your password..." />
                </div>
                <div>
                    <button type="submit" className="bp3-button .modifier"> Log in</button>
                </div>
            </Form>
        </div >
    )
}

const FormikLogin = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Potrebno je uneti email formu').matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g , 'Is not in correct format').required('Polje je obavezno'),
        password: Yup.string().min(8, 'Neophodno je uneti 8 karaktera').required('Polje je obavezno')
    }),
    handleSubmit(values, { setErrors, setSubmitting, resetForm }) {
        setTimeout(() => {
            if (values.email !== 'milos@gmial.com' || values.password !== 'milos1234') {
                setErrors({ email: 'Wrong email or password' });
            } else {
                resetForm();
            }
            setSubmitting(false);
        }, 2000)
        console.log(values.email, values.password);
    }
})(Login);

export default FormikLogin;