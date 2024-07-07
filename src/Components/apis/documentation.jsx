// import PocketBase from 'pocketbase';
async function getPosts() {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // const result = await db.records.getList('posts');
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    return data?.items
}

async function getPost(postId) {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // cosnt result = await db.records.getOne('posts', {
    //   id: postId
    // });
    const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records?${postId}`, { cache: 'no-store' });
    const data = await res.json();
    return data?.items
}

export {
    getPosts,
    getPost
}