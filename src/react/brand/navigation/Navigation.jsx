import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { connect } from 'react-redux';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ backgroundColor: "pink", width: "100%", position:"fixed", boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.4)" }} color="light" light expand="md">
        <NavbarBrand href="/">roll for initiative</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink target="_new" rel="noopener noreferrer" href="https://github.com/abellusc">open source on github</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">host a session</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>simple virtual tabletop v1.0.0</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default connect()(Navigation);