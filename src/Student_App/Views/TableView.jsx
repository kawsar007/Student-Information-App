import React from 'react'

function TableView({students, editHandler, deleteHandler}) {
    return (
        <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {students.map(student => (
                            <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.dept}</td>
                            <td>
                                <div className="ml-auto">
                                    <button type="button" onClick={() => deleteHandler(student.id) }className="btn btn-danger btn-sm mr-2">Delete</button>
                                    <button type="button" onClick={() => editHandler(student.id)} className="btn btn-info btn-sm">Edit</button>
                                </div>
                            </td>
                            </tr>
                        ))}
                </tbody>
            </table>
    )
}
export default TableView;