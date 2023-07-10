
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const containerStyle = {
  width: "200%",
  height: "800px",
}

const center = { lat: 44, lng: -80 }

function MapContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <div>
      <div className="col-span-8 md:col-span-8 ">
{/*         <LoadScript googleMapsApiKey={API_KEY}> */}
          <GoogleMap 
            mapContainerStyle={containerStyle} 
            center={center} 
            zoom={14}
          >
            <Marker position={center}/>
          </GoogleMap>
{/*         </LoadScript> */}
      </div>
    </div>
  );
}

export default MapContainer;
