
const Card = ()=>{
    const Content = [
        {
            title: "Introduction to JavaScript",
            description: "A beginner's guide to learning JavaScript."
          },
          {
            title: "Advanced CSS Techniques",
            description: "Explore advanced methods for styling websites with CSS."
          },
          {
            title: "Mastering Python",
            description: "In-depth look at Python programming for data analysis."
          },
          {
            title: "Web Development with React",
            description: "An overview of building interactive UIs using React."
          },
          {
            title: "Introduction to Machine Learning",
            description: "Understanding the fundamentals of machine learning algorithms."
          }
    ] 

    return(
        <div>
            {
                Content.map((ele)=>(
                    <div>
                        <h1>{ele.title}</h1>
                        <p>{ele.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

// const Card = ({title,children})=>{
//     return(
//         <div>
//             <h1>{title}</h1>
//             <p>{children}</p>
//         </div>
//     )
// }

const App = ()=>{
    return(
        <>
        {/* <Card title="Introduction to JavaScript">
        <p>A beginner's guide to learning JavaScript.</p>
      </Card>

      <Card title="Advanced CSS Techniques">
        <p>Explore advanced methods for styling websites with CSS.</p>
      </Card>

      <Card title="Mastering Python">
        <p>In-depth look at Python programming for data analysis.</p>
      </Card> */}
        <Card/>
        {/* <Card2/> */}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)