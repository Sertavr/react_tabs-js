import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { tabs } from './constants/constans';

export const App = () => {
  const [currentTab, setCurrenTab] = useState(1);
  const handletClick = value => {
    setCurrenTab(value);
  };

  return (
    <div className="section">
      <h1 className="title">Selected tab is Tab {currentTab}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            currentTab={currentTab}
            tabs={tabs}
            onTabSelected={handletClick}
          />
        </div>

        <div className="block" data-cy="TabContent">
          Some text {currentTab}
        </div>
      </div>
    </div>
  );
};
