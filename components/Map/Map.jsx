import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import useDataContext from '@/hooks/useDataContext'
import {IoMdPin } from 'react-icons/io'
import {Card} from 'flowbite-react'
import Image from 'next/image'

function MapContainer({ coordinates, setCoordinates, setBounds, places }) {
  const [isCard, setIsCard] = useState(false)
  const [cardData, setCardData] = useState(null)

  const { setCoords, filterCoords } = useDataContext()

  const mapStyle = {
    width: '200%',
    height: '100vh',
    position: 'relative'
  }

  return (
    <div>
      <div className="col-span-8 md:col-span-8">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAw-aTPzbceFSmmS4_JNjSO0j7UHv4sgP4',
          }}
          center={filterCoords ? filterCoords : coordinates}
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
          onChildClick={(child) => {
            setCardData(places[child])
            setIsCard(true)
          }}
        >
          {places?.map((place, i) =>
            !place.name ? null : (
              <div
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                className="w-6 h-6 bg-red-300 relative cursor-pointer rounded-xl"
              >
                <IoMdPin className="w-8 h-8 hover:text-gray-500 focus:text-gray-500" />
              </div>
            )
          )}
          {isCard && (
            <div
              className="w-200 h-350 absolute top-12 left-0 bg-white rounded-xl"
              imgSrc={cardData.photo.images.small.url}
              imgAlt={cardData.photo?.images.caption}
            >
              <Image 
                src={cardData.photo.images.small.url} 
                width={200}
                height={150}
                className='object-cover'
              />
              <div className='max-w-200 flex wrap justify-center text-lg p-2'>
                <p className='w-200'>
                  {cardData.name}
                </p>
              </div>
            </div>
          )}
        </GoogleMapReact>
      </div>
    </div>
  )
}


export default MapContainer
