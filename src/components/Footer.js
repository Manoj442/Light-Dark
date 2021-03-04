import React,{useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext';
import '../styles/style.css'
const Footer = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <footer className ={theme === 'light' ? 'light' : 'dark'}>
        <span>           
            All rights reserved <span>&#169;</span>CaptureClicks
        </span>
        </footer>
    )
}

export default Footer
