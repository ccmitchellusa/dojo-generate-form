define([ "dojo/_base/array", //
"dojo/_base/lang",//
"dojo/_base/declare",//
"dojox/form/CheckedMultiSelect",//
"./createOptions",//
"./nullablePrimitiveConverter",//
], function(array, lang, declare, CheckedMultiSelect, createOptions, nullablePrimitiveConverter) {

	return declare("gform.CheckedSelectAttributeFactory", [ ], {

		handles : function(attribute) {
			var values = meta.values;	
			return !attribute.array && values != null && values.length > 0;
		},
 		

 		create : function(meta,modelHandle) {
			var options= createOptions(meta,true);

			var select = new CheckedMultiSelect({
				"value" : at(modelHandle,"value").transform(nullablePrimitiveConverter),
				options : options,
				style : "width: 200px;",
				multiple : false
			});
			
			return select;
 		}
		
	});
});
