import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function User(props) {
  return (
    <>
    <div className='compt'>
        <p>name: {props.compt.name}</p>
      <Link to={`/profile/${props.compt.id}`}> show more</Link>
    </div>
    </>
  )
}

export default User