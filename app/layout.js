import Header from '@/components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'sunnyBites',
  description: 'Find your place',
}

const API_KEY = 'AIzaSyAw-aTPzbceFSmmS4_JNjSO0j7UHv4sgP4'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
{/*         <script
          src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
        /> */}
        <Header />
        {children}
      </body>
    </html>
  )
}
