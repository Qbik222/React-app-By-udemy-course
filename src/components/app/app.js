import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css"


 class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {name:"John C." , salary: 450, increase: false, rise: false, id: 1},
                {name:"Zack S." , salary: 750, increase: true, rise: true, id: 2},
                {name:"Candal D." , salary: 1450, increase: false, rise: true, id: 3},
            ] 
        }
        this.maxId = this.state.data.length + 1;
    }

    deleteItem = (id) =>{
        this.setState(({data}) =>{
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name, salary) => {

        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) =>{
       this.setState(({data}) =>{
        return {
            data: data.map(item =>{
                if(item.id === id){
                    return {
                        ...item, increase: !item.increase,
                    }
                }
                return item;
            })
        }
       })
    }

    onToggleRise = (id) => {
        this.setState(({data}) =>{
            return {
                data: data.map(item =>{
                    if(item.id === id){
                        return {
                            ...item, rise: !item.rise,
                        }
                    }
                    return item;
                })
            }
           })
    }
 
    render(){
       const increased = this.state.data.filter(item => item.increase).length;
       const employees = this.state.data.length 
    return(
        <div className="app">
            <AppInfo
                employeesCounter={employees}
                employeesRise={increased}/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            
            <EmployeesList 
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRise={this.onToggleRise}/>
            <EmployeesAddForm onAdd={this.addItem}/>
           

    

        </div>
    )
    }

}


export default App;