import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchForm from "./components/Search Form";
import Thead from "./components/Thead";
import Tbody from "./components/Tbody"


function App() {
  const [employees, setEmployees] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");


  useEffect(() => {
      fetch("https://randomuser.me/api/?results=200&nat=us")
        .then((res) => res.json())
        .then((json) => {
          setEmployees(json.results);
        })
    
  }, []);

  function handleSearchTerm(event)  {
    setSearchTerm(event.target.value)
}
  const filteredEmployees = employees.filter(employee => `${employee.name.first.toLowerCase()}  ${employee.name.last.toLowerCase()}`.includes(searchTerm.toLowerCase()));

  return (
      <div className="container">
        <Header />
        <SearchForm onSearch={handleSearchTerm} searchTerm={searchTerm} />         
          <table className="table">
            <Thead />
            <tbody>
              <Tbody employees={filteredEmployees}/>
            </tbody>
          </table>
        <Footer />
      </div>
   );
  }
  


export default App;
