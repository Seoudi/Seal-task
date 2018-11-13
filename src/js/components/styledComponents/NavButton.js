import React from 'react';
import { Link } from 'react-router-dom'

const button = {
    padding:' 0 0 0 40px',
}
const link ={
    color: '#17a2b8',
    textDecoration: 'none',
    fontFamily: 'Montserrat',
    border: '2px solid #17a2b8',
    padding: '10px 10px 10px 40px',
    fontSize: '12px',
    background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/COMdoWZ.png)',
    backgroundSize: '12px 12px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '7% 50%',
    borderRadius: '5px',
    transitionProperty: 'all',
    transitionDuration: '.5s',
    float:'right'
}

const Button = (props) => {
    return (
        <div style={button}>
            <Link to={props.link}>
                <span style={link}>{props.name}</span>
            </Link>
        </div>
    )
}

export default Button