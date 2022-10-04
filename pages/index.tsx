import type { NextPage } from "next";
import Events from "../components/Events/Events";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MobileHeader from "../components/Header/MobileHeader";
import Hero from "../components/Hero/Hero";
import MobileHero from "../components/Hero/MobileHero";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
import WinnersAndGallery from "../components/WinnersAndGallery/WinnersAndGallery";

const Home: NextPage = () => {
  return (
    <>
      {/* All component belongs NextPage */}

      <main className="h-screen">
        <Header />
        <MobileHeader />
        <Hero />
        <MobileHero />
        <Events />
        <UpcomingEvents />
        <WinnersAndGallery />
        <Footer />
      </main>
    </>
  );
};

export default Home;
