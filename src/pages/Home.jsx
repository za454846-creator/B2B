import { Helmet } from 'react-helmet-async';

import HeroSection from '../components/Home_components/HeroSection';
import Dashboard from '../components/Home_components/Dashboard';
import StatsSection from '../components/Home_components/StatsSection';
import FeaturesSection from '../components/Home_components/FeaturesSection';
import PlatformSection from '../components/Home_components/PlatformSection';
import WhyChooseUs from '../components/Home_components/WhyChooseUs';
import Testimonials from '../components/Home_components/Testimonials';
import FaqComponent from '../components/Home_components/FaqComponent';
import Pricing from '../components/Home_components/Pricing';
import CTASection from '../components/Home_components/CTASection';

// NOTE: this file was already correct — no changes needed here.
// Included for completeness alongside the other fixed pages.
const PAGE_URL = '/';
const PAGE_TITLE = 'Find Latest Construction Projects Faster And Win 95% Of Your Bids';
const PAGE_DESCRIPTION =
  'Explore one of the biggest repositories for construction projects in the US and start bidding before others. Get expert insights from Bid Connector experts now!';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${PAGE_URL}og-image.jpg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
      </Helmet>

      <main>
        <HeroSection />
        <Dashboard />
        <StatsSection
  stats={[
    { value: '48,600+', label: 'Open Projects' },
    { value: '7,400+', label: 'Contractor Accounts' },
    { value: '27%', label: 'Avg. Win Rate' },
    { value: '$1.6B', label: 'Project Value Tracked' },
  ]}
/>
        <FeaturesSection />
        <PlatformSection />
        <WhyChooseUs />
        <Testimonials />

        {/* ================= FAQ ================= */}
       <FaqComponent
          title="Common Questions"
          highlight="We've Been Asked"
          description=""
          faqs={[
            {
              question: "How quickly can I start seeing projects?",
              answer: "Most accounts see matched opportunities within minutes of setting trade and location filters. There's no onboarding queue to wait through.",
            },
            {
              question: "Is there a free plan?",
              answer: "Yes. The Starter plan is free and includes a limited number of project views each month, so you can evaluate the platform before subscribing.",
            },
            {
              question: "Does Bid Connectors guarantee I'll win projects?",
              answer: "No. Bid Connectors helps you find and qualify relevant opportunities faster; winning still depends on your pricing, relationships, and proposal quality.",
            },
            {
              question: "Can I cancel anytime?",
              answer: "Yes. Paid plans are month-to-month with no long-term contract, and you can cancel from your account settings at any time.",
            },
          ]}
        />

        <Pricing />

   <CTASection
  titleLine1="Your Next Bid"
  titleHighlight="Is Already Listed!"
  subText="Set your trade and service area, just like 9,000+ bid-winning contractors did, and see which open projects fit your business today."
  primaryBtnText="Browse Open Projects"
  primaryBtnLink="https://bidconnectors.com/bidconnectors/register"
  primaryBtnNewTab={true}
  secondaryBtnText="Talk to Sales"
  secondaryBtnLink="https://bidconnectors.com/bidconnectors/register"
  secondaryBtnNewTab={true}
  noteText="No credit card · Free forever plan · Cancel anytime"
/>
      </main>
    </>
  );
};

export default Home;