import React from 'react'

function Product(props) {
    return (
        <div>
            <p>{props.item.name}</p>
            <p>Rs : {props.item.price}</p>
            <p>{props.item.description}</p>
            <hr/>
            <hr/>
        </div>
    )
}

export default Product
