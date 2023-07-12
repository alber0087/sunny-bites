"use client";

import ECommerceCard from "../PlaceDetails/PlaceDetails"
import { Dropdown } from "flowbite-react"
import useSites from '@/hooks/useFetchSites'


function List({ type, ratings, setType, setRatings, setCoordinates }) {
  const { isLoading, isError, error, sites } = useSites()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading places {error?.message}</div>
  }

  return (
    <div className="p-6 bg-amber-500 max-w-md">
      <div className="mb-4 text-white font-bold text-base">
        <h2>The Best terraces around you...</h2>
      </div>
      <div className="flex justify-evenly m-4 bg-white font-bold text-base p-2 max-w-md rounded-md">
        <div className="">
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
          <Dropdown inline label="Rating..." value={ratings}>
            <Dropdown.Item
              value={0}
              onClick={() => setRatings('')}
            >
              All
            </Dropdown.Item>
            <Dropdown.Item
              value={2}
              onClick={() => setRatings(2)}
            >
              Above 2.0
            </Dropdown.Item>
            <Dropdown.Item
              value={3}
              onClick={() => setRatings(3)}
            >
              Above 3.0
            </Dropdown.Item>
            <Dropdown.Item
              value={4}
              onClick={() => setRatings(4)}
            >
              Above 4.0
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <div className="col-span-4 md:col-span-4">
        {sites &&
          sites.map((site, idx) => (
            <ECommerceCard site={site} key={idx} />
          ))}
      </div>
    </div>
  )
}

export default List
