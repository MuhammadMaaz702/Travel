import React from 'react'
import './helpplanet.css'
import place from '../../assets/images/place.jpg'
import advisor from '../../assets/images/Tripadvisor.jpg'

export default function HelpPlanet() {
    return (
        <div>
            <a>
                <div className="row  help-planet">
                    <div className="col help-trip-img">

                    </div>
                    <div className="col col1">
                        <div>
                            <img src={advisor} alt="" />
                            <span>Tripadvisor Foundation</span>
                        </div>
                        <h3>Help us help the planet</h3>
                        <p>Together, we’ve raised more than $10 million USD for World Central Kitchen’s emergency food relief efforts around the world. Donate to their Climate Disaster Fund and the Tripadvisor Foundation will match it</p>
                        <button className='list-btn'>See The List</button>
                    </div>

                </div>
            </a>
        </div>
    )
}
