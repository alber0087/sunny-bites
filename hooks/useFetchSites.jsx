/*       'X-RapidAPI-Key': 'ac9f308512mshe38117e6bda849ep178b23jsncab96a46572c', */
/*       'X-RapidAPI-Key': '3aec6ecd4bmshe1eb0818fc5277cp17b368jsndf982a585105'  */

import { QueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useDataContext from '@/hooks/useDataContext'

const queryClient = new QueryClient()

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
            '74fddfd9cfmsheba8007d8f1d840p19f49bjsn91a9898a1080',
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
