/* eslint-disable no-console */
import React from 'react';
import { Table, Icon, DataSet, Button } from 'choerodon-ui/pro';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import TableDS from './dataset';

const { Column } = Table;

export default class App extends React.Component {

  state = {
    tableDataSet: new DataSet(TableDS),
  }

  typeRenderer = ({ value, text, name, record, dataSet }) => {
		const typeIcon = record.get('issueTypeVO_icon');
		return (
  <div>
    <Icon name={typeIcon} />
    <span>{value}</span>
  </div>
		);
	}

	 priorityBackgroundRenderer = ({ value, text, name, record, dataSet }) => {
		return (
  <div style={{ color: '#29bece', width: 32, height: 32 }}>{value}</div>
		);
	}

	// header 上的操作按钮

	buttons = [
  <span key="1">
      包裹行明细
  </span>,
  	];

	// 行上的操作按钮

	commands = ({ record }) => [
		'add',
		// 预置的按钮可以接受第二个参数，用来注入样式
		['delete', { color: 'red' }],
		// 当然也可以自己写自定义按钮
		// ds.current 指向的会是你当前点击的行
		// eslint-disable-next-line react/jsx-indent
		<Button
  key="add"
  icon="add"
  onClick={() => console.log(this.ds.current.toData())
						}
		/>,
	];

  tableHeader = () => {
    return (
      <h2>
    	  自定义新增
      </h2>
    );
  }

	render() {
		return (
  <PageHeaderWrapper
    header={
      <Button onClick={() => this.state.tableDataSet.submit()}>
            提交
      </Button>
        }
    title="出库单包裹详情"
  >
    <Table
      dataSet={this.state.tableDataSet}
				// header 上的按钮
      buttons={this.buttons}
      editMode="inline"
      queryFieldsLimit={4}
    >
      <Column
        name="hanghao"
        header="行号"
        editor
      />
      <Column
        name="baoguohao"
        header="包裹号"
        renderer={this.priorityBackgroundRenderer}
        editor
      />
      <Column
        name="chang"
        header="长"
        editor
      />
      <Column
        name="kuan"
        header="宽"
        editor
      />
      <Column
        name="zhongliang"
        header="重量"
        editor
      />
      <Column
        name="kdzhuangtai"
        header="快递单号状态"
        editor
      />
      <Column
        name="kddanhao"
        header="快递单号"
        renderer={this.priorityBackgroundRenderer}
        editor
      />
      <Column
					// 这里是用来绑操作的列
        command={this.commands}
      />
    </Table>
  </PageHeaderWrapper>
		);
	}
}
