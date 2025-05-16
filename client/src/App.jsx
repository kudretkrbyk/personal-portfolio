import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/protected/protectedRoutes";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
import { ScrollProvider } from "./context/ScrollContext";

import Home from "./Pages/Home";

const App = () => {
  return (
    <Router>
      <ScrollProvider>
        <Navbar />
        <main className="bg-dark">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Login" element={<Login />} />
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
      </ScrollProvider>
    </Router>
  );
};

export default App;
