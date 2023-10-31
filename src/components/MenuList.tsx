import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { globalStyles } from '../theme/AppTheme';
import { MenuOption } from '../types/MenuOption';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../contexts/ThemeContext';

interface MenuProps {
    menuItems: MenuOption[];
    title: string
}

export const MenuList = ({ menuItems, title }: MenuProps) => {
    const navigation = useNavigation<any>();
    const { theme } = useContext(ThemeContext)

    const renderMenuItem = (item: MenuOption) => {
        return <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate(item.component)}>
            <View style={styles.displayRowCenter}>
                <View style={[styles.option, styles.displayRowCenter]}>
                    <Icon name={item.icon} size={20} color={theme.colors.primary} style={{ marginRight: 10 }} />
                    <Text style={globalStyles.label}>{item.name}</Text>
                </View>
                <Icon name="chevron-forward-outline" color={theme.colors.primary}></Icon>
            </View>
        </TouchableOpacity>
    }

    const listHeader = () => {
        return <View>
            <Text style={{ ...globalStyles.textHeader, color: theme.colors.text }}>{title}</Text>
        </View>
    }

    return (
        <View style={{ flex: 1, margin: 20 }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => renderMenuItem(item)}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => listHeader()}
                ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, opacity: 0.4, borderColor: theme.dividerColor }}></View>}
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
        alignItems: 'center'
    }
})