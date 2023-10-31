import React, { useContext } from 'react'
import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../theme/AppTheme'
import { ThemeContext } from '../contexts/ThemeContext'

const sections = [
    { type: "DC Comics", data: ["Superman", "Batman", "Flash", "Aquaman", "Wonder Woman", "Superman", "Batman", "Flash", "Aquaman", "Wonder Woman", "Superman", "Batman", "Flash", "Aquaman", "Wonder Woman", "Superman", "Batman", "Flash", "Aquaman", "Wonder Woman"] },
    { type: "Marvel", data: ["Spiderman", "Ironman", "Hulk", "Thor", "Black Panther", "Black Widow", "Spiderman", "Ironman", "Hulk", "Thor", "Black Panther", "Black Widow", "Spiderman", "Ironman", "Hulk", "Thor", "Black Panther", "Black Widow", "Spiderman", "Ironman", "Hulk", "Thor", "Black Panther", "Black Widow"] },
    { type: "Anime", data: ["Naruto", "Goku", "Luffy", "Saitama", "Gon", "Ichigo", "Gojo", "Deku", "Naruto", "Goku", "Luffy", "Saitama", "Gon", "Ichigo", "Gojo", "Deku", "Naruto", "Goku", "Luffy", "Saitama", "Gon", "Ichigo", "Gojo", "Deku", "Naruto", "Goku", "Luffy", "Saitama", "Gon", "Ichigo", "Gojo", "Deku"] }
]

export const SectionListScreen = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={sections}
                renderItem={({ item }) => <Text style={{color: theme.colors.notification}}>{item}</Text>}
                stickySectionHeadersEnabled
                renderSectionFooter={() => <View style={{ height: 50 }}></View>}
                renderSectionHeader={(section) => <View style={{backgroundColor: theme.colors.background, paddingVertical: 10 }}>
                    <Text style={{ ...globalStyles.textHeader, color: theme.colors.card }} > { section.section.type }</Text>
                </View>
                }
/>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})