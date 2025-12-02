import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { tabs } from './constants/constans';

export const App = () => {
  const [activeTabId, setCurrenTab] = useState('tab-1');
  const handletClick = value => {
    if (tabs.some(tab => tab.id === value)) {
      setCurrenTab(value);
    } else {
      setCurrenTab('tab-1');
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {tabs.find(tab => tab.id === activeTabId).title}
      </h1>

      <Tabs
        activeTabId={activeTabId}
        tabs={tabs}
        onTabSelected={handletClick}
      />
    </div>
  );
};
