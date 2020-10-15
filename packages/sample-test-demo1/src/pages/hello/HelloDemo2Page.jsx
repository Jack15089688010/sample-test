import React from 'react';
import TableDS from './dataset2';
import { Table, Icon,DataSet,Button } from 'choerodon-ui/pro';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
const { Column } = Table;

export default class App extends React.Component {

  state = {
    tableDataSet: new DataSet(TableDS)
  }

  typeRenderer = ({ value, text, name, record, dataSet }) => {
		const typeIcon = record.get('issueTypeVO_icon');
		return (
			<div>
				<Icon name={typeIcon} />
				<span>{value}</span>
			</div>
		)
	}

	 priorityBackgroundRenderer = ({ value, text, name, record, dataSet }) => {
		return (
			<div style={{ color: '#29bece', width: 32, height: 32 }}>{value}</div>
		)
	}

	// header 上的操作按钮


	// 行上的操作按钮

	commands = ({ record }) => [
		'add',
		// 预置的按钮可以接受第二个参数，用来注入样式
		['delete', { color: 'red' }],
		// 当然也可以自己写自定义按钮
		// ds.current 指向的会是你当前点击的行
		<Button
			key="add"
			icon="add"
			onClick={() => console.log(this.ds.current.toData())
			}
		/>
	];



	render() {
		return (
      <PageHeaderWrapper
        header={
          <Button onClick={() => this.state.tableDataSet.submit()}>
            提交
          </Button>
        }
        title="出库单"
      >
			<Table dataSet={this.state.tableDataSet}
				editMode="inline"
        queryFieldsLimit={4}
			>
				<Column
					name="danjubianhao"
					header="单据编号"
					editor
				/>
				<Column
					name="danjuzhuangtai"
					header="单据状态"
          renderer={this.priorityBackgroundRenderer}
					editor
				/>
				<Column name="fasongzhuangtai"
					header="发放状态"
					editor
				/>
				<Column
					name="lianhuozhuangtai"
					header="炼货状态"
					editor
				/>
				<Column
					name="fayunzhuangtai"
					header="发运状态"
					editor
				/>
        <Column
          name="bocishengchengzhuangtai"
          header="波次生成状态"
          renderer={this.priorityBackgroundRenderer}
          editor
        />
        <Column
          name="huanbiaozhuangtai"
          header="换标状态"
          editor
        />
        {/*<Column
          name="huanbiaozhuangtai"
          header="单据类型"
          editor
        />*/}
        <Column
          name="jihuashuliang"
          header="计划数量"
          renderer={this.priorityBackgroundRenderer}
          editor
        />
        <Column
          name="lianhuoshuliang"
          header="炼货数量"
          renderer={this.priorityBackgroundRenderer}
          editor
        />
				<Column
					// 这里是用来绑操作的列
					command={this.commands}
          lock='right'
				/>
			</Table>
      </PageHeaderWrapper>
		)
	}
}
