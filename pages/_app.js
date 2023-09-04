import Head from "next/head";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>ThinkIndia</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
