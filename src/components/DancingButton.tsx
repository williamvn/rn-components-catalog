import React, { useEffect } from 'react'
import { Text, TouchableOpacity, Animated, StyleSheet, Easing } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { useAnimation } from '../hooks/useAnimation';

interface DancingButtonProps {
    iconName?: string;
    title?: string;
    color?: string;
    textColor?: string;
    effectDuration?: number;
    onPress?: () => any;
}

export const DancingButton = (props: DancingButtonProps) => {
    const {
        iconName = "chevron-forward-outline",
        title,
        effectDuration = 1000,
        color = "rgba(136, 108, 194, 1)",
        onPress = () => { },
        textColor = "white"
    } = props;

    const { value: arrowXPosition, animateEndlessly: startArrowPositionAnimation } = useAnimation(-2, Easing.bounce);

    useEffect(() => {
        startArrowPositionAnimation(3, effectDuration);
    }, []);

    return (
        <TouchableOpacity style={{ ...styles.button, backgroundColor: color }} onPress={onPress}>
            <Text style={{ color: textColor, fontSize: 15 }}>{title}</Text>
            <Animated.View style={{ transform: [{ translateX: arrowXPosition }] }}>
                <Icon name={iconName} color={textColor} size={15}></Icon>
            </Animated.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'space-between'
    }
})