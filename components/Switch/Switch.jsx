import { Button } from 'flowbite-react'
import React from 'react'

export default function Switch({ showMap, toogleComponent }) {
  return (
    <div className='flex justify-center'>
      <Button
        onClick={toogleComponent}
        className="z-50 absolute bottom-24 w-24 font-bold"
        color="dark"
        pill
      >
        {showMap ? 'Map' : 'Places'}
      </Button>
    </div>
  )
}
