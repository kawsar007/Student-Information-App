import React, { Component } from 'react';

import ListView from './ListView';
import TableView from './TableView';

class ViewStudents extends Component {
    state = {
        isListView: true,
        view: 'list'
    }

    generateView = () => {
        const {students, editHandler, deleteHandler} = this.props;
        
        if(this.state.isListView) {
            return <ListView students={students} editHandler={editHandler} deleteHandler={deleteHandler}/>
        } else {
            return <TableView students={students} editHandler={editHandler} deleteHandler={deleteHandler}/>
        }
    }

    handleViewChange = (e) => {
        this.setState({
            view: e.target.value,
            isListView: e.target.value === 'list'
            
        })
    }

    render(){
        // console.log(this.props)
        return (
            <div>
                <h4>Student Lists: </h4>
                <div>
                    
                    <input type="radio" name="view" checked={this.state.isListView} value='list' onChange={this.handleViewChange} /><span className="mr-2">List View</span> 
                    
                    <input type="radio" name="view" checked={!this.state.isListView} value="table" onChange={this.handleViewChange}/>Table View
                </div>
                
                {this.generateView()}
                
            </div>
        )
    }
}

export default ViewStudents;
//student={this.props.students