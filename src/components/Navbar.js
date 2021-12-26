import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
    handleActive = (event) =>{
        console.log("Here",event)
        event.target.classList.add('active')
    }

    render() {
        return (
            <>
                <nav className="nav-extended" style={{ backgroundColor: 'black' }}>
                    <div className="nav-wrapper">
                        <Link to="#" className="brand-logo">NewsMonkey</Link>
                        <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="">ABOUT</Link></li>
                        </ul>
                    </div>
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <li className="tab"><Link onClick={this.handleActive} to="/business">Business</Link></li>
                            <li className="tab"><Link onClick={this.handleActive} to="/entertainment">Entertainment</Link></li>
                            <li className="tab disabled"><Link onClick={this.handleActive} to="/general">General</Link></li>
                            <li className="tab"><Link onClick={this.handleActive} to="/health">Health</Link></li>
                            <li className="tab"><Link onClick={this.handleActive} to="/science">Science</Link></li>
                            <li className="tab"><Link onClick={this.handleActive} to="/sports">Sports</Link></li>
                            <li className="tab"><Link onClick={this.handleActive} to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                </nav>
                
                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="sass.html">Sass</Link></li>
                    <li><Link to="badges.html">Components</Link></li>
                    <li><Link to="collapsible.html">JavaScript</Link></li>
                </ul>


            </>
        )
    }
}
