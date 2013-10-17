Ext.define('HelloSencha.view.SimpleList', {
	extend: 'Ext.dataview.List',
	xtype: 'simplelist',
	config: {
		itemId: 'simplelist',
		flex: 1,
		store: 'stationsStore',
		itemTpl: '{id} : {name}',
	}
});