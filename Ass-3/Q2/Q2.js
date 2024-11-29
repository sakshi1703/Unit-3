
const App=()=>{
    const [change, setChange] = React.useState(0)
    const[gap, setGap] = React.useState(0)
    const handleIncrease=()=>{
        setChange(change+gap)
    }

    const handleDecrease=()=>{
        setChange(change-gap)
    }

    const handleStepChange = (event) => {
        const newStep = parseInt(event.target.value, 10);
        if (!isNaN(newStep) && newStep > 0) {
            setGap(newStep); 
        }
    }
    return(
        <>
            <h1>{change}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <div>
                <label>Step: </label>
                <input
                    type="number"
                    value={gap}
                    onChange={handleStepChange}
                    min="1"
                />
            </div>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)