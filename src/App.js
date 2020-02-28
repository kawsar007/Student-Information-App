import React from 'react'
import './App.css';
// import FormikForm from './Formik';
import StudentApp from './Student_App/Index';

function App() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-sm-6 offset-3">
             <StudentApp/>
             {/* <FormikForm/> */}
          </div>
      </div>   
    </div>
  );
}

export default App;
