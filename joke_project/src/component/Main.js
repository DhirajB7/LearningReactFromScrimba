import React from 'react'
import jokesData from './jokesData'
import Joke from './Joke'



function Main() {

   var jokeArr =  jokesData.map((joke)=><Joke key= {joke.id} question = {joke.question} answer = {joke.punchLine}/>)

    return (
        <div>
            {jokeArr}
        </div>
    )
}

export default Main
