import React, { Component } from 'react';
// import FormikForm from '../../Formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
       .min(2, 'Too Short!')
       .max(20, 'Too Long!')
       .required('Required')
});

class StudentForm extends Component {
    state = { 
        name: '',
        dept: ''
     }


    render() { 
        const {isEditable, editableStudent} = this.props;

        const initialValues = {name: '', dept: ''};
        if(isEditable) {
            initialValues.name = editableStudent.name;
            initialValues.dept = editableStudent.dept;
        }

        return ( 
            <div>
                {isEditable ? (<h4>Update Student</h4>) : (<h4>Create Student</h4>)}
        <Formik 
           initialValues={{
               name: '',
               dept: ''
           }}
           enableReinitialize = {true}
           validationSchema={SignupSchema}
           onSubmit={ (values, formikBag) => {
               if(isEditable) {
                   this.props.updateStudent(values, editableStudent.id)
               } else {
                   this.props.createStudent(values)
                   formikBag.resetForm()
               }
           }}
           onReset={() => {
               this.props.handleReset()
               console.log('On Reset')
           }}
        >
        {({values, handleChange, handleSubmit, errors, touched }) => (
            <Form>
                <Field name="name" className="form-control mb-2" placeholder="Enter Your Name"/>
                {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                ) : null }
                <ErrorMessage name="name" />
                
                <Field name="dept" className="form-control mb-2" as="select" placeholder="Enter Your Department">
                    <option>Select Dept</option>
                    <option value="CSE">CSE</option>
                    <option value="EEE">EEE</option>
                    <option value="CMS">CMS</option>
                </Field><hr/>

                <Field name="search" onChange={this.searchHandler} className="form-control" placeholder="Search Your Name..."/>

                <button className="btn btn-primary btn-sm mr-2" type="submit">
                    {isEditable? 'Submit' : 'Create'}
                </button>
                <button className="btn btn-danger btn-sm" type="reset" onClick={this.props.handleReset} >Reset</button>
            </Form>
        )}
        </Formik>
            </div>
         );
    }
}
 
export default StudentForm;