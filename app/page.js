'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Header from '@/components/Header/Header'
import MapContainer from '@/components/Map/Map'
import List from '@/components/List/List'
import { useEffect, useState } from 'react'
/* import Image from 'next/image' */

const queryClient = new QueryClient()

export default function Home() {
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  const [type, setType] = useState('restaurants')
  const [ratings, setRatings] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
      console.log({latitude, longitude})
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen">
        <List 
          setType={setType} 
          setRatings={setRatings} 
          setCoordinates={setCoordinates}
        />
        <MapContainer 
          setCoordinates={setCoordinates} 
          coordinates={coordinates} 
          setBounds={setBounds}
        />
      </div>
    </QueryClientProvider>
  )
}
