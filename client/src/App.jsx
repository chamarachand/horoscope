import React from "react";

import NavBar from "./components/NavBar";
import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
import CustomerReviews from "./Pages/CustomerReviews";
import AboutUs from "./Pages/AboutUs";
function App() {
  return (
    <div>
     
      <HomePage />
      <DetailsPage />
      <CustomerReviews />
      <AboutUs />
    </div>
  );
}

export default App;
