import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Services from './components/Services'
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import PongGame from './components/PongGame';
import TwoDView from './components/2dView/TwoDView';
import Tictactoe from './components/Games/TikTakToe/Tictactoe';
import Software from './components/Software';


function App() {

  const [isContactOpen, setContactOpen] = useState(false);
  const [notification, setNotification] = useState(''); // State for showing notifications

  const togglePopup = () => {
    setContactOpen(!isContactOpen);
  };

  const handleEmailSent = (message = 'Email sent successfully!') => {
    setNotification(message); // Show success or error notification
    setTimeout(() => {
        setNotification(''); // Clear notification after 3 seconds
    }, 3000);
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">
        <BrowserRouter>
        <Navbar togglePopup={togglePopup} notification={notification}/>
              {/* ContactPopup component */}
              <Contact isOpen={isContactOpen} onClose={togglePopup} onEmailSent={handleEmailSent}/>
          <Routes>
            <Route path='/' element={<Home togglePopup={togglePopup}/>} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/services' element={<Services togglePopup={togglePopup} />} />
            <Route path='/software' element={<Software />} />
          </Routes>
        
        </BrowserRouter>
      </div>
        <Footer togglePopup={togglePopup} />
    </div>
  )
}

export default App
