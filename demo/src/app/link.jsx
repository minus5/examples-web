const React = require('react');
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

class Link extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    to: PropTypes.string,
    children: PropTypes.node,
  }
  myFunction = () => {
    this.props.history.push(this.props.to);
  }
  render(){
    return <div onClick={this.myFunction}>{this.props.children}</div>;
  }
}

module.exports = withRouter(Link);
