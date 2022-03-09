
function Student({student}){
    return(
        <div>
              <li>
                     {student.name} - age: {student.age} - grade: {student.grade}
                </li>
        </div>
    )
}

export default Student;