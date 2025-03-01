/* eslint-disable react/prop-types */
import { Button, Form } from "react-bootstrap";
import InputField from "./InputField";
import { useState } from "react";
import { loginUser } from "../axios/userAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const LoginForm = ({ setUser }) => {
  const initialFormData = { email: "", password: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  const { email, password } = formData;
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Hook from react router to navigate between pages without clicking
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // send api request to try login
    const response = await loginUser(email, password);

    setIsLoading(false);

    if (response.status === "error") {
      return toast.error(response.message);
    }
    toast.success(response.message);
    setUser(response.data);
    // navigate to transaction page
    navigate("/transactions");
  };
  return (
    <Form onSubmit={handleOnSubmit}>
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

      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Logging in . . ." : "Login"}
      </Button>
    </Form>
  );
};

export default LoginForm;
