import React from 'react'
import logo from './../../Assets/logo.png'
import './navbar.css'
import Sidebar from './Sidebar'

function Navbar() {
    return (
        <div>
            <nav className="nav1">
                <ul>
                    <div className="img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="elem">
                        <p id='int' className=''>
                            Internships
                            <i className="bi bi-caret-down-fill"></i>
                        </p>
                        <p>
                            Jobs
                            <i className="bi bi-caret-down-fill"></i>
                        </p>
                    </div>
                    <div className="search">
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="auth">
                        <button className='btn1'>Login</button>
                        <button className='btn2'>Register</button>
                    </div>
                    <div className="flex mt-7 hire">
                        Hire Talent
                    </div>
                    <div className="admin">
                        <button>Admin</button>
                    </div>
                </ul>
            </nav>
            <Sidebar/>
        </div>
    )
}

export default Navbar