import React from "react"
import EmployeeComponent from "../EmployeeComponent"
import "./style.css"

class EmployeePage extends React.Component {

  state = {
    employees: [],
    employeesToLoad: 20
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    const url = "https://hellotechnigo.comprendwebsites.net/api/users"

    fetch(url)
      .then(response => {
        return response.json()
      }).then(employees => {
        const placeholder = "./assets/images/placeholder.png"
        const removeInvalidNames = employee => (!(employee.name === "" || employee.name === null || employee.name.includes("@")))

        employees.forEach(employee => {
          if (employee.pictureUrl === "") {
            employee.pictureUrl = placeholder
          }
        })
        employees = employees
          .filter(removeInvalidNames)
        this.setState({
          employees
        })
      })
  }
   handleClickLoadMore = () => {
     this.setState({
       employeesToLoad: this.state.employeesToLoad += 20
     })
   }
   render() {
     return (
       <div className="wrapper">
         <div className="employee-page-container">
           <div className="employee-page-intro">
             <h1>Meet some of the people of Comprend</h1>
             <p>We&apos;re very proud of our people at Comprend —
      feel free to contact anyone for a lunch, or just want to ask a
       question about #comprendlife.
             </p>
           </div>
           <div className="employee-wrapper">
             {this.state.employees.slice(0, this.state.employeesToLoad).map(employee => (
               <div className="employee-container">
                 <EmployeeComponent
                   key={employee.id}
                   title={employee.title}
                   name={employee.name}
                   image={employee.pictureUrl} />
               </div>
             ))}
           </div>
           <div className="employee-button-container">
             <button className="load-more-button" onClick={this.handleClickLoadMore}>Load more lovely Comprenders</button>
           </div>
         </div>
       </div>
     )
   }
}



export default EmployeePage
