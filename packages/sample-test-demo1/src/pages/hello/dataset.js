export default {
	autoQuery: true,
	selection: 'multiple',
	pageSize: 10,
	queryFields: [
		{ name: 'danjubianhao', type: 'string', label: '单据编号' },
		{ name: 'danjuleixing', type: 'string', label: '单据类型' },
		{ name: 'zhuzhimingchen', type: 'string', label: '组织名称' },
		{ name: 'cangkumingchen', type: 'string', label: '仓库名称' },
	],
	fields: [
		{ name: 'hanghao', type: 'string' },
		{ name: 'baoguohao', type: 'string' },
		{ name: 'chang', type: 'string' },
		{ name: 'kuan', type: 'string'},
		{ name: 'gao', type: 'string' },
		{ name: 'zhongliang', type: 'string' },
		{ name: 'kdzhuangtai', type: 'string' },
		{ name: 'kddanhao', type: 'number'},
		{ name: 'danjubianhao', type: 'string' },
		{ name: 'danjuleixing', type: 'string' },
		{ name: 'zhuzhimingchen', type: 'string'},
		{ name: 'cangkumingchen', type: 'string'},
	],
	// transport: {
	// 	read: {
	// 		url: 'v1/projects/${organizationId}/issues/feature/all',
	// 		method: 'post',
	// 	}
	// },
	events: {
		load: ({ dataSet }) => {
			console.log('加载完成', dataSet)
		}
	},
	// 存在 data 时，DataSet 会优先取这里的数据作为数据源
    data: [
			{
				hanghao: '1231',
				baoguohao: '1231',
				chang: '1231',
				kuan: '1231',
				gao: '1231',
				zhongliang: '1231',
				kdzhuangtai: '1231',
				kddanhao: 123,
				danjubianhao: '1231',
				danjuleixing: '1231',
				zhuzhimingchen: '1231',
				cangkumingchen: '1231',
			}
		],
};
