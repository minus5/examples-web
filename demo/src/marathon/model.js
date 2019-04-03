var {parseChartData} = require('./lib');
import PubSub from 'pubsub-js';

var API, setInterval, clearInterval;

function init(deps){
  API = deps.API;
  setInterval = deps.setInterval;
  clearInterval = deps.clearInterval;
}

function create(campaignId){
  var eventName = `model-${campaignId}`;
  var chartData;
  var interval;
  
  function refresh(){
    PubSub.publish(eventName);
  }

  function fetchStats(){
    API.fetchCampaignStats(campaignId, stats=>{
      chartData = parseChartData(stats);
      refresh();
    });
  }

  function run(){
    fetchStats();
    interval = setInterval(fetchStats, 5*60*1000);
  }

  function stop(){
    clearInterval(interval);
  }

  run();

  return {
    stop,
    getChartData: ()=>chartData,
    getEventName: ()=>eventName,
  };
}

module.exports = {
  init,
  create,
};
