import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Partition extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Partition}>
      </View>
    );
  }
}

export default Partition;
const styles = StyleSheet.create({
    Partition:{
        height:1,
        width:'100%',
        backgroundColor:'black',
        backgroundColor: 'rgba(0,0,0, 0.4)',
        marginTop: 5, 
        marginBottom: 2
      },
})
