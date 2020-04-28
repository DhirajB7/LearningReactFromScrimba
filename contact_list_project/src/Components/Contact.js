import React from 'react'

function Contact(props) {
    console.log(props.details)
    return (
        <div className="contactCard">
            <img src= {props.details.url}/>
            <p>{props.details.name}</p>
            <p><span>EMAIL :{props.details.email}</span></p>
            <p><span>PHONE NUMBER : {props.details.poneNumer} </span></p>
            <hr></hr>
        </div>
    )
}

export default Contact
