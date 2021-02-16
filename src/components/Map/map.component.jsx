import React from 'react';
import GoogleMapReact from 'google-map-react';

import "./map.styles.scss";


const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h3">Come Visit Us At Our Store</h2>
    <div className="google-map" style={{ height: '60vh', width: '100%' }}>
      <GoogleMapReact bootstrapURLKeys={{
                        key: 'AIzaSyBLU9GnSmZ9Z70W1nW4CKjYeeRew_gxJl8' 
                      }}
                      defaultZoom={zoomLevel}
                      defaultCenter={{
                        lat: location.lat,
                        lng: location.lng 
                      }}
      >
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;



// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;