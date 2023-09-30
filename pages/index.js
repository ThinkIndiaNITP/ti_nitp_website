import { GetStarted, Hero, WhatsNew, Faqsection } from "../sections";

const Home = () => (
  <div className="bg-primary-white overflow-hidden">
    <Hero />
    <div className="relative">
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div className="gradient-04 z-0" />
    <div className="realtive">
      <Faqsection />
    </div>
  </div>
);

export default Home;
