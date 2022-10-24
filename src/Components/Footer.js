import React from 'react'
import zuriLogo from '../Assets/zuri logo.png'
import i4gLogo from '../Assets/I4G.png'
import '../Styles/footer.css'

function Footer() {
  return (
    <div>
        <footer>
            <div>
                <img src={zuriLogo} alt='zuri logo'/>
            </div>
            <div className='footer__text'>
                <span>HNG Internship 9 Frontend Task</span>
            </div>
            <div>
                <img src={i4gLogo} alt='I4G logo'/>
            </div>
        </footer>
    </div>
  )
}

export default Footer