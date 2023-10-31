import React, { useContext, useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../theme/AppTheme'
import { ThemeContext } from '../contexts/ThemeContext';

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useContext(ThemeContext);

    return (
        <View style={globalStyles.centerContainer}>
            <Button title='Open' onPress={() => setIsVisible((v) => !v)} color={theme.colors.card}/>
            <Modal animationType='fade' visible={isVisible} transparent>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.3)', ...globalStyles.centerContainer }}>
                    <View style={{...styles.modal, backgroundColor: theme.colors.background}}>
                        <Text style={{...globalStyles.textHeader, color: theme.colors.primary}}>Custom Modal</Text>
                        <Text style={styles.paragraph}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas pellentesque sapien, at ornare nisl cursus ac. Sed interdum vitae ex et lacinia. Vivamus lacinia nec elit id ullamcorper. Vestibulum placerat diam ac luctus pretium. Maecenas velit ante, porttitor id lorem sed, bibendum laoreet dui.</Text>
                        <Button title="close" onPress={() => setIsVisible((v) => !v)} color={theme.colors.card}/>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        margin: 10,
        padding: 20,
        borderRadius: 5
    },
    paragraph: {
        marginVertical: 10,
        ...globalStyles.label
    }
});