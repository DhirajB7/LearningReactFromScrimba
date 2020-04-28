import React, { Component } from 'react'
import Article from './Article'

class Main extends Component {

    constructor(){
        super()
        this.state={
            isLoading:true
        }
        console.log("I AM CONSTRUCTOR")
    }

     componentDidMount(){
         console.log("I MOUNTED!!")
        setInterval(()=>{
            let a = this.state.isLoading
            this.setState(
                {
                    isLoading:!a
                 }
            )
        },1500)
     }

    render() {
        console.log("I RENDER!!")
        return (
            <div>
            <Article bool={this.state.isLoading}/>
            </div>
        )
    }
}

export default Main