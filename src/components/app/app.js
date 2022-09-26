import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css"

// localStorage.setItem("data", localStorage.getItem("data"))

// localStorage.setItem("data", JSON.stringify)

 class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: JSON.parse(localStorage.getItem("data")) || [] ,
            term: "",
            filter: "all",
        }
        this.maxId = this.state.data.length + 1;
    }

    deleteItem = (id) =>{
        this.setState(({data}) =>{
        localStorage.setItem("data",JSON.stringify(data.filter(item => item.id !== id)))
        const newArr =  JSON.parse(localStorage.getItem("data"))    
            return {
               data: newArr
            }
        })
    }
    addItem = (name, salary) => {

        const newItem = {
            name,
            salary: +salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        }
        if( newItem.name.length > 3 && typeof newItem.salary == "number" && newItem.salary !== 0){
            this.setState(({data}) => {
                localStorage.setItem("data",JSON.stringify([...data, newItem]));
                const newArr = JSON.parse(localStorage.getItem("data"));
                return {
                    data: newArr
                }
            })
        }else{
      
            alert("name must have 3 or more letter and salary in numbers write ")

        }
     
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
    searchEmp = (items, term) =>{
        if (term.length === 0){
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) =>{
        this.setState({term})
    }
    onUpdateFilter = (filter) =>{
        this.setState({filter});
    }
    filterPost = (item, filter) =>{
        switch(filter){
            case "moreThan1000":
                return item.filter(item => item.salary > 1000);
            case "rise":
                return item.filter(item => item.rise);
            default:
                return item;
        }
    }

  

    render(){
       const {data, term, filter} = this.state
       const increased = this.state.data.filter(item => item.increase).length;
       const employees = this.state.data.length;
       const visibleData = this.filterPost(this.searchEmp(data, term), filter);
  
       return(
        <div className="app">
            <AppInfo
                employeesCounter={employees}
                employeesRise={increased}/>

            <div className="search-panel">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}
                             data={data}/>
                <AppFilter data={data}
                           onUpdateFilter={this.onUpdateFilter}
                           filter={filter} />
            </div>
            
            <EmployeesList 
            data={visibleData}
            onDelete={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRise={this.onToggleRise}/>
            <EmployeesAddForm onAdd={this.addItem}/>
           

    

        </div>
    )
    }

}


export default App;