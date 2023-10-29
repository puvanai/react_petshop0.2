import './Typepeoduct.css';
import { Button, Modal, Card, Col, Table, Input } from 'antd';
import { useState } from 'react';

function TypePeoduct() {
  const gridStyle = {
    width: '50%',
    textAlign: 'center',
  };

  const employeeName = "นายสมหวัง เงินสั่งได้";
  const [open, setOpen] = useState(false);
  const [dogNumberInput, setDogNumberInput] = useState("");
  const [catNumberInput, setCatNumberInput] = useState("");
  const [dogItemName, setDogItemName] = useState("ขนมหมา");
  const [catItemName, setCatItemName] = useState("ขนมหมาตรางู");
  const [combinedTableData, setCombinedTableData] = useState([]);
  const columns = [
    {
      title: 'ชื่อสินค้า',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'จำนวณ',
      dataIndex: 'item',
      key: 'item',
    },
  ];
  const calculateRemainingDogFood = () => {
    const totalDogFood = 100; // จำนวนอาหารหมาเริ่มต้น
    const usedDogFood = combinedTableData.reduce((total, item) => {
      if (item.name === dogItemName) {
        return total + item.item;
      }
      return total;
    }, 0);
    return totalDogFood - usedDogFood;
  };

  const calculateRemainingCatFood = () => {
    const totalCatFood = 100; // จำนวนอาหารหมาเริ่มต้น
    const usedCatFood = combinedTableData.reduce((total, item) => {
      if (item.name === catItemName) {
        return total + item.item;
      }
      return total;
    }, 0);
    return totalCatFood - usedCatFood;
  };

  const handleDogConfirm = () => {
    if (dogNumberInput !== "") {
      const newitem = parseFloat(dogNumberInput);
      // คำนวณจำนวนอาหารหมาที่เหลือ
      const remainingDogFood = combinedTableData.reduce((total, item) => {
        if (item.name === dogItemName) {
          return total - item.item;
        }
        return total;
      }, 100); // 100 คือจำนวนอาหารหมาเริ่มต้น
      if (newitem <= remainingDogFood) {
        const newRow = {
          key: (combinedTableData.length + 1).toString(),
          name: dogItemName,
          item: newitem,
        };
        setCombinedTableData([...combinedTableData, newRow]);
      } else {
        // แจ้งเตือนถ้าจำนวนที่นำออกมากกว่าที่มี
        alert("จำนวนที่นำออกมากกว่าจำนวนที่มี");
      }
      setDogNumberInput("");
    }
  };

  const handleCatConfirm = () => {
    if (catNumberInput !== "") {
      const newitem = parseFloat(catNumberInput);
      const newRow = {
        key: (combinedTableData.length + 1).toString(),
        name: catItemName,
        item: newitem,
      };
      setCombinedTableData([...combinedTableData, newRow]);
      setCatNumberInput("");
    }
  };

  return (
    <>
      <div className='Cardname'>
        <Col span={20}>
          <Card title="ชื่อพนักงาน" bordered={false}>
            {employeeName}
          </Card>
        </Col>
      </div>

      <div>
        <Button type="primary" onClick={() => setOpen(true)}>
          รายการนำออก ( {combinedTableData.length})
        </Button>
        <Modal
          title="รายการนำออก"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <Table dataSource={combinedTableData} columns={columns} pagination={{ pageSize: 4 }} />
        </Modal>
      </div>

      <div className='Cardcontent'>
        <Card title="รายการ">
        <Card.Grid style={gridStyle}>
          <div className='DogName'>
            <div>{dogItemName}</div>
            <div>จำนวนอาหารหมาที่เหลือ: {calculateRemainingDogFood()} ชิ้น</div>
          </div>
          <Input
            type="number"
            placeholder="จำนวนที่นำออกไปขาย (ขนมหมา)"
            value={dogNumberInput}
            onChange={(e) => setDogNumberInput(e.target.value)}
          />
          <Button type="primary" onClick={handleDogConfirm}>
            ยืนยัน (ขนมหมา)
          </Button>
        </Card.Grid>

          <Card.Grid style={gridStyle}>
            <div className='CatName'>
            <div >{catItemName}</div>
            <div>จำนวนอาหารหมาที่เหลือ: {calculateRemainingCatFood()} ชิ้น</div>

            </div>
            <Input
              type="number"
              placeholder="จำนวนนำออกไปขาย (ขนมหมาตรางู)"
              value={catNumberInput}
              onChange={(e) => setCatNumberInput(e.target.value)}
            />
            <Button type="primary" onClick={handleCatConfirm}>
              ยืนยัน (ขนมหมาตรางู)
            </Button>
          </Card.Grid>
        </Card>
      </div>
    </>
  );
}

export default TypePeoduct;
