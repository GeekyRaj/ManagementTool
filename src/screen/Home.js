import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, } from 'react-native';
import Svg, { Image, Circle, ClipPath, Rect, Ellipse } from 'react-native-svg';
import Animated, { Easing } from 'react-native-reanimated';
import Logo from '../components/Logo';
import AddImage from '../components/AddImage';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from '../style';
import { Card, CardSection, CardRow } from '../components/common';
import Partition from '../components/common/Partition';
const { width, height } = Dimensions.get('window');

const {
    concat,
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
                    }}
                >
                    <Svg height={height + 50} width={width + 50}  >
                        <ClipPath id="clip">
                            {/* <Circle  cx={width} cx="5%" cy="5%" r="35%" /> */}
                            <Ellipse cx="150" cy="1%" rx="100%" ry="80" />
                        </ClipPath>
                        <Rect
                            width={width}
                            height={height}
                            fill="black"
                            strokeWidth="3"
                            stroke="rgb(0,0,0)"
                            clipPath="url(#clip)"
                        />
                        {/* <Image
                            href={require('../images/bg.jpg')}
                            width={width}
                            height={height / 6}
                            preserveAspectRatio="xMidYMid slice"
                            clipPath="url(#clip)"
                            opacity="0.8"
                        /> */}
                    </Svg>
                </Animated.View>

                <View style={styles.effect}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Add')}>
                        <AddImage size={50} path={require('../images/add.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: height / 10, width: width, position: 'absolute', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <View style={styles.effect}>
                        <Logo size={70} />
                    </View>
                </View>

                <View style={{ height: height / 7, width: width, position: 'absolute', flexDirection: 'row-reverse' }}>
                    <View style={styles.effect}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                            <AddImage size={50} path={require('../images/profile.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ ...style.contentbg, flex: 1 }}>
                        <Text style={style.Header}>MONTH</Text>
                    <CardSection>
                        <View style={style.row}>
                            <View style={style.showData}><Text style={style.textSpace}>DATE</Text></View>
                            <View style={style.showData}><Text style={style.textSpace}>CLASS</Text></View>
                            <View style={style.showData}><Text style={style.textSpace}>SUB</Text></View>
                            <View style={style.showData}><Text style={style.textSpace}>FROM</Text></View>
                            <View style={style.showData}><Text style={style.textSpace}>TO</Text></View>
                            <View style={style.showData}><Text style={style.textSpace}>HRS</Text></View>
                        </View>
                        <Partition/>
                        <View style={style.row}>
                            <View style={style.showData}><Text style={style.fontText}>07/11/19</Text></View>
                            <View style={style.showData}><Text style={style.fontText}>11th CBSC</Text></View>
                            <View style={style.showData}><Text style={style.fontText}>BIO</Text></View>
                            <View style={style.showData}><Text style={style.fontText}>7:30 pm</Text></View>
                            <View style={style.showData}><Text style={style.fontText}>9:30 pm</Text></View>
                            <View style={style.showData}><Text style={style.fontText}>2</Text></View>
                        </View>
                        <Partition/>
                        
                    </CardSection>
                </View>

            </View>
        );
    }
}

export default Home;
const styles = StyleSheet.create({
    effect: {
        height: height / 10,
        width: width / 5,
        backgroundColor: 'white',
        borderRadius: 50,
        position: 'absolute',
        margin: 20,
        marginTop: 40,
        alignItems: 'center', justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
    }
})
