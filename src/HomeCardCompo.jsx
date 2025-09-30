import React from 'react';
import {
  MDBCard, MDBCardImage, MDBCardBody,
  MDBCardTitle, MDBCardText, MDBCardFooter,
  MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import react from "./react.jpg"
import reactOne from "./reactone.jpg";
import javascript from "./javascript.jpg";


const HomeCardCompo = () => {
  return (
    <>
      <h1>Available Courses</h1>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4 mx-3 my-4'>
        <MDBCol>
          <MDBCard className='h-100 card-hover'>
            <MDBCardImage
              src={reactOne}
              alt="React JS"
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>React JS Basics</MDBCardTitle>
              <MDBCardText>
                Learn the fundamentals of React JS, including components, state, and props.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className='text-muted'>Updated 1 hour ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard className='h-100 card-hover'>
            <MDBCardImage
              src={javascript}
              alt="JavaScript"
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>JavaScript Essentials</MDBCardTitle>
              <MDBCardText>
                Master JavaScript fundamentals, ES6 features, and DOM manipulation.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className='text-muted'>Updated 2 hours ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard className='h-100 card-hover'>
            <MDBCardImage
              src={react}
              alt="Frontend Development"
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Frontend Development</MDBCardTitle>
              <MDBCardText>
                Explore HTML, CSS, and React to build responsive UI.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className='text-muted'>Updated 30 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default HomeCardCompo;
