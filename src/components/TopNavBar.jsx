/* eslint-disable react/prop-types */
import { Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

const TopNavbar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-start">
          <Navbar.Text>Signed In As: {user.name}</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
