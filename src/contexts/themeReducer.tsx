import { Theme } from "@react-navigation/native";

type ThemeAction = { type: "set_dark_theme" } | { type: "set_light_theme" };

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'gray',
    colors: {
        primary: '#B19CD9',
        background: 'white',
        card: '#7952B3',
        text: 'black',
        border: 'orange',
        notification: '#949292'
    }
}


export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'gray',
    colors: {
        primary: '#B19CD9',
        background: '#1A1A1A',
        card: '#7952B3',
        text: 'white',
        border: 'red',
        notification: '#949292'
    }
}

export const themeReducer = (state: ThemeState, action: ThemeAction) => {
    switch (action.type) {
        case 'set_dark_theme':
            console.log("Setting Dark Theme")
            return { ...darkTheme };
        case 'set_light_theme':
        default:
            console.log("Setting Light Theme")
            return { ...lightTheme };
    }

}