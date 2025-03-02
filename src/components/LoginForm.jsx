/* eslint-disable react/prop-types */
import { Button, Form } from "react-bootstrap";
import InputField from "./InputField";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUsersAction } from "../redux/user/userActions";

const LoginForm = () => {
  const initialFormData = { email: "", password: "" };
  const [formData, setFormData] = useState(initialFormData);
  const { email, password } = formData;
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Hook from react router to navigate between pages without clicking
  const navigate = useNavigate();
  // call use dispatch hook to get dispatch function
  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUsersAction(email, password));
  };

  // check if current user exists
  // if exists please navigate to transaction page
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (user.id) {
      navigate("/transactions");
    }
  }, [user, navigate]);
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

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
