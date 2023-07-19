'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SmallCard({ cardData, setCardData }) {

  return (
    <div className="flex flex-col w-44 h-56 items-center bg-white absolute top-2 left-0 rounded-lg shadow-2xl">
      <div className="top-0 w-48 h-40 rounded-t-lg">
        <Image
          src={cardData.photo.images.small.url}
          alt={cardData.photo?.images.caption}
          style={{ objectFit: 'cover', borderRadius: '8px' }}
          fill={true}
        />
      </div>
      <div className="w-full flex justify-center items-end z-50 bg-white p-2 text-center font-bold">
        <div className="text-lg">
          <Link href={cardData.web_url ?? cardData.website}>{cardData.name}</Link>
        </div>
      </div>
    </div>
  )
}
