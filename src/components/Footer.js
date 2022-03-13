import React from 'react'
import TwitterIcon from '../images/Twitter-Icon.png'
import FacebookIcon from '../images/Facebook-Icon.png'
import InstagramIcon from '../images/Instagram-Icon.png'
import LinkedinIcon from '../images/Linkedin-Icon.png'
import GitHubIcon from '../images/GitHub-Icon.png'
import { Route, Router, Switch } from 'react-router-dom'

const Footer = () => {
  const handleTwitterRoute = () => {
    window.open( 'https://twitter.com/pandeyatul12_')
  }

  // const handleFacebookRoute = () => {
  //   window.open( '')
  // }

  const handleInstagramRoute = () => {
    window.open( 'https://www.instagram.com/pandeyatul12')
  }

  const handleLinkedinRoute = () => {
    window.open( 'https://www.linkedin.com/in/atul-kumar-pandey-11a133171/')
  }

  const handleGithubRoute = () => {
    window.open( 'https://github.com/pandeyatul12')
  }
  return (
    <div className='footer footer-icons'>
        <img 
        className='TwitterIcon' 
        src={TwitterIcon} 
        alt='Twitter Icon' 
        onClick={handleTwitterRoute} />
        {/* <img 
        className='FacebookIcon' 
        src={FacebookIcon} 
        alt='Facebook Icon'
        onClick={handleFacebookRoute}/> */}
        <img 
        className='InstagramIcon' 
        src={InstagramIcon} 
        alt='Instagram Icon'
        onClick={handleInstagramRoute}/>
        <img 
        className='LinkedinIcon' 
        src={LinkedinIcon} 
        alt='Linkedein Icon'
        onClick={handleLinkedinRoute}/>
        <img 
        className='GitHubIcon' 
        src={GitHubIcon} 
        alt='GitHub Icon' 
        onClick={handleGithubRoute}/>
    </div>
  )
}

export default Footer