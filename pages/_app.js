import "../styles/globals.css";
import Layout from "../components/Layout";
const App = ({ Component, pageProps }) => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
};
export default App;
