import React, { Component } from "react";
import fire from "./config/fire";
import { MDBContainer, MDBCol } from "mdbreact";
import "./style.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }
  submitHandler = (event) => {
    event.target.className += " was-validated";
  };
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { email, password } = this.state;
    return (
      <MDBContainer id="rty">
        <MDBCol
          md="6 offset-3"
          sm="6 offset-3"
          lg="6 offset-3"
          className="my-5 border shadow"
        >
          <p>REACT AUTHENTICATION</p>
          <hr />
          <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <p className="h5 text-center mb-4">Registration and Loggin` in</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
            </label>
            <input
              value={email}
              name="email"
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
              onChange={this.changeHandler}
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
              value={password}
              name="password"
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
              onChange={this.changeHandler}
            />
            <div className="text-center mt-4">
              <button
                className="btn btn-indigo"
                onClick={this.login}
                type="submit"
              >
                Login
              </button>
              <button
                className="btn btn-blue"
                type="submit"
                onClick={this.signup}
              >
                Register
              </button>
            </div>
          </form>
        </MDBCol>
      </MDBContainer>
    );
  }
}
export default Login;
