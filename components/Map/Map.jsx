import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import useDataContext from '@/hooks/useDataContext'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
/* import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox'
import '@reach/combobox/styles.css' */



function MapContainer({ coordinates, setCoordinates, setBounds, places }) {
  const [isCard, setIsCard] = useState(false)
  const [cardData, setCardData] = useState(null)

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
            key: 'AIzaSyAw-aTPzbceFSmmS4_JNjSO0j7UHv4sgP4',
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
          onChildClick={(child) => {
            setCardData(places[child])
            setIsCard(true)
          }}
        >
          {places?.map((place, i) => (
            <div
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              position={'relative'}
              cursor='pointer'
            >  
              <Marker />
            </div>
          ))}
          {isCard && (
            <div
              width={'200px'}
              height={'150px'}
              bg={'whiteAlpha.900'}
              
            ></div>
          )}
        </GoogleMapReact>
      </div>
    </div>
  )
}


export default MapContainer
