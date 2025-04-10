import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaDatabase, FaGitAlt, FaPython, FaCompass, FaFire,FaJava } from 'react-icons/fa'; // Example icons
import { SiTailwindcss, SiBootstrap, SiMongodb, SiExpress, SiMysql, SiHeroku, SiPusher, SiPostman } from 'react-icons/si'; // More specific icons
import { VscVscode } from "react-icons/vsc";


const TechStackServicesPage = () => {
  const frontendSkills = [
    { name: 'React', icon: FaReact, color: 'text-teal-400' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' },
    // Add more frontend skills
  ];

  const backendSkills = [
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
    { name: 'Python', icon: FaPython, color: 'text-yellow-600' },
    { name: 'Java', icon: FaJava, color: 'text-red-600' },
  ];

  const databases = [
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'Firebase', icon: FaFire, color: 'text-orange-600' },
    { name: 'PostgreSQL', icon: FaDatabase, color: 'text-blue-400' },
  ];

  const otherTools = [
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-400' },
    { name: 'VS Code', icon: VscVscode, color: 'text-blue-300' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-600' },
    { name: 'Heroku', icon: SiHeroku, color: 'text-purple-400' },
    { name: 'Pusher', icon: SiPusher, color: 'text-pink-500' },
    { name: 'Compass', icon: FaCompass, color: 'text-gray-500' },
  ];

  const servicesOffered = [
    { name: 'Web Development (Frontend & Backend)', description: 'Building responsive and user-friendly web applications from concept to deployment.' },
    { name: 'API Development & Integration', description: 'Creating robust and scalable APIs and integrating third-party services.' },
    { name: 'Database Design & Management', description: 'Designing efficient database schemas and managing data effectively.' },
    { name: 'Performance Optimization', description: 'Improving the speed and efficiency of existing web applications.' },
    { name: 'Technical Consulting', description: 'Providing expert advice and guidance on technology choices and project architecture.' },
  ];

  return (
    <div className="bg-dark-navy text-white py-16 md:py-20 overflow-auto">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-500 mb-8">
          Tech Stack & Services
        </h2>

        {/* Tech Stack Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">
            My Tech Stack
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-300 mb-2">Frontend</h4>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill) => (
                  <div key={skill.name} className="bg-gray-800 rounded-md p-3 flex items-center space-x-2">
                    {skill.icon && <skill.icon className={`text-xl ${skill.color}`} />}
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-300 mb-2">Backend</h4>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill) => (
                  <div key={skill.name} className="bg-gray-800 rounded-md p-3 flex items-center space-x-2">
                    {skill.icon && <skill.icon className={`text-xl ${skill.color}`} />}
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-300 mb-2">Databases</h4>
              <div className="flex flex-wrap gap-3">
                {databases.map((db) => (
                  <div key={db.name} className="bg-gray-800 rounded-md p-3 flex items-center space-x-2">
                    {db.icon && <db.icon className={`text-xl ${db.color}`} />}
                    <span className="text-sm">{db.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-300 mb-2">Tools & Other</h4>
              <div className="flex flex-wrap gap-3">
                {otherTools.map((tool) => (
                  <div key={tool.name} className="bg-gray-800 rounded-md p-3 flex items-center space-x-2">
                    {tool.icon && <tool.icon className={`text-xl ${tool.color}`} />}
                    <span className="text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered Section */}
        <section>
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">
            Services I Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesOffered.map((service) => (
              <div key={service.name} className="bg-gray-800 rounded-md p-6">
                <h4 className="text-xl font-semibold text-gray-300 mb-2">{service.name}</h4>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechStackServicesPage;