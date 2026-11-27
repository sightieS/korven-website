import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";

const Home = lazy(() => import("./pages/Home"));
const Apps = lazy(() => import("./pages/Apps"));
const Product = lazy(() => import("./pages/Product"));
const About = lazy(() => import("./pages/About"));
const Support = lazy(() => import("./pages/Support"));
const Legal = lazy(() => import("./pages/Legal"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div role="status" aria-label="Loading page" className="page-loader">
      <div className="page-loader-spinner" />
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const reduce = useReducedMotion();

  return (
    <>
      <ScrollManager />
      <Navbar />

      <motion.main
        id="main-content"
        key={location.pathname}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
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
      </motion.main>

      <Footer />
    </>
  );
}
