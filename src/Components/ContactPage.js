import React from 'react'
import Footer from '../Components/Footer'
import '../Styles/contactPage.css'

function ContactPage() {
  return (
    <div className='contact_page_wraper'>

        <div className='contact_form'>
            
            <div className='contact_page_header'>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>

            <form>
                <div className='input__wraper first_two_inputs'>
                    <div>
                        <label for='first_name'>First name</label><br/>
                        <input type='name' placeholder='Enter your first name' id='first_name'/><br/>
                    </div>

                    <div>
                        <label for='last_name'>Last name</label><br/>
                        <input type='name' placeholder='Enter your last name' id='last_name'/>
                    </div>
                </div>

                <div className='input__wraper'>
                    <label for='email'>Email</label><br/>
                    <input type='email' placeholder='yourname@email.com' id='email'/>
                </div>

                <div className='input__wraper'>
                    <label>Message</label><br/>
                    <textarea placeholder="Send me a message and I'll reply you as soon as possible..." rows="4" cols="50" id='message'></textarea>
                </div>

                <div className='input__wraper checkbox'>
                    <input type='checkbox' id='checkbox'/>
                    <label for='checkbox'>You agree to providing your data to Maryam who may contact you.</label>
                </div>

                <div className='input__wraper'>
                    <button id='btn__submit'>Send Message</button>
                </div>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default ContactPage