import HeroSection from '../components/Home_components/HeroSection';
import Dashboard from '../components/Home_components/Dashboard';
import StatsSection from '../components/Home_components/StatsSection';
import FeaturesSection from '../components/Home_components/FeaturesSection';
import PlatformSection from '../components/Home_components/PlatformSection';
import WhyChooseUs from '../components/Home_components/WhyChooseUs';
import Testimonials from '../components/Home_components/Testimonials';
import FaqComponent from  '../components/Home_components/FaqComponent';
import Pricing from  '../components/Home_components/Pricing';
import CTASection from  '../components/Home_components/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Dashboard />
      <StatsSection />
      <FeaturesSection />
      <PlatformSection />
      <WhyChooseUs />
      <Testimonials />
      <FaqComponent  />
      < Pricing />
      <CTASection />
          </>
  );
};

export default Home;