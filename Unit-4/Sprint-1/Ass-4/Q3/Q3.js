

function App() {
    const [emails, setEmails] = useState([{ email: '', valid: true }]);

    const handleEmailChange = (index, value) => {
        const newEmails = [...emails];
        newEmails[index].email = value;
        newEmails[index].valid = validateEmail(value);
        setEmails(newEmails);
    };

    const handleAddEmail = () => {
        setEmails([...emails, { email: '', valid: true }]);
    };

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    };


    return (
        <div>
            <form>
                {emails.map((emailObj, index) => (
                    <div key={index}>
                        <label htmlFor={`email${index}`}>Email {index + 1}:</label>
                        <input
                            type="text"
                            id={`email${index}`}
                            value={emailObj.email}
                            onChange={(e) => handleEmailChange(index, e.target.value)}
                            style={{
                                borderColor: emailObj.valid ? 'black' : 'red'
                            }}
                            placeholder="Enter email"
                        />
                        {!emailObj.valid && <span style={{ color: 'red' }}>Invalid email format</span>}
                    </div>
                ))}
                <button type="button" onClick={handleAddEmail}>Add Email</button>
            </form>
            <div>
                <h3>Entered Emails:</h3>
                <ul>
                    {emails.map((emailObj, index) => (
                        <li key={index}>{emailObj.email}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)