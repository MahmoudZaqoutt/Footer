import React, { Component } from 'react'
import './Info.css'
import {FaInstagram, FaWhatsapp , FaFacebook, FaTwitter} from 'react-icons/fa'

export default class Info extends Component {
  render() {
    return (
      <div className='Info'>
        <h1>Resto</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illum officia ex praesentium rerum quo accusamus hic nisi ipsa ut tenetur, facere commodi distinctio odio, molestiae ducimus illo, quisquam molestias. </p>
        <p>2009 - 2023</p>
        <ul>
            <li><FaInstagram /></li>
            <li> <FaWhatsapp /> </li>
            <li> <FaFacebook /> </li>
            <li> <FaTwitter /> </li>
        </ul>
      </div>
    )
  }
}
