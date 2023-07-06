'use client';

import { Card, Rating } from 'flowbite-react';

export default function ECommerceCard({ site }) {
  return (
    <Card
      imgAlt=""
      imgSrc=""
      className='mb-4'
    >
      <a href="#">
        <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {site.name}
        </div>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            4.95 out of 5
          </p>
        </Rating>
      </div>
      <div className="flex items-center justify-end">
        <a
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          href="#"
        >
          <p>Like</p>
        </a>
      </div>
    </Card>
  );
}
