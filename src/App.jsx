import React from 'react';
import { Space } from 'antd';
import './App.css';
import AppFooter from './components/AppFooter/Index';
import AppHeader from './components/AppHeader/Index';
import PageContent from './components/PageContent/Index';
import SideMenu from './components/SideMenu/Index';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Space className='SideMenuAndPageContent'>
        <SideMenu />
        <PageContent />
      </Space>
      <AppFooter />
    </div>
  );
}

reportWebVitals();

export default App;
