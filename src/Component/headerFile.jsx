import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import reactlogo from "../reacticon.png";

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' sticky="top">
      <MDBContainer fluid>
        {/* Beautified Brand */}
        <MDBNavbarBrand href='/'>
          <img src={reactlogo} style={{ width: "50px" }} alt="React Logo" />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/' className="nav-link">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to="/about">About</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to="/contact">Contact us</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className='nav-link' role='button'>
                  Example
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Basic Example</MDBDropdownItem>
                  <Link className="dropdown-item" to="/example">Tutorial</Link>
                  <Link className='dropdown-item' to="/interviewquestion">Interview Questions</Link>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
