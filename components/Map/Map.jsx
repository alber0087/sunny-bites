
import GoogleMapReact from "google-map-react"


function MapContainer({ coordinates, setCoordinates, setBounds }) {

  const mapStyle = {
    width: '200%',
    height: '90vh',
    position: 'relative'
  }

  return (
    <div>
      <div className="col-span-8 md:col-span-8 ">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          }}
          center={coordinates}
          defaultCenter={coordinates}
          defaultZoom={14}
          style={mapStyle}
          onChange={(e) => {
            setCoordinates({lat: e.center.lat, lng: e.center.lng })
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
          }}
        ></GoogleMapReact>
      </div>
    </div>
  )
}

export default MapContainer;
