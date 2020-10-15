import React from 'react';
import TableDS from './baseinfoDS1';
import { Table, Icon,DataSet,Button,Modal,TextField,DatePicker,Switch,Lov,Select } from 'choerodon-ui/pro';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { Divider,Checkbox} from 'choerodon-ui';
import './modal.less'
const { Column } = Table;
const key3 = Modal.key();
let modal;

export default class App extends React.Component {

  state = {
    tableDataSet: new DataSet(TableDS)
  }

  closeModal() {
    modal.close();
  }

  openMoreButtons(dd) {
    console.log(dd);
  Modal.open({
    key: key3,
    title: 'More Buttons',
    maskClosable: true,
    destroyOnClose: true,
    children: (
      <div>
        <h2>仓库基础信息维护</h2>
        <Divider />
        <div className='flex'>
          <div><span>仓库编码:</span>
          <TextField dataSet={this.state.tableDataSet} name="danjubianhao" /></div>
          <div><span>仓库编码:</span>
          <TextField dataSet={this.state.tableDataSet} name="danjuzhuangtai" /></div>
          <div><span>仓库单位:</span>
          <TextField dataSet={this.state.tableDataSet} name="fasongzhuangtai" /></div>
        </div>
        <div className='flex'>
          <div><span>仓库性质:</span>
          <TextField dataSet={this.state.tableDataSet} name="lianhuozhuangtai" /></div>
          <div><span>仓库类型:</span>
          <TextField dataSet={this.state.tableDataSet} name="fayunzhuangtai" /></div>
          <div><span>库容（吨）:</span>
          <TextField dataSet={this.state.tableDataSet} name="bocishengchengzhuangtai" /></div>
        </div>
        <div className='flex'>
          <div><span>仓库有效期从:</span>
          <DatePicker dataSet={this.state.tableDataSet} name="startTime"/></div>
          <div><span>仓库有效期至:</span>
          <DatePicker dataSet={this.state.tableDataSet} name="endTime"/></div>
          <div><span>库存限额:</span>
          <TextField dataSet={this.state.tableDataSet} name="huanbiaozhuangtai" /></div>
        </div>
        <div className='flex'>
          <div><span>已启用</span>
          <Switch dataSet={this.state.tableDataSet} name="switch" /><span>已停用</span></div>
          <div><Checkbox>冻结</Checkbox></div>
        </div>
        <h2>仓库详细信息</h2>
        <Divider />
        <div className='flex1'>
          <div><span>区域:</span>
          <TextField dataSet={this.state.tableDataSet} name="jihuashuliang" /></div>
          <div><span>详细地址:</span>
          <TextField dataSet={this.state.tableDataSet} name="lianhuoshuliang" /></div>
        </div>
        <div className='flex1'>
          <div><span>联系人:</span>
         <Lov dataSet={this.state.tableDataSet}  name="code_string" /></div>

          <div><span>联系电话:</span>
          <TextField dataSet={this.state.tableDataSet} name="ckmc" /></div>
        </div>
        <div className='beizhu'>
          <div><span>备注:</span>
          <TextField dataSet={this.state.tableDataSet} name="cklx" /></div>
          <div><span>下拉:</span>
          <Select dataSet={this.state.tableDataSet} name="jackTest"></Select></div>

        </div>
      </div>
    ),
    footer: (okBtn, cancelBtn) => (
      <div>
        {okBtn}
        <Button onClick={ () => {
          console.log(this.state.tableDataSet.props.transport);
          this.state.tableDataSet.props.transport.submit()
        }}>提交</Button>
        {cancelBtn}
      </div>
    ),
  });
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
		// 预置的按钮可以接受第二个参数，用来注入样式
		['delete', { color: 'red' }],
		// 当然也可以自己写自定义按钮
		// ds.current 指向的会是你当前点击的行
		<Button
			key="add"
			icon="mode_edit"
			onClick={() => this.openMoreButtons(this.state.tableDataSet.current.toData())
			}
		/>
	];



	render() {
		return (
      <Table dataSet={this.state.tableDataSet}
				editMode="inline"
        queryFieldsLimit={3}
			>
				<Column
					name="danjubianhao"
					header="仓库编码"
					editor
				/>
				<Column
					name="danjuzhuangtai"
					header="仓库名称"
          renderer={this.priorityBackgroundRenderer}
					editor
				/>
				<Column name="fasongzhuangtai"
					header="仓储单位"
					editor
				/>
				<Column
					name="lianhuozhuangtai"
					header="仓库性质"
					editor
				/>
				<Column
					name="fayunzhuangtai"
					header="仓库类型"
					editor
				/>
        <Column
          name="bocishengchengzhuangtai"
          header="库容（顿）"
          renderer={this.priorityBackgroundRenderer}
          editor
        />
        <Column
          name="huanbiaozhuangtai"
          header="库存限额（%）"
          editor
        />
        {/*<Column
          name="huanbiaozhuangtai"
          header="单据类型"
          editor
        />*/}
        <Column
          name="jihuashuliang"
          header="仓库状态"
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
          name="startTime"
          header="仓库有效期从"
          editor
        />
        <Column
          name="endTime"
          header="仓库有效期至"
          editor
        />
				<Column
					// 这里是用来绑操作的列
					command={this.commands}
          lock='right'
				/>
			</Table>
		)
	}
}
