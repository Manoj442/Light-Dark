import React,{createContext,useState} from 'react'
export const ThemeContext = createContext();
export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;
export const Context = ({children}) => {    
    const [theme,setTheme] = useState('light');    
    const toggleTheme=(theme)=>{
        if(theme === 'light'){
            setTheme('dark');            
        }
        else{
            setTheme('light');
        }
    }
    return (
        <ThemeContextProvider value={{theme,toggleTheme}}>
            {children}   
        </ThemeContextProvider>
    )
}

