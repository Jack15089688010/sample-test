import React from 'react';
import { Button } from 'choerodon-ui/pro';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { List, Table } from 'choerodon-ui';

import styles from './style.module.less';

const data = [
  {name: '出库单号', data: '12'},
  {name: '出库单类型', data: '12'},
  {name: '单据包裹状态', data: '12'},
  {name: '包裹单号', data: '12'},
];
const dataSource = [{
  key: '1',
  name: '12',
  age: 32,
  address: '12',
  t: '12',
  z: '12',
}, {
  key: '2',
  name: '12',
  age: 42,
  address: '12',
  t: '12',
  z: '12',
}];

const columns = [{
  title: 'sku',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '单位',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '数量',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '体积',
  dataIndex: 't',
  key: 't',
}, {
  title: '重量',
  dataIndex: 'z',
  key: 'z',
}];
export default class App extends React.Component {

  handelSearch = () => {
		this.props.history.push('/demo1/hello');
	}

	render() {
		return (
  <PageHeaderWrapper
    title="出库单详情"
  >
    <List
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <div className={styles.displayStyle}>
            <span>{item.name}</span><span>{item.data}</span>
          </div>
        </List.Item>
      )}
    />
    <Table dataSource={dataSource} columns={columns} filterBar={false} />
    <Button
      style={{ marginRight: 10 }}
      type="primary"
    >
         提交
    </Button>
  </PageHeaderWrapper>
		);
	}
}
