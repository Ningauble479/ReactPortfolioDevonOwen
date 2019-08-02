import React from 'react';
import {Component} from 'react'
import '../../App.css';
import RI from './websiteCardRI'
import PS from './SocialAppCard'
import WM from './worldMaker'

class Websites extends Component {
  
  render () {

  return (
      <div className='websites'>
          <RI/>
          <PS/>
          <WM/>
      </div>

  )}
  }

export default Websites;