function req(url, onSuccess){
  fetch(url).then(response=>{
    return response.json();
  }).then(myJson=>{
    onSuccess(myJson);
  });
}

function fetchCampaignStats(campaignId, onSuccess) {
  req(`/stats/${campaignId}`, onSuccess);
}

function fetchCampaigns(onSuccess) {
  req("campaigns", onSuccess);
}


module.exports = {
  fetchCampaignStats,
  fetchCampaigns,  
};
