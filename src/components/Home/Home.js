import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to Delete?');
        if (proceed) {
            console.log('user deleting with id:', id)
        }
    }
    return (
        <div>
            <h2>Available Users: {users.length}</h2>
            {
                users.map(user => <li key={user._id}>{user.name}:: {user.email}
                    <button onClick={() => handleDeleteUser(user._id)}>X</button>
                </li>
                )
            }
        </div>
    );
};

export default Home;