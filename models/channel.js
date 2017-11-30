'use strict';

const uuid = require('uuid/v4');
const moment = require('moment');
const State = require('./state');
const PlayerCollection = require('./player_collection');

module.exports = class Channel {
  /**
   *
   * @param {String} id
   * @param {PlayerCollection} players
   * @param {State} state
   * @param {Number} modified
   * @param {Number} created
   */
  constructor(id, players, state, modified, created) {
    this.id = id || uuid();
    this.players = new PlayerCollection(players);
    this.state = new State(state);
    this.modified = modified || moment.now();
    this.created = created || moment.now();
  }
};
