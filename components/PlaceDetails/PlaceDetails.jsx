'use client'

import { Card, Rating } from 'flowbite-react'
import LikeBtn from '../LikeBtn/LikeBtn'

export default function ECommerceCard({ place }) {
  const getAvailability = () => {
    if (!place.open_now_text) return ''
    if (place.open_now_text === 'Open Now') return 'bg-green-200'
    else if (place.open_now_text === 'Closed Now' || 'Closed Today')
      return 'bg-red-300'
    else return 'bg-orange-300'
  }

  return (
    <>
      <Card
        imgAlt={place.photo?.images.caption}
        imgSrc={place.photo?.images.medium.url}
        className="mb-4 h-50"
      >
        <a href="/">
          <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {place.name}
          </div>
        </a>
        <div className="flex items-center justify-between ">
          <div>
            <Rating>
              <Rating.Star
                filled={parseInt(place.rating) > 1.0 ? true : false}
              />
              <Rating.Star
                filled={parseInt(place.rating) > 2.0 ? true : false}
              />
              <Rating.Star
                filled={parseInt(place.rating) > 3.0 ? true : false}
              />
              <Rating.Star
                filled={parseInt(place.rating) > 4.0 ? true : false}
              />
              <Rating.Star
                filled={parseInt(place.rating) === 5.0 ? true : false}
              />
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
            className={`p-1 px-2 rounded-lg text-sm ${getAvailability(
              place.open_now_text
            )}`}
          >
            {place.open_now_text}
          </div>
          <LikeBtn />
        </div>
      </Card>
    </>
  )
}
