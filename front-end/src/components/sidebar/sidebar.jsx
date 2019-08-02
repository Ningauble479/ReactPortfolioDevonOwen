import React from 'react';
import {Component} from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';

class SideBar extends Component {
  
  render () {

  return (
      <div className='sideBar'>
          <Link to="/" id='topButton' className='buttons'>Biography</Link>
          <Link to="/websites" id='' className='buttons'>Websites</Link>
          <Link to="/knowledge" id='' className='buttons'>Knowledge</Link>
      </div>

  )}
  }

export default SideBar;