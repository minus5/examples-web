import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';
const Marathon = require('./marathon');
const Model = require('./model');

class MarathonIndex extends Component {
  static propTypes = {
    match: PropTypes.object,
  }
  componentDidMount() {
    const campaignId = this.props.match.params.campaignId;
    this.model = Model.create(campaignId);
    this.pubsub = PubSub.subscribe(this.model.getEventName(), ()=>{
      this.setState({});
    });
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.pubsub);
    this.model.stop();
  }
  render(){
    if (!this.model) { return null; }
    return (
      <Marathon 
        campaignId={this.props.match.params.campaignId} 
        chartData={this.model.getChartData()} 
      />
    );
  }
}

module.exports = MarathonIndex;
