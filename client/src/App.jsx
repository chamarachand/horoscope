import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
import CustomerReviews from "./Pages/CustomerReviews";
import AboutUs from "./Pages/AboutUs";
import { AdminLogin } from "./Pages/AdminLogin";
import { AdminDashboard } from "./Pages/AdminDashboard";
import { HosroscopeSubmissions } from "./Pages/HoroscopeSubmissions";
import { ReviewSubmissions } from "./Pages/ReviewSubmissions";
import { ContactDetails } from "./Pages/ContactDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
  const [showContactDetailsPage, setShowContactDetailsPage] = useState(false);
  const token = localStorage.getItem("token");

  return (
    <AppContext.Provider value={{ setShowContactDetailsPage }}>
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                  {showContactDetailsPage ? (
                    <ContactDetails />
                  ) : (
                    <DetailsPage />
                  )}
                  <CustomerReviews />
                  <AboutUs />
                  {/* <Footer /> */}
                </>
              }
            />

            <Route
              path="/admin"
              element={token ? <AdminDashboard /> : <AdminLogin />}
            />
            <Route
              path="/admin/horoscopes"
              element={token ? <HosroscopeSubmissions /> : <AdminLogin />}
            />
            <Route
              path="/admin/reviews"
              element={token ? <ReviewSubmissions /> : <AdminLogin />}
            />
          </Routes>
        </Router>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
