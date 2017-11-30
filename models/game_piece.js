'use strict';

const Player = require('./player');

module.exports = class GamePiece {
  /**
   *
   * @param {Array<String, String>} position
   * @param {Object} player
   * @param {Boolean} isKing
   */
  constructor(position, player, isKing) {
    this.position = new Position(position);
    this.player = new Player(player);
    this.isKing = isKing || false;
  }
};

class Position {
  /**
   *
   * @param {Array<String, String>} position
   */
  constructor(position) {
    this.column = position[0] || '';
    this.row = position[1] || '';
  }
  asTuple() {
    return [this.column, this.row];
  }
}
