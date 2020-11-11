import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchForm from "./components/Search Form";
import Thead from "./components/Thead";
import Tbody from "./components/Tbody"
// import API from "./utils/API"

function App() {

  const [employees, setEmployees] = useState([]);


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
      fetch("https://randomuser.me/api/?results=200&nat=us")
        .then((res) => res.json())
        .then((json) => {
          setEmployees(json.results);
        })
    
  }, []);

  return (
      <div className="container">
        <Header />
        <SearchForm />
          <table className="table">
            <Thead />
            <tbody>
              <Tbody employees={employees}/>
            </tbody>
          </table>
        <Footer />
      </div>
   );
  }
  


export default App;
