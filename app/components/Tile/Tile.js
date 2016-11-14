import React, { Component, PropTypes } from 'react';
import {Text, TouchableHighlight} from 'react-native';
import styles from './styles';

class Tile extends Component {
  static propTypes = {
      onMoveDone: PropTypes.func.isRequired,
      player: PropTypes.number.isRequired
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
      <Text styles={styles.prova}>{value}</Text>
    );
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onMoveDone}>
        {this.showPlaying()}
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
