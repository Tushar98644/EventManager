import React from 'react';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';
import {useState } from 'react';

const Button = styled(motion.button)`
    background-color:blue;
    border: none;
    color: white;
    padding: 15px 42px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0.5vw 9.5vw 2vw;
    border-radius: 7vw;
    cursor: pointer;
`;

const Gallery_form=()=> {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    const AddGallery = async () => {
        const formData = new FormData();
        formData.append('Title', title);
        formData.append('image', image);
        await axios ({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/images',
            data: formData,
        }).then((res) => {
            console.log(res.data);
            alert("Image Added Successfully");
            window.location.reload();
        }).catch((err) => {
            console.log(err);
            alert("Enter the details correctly")
        })
    }



  return (
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center' md='4'>

          <MDBCol md='7'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='4' >

            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' label='Title' id='form1' type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Click to uplaod image' id='form2' type='file' onChange={(e)=>setImage(e.target.files[0])}/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Upload in the highest quality available' />
              </div>

                <Button whileHover={{scale:1.1}} whileTap={{scale:0.8}} onClick={AddGallery}>Upload</Button>
            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default Gallery_form;