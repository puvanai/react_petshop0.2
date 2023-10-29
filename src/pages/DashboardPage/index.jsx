import React from "react";
import { PieChart, Pie, Tooltip, Legend,Cell,BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Typography, Table } from "antd";
import './dashbords.css'

function DashboardPage() {
  //ข้อมูลจำนวน
  const data = [
    { name: "อาหารหมาและแมว", value: 300 },
    { name: "อาหารเปียก", value: 500 },
    { name: "อุปกรณ์สัตว์เลี้ยง", value: 800 },
    { name: "ยาบำรุง", value: 400 },
    { name: "อาหารเป็ด", value: 30 },
    { name: "อาหารหมู", value: 50 },
    { name: "อุปกรณ์สัตว์เลี้ยงใหญ", value: 700 },
    { name: "ยาบำรุงะไรก็ได้", value: 100 },
    
  ];

 

  //สินต้าขายดี
  const topSellingProducts = [
    { name: "สินค้า A", value: 500 },
    { name: "สินค้า B", value: 800 },
    { name: "สินค้า C", value: 1200 },
    { name: "สินค้า D", value: 900 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042","#99FFCC","#99FF00","#FFE4B5"];
  
  //ตาราง
  const columns = [
    {
      title: "ชื่อสินค้า",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "จำนวน",
      dataIndex: "value",
      key: "value",
    },
  ];

  const topmonth = [
    { name: "ม.ค.", ยอดขาย: 30000 },
    { name: "ก.พ.", ยอดขาย: 50000 },
    { name: "มี.ค.", ยอดขาย: 80000 },
    { name: "เม.ย.", ยอดขาย: 40000 },
    { name: "พ.ค.", ยอดขาย: 60000 },
    { name: "มิ.ย.", ยอดขาย: 70000 },
  ];

  return (
    <div className="dashboard-container">
      <div className="row">

        <div className="col-md-6">
          <div className="graph-section">
            <Typography.Title level={4}>สินต้าขายดี</Typography.Title>
            <div className="graph-inner">
              <PieChart width={400} height={300}>
                <Pie data={topSellingProducts} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="barchart"> 
            <Typography.Title level={4}>ยอดขายรายเดือน</Typography.Title>
            <BarChart width={600} height={300} data={topmonth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ยอดขาย" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
        

        <div className="col-md-6">
          <div className="table-section">
            <Typography.Title level={4}>ตารางรายการสินค้า</Typography.Title>
            <div className="table-inner">
              <Table dataSource={data} columns={columns} pagination={{ pageSize: 3 }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardPage;