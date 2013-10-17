Ext.define('HelloSencha.controller.MainController', {
    extend: 'Ext.app.Controller',
    // These "refs" will generate "getters" for each of the view component instances
    // e.g. getSimplelist
    config: {
        refs: {
            simplelist: {
                selector: 'simplelist'
            }
        },
        control: {
            // Example of listening by an explicit id
            '#firstButton': {
                'tap': function () {
                    console.log('Only the button with id=firstButton says Hello');
                    Ext.Msg.alert('Info', 'Hello Sencha');
                }
            },
            simplelist: {
                itemtap: 'onListSelect'
            },
        }
    },


    onListSelect: function (list, idx, target, record, e, eOpts) {
        Ext.Msg.alert('onListSelect', record.data.name);
    },

});