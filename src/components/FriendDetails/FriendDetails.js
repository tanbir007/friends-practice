import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} =useParams()
    const [friend,setFriend] =useState({})
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then (res=>res.json())
        .then(data=> setFriend(data))
    },[])
    return (
        <div>
           <h3>friendsssssssssssssss:{friendId}</h3> 
           <h4>Name:{friend.name}</h4>
        </div>
    );
};

export default FriendDetails;