import React from 'react';
import "./contacts.styles.scss";
import Map from '../../components/Map/map.component';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Contacts</h1>
      <div className="contact-info">
        <div className="address-description">
          <div>Street:</div>
          <div>City:</div>
          <div>Email:</div>
          <div>Phone:</div>
        </div>
        <div className="address-info">
          <div>3147  Doctors Drive</div>
          <div>90017 Los Angeles (USA)</div>
          <div>r3wl0id838@temporary-mail.net</div>
          <div>+310-341-3762</div>
        </div>
      </div>

      <div className="map-info">
        <Map location={location} zoomLevel={13} />
      </div>
    </div>
  )
};

export default Contacts;