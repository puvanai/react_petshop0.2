import { Layout, Typography } from "antd"
import React from "react";
import Card from 'react-bootstrap/Card';
import "./dashbords.css"






function DashboardPage () {
    return(<>
        <div>

            
            <Typography.Title level={4}></Typography.Title>
            <div class="container-fluid">
            <div class="row">
            
            <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                
                
                <div class="row my-4">
                    <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div class="card">
                            <h5 class="card-header">ยอดขายทั้งหมด</h5>
                            <div class="card-body">
                              <h5 class="card-title text-success">200,000 บาท</h5>
                              <p class="card-text"></p>
                              
                            </div>
                          </div>
                    </div>
                    <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                        <div class="card">
                            <h5 class="card-header">สินค้าเข้า</h5>
                            <div class="card-body">
                              <h5 class="card-title text-success">0 รายการ</h5>
                              <p class="card-text"></p>
                              
                            </div>
                          </div>
                    </div>
                    <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                        <div class="card">
                            <h5 class="card-header ">สินค้าออก</h5>
                            <div class="card-body">
                              <h5 class="card-title text-danger ">43 รายการ</h5>
                              
                            </div>
                          </div>
                    </div>
                    
                </div>
                <div class="row">
                    <div class="col-12 col-xl-8 mb-4 mb-lg-0">
                        <div class="card">
                            <h5 class="card-header">รายชื่อสินค้าเข้า-ออก</h5>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                          <tr>
                                            <th scope="col">รหัสสินค้า</th>
                                            <th scope="col">ชื่อสินค้า</th>
                                            <th scope="col">ราคา</th>
                                            <th scope="col">วันที่สินค้าเข้า</th>
                                            <th scope="col">วันที่สินค้าออก</th>
                                            <th scope="col"></th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <th scope="row">17371705</th>
                                            <td>อาหารช้าง</td>
                                            <td>2500</td>
                                            <td>Aug 31 2020</td>
                                            <td>Aug 31 2020</td>
                                            <td><a href="#" class="btn btn-sm btn-primary ">รายละเอียด</a></td>
                                          </tr>
                                          
                                        </tbody>
                                      </table>
                                      <table class="table">
                                        <thead>
                                          <tr>
                                            <th scope="col">รหัสสินค้า</th>
                                            <th scope="col">ชื่อสินค้า</th>
                                            <th scope="col">ราคา</th>
                                            <th scope="col">วันที่สินค้าเข้า</th>
                                            <th scope="col">วันที่สินค้าออก</th>
                                            <th scope="col"></th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <th scope="row">17371705</th>
                                            <td>อาหารช้าง</td>
                                            <td>2500</td>
                                            <td>Aug 31 2020</td>
                                            <td>Aug 31 2020</td>
                                            <td><a href="#" class="btn btn-sm btn-primary ">รายละเอียด</a></td>
                                          </tr>
                                          
                                        </tbody>
                                      </table>
                                </div>
                                <a href="#" class="btn btn-block btn-light">View all</a>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                        <div class="card">
                            <h5 class="card-header">สินค้าขายดี</h5>
                            <div class="card-body">
                            <ol class="list-group list-group-numbered">
                              <li class="list-group-item">Smart Heart Gold </li>
                              <li class="list-group-item">อาหารเม็ด สำหรับสุนัขโต สูตรปลา 6 ชนิด</li>
                              <li class="list-group-item">เจอร์ไฮไก่ผักน้ำเกรวี่120g</li>
                            </ol>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4">
                        <div class="card">
                            <h5 class="card-header">ยอดขาย 6 เดือนหลังสุด</h5>
                            <div class="card-body">
                                <div id="traffic-chart"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4">
                        <div class="card">
                            <h5 class="card-header">ยอดขาย 6 เดือนหลังสุด</h5>
                            <div class="card-body">
                                <div id="traffic-chart"></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </main>
        </div>

            </div>

            
            


            
        </div>
        
    </>);

}


export default DashboardPage