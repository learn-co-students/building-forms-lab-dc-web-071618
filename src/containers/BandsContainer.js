import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  render() {
    console.log(this.props.bands);
    return (
      <div>
        {this.props.bands.map((band, index) => (
          <li key={index} text={band.name}>
            {band.name}
          </li>
        ))}
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
  addBand: formData =>
    dispatch({
      type: "ADD_BAND",
      payload: formData
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer);
