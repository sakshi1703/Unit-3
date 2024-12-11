const Toggle = ()=>{
    const[toggle, setToggle] = React.useState(true)
    const[text, setText] = React.useState("Hide")
    const handleClick=()=>{
        setToggle(!toggle)
        setText(toggle ? "Show" : "Hide")
    }

    return(
        <>
            <h1 style={{color: toggle ? "black" : "white"}}> Hii click to hide</h1>
            <button 
            onClick={handleClick}
            >{text}</button>
        </>
    )
}

const App=()=>{
    return(
        <Toggle/>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(<App/>)