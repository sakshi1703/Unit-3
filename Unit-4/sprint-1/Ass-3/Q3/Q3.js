// const { i } = require("framer-motion/client");

const Todo = () =>{
    const [task, setTask] = React.useState([]);
    const [input, setInput] = React.useState("");

    function AddTask(){
        if(input.trim() === ""){
            alert("Please Enter task in input")
            return;
        }

        setTask([...task, input])
        setInput("")
    }
    function DeleteTask(){

        setTask(task.slice(0,-1))
    }
    return(
        <>
        <h1>Task Manager</h1>
        <input type="text" placeholder = "Enter Task" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick = {AddTask}>Add Task</button>
        <button onClick ={DeleteTask}>Delete</button>
        <ul>
           { task.map((ele,i)=>(
                <li key={i}>{ele}</li>
            ))}
        </ul>
        </>
    )

}

const App=()=>{
    return(
        <Todo/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)