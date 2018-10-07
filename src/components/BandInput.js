import React, { Component } from "react";
import { connect } from "react-redux";

class BandInput extends Component {
  state = {
    text: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({ text: "" });
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: text =>
      dispatch({
        type: "ADD_BAND",
        payload: text
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BandInput);
