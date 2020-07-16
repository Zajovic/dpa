import React, { useState } from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import '../css/scss/components/_signup.scss';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const SignUp = () => {

    const [date, setDate] = useState(new Date());
    const handleChange = (date) => {
        return setDate(date)
    };

    const handleImage = (e) => {
        return (
            e.currentTarget.files[0]
        )
    }
    console.log({ handleImage });

    return (
        <div className="sign-up-box">
            <h2>Sign Up</h2>
            <Form>
                <div>
                    <Field type="text" name="firstName" className="bp3-input" placeholder="Enter your first name..." />
                    <Field type="text" name="surName" className="bp3-input" placeholder="Enter your surname..." />
                </div>
                <div>
                    <Field type="email" name="email" className="bp3-input" placeholder="Enter your email..." />
                    <div>
                        <Field type="password" name="password" className="bp3-input" placeholder="Enter your password..." />
                        <Field type="password" name="repeatPassword" className="bp3-input" placeholder="Repeat your password..." />
                    </div>
                </div>
                <div className="bp3-select .modifier">
                    <Field component="select" name="gender">
                        <option defaultValue>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="none">Prefer not to say</option>
                    </Field>
                </div>
                <div>
                    <label className="bp3-file-input .modifier">
                        <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg,image/png2" onChange={handleImage} />
                        <span className="bp3-file-upload-input">Choose the profile photo...</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="bDay">Birthday</label><DatePicker selected={date} onChange={handleChange} name="bDay" />
                </div>
                <div>
                    <button type="submit" className="bp3-button .modifier">Sign Up</button>
                </div>
            </Form>
        </div >
    )
}


const FormikSignUp = withFormik({
    mapPropsToValues({ email, password, firstName, surName, gender, bDay, image }) {
        return {
            email: email || '',
            password: password || '',
            firstName: firstName || '',
            surName: surName || '',
            gender: gender || '',
            bDay: bDay || '',
            image: image || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
        firstName: Yup.string().min(2).max(20).required(),
        surName: Yup.string().min(2).max(20).required(),
        gender: Yup.string().required()
    }),
    handleSubmit(values, { setErrors, setSubmitting, resetForm }) {
        setTimeout(() => {
            console.log(values.firstName, values.surName, values.email, values.password, values.gender, values.image);
            resetForm();
            setSubmitting(false);
        }, 2000);
    }
})(SignUp);


export default FormikSignUp;