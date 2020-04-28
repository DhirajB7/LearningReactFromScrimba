import React from 'react'
import Product from './Product'
import products from '../products'

function Main() {

    var toDisp = products.filter((p)=>p.price>=0).map((p)=>
        <Product
         key = {p.id}
            item={p}
            />
    )
    return (
        <div>
            {toDisp}
        </div>
    )
}

export default Main
