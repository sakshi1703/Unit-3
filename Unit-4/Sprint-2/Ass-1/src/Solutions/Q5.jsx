
const Crud = ()=>{
    return (
        <div className="app">
          <nav style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white" }}>
            <h1>Task Manager</h1>
            <div>
              <div>
                Completed: {taskCount.completed} | Ongoing: {taskCount.ongoing} | Not Started: {taskCount.notStarted}
              </div>
              <div>
                <h4>Completed</h4>
                <div className="card" onMouseOver={() => console.log("hovered completed")}>
                  {tasks
                    .filter((task) => task.status === "completed")
                    .map((task) => (
                      <p key={task.id}>{task.name}</p>
                    ))}
                </div>
                <h4>Ongoing</h4>
                <div className="card" onMouseOver={() => console.log("hovered ongoing")}>
                  {tasks
                    .filter((task) => task.status === "ongoing")
                    .map((task) => (
                      <p key={task.id}>{task.name}</p>
                    ))}
                </div>
                <h4>Not Started</h4>
                <div className="card" onMouseOver={() => console.log("hovered not-started")}>
                  {tasks
                    .filter((task) => task.status === "not-started")
                    .map((task) => (
                      <p key={task.id}>{task.name}</p>
                    ))}
                </div>
              </div>
            </div>
          </nav>
    
          <div style={{ padding: "20px" }}>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter a task name"
            />
            <button onClick={addTask}>Add Task</button>
    
            <div>
              {tasks.map((task) => (
                <div key={task.id}>
                  <div>
                    <input
                      type="text"
                      value={task.name}
                      onChange={(e) => updateTask(task.id, e.target.value)}
                    />
                    <button onClick={() => updateStatus(task.id, "completed")}>Complete</button>
                    <button onClick={() => updateStatus(task.id, "ongoing")}>Ongoing</button>
                    <button onClick={() => updateStatus(task.id, "not-started")}>Not Started</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    
}