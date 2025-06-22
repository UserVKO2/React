import { Routes, Route } from 'react-router-dom';

import Home from './components/Pages/Home/Home';
import Abote from './components/Pages/Abote/Abote';
import Contacts from './components/Pages/Contacts/Contacts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import './App.css'



function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        < Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/abote" element={<Abote />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        < Footer />
      </div>
    </>
  )
}

export default App
