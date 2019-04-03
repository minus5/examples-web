const React = require('react');
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const Link = require('./link');

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
const Marathon = require('../marathon/index');
const Campaigns = require('../campaigns/index');

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Bonus</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><Link to="/">Campaigns</Link></Nav.Link>
      </Nav>      
    </Navbar>
  );
}

function Main() {
  return (
    <Container fluid style={{paddingTop:30, paddingBottom:30}}>
      <Switch>
        <Route exact path='/' component={Campaigns}/>
        <Route path='/campaigns/:campaignId/stats' component={Marathon}/>
      </Switch>
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

module.exports = App;
