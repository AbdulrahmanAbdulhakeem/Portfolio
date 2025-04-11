import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaTools, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-slate-900 text-slate-200 font-bold w-full">
            <div className="flex justify-between items-center px-4 py-3">
                <Link to='/' className='flex items-center space-x-2'>
                    <IoMdHome className='h-8 w-8 text-emerald-600' />
                    <span className="text-sm sm:inline hidden">Home</span>
                </Link>

                <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden focus:outline-none">
                    {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>

                <div className="hidden sm:flex space-x-4 text-sm">
                    <Link to='/tools' className="hover:text-emerald-400 transition">Tools <FaTools className='inline ml-1' /></Link>
                    <Link to='/projects' className="hover:text-emerald-400 transition">Projects</Link>
                    <Link to='/contact' className="hover:text-emerald-400 transition">Contact Me</Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col space-y-4 px-4 pb-4 text-sm sm:hidden">
                    <Link to='/tools' onClick={() => setIsOpen(false)} className="hover:text-emerald-400">Tools <FaTools className='inline ml-1' /></Link>
                    <Link to='/projects' onClick={() => setIsOpen(false)} className="hover:text-emerald-400">Projects</Link>
                    <Link to='/contact' onClick={() => setIsOpen(false)} className="hover:text-emerald-400">Contact Me</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
