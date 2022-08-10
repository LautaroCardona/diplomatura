import './App.css';

import '././styles/components/pages/Peliculas.css';
import '././styles/components/pages/Literatura.css';
import '././styles/components/pages/Index.css';
import '././styles/components/pages/Comics.css';
import '././styles/components/pages/Contactos.css';

import '././styles/components/layout/Header.css';
import '././styles/components/layout/Nav.css';
import '././styles/components/layout/Footer.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';

import Index from './Pages/Index';
import Comics from './Pages/Comics';
import Literatura from './Pages/Literatura';
import Peliculas from './Pages/Peliculas';
import Contactos from './Pages/Contactos';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="comics" element={<Comics />} />
          <Route path="literatura" element={<Literatura />} />
          <Route path="peliculas" element={<Peliculas />} />
          <Route path="contactos" element={<Contactos />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
