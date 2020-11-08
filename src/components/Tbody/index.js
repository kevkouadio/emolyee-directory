import React from "react";


class Tbody extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        results: []
      };
    }
  
    componentDidMount() {
      fetch("https://randomuser.me/api/?results=200&nat=us")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              results: result.results
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, results } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <tbody>
            {results.map(result => (
                <tr>
                <td><img src={result.picture.medium}></img></td>
                <td>{result.name.first} {result.name.last}</td>
                <td>{result.id.value}</td>
                <td>{result.email}</td>
                <td>{result.cell}</td>
                </tr>
            ))}
        </tbody>
        );
      }
    }
  }



export default Tbody; 