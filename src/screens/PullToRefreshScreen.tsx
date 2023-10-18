import React, { useState } from 'react'
import { RefreshControl, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { globalStyles } from '../theme/AppTheme';

export const PullToRefreshScreen = () => {
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
                    progressBackgroundColor={"#107C10"} //android
                    colors={["white", "#7C1010", "#10467C"]} //android
                    // tintColor={"#107C10"} //ios
                    // style={{ backgroundColor: "#949292" }} //ios
                    title='Searching'//ios
                />
            }>
                <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: 50 }}>
                    {!isRefreshing ?
                        data.map(iconName => <Icon name={iconName} size={60} color={"#107C10"} key={iconName} />)
                        :
                        <Icon name="search-circle-sharp" size={100} color={"#949292"} />
                    }
                </View>
                {!isRefreshing && <View style={{ flex: 1, marginTop: 40, alignItems: 'center' }}>
                    <Icon name="arrow-down-circle-outline" size={70} color={"#949292"} />
                    <Text style={globalStyles.label}>Pull to Refresh</Text>
                </View>}



            </ScrollView>
        </SafeAreaView>
    )
}