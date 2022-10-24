import React from 'react'
import profileImg from '../Assets/profile__img.png'
import '../Styles/header.css'

function Header() {
  return (
    <div>
      <div></div>
        <div className='profile__section'>
            <div>
                <img src= {profileImg} alt='user display' id='profile__img'/>
            </div>
            <h4 id='twitter'>Maryam Shuaibu</h4>
            <h4 id='slack'>Dabagal Maryam Shuaibu</h4>
        </div>
    </div>
  )
}

export default Header