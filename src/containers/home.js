import React, { Component } from 'react';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
import './home.css';

const HomeCarousel = () => (
  <Jumbotron bsClass="jumbotron home-jumbotron">
    <div className="container text-center">
      <h2>Get your bike on with Bike Paps.</h2>
      <p>Cycling to work in Manila saves time, saves money, and gives you free exercise. Bike Paps is a collection of tools that makes it easier for you to get into urban cycling. It's time to take back the time we lose every time we get into traffic.</p>
      <p>
        <i className="em em-bicyclist home-jumbotron-emoji"></i>
        <i className="em em-mountain_bicyclist home-jumbotron-emoji"></i>
        <i className="em em-bike home-jumbotron-emoji"></i>
      </p>
      <Button bsSize="large" bsStyle="primary" style={{ marginRight: 10 + 'px' }}>Learn more</Button>
      <Button bsSize="large">FAQs</Button>
    </div>
  </Jumbotron>
);

const Faqs = () => (
  <div className="container">
    <h1 className="text-center">So, Why Urban Cycling?</h1>
    <Row>
      <Col xs={6}>
        <p>I saved a lot.</p>
      </Col>
      <Col xs={6}>
        <h1>It's free exercise</h1>
        <p>Yeah</p>
      </Col>
    </Row>
    <Row>
      <Col xs={6}>
        <h1>It saves time</h1>
        <p>I saved a lot.</p>
      </Col>
      <Col xs={6}>
        <h1>It's fun</h1>
        <p>Yeah</p>
      </Col>
    </Row>
  </div>
);

export default class Home extends Component {
  render () {
    return (
      <div className="HomeBody">
        <HomeCarousel />
        <Faqs />
      </div>
    );
  }
}
