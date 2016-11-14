import React, { Component } from 'react';
import {Dimensions, View, Text} from 'react-native';
import styles from './styles';

import Tile from '../Tile';


class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.currentPlayer = 0;
    this.state.board = [];
    for (let i = 0; i < 9; i++) {
      this.state.board[i] = Tile.PLAYED_VALUE.NONE;
    }
  }

  move(index) {
    const currentMove = (this.currentPlayer === 0) ? Tile.PLAYED_VALUE.X : Tile.PLAYED_VALUE.O;
    if (this.state.board[index] === Tile.PLAYED_VALUE.NONE) {
      const updatedBoard = this.state.board.slice();
      updatedBoard[index] = currentMove;
      this.setState({board: updatedBoard});
      this.currentPlayer = (this.currentPlayer === 0) ? 1 : 0;
    }
  }


  render() {

    let deviceWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        {this.state.board.map((item, index) => <Tile key={index}
                                            width={Math.floor(deviceWidth / 3)}
                                            height={Math.floor(deviceWidth / 3)}
                                            player={item}
                                            onMoveDone={this.move.bind(this, index)} />
                                  )}
      </View>
    );
  }
}

export default Board;
