import React from 'react';

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = (name, email);
    }

    return (
        <div>
            <h2>Please add a user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" placeholder='Name' required /> <br />
                <input type="email" placeholder='Email' required /> <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;