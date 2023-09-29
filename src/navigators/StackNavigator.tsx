import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { DraggableBoxScreen } from '../screens/DraggableBoxScreen';
import { SwitchScreen } from '../screens/SwitchScreen';

export type RootStackParamList = {
  HomeScreen: undefined,
  Animation101Screen: undefined,
  DraggableBoxScreen: undefined,
  SwitchScreen: undefined
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="DraggableBoxScreen" component={DraggableBoxScreen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
    </Stack.Navigator>
  );
}