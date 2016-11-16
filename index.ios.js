/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Board from './app/components/Board';
import EndGameOverlay from './app/components/EndGameOverlay';

export default class ReactToe extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.newGame = true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Board onGameEnded={this.onGameEnded.bind(this)} newGame={this.state.newGame}/>
        <EndGameOverlay gameWinner={this.state.gameWinner} onRestart={this.restart.bind(this)}/>
      </View>
    );
  }

  restart() {
    console.log('restarting');
    this.setState({gameWinner: null, newGame: true});
  }

  onGameEnded(gameStatus) {
    console.log('game ended', gameStatus);
    this.setState({gameWinner: gameStatus, newGame: false});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('ReactToe', () => ReactToe);
