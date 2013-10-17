Ext.define('HelloSencha.store.StationsStore', {
	extend: 'Ext.data.Store',
	requires: 'HelloSencha.model.Station',
	config: {
		model: 'HelloSencha.model.Station',
		storeId: 'stationsStore',
		autoLoad: true
	}
});