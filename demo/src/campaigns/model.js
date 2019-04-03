import PubSub from 'pubsub-js';
var API;
 
function init(deps){
  API = deps.API;
}

function create(){
  var eventName = `campaigns`;
  var campaigns;
  
  function refresh(){
    PubSub.publish(eventName);
  }

  API.fetchCampaigns(cs=>{
    campaigns = cs;
    refresh();
  });

  return {
    getCampaigns: ()=>campaigns,
    getEventName: ()=>eventName,
  };
}

module.exports = {
  create,
  init,
};
