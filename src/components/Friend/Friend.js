import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name,username,id} = props.friend
    const Navigate= useNavigate()
    const showdata =()=>{
        const path= `/friend/${id}`
        Navigate(path)
    }
    return (
        <div>
            <h2>name: {name}</h2>
            <h2>UserName: {username}</h2>
            <Link to={'/friend/'+id}>Show deatils</Link>
            <button onClick={showdata}>id: {id}</button>
        </div>
    );
};

export default Friend;