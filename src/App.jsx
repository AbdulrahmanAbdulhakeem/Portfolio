import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import ContactPage from './Pages/ContactPage'
import ToolServicePage from './Pages/ToolServicePage'
import ProjectDisplay from './Pages/ProjectDisplay'


function App() {

  return (
    <div className='bg-slate-950 text-slate-200'>
     <Router>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/tools' element={<ToolServicePage />} />
            <Route path='/projects' element={<ProjectDisplay />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
