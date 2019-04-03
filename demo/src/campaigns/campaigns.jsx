import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
const dateFormat = require('dateformat');

function campaignType(c){
  if (c.reactivation) {
    return "reactivation";
  }
  if (c.riskFree) { 
    return "risk free";
  }
  if (c.marathon) { 
    return "marathon";
  }
}

class Campaigns extends Component {
  static propTypes = {
    campaigns: PropTypes.array,
  }
  render(){
    if (!this.props.campaigns) { return null; }
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Type</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {this.props.campaigns.map(c=>{
              return (
                <tr key={c.id}>
                  <td><Link to={`/campaigns/${c.id}/stats`}>{c.id}</Link></td>
                  <td>{c.name}</td>
                  <td>{campaignType(c)}</td>
                  <td>{dateFormat(c.createdAt, "dd.mm.yyyy.")}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

module.exports = Campaigns;
