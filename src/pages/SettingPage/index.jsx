import { Typography } from "antd"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./setting.css"






function SettingPage () {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    return<>
        <div>
            <Typography.Title level={4}>จัดการพนักงาน</Typography.Title>
            <Table striped bordered hover variant="white">
      <thead>
        <tr>
          <th><td colSpan={2}>ลำดับ</td></th>
          
          <th>รหัสพนักงาน</th>
          <th>ชื่อพนักงาน</th>
          <th>นามสกุล</th>
          <th>username</th>
          <th>password</th>
          <th>แก้ไข</th>
          
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>6204800013</td>
          <td>ภูวไนย</td>
          <td>อมรสิน</td>
          <th>puvanai1150</th>
          <th>1234567890</th>

          <td>
            <Button variant="warning" onClick={handleShow}>
                แก้ไข
            </Button> 

            <Modal show={show} onHide={handleClose} animation={false}>

                <Modal.Header closeButton>
                <Modal.Title>แก้ไข</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ชื่อพนักงาน</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>นามสกุล</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>username</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    
                    <Button variant="success" onClick={handleClose}>
                    บันทึก    
                    </Button>
                    
                </Form>
                </Modal.Body>

                <Modal.Footer>

                <Button variant="danger" onClick={handleClose}>
                 ปิด
                </Button>

                

                </Modal.Footer>

            </Modal>
            </td>

            

        </tr>
        <tr>
          <td>2</td>
          <td>6204800013</td>
          <td>ภูวไนย</td>
          <td>อมรสิน</td>
          <th>puvanai1150</th>
          <th>1234567890</th>
          <td><Button variant="warning">แก้ไข</Button>{' '}</td>

        </tr>
        <tr>
          <td>3</td>
          <td>6204800013</td>
          <td>ภูวไนย</td>
          <td>อมรสิน</td>
          <th>puvanai1150</th>
          <th>1234567890</th>
          <td><Button variant="warning">แก้ไข</Button>{' '}</td>

        </tr>
        <tr>
          <td>4</td>
          <td>6204800014</td>
          <td>ภูวไนย</td>
          <td>อมรสิน</td>
          <th>puvanai1150</th>
          <th>1234567890</th>
          <td><Button variant="warning">แก้ไข</Button>{' '}</td>

        </tr>
        
        <tr>
          <td>5</td>
          <td colSpan={3}>Larry the Bird</td>
          <th>puvanai1150</th>
          <th>1234567890</th>
          <td><Button variant="warning">แก้ไข</Button>{' '}</td>
        </tr>
      </tbody>
    </Table>
        </div>
        

        <div className="fromsize">
        <Form>
          <div className="row">
            <div className="col">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>ชื่อพนักงาน</Form.Label>
                <Form.Control type="text" placeholder="ชื่อพนักงาน" />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicEmail">
                <Form.Label>รหัสผ่าน</Form.Label>
                <Form.Control type="text" placeholder="password" />
              </Form.Group>
              
              
            </div>
            <div className="col">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>นามสกุล</Form.Label>
                <Form.Control type="text" placeholder="นามสกุล" />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>username</Form.Label>
                <Form.Control type="text" placeholder="username" />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>password</Form.Label>
                <Form.Control type="text" placeholder="password" />
              </Form.Group>
            </div>
            
          </div>
            <br />
          <Button variant="primary" type="submit">
            ยืนยัน
          </Button>
      </Form>
        </div>
        
    </>

}
export default SettingPage