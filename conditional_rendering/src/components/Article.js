import React from 'react'

function Article(props) {
    return (
        props.bool ?  <h1>LOADING...</h1> :  <h1>I AM ARTICLE MOTHER FUCKERS!!!!</h1>
    )
}

export default Article
