
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Projects' exact element={<Projects />} />
        <Route path='/Resume' exact element={<Resume />} />
        <Route path='/Contact' exact element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

