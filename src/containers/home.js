import React, { Component } from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import './home.css';

const HomeCarousel = () => (
  <Jumbotron>
    <div className="container text-center">
      <h1>Tools to help you bike commute in Manila.</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
    </div>
  </Jumbotron>
);

const Faqs = () => (
  <div className="container">
    <h1 className="text-center">So, Why Urban Cycling?</h1>
    <Row>
      <Col xs={6}>
        <h1>It's Cheaper</h1>
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
