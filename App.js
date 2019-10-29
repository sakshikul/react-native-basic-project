import React, { Component } from 'react';
import Routes from './Component/Routes.js';
import { AppRegistry, View } from 'react-native';

class App extends Component {
  render() {
     return (
        <Routes />
     )
  }
}
export default App;
AppRegistry.registerComponent('App', () => App);
