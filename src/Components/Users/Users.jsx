import { useState, useEffect } from "react"
import { getUsers, getUser, createUser, editUser, deleteUser } from "../apis/users";
import { Table, Button } from 'antd'
import "./index.css"

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Employment Status',
        dataIndex: 'employment',
        key: 'employment',
    },
    {
        title: 'Marital Status',
        dataIndex: 'maritalStatus',
        key: 'maritalStatus',
    },
    {
        title: 'Actions',
        dataIndex: 'action',
        key: 'action',
    },
];

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data);
            setLoading(false);
        })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Users</h1>
            <p>You can manage your users here.</p>
            <CreateButton />
            <Table className="users-table" dataSource={users} columns={columns} />
        </div>
    );
};

const CreateButton = () => {
    return (
        <div className="create-button">
            <Button type="primary">Create New User</Button>
        </div>
    )
}
export default Users;