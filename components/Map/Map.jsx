import GoogleMapReact from 'google-map-react'
import useDataContext from '@/hooks/useDataContext'

function MapContainer({ coordinates, setCoordinates, setBounds, places }) {

  const { setCoords } = useDataContext()

  const mapStyle = {
    width: '200%',
    height: '90vh',
    position: 'relative',
  }

  return (
    <div>
      <div className="col-span-8 md:col-span-8 ">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          }}
          center={coordinates}
          defaultZoom={14}
          style={mapStyle}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng })
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
            setCoords({
              ne: e.marginBounds.ne,
              sw: e.marginBounds.sw,
            })
          }}
        >
          {places && places.map((place, i) => {
            <div 
              lat={Number(place.latitude)} 
              lng={Number(place.longitud)}
              position={'relative'}
              cursor={'pointer'}
            >
              <IoLocation color='red' fontSize={30}/>
            </div>
          })}
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default MapContainer
