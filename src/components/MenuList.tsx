import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { globalStyles } from '../theme/AppTheme';
import { MenuOption } from '../types/MenuOption';

interface MenuProps {
    menuItems: MenuOption[];
    title: string
}

export const MenuList = ({ menuItems, title }: MenuProps) => {
    const renderMenuItem = (item: MenuOption) => {
        return <View style={styles.option}>
            <View style={styles.option}>
                <Icon name={item.icon} size={20} color={"#949292"}  style={{marginRight: 10}}/>
                <Text style={globalStyles.label}>{item.name}</Text>
            </View>
            <Icon name="chevron-forward-outline" color={"#949292"}></Icon>
        </View>
    }

    const listHeader = () => {
        return <View>
            <Text style={globalStyles.textHeader}>{title}</Text>
        </View>
    }

    return (
        <View style={{ flex: 0.3, margin: 20 }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => renderMenuItem(item)}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => listHeader()}
                ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, opacity: 0.4, borderColor: "gray" }}></View>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginVertical: 2.5,
    }
})