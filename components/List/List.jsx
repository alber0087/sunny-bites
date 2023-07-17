"use client";

import ECommerceCard from "../PlaceDetails/PlaceDetails"
import { Dropdown } from "flowbite-react"
import Skeleton from "../Skeleton/Skeleton";


function List({ setType, setRatings, places, isLoading }) {

  return (
    <div className="p-6 max-w-md overflow-scroll">
      <div className="flex justify-evenly m-4 bg-white font-bold text-base p-2 max-w-md rounded-md">
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
        <div>
          <Dropdown inline label="Rating...">
            <Dropdown.Item
              value={0}
              onClick={() => {
                setRatings('')
              }}
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
        {
          places?.map((place, i) => (
            !place.name ? null : isLoading ? <Skeleton key={i} /> : <ECommerceCard place={place} key={i} /> 
          ))
        }
      </div>
    </div>
  )
}

export default List
