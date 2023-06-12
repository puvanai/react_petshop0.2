import { Menu } from "antd";
import {AppstoreOutlined,QuestionCircleOutlined,SettingOutlined,FileOutlined,PoweroffOutlined,PlusCircleOutlined} from '@ant-design/icons'; 
import { useNavigate } from "react-router-dom";
import "./sidemenu.css"

function SideMenu () {
    const navigate = useNavigate()
    return<>
        <div className="SideMenu">
            <div className="SidemenuVertical">
                <Menu className="classmenu"
                    onClick={({key})=>{
                        if(key === "signout"){
                            //Todo, sign out feature here
                        }else{
                            navigate(key);
                        }
                    }}
                    items={[{
                        label:"หน้าแรก",
                        icon:<AppstoreOutlined/>,
                        key:'/'
                    },
                    
                    
                    {
                        label:"รายการสินค้า",
                        icon:<FileOutlined />,
                        key:'/Productlist'
                    },
                    {
                        label:"เพิ่มรายการสินค้า",
                        icon:<PlusCircleOutlined/>,
                        key:'/AddProduct'
                    },
                    {
                        label:"เกียวกับ",
                        icon:<QuestionCircleOutlined />,
                        key:'/about'
                    },
                    {
                        label:"ตั้งค่า",
                        icon:<SettingOutlined />,
                        key:'/settingpage'
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
export default SideMenu;