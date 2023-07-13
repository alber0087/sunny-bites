'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import MapContainer from '@/components/Map/Map'
import List from '@/components/List/List'
import { useEffect, useState } from 'react'
import { fetchSites } from '@/hooks/useFetchSites'
import { DataContextProvider } from '@/context/DataContext'

import Head from 'next/head'

/* import Image from 'next/image' */

const queryClient = new QueryClient()

export default function Home() {
  const [places, setPlaces] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  const [type, setType] = useState('restaurants')
  const [ratings, setRatings] = useState('')

  const [isLoading, setIsLoading] = useState(false)

/*   if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading sites {error?.message}</div>
  } */

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
    if (bounds || []) {
      setIsLoading(true)
      fetchSites(bounds?.sw, bounds?.ne).then((data) => {
        setPlaces(data)
        setIsLoading(false)
      })
    }
  }, [coordinates, bounds])

  return (
    <DataContextProvider>
      <QueryClientProvider client={queryClient}>
        <div className="grid grid-cols-1 md:grid-cols-3 h-screen">
          <List
            places={filteredPlaces?.length ? filteredPlaces : places}
            setType={setType}
            setRatings={setRatings}
            setCoordinates={setCoordinates}
          />
          <MapContainer
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            setBounds={setBounds}
            places={filteredPlaces?.length ? filteredPlaces : places}
          />
        </div>
      </QueryClientProvider>
    </DataContextProvider>
  )
}
