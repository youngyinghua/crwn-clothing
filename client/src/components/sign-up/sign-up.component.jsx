import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.action";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [signUpInfo, setSignUpInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { email, password, confirm_password, displayName } = signUpInfo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm_password) {
      alert("passwords do not match");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          handleChange={handleChange}
          value={displayName}
          label="Display Name"
          required
        />
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="Password"
          required
        />
        <FormInput
          name="confirm_password"
          type="password"
          handleChange={handleChange}
          value={confirm_password}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatch)(SignUp);
