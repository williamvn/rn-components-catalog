import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../theme/AppTheme'

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <View style={globalStyles.centerContainer}>
            <Button title='Open' onPress={() => setIsVisible((v) => !v)} />
            <Modal animationType='fade' visible={isVisible} transparent>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.3)', ...globalStyles.centerContainer }}>
                    <View style={[styles.modal]}>
                        <Text style={globalStyles.textHeader}>Custom Modal</Text>
                        <Text style={styles.paragraph}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas pellentesque sapien, at ornare nisl cursus ac. Sed interdum vitae ex et lacinia. Vivamus lacinia nec elit id ullamcorper. Vestibulum placerat diam ac luctus pretium. Maecenas velit ante, porttitor id lorem sed, bibendum laoreet dui.</Text>
                        <Button title="close" onPress={() => setIsVisible((v) => !v)}/>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: "white",
        margin: 10,
        padding: 20,
        borderRadius: 5
    },
    paragraph: {
        marginVertical: 10,
        ...globalStyles.label
    }
});