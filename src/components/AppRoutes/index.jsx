import { Route, Routes} from 'react-router-dom';
import DashboardPage from '../../pages/DashboardPage';
import About from '../../pages/About';
import ProductList from '../../pages/ProductList';
import SettingPage from '../../pages/SettingPage';
import AddProduct from '../../pages/AddProduct';

function AppRoutes(){
    return<>
    <Routes>
        <Route path="/" element={<DashboardPage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/Productlist" element={<ProductList/>}></Route>
        <Route path="/settingpage" element={<SettingPage/>}></Route>
        <Route path="/AddProduct" element={<AddProduct/>}></Route>
    </Routes>
        
        
    
    </>
}
export default AppRoutes