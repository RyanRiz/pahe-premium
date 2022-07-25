import Details from "./components/Details";
import Layout from "./components/Layout";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";
import Stream from "./components/Stream";

function App() {
  return (
      <Layout>
        <Navbar />
        <MovieDetails />
        <Details />
        <Stream />
      </Layout>
  );
}

export default App;
