import './App.css'
import React from 'react';
import FrontHeader from './components/storecompo/frontHeader'
import {Space} from 'antd';
import SideMenu from './components/storecompo/frontsidemenu';
import PageContent from './components/admincompo/PageContent';


function Petfront(){
    return<>
        <div className='MainPage'>
            <Space className='SideMenuAndPageContent'>
              
            <SideMenu></SideMenu>
            <PageContent></PageContent>

            </Space>
        </div>
    </>
}

export default Petfront;