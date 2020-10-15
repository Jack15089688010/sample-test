
const TODO_API = '/htodo';
export default{
  pageSize:2,
  transport:{
    submit: {
      url: 'v1/projects/${organizationId}/issues/feature/all',
      method: 'post',
    }
  },
  fields:[
    {
      label: '员工',
      name: 'userinfo',
      type: 'object',
      lovCode: 'TODO.USER',
    },
    {
      name:'userinfo_username',
      type:'string',
      bind:'userinfo.username'
    },
    {
      label: '任务状态',
      name:'oneString',
      type:'string'
    },
    {
      name:'towObject',
      type:'object'
    },
    {
      name:'towObject_towValue1',
      type:'string',
      bind:'towObject.towValue1'
    },
    {
      name: 'state',
      label: '任务状态',
      type: 'string',
      lookupCode: 'TODO.TODO_STATE',
    },
  ],
  data:[
    {
      id:1,
      oneString:'oneString',
      towObject:{
        towValue1:'towValue1'
      },
      state:'CODE_3',
      userinfo:{
        username:'jack'
      }
    },
    {
      id:2,
      oneString:'oneString2',
      towObject:{
        towValue1:'towValue1-2'
      },
      userinfo:{
        username:'zhuzhu'
      },
      state:'CODE_3'
    }
  ]
}
