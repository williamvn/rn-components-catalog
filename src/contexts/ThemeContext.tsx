import React, { createContext, useEffect, useReducer } from 'react';
import { ThemeState, darkTheme, lightTheme, themeReducer } from './themeReducer';
import { useColorScheme } from 'react-native';

export interface ThemeStateProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeStateProps);

export const ThemeProvider = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    const colorScheme = useColorScheme();
    const [state, dispatch] = useReducer(themeReducer, colorScheme === "light"? lightTheme: darkTheme);

    useEffect(() => {
        if(colorScheme === "light") {
            dispatch({ type: 'set_light_theme' });
        }
        else {
            dispatch({ type: 'set_dark_theme' });
        }
    }, [colorScheme])
    

    return (
        <ThemeContext.Provider value={{
            theme: state,
            setDarkTheme: () => dispatch({ type: 'set_dark_theme' }),
            setLightTheme: () => dispatch({ type: 'set_light_theme' })
        }}>
            {children}
        </ThemeContext.Provider>
    )
}