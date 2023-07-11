/*       'X-RapidAPI-Key': 'ac9f308512mshe38117e6bda849ep178b23jsncab96a46572c', */
import { QueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useDataContext from '@/hooks/useDataContext'

const queryClient = new QueryClient()

/* const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary" */

export async function fetchSites(sw, ne) {
  console.log(sw, ne)
  try {
    const {
      data: { data },
    } = await axios.get(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
      headers: {
        'X-RapidAPI-Key': '3aec6ecd4bmshe1eb0818fc5277cp17b368jsndf982a585105',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    })
   return data
  } catch (error) {
    console.log(`Fetch data Error: ${error}`)
    return null
  }
}

function useSites() {  
  const {coords} = useDataContext()
  const query = useQuery({
    queryKey: ['sites'],
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
