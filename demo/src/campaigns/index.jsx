import React, { Component } from 'react';
import PubSub from 'pubsub-js';
const Campaigns = require('./campaigns');
const Model = require('./model');

class CampaignsIndex extends Component {
  componentDidMount() {
    this.model = Model.create();
    this.pubsub = PubSub.subscribe(this.model.getEventName(), ()=>{
      this.setState({});
    });
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.pubsub);
  }
  render(){
    if (!this.model) { return null; }
    return (
      <Campaigns 
        campaigns={this.model.getCampaigns()} 
      />
    );
  }
}

module.exports = CampaignsIndex;
