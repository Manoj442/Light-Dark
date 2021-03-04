import React,{useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import '../styles/style.css'
export const Header = () => {
    const {theme,toggleTheme} = useContext(ThemeContext);
    console.log(theme);
    return (       
        <nav className ={theme === 'light' ? 'light' : 'dark'}>
            <ul className="leftLinks">
                <li>
                    <a className ={theme === 'light' ? 'light' : 'dark'} href="#">Capture</a>
                </li>
                <li>
                    <a className ={theme === 'light' ? 'light' : 'dark'} href="#">Home</a>
                </li>                
            </ul> 
            <ul className="rightLinks">
                <li>
                    <a className ={theme === 'light' ? 'light' : 'dark'} href="#">Contact</a>
                </li>
                <li>
                    {
                        theme === 'dark' ? <button className ={theme === 'light' ? 'light' : 'dark'} type="button" onClick={e=>toggleTheme(theme)}>
                        <i style={{color:'orange'}} className="fas fa-sun fa-lg">
                   </i></button> : <button type="button" className ={theme === 'light' ? 'light' : 'dark'} onClick={e=>toggleTheme(theme)}>
                        <i className="fas fa-moon fa-lg">
                   </i></button>
                    }                 
                </li>
            </ul>           
        </nav>        
    )
}


