import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const mapStyles = {        
    height: "400px",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: 40.748817, // Latitude for your address
    lng: -73.985428 // Longitude for your address
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}> {/* Use your API Key */}
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}>
        <Marker position={defaultCenter}/>
      </GoogleMap>
    </LoadScript>
  )
}

export default MapComponent;
