import { IoMapOutline, IoBusinessOutline } from 'react-icons/io5'
import { Button } from 'flowbite-react'

export default function Switch({ showMap, toogleComponent }) {

  function changeView() {
    if (showMap) { return <span className='flex items-center'>Map<IoMapOutline className='ml-2'/></span> } 
    else { return <span className='flex items-center'>Places <IoBusinessOutline className='ml-2'/></span> }
  }

  return (
    <div className='flex justify-center'>
      <Button
        onClick={toogleComponent}
        className="z-50 absolute bottom-24 w-24 font-bold"
        color="dark"
        pill
      >
        {changeView()}
      </Button>
    </div>
  )
}
