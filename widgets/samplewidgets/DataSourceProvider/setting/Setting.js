// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/html dojo/_base/array dojo/query jimu/BaseWidgetSetting jimu/utils esri/layers/FeatureLayer".split(" "),function(f,d,b,g,h,k,l){return f([h],{baseClass:"jimu-widget-dsp-setting",cityService:"http://sampleserver6.arcgisonline.com/arcgis/rest/services/SampleWorldCities/MapServer/0",postCreate:function(){this.setConfig(this.config);this.layer=new l(this.cityService)},setConfig:function(a){this._createFilterNodes(a.filters)},getConfig:function(){return{filters:b.map(g(".filter input.f",
this.domNode),function(a){return a.value},this)}},getDataSources:function(){var a=this.getConfig().filters,c=this.layer.toJson().layerDefinition;return b.map(a,function(e){return{id:"filter-"+e,type:"Features",label:"City name start with "+e,dataSchema:k.getDataSchemaFromLayerDefinition(c)}},this)},_createFilterNodes:function(a){b.forEach(a,function(c){this._createFilterNode(c)},this)},_createFilterNode:function(a){d.create("div",{"class":"filter",innerHTML:'\x3cspan\x3eCity name start with:\x3c/span\x3e\x3cinput class\x3d"f" value\x3d"'+
a+'"\x3e\x3cinput type\x3d"button" data-dojo-attach-event\x3d"onclick:_onDeleteFilter"\x3e'},this.filterListNode)},_onAddNewClick:function(){this._createFilterNode("")},_onDeleteFilter:function(a){d.destroy(a.target.parentNode)}})});