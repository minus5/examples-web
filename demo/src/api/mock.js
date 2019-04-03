const maraton = require('../../fixtures/maraton');
const campaings = require('../../fixtures/campaigns');
const random = require('../../fixtures/random');

function fetchCampaignStats(campaignId, onSuccess) {
  setTimeout(()=>{
    if (campaignId=="maraton-190318"){
      onSuccess(maraton);
    } else {
      onSuccess(random.getRandomMarathon());
    }
  }, 200);
}

function fetchCampaigns(onSuccess) {
  setTimeout(()=>{
    onSuccess(campaings);
  }, 200);
}

module.exports = {
  fetchCampaignStats,
  fetchCampaigns,
};
