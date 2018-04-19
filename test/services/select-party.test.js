const assert = require('assert');
const app = require('../../src/app');

describe('\'select-party\' service', () => {
  it('test get user not select', async() => {
    const service = app.service('select-party');
    await service.get('5ad8f0361ada25004b18b80f')
      .then((data)=>{
      
      });
    assert.ok(service, 'Registered the service');
  });
});
