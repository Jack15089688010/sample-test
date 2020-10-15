/* eslint-disable no-console */
// import { AxiosRequestConfig } from 'axios';
function handleDataSetChange({ record, name, value, oldValue }) {
  console.log('[dataset newValue]', value, '[oldValue]', oldValue, `[record.get('${name}')]`, record.get(name));
}
export default {
	autoQuery: true,
	selection: 'multiple',
	pageSize: 10,
  transport:{
    submit: ({ data, params }) => {

     return {
       url: `/v1/tasks/submit`,
       data,
       params,
       method: 'POST',
     };
    }
  },
	queryFields: [
    { name: 'ckmc', type: 'string', label: '仓库名称' },
    { name: 'cklx', type: 'string', label: '仓库类型' },
    { name: 'chaungjianren', type: 'string', label: '仓库性质' },
		{ name: 'startTime', type: 'date', label: '仓库有效期从：' },
		{ name: 'endTime', type: 'date', label: '仓库有效期至' },
	],
	fields: [
		{ name: 'danjubianhao', type: 'string' },
		{ name: 'danjuzhuangtai', type: 'string' },
		{ name: 'fasongzhuangtai', type: 'string' },
		{ name: 'lianhuozhuangtai', type: 'string'},
		{ name: 'fayunzhuangtai', type: 'string' },
		{ name: 'bocishengchengzhuangtai', type: 'string' },
		{ name: 'huanbiaozhuangtai', type: 'string' },
		{ name: 'jihuashuliang', type: 'number'},
		{ name: 'lianhuoshuliang', type: 'string' },
		{ name: 'startTime', type: 'date' },
		{ name: 'endTime', type: 'date'},
		{ name: 'chaungjianren', type: 'string'},
    { name: 'ckmc', type: 'string'},
    { name: 'cklx', type: 'string'},
    { name: 'switch', type: 'boolean'},
    {
        name: 'code_string',
        type: 'object',
        lovCode: 'TODO.USER',
        required: true,
    },
    { name: 'code_code', type: 'string', bind: 'code.code' },
    { name: 'code_description', type: 'string', bind: 'code.description' },
    { name: 'jackTest', type: 'string', lookupCode:'TODO.TODO_STATE'}
	],
	// transport: {
	// 	read: {
	// 		url: '/htodo/v1/0/data',
	// 		method: 'post',
	// 	}
	// },
	events: {
		load: ({ dataSet }) => {
			console.log('加载完成', dataSet);
		},
    update: handleDataSetChange,
	},
	// 存在 data 时，DataSet 会优先取这里的数据作为数据源
    data: [
			{
				danjubianhao: '1231',
				danjuzhuangtai: '1235',
				fasongzhuangtai: '1231',
				lianhuozhuangtai: '1231',
				fayunzhuangtai: '1231',
				bocishengchengzhuangtai: '1231',
				huanbiaozhuangtai: 123,
				jihuashuliang: '1231',
				lianhuoshuliang: '1231',
				startTime: '2020',
				endTime: '2021',
        chaungjianren: 'jack',
        ckmc:'55',
        cklx:'555'
			},
		],
};
