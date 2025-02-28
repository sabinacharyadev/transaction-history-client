/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";

const InputField = ({ label, inputFieldAttributes }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="fw-bold">{label}</Form.Label>
      <Form.Control {...inputFieldAttributes} />
    </Form.Group>
  );
};

export default InputField;
