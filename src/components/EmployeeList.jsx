import React from 'react';
import EmployeeListItem from './EmployeeListItem';

const employees = [
    { id: 1, name: 'Abdul Fofanah', position: 'Software Engineer' },
{ id: 2, name: 'Mary Luseni', position: 'Project Manager' },
{ id: 3, name: 'Lauretta Johnson', position: 'UX Designer'},
{ id: 4, name: 'Deborah Jenkins', position: 'Data Scientist' },
];
function EmployeeList() {
    return (
        <ul className="employee-list">
            {employees.map(employee => (
                <EmployeeListItem key={employee.id} 
                employee={employee} />
            ))}
            </ul>
            );
        }


    export default EmployeeList;