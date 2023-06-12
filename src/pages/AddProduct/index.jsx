import { Card, Typography } from "antd"
//Bootsrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'
import "./AddProduct.css"

import { useState } from "react";

function AddProduct () {

    const [employeesList,setEmployeesList]=useState([]);

    const getEmployees =() =>{
        Axios.get('http://localhost:3001/addproductlist').then((response) => {
            setEmployeesList(response.data);
        });
    }
    return<>
        <div>
            <Typography.Title level={4}>เพิ่มรายการสินค้า</Typography.Title>
        </div>
        <div className="Appcontainer" >
            
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
            <hr />
            <div className="employees">
                <button className="btn btn-primary" onClick={getEmployees}>แสดงข้อมูล</button>

                {employeesList.map((val, key) => {
                    return (
                        <div className="employees card">
                            <div className="crad-body" text-left>
                                <p className="crad-text">Name: {val.fristname}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>

}
export default AddProduct