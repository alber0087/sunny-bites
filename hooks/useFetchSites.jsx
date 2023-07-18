

import { QueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useDataContext from '@/hooks/useDataContext'

const queryClient = new QueryClient()

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export async function fetchSites(type, sw, ne) {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Key':
            `${API_KEY}`,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      }
    )
   return data
  } catch (error) {
    console.log(`Fetch data Error: ${error}`)
  }
}

function useSites() {  

  const {coords} = useDataContext()
  
  const query = useQuery({
    queryKey: ['hola'],
    queryFn: async () => fetchSites(coords.sw, coords.ne),
    retry: 6,
  })

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    sites: query.data,
  }
}

export default useSites
