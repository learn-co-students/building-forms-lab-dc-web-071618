import React, { Component } from "react";
import { connect } from "react-redux";

import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        Bands:
        <ul>{this.props.bands.map(band => <li>{band.name}</li>)}</ul>
        <BandInput addBand={this.props.addBand} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  };
};

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: "ADD_BAND", payload: formData })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer);
