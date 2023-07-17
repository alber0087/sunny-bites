'use client'

import { Dropdown, Navbar, Avatar } from 'flowbite-react'
import { Autocomplete } from '@react-google-maps/api'
import Link from 'next/link'
import { useState } from 'react'
import useDataContext from '@/hooks/useDataContext'

export default function NavbarWithDropdown() {
  const [autocomplete, setAutocomplete] = useState(null)

  const { setFilterCoords } = useDataContext()

  const onLoad = (autoC) => setAutocomplete(autoC)

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()
    setFilterCoords({ lat, lng })
  }

  return (
    <Navbar fluid rounded className="bg-red-500 text-white justify-center w-screen">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-3xl font-black">
          sunnyBites
        </span>
        <div className="text-white font-bold text-base justify-start mr-30 mt-2 ml-3">
          <h2>The Best places around you.</h2>
        </div>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>
            <Link href={'/profile'}>Settings</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Search..."
            />
          </div>
        </Autocomplete>
        {/* <Navbar.Link href="#">Favourites</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  )
}
