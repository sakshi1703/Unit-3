function ListComponent({ items }) {
    return (
        <div>
            <h2>Item List</h2> 
            {items.length > 0 && items.map((item, i) => <p key={i}>{item}</p>)} 
        </div>
    );
  }
  
  function App() {
    const items = ["Item 1", "Item 2", "Item 3"];
    return (
      <div>
        <h1>My App</h1>
        <ListComponent items = {items}/>
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(<App />);
  