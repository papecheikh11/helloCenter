import { Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './components/accueil';
import Apropos from './components/apropos';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/Apropos' element={<Apropos/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
        {/* Footer Section Start */}
      <Footer />
      </div>
  );
}

export default App;
