import {   Card,Typography, Table} from "antd"
import "./ProductList.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const tabList = [
    {
      key: 'tab1',
      tab: 'tab1',
    },
    {
      key: 'tab2',
      tab: 'tab2',
    },
  ];

 

  const tabListNoTitle = [
    {
      key: 'dogfood',
      label: 'อาหารหมา',
    },
    {
      key: 'catfood',
      label: 'อาหารแมว',
    },
    {
      key: 'pettoy',
      label: 'อุปกรณ์',
    },
  ];
  const contentListNoTitle = {
    dogfood: <p>article content</p>,
    catfood: <p>app content</p>,
    pettoy: <p>project content</p>,
  };

  const catfoodData = [
    {
      key: "1",
      name: "อาหารแมวแบรนด์ A",
      items: 154,
    },
    {
      key: "2",
      name: "อาหารแมวแบรนด์ B",
      items: 320,
    },
    // เพิ่มรายการอื่น ๆ ตามความต้องการ
  ];
  

  const dogfoodData = [
    {
      key: "1",
      name: "อาหารหมาตรางู",
      items: 254,
    },
    {
      key: "2",
      name: "อาหารหมาตรานกแก้ว",
      items: 500,
    },
    {
      key: "3",
      name: "อาหารหมาตราอีเกิ้ง",
      items: 254,
    },
    {
      key: "4",
      name: "เพ็ดดีกี",
      items: 500,
    },
    {
      key: "5",
      name: "อาหารหมาตรางูสิง",
      items: 254,
    },
    {
      key: "6",
      name: "ของเลนแมวตราลิง",
      items: 500,
    },
    
  ];


function ProductList () {

  const [activeTabKey2, setActiveTabKey2] = useState('app');
  
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    
      <hr />
        <br />

        <div className="cardgroup-size" >
            <Card
                    style={{
                        width: '1000px',
                    }}
                    tabList={tabListNoTitle}
                    activeTabKey={activeTabKey2}
                    tabBarExtraContent={<a href="#">More</a>}
                    onTabChange={onTab2Change}
                    tabProps={{
                        size: 'middle',
                    }}
                    >

                    {contentListNoTitle[activeTabKey2] === contentListNoTitle.dogfood ? (
                        <Table
                        dataSource={dogfoodData}
                        columns={[
                            {
                            title: 'ชื่อรายการ',
                            dataIndex: 'name',
                            key: 'name',
                            },
                            {
                            title: 'จำนวณทั้งหมด',
                            dataIndex: 'items',
                            key: 'items',
                            },
                        ]}
                        pagination={{ pageSize: 5 }} 
                        />
                    ) : null}

                    {contentListNoTitle[activeTabKey2] === contentListNoTitle.catfood ? (
                        <Table
                        dataSource={catfoodData}
                        columns={[
                            {
                            title: 'ชื่อรายการ',
                            dataIndex: 'name',
                            key: 'name',
                            },
                            {
                            title: 'จำนวณทั้งหมด',
                            dataIndex: 'items',
                            key: 'items',
                            },
                        ]}
                        pagination={{ pageSize: 5 }} 
                        />
                    ) : null}
            </Card>
        </div>
    </div>
        
        
        
        
    </>

}
export default ProductList