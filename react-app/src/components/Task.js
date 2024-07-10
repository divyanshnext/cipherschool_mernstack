const Task = () => {

    return(
        <div className="card">
    <div className="content">
      
      <div className="header">
        Task
      </div>
      <div className="meta">
        created date
      </div>
      <div className="description">
        going to gym is good for muscle growth but not good for lifetime
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Edit task</div>
        <div className="ui basic red button">Delete task</div>
      </div>
    </div>
  </div>
    );

    
}

export default Task;