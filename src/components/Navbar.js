import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  // const danger = ()=>{
  //   if(document.body.style.backgroundColor === 'white'){
  //     document.body.style.backgroundColor = 'red'
  //   }
  //   else{
  //     document.body.style.backgroundColor = 'white'

  //   }
  // }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.tittle}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-a" href="/">{props.menu}</a>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
      </ul>
      {/* <button type="button" className="btn btn-danger ms-auto mx-3" onClick={danger}>Danger Mode</button> */}

    </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggledark} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    tittle: PropTypes.string.isRequired,
    menu: PropTypes.string.isRequired
}
// Navbar.defaultProps = {
//     tittle: "textUtil",
//     menu: "menu"
// }
