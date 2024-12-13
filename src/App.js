import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoverPage from './components/cover'; // Import the CoverPage component
import Module1 from './components/module1';
import Module2 from './components/module2';
import Module3 from './components/module3';
import Module4 from './components/module4';
import Module5 from './components/module5';
import Module7 from './components/module7';
import Module8 from './components/module8';
import Conclusion from './components/conclusion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/module1" element={<Module1 />} />
        <Route path="/module2" element={<Module2 />} />
        <Route path="/module3" element={<Module3 />} />
        <Route path="/module4" element={<Module4 />} />
        <Route path="/module5" element={<Module5 />} />
        <Route path="/module7" element={<Module7 />} />
        <Route path="/module8" element={<Module8 />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
    </Router>
  );
}

export default App;
