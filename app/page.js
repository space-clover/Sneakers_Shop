import Image from 'next/image'
import Front_page from './Components/front_page'
import Bottom_page from './Components/Bottom_page'
import Footer_page from './Components/Footer_page'
import Nav_section from './Components/Nav_section'
export default function Home() {
  return (
    <main className="flex min-h-screen bg-cream">
        <Nav_section/>
      <div className='flex flex-col w-full'>
      <Front_page/>
      <div className='py-2 mb-4 border-y-2 border-y-blacktosummer bg-yellow'/>
      <Bottom_page/>
      <Footer_page/>
      </div>

    </main>
  )
}
