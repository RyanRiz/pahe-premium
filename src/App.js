import Details from "./components/Details";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Mediainfo from "./components/Mediainfo";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";
import Related from "./components/Related";
import Stream from "./components/Stream";
import Title from "./components/Title";

function App() {
  return (
      <Layout>
        <Header />
        <Navbar />
        <div className="m-5 pt-5 shadow-2xl border border-[#2b2b2b]">
          <Title />
          <MovieDetails />
          <Mediainfo />
          <Details />
          <Stream />
          <Related />
        </div>
      </Layout>
  );
}

export default App;
