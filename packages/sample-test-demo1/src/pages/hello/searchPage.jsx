import React from 'react';
import { Icon,Button } from 'choerodon-ui/pro';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { Input } from 'choerodon-ui';
import { routerRedux } from 'dva/router';

const Search = Input.Search;

export default class App extends React.Component {

  handelSearch = (value) => {
		// this.props.history.push('/demo1/hello')
    this.props.dispatch(routerRedux.push({
      pathname:'/demo1/hello'
    }))
	}

	render() {
		return (
      <PageHeaderWrapper
        title="搜索订单界面"
      >
			<div>
			  <span>*快递单号</span>
			</div>
			<Search
				placeholder="请输入快递单号"
				onSearch={value => this.handelSearch(value)}
				style={{ width: 200 }}
			/>
      </PageHeaderWrapper>
		)
	}
}
