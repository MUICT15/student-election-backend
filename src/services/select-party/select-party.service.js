// Initializes the `select-party` service on path `/select-party`
const createService = require('feathers-mongoose');
const createModel = require('../../models/select-party.model');
const hooks = require('./select-party.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'select-party',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/select-party', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('select-party');

  service.hooks(hooks);
};
