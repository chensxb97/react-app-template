async function getDocumentation() {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // const result = await db.records.getList('posts');
    const res = await fetch('http://localhost:3001/api/documentation/get');
    const data = await res.json();
    return data?.content
}

export {
    getDocumentation
}