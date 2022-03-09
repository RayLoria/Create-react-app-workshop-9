import { useState } from "react";

function AddStudent({addNewStudent}){
    const initialState = {name: '', age: 0, grade: '?'}
    const [student, SetStudent] = useState(initialState);
    const handleChange = (e) =>{
        //console.log(e.target.name);
        const {name, value} = e.target
        SetStudent({...student, [name]:value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Saving...');
        addNewStudent(student);
    };

    return(
        <div>
            <h3>Add new Student</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value = {student.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="text" name="age" value = {student.age} onChange={handleChange} />
                </label>
                <br />
                <label> 
                    Grade:
                    <input type="text" name="grade" value = {student.grade} onChange={handleChange}/>
                </label>
                <br />
                <br />
                <input type="submit" value="save" />
            </form>
        </div>
    );
}

export default AddStudent;