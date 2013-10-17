Ext.define('HelloSencha.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        itemId: 'main',
        tabBarPosition: 'bottom',
        items: [{
            title: 'Welcome',
            iconCls: 'home',
            itemId: 'home',
            styleHtmlContent: true,
            scrollable: true,
            layout: 'vbox',
            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Hello Sencha'
            }, {
                xtype: 'component',
                html: [
                    "This is a hello world sencha touch 2.3.0 app"
                ].join("")
            }, {
                xtype: 'spacer'
            }, {
                xtype: 'button',
                id: 'firstButton',
                text: 'Say Hello'
            }],


        }, {
            title: 'List',
            iconCls: 'action',
            itemId: 'list',
            layout: 'vbox',
            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'List Example'
            }, {
                xtype: 'simplelist',
            }],


        }]
    }
});