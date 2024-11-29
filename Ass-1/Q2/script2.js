
function Languages(){
    let arr = ["React", "JavaScript", "CSS"]
    return(
        <>
            <h3>Names of Programming Languages</h3>
            <ul>
                {
                    arr.map((ele) =>{
                        return(
                            <li>{ ele }</li>
                        )
                    })
                }
            </ul>  
        </>
    )
}

function App(){
    return(
        <Languages/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)