import "./App.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer, Drawer, Backdrop } from "./components";

import backgroundImage from "./assets/images/background.jpg"; // Import Home page background image here

// We need a new component so we can use the useLocation hook
const AppContent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isDrawerOpen]);

  const location = useLocation();

  // Check if the current path is the homepage
  const isHomePage = location.pathname === "/";

  const appStyle = isHomePage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  const backgroundClasses = isHomePage ? "fullscreen-background" : "";

  return (
    // This div now controls the background for the whole app
    <div style={appStyle} className={`min-h-screen ${backgroundClasses}`}>
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Header setIsDrawerOpen={setIsDrawerOpen} />
      <Backdrop isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <main>
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <div>
      <AppContent />
    </div>
  );
}

export default App;
