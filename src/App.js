import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Signature from './components/Signature';
import Footer from './components/Footer';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div id="page-container">
        <div id="content-wrap">
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Signature} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Wrapper>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
