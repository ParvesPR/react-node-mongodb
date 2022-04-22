import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>Available Users: {users.length}</h2>
            {
                users.map(user => <li>{user.name}:: {user.email}</li>)
            }
        </div>
    );
};

export default Home;