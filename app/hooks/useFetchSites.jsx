import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

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

function useSites() {
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  const query = useQuery({
    queryKey: ['sites'],
    queryFn: async () => fetchSites(),
  })


  return {
    type, 
    setType, 
    rating, 
    setRating, 
    isLoading: query.isLoading, 
    isError: query.isError, 
    error: query.error, 
    sites: query.data?.data || [],
  }  
}

export default useSites