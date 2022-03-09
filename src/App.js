import logo from './logo.svg';
import './App.css';
import Student from './componets/Students';
import AddStudent from './componets/AddStudent';
import { useState } from 'react';


  

function App() {

  const initialState = [
    {
        id: 1,
        name: 'Ana',
        age: 20,
        grade: 'A',
    },
    {
        id: 2,
        name: 'Carlos',
        age: 21,
        grade: 'B',
    },
    {
        id: 3,
        name: 'Fabian',
        age: 30,
        grade: 'A',
    },
    {
        id: 4,
        name:'Karla',
        age: 40,
        grade: 'C',
    },
  ]

  const [students, setStudents] = useState(initialState);
  const handleNewStudent = student => {
      setStudents([...students, student]);

  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Student students={students}/>
        <AddStudent addNewStudent={handleNewStudent}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
