import React from "react";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import ContactSection from "../components/sections/ContactSection/ContactSection";
import MediaSection from "../components/sections/MediaSection/MediaSection";
import WelcomeSection from "../components/sections/WelcomeSection/WelcomeSection";
import ModelShowroom from "../components/sections/ModelShowroom/ModelShowroom";
import QuickActions from "../components/sections/QuickActions/QuickActions";
import HeroSection from "../components/sections/HeroSection/HeroSection";


function Home() {
  return (
    <>
      <Header />

      <main>
        {/* <HeroSection /> */}

        {/* <QuickActions /> */}

        {/* <ModelShowroom /> */}

        <WelcomeSection />

        {/* <MediaSection /> */}

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default Home;
