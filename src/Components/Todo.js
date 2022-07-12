// rcc
import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(){
    super();  //impt to write super
    this.state={
      tasks:[
        {id:1,task:"Revise JS"},
        {id:2,task:"Revise DSA"},
      ],
      curTask : "",
    };
  }

   handleChange= (e) => {
    console.log(e.target.value);
    this.setState({
      curTask:e.target.value,
    });
    }
    handleSubmit = () =>{
      this.setState({
        tasks:[...this.state.tasks,{task:this.state.curTask,id:this.state.tasks.length+1}]
      })
    }
    handleDelete =(id) =>{
      // let narr = [];
      let narr = this.state.tasks.filter((taskObj) => {
        return taskObj.id != id;
      });
      this.setState({
        tasks:[...narr]
      });
    }
  render() {
    return (
      // <div>Todo</div>
      <div>
        <input type="text" value={this.state.curTask} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      {
      // for writing js inside jsx
      this.state.tasks.map((taskObj) =>{
        // since html tags so wrap under return
          return(
            <li key={taskObj.id}>
            <p>{taskObj.task}</p>
            <button onClick={()=>{this.handleDelete(taskObj.id)}}>Delete</button>
            </li>
          )
        })
      }
      </div>
    );
  }
}
