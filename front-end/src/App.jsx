import React from 'react';
import {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/topNavbar/navbar'
import SideBar from './components/sidebar/sidebar'
import Biography from './components/biography/biography'
import Websites from './components/websites/websites'
import Knowledge from './components/knowledge/knowledge'

class Main extends Component {
  
  render () {
  return (
    <div className="main">
           <Router>
      <Navbar />
      <SideBar />
        <div id="mainContent">
        <Route exact path="/" component={Biography}/>
        <Route exact path='/websites' component={Websites}/>
        <Route exact path='/knowledge' componenet={Knowledge}/>
        </div>
      </Router>
    </div>
  )}
  }

export default Main;
