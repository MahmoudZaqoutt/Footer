import React, { Component } from 'react'
import img from './images.jpg'
import './Direction.css'
import {FaDirections} from 'react-icons/fa'

export default class Direction extends Component {
  render() {
    return (
      <div className='Direction'>
        <span>  Direction</span>

        <p> <FaDirections /> Humrea Primo 771  Cordoba Capital,Bv Centro .</p>
        <img src={img} alt="map" />
      </div>
    )
  }
}
