import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import EmployeeComponent from "../EmployeeComponent"

class SingleJob extends React.Component {

  state = {
    singleJob: {},
    jobList: [],
    employees: [],
    randomEmployeeIndex: 0,
    jobIndex: "",
    nextJob: "",
    previousJob: ""
  }

  getJobInfo = () => {
    window.scrollTo(0, 0)

    const pathUrl = this.props.match.params.id

    const jobUrl = `https://hellotechnigo.comprendwebsites.net/api/jobs/${pathUrl}`

    fetch(jobUrl)
      .then(response => response.json())
      .then(job => {
        this.setState({
          singleJob: job
        })
      })

    const jobsUrl = "https://hellotechnigo.comprendwebsites.net/api/jobs"

    fetch(jobsUrl)
      .then(response => response.json())
      .then(jobs => {
        this.setState({
          jobList: jobs
        })
        this.state.jobList.forEach(item => {
          if (item.id === pathUrl) {
            this.setState({
              jobIndex: this.state.jobList.indexOf(item)
            })
          }
        })
        const { jobIndex, jobList } = this.state

        const nextJobId = jobList[jobIndex + 1].id
        this.setState({
          nextJob: nextJobId
        })
        const previousJobId = jobList[jobIndex - 1].id
        this.setState({
          previousJob: previousJobId
        })
      })

    const employeeUrl = "https://hellotechnigo.comprendwebsites.net/api/users"

    fetch(employeeUrl)
      .then(response => response.json())
      .then(employees => {
        const removeInvalidNames = employee => (!(employee.name === "" || employee.name === null || employee.name.includes("@")))
        const placeholder = "./assets/images/placeholder.png"

        employees.forEach(employee => {
          if (employee.pictureUrl === "") {
            employee.pictureUrl = placeholder
          }
        })

        employees = employees
          .filter(removeInvalidNames)

        let randomStartIndex = Math.floor(Math.random() * (employees.length - 3))
        if (randomStartIndex < 0) {
          randomStartIndex = 0
        }
        employees = employees.slice(randomStartIndex, randomStartIndex + 3)

        this.setState({
          employees,
          randomEmployeeIndex: Math.floor(Math.random() * (employees.length - 3))
        })
      })
  }

  componentDidMount() {
    this.getJobInfo()
  }

  render() {
    console.log(this.state.jobIndex)

    const {
      title,
      intro,
      quote,
      workday,
      aboutYou,
      match,
      city,
      id
    } = this.state.singleJob

    const { nextJob, previousJob } = this.state

    return (
      <div className="wrapper">
        <div className="single-job-container">
          <Link to="/jobs">&#8592; Back to List</Link>
          <h1>{title}</h1>
          <p className="preamble"><span>{city}. </span>{intro}</p>
          <img src={`./assets/images/${id}.jpg`} alt="" />
          <div className="single-job-button-container">
            <button className="button-apply">Apply for the job</button>
            <button className="button-share">Share the job</button>
          </div>
          <h2>Your workday</h2>
          <p>{workday}</p>
          {quote && <blockquote>{quote}</blockquote>}
          <div className="single-job-description-container">
            <img src="./assets/images/job-image.webp" alt="" />
            <h2>Who are you?</h2>
            <p>{aboutYou}</p>
          </div>
          <h2>Is Comprend the company for you?</h2>
          <p>{match}</p>

          <h2>#comprendlife</h2>
          <p>The things we do are exciting and meaningful – our work makes a difference to our clients and we are committed to contributing to success.
        And we deliver well. We are proud of what we achieve and try to celebrate our victories.
        We have a firm belief that team work pays off. We like each other and help each other out.
        Our reality means we need to constantly change the way we think and work on our development. We are eager to learn from each other's experiences and to follow what goes on in the world outside Comprend. We have a flat organisation, an open climate and we'd love to hear about your crazy ideas!
          </p>

          <h2 className="center-text">Some of your colleagues</h2>
          <div className="single-job-image-container">
            {this.state.employees.map(employee => (
              <div className="colleague-container">
                <EmployeeComponent
                  key={employee.id}
                  name={employee.name}
                  image={employee.pictureUrl} />
              </div>
            ))}
          </div>
          <div className="single-job-navigation-container">
            <div className="single-job-navigation-item left-text">
              <Link to={`/jobs/${previousJob}`} onClick={this.getJobInfo}>&#8592; Previous Post</Link>
            </div>
            <div className="single-job-navigation-item">
              <Link to="/jobs"> Back to List</Link>
            </div>
            <div className="single-job-navigation-item right-text">
              <Link to={`/jobs/${nextJob}`} onClick={this.getJobInfo}>Next Post &#8594;</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleJob
