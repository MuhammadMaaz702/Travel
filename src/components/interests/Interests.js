import React from 'react'
import { BiBed } from 'react-icons/bi';
import { MdOutlineLocalActivity } from 'react-icons/md';
import { Interest } from '../dummyData.js/Dummy';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './interest.css'
import { Link } from 'react-router-dom'


export default function Interests() {
  return (
    <div className='row'>
      {
        Interest?.map((n, i) => {
          return <div key={i} className={`col card-inner ${i >= 5 ? ' d-lg-none' : ''}`}>
            <p>{n.text}</p>
            <span>{n.icon}</span>
          </div>
          // <Link to='/travelstories'>  </Link>
        })
      }
      <div className='col card-inner'>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="More"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    </div >
  )
}
