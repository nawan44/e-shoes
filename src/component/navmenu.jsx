import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, NavbarText
} from 'reactstrap';
import './css/navmenu.css';

const Navmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navmen" >
      <Navbar  color="light" light expand="md">
        <NavbarBrand href="/" className="logo">Egasqua</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Gas 3kg</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Cara Pemesanan</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Aqua
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Aqua Galon
                </DropdownItem>
                <DropdownItem>
                  Aqua Botol
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
           
            <NavItem>
              <NavLink href="#">Area</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Contact</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navmenu;
