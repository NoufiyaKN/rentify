import React, { useEffect, useState } from 'react'
import { Button, Card, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import { getUserPropertyAPI, uploadProjectAPI } from '../services/allAPI';

function SellerUser() {

  const [allProperties,setAllProperties] = useState([])
  const [uploadProperty,setUploadProperty]=useState({
    imageURL:"",place:"",area:"",bedrooms:"",bathrooms:""
  })
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(uploadProperty);
  console.log(allProperties);

  useEffect(()=>{
    getAllProperties()
  },[allProperties])

  const getAllProperties = async ()=>{
    try{
      const result = await getUserPropertyAPI()
      console.log(result);
      if(result.status==200){
        setAllProperties(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  const AddProperty = async (e) => {
    e.preventDefault();
    if (uploadProperty.imageURL && uploadProperty.place && uploadProperty.area && uploadProperty.bedrooms && uploadProperty.bathrooms) {
      try {
        const result = await uploadProjectAPI(uploadProperty);
        console.log(result);
        if (result.status === 200) {
          alert(`Property added successfully`);
          setUploadProperty({imageURL:"",place:"",area:"",bedrooms:"",bathrooms:"" });
        } else {
          alert(result.response.data);
          setTimeout(() => {
            setUploadProperty({ imageURL:"",place:"",area:"",bedrooms:"",bathrooms:""});
          }, 2000);
        }
      } catch (err) {
        console.error(err);
        alert("Upload failed");
      }
    } else {
      alert("Please fill the form completely!!!");
    }
  };
  
  return (
    <>
<div className='d-flex justify-content-between container mt-5 text-primary'>
    <h1 >Property details</h1>
    <div className='me-3 d-flex justify-content-between'>
        <h5>Upload a video</h5>
        <button style={{height: '30px',width: '30px'}} className='btn bg-primary rounded-circle d-flex justify-content-center' onClick={handleShow}>  <i className="fa-solid fa-plus"></i></button>
    </div>
</div>

<Row className='mt-3'>
  {
    allProperties?.length>0?
    allProperties?.map(property=>(
      <Col className=''>
        <Card className='mt-5' style={{ width: '18rem',height: '350px' }}>
          <Card.Img variant="top" src={property?.imageURL} />
          <Card.Body>
            <Card.Title>Area : {property?.area}</Card.Title>
            <Card.Text>
            Place : {property?.place}
            </Card.Text>
            <Card.Text>
            Number of Bedrooms : {property?.bedrooms}
            </Card.Text>
            <Card.Text>
            Number of Bathrooms : {property?.bathrooms}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))
  :
    <div className='fw-bolder text-danger m-5 text-center'>Project Not Found!!!</div>
  }
</Row>

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Property Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='border rounded border-secondary p-3'>
            <p>please fill the following details</p>
        <FloatingLabel
       controlId="floatingInput"
       label="image url"
       className="mb-3"
     > <Form.Control type="text" placeholder="image url" value={uploadProperty.imageURL} onChange={e=>setUploadProperty({...uploadProperty,imageURL:e.target.value})}/>
     </FloatingLabel>

        <FloatingLabel
       
        controlId="floatingInput"
        label="Place"
        className="mb-3"
      > <Form.Control type="text" placeholder="Place" value={uploadProperty.place} onChange={e=>setUploadProperty({...uploadProperty,place:e.target.value})}/>
      </FloatingLabel>

     <FloatingLabel
       
       controlId="floatingInput"
       label="Area"
       className="mb-3"
     > <Form.Control type="text" placeholder="Area" value={uploadProperty.area} onChange={e=>setUploadProperty({...uploadProperty,area:e.target.value})}/>
     </FloatingLabel>

     <FloatingLabel
       
       controlId="floatingInput"
       label="No. of Bedrooms"
       className="mb-3"
     > <Form.Control type="text" placeholder="No. of Bedrooms" value={uploadProperty.bedrooms} onChange={e=>setUploadProperty({...uploadProperty,bedrooms:e.target.value})}/>
     </FloatingLabel>

     <FloatingLabel
       
       controlId="floatingInput"
       label="No. of Bathrooms"
       className="mb-3"
     > <Form.Control type="text" placeholder="No. of Bathrooms" value={uploadProperty.bathrooms} onChange={e=>setUploadProperty({...uploadProperty,bathrooms:e.target.value})}/>
     </FloatingLabel>
      </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
   cancel
          </Button>
          <Button onClick={AddProperty} variant="info">Upload</Button>
        </Modal.Footer>
      </Modal>
</>
  )
}

export default SellerUser