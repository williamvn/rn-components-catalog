import React from 'react'
import { MenuList } from '../components/MenuList';
import { SafeAreaView } from 'react-native';
import { menuItems } from '../data/menu.options';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MenuList menuItems={menuItems} title='Components'></MenuList>
    </SafeAreaView>
  )
}