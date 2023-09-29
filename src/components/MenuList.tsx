import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { globalStyles } from '../theme/AppTheme';
import { MenuOption } from '../types/MenuOption';
import { useNavigation } from '@react-navigation/native';

interface MenuProps {
    menuItems: MenuOption[];
    title: string
}

export const MenuList = ({ menuItems, title }: MenuProps) => {
    const navigation = useNavigation<any>();

    const renderMenuItem = (item: MenuOption) => {
        return <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate(item.component)}>
            <View style={styles.displayRowCenter}>
                <View style={[styles.option, styles.displayRowCenter]}>
                    <Icon name={item.icon} size={20} color={"#949292"} style={{ marginRight: 10 }} />
                    <Text style={globalStyles.label}>{item.name}</Text>
                </View>
                <Icon name="chevron-forward-outline" color={"#949292"}></Icon>
            </View>
        </TouchableOpacity>
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
        flex: 1,
        marginVertical: 2.5,
    },
    displayRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})