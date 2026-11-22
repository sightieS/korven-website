
import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Apps = lazy(() => import("./pages/Apps"));
const Product = lazy(() => import("./pages/Product"));
const About = lazy(() => import("./pages/About"));
const Support = lazy(() => import("./pages/Support"));
const Legal = lazy(() => import("./pages/Legal"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="page-loader"
    >
      <div className="page-loader-spinner" />
      <span>Loading Korven...</span>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Navbar />

      <main id="main-content">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 8 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              shouldReduceMotion
                ? {}
                : { opacity: 0, y: -8 }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
            }}
          >
            <Suspense fallback={<PageLoader />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/apps" element={<Apps />} />
                <Route path="/apps/:slug" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/support" element={<Support />} />

                <Route path="/privacy" element={<Legal />} />
                <Route path="/terms" element={<Legal />} />
                <Route path="/eula" element={<Legal />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
