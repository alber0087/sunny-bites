'use client'

import { useEffect, createRef, useState } from 'react'
import ECommerceCard from '../PlaceDetails/PlaceDetails'
import { Dropdown } from 'flowbite-react'
import Skeleton from '../Skeleton/Skeleton'

function List({ setType, setRatings, places, isLoading, childClick }) {
  const [elemRefs, setElemrefs] = useState([])

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elemRefs[i] || createRef())
    setElemrefs(refs)
  }, [places])

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="px-12 py-6 flex flex-col items-center overflow-auto">
          <div className="sm:w-100 w-80 flex justify-between mb-4 font-bold text-base p-4 px-12 max-w-md rounded-md border-2 border-red-500 text-gray-700">
            <div className="">
              <Dropdown inline label="Filter by...">
                <Dropdown.Item
                  value="restaurants"
                  onClick={() => setType('restaurants')}
                >
                  Restaurants
                </Dropdown.Item>
                <Dropdown.Item
                  value="attractions"
                  onClick={() => setType('attractions')}
                >
                  Attractions
                </Dropdown.Item>
              </Dropdown>
            </div>
            <div className="">
              <Dropdown inline label="Rating...">
                <Dropdown.Item
                  value={0}
                  onClick={() => {
                    setRatings('')
                  }}
                >
                  All
                </Dropdown.Item>
                <Dropdown.Item value={2} onClick={() => setRatings(2)}>
                  Above 2.0
                </Dropdown.Item>
                <Dropdown.Item value={3} onClick={() => setRatings(3)}>
                  Above 3.0
                </Dropdown.Item>
                <Dropdown.Item value={4} onClick={() => setRatings(4)}>
                  Above 4.0
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
          <div className="overflow-scroll col-span-4 md:col-span-4 overflow-x-hidden">
            {places?.map((place, i) =>
              !place.name ? null : isLoading ? (
                <Skeleton key={i} />
              ) : (
                <ECommerceCard 
                  key={i} 
                  place={place} 
                  refProp={elemRefs[i]} 
                  selected={Number(childClick) === i}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default List
