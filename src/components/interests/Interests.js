import React from 'react'
import { BiBed } from 'react-icons/bi';
import { MdOutlineLocalActivity } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { Interest } from '../dummyData.js/Dummy';
import Dropdown from 'react-bootstrap/Dropdown';
import './interest.css'
import { Link } from 'react-router-dom'

export default function Interests() {
  return (
    <div className='row outer-col'>
      {
        Interest?.map((n, i) => {
          return<Link to={n.customlink} key={i} className={`col card-inner ${i >= 5 ? ' d-lg-none' : ''}`}>
            <p>{n.text}</p>
            <span>{n.icon}</span>
          </Link>
  
        })
      }
      <div className='col card-inner'>
      <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" >
        <div className='more-btn d-flex align-items-center justify-content-between'>
          <div><span>More</span></div>
        <div className='ms-5 ps-5'> <BsThreeDots/></div>
       
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
    </div >
  )
}
