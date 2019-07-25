import React, { Component } from 'react';
import axios from 'axios';

class Employee extends Component {
    constructor() {
        super();
        this.state = {
            employees: []
        }
    }
    // ths is where the lifecyce methods go
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

    adEmploye = async (event) => {
        event.preventDefault();
        const {Name,EmpCode, Salary} = this.state
        try {
            await axios.post('/employees', {Name, EmpCode, Salary})
            alert("Employee Added")
            this.refresh();
        } catch (error) {
            console.log(error)
        }
        }
    }



    deleteEmployee = async (id) => {
        try {
            await axios.delete('/employees/${id}')
            console.log(`ID : ${id} was deleted`)
            this.refresh();
        } catch (error) {
            console.error(error)
        }
        }
    }

    render (){
        if (this.state.employees.length) {
            return (
            <div>
                <ul>
                    {this.state.employees.map(el =>{
                        return <li key={el.EmpID}>Name: {el.Name} EmpCode: {el.EmpCode} Salary: {el.Salary}</li>
                    })}
                </ul>
            </div>
            )
        } else {
        return (
                    <div>There aren't any Employees to this List! </div>
                )
            }

        }
    }


export default Employee;