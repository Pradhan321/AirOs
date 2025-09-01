import React, { Suspense } from "react";
import Home from "./Home";
import Features from "./Features";
import PodcastTalk from "./PodcastTalk";
// import AudienceLayout from "./AudienceLayout";
// import RecentShow from "./RecentShow";

// Lazy-loaded components
const About = React.lazy(() => import("./About"));
const FilmStars = React.lazy(() => import("./FilmStars"));
const FrequentlyAsked = React.lazy(() => import("./FrequentlyAsked"));
const Footer = React.lazy(() => import("./Footer"));
const RecentShow = React.lazy(() => import("./RecentShow"));
const AudienceLayout = React.lazy(() => import("./AudienceLayout"));

// Loading fallback component
const LoadingFallback = () => <div aria-live="polite">Loading...</div>;

const Body = () => {
  return (
    <>
      <main>
        <section id="home" aria-label="Home">
          <Home />
        </section>

        <section id="features" aria-label="Features">
          <Features />
        </section>

        <section id="podcast" aria-label="Podcast Talk">
          <PodcastTalk />
        </section>

        <section id="about" aria-label="About">
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        </section>
        <section id="recentShow" aria-label="RecentShow" >
          <Suspense fallback={<LoadingFallback />}>
            <RecentShow />
          </Suspense>
        </section>
        <section id="audienceTalk" aria-label="AudienceLayout" className="hidden lg:block">
          <Suspense fallback={<LoadingFallback />}>
            <AudienceLayout />
          </Suspense>
        </section>

        <section id="filmstars" aria-label="Film Stars" className="hidden lg:block">
          <Suspense fallback={<LoadingFallback />}>
            {/* <FilmStars /> */}
          </Suspense>
        </section>

        <section id="faq" aria-label="Frequently Asked Questions">
          <Suspense fallback={<LoadingFallback />}>
            <FrequentlyAsked />
          </Suspense>
        </section>
      </main>

      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Body;
