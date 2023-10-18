import React from 'react'
import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../theme/AppTheme'

const sections = [
    { type: "DC Comics", data: ["Superman", "Batman", "Flash", "Aquaman", "Wonder Woman", "Superman", "Batman", "Flash", "Aquaman", "Wonder Woman", "Superman", "Batman", "Flash", "Aquaman", "Wonder Woman","Superman", "Batman", "Flash", "Aquaman", "Wonder Woman"] },
    { type: "Marvel", data: ["Spiderman", "Ironman", "Hulk", "Thor", "Black Panther", "Black Widow", "Spiderman", "Ironman", "Hulk", "Thor", "Black Panther", "Black Widow", "Spiderman", "Ironman", "Hulk", "Thor", "Black Panther", "Black Widow", "Spiderman", "Ironman", "Hulk", "Thor", "Black Panther", "Black Widow"] },
    { type: "Anime", data: ["Naruto", "Goku", "Luffy", "Saitama", "Gon", "Ichigo", "Gojo", "Deku", "Naruto", "Goku", "Luffy", "Saitama", "Gon", "Ichigo", "Gojo", "Deku", "Naruto", "Goku", "Luffy", "Saitama", "Gon", "Ichigo", "Gojo", "Deku", "Naruto", "Goku", "Luffy", "Saitama", "Gon", "Ichigo", "Gojo", "Deku"] }
]

export const SectionListScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={sections}
                renderItem={({ item }) => <Text>{item}</Text>}
                stickySectionHeadersEnabled
                renderSectionFooter={() => <View style={{height: 50}}></View>}
                renderSectionHeader={(section) => <View style={{ backgroundColor: "white", padding: 10 }}>
                    <Text style={globalStyles.textHeader}>{section.section.type}</Text>
                </View>
                }
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})