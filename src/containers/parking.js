import React, { Component } from 'react';
import { Glyphicon, Panel } from 'react-bootstrap';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 14.6178, lng: 121.0572 }}
    >
      <Marker
        position={{ lat: 14.620060, lng: 121.052658 }}
      />
      <Marker
        position={{ lat: 14.618813, lng: 121.054465 }}
      />
      <Marker
        position={{ lat: 14.615257, lng: 121.045813 }}
      />
      <Marker
        position={{lat: 14.618457, lng: 121.056290}}
      />

  </GoogleMap>
))
export default class Parking extends Component {
  render () {
    return (
      <div>
        <div className="container">
          <h1>Bike Parking Locations in Cubao</h1>
          <Panel bsStyle="primary">

            <Panel.Heading>
              <Panel.Title componentClass="h3">Farmers Market</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>
                <strong>Instructions: </strong>
                You need to register your name to the guard on duty. He'll give you a thing a receipt. Exchange that receipt when you're done parking.
              </p>
              <p>
                Price: Free.
              </p>
              <p>
                Guard: present.
              </p>
              <p>
                Hours: 24 hours.
              </p>
            </Panel.Body>
          </Panel>

          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title componentClass="h3">SM Cubao</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>
                <strong>Instructions: </strong>
                Go to the back-end of SM Cubao, take the ramp to the 2nd floor. No need to surrender an ID to the guard.</p>
              <p>
                Hours: Only when SM is open. 11am-10pm.
              </p>
            </Panel.Body>
          </Panel>

          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title componentClass="h3">SM Hypermart</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>
                <strong>Instructions: </strong>
                It's right there in the parking lot. There is a guard but they don't really check your bike. Suggested to have a bike lock ready.
              </p>
              <p>
                Hours: Only when SM is open. 11am-10pm.
              </p>
            </Panel.Body>
          </Panel>

          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `700px` }} />}
          />
        </div>
      </div>
    );
  }
}
