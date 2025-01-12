



function App() {
  const [tasks, setTasks] = React.useState([]);

  const fetchData = () => {
    axios("https://your-firebase-db.firebaseio.com/tasks.json")
      .then((response) => {
        // Convert object to array of tasks (if response is an object)
        const taskArray = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }));
        setTasks(taskArray);
      })
      .catch((error) => console.log("Error fetching tasks:", error));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li> // Now it will correctly render
        ))}
      </ul>
    </div>
  );
}

export default TaskList;



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)