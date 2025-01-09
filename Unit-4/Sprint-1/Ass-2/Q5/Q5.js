

const DynamicBlog = ()=>{
    const blogs = [
        { title: "React Basics", content: "Learn the basics of React.", isFeatured: true },
        { title: "Advanced React", content: "Delve deeper into React.", isFeatured: false },
        { title: "React Performance Tips", content: "Optimize your React apps.", isFeatured: true },
        { title: "Understanding JSX", content: "A guide to JSX syntax and how it works with React.", isFeatured: false },
        { title: "React Hooks Overview", content: "Learn about React hooks such as useState, useEffect, etc.", isFeatured: true },
        { title: "State Management in React", content: "Managing state effectively in large applications.", isFeatured: false },
        { title: "Component Lifecycle Methods", content: "An overview of React component lifecycle methods.", isFeatured: false },
        { title: "TypeScript with React", content: "Using TypeScript to enhance React development.", isFeatured: true },
        { title: "Styled Components in React", content: "How to style your React components using styled-components.", isFeatured: false },
        { title: "React Context API", content: "Sharing state across components using React Context API.", isFeatured: true },
        { title: "React Router Basics", content: "Setting up routing in a React application with React Router.", isFeatured: false },
        { title: "Debugging React Apps", content: "Common techniques for debugging React applications.", isFeatured: true },
        { title: "React Server-Side Rendering", content: "How to set up server-side rendering with React.", isFeatured: false },
        { title: "React Testing Library", content: "Writing tests for your React components with React Testing Library.", isFeatured: true },
        { title: "React Native Overview", content: "Introduction to building mobile apps with React Native.", isFeatured: false },
        { title: "Code Splitting in React", content: "Improve your app's performance by splitting your code.", isFeatured: true },
        { title: "Error Boundaries in React", content: "Handling errors in React components with Error Boundaries.", isFeatured: false },
        { title: "React Suspense for Data Fetching", content: "Simplifying data fetching and async code in React using Suspense.", isFeatured: true },
        { title: "React DevTools Tips", content: "Optimizing your React development workflow with React DevTools.", isFeatured: false },
        { title: "React 18 Features", content: "What's new in React 18 and how to use the new features.", isFeatured: true },
    ];
    
      return(
        <div>
            <div>
                {
                    blogs.map((ele)=>(
                        <div style={{
                            backgroundColor: ele.isFeatured? "Gold": "lavender",
                            padding: "20px",
                            border: ele.isFeatured? "1px solid GoldenRod": "1px solid DarkViolet",
                            margin: "20px"
                        }}>
                            <h1>{ele.title}</h1>
                            <p>{ele.content}</p>
                            <h3 style={{
                                color: ele.isFeatured? "lime" : "DarkViolet"
                            }}>{ele.isFeatured? "featured" : "Regular"}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
      )
}

const App = ()=>{
    return(
        <DynamicBlog/>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)