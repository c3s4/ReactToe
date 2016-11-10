import React, { Component, PropTypes } from 'react';
import {Text, TouchableHighlight} from 'react-native';
import styles from './styles';

class Tile extends Component {
  static propTypes = {
      onMoveDone: PropTypes.func.isRequired
  }

  constructor(props) {
    this.status = {};
    this.status.played_value = Tile.PLAYED_VALUE.NONE;
  }

  setXvalue() {
    if (this.status.played_value === Tile.PLAYED_VALUE.NONE) {
      this.setStatus({played_value: Tile.PLAYED_VALUE.X});
    }
  }

  setOvalue() {
    if (this.status.played_value === Tile.PLAYED_VALUE.NONE) {
      this.setStatus({played_value: Tile.PLAYED_VALUE.O});
    }
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onMoveDone}>
        <Text styles={styles.prova}>{this.status.played_value}</Text>
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
