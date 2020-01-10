import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";

import Nav from "./js/components/nav";
import Main from "./js/main";
import Footer from "./js/components/footer";

function App() {
  return (
    <HashRouter>
      <div className="window">
        <Nav />
        <Main />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
