import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { ScrollProvider } from "./context/ScrollContext";

import Home from "./Pages/Home";

const App = () => {
  return (
    <ScrollProvider>
      <Navbar />
      <main className="bg-dark">
        <Home />
      </main>
      <Footer />
    </ScrollProvider>
  );
};

export default App;
