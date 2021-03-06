define([ "dojo/_base/array", //
"dojo/_base/lang",//
"dojo/_base/declare",//
"./GroupFactory",//
"./TitlePane"//
], function(array, lang, declare, GroupFactory, TitlePane) {

	return declare("gform.TitlePaneGroupFactory", [ GroupFactory ], {
		createWidget : function(group) {
			titlePane = new TitlePane({
				meta : group,
				title : group.title,
				open : group.open
			});
			//make pane content scrollable. important for usage in layout containers	
			titlePane.containerNode.style.overflow="auto";
			titlePane.on("valid-changed", lang.hitch(this,"onValidChanged"));
			return titlePane;
		},
		
		onValidChanged: function(e) {
			var titlePaneWidget = e.source;
			var titlePane = titlePaneWidget.get("meta");
			if (titlePaneWidget.get("errorCount") > 0) {
				titlePaneWidget.set("title", "<img class='dijitIconError' src='../../dojo/resources/blank.gif'>" + titlePane.title + "(" + titlePaneWidget.get("errorCount") + ")");
			} else {
				titlePaneWidget.set("title", titlePane.title);
			}
		}	
	});
});
