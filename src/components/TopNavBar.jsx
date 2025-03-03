/* eslint-disable react/prop-types */
import { Button, Container, Navbar, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";

const TopNavbar = () => {
  const { user } = useSelector((state) => state.user);
  const handleLogoutClick = () => {
    window.location.reload();
  };
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-between">
          <Navbar.Text>Signed In As: {user.name}</Navbar.Text>
          <NavLink onClick={handleLogoutClick} className="text-decoration-none">
            <Button variant="outline-primary">Log out</Button>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
