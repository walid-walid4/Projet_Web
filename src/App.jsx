import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Lamarket from './components/Lamarket/Lamarket';
import Navbar from './components/navbar/navbar';
import Partners from './components/Partners/Partners';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import Lamarket2 from './components/Lamarket2/Lamarket2';
import Healthexp from './components/Healthexp/Healthexp';
import Labotech from './components/Labotech/Labotech';
import Plenitudeconseil from './components/Plenitudeconseil/Plenitudeconseil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <div className="container">
                <Title subTitle='OUR SERVICES' title='What We Offer' />
                <Programs />
                <About />
                <Title title='Some Of Our Partners' />
                <Partners />
                <Title title='LaMarket-com' />
                <Lamarket />
                <Title title='Contact Us:' />
                <Contact />
              </div>
              <Footer />
            </>
          }
        />
        {/* Lamarket2 page with only the specific component */}
        <Route path='/Lamarket2' element={<Lamarket2 />} />
        <Route path="/healthexp" element={<Healthexp />} />
        <Route path="/Labotech" element={<Labotech />} />
        <Route path="/Plenitudeconseil" element={<Plenitudeconseil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
