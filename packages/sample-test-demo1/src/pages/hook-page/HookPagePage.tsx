import React, { Component } from 'react';
import { Button } from 'choerodon-ui/pro'
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import HookIndex  from "./hookIndex";

interface HookPagePageProps {
  dispatch: Dispatch<any>;
}

@connect()
export default class HookPagePage extends Component<HookPagePageProps> {
  render() {
    return (
      <PageHeaderWrapper
        title='HookPagePage'
        header={
          <Button>按钮</Button>
        }
      >
        <div>Hello HookPage</div>
        <HookIndex />
      </PageHeaderWrapper>
    );
  }

}
