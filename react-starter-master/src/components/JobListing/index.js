import React from "react";
import JobListingItem from "../JobListingItem";
import "./style.css";

class JobListing extends React.Component {
  state = {
    jobs: [],
    filteredJobs: []
  };

  componentDidMount() {
    const url = "http://hellotechnigo.comprendwebsites.net/api/jobs";

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          jobs: result,
          filteredJobs: result
        });
        console.log(this.state.jobs);
        console.log(this.state.filteredJobs)
        // checkForQuotes()
      });
  }

  filterCity = (e) => {
    if (e.target.value == "all") {
      this.setState({
        filteredJobs: this.state.jobs
      })
    } else {
      this.setState({
        filteredJobs: this.state.jobs.filter(job => {
          return job.city == e.target.value
        })
      })
    }
  }
  filterDepartment() {
    console.log('filterdep')

  }

  render() {
    return (
      <div className="wrapper">
        <div className="job-listing-container">
          <div className="job-listing-info-container">
            <h1>Job openings</h1>
            <p>
              We are currently 80 consultants with skills in digital strategy,
              project management, UX, visual design, development, content and
              research – all with a passion for digital communication. If you’re
              curious, creative and passionate about digital communication, apply now.
            </p>
            <div className="job-listing-button-container">
              <button className="button-department" onClick={this.filterDepartment}>
                Department<i className="fas fa-angle-down" />
              </button>
              <select className="select-city" onChange={this.filterCity}>
                <option disabled selected>City</option>
                <option value="all">All</option>
                <option value="Stockholm">Stockholm</option>
                <option value="London">London</option>
              </select>
              <i className="fas fa-angle-down" />
            </div>
          </div>
          <div className="job-listing-table-container">
            <table className="job-listing-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Department</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {this.state.filteredJobs.map(job => (
                  <JobListingItem
                    key={job.id}
                    title={job.title}
                    department={job.department}
                    city={job.city}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default JobListing;