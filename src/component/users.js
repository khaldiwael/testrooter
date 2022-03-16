import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import {data} from './data';
import User from './user';


function Users() {
  const [users,setUserss]=useState(data)

  return (
    <div>
      {
        users.map((compt,key)=>(
          <User compt={compt} key={key}/>
          ))
      }
    </div>
  );
}

export default Users