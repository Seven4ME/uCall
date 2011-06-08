/**
 * @class uCall.widgets.MainTopToolbar
 * @extends Ext.toolbar.Toolbar
 *
 * Shows main top toolbar.
 *
 * @constructor
 * Create a new Main Top Toolbar
 * @param {Object} config The config object
 */

Ext.define('uCall.widgets.MainTopToolbar', {
	requires: [
		'uCall.widgets.UserStatusMenuButton',
		'uCall.widgets.UserServiceMenuButton'
	],
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.MainTopToolbar',
    
    config: {
    	id: 'MainTopToolbar',
    	items: [
    		'uCall UI',
    		'->',
    		'Agent: ' + window.currentUser.agentId,
    		'-',
    		'User Name: ' + window.currentUser.username,
    		'-',
    		{
    			xtype: 'UserStatusMenuButton'
    		},
    		'-',
    		{
    			xtype: 'UserServiceMenuButton'
    		}
    	]
    },
    
	constructor: function(){
		Ext.applyIf(this, this.config);
		this.callParent(arguments);
		console.log("TODO: MainTopToolbar(). Pass the 'User' model instead of using global vars.");
	}    
    
});