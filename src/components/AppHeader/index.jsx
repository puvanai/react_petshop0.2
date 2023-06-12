import './AppHeader.css'

import {MailOutlined,BellFilled} from '@ant-design/icons'; 
import {Badge, Image,Space,Typography} from 'antd';

function AppHeader () {
    return<>
        <div className="AppHeader">
            <div className='logo'>
                
                <div className='imagelogo' >
                    <Image width={40} src='https://upload.wikimedia.org/wikipedia/th/thumb/d/d1/Liverpool_FC_Logo.svg/1200px-Liverpool_FC_Logo.svg.png'></Image>
                    
                </div>
                
                <div className='logoname'>
                    <Typography.Title >Petshop</Typography.Title>
                </div>
                
            </div>

            <Space>
                
                <Badge count={10} dot>
                <MailOutlined style={{fontSize:24}}/>
                </Badge>
                
                <Badge count={20}>
                <BellFilled style={{fontSize:24}} />
                </Badge>
                
            </Space>
        </div>
    </>
}
export default AppHeader;