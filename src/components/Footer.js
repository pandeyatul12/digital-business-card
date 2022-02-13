import React from 'react'
import TwitterIcon from '../images/Twitter-Icon.png'
import FacebookIcon from '../images/Facebook-Icon.png'
import InstagramIcon from '../images/Instagram-Icon.png'
import LinkedinIcon from '../images/Linkedin-Icon.png'
import GitHubIcon from '../images/GitHub-Icon.png'

const Footer = () => {
  return (
    <div className='footer footer-icons'>
        <img className='TwitterIcon' src={TwitterIcon} alt='Twitter Icon'  />
        <img className='FacebookIcon' src={FacebookIcon} alt='Facebook Icon'/>
        <img className='InstagramIcon' src={InstagramIcon} alt='Instagram Icon'/>
        <img className='LinkedinIcon' src={LinkedinIcon} alt='Linkedein Icon'/>
        <img className='GitHubIcon' src={GitHubIcon} alt='GitHub Icon' />
    </div>
  )
}

export default Footer