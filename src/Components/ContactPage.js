import React from 'react'

function ContactPage() {
  return (
    <div>
        <div className='contact_page_header'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>

        <form>
            <div className='input__wraper'>
                <label for='first_name'>First name</label>
                <input type='name' placeholder='Enter your first name' id='first_name'/>

                <label for='last_name'>Last name</label>
                <input type='name' placeholder='Enter your last name' id='last_name'/>
            </div>

            <div className='input__wraper'>
                <label for='email'>Email</label>
                <input type='email' placeholder='yourname@email.com' id='email'/>
            </div>

            <div className='input__wraper'>
                <label>Message</label><br/>
                <textarea placeholder="Send me a message and I'll reply you as soon as possible..." rows="4" cols="50" id='message'></textarea>
            </div>

            <div className='input__wraper'>
                <input type='checkbox' id='privacy_policy'/>
                <label for='privacy_policy'>You agree to providing your data to Maryam who may contact you.</label>
            </div>

            <div className='input__wraper'>
                <button id='btn__submit'>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default ContactPage