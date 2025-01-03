
const App = ()=>{
    const Items = ["React", "Javascript", "CSS"]

    return(
        <ul>
            {
                Items.map((ele, key)=>(
                    <li key={key}>{ele}</li>
                ))
            }
        </ul>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
