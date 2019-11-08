import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, Picker } from 'react-native';
import Svg, { Image, ClipPath, Ellipse } from 'react-native-svg';
import Animated from 'react-native-reanimated';
import AddImage from '../components/AddImage';
import IconAnt from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');
import style from '../style';
import { Card, CardSection, Input, CardRow, Button } from '../components/common';
import Label from '../components/common/Label';
import Logo from '../components/Logo';

class AddLec extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 30, width: 25, position: 'absolute', zIndex: 2, marginTop: 10 }}>
          <IconAnt
            style={{ color: 'white', position: 'absolute' }}
            onPress={() => this.props.navigation.pop()}
            name="left"
            size={30}
          />
        </View>
        <View style={{ height: 30, width: 500, position: 'absolute', zIndex: 2, marginTop: 7, marginLeft: 40 }}>
          <Text style={style.Header}>ADD LECTURE</Text>
        </View>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            //transform: [{ translateY: this.bgY }]
          }}
        >
          <Svg height={height + 50} width={width + 50}  >

            <Image
              href={require('../images/bg.jpg')}
              width={width}
              height={height}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clip)"
              opacity="0.8"
            />
          </Svg>
        </Animated.View>
        <View style={{ ...style.contentAdd, flex: 1 }}>
          <Logo size={150} />
          <CardSection height={50}>
            <CardRow>
              <Label>DATE</Label>
            </CardRow>
          </CardSection>

          <CardSection height={50}>
            <CardRow>
              <Label>CLASS</Label>
              <Picker
                itemStyle={{color:'red'}}
                style={{ flex: 1,marginLeft:5 }}
                selectedValue={this.props.sub}
                onValueChange={value => this.props.subUpdate({ prop: 'shift', value })}
              >
                <Picker.Item label="11th State" value="11th State" />
                <Picker.Item label="12th CBSC" value="12th CBSC" />
                <Picker.Item label="1th CBSC" value="11th CBSC" />
                <Picker.Item label="12th State" value="12th State" />
              </Picker>
            </CardRow>
          </CardSection>

          <CardSection height={50}>
            <CardRow>
              <Label>FROM</Label>
            </CardRow>
          </CardSection>

          <CardSection height={50}>
            <CardRow>
              <Label>TO</Label>
            </CardRow>
          </CardSection>

          <CardSection height={60}>
            <Button onPress={this.onButonPress}>
              ADD
              </Button>
          </CardSection>

        </View>
      </View>
    );
  }
}

export default AddLec;
