import './App.css'
import React from 'react';
import FrontHeader from './components/storecompo/frontHeader'
import {Space} from 'antd';
import SideMenu from './components/storecompo/frontsidemenu';
import PageContent from './components/admincompo/PageContent';


function Petfront(){
    return<>
            <Space className='SideMenuAndPageContent'>
              
            <SideMenu />
            <PageContent />

            </Space>
    </>
}

export default Petfront;