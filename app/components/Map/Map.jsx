'use client'

import { GoogleMap, LoadScript } from "@react-google-maps/api"

const API_KEY = "AIzaSyAw-aTPzbceFSmmS4_JNjSO0j7UHv4sgP4";

const containerStyle = {
  width: "200%",
  height: "800px",
}

const mapCenter = {
  lat: 41.90476224706472,
  lng: 12.49822074385094,
}

function MapContainer() {
  return (
    <div>
      <div className="col-span-8 md:col-span-8 ">
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap 
            mapContainerStyle={containerStyle} 
            center={mapCenter} 
            zoom={14} 
          />
        </LoadScript>
      </div>
    </div>
  );
}

export default MapContainer;
