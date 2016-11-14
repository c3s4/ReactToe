import React, { Component, PropTypes } from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';

class Tile extends Component {
  static propTypes = {
      onMoveDone: PropTypes.func.isRequired,
      player: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
  }

  showPlaying() {
    let value = '';
    switch (this.props.player) {
      case Tile.PLAYED_VALUE.X:
        value = 'X';
        break;
      case Tile.PLAYED_VALUE.O:
        value = 'O';
        break;
    }

    return (
      <Text style={styles.player}>{value}</Text>
    );
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onMoveDone}>
        <View style={[styles.container, {width: this.props.width, height: this.props.height}]}>
          {this.showPlaying()}
        </View>
      </TouchableHighlight>
    );
  }


  static get PLAYED_VALUE() {
    return {
      O: 0,
      X: 1,
      NONE: -1
    };
  }
}

export default Tile;
