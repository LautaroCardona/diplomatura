import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';

import Index from './components/Pages/Index';
import Comics from './components/Pages/Comics';
import Literatura from './components/Pages/Literatura';
import peliculas from './components/Pages/Peliculas';

function App() {
  return (
    <div className="App">

      <Header/>
      <Nav/>
      <Footer/>


    </div>
  );
}

export default App;
