'use strict';

const uuid = require('uuid/v4');
const moment = require('moment');
const Channel = require('./channel');
const GamePieceCollection = require('./game_piece_collection');

module.exports = class State {
  /**
   *
   * @param {String} id
   * @param {{id: String, players: Array, state: Object, modified: Number, created: Number}} channel
   * @param {Array} board
   * @param {Number} modified
   * @param {Number} created
   */
  constructor(id, channel, board, modified, created) {
    this.id = id || uuid();
    this.channel = new Channel(
      channel.id,
      channel.players,
      channel.state,
      channel.modified,
      channel.created
    );
    this.board = new GamePieceCollection(board);
    this.modified = modified || moment.now();
    this.created = created || moment.now();
  }
};

