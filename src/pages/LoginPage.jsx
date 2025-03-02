import { Col, Container, Row, Stack } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center vh-100">
        <Col>
          <Stack className="shadow-lg border rounded p-4">
            <h1>Welcome Back</h1>
            <p>Manage your income and expense</p>
            <p>Track your Finance</p>
          </Stack>
        </Col>

        <Col>
          {/* Login Form */}
          <Stack className="shadow-lg border rounded p-4">
            <h1>Login</h1>
            <LoginForm />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
