import React, {useState} from 'react';
import '../styles/Gradeboard.css'; 

const GradeDashBoard = () => {




  const ButtonPortal = () => {

    

    return (
      <div className="gbox1">
        <div className="gbox2">
          dd
        </div>
        <div className="gbox3">
          ddg
        </div>
dd

      </div>
    );
  }


  const ExPortal = () => {


    return (
      <div className="gbox4">
        fhf
      </div>
    )
  }




    const SchoolPortal = () => {
        const [selectedGrade, setSelectedGrade] = useState('');
        const [students, setStudents] = useState([]);
        const [newStudentName, setNewStudentName] = useState('');
      
        // Function to handle grade selection
        const handleGradeSelection = (grade) => {
          setSelectedGrade(grade);
          // Fetch students for the selected grade from API or any other data source
          // Set the list of students in the state
          // Example: setStudents([...students for the selected grade...])
        };
      
        // Function to handle student selection
        const handleStudentSelection = (student) => {
          // Perform actions when a student is selected
          // Example: Navigate to academic grade setting page or display relevant information
        };
      
        // Function to add a new student
        const handleAddStudent = () => {
          if (newStudentName.trim() !== '') {
            const newStudent = {
              id: Math.random().toString(),
              name: newStudentName.trim(),
            };
            setStudents([...students, newStudent]);
            setNewStudentName('');
          }
        };
      
        return (
          <div>
            {/* Grade Selection */}
            <div>
              <button onClick={() => handleGradeSelection('Grade 4')}>Grade 4</button>
              {/* Add more grade buttons as needed */}
            </div>
      
            {/* List of Students */}
            {selectedGrade && (
              <div className="table-container">
                <h3>Students - {selectedGrade}</h3>
                <table >
                  <thead>
                    <tr>
                      <th>Student ID</th>
                      <th>Student Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} onClick={() => handleStudentSelection(student)}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
      
            {/* Academic Grade Setting */}
            {/* Render the academic grade setting component or relevant information here */}
      
            {/* Add Student Form */}
            <div>
              <input
                type="text"
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                placeholder="Enter student name"
              />
              <button onClick={handleAddStudent}>Add Student</button>
            </div>
          </div>
        );
      }
      
    
    


return (
    <div>
      <div className='gradeboard'>
        <SchoolPortal />
        <ButtonPortal/>
        <ExPortal />
      </div>
    </div>
);




};




export default GradeDashBoard;