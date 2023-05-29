import React from 'react'
import i1 from '../Profile/Assets/1.jpg';
import '../Image.css';
const ProfilePhoto = () => {
  return (
    <div>

        <img
          className="ProfilePhoto"
          src= {i1}
          alt="Pic"
        />
        
    </div>
  )
}

export default ProfilePhoto
