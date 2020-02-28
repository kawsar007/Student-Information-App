import React from 'react'

function ListView({students, editHandler, deleteHandler}) {
    
    return (
        <ul className="list-group">
                {students.map(student => (
                        <li key={student.id} className="list-group-item d-flex">
                       
                        <div>
                            <h4><b>Name: </b>{student.name}</h4>
                            <p><b>Dept Name: </b> {student.dept} <br/>
                               <span><b>Student Id: </b>{student.id}</span>
                            </p>
                        </div>    
                        <div className="ml-auto">
                            <button type="button" className="btn btn-danger btn-sm mr-2" onClick={() => deleteHandler(student.id) }>Delete</button>
                            <button type="button" onClick={() =>editHandler(student.id) } className="btn btn-info btn-sm">Edit</button>
                        </div>
                        </li>
                ))}
            </ul>
    )
}
export default ListView;