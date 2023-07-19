'use client'

import Image from 'next/image'

export default function SmallCard({ cardData, setCardData }) {

  return (
    <div className='flex flex-col w-52 bg-white'>
      <Image
        src={cardData.photo.images.small.url}
        alt={cardData.photo?.images.caption}
        width={180}
        height={40}
      />
      <div className="text-lg">
        <p>{cardData.name}</p>
      </div>
    </div>
  )
}
