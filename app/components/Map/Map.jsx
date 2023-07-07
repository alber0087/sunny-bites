'use client'

import { GoogleMap, LoadScript } from "@react-google-maps/api"
import useSites from "@/app/hooks/useFetchSites";

const API_KEY = "AIzaSyAw-aTPzbceFSmmS4_JNjSO0j7UHv4sgP4";

const containerStyle = {
  width: "200%",
  height: "800px",
}

function MapContainer() {
  const { coordinates, setCoordinates, bounds, setBounds } = useSites()
  

  return (
    <div>
      <div className="col-span-8 md:col-span-8 ">
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap 
            mapContainerStyle={containerStyle} 
            center={coordinates} 
            zoom={14} 
            onChange={(e) => {
              setCoordinates({ lat: e.center.lat, lng: e.center.lng })
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
            }}
          />
        </LoadScript>
      </div>
    </div>
  );
}

export default MapContainer;
