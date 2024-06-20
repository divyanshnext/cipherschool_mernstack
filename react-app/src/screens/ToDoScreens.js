import { Component } from "react";

class ToDoScreen extends Component {

    state = {
        taskCount: 0,
    };

    render() {
        return (
            <div className = "screen">
                <h1 className="ui heading center">To Do List</h1>
                <div>
                <button onClick={(e)=> {
                    //we have to pass an anonymous function here to use event handller 
                    this.setState({
                        ...this.state, 
                        taskCount: this.state.taskCount + 1
                    });
                    console.log(this.state.taskCount); 
                    // to use state object we have used it 
                    // console.log("Add Task button was clicked.")
                }}
                className="ui secondary button"> Add Task
                </button>
                <p>The number of tasks are : {this.state.taskCount}</p>
                {/* whenever we have a variable which is constantly changing and the change is the variable can calls the content on the screen to change they need to be stores in a very special kind of variable named //state */}
                </div>
            </div>
        );
    }
}

export default ToDoScreen; 
//agar export nhi kroge toh chlega hi nhi app bnake export krna padta hai 