import { Inter } from 'next/font/google'
import Navbar from '@/componect/navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      Home component
    </>
  )
}
