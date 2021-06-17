import React from 'react';
import {Link} from 'react-router-dom'
const Friend = (props) => {
    const {id,name,email} =props.friend
    const friendStyle ={
        border: '1px solid blue',
        margin:'20px',
        padding :'20px',
        borderRadius:'20px'
    }
    return (
        <div style={friendStyle}>
           <h2>Name:{name}</h2>
           <p> Email; {email}</p>
           <p>id:{id} <Link to ={`/friend/${id}`}>Show detail</Link> </p>
        </div>
    );
};

export default Friend;