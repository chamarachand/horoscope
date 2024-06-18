import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
import CustomerReviews from "./Pages/CustomerReviews";
import AboutUs from "./Pages/AboutUs";
import { AdminDashboard } from "./Pages/Admin";
import { ContactDetails } from "./Pages/ContactDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
  const [showContactDetailsPage, setShowContactDetailsPage] = useState(false);

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
                </>
              }
            />

            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
