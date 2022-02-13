import React from 'react'
import emailIcon from '../images/email-icon.png'

const AboutBody = () => {
  return (
    <div className='about-body'>
        <div className='about-body-name'>Atul Kumar Pandey</div>
        <div className='about-body-role'>Frontend Developer</div>
        <div className='about-body-website'>pandeyatul12.com</div>
        <button className='about-body-mail-button'><img src={emailIcon} alt='email icon'/> Email</button>
        <div className='about-body-about'>About</div>
        <p className='about-body-about-detail'>Passionate software developer with a hands-on, 
        high-energy approach, well-developed skills in Agile methodology, 
        and an unapologetically user-focused philosophy. 
        Have developed several landing pages and web apps, 
        games using React.js, Javascript, HTML, CSS.</p>
        <div className='about-body-interests'>Interests</div>
        <p className='about-body-interests-detail'>
            Web development, Artificial Intelligence, Self Improvement Books, Football
        </p>
    </div>
  )
}

export default AboutBody