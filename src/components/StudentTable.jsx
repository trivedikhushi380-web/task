import React, { useState, useEffect } from 'react'
import data from '../../db.json'
import './StudentTable.css'

function StudentTable() {
  const [students, setStudents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const studentsPerPage = 5

  useEffect(() => {
    setStudents(data.students)
  }, [])

  const totalPages = Math.ceil(students.length / studentsPerPage)
  const indexOfLast = currentPage * studentsPerPage
  const indexOfFirst = indexOfLast - studentsPerPage
  const currentStudents = students.slice(indexOfFirst, indexOfLast)

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="table-container">
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          className="page-btn"
          onClick={goToPrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="page-btn"
          onClick={goToNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default StudentTable
