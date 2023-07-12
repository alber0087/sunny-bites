"use client";

import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { Autocomplete } from '@react-google-maps/api'
import Link from "next/link";
import { useState } from "react";

export default function NavbarWithDropdown({ setCoordinates }) {
  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad = (autoC) => setAutocomplete(autoC)

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()
    setCoordinates({ lat, lng })
  }

  return (
    <Navbar fluid rounded className="bg-amber-500 text-white">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-3xl font-black">
          sunnyBites
        </span>
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
            <Link href={'/profile'}>
              Settings
            </Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input type="text"/>
        </Autocomplete>
        {/* <Navbar.Link href="#">Favourites</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
