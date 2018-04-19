const assert = require('assert');
const app = require('../../src/app');

describe('\'select-party\' service', () => {
  it('registered the service', () => {
    const service = app.service('select-party');

    assert.ok(service, 'Registered the service');
  });
});
