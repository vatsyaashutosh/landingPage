import React from "react";
import "./App.css";
import Header from "./components/header";
import MainFeature from "./components/mainFeature";
import Pricing from "./components/pricing";

import { LandingPageContainer } from "./style";

function App() {
  return (
    <LandingPageContainer>
      <Header />
      <MainFeature />
      <Pricing />
    </LandingPageContainer>
  );
}

export default App;
