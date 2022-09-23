import "./app.css"
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";


function App(){

    const data = [
        {name:"John C." , salary: 450, increase: false},
        {name:"Zack S." , salary: 750, increase: true},
        {name:"Candal D." , salary: 1450, increase: false},
    ];

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
           

    

        </div>
    )
}


export default App;