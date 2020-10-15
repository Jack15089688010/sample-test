/* eslint-disable no-console */
export default {
	autoQuery: true,
	selection: 'multiple',
	pageSize: 10,
	queryFields: [
		{ name: 'startTime', type: 'date', label: '创建时间从：' },
		{ name: 'endTime', type: 'date', label: '创建时间从至' },
		{ name: 'chaungjianren', type: 'string', label: '创建人' },
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
	},
	// 存在 data 时，DataSet 会优先取这里的数据作为数据源
    data: [
			{
				danjubianhao: '1231',
				danjuzhuangtai: '1231',
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
			},
		],
};
