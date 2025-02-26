
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

// Page imports
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Informer from "./pages/Informer";
import Accompagner from "./pages/Accompagner";
import Ressources from "./pages/Ressources";
import Reseau from "./pages/Reseau";
import Valoriser from "./pages/Valoriser";

// Resource page imports
import NosActions from "./pages/ressources/NosActions";
import ActionsPartenaires from "./pages/ressources/ActionsPartenaires";
import Ludopedagogie from "./pages/ressources/Ludopedagogie";
import Labellisation from "./pages/ressources/Labellisation";
import RechercheActions from "./pages/ressources/RechercheActions";
import Concours from "./pages/ressources/Concours";
import Formation from "./pages/ressources/Formation";
import Concretisation from "./pages/ressources/Concretisation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

// Component to handle scroll to top
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Handle button clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement) {
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/informer" element={<Informer />} />
              <Route path="/accompagner" element={<Accompagner />} />
              <Route path="/ressources" element={<Ressources />} />
              <Route path="/reseau" element={<Reseau />} />
              <Route path="/valoriser" element={<Valoriser />} />
              <Route path="/ressources/nos-actions" element={<NosActions />} />
              <Route path="/ressources/actions-partenaires" element={<ActionsPartenaires />} />
              <Route path="/ressources/ludopedagogie" element={<Ludopedagogie />} />
              <Route path="/ressources/labellisation" element={<Labellisation />} />
              <Route path="/ressources/recherche-actions" element={<RechercheActions />} />
              <Route path="/ressources/concours" element={<Concours />} />
              <Route path="/ressources/formation" element={<Formation />} />
              <Route path="/ressources/concretisation" element={<Concretisation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
