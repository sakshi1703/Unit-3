
function App() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() === '') {
            setError('Username is required.');
        } else {
            setError('');
            alert('Submitted username: ' + username);
        }
    };
    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    value={username} 
                    onChange={handleChange} 
                    placeholder="Enter username"
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
        );
    }


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)