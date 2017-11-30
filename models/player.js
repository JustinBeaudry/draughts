'use strict';

const uuid = require('uuid/v4');
const moment = require('moment');

module.exports = class Player {
  /**
   *
   * @param {String} id
   * @param {String} name
   * @param {Object} session
   * @param {Number} created
   * @param {Number} modified
   */
  constructor(id, name, session, created, modified) {
    if (!name) {
      throw new Error('A player must have a name');
    }
    this.id = id || uuid();
    this.name = name;
    this.session  = new Session(session);
    this.created = created || moment.now();
    this.modified = modified || moment.now();
  }
};

class Session {
  constructor(id, ip, created, modified) {
    this.id = id || uuid();
    this.ip = ip || null;
    this.created = created;
    this.modified = modified;
  }
}