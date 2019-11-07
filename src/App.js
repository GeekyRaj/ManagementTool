import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from './style';
import Route from './Route';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Route/>
    );
  }
}

export default App;
