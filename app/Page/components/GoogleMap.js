import React from 'react';
import GoogleMapReact from 'google-map-react';

class GoogleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: -37.84,
      lng: 144.95
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '200px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC0yQovZ4z7LYB19-97isUQNrGa9Y-W_ms', }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;