import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Main from './components/Main';

export default class RNPusherTicTacToe extends Component {
  
  render() {
    return (
      <Main />
    );
  }

}



AppRegistry.registerComponent('RNPusherTicTacToe', () => RNPusherTicTacToe);
