import { Component } from "react";
import Card from "./components/card/Card";
import "./App.css";

import NavBar from "./components/navBar/NavBar";
import CardInfo from "./components/cardInfo/CadrInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataSelected: {},
      navSelected: null,
    };
  }

  handleClick = (data) => {
    this.setState({
      dataSelected: data,
    });
  };

  getKeyName = () => {
    const { navSelected } = this.state;

    switch (navSelected) {
      case "posts":
        return "title";
      case "comments":
        return "name";
      case "users":
        return "username";
      case "albums":
        return "title";
      case "photos":
        return "title";
      case "todos":
        return "title";
      default:
        return "";
    }
  };

  render() {
    const { dataSelected, data } = this.state;

    return (
      <div
        className="App"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <NavBar
          dataFetched={({ data, navSelected }) => {
            this.setState({ data, navSelected });
          }}
        />
        <CardInfo data={dataSelected} keyName={this.getKeyName()} />
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            height: "70vh",
            position: "relative",
          }}
        >
          {data.map((item) => (
            <Card
              key={item.id}
              item={item}
              keyName={this.getKeyName()}
              onClick={() => this.handleClick(item)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
