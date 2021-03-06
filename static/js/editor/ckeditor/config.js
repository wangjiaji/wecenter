/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	config.toolbar = 'Full';

	config.toolbar_Full = [
		 ['FontSize','Cleanup','Bold','Italic','NumberedList','BulletedList', 'Blockquote', 'Code', 'WecenterImage', 'WecenterAttach', 'WecenterLink', 'WecenterVideo', 'Maximize', 'RemoveFormat']

	]

	config.extraPlugins = 'sourcearea,bbcode,wecenterattach,wecenterimage,wecenterlink,wecentervideo,blockquote,codeTag,font';

	config.resize_enabled = false;

	config.removePlugins = "elementspath";

	config.language = 'zh-cn';

	config.skin = 'bootstrapck';

	config.height = 250;

	//config.plugins = 'sourcearea,wecenterattach,wecenterimage,wecenterlink,wecentervideo,removeformat,blockquote,maximize,basicstyles,button,toolbar,enterkey,entities,floatingspace,wysiwygarea,fakeobjects,link,list,undo,codeTag';

	// The toolbar groups arrangement, optimized for a single toolbar row.
	// config.toolbarGroups = [
	// 	{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
	// 	{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
	// 	{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
	// 	{ name: 'forms' },
	// 	{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
	// 	{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
	// 	{ name: 'links' },
	// 	{ name: 'insert' },
	// 	{ name: 'styles' },
	// 	{ name: 'colors' },
	// 	{ name: 'tools' },
	// 	{ name: 'others' },
	// 	{ name: 'about' }
	// ];

	config.fontSize_sizes = '16px;18px';

	// The default plugins included in the basic setup define some buttons that
	// are not needed in a basic editor. They are removed here.
	config.removeButtons = 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript';


	// Dialog windows are also simplified.
	config.removeDialogTabs = 'link:advanced';

	config.removePlugins = 'enterkey,elementspath';

};
