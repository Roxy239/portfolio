
import './App.scss';
import Navbar from './components/Navbar/Navbar.jsx'

import Portfolio from './components/Portfolio/Portfolio.jsx'
import Contact from './components/Contact/Contact.jsx'
import './App.scss'
import Intro from './components/Intro/Intro.jsx';

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
   
    <div className="sections">
    <Intro/>
    <Portfolio/>
   
    <Contact/>
  </div>
  </div>
  );
}

export default App;
