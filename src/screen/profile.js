import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, } from 'react-native';
import Svg, { Image, ClipPath, Ellipse } from 'react-native-svg';
import Animated from 'react-native-reanimated';
import AddImage from '../components/AddImage';
import IconAnt from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');
const {
    concat
} = Animated;

class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 30, width: 25, position: 'absolute', zIndex:2,marginTop:10}}>
                    <IconAnt
                        style={{  color: 'white', position: 'absolute' }}
                        onPress={() => this.props.navigation.pop()}
                        name="left"
                        size={30}
                    />
                </View>
                <Animated.View
                    style={{
                        ...StyleSheet.absoluteFill,
                        //transform: [{ translateY: this.bgY }]
                    }}
                >
                    <Svg height={height + 50} width={width+50}  >
                        <ClipPath id="clip">
                            {/* <Circle  cx={width} cx="5%" cy="5%" r="35%" /> */}
                            <Ellipse cx="150" cy="1%" rx="100%" ry="80" />
                        </ClipPath>
                        <Image
                            href={require('../images/bg.jpg')}
                            width={width}
                            height={height / 6}
                            preserveAspectRatio="xMidYMid slice"
                            clipPath="url(#clip)"
                            opacity="0.8"
                        />
                    </Svg>
                </Animated.View>
                <View style={{ flex: 1, height: height / 7, width: width, position: 'absolute', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <View style={{ flex: 1, height: height / 5, width: width / 2.5, backgroundColor: 'white', borderRadius: 100, position: 'absolute', margin: 20, ...styles.effect }}>
                        <AddImage size={100} path={require('../images/profile.png')} />
                    </View>
                </View>
                <View style={style.contentbg}></View>
            </View>
        );
    }
}

export default profile;
const styles = StyleSheet.create({
    effect: {
        alignItems: 'center', justifyContent: 'center',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        zIndex: 1
    }
})
