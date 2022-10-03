import type { NextPage } from 'next';
import Events from '../components/Events/Events';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents.js'
import WinnersAndGallery from '../components/WinnersAndGallery/WinnersAndGallery'

const Home: NextPage = () => {
  return (
    <>
    {/* All component belongs NextPage */}

    <main className='h-screen'>

      <Header />
      <Hero />
      <Events />
      <UpcomingEvents />
      <WinnersAndGallery />
    </main>


    </>
  )
}

export default Home
