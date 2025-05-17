import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/protected/protectedRoutes";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Portfolyo from "./Pages/Portfolio";

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="bg-dark">
        <Routes>
          <Route path="/anasayfa" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/portfolyo" element={<Portfolyo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/*" element={<NotFound />} />
          {/* Korumalı rota */}
          <Route
            path="/Admin"
            element={
              <ProtectedRoute redirectTo="/Login">
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
