import React, { createContext, useReducer } from 'react';
import { ThemeState, lightTheme, themeReducer } from './themeReducer';

export interface ThemeStateProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeStateProps);

export const ThemeProvider = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    const [state, dispatch] = useReducer(themeReducer, lightTheme);

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