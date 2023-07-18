'use client'

import { useState } from 'react'
import { Toast, Button } from 'flowbite-react'
import { BsHeart } from 'react-icons/bs'

export default function LikeBtn() {
  const [showToast, setShowToast] = useState(false)

  const handleBtnClick = () => {
    setShowToast(true)
  }

  return (
    <>
      <Button
        className="rounded-xl bg-red-500 py-1.5 hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-red-200"
        onClick={handleBtnClick}
        onChange={() => {
          setShowToast(false)
        }}
      >
        <BsHeart className="text-xl" />
      </Button>
      {showToast && (
        <Toast className="absolute z-50 bottom-10 left-1/2 sm:">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-cyan-800 dark:text-cyan-200">
            <BsHeart className="h-5 w-5"/>
          </div>
          <div className="ml-3 text-sm font-normal">Added to favourites.</div>
          <Toast.Toggle />
        </Toast>
      )}
    </>
  )
}
