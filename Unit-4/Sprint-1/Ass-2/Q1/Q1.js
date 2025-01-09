// const { Button } = require("@chakra-ui/react");

// const { color } = require("framer-motion");



const App = ()=>{
    const [isRed, setIsRed] = React.useState(false)

    const handleChage=()=>{
        setIsRed(isRed? false : true)
    }
    return(
        <>
        <button style={{background: isRed? "blue": "red"}}
        onClick={handleChage}
        >{isRed? "red" : "blue"}</button>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)