import React from 'react'
import './firsttrip.css'
// import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import trevel from '../../assets/images/travelers_choice.svg'

export default function FirstTripList() {
    return (
        <div>
            <a>
                <div className="row hotel-listing">
                    <div className="col col1">
                        <h3>Your First Trip Starts Here</h3>
                        <p>Top Rated Hotels From the World</p>
                        <button className='list-btn'>See The List</button>
                    </div>
                    <div className="col next-trip-img">
                        <div>
                            <img src={trevel} alt="" />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
