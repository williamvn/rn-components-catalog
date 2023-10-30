import React, { useEffect, useState } from 'react'
import { Animated, Dimensions, Easing, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { globalStyles } from '../theme/AppTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";
import { useAnimation } from '../hooks/useAnimation';

interface Slide {
    img: ImageSourcePropType;
    title: string;
    desc: string;
}

const tutorialData: Slide[] = [
    {
        img: require("../../assets/slide-1.png"),
        title: "Title 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas pellentesque sapien, at ornare nisl cursus ac."
    },
    {
        img: require("../../assets/slide-2.png"),
        title: "Title 2",
        desc: "Sed interdum vitae ex et lacinia. Vivamus lacinia nec elit id ullamcorper."
    },
    {
        img: require("../../assets/slide-3.png"),
        title: "Title 3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas pellentesque sapien, at ornare nisl cursus ac. Vestibulum placerat diam ac luctus pretium. Maecenas velit ante, porttitor id lorem sed, bibendum laoreet dui."
    }
]

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export const SlideScreen = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const { value: arrowXPosition, animateEndlessly: startArrowPositionAnimation } = useAnimation(-2, Easing.bounce);

    useEffect(() => {
        if (activeSlide === tutorialData.length - 1) {
            startArrowPositionAnimation(3, 1000);
        }
    }, [activeSlide])

    const renderItem = (item: Slide) => <View style={globalStyles.centerContainer}>
        <Image source={item.img} style={{ width: 350, height: 400, resizeMode: 'center' }} />
        <View style={{ padding: 10 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={globalStyles.label}>{item.desc}</Text>
        </View>
    </View>


    return (
        <SafeAreaView style={{ ...globalStyles.centerContainer, backgroundColor:"white" }}>
            <Carousel
                data={tutorialData}
                renderItem={({ item }) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                onSnapToItem={setActiveSlide}
            />
            {activeSlide === tutorialData.length - 1 && <TouchableOpacity style={styles.button}>
                <Text style={{ color: 'white', fontSize: 15 }}>Start</Text>
                <Animated.View style={{ transform: [{ translateX: arrowXPosition }] }}>
                    <Icon name="chevron-forward-outline" color={"white"} size={15}></Icon>
                </Animated.View>
            </TouchableOpacity>}
            <Pagination dotsLength={tutorialData.length} activeDotIndex={activeSlide} dotStyle={{ backgroundColor: "rgba(136, 108, 194, 1)" }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "rgba(136, 108, 194, 1)"
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "rgba(136, 108, 194, 1)",
        padding: 10,
        borderRadius: 5
    }
});