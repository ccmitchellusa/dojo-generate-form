define([ "dojo/_base/array", //
"dojo/_base/lang",//
"../Editor",//
"dojo/_base/declare",//
"dojox/mvc/at",//
"dojox/mvc/StatefulArray",//
"dojo/Stateful",//
"./EmbeddedListWidget",//
"dojox/mvc/sync",//
"dojox/mvc/WidgetList",//
"./RepeatedAttributeWidget",//
"../getStateful"
], function(array, lang, Editor, declare, at, StatefulArray, Stateful,
		EmbeddedListWidget, sync, WidgetList, RepeatedAttributeWidget,getStateful) {

	return declare("app.PrimitiveListAttributeFactory", [], {

		constructor : function(kwArgs) {
			lang.mixin(this, kwArgs);
		},
		handles : function(attribute) {
			return attribute != null && (typeof attribute.type == "string")
					&& attribute.array;
		},
		_getModelHandleValue: function() {
			return this.modelHandle.value;
		},
		create : function(attribute, modelHandle) {

			
			if (modelHandle[attribute.code]==null) {
				modelHandle[attribute.code]=getStateful([]);
			}
			
			var select = new EmbeddedListWidget({
				target : modelHandle,
				attribute : attribute
			});

			var widgetList = new WidgetList();
			widgetList.set("partialrebuild", true);
			widgetList.set("children", modelHandle.value);
			widgetList.set("childClz", RepeatedAttributeWidget);
			widgetList.set("childParams", {
				meta : attribute,
				_relTargetProp : "modelHandle",
				editorFactory : this.editorFactory
			});
			select.addChild(widgetList);

			return select;

		}
	})
});
