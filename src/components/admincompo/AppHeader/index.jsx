import './AppHeader.css'

import {MailOutlined,BellFilled} from '@ant-design/icons'; 
import {Badge, Image,Space,Typography} from 'antd';

function AppHeader () {
    return<>
        <div className="AppHeader">
            <div className='logo'>
                
                <div className='imagelogo' >
                    <Image width={50} src='https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/302248409_514054867387990_3519155234598731112_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHUDMQVbSB1m_MXIPZFa6GJFMJtyBN4YiUUwm3IE3hiJVXkd9xjVqRMeqTy7GCZraXZObmUMs4-db301zQyLpAg&_nc_ohc=0-Hawfo1OVUAX8NGDvX&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfC9nTCQajGEzH1r12kwa4A0T5kktSl5YnbsLXGRhy3ZWg&oe=6495A980'></Image>
                    
                </div>
                
                <div className='logoname'>
                    <Typography.Title ></Typography.Title>
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