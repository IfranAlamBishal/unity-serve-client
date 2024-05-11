import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCircleUser } from "react-icons/fa6";
import logo from '../../assets/icons/logo-blue.png'


const Nav = () => {

    const { user, logOut } = useContext(AuthContext)

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to="/need_volunteer">Need Volunteer</NavLink></li>
        {
            user && <>
                <li>
                    <details>
                        <summary>My Profile</summary>
                        <ul className="p-2 w-40 lg:border ">
                            <li><NavLink to="/volunteer_post">Add Volunteer Post</NavLink></li>
                            <li><NavLink to="/my_post">Manage My Post</NavLink></li>
                        </ul>
                    </details>
                </li>
            </>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logged out!",
                    text: "You've successfully logged out.",
                    icon: "success"
                });
            })
            .catch(error => {
                toast.error(error.massage)
            })
    }

    const btns = <>
        {
            user ?
                <div className=" flex flex-col lg:flex-row gap-4 px-5 mt-3 lg:mt-0">
                    {
                        user.photoURL ?
                            <div className="tooltip tooltip-bottom pt-2 pl-2" data-tip={user.email}>
                                <Link to="/Profile" ><img src={user.photoURL} alt="" className="w-8 h-8 my-auto rounded-full " /></Link>
                            </div>
                            :
                            <div className="w-9 h-9 my-auto pt-2 pl-2 tooltip tooltip-bottom" data-tip={user.email}>
                                <Link to="/Profile" ><FaCircleUser /></Link>
                            </div>
                    }
                    <Link to='/' onClick={handleLogOut} className=" btn btn-error text-white text-base font-semibold">Log Out</Link>
                </div>
                :
                <div className=" flex flex-col lg:flex-row gap-4 px-5 mt-3 lg:mt-0">
                    <Link to="/register" className=" btn btn-primary text-base font-semibold">Register</Link>
                    <Link to="/login" className=" btn btn-primary text-base font-semibold">Log In</Link>
                </div>
        }
    </>




    return (
        <div className=" bg-white mb-5">
            <div className="navbar bg-base-100 w-5/6 mx-auto pt-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-base font-medium">
                            {links}
                            {btns}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost  text-blue-500 lg:h-20"><div className=' flex flex-row'>
                        <img src={logo} alt="" className=' w-12 h-12 mr-2 text-blue-500' />
                        <h3 className=" text-3xl lg:text-5xl font-bold">Unity Serve</h3>
                    </div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    {btns}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Nav;