import Student from "./Student";

function Students({students}){
    return(
        <div>
            <ol> 
                {
                    students.map((student, index) => (
                        <Student key={index} student={student}/>
                    ))
                }
            </ol>
        </div>
    );
}


export default Students; 