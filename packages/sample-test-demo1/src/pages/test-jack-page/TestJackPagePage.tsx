import React, { Component } from 'react';
import { TableButtonType } from 'choerodon-ui/pro/lib/table/enum';
import { Buttons } from 'choerodon-ui/pro/lib/table/Table';
import { Button,DataSet,Table } from 'choerodon-ui/pro';

import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import tableDS from "./data-set";
import { ColumnProps } from 'choerodon-ui/pro/lib/table/Column';


interface TestJackPagePageProps {
  dispatch: Dispatch<any>;
}

@connect()
export default class TestJackPagePage extends Component<TestJackPagePageProps> {

  tableDataSet = new DataSet(tableDS)

  columns: ColumnProps[] = [
    { name: 'oneString', width: 320, editor: true },
    { name: 'towObject_towValue1', editor: false },
    { name: 'state', editor: true },
    { name:'userinfo',editor:true}
  ];
  buttons = [TableButtonType.add, 'delete' as Buttons];

  render() {


    return (
      <PageHeaderWrapper
        title='Jack测试'
        header={
          <Button onClick={() => this.tableDataSet.submit()}>提交</Button>
        }
      >
        <Table
        dataSet={this.tableDataSet}
        columns = {this.columns}
        buttons={this.buttons}
        />
      </PageHeaderWrapper>
    );
  }

}
