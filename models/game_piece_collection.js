'use strict';

const GamePiece = require('game_piece');

module.exports = class GamePieceCollection {
  constructor(board) {
    this.index = {};
    if (board) {
      this.set(board);
    }
  }

  set(board) {
    for (let piece in board) {
    }
  }
};
