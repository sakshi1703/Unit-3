const Toggle = ()=>{
    const[toggle, setToggle] = React.useState(true)
    const handleClick=()=>{
        setToggle(!toggle)
    }

    return(
        <>
            <h1 style={{color: toggle ? "black" : "white"}}> Hii click to hide</h1>
            <button 
            onClick={handleClick}
            >Hide</button>
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