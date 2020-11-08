import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchForm from "./components/Search Form";
import Thead from "./components/Thead";
import Tbody from "./components/Tbody"
// import API from "./utils/API"

function App() {
  return (
      <div className="container">
        <Header />
        <SearchForm />
        <table className="table">
        <Thead />
        <Tbody />
        </table>
        <Footer />
      </div>
  );
}

export default App;
