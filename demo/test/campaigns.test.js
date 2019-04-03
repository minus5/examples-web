const { assert } = require('chai');
const Model = require('../src/campaigns/model');

Model.init({
  API: {
    fetchCampaigns: onSuccess=>onSuccess('fake campaign list'),
  }
});

describe('Campaigns model', ()=>{
  it("creates new model", ()=>{
    const model = Model.create();
    assert.isObject(model);
  });
  it("stores list of camapaigns received from api", ()=>{
    const model = Model.create();
    assert.strictEqual(model.getCampaigns(), 'fake campaign list');
  });
  it("returns refresh event name", ()=>{
    const model = Model.create();
    assert.strictEqual(model.getEventName(), 'campaigns');
  });
});
