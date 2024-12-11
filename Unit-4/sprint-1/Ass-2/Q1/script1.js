
function ChangeColor(){
    const [isBlue, setIsBlue] = React.useState(true);
    const handleToggle = () =>{
        setIsBlue(!isBlue);
    }
    return(
        <button
            onClick={handleToggle}
            style = {{
                backgroundColor: isBlue ? "blue" : "red",
                color: "white",
        }}
        >
            Change Color: {isBlue? "blue" : "red"}
        </button>
    );
}

function App(){
    return(
        <ChangeColor/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)