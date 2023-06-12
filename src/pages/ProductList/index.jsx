import { Card, List, Typography,Image } from "antd"
import "./ProductList.css"

const listproduct ="liverpool"
const listimg ="https://upload.wikimedia.org/wikipedia/th/thumb/d/d1/Liverpool_FC_Logo.svg/1200px-Liverpool_FC_Logo.svg.png"

function ProductList () {
    return<>
    
        <div>
            <Typography.Title level={4}>รายการสินค้า</Typography.Title>
        </div>
        <div className="page-container ">
            <List >
                <div className="horizontal-list">
                    <div>
                        <Card title={listproduct} cover={<Image className="itemCradImage" src={listimg}/>}></Card>
                    </div>
                    <div>
                        <Card title={listproduct} cover={<Image className="itemCradImage" src={listimg}/>}></Card>
                    </div>
                    <div>
                        <Card title={listproduct} cover={<Image className="itemCradImage" src={listimg}/>}></Card>
                    </div>
                    
                    
                </div>
                
            </List>
        </div>
    </>

}
export default ProductList