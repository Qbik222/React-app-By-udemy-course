import "./employees-add-form.css"
import { Component } from "react";

class EmployeesAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            salary: "",
        }
    }

    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: "",
            salary: ""
        })
    }
    render (){
        const {name, salary} = this.state;
      
        return(    
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form 
                    className="add-form d-flex"
                    >
                    <input onChange={this.onValueChange} type="text"
                        className="form-control new-post-label"
                        placeholder="Employee name"
                        name="name"
                        value={name}/>
                    <input onChange={this.onValueChange} 
                        type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $"
                        name="salary"
                        value={salary}/>

                    <button type="Submit"
                            className="btn btn-outline-light"
                            onClick={this.onSubmit}>
                            Add
                    </button>

                </form>
            </div>
        )

    }
 
}

export default EmployeesAddForm;