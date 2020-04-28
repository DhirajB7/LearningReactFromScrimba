import React, { Component } from 'react'

class Main extends Component {

    constructor() {
        super()
    
        this.state = {
             msg:"HEEEEE",
             flag:false
        }
    }

    componentDidMount(){
        fetch("https://swapi.dev/api/people/1/").then(a=>a.json()).then(a=>{
            console.log(a)
            this.setState(
                {
                    flag:true,
                    msg:a.name
                }
            )
        })
    }
     
    render() {
        return (
            <div>
                {this.state.flag?this.state.msg:"Loading..."}
            </div>
        )
    }
}

export default Main