// import PocketBase from 'pocketbase';
async function getUsers() {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // const result = await db.records.getList('testUsers');
    const res = await fetch('http://127.0.0.1:8090/api/collections/testUsers/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    return data?.items
}

async function getUser(userId) {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // await db.records.getOne('testUsers', {
    //   id: userId
    // });
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/testUsers/records/${userId}`, { cache: 'no-store' }
    );
    const data = await res.json();
    return data;
}

async function createUser(payload) {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // await db.records.create('notes', {
    // name,
    // email,
    // age,
    // maritalStatus
    // });
    const { name, email, age, employment, maritalStatus } = payload
    await fetch('http://127.0.0.1:8090/api/collections/testUsers/records', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            age,
            employment,
            maritalStatus
        }),
    });
}

async function editUser(payload) {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // await db.records.update('testUsers', {
    // id:userId,
    // name,
    // email,
    // age,
    // maritalStatus
    // });
    const { userId, name, email, age, employment, maritalStatus } = payload
    await fetch(`http://127.0.0.1:8090/api/collections/testUsers/records/${userId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            age,
            employment,
            maritalStatus
        }),
    })
}

async function deleteUser(userId) {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // await db.records.delete('testUsers', {
    //   id: userId
    // });
    await fetch(`http://127.0.0.1:8090/api/collections/testUsers/records/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
export {
    getUsers,
    getUser,
    createUser,
    editUser,
    deleteUser
}