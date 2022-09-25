import "./app-info.css";

const AppInfo = ({employeesCounter, employeesRise}) =>{
    return (
        <div className="app-info">
            <h1>Accounting of employees in the company</h1>
            <h2>Total number of employees: {employeesCounter}</h2>
            <h2>Employees who will receive the award: {employeesRise}</h2>
        </div>
    )
};


export default AppInfo;