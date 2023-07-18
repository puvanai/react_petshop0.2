import './Typepeoduct.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import Table from 'react-bootstrap/Table';





function TypePeoduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <>
  <div className='textname'>
    <Card body>ชื่อพนักงาน นายสมหวัง เงินสั่งได้</Card>
  </div>

  <div className='navbarcon'>
    <div className='navbar1'>
          <Navbar expand="lg" className="">
            <Container fluid>
              <Navbar.Brand href="#">อาหารแมว</Navbar.Brand>
              
            </Container>
          </Navbar>
    </div>

    
      
      <div className='formsearch'>
               <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
      </div>
            
  </div>
  <div className='modals'>
    <Button variant="success" onClick={handleShow}>
        บันทึก
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ยืนยันการบันทึก</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th></th>
          <th>รหัสสินค้า</th>
          <th>ชื่อสินค้า</th>
          <th>จำนวน</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>6204800013</td>
          <td>Hajiko</td>
          <td>3</td>
        </tr>
        <tr>
          <td>2</td>
          <td>4582245952</td>
          <td>Thornton</td>
          <td>4</td>
        </tr>
        <tr>
          <td>2</td>
          <td>8882245952</td>
          <td>suck</td>
          <td>7</td>
        </tr>
        
      </tbody>
    </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ปิด
          </Button>
          <Button variant="primary" onClick={handleClose}>
            ยืนยัน
          </Button>
        </Modal.Footer>
      </Modal>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      
    </div>
    </div>

  <div className='content'>
  <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://res-4.cloudinary.com/central-pet-n-me/image/upload/c_lpad,dpr_2.0,f_auto,h_900,q_auto,w_900/v1/media/catalog/product/a/2/a221100137221-1.jpg?_i=AB" />
        <Card.Body>
          <Card.Title>Hajiko </Card.Title>
          <Card.Text>
          อาหารเม็ดสำหรับลูกสุนัข รสเนื้อวัวและนม 1.2 kg
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <div className='footer'>
          <div>จำนวน</div>
          <div className='quantity'>
            1500
          </div>
          <div>ชิ้น</div>
          </div>        </Card.Footer>
          <Form.Group className="mb-3" controlId="formBasic">
        
        <Form.Control type="text" placeholder="กรอกจำนวนที่นำออก" />
        
      </Form.Group>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://res-2.cloudinary.com/central-pet-n-me/image/upload/c_lpad,dpr_2.0,f_auto,h_900,q_auto,w_900/v1/media/catalog/product/A/2/A211200073977-4.jpg?_i=AB" />
        <Card.Body>
          <Card.Title>Greattitan</Card.Title>
          <Card.Text>
          เกรทไททัน อาหารเม็ด สำหรับสุนัขโตสายพันธุ์เล็ก รสไก่และข้าว
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <div className='footer'>
          <div>จำนวน</div>
          <div className='quantity'>
            13550
          </div>
          <div>ชิ้น</div>
          </div>        </Card.Footer>
          <Form.Group className="mb-3" controlId="formBasic">
        
        <Form.Control type="text" placeholder="กรอกจำนวนที่นำออก" />
        
      </Form.Group>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://res-3.cloudinary.com/central-pet-n-me/image/upload/c_lpad,dpr_2.0,f_auto,h_900,q_auto,w_900/v1/media/catalog/product/4/3/4307000670001-1.jpg?_i=AB" />
        <Card.Body>
          <Card.Title>Mascota</Card.Title>
          <Card.Text>
          มาสโคต้า อาหารเม็ด สำหรับเม่น 600 g.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <div className='footer'>
          <div>จำนวน</div>
          <div className='quantity'>
            450
          </div>
          <div>ชิ้น</div>
          </div>
        </Card.Footer>
        
      <Form.Group className="mb-3" controlId="formBasic">
        
        <Form.Control type="text" placeholder="กรอกจำนวนที่นำออก" />
        
      </Form.Group>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://res-2.cloudinary.com/central-pet-n-me/image/upload/c_lpad,dpr_2.0,f_auto,h_900,q_auto,w_900/v1/media/catalog/product/4/1/4110030240001-1_1.jpg?_i=AB" />
        <Card.Body>
          <Card.Title>Greattitan</Card.Title>
          <Card.Text>
          เกรทไททัน อาหารเม็ด สำหรับสุนัขโตสายพันธุ์เล็ก รสไก่และข้า
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className='footer'>
          <div>จำนวน</div>
          <div className='quantity'>
            150
          </div>
          <div>ชิ้น</div>
          </div>
        </Card.Footer>
        <Form.Group className="mb-3" controlId="formBasic">
        
        <Form.Control type="text" placeholder="กรอกจำนวนที่นำออก" />
        
      </Form.Group>
      </Card>
    </CardGroup>
  </div>
  </>
  
}



export default TypePeoduct;