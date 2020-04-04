import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Spacer from './components/Spacer';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
      <Header />
        <Spacer />
        <Body />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
