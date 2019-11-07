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

class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
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
                <View style={{flex:1, height: height / 7, width: width, position: 'absolute', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <View style={{ flex: 1, height: height / 5, width: width / 2.5, backgroundColor: 'white', borderRadius: 100, position: 'absolute', margin: 20,...styles.effect}}>
                        <AddImage size={140} path={require('../images/profile.png')}/>
                    </View>
                </View>
                <View style={{ flex:1,height: height, width: width, justifyContent: 'center', alignItems: 'center', marginTop: 170, backgroundColor:'yellow' }}>
                    <Text>djfgkldfhgk</Text>
                </View>
      </View>
    );
  }
}

export default profile;
const styles = StyleSheet.create({
    effect: {
        alignItems:'center',justifyContent:'center',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        zIndex:1
    }
})
