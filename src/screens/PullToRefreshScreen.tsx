import React, { useState } from 'react'
import { RefreshControl, SafeAreaView, ScrollView, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

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
                    tintColor={"#107C10"} //ios
                    style={{ backgroundColor: "#949292" }} //ios
                />
            }>
                <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: 50 }}>
                    {!isRefreshing ?
                        data.map(iconName => <Icon name={iconName} size={60} color={"#107C10"} />)
                        :
                        <Icon name="search-circle-sharp" size={100} color={"#949292"} />
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}