import { Typography } from "antd"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function About () {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    return<>
        <div>
            <Typography.Title level={4}>ตั้งค่าบัญชี</Typography.Title>
        </div>
        <br />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>ชื่อ</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="username"
            defaultValue="bankpoo"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>รหัสผ่าน</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="password"
            defaultValue="1234656"
          />

        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>รหัสผ่านใหม่</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="password"
              placeholder="รหัสผ่านใหม่"
              aria-describedby="inputGroupPrepend"
              required
            />
            
          </InputGroup>
        </Form.Group>
      </Row>
      
      <Button type="submit">ยืนยัน</Button>
    </Form>
    </>

}
export default About