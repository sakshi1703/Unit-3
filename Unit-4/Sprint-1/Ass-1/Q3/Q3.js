// const { title } = require("framer-motion/client");
const ChangeTitle = ()=>{
    // const [change, setChange] = React.useState("")
    const handleTitle=()=>{
        document.title = "React"
    }
    return(
        <button onClick={handleTitle}>React</button>
    )
}


const App=()=>{
    return(
        <ChangeTitle/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)