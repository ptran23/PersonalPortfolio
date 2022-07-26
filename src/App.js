
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDisplay from './pages/ProjectDisplay'
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path ="/" element = {<Home/>} />
          <Route path ="/projects" element = {<Projects/>} />
          <Route path ="/projects/:id" element = {<ProjectDisplay />} />
          <Route path = "/contact" element = {<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
