import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

async function fetchSites(coordinates, bounds) {
  const { lat, lng } = coordinates
  const {
    bl_latitude = 11.847676,
    tr_latitude = 12.838442,
    bl_longitude = 109.095887,
    tr_longitude = 109.149359
  } = bounds || {}

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

function useSites() {
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  const query = useQuery({
    queryKey: ['sites'],
    queryFn: async () => fetchSites(coordinates, bounds),
  })

    useEffect(() => {
      const startPosition = async () => {
        navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoordinates({ lat: latitude, lng: longitude })
        }
      )}
      startPosition()
    }, [])

    useEffect(() => {
      if (coordinates && bounds) {
        query.queryFn()
      }
    }, [coordinates, bounds, query])

    console.log(coordinates)
    console.log(bounds)

  return {
    type, 
    setType, 
    rating, 
    setRating, 
    isLoading: query.isLoading, 
    isError: query.isError, 
    error: query.error, 
    sites: query.data?.data || [],
    setBounds
  }  
}


export default useSites