import React from 'react'
import { MenuList } from '../components/MenuList';
import { SafeAreaView } from 'react-native';
import { MenuOption } from '../types/MenuOption';

export const HomeScreen = () => {
  const menuItems: MenuOption[] = [
    {
      name: "Animation 101",
      icon: "rocket-outline",
      component: "Animation101Screen"
    },
    {
      name: "Animation (Draggable View)",
      icon: "move-outline",
      component: "DraggableBoxScreen"
    },
    {
      name: "Switchs",
      icon: "toggle-outline",
      component: "SwitchScreen"
    },
    {
      name: "Inputs",
      icon: "document-text-outline",
      component: "SomeComponent"
    },
    {
      name: "Forms",
      icon: "cube-outline",
      component: "SomeComponent"
    },
  ]


  return (
    <SafeAreaView style={{flex: 1}}>
      <MenuList menuItems={menuItems} title='Components'></MenuList>
    </SafeAreaView>
  )
}

