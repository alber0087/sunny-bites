'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import MapContainer from '@/components/Map/Map'
import List from '@/components/List/List'
import { useEffect, useState } from 'react'
import { fetchSites } from '@/hooks/useFetchSites'
import Switch from '@/components/Switch/Switch'
/* import Image from 'next/image' */

const queryClient = new QueryClient()

export default function Home() {
  const [places, setPlaces] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  const [type, setType] = useState('restaurants')
  const [ratings, setRatings] = useState('')

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  useEffect(() => {
    const filteredData = places?.filter((place) => place.rating > ratings)
    setFilteredPlaces(filteredData)
  }, [ratings])

  useEffect(() => {
    if (bounds) {
      setIsLoading(true)
      fetchSites(type, bounds?.sw, bounds?.ne).then((data) => {
        setPlaces(data)
        setIsLoading(false)
      })
    }
  }, [type, coordinates, bounds])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-flow-col md:grid-cols-3 h-screen">
          <List
            className='sm:w-screen bg-red-500'
            places={filteredPlaces?.length ? filteredPlaces : places}
            setType={setType}
            setRatings={setRatings}
            setCoordinates={setCoordinates}
            isLoading={isLoading}
          />
          <MapContainer
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            setBounds={setBounds}
            places={filteredPlaces?.length ? filteredPlaces : places}
          />
          <Switch />
        </div>
      </QueryClientProvider>
    </>
  )
}
