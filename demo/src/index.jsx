const ReactDOM = require('react-dom');
const App = require('./app/app');

const API = require('./api/backend');
const ModelCampaigns = require('./campaigns/model');
ModelCampaigns.init({API});
const ModelMarathon = require('./marathon/model');
ModelMarathon.init({API, setInterval, clearInterval});

ReactDOM.render(
  App(),
  document.getElementById('mount-app')
);
