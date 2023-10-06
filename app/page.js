import Image from 'next/image'
import Front_page from './Components/front_page'
import Bottom_page from './Components/Bottom_page'
import Footer_page from './Components/Footer_page'
import Nav_section from './Components/Nav_section'
import Top_nav_section from './Components/Top_nav_section'
import Message_secction from './Components/Message_secction'
export default function Home() {
  return (
    <main className="flex min-h-screen bg-cream ">
        <Nav_section/>
        <Top_nav_section/>
      <div className='flex flex-col w-full mt-4vh'>
      <Front_page/>
      <div className='py-2 h-10 mb-4 border-y-2 border-y-blacktosummer bg-yellow'/>
      <Bottom_page/>
      <Message_secction/>
      <Footer_page/>
      </div>

    </main>
  )
}
