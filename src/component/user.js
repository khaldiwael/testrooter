import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const learnmore = () =>{
alert('test')
}

function User(props) {
    // const compt='wael'
  return (
    <>
    <div className='compt'>
        {/* <p>{props.compt.id}</p> */}
        {/* <h1>user name: {props.compt.userName}</h1> */}
        <p>name: {props.compt.name}</p>
        {/* <p>email: {props.compt.email}</p> */}
      <Link to={`/profile/${props.compt.id}`}> show more</Link>

       
    </div>
    <div>

    </div>
    </>
  )
}

export default User