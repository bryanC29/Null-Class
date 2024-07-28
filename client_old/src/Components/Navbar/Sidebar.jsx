import React, { useEffect, useState } from 'react'
import logo from "./../../Assets/logo.png"
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const openSidebar = () => {
        setSidebarOpen(true)
    };
    const closeSidebar = () => {
        setSidebarOpen(false)
    };
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if(sidebarOpen && !e.target.closest('.sidebar') && !e.closest('open-btn')) {
                closeSidebar()
            }
        }
        document.addEventListener('click', handleOutsideClick)
        return (
            document.removeEventListener('click', handleOutsideClick)
        )
    }, [sidebarOpen]);
    const user = 1;

    return (
        <>
            <div className="App2 mt-2 overflow-hidden">
                <Link to="/">
                    <img src={logo} alt="nav2-img" />
                </Link>
                <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                    <span className='cursor-pointer close-btn' onClick={closeSidebar}>
                        &time;
                    </span>
                    {
                        user ? (
                            <>
                                <div className="profile">
                                    <Link to={"/profile"}>
                                        <img className='rounded-full justify-center' src={user.photo} alt="" srcSet='' />
                                    </Link>
                                    <p className="text-center">
                                        Profile name <span className='font-bold text-blue-500'>{user?.name}</span>
                                    </p>
                                </div>
                            </>
                        ):
                        (
                            <>
                                <div className="auth">

                                </div>
                            </>
                        )
                    }
                    <Link to="/internships">Internships</Link>
                    <Link to='/jobs'>Jobs</Link>
                    <Link to={'/'} className='small'>Contact Us</Link>
                    <hr/>
                    {
                        user? (
                            <Link to={'/userapplication'}>
                                <p>My Applications</p>
                            </Link>
                        ):
                        (
                            <>
                                <Link to={'/register'}>
                                    <p>My Application</p>
                                </Link>
                                <Link>
                                    <p>View Resume</p>
                                </Link>
                                <Link>
                                    <p>More</p>
                                </Link>
                                <button className="bt-log" id='bt' onClick={logoutFunction}>
                                    <i className="bi bi-box-arrow-right"></i>
                                </button>
                            </>
                        ):
                        (
                            <>
                                <div className="addmore">
                                    <p>Register - As a student</p>
                                    <p>Register - As a employer</p>
                                    <br/>
                                    <br/>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Sidebar