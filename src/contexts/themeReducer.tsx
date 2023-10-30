import { Theme } from "@react-navigation/native";

type ThemeAction = { type: "set_dark_theme" } | { type: "set_light_theme" };

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: 'red',
        background: 'white',
        card: 'green',
        text: 'pink',
        border: 'orange',
        notification: 'teal'
    }
}


export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(1,1,1,0.7)',
    colors: {
        primary: 'white',
        background: 'black',
        card: 'blue',
        text: 'white',
        border: 'red',
        notification: 'teal'
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