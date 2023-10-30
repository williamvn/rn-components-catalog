import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackNavigator } from './src/navigators/StackNavigator';
import { ThemeProvider } from './src/contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
        <StackNavigator />
    </ThemeProvider>
  )
}

export default App;