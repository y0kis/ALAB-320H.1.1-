import React from "react";

function EmployeeListItem({ employee }) {
    return (
        <li className="employee-list-item">
        <h4>{employee.name}</h4>
        <p>{employee.position}</p>
        </li>
    );
}

export default EmployeeListItem;