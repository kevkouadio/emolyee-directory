import React from "react";
//import "./style.css";
// import API from "../utils/API"
// import axios from "axios";
// const BASEURL = "https://randomuser.me/api/?results=200&nat=us";



function directory({handleSortByName}) {
  return (
        <thead>
            <tr align="center">
                <th scope="col">Picture</th>
                <th scope="col">Name <i onClick={handleSortByName} className="fa fa-caret-square-o-down" aria-hidden="true"></i></th>
                <th scope="col">Employee ID</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
            </tr>
        </thead>
  );
  
}

export default directory;
