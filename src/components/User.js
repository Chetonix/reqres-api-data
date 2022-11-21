import React from 'react'

function User({id, email, first_name, last_name, avatar}) {

  // console.log(email);
  return (
    <>
      <li className="card-container">
            <div className="image-container">
              <img className="round" src={avatar} />
    
            </div>
             <div className="name-container"> 
                 <span className="firstName">{first_name}</span>
                 <span className="lastName">{last_name}</span>
                
             </div> 
             <p className="email">{email}</p>  
      </li>
    </>
  )
}

export default User