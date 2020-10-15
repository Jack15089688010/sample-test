import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from 'choerodon-ui';
import BaseinfoTab1 from './baseinfoTab1';

const TabPane = Tabs.TabPane;


export default class App extends React.Component {
  callback(key) {
    console.log(key);

    setTimeout(function () {
      let content = document.querySelector(".c7n-tabs-content");
      if (content) {
        content.style.marginLeft = `-${key-1}00%`;
      }
    }, 10);
 }
 componentDidMount(){
   let content = document.querySelector(".c7n-tabs-content");
   if (content) {
     content.style.marginLeft = '0';
   }
 }
	render() {
		return (
      <Tabs defaultActiveKey="1" onTabClick={this.callback}>
        <TabPane tab="仓库基础信息" key="1">
          <BaseinfoTab1>  </BaseinfoTab1>
        </TabPane>
        <TabPane tab="仓库额度信息" key="2">
          仓库额度信息
        </TabPane>
        <TabPane tab="仓库额率信息" key="3">
          仓库额率信息
        </TabPane>
      </Tabs>
		);
	}
}
