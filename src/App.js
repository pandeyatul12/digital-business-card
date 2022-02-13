import React from 'react'
import AboutPic from './components/AboutPic'
import AboutBody from './components/AboutBody'
import Footer from './components/Footer'

export const App = () => {
    return(
        <div className='page'>
            <div className='container'>
                
                    <AboutPic />
                    <AboutBody />
                    <Footer/>
                
            </div>
        </div>
    )
}