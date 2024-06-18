import React, { createContext } from "react";
import { useState, useContext } from "react";
import NavBar from "./components/NavBar";
import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
import CustomerReviews from "./Pages/CustomerReviews";
import AboutUs from "./Pages/AboutUs";
import { ContactDetails } from "./Pages/ContactDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
  const [showContactDetailsPage, setShowContactDetailsPage] = useState(false);

  return (
<<<<<<< HEAD
    <QueryClientProvider client={client}>
      <div>
        <Footer/>
       
      </div>
    </QueryClientProvider>
=======
    <AppContext.Provider value={{ setShowContactDetailsPage }}>
      <QueryClientProvider client={client}>
        <div>
          <HomePage />
          {showContactDetailsPage ? <ContactDetails /> : <DetailsPage />}
          <CustomerReviews />
          <AboutUs />
        </div>
      </QueryClientProvider>
    </AppContext.Provider>
>>>>>>> 437a957850b5d48114e4f3284139abe7ebdbad49
  );
}

export default App;
