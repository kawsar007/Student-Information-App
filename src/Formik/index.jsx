import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
       .min(2, 'Too Short!')
       .max(20, 'Too Long!')
       .required('Required')
});

const FormikForm = () => (
    <div>
        <h1>Sign Up</h1>
        <Formik 
           initialValues={{
               name: '',
               dept: ''
           }}
           enableReinitialize = {true}
           validationSchema={SignupSchema}
           onSubmit={ values => {
               console.log(values);
           }}
        >
        {({values, handleChange, handleSubmit, errors, touched }) => (
            <Form>
                <Field name="name" className="form-control mb-2" placeholder="Enter Your Name"/>
                {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                ) : null }
                <ErrorMessage name="name" />
                <Field type="email"  className="form-control mb-2" name="email" placeholder="Email"/>
                {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                ) : null}
                <ErrorMessage name="email"/>
                <Field name="department" className="form-control mb-2" as="select" placeholder="Enter Your Department">
                    <option>Select Dept</option>
                    <option value="CSE">CSE</option>
                    <option value="EEE">EEE</option>
                    <option value="CMS">CMS</option>
                </Field><hr/>

                <button className="btn btn-primary btn-sm mr-2" type="submit">Submit</button>
                <button className="btn btn-danger btn-sm" type="reset">Reset</button>
            </Form>
        )}
        </Formik>
    </div>
)
 
export default FormikForm;