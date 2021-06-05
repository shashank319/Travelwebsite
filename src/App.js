import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Footer from './components/Footer'



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' exact component={Services}/>
          <Route path='/products' exact component={Products}/>
          <Route path='/sign-up' exact component={SignUp}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
