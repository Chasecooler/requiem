import React, { Component } from 'react';
import axios from 'Axios';

class Employee extends Component {
    constructor() {
        super();
        this.state = {
            employees: []
        }
    }
    async componentDidMount () {
        try {
            const res = await axios.get('./Emplyees');
            this.setState({
                employees: res.data
            })
        } catch (error) {
            console.error(error);
        }
    }

    // put methods here

    render (){
        if (this.state.Employee.length) {
            return (
            <div>
                <ul>
                    {this.state.employees.map(el =>{
                        return <li key={el.EmpID}>Name: {el.Name} EmpCode: {el.EmpCode} Salar: {el.Salary}</li>
                    })}
                </ul>
            </div>
            )
        } else {
        return (
                    <div>There aren't any Employees to his List! </div>
                )
            }

        }
    }


export default Employee;