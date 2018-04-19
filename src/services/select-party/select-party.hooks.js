const { authenticate } = require('@feathersjs/authentication').hooks;
const checkUserSelect = require('./hook.functions');
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
      checkUserSelect()
    ],
    remove: []
  },

  after: {
    all: [],
    find: [],
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
