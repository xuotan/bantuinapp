import { Navbar } from "flowbite-react";

const NavbarComponent = () => {
  return (
    <Navbar className="p-6 bg-slate-400 sticky top-0" fluid rounded>
      <Navbar.Brand>Navbar</Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
