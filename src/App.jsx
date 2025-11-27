import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

/* -----------------------------
   FIXED — correct Layout path
------------------------------ */
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Reviews from "./pages/Reviews.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import CancelPage from "./pages/CancelPage.jsx";

import { Toaster } from "./components/ui/toaster.jsx";

/* -----------------------------
   Component
------------------------------ */
function App() {
  const location = useLocation();

  // Smooth scroll for #hash navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        const offset = -80;
        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset +
          offset;

        setTimeout(() => {
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/cancel" element={<CancelPage />} />
          </Routes>
        </AnimatePresence>
      </Layout>

      {/* UI Toast notifications */}
      <Toaster />
    </>
  );
}

export default App;
