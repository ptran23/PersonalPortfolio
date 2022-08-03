
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDisplay from './pages/ProjectDisplay'
import { Helmet, HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <div className="App">
      <Router>
      <HelmetProvider>
        <Helmet>
          <title>About Peter</title>
          <link rel="canonical" href="https://www.aboutpete.com/" />
        </Helmet>
        </HelmetProvider>
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
