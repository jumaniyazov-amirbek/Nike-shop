import React from 'react'
import bg from '../../assets/images/Image (1).png'
export default function About() {
    return (
        <div className='About-block'>
            <div className="About-block-bg"></div>
            <div className="About-text">
                <h1>Nike Men Running <br />
                    Sneakers</h1>
                    <p>Performance and design. Taken right to the edge.</p>
                    <button>Order now</button>
            </div>
            <div className="About-img"><img src={bg} alt="" /></div>
        </div>
    )
}
