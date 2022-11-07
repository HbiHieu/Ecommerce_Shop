import React from "react";

import "./SignIn.styles.scss";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";
import { signInWithGoogle } from '../../firebase/firebase.util'

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      passWord: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      passWord: "",
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="passWord"
            value={this.state.passWord}
            onChange={this.handleChange}
            label="PassWord"
            required
          />
          <div className="button--wrapper">
          <Button type={'submit'}>Sign In</Button>
          <Button 
          isGoogleButton={true}
          onClick={signInWithGoogle}>Sign in with Google</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
