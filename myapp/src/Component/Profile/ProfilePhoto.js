/*importation de la bibliothèque react*/
import React from 'react'
/*importation de l image i1*/
import i1 from '../Profile/Assets/1.jpg';
/*importation du fichier css de l image*/
import '../Image.css';
/*Fonction ProfilePhoto*/
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
