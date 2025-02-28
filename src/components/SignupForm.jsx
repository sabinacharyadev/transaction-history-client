import { Button, Form } from "react-bootstrap";
import InputField from "./InputField";
import { useState } from "react";
import { createUser } from "../axios/userAxios";

const SignupForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const { name, email, password, confirmPassword } = formData;
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Send api request to create a user
    createUser(formData);
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <InputField
        label="Name"
        inputFieldAttributes={{
          type: "text",
          name: "name",
          placeholder: "Enter your full name",
          required: true,
          value: name,
          onChange: handleOnChange,
        }}
      />

      <InputField
        label="Email"
        inputFieldAttributes={{
          type: "email",
          name: "email",
          placeholder: "Enter your email",
          required: true,
          value: email,
          onChange: handleOnChange,
        }}
      />

      <InputField
        label="Password"
        inputFieldAttributes={{
          type: "password",
          name: "password",
          placeholder: "Enter new password",
          required: true,
          value: password,
          onChange: handleOnChange,
        }}
      />

      <InputField
        label="Confirm Password"
        inputFieldAttributes={{
          type: "password",
          name: "confirmPassword",
          placeholder: "Please confirm password",
          required: true,
          value: confirmPassword,
          onChange: handleOnChange,
        }}
      />

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignupForm;
