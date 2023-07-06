"use client";

import { useState } from "react";

import ECommerceCard from "../Card/Card";
import { Dropdown } from "flowbite-react";

import { useQuery } from '@tanstack/react-query'

async function fetchSites() {

const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=11.847676&tr_latitude=12.838442&bl_longitude=109.095887&tr_longitude=109.149359&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&open_now=false'
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

function List() {
  const [type, setType] = useState("restaurants")
  const [rating, setRating] = useState("")

  const query = useQuery({ 
    queryKey: ['sites'],
    queryFn: () => fetchSites()
  })

  if (query.isLoading) {
    return <div>Loading...</div>
  }

  if (query.isError) {
    return <div>Error loading sites {query.error?.message}</div>
  }

  const sites = query.data.data

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
            <Dropdown.Item value={0} onChange={(e) => setRating(e.target.value)}>
              All
            </Dropdown.Item>
            <Dropdown.Item value={2} onChange={(e) => setRating(e.target.value)}>
              Above 2.0
            </Dropdown.Item>
            <Dropdown.Item value={3} onChange={(e) => setRating(e.target.value)}>
              Above 3.0
            </Dropdown.Item>
            <Dropdown.Item value={4} onChange={(e) => setRating(e.target.value)}>
              Above 4.0
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <div className="col-span-4 md:col-span-4">
        {sites.map((site, i) => (
          <div key={i}>
            <ECommerceCard site={site} />
          </div>
        ))}

      </div>
    </div>
  );
}

export default List;
