'use client'

import Header from '@/components/Header/Header'
import { DataContextProvider } from '@/context/DataContext'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

/* export const metadata = {
  title: 'sunnyBites',
  description: 'Find your place',
} */

const API_KEY = 'AIzaSyAw-aTPzbceFSmmS4_JNjSO0j7UHv4sgP4'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
          <title>sunnyBites</title>
      </Head>
      <body className={`${inter.className} overflow-hidden`} >
        <DataContextProvider>
          <script
            src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
          />
          <Header />
          {children}
        </DataContextProvider>
      </body>
    </html>
  )
}
