import React from 'react'
import Contact from './Contact'

function Main() {
    return (
        <div>
            <Contact 
            details= {
                {
            url:"http://placekitten.com/100/200",
            name:"cat_one",
            email:"cat_one@cats.com",
            poneNumer:"11111111"
                }
            }
            />

<Contact 
            details= {
                {
            url:"http://placekitten.com/200/200",
            name:"cat_two",
            email:"cat_two@cats.com",
            poneNumer:"222222222"
                }
            }
            />

<Contact 
            details= {
                {
            url:"http://placekitten.com/300/200",
            name:"cat_three",
            email:"cat_three@cats.com",
            poneNumer:"333333333"
                }
            }
            />

<Contact 
            details= {
                {
            url:"http://placekitten.com/400/200",
            name:"cat_four",
            email:"cat_four@cats.com",
            poneNumer:"444444444"
                }
            }
            />

<Contact 
            details= {
                {
            url:"http://placekitten.com/500/200",
            name:"cat_five",
            email:"cat_five@cats.com",
            poneNumer:"5555555555"
                }
            }
            />


            
        </div>
    )
}

export default Main
