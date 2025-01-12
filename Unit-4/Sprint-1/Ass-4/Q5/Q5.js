const App = () => {
            const [users, setUsers] = useState([]);
            const [newUser, setNewUser] = useState({ name: "", email: "" });
            const [editingUser, setEditingUser] = useState(null);
            const [error, setError] = useState("");

            const validateEmail = (email) => {
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                return emailPattern.test(email);
            };

            const fetchUsers = () => {
                axios.get("https://your-firebase-db.firebaseio.com/users.json")
                    .then((response) => {
                        const usersList = response.data ? Object.keys(response.data).map(key => ({ id: key, ...response.data[key] })) : [];
                        setUsers(usersList);
                    })
                    .catch((error) => {
                        console.error("Error fetching users:", error);
                    });
            };

            const handleAddUser = () => {
                if (!newUser.name || !newUser.email || !validateEmail(newUser.email)) {
                    setError("Name is required and email must be valid.");
                    return;
                }

                axios.post("https://your-firebase-db.firebaseio.com/users.json", newUser)
                    .then(() => {
                        setNewUser({ name: "", email: "" });
                        fetchUsers();
                    })
                    .catch((error) => console.error("Error adding user:", error));
            };

            const handleEditUser = (user) => {
                setEditingUser(user);
            };

            const handleSaveEdit = () => {
                if (!editingUser.name || !editingUser.email || !validateEmail(editingUser.email)) {
                    setError("Name is required and email must be valid.");
                    return;
                }

                axios.patch(`https://your-firebase-db.firebaseio.com/users/${editingUser.id}.json`, {
                    name: editingUser.name,
                    email: editingUser.email
                })
                    .then(() => {
                        setEditingUser(null);
                        fetchUsers();
                    })
                    .catch((error) => console.error("Error editing user:", error));
            };

            const handleDeleteUser = (id) => {
                axios.delete(`https://your-firebase-db.firebaseio.com/users/${id}.json`)
                    .then(() => fetchUsers())
                    .catch((error) => console.error("Error deleting user:", error));
            };

            useEffect(() => {
                fetchUsers();
            }, []);

            return (
                <div>
                    <h1>User Management</h1>

                    <div>
                        <h2>Add New User</h2>
                        <input
                            type="text"
                            placeholder="Name"
                            value={newUser.name}
                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        />
                        <button onClick={handleAddUser}>Add User</button>
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <h2>User List</h2>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                {editingUser && editingUser.id === user.id ? (
                                    <div>
                                        <input
                                            type="text"
                                            value={editingUser.name}
                                            onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                                        />
                                        <input
                                            type="email"
                                            value={editingUser.email}
                                            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                                        />
                                        <button onClick={handleSaveEdit}>Save</button>
                                    </div>
                                ) : (
                                    <div>
                                        <p>{user.name} - {user.email}</p>
                                        <button onClick={() => handleEditUser(user)}>Edit</button>
                                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        };

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)