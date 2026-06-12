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
       {/* ================= FAQ (NEW FIXED SECTION) ================= */}
          <FaqComponent
  title="About Our Company"
  highlight="to know."
  description="Simple answers about setup, billing, security and integrations."
  faqs={[
    {
      question: "How quickly can I get started?",
      answer: "You can start within minutes with onboarding."
    },
    {
      question: "Is it free to use?",
      answer: "Yes, there is a free plan available."
    },
        {
      question: "Is it free to use?",
      answer: "Yes, there is a free plan available."
    },
        {
      question: "Is it free to use?",
      answer: "Yes, there is a free plan available."
    },
  ]}
/>
      < Pricing />
<CTASection
  titleLine1="Your Next $5M Project"
  titleHighlight="Is Already Here."
  subText="Join 9,200+ contractors who stopped guessing and started winning. Free to start — no credit card needed."
  primaryBtnText="Start Finding Projects"
  primaryBtnLink="/projects"
  secondaryBtnText="Schedule a Demo"
  secondaryBtnLink="/demo"
  noteText="No credit card · Free forever plan · Cancel anytime"
/>          </>
  );
};

export default Home;