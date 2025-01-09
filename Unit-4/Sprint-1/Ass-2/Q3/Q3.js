
const Card = ()=>{

    const Content = [
        {
            name: "starter",
            List: ["1 lorem ipsum", "Lorem, ipsum dolor", "Monthly Updates"],
            Cost: "Free",
            Button: "Get Started"
        },
        {
            name: "Lorem Plus",
            List: ["1 lorem ipsum", "Lorem, ipsum dolor", "Monthly Updates"],
            Cost: "$32.00",
            Button: "Get Started"
        },,
        {
            name: "Lorem Pro",
            List: ["1 lorem ipsum", "Lorem, ipsum dolor", "Monthly Updates"],
            Cost: "$50.00",
            Button: "Get Started"
        },
    ]

    return(
        <div style={{
            margin: "1px solid black"
        }}>
            {
                Content.map((ele)=>(
                    <div>
                        <div><h1>{ele.name}</h1></div>
                        <div>
                            <ul>
                                {ele.List.map((ele)=>(
                                    <li>{ele}</li>
                                ))}
                            </ul>
                        </div>
                        <div><h2>{ele.Cost}</h2></div>
                        <div><h3>{ele.Button}</h3></div>
                    </div>
                ))
            }
        </div>
    )
}

const App = ()=>{
    return(
        <Card/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)