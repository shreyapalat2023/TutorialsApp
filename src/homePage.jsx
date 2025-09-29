
import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import workingwomen from "./women-working.png";
import HomeCardCompo from './HomeCardCompo';
import FooterCompo from './FooterCompo';

const HomeCompo = () => {
    return (
        <>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: `url(${workingwomen})`, height: '800px' }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>Learning Courses Online</h1>
                            <h4 className='mb-3'>We are here to help you.</h4>
                            <MDBBtn tag="a" outline size="lg">
                                START A COURSE
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>

            <HomeCardCompo/>
            <FooterCompo/>
        </>
    );
};

export default HomeCompo;