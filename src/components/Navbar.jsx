import React from 'react'
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaTools } from "react-icons/fa";

function Navbar() {
    return (
        <div>
            <div className='flex text-slate-200 font-bold justify-between items-center p-2 bg-slate-900'>
                <div className='p-5 ml-10'>
                    <Link to='/'><IoMdHome className='h-10 w-10 text-emerald-600' /></Link>
                </div>
                <div>
                    {/* <Link to='/about' className='p-5' >About Me</Link> */}
                    <Link to='/tools' className='p-5'>Tools <FaTools className='inline' /></Link>
                    <Link to='/projects' className='p-5'>Projects </Link>
                    <Link to='/contact' className='p-5'>Contact Me </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
