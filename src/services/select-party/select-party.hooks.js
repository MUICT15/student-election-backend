const { authenticate } = require('@feathersjs/authentication').hooks;
const {removeSomeCredential , checkBeforeSelectParty} = require('./hook.functions');
module.exports = {
  before: {
    all: [ 
      authenticate('jwt') 
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [
      checkBeforeSelectParty()
    ],
    remove: []
  },

  after: {
    all: [],
    find: [
      removeSomeCredential()
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
