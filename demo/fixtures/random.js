function getRandomInt(min, max) {
  var diff = max - min;
  return Math.floor(Math.random() * Math.floor(diff)) + min;
}

function getRandomMarathon(step){
  if (!step){
    step = getRandomInt(3, 14);
  }
  var steps = {};
  var activePlayers = 0;
  for (var i=1; i<=step; i++){
    var val = getRandomInt(200, 4000);
    steps[i] = val;
    activePlayers += val;
  }
  return {
    "stats": {
      "activePlayers": activePlayers
    },
    steps,
  };
}

module.exports = {
  getRandomMarathon,
};
