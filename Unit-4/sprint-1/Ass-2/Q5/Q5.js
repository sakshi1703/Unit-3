
const Head = () =>{
    return(
        <div style={{display:"flex"}}>
            <h2 style={{paddingLeft:"50px", fontSize: "30px", width:"40%"}}>The Right Plan for <br></br><span style={{color:"purple", paddingLeft:"20px",}}>Your Business</span> </h2>
            {/* <h2 style={{color:"purple", paddingLeft:"80px", fontSize: "30px"}}>Your Business</h2> */}
            <h4 style={{display:"flex", width:"50%", justifyContent: "left"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
        </div>
    )
}

const Start=()=>{
    const lorem = [
        {title: "Starter", statu: "Free", isFeatured: "true"},
        {title: "Lorem Plus", statu: "$32.00", isFeatured: "false"},
        {title: "Lorem Pro", statu: "$50.00", isFeatured: "true"}
    ];
    return(
        <div>
            {
                lorem.map=((ele, i)=>(
                    <div>
                        <h3>{ele.title}</h3>
                        <h3></h3>
                    </div>
                ))
            }
        </div>
    )
}

const App = () => {
    return(
        <>
            <Head/>
            <Start/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)