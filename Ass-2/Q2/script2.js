const Cards = ({title, children})=>{
    return(
        <>
            <h2>{title}</h2>
            <h4>{children}</h4>
        </>
    )
}

const App=()=>{
    const props = {
        title: "Sakshi",
        children: "FrontEnd Developer"
    }
    return(
        <>
            <Cards title = {props.title} children = {props.children}/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)