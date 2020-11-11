import React from 'react';



function Tbody({employees}) {
  return (
    employees.map(employee => (
          <tr key={employee.login.uuid}>
            <td><img src={employee.picture.medium} alt={employee.name.last}></img></td>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.id.value}</td>
            <td>{employee.email}</td>
            <td>{employee.cell}</td>
          </tr>
  )))
}


export default Tbody; 