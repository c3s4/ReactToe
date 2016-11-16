import React, { Component, PropTypes } from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';

class EndGameOverlay extends Component {
  static propTypes = {
    onRestart: PropTypes.func.isRequired
  }
  render() {
    if (this.props.gameWinner) {
      return (
        <View style={styles.overlay}>
          <Text style={styles.overlayMessage}>{this.props.gameWinner}</Text>
          <TouchableHighlight
            onPress={this.props.onRestart}
            underlayColor="transparent"
            activeOpacity={0.5}>
            <View style={styles.newGame}>
              <Text style={styles.newGameText}>New Game</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    } else {
      return <View />;
    }
  }
}

export default EndGameOverlay;
