import React from 'react'

function Joke(props) {
    return (
        <div>
           <p style={{display: props.question ? "block" : "none"}}>QUESTION : {props.question}</p>
          <p>ANSWER : {props.answer}</p>
          <hr/>
        </div>
    )
}

export default Joke
