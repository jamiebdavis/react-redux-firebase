import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.signIn(this.state));
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { authError } = this.props;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text">Sign in</h5>
          <br />
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name=""
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-1">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const maptStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  maptStateToProps,
  mapDispatchToProps
)(SignIn);
