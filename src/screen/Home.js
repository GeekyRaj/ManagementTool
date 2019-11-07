import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, } from 'react-native';
import Svg, { Image, Circle, ClipPath } from 'react-native-svg';
import Animated, { Easing } from 'react-native-reanimated';
import Logo from '../components/Logo';
import AddImage from '../components/AddImage';
import IconAnt from 'react-native-vector-icons/AntDesign';
import style from '../style';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');

const {
    concat
} = Animated;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Animated.View
                    style={{
                        ...StyleSheet.absoluteFill,
                        //transform: [{ translateY: this.bgY }]
                    }}
                >
                    <Svg height={height + 50} width={width}  >
                        <ClipPath id="clip">
                            <Circle r={height} cx={width} />
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

                <View style={{ height: height / 7, width: width / 3.8, backgroundColor: 'white', borderRadius: 50, position: 'absolute', margin: 20, marginTop: 40, ...styles.effect }}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Add')}>
                        <AddImage size={100} path={require('../images/add.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={{ height: height / 6, width: width, position: 'absolute', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <View style={{ flex: 1, height: height / 7, width: width / 3.8, backgroundColor: 'white', borderRadius: 50, position: 'absolute', margin: 20, ...styles.effect }}>
                        <Logo size={100} />
                    </View>
                </View>

                <View style={{ height: height / 7, width: width, position: 'absolute', flexDirection: 'row-reverse' }}>
                    <View style={{ flex: 1, height: height / 7, width: width / 3.8, backgroundColor: 'white', borderRadius: 50, position: 'absolute', margin: 20, marginTop: 40, ...styles.effect, }}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Profile')}>
                        <AddImage size={85} path={require('../images/profile.png')}/>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex:1,height: height, width: width, justifyContent: 'center', alignItems: 'center', marginTop: 170, backgroundColor:'yellow',zIndex:1 }}>
                    <Text>Main Content Area</Text>
                </View>
            </View>
        );
    }
}

export default Home;
const styles = StyleSheet.create({
    effect: {
        alignItems:'center',justifyContent:'center',
        borderWidth: 2,
        borderColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
    }
})
