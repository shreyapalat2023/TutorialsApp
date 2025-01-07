

// import React from 'react';

// const HeaderFile = () => {
//     return (
//         <>
//           Header
//         </>
//     );
// };

// export default HeaderFile;

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
  MDBBtn,  
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import ReactInterviewQuestionsCompo from "./InterviewQuestionCompo.jsx"

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>Brand</MDBNavbarBrand>

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
              <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              {/* <MDBNavbarLink href='#'>Link</MDBNavbarLink> */}
              <Link className='nav-link active' to = "/about">About</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <Link className='nav-link active' to = "/contact">Contact us</Link>
              
            </MDBNavbarItem>


            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Example
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Basic Example</MDBDropdownItem>
                  <Link className = "dropdown-item" to = "/example">Tutorial</Link>
                  {/* <MDBDropdownItem link>Advanced</MDBDropdownItem> */}
                  <Link className='dropdown-item' to= "/interviewquestion">Interview Questions</Link>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            {/* <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                  
              </MDBNavbarLink>
            </MDBNavbarItem> */}
          </MDBNavbarNav>

          {/* <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form> */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}


