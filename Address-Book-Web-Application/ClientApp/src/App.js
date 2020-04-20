import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './contents';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
      <Router>
          <div className='cointainer'>
              <Header />
              <Navigation />
              <Content/>
          </div>
      </Router>
    );
}


