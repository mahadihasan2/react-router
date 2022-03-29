import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDatils = () => {
    const [friends,setFriends] = useState({})

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    let {friendId} = useParams();
    return (
        <div>
            <h1>This is the friend deatils of length: {friendId}</h1>
            <h2>{friends.name}</h2>
            <h3>{friends.email}</h3>
            <h4>{friends.address}</h4>
            <p><small>{friends.city}</small></p>
        </div>
    );
};

export default FriendDatils;