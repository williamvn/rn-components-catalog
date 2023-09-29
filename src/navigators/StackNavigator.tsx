import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { DraggableBoxScreen } from '../screens/DraggableBoxScreen';

export type RootStackParamList = {
  Home: undefined,
  Animation101: undefined,
  DraggableBox: undefined
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101" component={Animation101Screen} />
      <Stack.Screen name="DraggableBox" component={DraggableBoxScreen} />
    </Stack.Navigator>
  );
}