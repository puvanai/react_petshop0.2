import { Menu } from "antd";
import {AppstoreOutlined,QuestionCircleOutlined,SettingOutlined,FileOutlined,PoweroffOutlined,PlusCircleOutlined} from '@ant-design/icons'; 
import { useNavigate } from "react-router-dom";
import './frontsidemenu.css'


function frontsidemenu () {
    const navigate = useNavigate()
    return<>
        <div className="SideMenu">
            <div className="SidemenuVertical">
                <div className="menuHeader">
                    <h3>ประเภทสินค้า</h3>
                </div>
                
                <Menu className="classmenu"
                    onClick={({key})=>{
                        if(key === "signout"){
                            //Todo, sign out feature here
                        }else{
                            navigate(key);
                        }
                    }}
                    items={[
                    
                    
                    {
                        label:"อาหารหมา",
                        icon:<FileOutlined />,
                        key:'/TypeProduct'
                    },
                    {
                        label:"อาหารแมว",
                        icon:<FileOutlined />,
                        key:'/TypeProduct2'
                    },
                    {
                        label:"อาหารเมน",
                        icon:<FileOutlined />,
                        key:'/TypeProduct3'
                    },
                    {
                        label:"อุปกรณ์",
                        icon:<FileOutlined />,
                        key:'/TypeProduct4'
                    },
                    {
                        label:"อาหารปลา",
                        icon:<FileOutlined />,
                        key:'/TypeProduct5'
                    },
                    
                    
                    {
                        label:"ออกจากระบบ",
                        icon:<PoweroffOutlined />,
                        key:'signout',
                        danger:true
                    },
                    ]}>
                        
                </Menu>
            </div>
        
        </div>
                    
    </>
}
export default frontsidemenu;