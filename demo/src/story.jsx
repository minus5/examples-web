const React = require('react');
const ReactDOM = require('react-dom');
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Marathon from './marathon/marathon';
import Campaigns from './campaigns/campaigns';
var lib = require('./marathon/lib');
var campaigns = require('../fixtures/campaigns');
var random = require('../fixtures/random');

function Title(title){
  return (
    <div style={{paddingTop:120, paddingBottom:40}}>
      <h1>{title}</h1>
      <hr/>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Container fluid style={{paddingTop:30, paddingBottom:30}}>
      {Title("Campaigns")}
      <Campaigns campaigns={campaigns} />
      {Title("Marathon Started")}
      <Marathon 
        campaignId="maraton-started"
        chartData={lib.parseChartData(random.getRandomMarathon(3))}
      />
      {Title("Mararthon Completed")}
      <Marathon 
        campaignId="maraton-completed"
        chartData={lib.parseChartData(random.getRandomMarathon(14))}
      />
    </Container>
  </BrowserRouter>,
  document.getElementById('mount-app')
);
