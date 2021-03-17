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
          <div>Street: 1600 Amphitheatre Pkwy</div>
          <div>City: Mountain View, CA 94043</div>
          <div>Email: r3wl0id838@temporary-mail.net</div>
          <div>Phone: +310-341-3762</div>
        </div>
      </div>

      <div className="map-info">
        <Map location={location} zoomLevel={13} />
      </div>
    </div>
  )
};

export default Contacts;
