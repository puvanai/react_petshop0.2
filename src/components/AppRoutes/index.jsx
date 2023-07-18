import { Route, Routes} from 'react-router-dom';

import DashboardPage from '../../pages/DashboardPage';
import About from '../../pages/About';
import ProductList from '../../pages/ProductList';
import SettingPage from '../../pages/SettingPage';
import AddProduct from '../../pages/AddProduct';

import TypePeoduct from '../../pages/TypePeoduct1';
import TypePeoduct2 from '../../pages/TypePeoduct2';
import TypePeoduct3 from '../../pages/TypePeoduct3';
import TypePeoduct4 from '../../pages/TypePeoduct4';
import TypePeoduct5 from '../../pages/TypePeoduct5';


function AppRoutes(){
    return<>
    <Routes>

         
        <Route path="/" element={<DashboardPage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/Productlist" element={<ProductList/>}></Route>
        <Route path="/settingpage" element={<SettingPage/>}></Route>
        <Route path="/AddProduct" element={<AddProduct/>}></Route>


        <Route path='/typeproduct' element={<TypePeoduct/>}></Route>
        <Route path='/typeproduct2' element={<TypePeoduct2/>}></Route>
        <Route path='/typeproduct3' element={<TypePeoduct3/>}></Route>
        <Route path='/typeproduct4' element={<TypePeoduct4/>}></Route>
        <Route path='/typeproduct5' element={<TypePeoduct5/>}></Route>

    </Routes>
        
        
    
    </>
}
export default AppRoutes