import React, { Component, PropTypes } from 'react';
import {Dimensions, View, Text} from 'react-native';
import styles from './styles';

import Tile from '../Tile';


class Board extends Component {
  static propTypes = {
      onGameEnded: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.winningConfigurations = [];
    this.winningConfigurations.push([0, 1, 2]);
    this.winningConfigurations.push([3, 4, 5]);
    this.winningConfigurations.push([6, 7, 8]);

    this.winningConfigurations.push([0, 3, 6]);
    this.winningConfigurations.push([1, 4, 7]);
    this.winningConfigurations.push([2, 5, 8]);

    this.winningConfigurations.push([0, 4, 8]);
    this.winningConfigurations.push([2, 4, 6]);

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

      this.currentPlayer = (this.currentPlayer === 0) ? 1 : 0;
      const gameStatus = this.checkWinner(updatedBoard);

      let newState = {};
      newState.board = updatedBoard;
      if (gameStatus !== null) {
        this.props.onGameEnded(gameStatus);
      }

      this.setState(newState);
    }
  }

  checkWinner(updatedBoard) {
    console.log(updatedBoard);
    let winningPlayer;
    console.log(this.state);
    const gameWon = this.winningConfigurations.some((configuration) => {
      if ((updatedBoard[configuration[0]] !== Tile.PLAYED_VALUE.NONE) &&
          (updatedBoard[configuration[0]] === updatedBoard[configuration[1]]) &&
          (updatedBoard[configuration[0]] === updatedBoard[configuration[2]])) {
        winningPlayer = updatedBoard[configuration[0]];
        return true;
      }
    });

    const gameDraw = updatedBoard.every((value) => {
      return value !== -1;
    });

    if (gameWon === true) {
      console.log(winningPlayer);
      return (winningPlayer === Tile.PLAYED_VALUE.X) ? Tile.PLAYED_VALUE.X : Tile.PLAYED_VALUE.O;
    } else if (gameDraw === true) {
      return Tile.PLAYED_VALUE.NONE;
    }

    return null;

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
