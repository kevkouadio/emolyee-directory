import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchForm from "./components/Search Form";
import Thead from "./components/Thead";
import Tbody from "./components/Tbody"


function App() {
  const [employees, setEmployees] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ sorted, setSorted] = useState(false);


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

  function handleSortByName() {
    // sort array ascending or descending by first name
    if (!sorted) {
        setEmployees(employees.sort((a, b) => `${a.name.first} ${a.name.last}` > `${b.name.first} ${b.name.last}`? 1 : -1));
        setSorted(true);
    } else {
        setEmployees(employees.sort((a, b) => `${a.name.first} ${a.name.last}` > `${b.name.first} ${b.name.last}` ? -1 : 1));
        setSorted(false);
    }
}

  return (
      <div className="container">
        <Header />
        <SearchForm onSearch={handleSearchTerm} searchTerm={searchTerm} />         
          <table className="table">
            <Thead handleSortByName={handleSortByName}/>
            <tbody>
              <Tbody employees={filteredEmployees}/>
            </tbody>
          </table>
        <Footer />
      </div>
   );
  }
  


export default App;
