import React, { Component } from 'react'
import Title from './Title'

class Main extends Component {


    constructor() {
        super()
    
        this.state = {
             text:true,
             in:"IN",
             out:"OUT"
        }
    }


    render() {
        return (
            <div>
                <Title text = {this.state.text?this.state.in:this.state.out}/>
                <button onClick={()=>{
                    this.setState(
                        {
                            text:!this.state.text
                        }
                    )
                    }}>LOG {this.state.text?this.state.out:this.state.in}</button>
                <hr/>
                <hr/>
            </div>
        )
    }
}

export default Main