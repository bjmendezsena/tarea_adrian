import { Component } from "react";
import "./CardInfo.css";

class CardInfo extends Component {
  render() {
    const { data = {}, keyName = "" } = this.props;
    return (
      <div className="box">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {data[keyName]}
        </div>
      </div>
    );
  }
}

export default CardInfo;
