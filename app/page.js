import { QueryClient } from '@tanstack/react-query'

import Header from '@/app/components/Header/Header'
import List from '@/app/components/List/List'
import MapContainer from '@/app/components/Map/Map'
/* import Image from 'next/image' */

export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen">
        <List />
        <MapContainer />
      </div>
    </div>
  )
}
