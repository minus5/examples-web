const { assert } = require('chai');
const sinon = require('sinon');
const Model = require('../src/marathon/model');

const fetchSpy = sinon.spy();
const setIntervalSpy = sinon.spy();
const clearIntervalSpy = sinon.spy();


Model.init({
  API: {
    fetchCampaignStats: fetchSpy,
  },
  setInterval: setIntervalSpy,
  clearInterval: clearIntervalSpy,
});

describe('Marathon model', ()=>{
  const model = Model.create('fake campaign id');
  it("creates new model", ()=>{
    assert.isObject(model);
  });
  it("fetches stats from API", ()=>{
    assert(fetchSpy.calledWith('fake campaign id'));
  });
  it("sets up refresh interval to fetch stats", ()=>{
    assert(setIntervalSpy.called);
  });
  it("stops refresh interval on cleanup", ()=>{
    model.stop();
    assert(clearIntervalSpy.called);
  });
});
