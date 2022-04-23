import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            console.log('user deleting with id:', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted!!');
                        const remainingUser = users.filter(user => user._id !== id)
                        setUsers(remainingUser);
                    }
                })
        }
    }
    return (
        <div>
            <h2>Available Users: {users.length}</h2>
            {
                users.map(user => <li
                    key={user._id}>
                    {user.name}:: {user.email}
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button onClick={() => handleDeleteUser(user._id)}>X</button>
                </li>
                )
            }
        </div>
    );
};

export default Home;