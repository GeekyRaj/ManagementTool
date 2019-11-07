import React, { Component } from 'react';
import { View, Image } from 'react-native';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
       <Image
          style={{width: this.props.size, height: this.props.size}}
          source={require('../images/logo1.png')}
        />
      </View>
    );
  }
}

export default Logo;
