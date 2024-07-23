import { useState } from "react"

const AddTask = ({onSubmit}) => {
    // return <p>this is add task </p>

    const [task,setTask] = useState({
        title:"",
        description:"",
    });

    let handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        onSubmit(task);
    };


    return (
        
        <section className="screen">
        <h3 className = "ui heading center">Add New Task</h3>
        <div className="ui form">
            <form onSubmit = {onFormSubmit}>
            <div className="field">
                <label>Title</label>

                <input 
                type="text"
                spellCheck={false}
                data-ms-editor={true} 
                // data-last-active-input="" 
                // data-listener-added_9c84a201="true" 
                placeholder="Task Title" 
                name="title" 
                onChange={handleInputChange}
                value = {task.title}  // two way binding
                />

             </div>
             
             <div className="field">
                <label>Description</label>

                <input 
                type="text" 
                spellCheck={false}
                data-ms-editor={true}
                // data-last-active-input="" 
                // data-listener-added_9c84a201="true" 
                placeholder="Task Description" 
                name="description"
                onChange = {handleInputChange}
                value = {task.description}  // two way binding
                />

             </div>

             <button type="submit" class="ui primary button">Submit</button>
             </form>
        </div>
        </section>
    )
}

export default AddTask;

