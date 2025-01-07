
import React, { useState } from 'react';
const ControlledComponentInReact = () => {
    const [formData,setFormData] =useState({})
    const inpChangeEvent = (event)=>{ setFormData({...formData,[event.target.name]:event.target.value}) }
    return (
        <>
        <h4>Multiple Data Handling</h4>
        <label htmlFor='fname'>FirstName:</label>
          <input type="text" onChange={inpChangeEvent} name="firstname" id="fname" className=' my-2' />  <br /> 
        <label htmlFor='lname'>LastName:</label>

          <input type="text" onChange={inpChangeEvent} name="lastname" id="lname"  className='my-2'/>  <br />
        <label htmlFor='fname'>Email:</label>

          <input type="email" onChange={inpChangeEvent} name="email" id="email"  className='my-2'/>  <br /> 
        <label htmlFor='fname'>Mobile No.:</label>

          <input type="tel" onChange={inpChangeEvent} name="mobile" id="mobile" className='my-2' /><br /> 
          <p>{JSON.stringify(formData)}</p>
        </>
    );
};

export default ControlledComponentInReact;