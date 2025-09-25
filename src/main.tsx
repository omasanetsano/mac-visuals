
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  // Performance monitoring
  if ('performance' in window) {
    // Measure page load time
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData) {
        console.log(`Page loaded in ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
      }
    });
  }

  createRoot(document.getElementById("root")!).render(<App />);
  