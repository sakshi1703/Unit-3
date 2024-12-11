
const App = ()=>{
    const blogs = [
        { title: "React Basics", content: "Learn the basics of React.", isFeatured: true },
        { title: "Advanced React", content: "Delve deeper into React.", isFeatured: false },
        { title: "React Performance Tips", content: "Optimize your React apps.", isFeatured: true },
    ];
      
    return(
        <div>
            <h1>Blogs Posts</h1>
            {blogs.map((ele, i)=>(
                <div style={{
                    backgroundColor: ele.isFeatured ? "lightYellow" : "lightgreen"
                }}>
                    <h2>{ele.title}</h2>
                    <p>{ele.content}</p>
                </div>

            ))}
        </div>
        

    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)