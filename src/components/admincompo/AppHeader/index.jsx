import './AppHeader.css';
import { BellFilled } from '@ant-design/icons';
import { Badge, Image, Space, Typography, Popover } from 'antd';

function AppHeader() {
  // สร้างข้อมูลรายการข้อความ
  const messageData = [
    'รายการ 1',
    'รายการ 2',
    'รายการ 3',
    // เพิ่มข้อมูลเพิ่มเติมตามความต้องการ
  ];

  // สร้าง Popup สำหรับรายการข้อความ
  const messagePopup = (
    <div>
      {messageData.map((message, index) => (
        <div key={index} className="message-item">
          {message}
        </div>
      ))}
    </div>
  );

  return (
    <div className="AppHeader">
      <div className='logo'>
        <div className='imagelogo' >
          <Image width={50} src='https://s3-eu-west-1.amazonaws.com/tpd/logos/5be01d787b5e5b0001ebb6bb/0x0.png'></Image>
        </div>
        <div className='logoname'>
          <Typography.Title></Typography.Title>
        </div>
      </div>

      <Space>
        <Popover content={messagePopup} title="ข้อความ" trigger="click">
          <Badge count={messageData.length}>
            <BellFilled style={{ fontSize: 24 }} />
          </Badge>
        </Popover>
      </Space>
    </div>
  );
}

export default AppHeader;
