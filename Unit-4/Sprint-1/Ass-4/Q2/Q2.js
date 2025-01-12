

function App() {
    // Create a ref to manage the input field
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredUsername = inputRef.current.value;
        if (enteredUsername.trim()) {
            alert('Submitted username: ' + enteredUsername);
            inputRef.current.value = ''; // Clear the input field after submission
        } else {
            alert('Please enter a username.');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    ref={inputRef} 
                    placeholder="Enter username"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)