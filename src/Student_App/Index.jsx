import React, { Component } from 'react';
import ViewStudents from './Views/Views';
import StudentForm from './Form/Form';
import shortid from 'shortid';
import students from './data/index';

class StudentApp extends Component {
    state = { 
        students: students,
        isEditable: false,
        selectedStudent: null
     }

     editHandler = (id) => {
        this.setState({
            isEditable: true,
            selectedStudent: id
        })
     }

     deleteHandler = id => {
         const students = this.state.students.filter(std => std.id !== id)
         this.setState({students})

         if(this.state.selectedStudent === id) {
             this.setState({
                 isEditable: false,
                 selectedStudent: null
             })
         }
     }

     createStudent = student => {
         student.id = shortid.generate()
         const students = [...this.state.students, student] 
         this.setState({students})
     }

     updateStudent = ({name, dept}, id) => {
         const { students } = this.state;
         const student = students.find(student => student.id === id);
         student.name = name;
         student.dept = dept;

         this.setState({ students }); 
     }

     handleReset = () => {
         this.setState({
             isEditable: false,
             selectedStudent: null
         })
     }
     
    render() { 

        const { students, isEditable, selectedStudent } = this.state;

        let editableStudent = null
        if(isEditable) {
            editableStudent = students.find(student => student.id === selectedStudent)
        }
        console.log(editableStudent)

        return ( 
            <div className="container">
                <StudentForm 
                    isEditable={isEditable} 
                    editableStudent={editableStudent}
                    createStudent={this.createStudent}
                    updateStudent={this.updateStudent}
                    handleReset={this.handleReset}
                />
                Student APP
                <ViewStudents students={students} editHandler={this.editHandler} deleteHandler={this.deleteHandler}/>
            </div>
         );
    }
}
 
export default StudentApp;