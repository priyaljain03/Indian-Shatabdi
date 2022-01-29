import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import themeContext from '../context/ThemeContext'

const Navbar = (props) => {

    const context = useContext(themeContext)
    const { switchState, switchTheme } = context;
    const [toggle, setToggle] = useState('off')
    const navigate = useNavigate();

    console.log("Toggle", toggle)
    const handleClick = (e) => {
        let tabs = [...document.getElementsByClassName('tab-active')].concat([...document.getElementsByClassName('tab-active-dark')])
        console.log(tabs)
        tabs.forEach((tab) => {
            tab.classList.remove('tab-active')
            tab.classList.remove('tab-active-dark')
        })
        if (switchState === 'white') {
            e.target.classList.add('tab-active')
        } else {
            e.target.classList.add('tab-active-dark')
        }
    }

    const handleSwitch = async (e) => {
        if (e.target.value === 'off') {
            switchTheme('white')
            setToggle('on')
        } else {
            switchTheme('dark')
            setToggle('off')
        }
        navigate('/')
        handleClick()
    }

    return (

        <div className="navbar-fixed">
            <nav className="nav-extended" style={{ backgroundColor: switchState === 'dark' ? '#22252b' : '#22252b' }}>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">IndianShatabdi</Link>
                    {/* <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link> */}
                    <ul id="nav-mobile" className="right hide-on-med-and-down">

                        <li>
                            <div class="switch">
                                <label>
                                    <input type="checkbox" onClick={handleSwitch} value={toggle} />
                                    <span class="lever" ></span>
                                    Dark Mode
                                </label>
                            </div></li>
                    </ul>
                </div>
                <div className={`nav-content${switchState === 'dark' ? '-dark' : ""}`} style={{ backgroundColor: 'black' }}>
                    <ul className="tabs tabs-transparent">
                        <li className="tab " onClick={handleClick}><Link to="/general">General</Link></li>
                        <li className="tab" onClick={handleClick}><Link to="/business">Business</Link></li>
                        <li className="tab" onClick={handleClick}><Link to="/entertainment">Entertainment</Link></li>
                        <li className="tab" onClick={handleClick}><Link to="/health">Health</Link></li>
                        <li className="tab" onClick={handleClick}><Link to="/science">Science</Link></li>
                        <li className="tab" onClick={handleClick}><Link to="/sports">Sports</Link></li>
                        <li className="tab" onClick={handleClick}><Link to="/technology">Technology</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}


export default Navbar