import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';

import CTASection from "../components/Home_components/CTASection";
import FaqComponent from "../components/Home_components/FaqComponent";

// home.css is required: FaqComponent and CTASection are styled there.
// faq.css goes last so it can override.
import "../assets/css/style.css";
import "../assets/css/home.css";
import "../assets/css/faq.css";

const faqs = [
    {
        question: "What exactly does Bid Connectors do?",
        answer: "Bid Connectors scans public agency sites, private developer filings, and plan rooms for new commercial and public construction opportunities, then matches them to your trade, service area, and typical contract size so you spend less time searching and more time bidding."
    },
    {
        question: "What geographic areas does Bid Connectors cover?",
        answer: "Coverage spans all 50 states, with the deepest daily update volume in major metro construction markets. You can set your service area down to specific counties or a mile radius from your office."
    },
    {
        question: "How does project matching work?",
        answer: "You set your trade, service radius, and preferred project value range once. Bid Connectors scores every new listing against those criteria and only surfaces the ones that clear your match threshold, instead of showing every project in a region."
    },
    {
        question: "Can I set alerts for specific trades or project sizes?",
        answer: "Yes. Saved searches can be as broad as \u201Call commercial projects in Texas\u201D or as specific as \u201Celectrical subcontracts over $2M within 50 miles of Austin,\u201D and you'll get an alert the moment a match is added."
    },
    {
        question: "Can subcontractors use Bid Connectors, or is it built for general contractors only?",
        answer: "Both. Subcontractors can filter for subcontract-specific opportunities and get invited to bid directly by GCs through the trade partner directory, while GCs use the same project data to build their own bid lists."
    },
    {
        question: "Do I need a contract, or is it month-to-month?",
        answer: "Growth plans are billed monthly with no long-term commitment. Enterprise plans are typically annual and negotiated based on team size and usage, discussed directly with our sales team."
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
        },
    })),
};

// No brand in the title — App.js's titleTemplate already appends it.
const PAGE_URL = 'https://www.bidconnectors.com/faq';
const PAGE_TITLE = 'Frequently Asked Questions';
const PAGE_DESCRIPTION = "Get answers to the most commonly asked questions in the construction estimating and bidding industry without paying big bucks!";
// There was no image meta at all, so shared links previewed empty.
const PAGE_IMAGE = 'https://www.bidconnectors.com/og/faq.jpg';

// One destination for support. The banner and the CTA used the same
// label but pointed at two different pages.
const SUPPORT_URL = '/contact-us';

function Faq() {
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
                <meta property="og:image" content={PAGE_IMAGE} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={PAGE_TITLE} />
                <meta name="twitter:description" content={PAGE_DESCRIPTION} />
                <meta name="twitter:image" content={PAGE_IMAGE} />

                {/* Structured data: FAQ rich results */}
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Keep className="faq-page": faq.css is scoped to it, otherwise
                .banner-content picks up the Subcontractors rules. */}
            <main className="faq-page">

                {/* Banner */}
                <section className="faq-banner" aria-label="Page introduction">
                    <div className="container">
                        <div className="banner-content">

                            <span className="faq-eyebrow">Questions &amp; Answers</span>

                            <h1>
                                Straight Answers, <span>Before You Subscribe</span>
                            </h1>

                            <p>
                                Everything contractors and subcontractors ask us about
                                finding, qualifying, and bidding on construction projects is
                                organized below so you can find yours fast. Contact us for a
                                free consultation session.
                            </p>

                            <Link to={SUPPORT_URL} className="banner-btn">
                                Contact Support <i className="bi bi-arrow-right"></i>
                            </Link>

                        </div>
                    </div>
                </section>

                {/* FAQ list */}
                <FaqComponent
                    title="Most Commonly Asked"
                    highlight="Questions"
                    description="Learn what Bid Connectors actually is, and how it fits into the way you already find work."
                    faqs={faqs}
                />

                {/* CTA */}
                <CTASection
                    titleLine1="Still Have a Question"
                    titleHighlight="We Didn't Cover?"
                    subText="Our support team can walk through pricing, coverage, or a specific project before you commit to a plan."
                    primaryBtnText="Contact Support"
                    primaryBtnLink={SUPPORT_URL}
                    secondaryBtnText="See Open Projects"
                    secondaryBtnLink="https://bidconnectors.com/bidconnectors/register"
                    secondaryBtnNewTab={true}
                    noteText="No credit card · Free forever plan · Cancel anytime"
                />
            </main>
        </>
    );
}

export default Faq;