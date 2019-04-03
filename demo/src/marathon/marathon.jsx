import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const BarChart = require('./bar_chart');

var {toCurrency} = require('./lib');

class Marathon extends Component {
  static propTypes = {
    campaignId: PropTypes.string,
    chartData: PropTypes.object,
  }
  render() {
    var {chartData} = this.props;
    if (!chartData) { return null; }
    return (
      <div>
        {chartData.lastActive>0 &&
          <Row>
            <Col>
              <Card className="text-center">
                <Card.Header>Danas odigrali:</Card.Header>
                <Card.Body>
                  <h1>{toCurrency(chartData.lastActive, 0)}</h1>
                </Card.Body>
                {chartData.activePlayers>0 && <Card.Footer className="text-muted">od {toCurrency(chartData.activePlayers)} još u utrci</Card.Footer>}
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Header>Trenutni bonus:</Card.Header>
                <Card.Body>
                  <h1>{toCurrency(chartData.lastReward, 0)} kn</h1>
                </Card.Body>
                {chartData.activePlayers>0 && <Card.Footer className="text-muted">minimalni iznos {toCurrency(chartData.activeReward, 0)} kn</Card.Footer>}
              </Card>
            </Col>
          </Row>        
        }
        <div style={{marginTop:20}}>
          <BarChart 
            label="Igrača"
            labels={chartData.labels}
            data={chartData.active}
            backgroundColor="rgba(75, 192, 192, 0.5)"
            borderColor="rgba(75, 192, 192, 1)"
            chartId={`chart1-${this.props.campaignId}`}
          />
          <BarChart 
            label="Bonus (kn)"
            labels={chartData.labels}
            data={chartData.rewards}
            backgroundColor="rgba(153, 102, 255, 0.5)"
            borderColor="rgba(153, 102, 255, 1)"
            chartId={`chart2-${this.props.campaignId}`}
          />
        </div>
      </div>
    );
  }
}

module.exports = Marathon;
