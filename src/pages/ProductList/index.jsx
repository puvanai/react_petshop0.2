import {   Typography } from "antd"
import "./ProductList.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';




const listproduct ="liverpool"
const listimg ="https://upload.wikimedia.org/wikipedia/th/thumb/d/d1/Liverpool_FC_Logo.svg/1200px-Liverpool_FC_Logo.svg.png"

function ProductList () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
        setQuantity(quantity - 1);
    }
  };

    return<>
    
    
        <div>
            <Typography.Title level={4}>รายการสินค้า</Typography.Title>
        </div>
    <div>
        <div>
            <Button variant="primary" onClick={handleShow}>เพิ่มรายการสินค้า</Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>รายการสินค้า</Modal.Title>
                    </Modal.Header>

                <Modal.Body>
                    <div className="information">
                            <from className="" action="" >
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-lable">ชื่อสินค้า</label>
                                    <input type="text" className="form-control" placeholder="เพิ่มชื่อสินค้า" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="price" className="form-lable">ราคา</label>
                                    <input type="number" className="form-control" placeholder="ราคา" />
                                </div>

                                <div className=" mb-3">
                                    <label htmlFor="date of import" className="form-lable">วันที่สินค้าเข้า</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <button className="btn btn-success">เพิ่มรายการสินค้า</button>
                            </from>
                        </div>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    ปิด
                </Button>

                

                </Modal.Footer>
                </Modal>
        </div>
        <br />
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">หมวดหมู่</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">หมา</Nav.Link>
            <Nav.Link href="#features">แมว</Nav.Link>
            <Nav.Link href="#pricing">อุปกรณ์สัตว์เลี้ยง</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">ค้นหา</Button>
          </Form>
        </Container>
      </Navbar>
      <br />
      <hr />
      
        <br />
            <div className="cardgroup-size" >
                <CardGroup className="cardgroup-spacing">
                        <Card className="card-spacing1">
                            <Card.Img variant="top" src="https://www.petnme.co.th//media/catalog/product/a/2/a211200078974-1.jpg" />
                            <Card.Body>
                                <hr />
                            <Card.Title>อาหารแมวเม็ด</Card.Title>  
                            <div className="button-container">
                            <Button variant="light  " onClick={increaseQuantity}>  
                            +
                            </Button>
                             {quantity}
                            <Button variant="light" onClick={decreaseQuantity}>
                            -
                            </Button>
                            </div>
                            </Card.Body>
                            
                        </Card>
                        <Card className="card-spacing1">
                            <Card.Img variant="top" src="https://res-4.cloudinary.com/central-pet-n-me/image/upload/c_lpad,dpr_2.0,f_auto,h_900,q_auto,w_900/v1/media/catalog/product/a/2/a220200081859-1.jpg?_i=AB" />
                            <Card.Body>
                            <hr />
                            <Card.Title>Hercules เฮอร์คิวลิส อาหารเปียก</Card.Title>
                            <div className="button-container">
                            <Button variant="light" onClick={increaseQuantity}>  
                            +
                            </Button>
                             {quantity}
                            <Button variant="light" onClick={decreaseQuantity}>
                            -
                            </Button>
                            </div>
                            </Card.Body>
                        </Card>
                        <Card className="card-spacing2">
                            <Card.Img variant="top" src="https://res-3.cloudinary.com/central-pet-n-me/image/upload/c_lpad,dpr_2.0,f_auto,h_900,q_auto,w_900/v1/media/catalog/product/a/2/a230300143231-1.jpg?_i=AB" />
                            <Card.Body>
                                <hr />
                            <Card.Title>Hercules เฮอร์คิวลิส อาหารเม็ด</Card.Title>
                            <div className="button-container">
                            <Button variant="light" onClick={increaseQuantity}>  
                            +
                            </Button>
                             {quantity}
                            <Button variant="light" onClick={decreaseQuantity}>
                            -
                            </Button>
                            </div>
                            </Card.Body>
                            
                        </Card>
                        <Card className="card-spacing3">
                            <Card.Img variant="top" src="https://res-3.cloudinary.com/central-pet-n-me/image/upload/c_lpad,dpr_2.0,f_auto,h_600,q_auto,w_600/v1/media/catalog/product/1/1/1101010790001-1_1.jpg?_i=AB" />
                            <Card.Body>
                            <hr />
                            <Card.Title>อาหารหมา</Card.Title>
                            <div className="button-container">
                            <Button variant="light" onClick={increaseQuantity}>  
                            +
                            </Button>
                             {quantity}
                            <Button variant="light" onClick={decreaseQuantity}>
                            -
                            </Button>
                            </div>
                            </Card.Body>
                            
                        </Card>
                </CardGroup>
            </div>
                

    </div>
        
        
        
        
    </>

}
export default ProductList