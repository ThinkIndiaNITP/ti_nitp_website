import { GetStarted, Hero, WhatsNew } from "../sections";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Contact from "./Contact";
// import Image from "next/image";
const Home = () => (
  <>
    {/* <div className="area bg-fixed">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div> */}
    <div
    // style={{
    //   width: "100%",
    //   height: "100%",
    //   // backgroundImage: 'url("./bg.png")',
    //   backgroundSize: "cover",
    //   // opacity: 0.4,
    //   zIndex: 10,
    //   backgroundPosition: "center",
    // }}
    >
      {/* <Image src="/bg.png" alt="Background Image" width={1000} height={1000} /> */}
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
