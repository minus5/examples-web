function parseChartData(rsp){
  var labels = [];
  var steps = [];
  var active = [];
  var rewards = [];
  for (let step=1; step<=14; step++){
    labels.push(step);
    var val = rsp.steps[step];
    steps.push(val);
    active[step-1] = 0;
    if (val>0){
      for (var j=0; j<step; j++) {
        active[j] += val;
      }
    }
  }
  var lastActive, lastReward;
  for (let step=0; step<14; step++){
    let val = active[step];
    if (val>0){
      var rev = Math.round(500000/val);
      lastActive = val;
      lastReward = rev;
      rewards.push(rev)
    }
  }
  var activePlayers = rsp.stats.activePlayers;
  var activeReward = activePlayers>0 ? 500000/activePlayers : 0;
  return {
    labels,
    steps,
    active,
    rewards,
    lastActive,
    lastReward,
    activePlayers,
    activeReward,
  }
}

function toCurrency(number, decimalPlaces, removeTrailingZeros) {
  var separatorDecimal = '.';
  var separatorThousands = ',';
  var nStr = (decimalPlaces !== undefined && typeof number === 'number') ? number.toFixed(decimalPlaces) : number.toString();
  if (removeTrailingZeros) nStr = parseFloat(nStr).toString();
  var
    x = nStr.split('.'),
    x1 = x[0],
    x2 = x.length > 1 ? separatorThousands + x[1] : '',
    rgx = /(\d+)(\d{3})/;

  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + separatorDecimal + '$2');
  }
  return x1 + x2;
}

module.exports = {
  parseChartData,
  toCurrency,
};
