import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-dark-navy text-white py-16 md:py-20"> 
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="prose lg:prose-lg max-w-none">
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-500 mb-8">
          Contact Me
        </h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm always open to new opportunities and collaborations. Feel free to
              reach out!
            </p>
            <h3 className="text-xl font-semibold text-teal-400 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-300 mb-2">
              Email: <a href="mailto:abdulrahmanabdulhakeem952@gmail.com" className="text-teal-300 hover:underline break-words">abdulrahmanabdulhakeem952@gmail.com</a>
            </p>
        
            <p className="text-gray-300 mb-2">
              Github: <a href="https://github.com/AbdulrahmanAbdulhakeem" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline break-words">Abdulrahman Abdulhakeem</a>
            </p>
            
          </div>

          
          <div>
            <h3 className="text-xl font-semibold text-teal-400 mb-4">
              Send me a message
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;