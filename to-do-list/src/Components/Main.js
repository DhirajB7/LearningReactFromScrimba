import React, { Component } from 'react'
import OneList from './OneList'
import todosData from '../todoData'



class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
             todo:todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
     this.setState(
         preState => {
             const updatedToDo = preState.todo.map(a=>{
                 if(a.id===id){
                    return{
                        ...a,
                        completed:!a.completed
                    }
                 }
                 return a
             })
            return{
                todo:updatedToDo
            }
         }
     )
    }
    

    render() {
        var taskList =  this.state.todo.map((data)=> <OneList key={data.id} task={data} handleChange={this.handleChange} />)

        return (
            <div className="todo-list">
           {taskList}
        </div>
        )
    }
}


export default Main
