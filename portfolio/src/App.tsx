import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />

      </div>
    </Router>
  );
}

export default App;
