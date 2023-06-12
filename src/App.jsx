//css
import './App.css'

//antdesige
import {Space} from 'antd';

//Bootsrap
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

//componant
import AppHeader from './components/AppHeader';
import SideMenu from './components/SideMenu';
import PageContent from './components/PageContent';
import AppFooter from './components/AppFooter';


//page


function App(){

    return <>
    <div className='MainPage'>
      <AppHeader/>

      <Space className='SideMenuAndPageContent'>
        
        <SideMenu></SideMenu>

        <PageContent></PageContent>

      </Space>

      <AppFooter/>
      
    </div>
   
    </>
}

export default App;
