
function handleClick(){
    document.title = "React"
}

function Button(){
    return(
        <button onClick = {handleClick}>Change Title</button>
    )
}


function App(){
    return(
        <Button/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)