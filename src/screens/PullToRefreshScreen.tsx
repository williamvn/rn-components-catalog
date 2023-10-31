import React, { useContext, useState } from 'react'
import { RefreshControl, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { globalStyles } from '../theme/AppTheme';
import { ThemeContext } from '../contexts/ThemeContext';

export const PullToRefreshScreen = () => {
    const { theme } = useContext(ThemeContext);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [data, setData] = useState(["american-football-sharp", "aperture-sharp", "game-controller-sharp", "flask-sharp", "logo-xbox"])
    const onRefresh = () => {
        console.log("Refreshing");
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
            setData(data.reverse());
        }, 3000);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={onRefresh}
                    progressBackgroundColor={theme.colors.card} //android
                    colors={["white", "#7C1010", "#10467C"]} //android
                    tintColor={theme.colors.primary} //ios
                    // style={{ backgroundColor: theme.colors.notification }} //ios
                    title='Searching'//ios
                    titleColor={theme.colors.text}
                />
            }>
                <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: 50 }}>
                    {!isRefreshing ?
                        data.map(iconName => <Icon name={iconName} size={60} color={theme.colors.card} key={iconName} />)
                        :
                        <Icon name="search-circle-sharp" size={100} color={theme.colors.notification} />
                    }
                </View>
                {!isRefreshing && <View style={{ flex: 1, marginTop: 40, alignItems: 'center' }}>
                    <Icon name="arrow-down-circle-outline" size={70} color={theme.colors.notification} />
                    <Text style={globalStyles.label}>Pull to Refresh</Text>
                </View>}



            </ScrollView>
        </SafeAreaView>
    )
}