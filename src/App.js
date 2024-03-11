import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/layout/Header";
import Routes from "./routes";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes />
        </main>
        
      </Router>
    </>
  );
}

export default App;
