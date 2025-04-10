import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='m-20 mb-0 items-center h-screen'>
            <div><h1 className='text-6xl text-emerald-900 font-extrabold mx-auto'>Hello <br />I'm Abdulrahman,<br />Web Developer</h1></div>
            <div className='mt-5 font-medium text-lg w-3/4 text-slate-50'><p>
                I'm a fullstack developer with experience in building responsive and user-friendly websites. I have the technical expertise to bring dynamic and visually appealing interfaces to life. I have built stable, elegant, secure and reliable websites with great web accessability and dynamism
            </p></div>
            <div className='mt-10'>
                <Link to='/projects'><button className='bg-emerald-900 p-5 rounded-md'>See My Projects</button></Link>
            </div>
        </div>
    )
}

export default Home
