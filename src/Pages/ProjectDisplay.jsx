import React from 'react'
import gameshop from '../assets/gameshop.png'
import swapMeme from '../assets/swapMeme.png'
import movierec from '../assets/movierec.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

function ProjectDisplay() {
  const projects = [
    {
      name: "GameShop",
      image: gameshop,
      link: "https://abdulrahmanabdulhakeem.github.io/GameshopV2/"
    },
    {
      name: "SwapGard",
      image: swapMeme,
      link: "https://abdulrahmanabdulhakeem.github.io/SwapGard/"
    },
    {
      name: "Movierec",
      image: movierec,
      link: "https://movie-rec-lime.vercel.app/"
    },
    {
      name: "View More on GitHub",
      link: "https://github.com/AbdulrahmanAbdulhakeem?tab=repositories",
      isGitHubCard: true
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12 text-white"
      >
        My Projects
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col items-center text-center"
          >
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              {!project.isGitHubCard ? (
                <>
                  <img
                    src={project.image}
                    alt={`${project.name} Screenshot`}
                    className="w-full h-60 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                  <p className="text-xl font-semibold text-slate-100">{project.name}</p>
                </>
              ) : (
                <>
                  <FaGithub className="text-6xl text-emerald-500 mb-4" />
                  <p className="text-lg font-semibold text-slate-100">
                    Explore more of my work on GitHub
                  </p>
                </>
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDisplay;
