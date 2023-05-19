import React, { Component } from 'react'
import './Center.css'
import {FaPhoneVolume} from 'react-icons/fa'


export default class Center extends Component {
  render() {
    return (
      <div className='Center'>
        <span> Horarios</span>
        <ul className='ul'>
            <li>Lunes  9:00 - 21:00</li>
            <li>Lunes  9:00 - 21:00</li>
            <li>Lunes  9:00 - 21:00</li>
            <li>Lunes  9:00 - 21:00</li>
            <li>Lunes  9:00 - 21:00</li>
            <li>Lunes  9:00 - 21:00</li>
            <li>Lunes  9:00 - 21:00</li>
        </ul>
        
        <span>   Telephone</span>

        <p> <FaPhoneVolume /> 0599344529</p>
        
      </div>
      
    )
  }
}
