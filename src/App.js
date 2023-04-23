import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Curiculum from './Pages/Curiculum';
import PortFolio from './Pages/PortFolio';
import Contact from './Pages/Contact';
import Error404 from './Pages/Error404';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/cv" element={<Curiculum />} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} /> {/* Gère les routes non trouvées */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;