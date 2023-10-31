import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { DraggableBoxScreen } from '../screens/DraggableBoxScreen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { FormsScreen } from '../screens/FormsScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfinityScrollScreen } from '../screens/InfinityScrollScreen';
import { SlideScreen } from '../screens/SlideScreen';
import { FunnyButtonsScreen } from '../screens/FunnyButtonsScreen';
import { ThemeScreen } from '../screens/ThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { StatusBar } from 'react-native';

export type RootStackParamList = {
  HomeScreen: undefined,
  Animation101Screen: undefined,
  DraggableBoxScreen: undefined,
  SwitchScreen: undefined,
  AlertScreen: undefined,
  TextInputScreen: undefined
  FormsScreen: undefined,
  PullToRefreshScreen: undefined
  SectionListScreen: undefined,
  ModalScreen: undefined,
  InfinityScrollScreen: undefined
  SlideScreen: undefined,
  FunnyButtonsScreen: undefined,
  ThemeScreen: undefined
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} backgroundColor={theme.colors.background}/>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
          <Stack.Screen name="DraggableBoxScreen" component={DraggableBoxScreen} />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen name="FormsScreen" component={FormsScreen} />
          <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
          <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen name="InfinityScrollScreen" component={InfinityScrollScreen} />
          <Stack.Screen name="SlideScreen" component={SlideScreen} />
          <Stack.Screen name="FunnyButtonsScreen" component={FunnyButtonsScreen} />
          <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}