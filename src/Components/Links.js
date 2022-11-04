import React from 'react'
import '../Styles/links.css'
import slackIcon from '../Assets/slack.png'
import githubIcon from '../Assets/Social icon.png'

function Links() {
  return (
    <div>
        <section className='links__section'>
            <div className='link__wrapper'>
                <a href='https://training.zuri.team/' id='btn__zuri'>Zuri Team</a>
            </div>
            <div className='link__wrapper'>
                <a href='http://books.zuri.team' id='books'>Zuri Books</a>
            </div>
            <div className='link__wrapper'>
                <a href='https://books.zuri.team/python-for-beginners?ref_id=<dabagalmaryamshuaibu>' id='book__python'>Python Books</a>
            </div>
            <div className='link__wrapper'>
                <a href=' https://background.zuri.team' id='pitch'>Background Check for Coders</a>
            </div>
            <div className='link__wrapper'>
                <a href='https://books.zuri.team/design-rules where' id='book__design'>Design Books</a>
            </div>
            <div className='link__wrapper'>
                <a href='/contact' id='contact'>Contact Me</a>
            </div>
            <div className='icons'>
                <img src={slackIcon} alt='Slack icon'/>
                <img src={githubIcon} alt='GitHub icon'/>
            </div>
        </section>
    </div>
  )
}

export default Links