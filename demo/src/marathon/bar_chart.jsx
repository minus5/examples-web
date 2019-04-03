import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

class BarChart extends Component {
  static propTypes = {
    label: PropTypes.string,
    labels: PropTypes.array,
    data: PropTypes.array,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    chartId: PropTypes.string,
  }
  componentDidMount(){ this.refresh(); }
  componentDidUpdate(){ this.refresh(); }
  refresh() {
    if (!this.props.labels) { return; }
    if (this.chart) {
      this.chart.data.datasets[0].data = this.props.data;
      this.chart.update();
    } else {
      var ctx = document.getElementById(this.props.chartId).getContext('2d');
      this.chart1 = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.props.labels,
          datasets: [
            {
              label: this.props.label,
              data: this.props.data,
              backgroundColor: this.props.backgroundColor,
              borderColor: this.props.borderColor,
              borderWidth: 1
            },
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  }
  render() {
    return (
      <canvas id={this.props.chartId} height="60%"></canvas>
    );
  }
}

module.exports = BarChart;
