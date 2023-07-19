import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import useDataContext from '@/hooks/useDataContext'
import { IoMdPin } from 'react-icons/io'
import SmallCard from '../SmallCard/SmallCard'

function MapContainer({ coordinates, setCoordinates, setBounds, places, isMobile }) {
  const [isCard, setIsCard] = useState(false)
  const [cardData, setCardData] = useState(null)

  const { setCoords, filterCoords } = useDataContext()

  const handleMapClick = () => {
    if (isCard) {
      setIsCard(false)
    }
  }

  const mapStyle = {
    width: isMobile ? '100%' : '200%',
    height: '100vh',
    position: 'relative',
  }

  return (
    <div>
      <div className="col-span-8 md:col-span-8" onClick={handleMapClick}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          }}
          center={filterCoords ? filterCoords : coordinates}
          defaultZoom={16}
          style={mapStyle}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng })
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
            setCoords({
              ne: e.marginBounds.ne,
              sw: e.marginBounds.sw,
            })
          }}
          onChildClick={(child) => {
            setCardData(places[child])
            setIsCard(true)
          }}
        >
          {places?.map((place, i) =>
            !place.name ? null : (
              <div
                key={i}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                className="w-6 h-6 bg-red-300 relative cursor-pointer rounded-xl"
              >
                <IoMdPin className="w-8 h-8 hover:text-gray-500 focus:text-gray-500" />
              </div>
            )
          )}
          {isCard && (
            <SmallCard setCardData={setCardData} cardData={cardData} />
          )}
        </GoogleMapReact>
      </div>
    </div>
  )
}


export default MapContainer
