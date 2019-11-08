import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, Picker, } from 'react-native';
import Svg, { Image, } from 'react-native-svg';
import Animated from 'react-native-reanimated';
import AddImage from '../components/AddImage';
import IconAnt from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');
import style from '../style';
import { Card, CardSection, Input, CardRow, Button } from '../components/common';
import Label from '../components/common/Label';
import Logo from '../components/Logo';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

class AddLec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date('2020-06-12T14:42:42'),
      mode: 'date',
      show: false,
    };
  }
  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }

  state = {
    date: new Date('2020-06-12T14:42:42'),
    mode: 'date',
    show: false,
  }

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }

  datepicker = () => {
    this.show('date');
  }

  timepicker = () => {
    this.show('time');
  }

  render() {
    const { show, date, mode } = this.state;
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
              <View style={{ flex:1}}>
                  <Label>DATE</Label>
              </View>
              <View style={{ flex:1,...style.center}}>
                <Text style={{ fontSize:20}}>text</Text>
              </View>
              <View style={{ flex:2,...style.center}}>
                  <TouchableOpacity onPress={this.datepicker} style={style.buttonStyle}>
                    <Text style={style.textStyle}>Select Date</Text>
                  </TouchableOpacity>
              </View>
            </CardRow>
          </CardSection>

          <CardSection height={50}>
            <CardRow>
              <Label>CLASS</Label>
              <Picker
                itemStyle={{ color: 'red' }}
                style={{ flex: 1, marginLeft: 5 }}
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
              <View style={{ flex:1}}>
                  <Label>FROM</Label>
              </View>
              <View style={{ flex:1,...style.center}}>
                <Text style={{ fontSize:20}}>text</Text>
              </View>
              <View style={{ flex:2,...style.center}}>
                  <TouchableOpacity onPress={this.timepicker} style={style.buttonStyle}>
                    <Text style={style.textStyle}>Select Time</Text>
                  </TouchableOpacity>
              </View>
            </CardRow>
          </CardSection>

          <CardSection height={50}>
            <CardRow>
              <View style={{ flex:1}}>
                  <Label>TO</Label>
              </View>
              <View style={{ flex:1,...style.center}}>
                <Text style={{ fontSize:20}}>text</Text>
              </View>
              <View style={{ flex:2,...style.center}}>
                  <TouchableOpacity onPress={this.timepicker} style={style.buttonStyle}>
                  <Text style={style.textStyle}>Select Time</Text>
                  </TouchableOpacity>
              </View>
            </CardRow>
          </CardSection>

          <CardSection height={50}>
          <Button onPress={ this.onTextPress}>
                  ADD
              </Button>
          </CardSection>

            <View>
              {show && <DateTimePicker value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={this.setDate} />
              }
            </View>

        </View>
      </View>
    );
  }
}

export default AddLec;
