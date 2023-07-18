//css
import './App.css'

//antdesige
import {Space} from 'antd';

//Bootsrap
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

//componant
import AppHeader from './components/admincompo/AppHeader';
import SideMenu from './components/admincompo/SideMenu';
import PageContent from './components/admincompo/PageContent';


//page


function App(){

    return <>
    <div className='MainPage'>
      <AppHeader/>

      <Space className='SideMenuAndPageContent'>
        
        <SideMenu></SideMenu>

        <PageContent></PageContent>

      </Space>

      
      
    </div>
   
    </>
}

export default App;
