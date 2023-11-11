import { GetStarted, Hero, WhatsNew, Faqsection } from "../sections";
import { LazyMotion, domAnimation, m } from "framer-motion";

const Home = () => (
  <LazyMotion features={domAnimation}>
    <m.div
      animate={{ opacity: 1 }}
      className="bg-primary-white overflow-hidden"
    >
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
    </m.div>
  </LazyMotion>
);

export default Home;
