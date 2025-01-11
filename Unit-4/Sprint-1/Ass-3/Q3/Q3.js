
const ShoppingList = ()=>{
    const [addItem, setAddItem] = React.useState([])
    const [newItem, setNewItem] = React.useState("")
    const [newQuantity, setNewQuantity] = React.useState("")

    const handleItem = ()=>{
        if(!newItem || !newQuantity || newQuantity < 1){
            alert("Please enter valid item and quantity")
            return;
        }

        setAddItem([...addItem, {name: newItem, quantity: newQuantity}])
        setNewItem("")
        setNewQuantity("")
    }

    const handleClearAll=()=>{
        setAddItem([])
    }

    const handleRemove=(i)=>{
        const List = addItem.filter((_,index)=>index !== i)
        setAddItem(List)
    }

    return(
        <>
        <h1>Item List</h1>
        <br/>
        <input type="text" value={newItem} placeholder="Enter name of item" onChange={(e)=>setNewItem(e.target.value)} />
        <input type="Number" value={newQuantity} placeholder="Enter quantity of item" onChange={(e)=>setNewQuantity(e.target.value)} />
        <br/><br/>
        <button onClick={handleItem}>Add</button>
        
        <button onClick={handleClearAll}>Clear All</button>



        <h1>List</h1>
        <div>
            {
                addItem.map((ele, i)=>(
                    <li key={i}>{ele.name}- {ele.quantity} <br/>   
                    <button onClick={()=>handleRemove(i)}>Remove</button>
                    </li>
                ))
            }
        </div>
        </>

        
        
    )
}


const App = ()=>{
    return(
        <ShoppingList/>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)