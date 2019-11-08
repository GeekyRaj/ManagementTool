import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Label extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={Styles.text}> {this.props.children }</Text>
      </View>
    );
  }
}

export default Label;
const Styles=StyleSheet.create({
    text:{
        fontSize:20,
        paddingLeft:20,
    }
})
