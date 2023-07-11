'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Header from '@/components/Header/Header'
import MapContainer from '@/components/Map/Map'
import List from '@/components/List/List'
import { useEffect, useState } from 'react'
/* import Image from 'next/image' */

const queryClient = new QueryClient()

export async function fetchSites() {
  const bl_latitude = 11.847676
  const tr_latitude = 12.838442
  const bl_longitude = 109.095887
  const tr_longitude = 109.149359

  const URL = `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${bl_latitude}&tr_latitude=${tr_latitude}&bl_longitude=${bl_longitude}&tr_longitude=${tr_longitude}&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&open_now=false`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ac9f308512mshe38117e6bda849ep178b23jsncab96a46572c',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
  }

  const response = await fetch(URL, options)
  if (!response.ok) {
    throw new Error('Error retrieving sites data')
  }
  return response.json()
}

export default function Home() {
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  const [type, setType] = useState('restaurants')
  const [ratings, setRatings] = useState('')

  const { isLoading, isError, error, sites } = useSites()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading sites {error?.message}</div>
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude })
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  useEffect(() => {}, [])

  function useSites({ useQuery }) {
    const query = useQuery({
      queryKey: ['sites'],
      queryFn: async () => fetchSites(),
    })

    return {
      isLoading: query.isLoading,
      isError: query.isError,
      error: query.error,
      sites: query.data?.data || [],
    }
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 h-screen">
          <List
            isLoading={isLoading}
            type={type}
            setType={setType}
            ratings={ratings}
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
    </>
  )
}
