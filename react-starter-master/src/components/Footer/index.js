import React from "react"
import "./style.css"

class Footer extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="footer-container">
          <div className="footer-container-left">
            <div className="footer-logo-container">
              <img src="./assets/comprend-logo-transparent.png" alt="Comprend logo" />
            </div>
            <div className="footer-link-container">
              <a href="#">© 2014-2018 Comprend</a>
              <a href="#">Privacy notice</a>
              <a href="#">Cookie policy</a>
              <a href="#">Terms of use</a>
              <a href="#">Subscribe to newsletter</a>
            </div>
            <p>Comprend is part of H&H Group</p>
          </div>
          <div className="footer-container-right">
            <div className="soc-media-container">
              <i className="fab fa-facebook-square" />
              <a href="https://www.facebook.com/comprendcom/" rel="noopener noreferrer" target="_blank">Facebook</a>
              <i className="fab fa-twitter-square" />
              <a href="https://twitter.com/ComprendCom" rel="noopener noreferrer" target="_blank">Twitter</a>
              <i className="fab fa-instagram" />
              <a href="https://www.instagram.com/comprendlife/" rel="noopener noreferrer" target="_blank">Instagram</a>
              <i className="fab fa-linkedin" />
              <a href="https://www.linkedin.com/company/comprend/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
