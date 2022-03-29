import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams()

    const [posts,setPosts] = useState({})
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[postId])
    return (
        <div>
            <h1>This is post Detail: {postId}</h1>
            <h5>{posts.title}</h5>
            <p>{posts.body}</p>
        </div>
    );
};

export default PostDetails;