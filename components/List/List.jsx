"use client";

import ECommerceCard from "../PlaceDetails/PlaceDetails"
import { Dropdown } from "flowbite-react"
import useSites from '@/app/hooks/useFetchSites'

function List() {
  const { type, setType, rating, setRating, isLoading, isError, error, sites } = useSites()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading sites {error?.message}</div>
  }

  return (
    <div className="p-6 bg-amber-500">
      <div className="mb-4 text-white font-bold text-base">
        <h2>The Best terraces around you...</h2>
      </div>
      <div className="flex justify-evenly mb-4 bg-white font-bold text-base p-2 gap-6">
        <div>
          <Dropdown inline label="Filter by..." value={type}>
            <Dropdown.Item
              value="restaurants"
              onChange={(e) => setType(e.target.value)}
            >
              Restaurants
            </Dropdown.Item>
            <Dropdown.Item
              value="bars"
              onChange={(e) => setType(e.target.value)}
            >
              Bars
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div>
          <Dropdown inline label="Rating..." value={rating}>
            <Dropdown.Item
              value={0}
              onChange={(e) => setRating(e.target.value)}
            >
              All
            </Dropdown.Item>
            <Dropdown.Item
              value={2}
              onChange={(e) => setRating(e.target.value)}
            >
              Above 2.0
            </Dropdown.Item>
            <Dropdown.Item
              value={3}
              onChange={(e) => setRating(e.target.value)}
            >
              Above 3.0
            </Dropdown.Item>
            <Dropdown.Item
              value={4}
              onChange={(e) => setRating(e.target.value)}
            >
              Above 4.0
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <div className="col-span-4 md:col-span-4">
        {sites &&
          sites.map((site) => (
            <ECommerceCard site={site} key={site.location_id} />
          ))}
      </div>
    </div>
  )
}

export default List
