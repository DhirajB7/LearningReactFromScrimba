import React, { Component } from 'react'

export default class OtherMain extends Component {


    constructor(){
        super()
        this.state = {
            firstName:"",
            lastName:""
        }
        this.changeIsSeen = this.changeIsSeen.bind(this)
    }


    changeIsSeen(event){
       this.setState(
           {
            [event.target.name]:event.target.value
           }
       )
    }

    render() {
        return (
            <form>
                <input type="text" name="firstName" placeholder="firstName" onChange={this.changeIsSeen}/>
                <hr/>
                <input type="text" name="lastName" placeholder="lastName" onChange={this.changeIsSeen}/>
                <hr/>
                <hr/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}
