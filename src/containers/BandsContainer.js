import React, { Component } from "react";
import { connect } from "react-redux";

import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput />
        {this.props.bands.map((b, idx) => (
          <li key={idx} text={b.text}>
            {b.text}
          </li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  };
};

export default connect(mapStateToProps)(BandsContainer);
