import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='px-4 py-10 sm:px-10 md:px-20 md:py-16 bg-slate-900 min-h-screen text-white flex flex-col justify-center'>
            <div>
                <h1 className='text-4xl sm:text-5xl md:text-6xl text-emerald-400 font-extrabold leading-tight'>
                    Hello, <br />I'm Abdulrahman,<br />Web Developer
                </h1>
            </div>
            <div className='mt-5 font-medium text-base sm:text-lg max-w-xl'>
                <p>
                    I'm a fullstack developer with experience in building responsive and user-friendly websites. I have the technical expertise to bring dynamic and visually appealing interfaces to life. I have built stable, elegant, secure and reliable websites with great web accessibility and dynamism.
                </p>
            </div>
            <div className='mt-10'>
                <Link to='/projects'>
                    <button className='bg-emerald-600 hover:bg-emerald-700 transition px-6 py-3 rounded-md text-white font-semibold'>
                        See My Projects
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
