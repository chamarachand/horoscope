import React from "react";
import NavBar from "./components/NavBar";
import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
import CustomerReviews from "./Pages/CustomerReviews";
import AboutUs from "./Pages/AboutUs";
import { ContactDetails } from "./Pages/ContactDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <div>
        <ContactDetails />
        {/* <HomePage />
        <DetailsPage />
        <CustomerReviews />
        <AboutUs /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
