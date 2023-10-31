import React, { useContext } from 'react'
import { Button, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { CustomInput } from '../components/CustomInput'
import { useForm } from '../hooks/useForm'
import { CustomSwitch } from '../components/CustomSwitch';
import { globalStyles } from '../theme/AppTheme';
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeContext } from '../contexts/ThemeContext';

interface Form {
    username: string;
    email: string;
    phone: string;
    isSubcribed: boolean;
}

const initState: Form = {
    email: '',
    isSubcribed: false,
    phone: '',
    username: ''
}

export const FormsScreen = () => {
    const { theme } = useContext(ThemeContext);
    const { onChange, form, isSubcribed } = useForm<Form>(initState);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={globalStyles.centerContainer} scrollEnabled>
                    <Icon name="person-circle-sharp" color={"#949292"} size={100}></Icon>
                    <View style={styles.form}>
                        <CustomInput title='Username' valueChange={(v) => onChange(v, "username")} />
                        <CustomInput title='Email' placeholder='example@email.com' keyboardType="email-address" valueChange={(v) => onChange(v, "email")} />
                        <CustomInput title='Phone' placeholder='+ 34' keyboardType='phone-pad' valueChange={(v) => onChange(v, "phone")} />
                        <CustomSwitch title='Subscribe' value={isSubcribed} onChange={(v) => onChange(v, "isSubcribed")} />
                        <View style={{ marginTop: 50 }}>
                            <Button title='Submit' onPress={() => console.log(form)} color={theme.colors.card}></Button>
                        </View>
                    </View>
                    {/* Hiden by keyboard not solution T_T*/}
                    <View style={styles.sendBox}>
                        <View style={{ flex: 1 }}><CustomInput title='Feedback' valueChange={(v) => console.log(v)} /></View>
                        <TouchableOpacity style={{...styles.sendButton, backgroundColor: theme.colors.card}}><Text><Icon name="send-sharp" color={"white"} size={22}></Icon></Text></TouchableOpacity>
                    </View>
                    {/* With this the problem gets fix in my mobile, but it looks that this kind of issues are solved better using external lib 
                       react-native-keyboard-aware-scroll-view or handling the onFocus to add margins or spacers */}
                    {/* <View style={{ height: 150 }} /> */}
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    form: {
        borderWidth: 0.2,
        borderColor: globalStyles.label.color,
        borderRadius: 2,
        padding: 40,
        margin: 10,
        alignSelf: 'stretch',
        alignItems: 'stretch'
    },
    sendBox: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        top: 50
    },
    sendButton: {
        borderRadius: 6,
        paddingVertical: 10,
        padding: 10,
        paddingLeft: 17,
        height: 41,
        marginTop: 15,
        marginLeft: 10
    }
})