import React from 'react'
import logo from './../../Assets/logo.png'
import './navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="nav1">
                <ul>
                    <div className="img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="elem">
                        <p>Internships</p>
                        <p>Jobs</p>
                    </div>
                    <div className="search">
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="auth">
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                    <div className="flex mt-7">
                        Hire Talent
                    </div>
                    <div className="admin">
                        <button>Admin</button>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar