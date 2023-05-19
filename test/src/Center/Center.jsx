import React, { Component } from 'react'
import './Center.css'
import {FaPhoneVolume} from 'react-icons/fa'
import ListItem from '../components/ListItem'

const content = 
[{
  id:1,
  content :"Lunes  9:00 - 21:00"
},{
  id:2,
  content :"Lunes  9:00 - 21:00"
},{
  id:3,
  content :"Lunes  9:00 - 21:00"
},{
  id:4,
  content :"Lunes  9:00 - 21:00"
},{
  id:5,
  content :"Lunes  9:00 - 21:00"
},{
  id:6,
  content :"Lunes  9:00 - 21:00"
}]

export default class Center extends Component {


  render() {
    return (
      <div className='Center'>
        <span> Horarios</span>
        <ul className='ul'>
            
            {content.map((item) => <ListItem key={item.id} content = {item.content} />)}
            
        </ul>
        
        <span>   Telephone</span>

        <p><FaPhoneVolume  />0599344529</p>
        
      </div>
      
    )
  }
}
