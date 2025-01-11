
const ToggleButton = ()=>{
    const [change ,setChange] = React.useState(false)

    const handleChange = ()=>{
        setChange(!change)
    }
    return(
        <>
        <h1>{change? "Hello!, Welcome to React State Management": "click on button to show message"}</h1>
        <button onClick={handleChange}>{change? "Hide": "Show"}</button>
        </>
    )
}

const App = ()=>{
    return(
        <ToggleButton/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)