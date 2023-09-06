import Image from 'next/image'
import Front_page from './Components/front_page'
import Bottom_page from './Components/Bottom_page'
export default function Home() {
  return (
    <main className="flex min-h-screen bg-cream flex-col ">
      <Front_page/>
      <div className='py-2 mb-4 border-y-2 border-y-blacktosummer bg-yellow'/>
      <Bottom_page/>
    </main>
  )
}
