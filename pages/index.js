import { GetStarted, Hero, WhatsNew } from "../sections";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Contact from "./Contact";
// import Image from "next/image";
const Home = () => (
  <>
    
    <div>
      <div className="mx-auto">
        <Hero />
      </div>
      <div className="relative">
        <div className="gradient-03 z-0" />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <div className="gradient-04 z-0" />
      <div className="realtive">{/* <Faqsection /> */}</div>
      <Contact />
    </div>
  </>
);

export default Home;
