'use client';

import { Card, Rating } from 'flowbite-react';

export default function ECommerceCard({ place }) {

  const getAvailability = () => {
    if (place.open_now_text === 'Open Now') return 'bg-green-200'
    else if (place.open_now_text === 'Closed Now') return 'bg-red-200'
    else return 'bg-orange-300'
  }

  return (
    <Card
      imgAlt={place.photo?.images.caption}
      imgSrc={place.photo?.images.medium.url}
      className="mb-4 object-cover h-50"
    >
      <a href="/">
        <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {place.name}
        </div>
      </a>
      <div className="flex items-center justify-between ">
        <div>
          <Rating>
            <Rating.Star value={place.rating} />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              {place.rating}
            </p>
          </Rating>
        </div>
        <div>{place.price_level}</div>
      </div>
      <div className="text-xs">{place.ranking}</div>
      <div className="flex items-center justify-between">
        <div
          className={`p-1 px-2 rounded-lg text-sm ${getAvailability(place.open_now_text)}`}
        >
          {place.open_now_text}
        </div>
        <a
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          href="#"
        >
          <p>Like</p>
        </a>
      </div>
    </Card>
  )
}
