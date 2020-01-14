import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { connect } from 'react-redux';
// import { showModal } from '../../../redux/actions/modals';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ backgroundColor: "pink", width: "100%", position:"fixed", boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.4)" }} color="light" light expand="md">
        <NavbarBrand href="/">rfi by alexandra</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink target="_new" rel="noopener noreferrer" href="https://github.com/abellusc">open source on github</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>rfi version 1.0</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default connect()(Navigation);