import React from 'react'
import profileImg from '../Assets/profile__img.png'
import headerIcon from '../Assets/header icon.png'
import '../Styles/header.css'

function Header() {
  return (
    <div>
        <div className='header__icon'>
          <div className='image__wrapper'>
            <a href='google.com'><img src={headerIcon} alt='link icon'/></a>
          </div>
        </div>
        <div className='profile__section'>
            <div className='header__image'>
                <img src= {profileImg} alt='user display' id='profile__img'/>
                <div className='header__image__overlay'><i></i></div>
            </div>
            <h4 id='twitter'>Maryam Shuaibu</h4>
            <h4 id='slack'>Dabagal Maryam Shuaibu</h4>
        </div>
    </div>
  )
}

export default Header