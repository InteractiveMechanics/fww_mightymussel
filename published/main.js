(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1080,
	height: 1920,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/main_atlas_.png", id:"main_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"main_atlas_", frames: [[773,1215,472,83],[691,1662,689,373],[691,863,249,174],[0,1228,771,432],[0,1662,689,373],[691,434,752,427],[691,0,771,432],[942,863,472,83],[0,0,689,1226],[691,1039,249,174]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Mesh = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_1 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_0 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_1_1 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_1_2 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_2 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.innerShell = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.innerShellupperEdge = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.musseloutterShell = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.stomach = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.OpenMusselAnatomy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3CBIAAkBIAdAAIAADqIBSAAIAAAXg");
	this.shape.setTransform(517.1,85.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3CBIAAkBIAdAAIAADqIBSAAIAAAXg");
	this.shape_1.setTransform(503.1,85.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMCBIAAkBIAaAAIAAEBg");
	this.shape_2.setTransform(491.2,85.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbB+QgOgIgJgPQgHgKgIgfQgDgRgCgtQAAgXAFgmQADgRAMgYQAJgPAOgIQAOgHAPAAQASAAANAHQAMAHAIAMQAIALAFAQQAEAOABAQIgcAAIgDgXQgDgMgEgHQgFgIgIgFQgHgEgLAAQgKAAgIAFQgJAHgGAMQgFANgDAVQgDAVAAAdQAAAeADAVQADAVAFANQAGAMAJAHQAIAFAKAAQAKAAAIgCQAHgDAGgGQAFgEACgIQADgIAAgJIAAglIgjAAIAAgYIA/AAIAAB5IgSAAIgEgTQgIALgLAGQgMAGgQAAQgPAAgOgHg");
	this.shape_3.setTransform(478,85.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmCBIgoh6IgkABIAAB5IgdAAIAAkBIA/AAQAOgBANAFQANAEAJAJQAKAJAFANQAFAMAAAQQAAALgCAKQgDAKgFAIQgFAJgIAGQgIAGgKABIAsCBgAgmgPIAYAAQAOAAAJgCQALgDAGgGQAGgGADgIQACgJAAgLQAAgLgCgIQgDgJgGgFQgGgGgLgDQgJgCgOgBIgYAAg");
	this.shape_4.setTransform(452.4,85.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8CBIAAkBIB1AAIAAAXIhZAAIAABZIBBAAIAAAWIhBAAIAABkIBdAAIAAAXg");
	this.shape_5.setTransform(435.8,85.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnCBIhOjgIgBAAIAADgIgdAAIAAkBIAsAAIBCC9IABAAIAAi9IAcAAIAAEBg");
	this.shape_6.setTransform(418.3,85.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAnCBIhOjgIgBAAIAADgIgdAAIAAkBIAsAAIBCC9IABAAIAAi9IAcAAIAAEBg");
	this.shape_7.setTransform(400.3,85.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMCBIAAkBIAaAAIAAEBg");
	this.shape_8.setTransform(387.3,85.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag3CCIAAkCIAdAAIAADqIBSAAIAAAYg");
	this.shape_9.setTransform(550.1,143.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag3CCIAAkCIAdAAIAADqIBSAAIAAAYg");
	this.shape_10.setTransform(536.1,143.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMCCIAAkCIAZAAIAAECg");
	this.shape_11.setTransform(524.2,143.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbB+QgOgHgJgQQgHgKgIgfQgDgRgCgtQAAgXAFgmQADgRAMgYQAJgQAOgHQAOgHAPAAQASAAANAHQAMAGAIANQAIAMAFAPQAEAOABARIgcAAIgDgYQgDgMgEgHQgFgJgIgDQgHgGgLAAQgKAAgIAHQgJAGgGAMQgFANgDAVQgDAVAAAdQAAAeADAVQADAVAFANQAGANAJAFQAIAGAKABQAKAAAIgEQAHgCAGgGQAFgFACgHQADgIAAgKIAAglIgjAAIAAgXIA/AAIAAB6IgSAAIgEgUQgIALgLAGQgMAGgQAAQgPAAgOgHg");
	this.shape_12.setTransform(511,143.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAmCCIgoh8IgkACIAAB6IgdAAIAAkCIA/AAQAOAAANAEQANAEAJAJQAKAJAFAMQAFANAAAQQAAALgCAKQgDAKgFAIQgFAJgIAFQgIAHgKACIAsCBgAgmgOIAYAAQAOAAAJgEQALgDAGgFQAGgGADgIQACgJAAgKQAAgMgCgIQgDgJgGgFQgGgGgLgDQgJgCgOAAIgYAAg");
	this.shape_13.setTransform(485.4,143.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag8CCIAAkCIB1AAIAAAYIhZAAIAABYIBBAAIAAAVIhBAAIAABlIBdAAIAAAYg");
	this.shape_14.setTransform(468.8,143.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNCCIAAjqIg1AAIAAgYICFAAIAAAYIg1AAIAADqg");
	this.shape_15.setTransform(453.3,143.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcB+QgNgFgIgKQgIgJgEgOQgEgNAAgQIAAi9IAdAAIAAC9QACAZAFAJQAEAHAIAEQAHAEAKAAQAKAAAIgEQAHgEAFgHQAFgJACgZIAAi9IAdAAIAAC9QAAAQgEANQgEAOgIAJQgIAKgNAFQgNAFgQAAQgQAAgMgFg");
	this.shape_16.setTransform(437.3,143.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcB+QgOgIgKgPQgGgLgJgfQgDgRgCgsQAAgWAFgmQAEgRALgZQAKgPAOgIQAMgHAQAAQAQAAANAHQAPAIAJAPQALAZADARQAGAmAAAWQgCAsgEARQgIAfgGALQgJAPgPAIQgNAHgQAAQgQAAgMgHgAgQhnQgJAFgGAMQgGAMgEAVQgDAXAAAeQAAAfADAXQAEAVAGAMQAGANAJAEQAHAFAJABQAJgBAJgFQAIgEAFgNQAHgMAEgVQADgXAAgfQAAgegDgXQgEgVgHgMQgFgMgIgFQgJgGgJAAQgJAAgHAGg");
	this.shape_17.setTransform(419.3,143.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaB/QgMgEgJgKQgIgKgFgOQgFgNAAgQIAaAAQAAALADAJQADAKAFAGQAGAHAIADQAIAEAIgBQAJAAAHgDQAHgDAFgFQAFgFADgIQACgIAAgKQAAgLgEgKQgEgHgIgJQgIgJgagTIgTgMQgKgIgHgJQgHgJgEgKQgFgMAAgOQAAgNAFgMQAEgLAIgIQAJgHALgFQAMgEANAAQANAAALAFQAMAFAIAIQAIAKAFANQAFANABAQIgaAAQgBgKgDgIQgCgJgFgGQgFgGgHgEQgHgDgIAAQgIAAgHACQgGADgFAFQgKAJAAAPQAAAKAFAKQAEAHAIAJQAHAHAaATQAbARAJAMQAIALAEALQAFANAAAPQAAAPgFANQgEAMgJAIQgIAJgMAEQgNAFgPAAQgOAAgMgGg");
	this.shape_18.setTransform(172.5,194.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhACCIAAkCIA+AAQANAAANAEQANAGAJAJQAJAJAFANQAFAOAAAQQAAAQgFANQgFAOgJAIQgJAIgNAFQgNAFgNAAIgiAAIAAB2gAgkgJIAeAAQAJAAAIgDQAIgEAGgFQAGgGADgJQADgJAAgMQAAgMgDgJQgDgJgGgGQgGgGgIgDQgIgDgJAAIgeAAg");
	this.shape_19.setTransform(157.2,194.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag3CCIAAkCIAdAAIAADqIBSAAIAAAYg");
	this.shape_20.setTransform(142.6,194.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAwCCIgPhOIhAAAIgQBOIgcAAIA5kCIAlAAIA5ECgAAdAdIgdiKIAAAAIgbCKIA4AAg");
	this.shape_21.setTransform(126.7,194.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhACCIAAkCIA+AAQANAAANAEQANAGAJAJQAJAJAFANQAFAOAAAQQAAAQgFANQgFAOgJAIQgJAIgNAFQgNAFgNAAIgiAAIAAB2gAgkgJIAeAAQAJAAAIgDQAIgEAGgFQAGgGADgJQADgJAAgMQAAgMgDgJQgDgJgGgGQgGgGgIgDQgIgDgJAAIgeAAg");
	this.shape_22.setTransform(111.3,194.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag3CCIAAkCIAdAAIAADqIBSAAIAAAYg");
	this.shape_23.setTransform(88.8,194.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAwCCIgPhOIhAAAIgQBOIgcAAIA5kCIAlAAIA5ECgAAdAdIgdiKIAAAAIgbCKIA4AAg");
	this.shape_24.setTransform(72.8,194.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNCCIAAkCIAaAAIAAECg");
	this.shape_25.setTransform(60.9,194.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhDCCIAAkCIBEAAQAOAAAMAEQALAFAIAJQAIAHAEANQAEAMAAAOQAAAKgCAJQgDAJgEAHQgFAIgIAFQgHAGgLADIAAABQAMADAJAEQAIAGAGAJQAFAIADALQADAKAAANQAAASgFANQgFAOgLAJQgKAIgQAFQgQAFgTAAgAgmBqIAcAAQALAAAJgDQAKgDAGgGQAHgGADgJQAEgJAAgMQAAgOgDgJQgDgKgHgHQgGgGgKgEQgKgDgLAAIgcAAgAgmgRIAPAAQAQAAAJgCQALgDAHgFQAHgGADgJQAEgJAAgNQAAgLgDgIQgCgIgGgFQgFgEgJgCQgJgDgKAAIgcAAg");
	this.shape_26.setTransform(48.1,194.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAwCCIgPhOIhAAAIgQBOIgcAAIA5kCIAlAAIA5ECgAAdAdIgdiKIAAAAIgbCKIA4AAg");
	this.shape_27.setTransform(30.9,194.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag3CCIAAkCIAdAAIAADqIBSAAIAAAYg");
	this.shape_28.setTransform(16.9,194.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.745)").s().p("Ag8CBIAAkBIB1AAIAAAXIhZAAIAABZIBBAAIAAAWIhBAAIAABkIBdAAIAAAXg");
	this.shape_29.setTransform(52.4,-468);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.745)").s().p("Ag3CBIAAkBIAdAAIAADqIBSAAIAAAXg");
	this.shape_30.setTransform(37.9,-468);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.745)").s().p("AgbB+QgPgIgJgPQgHgKgIgfQgDgRgCgtQAAgXAFgmQADgRAMgYQAJgPAPgIQANgHAQAAQAPAAALAFQAMAFAIAKQAJALAFAPQAFAPACAVIgcAAQgCgPgDgMQgDgKgFgIQgFgGgGgEQgHgEgIABQgKAAgJAFQgJAHgGANQgGAMgCAVQgDAVAAAdQAAAeADAVQACAVAGANQAGAMAJAHQAJAFAKAAQAKABAIgEQAHgEAGgHQAFgIADgNQADgNAAgSIAcAAQAAAWgFAQQgFARgIALQgJAMgNAGQgNAGgRAAQgQAAgNgHg");
	this.shape_31.setTransform(20.8,-468);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.745)").s().p("AgaB/QgMgEgJgKQgIgKgFgOQgFgNAAgQIAaAAQAAALADAJQADAKAFAGQAGAHAIADQAIAEAIgBQAJAAAHgCQAHgEAFgFQAFgFADgIQACgIAAgLQAAgKgEgKQgEgHgIgJQgIgJgagTIgTgMQgKgJgHgHQgHgKgEgKQgFgMAAgNQAAgOAFgMQAEgKAIgJQAJgIALgEQAMgEANAAQANAAALAFQAMAFAIAIQAIAKAFANQAFANABAQIgaAAQgBgKgDgIQgCgJgFgGQgFgHgHgDQgHgDgIAAQgIAAgHACQgGADgFAFQgKAJAAAPQAAAKAFAKQAEAHAIAJQAHAHAaATQAbARAJAMQAIALAEALQAFANAAAPQAAAQgFAMQgEAMgJAJQgIAIgMAEQgNAFgPAAQgOAAgMgGg");
	this.shape_32.setTransform(3.9,-468);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.745)").s().p("AgcB+QgNgFgIgKQgIgJgEgOQgEgNAAgQIAAi9IAdAAIAAC9QACAZAFAJQAEAHAIAEQAHAEAKAAQALAAAHgEQAIgEAEgHQAFgJACgZIAAi9IAdAAIAAC9QAAAQgEANQgEAOgIAJQgIAKgNAFQgNAFgQAAQgPAAgNgFg");
	this.shape_33.setTransform(-13,-467.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.745)").s().p("AA/CBIAAjsIgBAAIg2DsIgQAAIg2jsIgBAAIAADsIgaAAIAAkBIAtAAIAsDCIAAAAIAsjCIAtAAIAAEBg");
	this.shape_34.setTransform(-33,-468);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.745)").s().p("AAmCBIgoh6IgkABIAAB5IgdAAIAAkCIA/AAQAOAAANAFQANAFAJAIQAKAJAFANQAFAMAAAQQAAALgCAKQgDAKgFAIQgFAIgIAHQgIAGgKACIAsCAgAgmgPIAYAAQAOAAAJgCQALgEAGgFQAGgGADgIQACgJAAgLQAAgLgCgIQgDgIgGgGQgGgGgLgDQgJgCgOgBIgYAAg");
	this.shape_35.setTransform(51,-506);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.745)").s().p("AgcB+QgPgIgJgQQgGgKgJgeQgDgSgCgsQAAgXAFglQAEgSALgYQAJgPAPgIQANgHAPAAQAQAAANAHQAPAIAJAPQALAYAEASQAFAlAAAXQgCAsgDASQgJAegGAKQgJAQgPAIQgNAHgQAAQgPAAgNgHgAgRhoQgIAGgGALQgGAOgEAUQgDAWAAAfQAAAgADAWQAEAVAGANQAGALAIAFQAJAGAIgBQAJABAIgGQAJgFAGgLQAGgNAEgVQADgWAAggQAAgfgDgWQgEgUgGgOQgGgLgJgGQgIgEgJAAQgIAAgJAEg");
	this.shape_36.setTransform(32.9,-506);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.745)").s().p("AgNCBIAAjqIg1AAIAAgYICFAAIAAAYIg1AAIAADqg");
	this.shape_37.setTransform(16.8,-506);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.745)").s().p("AgbB+QgPgHgJgQQgHgLgIgeQgDgRgCgtQAAgXAFgmQADgRAMgYQAJgPAPgIQANgHAQAAQAPAAALAFQAMAFAIAKQAJAKAFAQQAFAPACAVIgcAAQgCgPgDgMQgDgKgFgIQgFgGgGgEQgHgDgIAAQgKAAgJAFQgJAHgGAMQgGANgCAVQgDAVAAAdQAAAeADAVQACAVAGANQAGANAJAFQAJAHAKgBQAKAAAIgDQAHgEAGgIQAFgIADgMQADgNAAgSIAcAAQAAAWgFARQgFAQgIALQgJAMgNAGQgNAGgRAAQgQAAgNgHg");
	this.shape_38.setTransform(0.8,-506);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.745)").s().p("AgdB+QgMgFgIgKQgIgJgEgOQgEgNAAgQIAAi9IAcAAIAAC9QACAZAGAJQAFAHAGAEQAJAEAJAAQAKAAAJgEQAGgEAFgHQAGgJACgZIAAi9IAcAAIAAC9QAAAQgEANQgEAOgIAJQgIAKgMAFQgNAFgRAAQgQAAgNgFg");
	this.shape_39.setTransform(-17.1,-505.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.745)").s().p("AhDCBIAAkCIAxAAQATAAAQAHQAIADAHAFQAHAFAFAIQAGAIAEAJQAFAKADANQAGAlAAAYQgCAtgEARQgDANgFAJQgEAKgGAIQgFAHgHAGQgHAFgIADQgQAGgTAAgAgmBqIAPAAQAQAAAJgFQANgEAIgLQAIgMAEgUQAFgWAAggQAAgfgFgVQgEgVgIgMQgIgLgNgFQgJgEgQAAIgPAAg");
	this.shape_40.setTransform(-35,-506);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.745)").s().p("AhDCBIAAkCIAxAAQATAAAQAHQAIADAHAFQAHAFAFAIQAGAIAEAJQAFAKADANQAGAlAAAYQgCAtgEARQgDANgFAJQgEAKgGAIQgFAHgHAGQgHAFgIADQgQAGgTAAgAgmBqIAPAAQAQAAAJgFQANgEAIgLQAIgMAEgUQAFgWAAggQAAgfgFgVQgEgVgIgMQgIgLgNgFQgJgEgQAAIgPAAg");
	this.shape_41.setTransform(-53,-506);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.745)").s().p("AAwCBIgPhMIhAAAIgQBMIgcAAIA5kCIAlAAIA5ECgAAdAdIgdiKIAAAAIgbCKIA4AAg");
	this.shape_42.setTransform(-70.1,-506);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.745)").s().p("AAmCBIgoh6IgkABIAAB5IgdAAIAAkCIA/AAQAOAAANAFQANAFAJAIQAKAJAFANQAFAMAAAQQAAALgCAKQgDAKgFAIQgFAIgIAHQgIAGgKACIAsCAgAgmgPIAYAAQAOAAAJgCQALgEAGgFQAGgGADgIQACgJAAgLQAAgLgCgIQgDgIgGgGQgGgGgLgDQgJgCgOgBIgYAAg");
	this.shape_43.setTransform(-94.9,-506);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.745)").s().p("AgcB+QgOgIgKgQQgGgKgJgeQgDgSgCgsQAAgXAFglQAEgSALgYQAKgPAOgIQANgHAPAAQAQAAANAHQAPAIAJAPQALAYADASQAGAlAAAXQgCAsgEASQgIAegGAKQgJAQgPAIQgNAHgQAAQgPAAgNgHgAgQhoQgJAGgGALQgGAOgEAUQgDAWAAAfQAAAgADAWQAEAVAGANQAGALAJAFQAHAGAJgBQAJABAJgGQAIgFAFgLQAHgNAEgVQADgWAAggQAAgfgDgWQgEgUgHgOQgFgLgIgGQgJgEgJAAQgJAAgHAEg");
	this.shape_44.setTransform(-113,-506);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.745)").s().p("AgNCBIAAkCIAbAAIAAECg");
	this.shape_45.setTransform(-126,-506);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.745)").s().p("AAmCBIgoh6IgkABIAAB5IgdAAIAAkCIA/AAQAOAAANAFQANAFAJAIQAKAJAFANQAFAMAAAQQAAALgCAKQgDAKgFAIQgFAIgIAHQgIAGgKACIAsCAgAgmgPIAYAAQAOAAAJgCQALgEAGgFQAGgGADgIQACgJAAgLQAAgLgCgIQgDgIgGgGQgGgGgLgDQgJgCgOgBIgYAAg");
	this.shape_46.setTransform(-138.8,-506);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.745)").s().p("Ag8CBIAAkCIB1AAIAAAYIhZAAIAABZIBBAAIAAAVIhBAAIAABlIBdAAIAAAXg");
	this.shape_47.setTransform(-155.4,-506);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.745)").s().p("AgNCBIAAjqIg1AAIAAgYICFAAIAAAYIg1AAIAADqg");
	this.shape_48.setTransform(-171,-506);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.745)").s().p("AAnCBIhPjgIgBAAIAADgIgcAAIAAkCIAtAAIBAC+IABAAIAAi+IAdAAIAAECg");
	this.shape_49.setTransform(-186.9,-506);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.745)").s().p("AAwCBIgPhMIhAAAIgQBMIgcAAIA5kCIAlAAIA5ECgAAdAdIgdiKIAAAAIgbCKIA4AAg");
	this.shape_50.setTransform(-203.9,-506);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.745)").s().p("Ag8CBIAAkCIB1AAIAAAYIhZAAIAABZIBBAAIAAAWIhBAAIAABkIBdAAIAAAXg");
	this.shape_51.setTransform(537.6,-442);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.745)").s().p("Ag3CBIAAkCIAdAAIAADrIBSAAIAAAXg");
	this.shape_52.setTransform(523,-442);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.745)").s().p("AgbB+QgPgHgJgQQgHgKgIgfQgDgRgCgtQAAgXAFgmQADgRAMgYQAJgPAPgIQANgHAQAAQAPAAALAFQAMAFAIAKQAJALAFAPQAFAPACAVIgcAAQgCgPgDgMQgDgLgFgHQgFgGgGgEQgHgEgIABQgKAAgJAFQgJAGgGANQgGANgCAVQgDAVAAAdQAAAeADAVQACAVAGANQAGANAJAFQAJAHAKgBQAKAAAIgDQAHgEAGgIQAFgHADgNQADgNAAgSIAcAAQAAAWgFAQQgFARgIALQgJAMgNAGQgNAGgRAAQgQAAgNgHg");
	this.shape_53.setTransform(506,-442);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.745)").s().p("AgaB/QgMgEgJgKQgIgKgFgNQgFgOAAgQIAaAAQAAALADAKQADAJAFAGQAGAHAIADQAIADAIAAQAJAAAHgCQAHgDAFgFQAFgGADgIQACgIAAgLQAAgKgEgKQgEgHgIgJQgIgJgagTIgTgMQgKgJgHgHQgHgKgEgKQgFgMAAgNQAAgOAFgMQAEgKAIgIQAJgJALgEQAMgEANAAQANAAALAFQAMAEAIAJQAIAKAFANQAFANABARIgaAAQgBgLgDgIQgCgJgFgGQgFgHgHgDQgHgDgIAAQgIAAgHACQgGADgFAFQgKAJAAAPQAAALAFAJQAEAHAIAIQAHAHAaAUQAbARAJANQAIAKAEALQAFANAAAPQAAAQgFALQgEANgJAJQgIAIgMAEQgNAFgPAAQgOAAgMgGg");
	this.shape_54.setTransform(489,-442);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.745)").s().p("AgdB+QgMgFgIgKQgIgJgEgOQgEgNAAgQIAAi9IAcAAIAAC9QACAZAGAJQAFAHAGAEQAJAEAJAAQAKAAAJgEQAGgEAFgHQAGgJACgZIAAi9IAcAAIAAC9QAAAQgEANQgEAOgIAJQgIAKgMAFQgNAFgRAAQgQAAgNgFg");
	this.shape_55.setTransform(472.1,-441.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.745)").s().p("AA/CBIAAjsIAAAAIg2DsIgRAAIg1jsIgBAAIAADsIgaAAIAAkCIAtAAIArDDIABAAIAsjDIAtAAIAAECg");
	this.shape_56.setTransform(452.2,-442);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.745)").s().p("AAmCBIgoh7IgkACIAAB5IgdAAIAAkCIA/AAQAOABANAEQANAFAJAIQAKAJAFANQAFAMAAAQQAAALgCAKQgDAKgFAIQgFAIgIAHQgIAGgKACIAsCAgAgmgOIAYAAQAOAAAJgDQALgEAGgFQAGgGADgIQACgIAAgLQAAgMgCgIQgDgIgGgGQgGgGgLgDQgJgDgOABIgYAAg");
	this.shape_57.setTransform(536.2,-480);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.745)").s().p("AgdB+QgNgHgKgRQgGgKgIgeQgEgSgCgsQAAgXAGglQADgRALgZQAKgPANgIQANgHAQAAQARAAANAHQANAIAKAPQALAZADARQAGAlAAAXQgCAsgEASQgIAegGAKQgKARgNAHQgNAHgRAAQgQAAgNgHgAgQhoQgJAGgGAMQgGANgDAUQgEAWAAAfQAAAgAEAWQADAUAGANQAGAMAJAFQAHAGAJAAQAJAAAJgGQAIgFAFgMQAHgNADgUQAEgWAAggQAAgfgEgWQgDgUgHgNQgFgMgIgGQgJgEgJgBQgJABgHAEg");
	this.shape_58.setTransform(518,-480);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.745)").s().p("AgNCBIAAjpIg1AAIAAgZICFAAIAAAZIg1AAIAADpg");
	this.shape_59.setTransform(502,-480);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.745)").s().p("AgbB+QgPgHgJgQQgHgLgIgeQgDgRgCgtQAAgXAFgmQADgRAMgYQAJgPAPgIQANgHAQAAQAPAAALAFQAMAFAIAKQAJAKAFAQQAFAQACAUIgcAAQgCgPgDgMQgDgKgFgIQgFgHgGgDQgHgEgIAAQgKABgJAFQgJAHgGAMQgGANgCAVQgDAVAAAdQAAAeADAVQACAVAGANQAGANAJAFQAJAHAKAAQAKgBAIgDQAHgEAGgIQAFgHADgNQADgNAAgSIAcAAQAAAWgFARQgFAQgIAMQgJALgNAGQgNAGgRAAQgQAAgNgHg");
	this.shape_60.setTransform(485.9,-480);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.745)").s().p("AgcB+QgNgFgIgKQgIgJgEgOQgEgNAAgQIAAi9IAdAAIAAC9QACAZAFAJQAEAHAIAEQAHAEAKAAQALAAAHgEQAIgEAEgHQAFgJACgZIAAi9IAdAAIAAC9QAAAQgEANQgEAOgIAJQgIAKgNAFQgNAFgQAAQgPAAgNgFg");
	this.shape_61.setTransform(468,-479.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.745)").s().p("AhDCBIAAkCIAxAAQATABAQAGQAIADAHAGQAHAEAFAIQAGAIAEAJQAFAKADANQAGAmAAAXQgCAtgEARQgDAMgFAKQgEALgGAHQgFAHgHAFQgHAGgIADQgQAGgTAAgAgmBqIAPAAQAQAAAJgFQANgEAIgLQAIgMAEgUQAFgWAAggQAAgfgFgVQgEgVgIgMQgIgLgNgFQgJgDgQAAIgPAAg");
	this.shape_62.setTransform(450.2,-480);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.745)").s().p("AhDCBIAAkCIAxAAQATABAQAGQAIADAHAGQAHAEAFAIQAGAIAEAJQAFAKADANQAGAmAAAXQgCAtgEARQgDAMgFAKQgEALgGAHQgFAHgHAFQgHAGgIADQgQAGgTAAgAgmBqIAPAAQAQAAAJgFQANgEAIgLQAIgMAEgUQAFgWAAggQAAgfgFgVQgEgVgIgMQgIgLgNgFQgJgDgQAAIgPAAg");
	this.shape_63.setTransform(432.2,-480);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.745)").s().p("AAwCBIgPhMIhAAAIgQBMIgcAAIA5kCIAlAAIA5ECgAAdAdIgdiKIAAAAIgbCKIA4AAg");
	this.shape_64.setTransform(415,-480);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.745)").s().p("AAmCBIgoh7IgkACIAAB5IgdAAIAAkCIA/AAQAOABANAEQANAFAJAIQAKAJAFANQAFAMAAAQQAAALgCAKQgDAKgFAIQgFAIgIAHQgIAGgKACIAsCAgAgmgOIAYAAQAOAAAJgDQALgEAGgFQAGgGADgIQACgIAAgLQAAgMgCgIQgDgIgGgGQgGgGgLgDQgJgDgOABIgYAAg");
	this.shape_65.setTransform(390.3,-480);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.745)").s().p("AgdB+QgNgHgKgRQgGgKgIgeQgEgSgCgsQAAgXAGglQADgRALgZQAKgPANgIQANgHAQAAQARAAANAHQANAIAKAPQALAZADARQAGAlAAAXQgCAsgEASQgIAegGAKQgKARgNAHQgNAHgRAAQgQAAgNgHgAgRhoQgIAGgFAMQgHANgDAUQgEAWAAAfQAAAgAEAWQADAUAHANQAFAMAIAFQAJAGAIAAQAKAAAHgGQAJgFAFgMQAHgNADgUQAEgWAAggQAAgfgEgWQgDgUgHgNQgFgMgJgGQgHgEgKgBQgIABgJAEg");
	this.shape_66.setTransform(372.1,-480);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.745)").s().p("AgMCBIAAkCIAZAAIAAECg");
	this.shape_67.setTransform(359.2,-480);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.745)").s().p("AAmCBIgoh7IgkACIAAB5IgdAAIAAkCIA/AAQAOABANAEQANAFAJAIQAKAJAFANQAFAMAAAQQAAALgCAKQgDAKgFAIQgFAIgIAHQgIAGgKACIAsCAgAgmgOIAYAAQAOAAAJgDQALgEAGgFQAGgGADgIQACgIAAgLQAAgMgCgIQgDgIgGgGQgGgGgLgDQgJgDgOABIgYAAg");
	this.shape_68.setTransform(346.3,-480);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.745)").s().p("Ag8CBIAAkCIB1AAIAAAZIhZAAIAABYIBBAAIAAAVIhBAAIAABlIBdAAIAAAXg");
	this.shape_69.setTransform(329.7,-480);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.745)").s().p("AgNCBIAAjpIg1AAIAAgZICFAAIAAAZIg1AAIAADpg");
	this.shape_70.setTransform(314.2,-480);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.745)").s().p("AgaCAQgMgGgJgJQgIgKgFgNQgFgOAAgRIAaAAQAAAMADAKQADAIAFAHQAGAGAIAEQAIADAIABQAJAAAHgDQAHgEAFgEQAFgGADgIQACgIAAgLQAAgKgEgJQgEgJgIgIQgIgIgagUIgTgMQgKgJgHgHQgHgKgEgLQgFgMAAgMQAAgOAFgLQAEgMAIgHQAJgJALgEQAMgEANAAQANAAALAEQAMAGAIAJQAIAJAFAMQAFAOABARIgaAAQgBgLgDgIQgCgJgFgGQgFgGgHgDQgHgEgIgBQgIABgHADQgGACgFAFQgKAJAAAPQAAALAFAIQAEAJAIAHQAHAHAaAUQAbARAJANQAIAJAEAMQAFANAAAPQAAAPgFAMQgEANgJAJQgIAIgMAEQgNAFgPAAQgOAAgMgFg");
	this.shape_71.setTransform(299.2,-480);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.745)").s().p("AgcB+QgPgHgJgRQgGgKgIgeQgEgSgCgsQAAgXAGglQADgRALgZQAJgPAPgIQANgHAPAAQAQAAANAHQAOAIAKAPQALAZAEARQAFAlAAAXQgCAsgDASQgJAegGAKQgKARgOAHQgNAHgQAAQgPAAgNgHgAgRhoQgIAGgFAMQgHANgEAUQgDAWAAAfQAAAgADAWQAEAUAHANQAFAMAIAFQAIAGAJAAQAKAAAHgGQAJgFAGgMQAGgNAEgUQADgWAAggQAAgfgDgWQgEgUgGgNQgGgMgJgGQgHgEgKgBQgJABgIAEg");
	this.shape_72.setTransform(282.3,-480);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.745)").s().p("AhACBIAAkCIA+AAQANAAANAGQANAEAJAKQAJAKAFANQAFANAAAQQAAAQgFANQgFANgJAKQgJAHgNAFQgNAFgNAAIgiAAIAAB1gAgkgKIAeAAQAJAAAIgDQAIgCAGgHQAGgFADgJQADgJAAgMQAAgMgDgJQgDgJgGgGQgGgGgIgDQgIgDgJABIgeAAg");
	this.shape_73.setTransform(265.8,-480);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.745)").s().p("AAnCBIhPjgIgBAAIAADgIgcAAIAAkCIAtAAIBAC+IABAAIAAi+IAdAAIAAECg");
	this.shape_74.setTransform(681.1,-616.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.745)").s().p("AgdB+QgOgHgJgRQgGgKgJgeQgDgSgCgsQAAgXAFglQAEgSALgYQAJgPAOgIQAOgHAPAAQAQAAANAHQAOAIAKAPQALAYADASQAGAlAAAXQgCAsgEASQgIAegGAKQgKARgOAHQgNAHgQAAQgPAAgOgHgAgQhoQgJAGgGALQgGAOgEAUQgDAXAAAeQAAAgADAWQAEAVAGANQAGALAJAGQAHAEAJAAQAJAAAJgEQAIgGAFgLQAHgNADgVQAEgWAAggQAAgegEgXQgDgUgHgOQgFgLgIgGQgJgEgJAAQgJAAgHAEg");
	this.shape_75.setTransform(663.1,-616.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.745)").s().p("AAlCBIAAh7IhJAAIAAB7IgdAAIAAkCIAdAAIAABxIBJAAIAAhxIAdAAIAAECg");
	this.shape_76.setTransform(645.1,-616.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.745)").s().p("AhACBIAAkCIA+AAQANABANAEQANAFAJAKQAJAKAFAMQAFAOAAAQQAAAQgFANQgFANgJAJQgJAIgNAFQgNAFgNAAIgiAAIAAB1gAgkgJIAeAAQAJAAAIgEQAIgCAGgHQAGgFADgJQADgJAAgMQAAgMgDgJQgDgJgGgGQgGgGgIgDQgIgCgJgBIgeAAg");
	this.shape_77.setTransform(628.7,-616.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.745)").s().p("AgNCBIAAkCIAaAAIAAECg");
	this.shape_78.setTransform(616.2,-616.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.745)").s().p("AgaB/QgMgEgJgKQgIgKgFgNQgFgOAAgQIAaAAQAAALADAKQADAJAFAGQAGAHAIADQAIAEAIgBQAJAAAHgCQAHgEAFgEQAFgGADgIQACgIAAgLQAAgKgEgKQgEgIgIgIQgIgJgagTIgTgMQgKgIgHgIQgHgKgEgKQgFgMAAgNQAAgOAFgMQAEgKAIgIQAJgJALgEQAMgEANAAQANAAALAFQAMAEAIAJQAIAKAFANQAFANABARIgaAAQgBgLgDgIQgCgJgFgGQgFgHgHgDQgHgDgIAAQgIAAgHACQgGADgFAFQgKAJAAAPQAAALAFAJQAEAHAIAIQAHAHAaAUQAbARAJANQAIAKAEALQAFANAAAPQAAAQgFALQgEANgJAJQgIAIgMAEQgNAFgPAAQgOAAgMgGg");
	this.shape_79.setTransform(604.2,-616.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.745)").s().p("AgNCBIAAjqIg1AAIAAgYICFAAIAAAYIg1AAIAADqg");
	this.shape_80.setTransform(581.3,-616.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.745)").s().p("AAnCBIhOjgIgCAAIAADgIgcAAIAAkCIAsAAIBCC+IABAAIAAi+IAcAAIAAECg");
	this.shape_81.setTransform(565.3,-616.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.745)").s().p("Ag8CBIAAkCIB1AAIAAAYIhZAAIAABZIBBAAIAAAWIhBAAIAABkIBdAAIAAAXg");
	this.shape_82.setTransform(548.9,-616.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.745)").s().p("Ag3CBIAAkCIAdAAIAADrIBSAAIAAAXg");
	this.shape_83.setTransform(534.3,-616.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.745)").s().p("AAwCBIgPhMIhAAAIgQBMIgcAAIA5kCIAlAAIA5ECgAAdAdIgdiKIAAAAIgbCKIA4AAg");
	this.shape_84.setTransform(518.4,-616.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.745)").s().p("AAlCBIAAh7IhJAAIAAB7IgdAAIAAkCIAdAAIAABxIBJAAIAAhxIAdAAIAAECg");
	this.shape_85.setTransform(501.4,-616.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.745)").s().p("AAsCBIguhsIgpBsIgfAAIA5iIIg2h6IAeAAIAnBdIAjhdIAfAAIg0B6IA+CIg");
	this.shape_86.setTransform(484.5,-616.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.745)").s().p("Ag8CBIAAkCIB1AAIAAAYIhZAAIAABZIBBAAIAAAWIhBAAIAABkIBdAAIAAAXg");
	this.shape_87.setTransform(469,-616.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.745)").s().p("AAnCCIhOjgIgBAAIAADgIgcAAIAAkCIArAAIBCC9IAAAAIAAi9IAcAAIAAECg");
	this.shape_88.setTransform(641.1,-564.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.745)").s().p("AgdB+QgNgIgKgPQgGgLgIgfQgEgRgCgsQAAgXAGglQADgRALgYQAKgQANgIQAOgHAPAAQARAAANAHQANAIAKAQQALAYAEARQAFAlAAAXQgCAsgDARQgJAfgGALQgKAPgNAIQgNAHgRAAQgPAAgOgHgAgRhnQgIAFgFALQgHANgDAVQgEAWAAAfQAAAgAEAWQADAUAHANQAFANAIAFQAJAEAIAAQAKAAAHgEQAJgFAGgNQAGgNADgUQAEgWAAggQAAgfgEgWQgDgVgGgNQgGgLgJgFQgHgGgKAAQgIAAgJAGg");
	this.shape_89.setTransform(623.1,-564.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.745)").s().p("AAmCCIAAh8IhLAAIAAB8IgcAAIAAkCIAcAAIAABwIBLAAIAAhwIAcAAIAAECg");
	this.shape_90.setTransform(605.1,-564.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.745)").s().p("AhACCIAAkCIA+AAQANAAANAEQANAGAJAJQAJAKAFAMQAFAOAAAQQAAAQgFANQgFANgJAJQgJAIgNAFQgNAFgNAAIgiAAIAAB2gAgkgKIAeAAQAJAAAIgCQAIgEAGgFQAGgGADgJQADgJAAgMQAAgMgDgJQgDgJgGgGQgGgGgIgDQgIgDgJAAIgeAAg");
	this.shape_91.setTransform(588.7,-564.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.745)").s().p("AgMCCIAAkCIAaAAIAAECg");
	this.shape_92.setTransform(576.2,-564.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.745)").s().p("AgaB/QgMgEgJgKQgIgKgFgOQgFgNAAgQIAaAAQAAALADAJQADAKAFAGQAGAGAIAEQAIADAIAAQAJAAAHgDQAHgCAFgGQAFgFADgIQACgIAAgKQAAgLgEgKQgEgHgIgJQgIgIgagUIgTgMQgKgIgHgJQgHgJgEgKQgFgNAAgNQAAgNAFgMQAEgKAIgJQAJgHALgFQAMgEANAAQANAAALAFQAMAFAIAIQAIAKAFANQAFANABAQIgaAAQgBgKgDgIQgCgJgFgGQgFgGgHgEQgHgEgIAAQgIAAgHADQgGADgFAEQgKAKAAAPQAAAKAFAJQAEAJAIAIQAHAGAaAUQAbARAJAMQAIAKAEAMQAFANAAAPQAAAPgFANQgEAMgJAIQgIAJgMAFQgNAEgPAAQgOAAgMgGg");
	this.shape_93.setTransform(564.2,-564.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.745)").s().p("AgNCCIAAjrIg1AAIAAgXICFAAIAAAXIg1AAIAADrg");
	this.shape_94.setTransform(541.3,-564.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.745)").s().p("AAnCCIhPjgIgBAAIAADgIgbAAIAAkCIAsAAIBAC9IABAAIAAi9IAcAAIAAECg");
	this.shape_95.setTransform(525.3,-564.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.745)").s().p("Ag8CCIAAkCIB1AAIAAAXIhZAAIAABZIBBAAIAAAWIhBAAIAABkIBdAAIAAAYg");
	this.shape_96.setTransform(508.9,-564.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.745)").s().p("Ag3CCIAAkCIAdAAIAADqIBSAAIAAAYg");
	this.shape_97.setTransform(494.3,-564.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.745)").s().p("AAwCCIgPhOIhAAAIgQBOIgcAAIA5kCIAlAAIA5ECgAAdAdIgdiKIAAAAIgbCKIA4AAg");
	this.shape_98.setTransform(478.4,-564.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.745)").s().p("AAmCCIAAh8IhLAAIAAB8IgcAAIAAkCIAcAAIAABwIBLAAIAAhwIAcAAIAAECg");
	this.shape_99.setTransform(461.4,-564.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.745)").s().p("AAnCCIhPjgIgBAAIAADgIgbAAIAAkCIAsAAIBAC9IABAAIAAi9IAcAAIAAECg");
	this.shape_100.setTransform(443.4,-564.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.745)").s().p("AgNCCIAAkCIAaAAIAAECg");
	this.shape_101.setTransform(430.5,-564.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgNCCIAAjqIg1AAIAAgYICFAAIAAAYIg1AAIAADqg");
	this.shape_102.setTransform(99.9,143.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgdB+QgOgIgJgPQgGgLgJgfQgDgRgCgsQAAgWAFgmQAEgRALgZQAJgPAOgIQAOgHAPAAQAQAAANAHQAPAIAJAPQALAZADARQAGAmAAAWQgCAsgEARQgIAfgGALQgJAPgPAIQgNAHgQAAQgPAAgOgHgAgQhnQgJAFgGAMQgGAMgEAVQgDAXAAAeQAAAfADAXQAEAVAGAMQAGANAJAEQAHAFAJABQAKgBAIgFQAIgEAFgNQAHgMADgVQAEgXAAgfQAAgegEgXQgDgVgHgMQgFgMgIgFQgIgGgKAAQgJAAgHAGg");
	this.shape_103.setTransform(84,143.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgdB+QgOgIgJgPQgGgLgJgfQgDgRgCgsQAAgWAFgmQAEgRALgZQAJgPAOgIQAOgHAPAAQAQAAANAHQAPAIAJAPQALAZADARQAGAmAAAWQgCAsgEARQgIAfgGALQgJAPgPAIQgNAHgQAAQgPAAgOgHgAgQhnQgJAFgGAMQgGAMgEAVQgDAXAAAeQAAAfADAXQAEAVAGAMQAGANAJAEQAHAFAJABQAKgBAIgFQAIgEAFgNQAHgMADgVQAEgXAAgfQAAgegEgXQgDgVgHgMQgFgMgIgFQgIgGgKAAQgJAAgHAGg");
	this.shape_104.setTransform(66,143.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("Ag3CCIAAkCIBvAAIAAAYIhSAAIAABYIA8AAIAAAVIg8AAIAAB9g");
	this.shape_105.setTransform(50.9,143.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(2,1,1).p("EA4Bg/hQCsCsAIAIUAAJAAJgAJBG8QAAAIk2EuEAxxg3ZQDoDpAIAHUAAHAAIgAHA9HEAglgpzQDUDVAIAHUAAHAAIgAHAlZEgrNgt3QAJAIDJDKQAIAIgIXfEAd7AuBQAIAHDAjPQAFgFgCtdQgBmugCmoEAi7A3GQAIAHDAjPQAIgJAK+FEg2KAg2IAAS8IDUDUEg6OAALMgArA8DIDUDU");
	this.shape_106.setTransform(346.8,-210.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-312.2,-631.1,1037,850.2);


(lib.ClosedMusselAnatomy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.745)").s().p("Ag8CBIAAkCIB1AAIAAAZIhZAAIAABYIBBAAIAAAVIhBAAIAABlIBdAAIAAAXg");
	this.shape.setTransform(680.6,-344.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.745)").s().p("AgbB+QgOgHgJgQQgHgLgIgeQgDgRgCgtQAAgXAFgmQADgRAMgYQAJgPAOgIQAOgHAPAAQASAAANAHQAMAHAIAMQAIALAFAQQAEAOABAQIgcAAIgDgXQgDgMgEgHQgFgJgIgEQgHgEgLgBQgKABgIAFQgJAHgGAMQgFANgDAVQgDAVAAAdQAAAeADAVQADAVAFANQAGANAJAFQAIAHAKAAQAKAAAIgDQAHgDAGgFQAFgGACgHQADgIAAgKIAAglIgjAAIAAgXIA/AAIAAB5IgSAAIgEgTQgIALgLAGQgMAGgQAAQgPAAgOgHg");
	this.shape_1.setTransform(662.9,-344.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.745)").s().p("AhDCBIAAkCIAxAAQATAAAQAHQAIADAHAGQAHAEAFAIQAGAIAEAJQAFAKADANQAGAmAAAXQgCAtgEARQgDAMgFAKQgEAKgGAIQgFAHgHAFQgHAGgIADQgQAGgTAAgAgmBqIAPAAQAQAAAJgFQANgEAIgLQAIgMAEgUQAFgWAAggQAAgfgFgVQgEgVgIgMQgIgLgNgFQgJgDgQAAIgPAAg");
	this.shape_2.setTransform(645.3,-344.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.745)").s().p("AgNCBIAAkCIAaAAIAAECg");
	this.shape_3.setTransform(632.2,-344.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.745)").s().p("AAmCBIgoh7IgkACIAAB5IgdAAIAAkCIA/AAQAOABANAEQANAFAJAIQAKAJAFANQAFAMAAAQQAAALgCAKQgDAKgFAIQgFAIgIAHQgIAGgKACIAsCAgAgmgOIAYAAQAOAAAJgDQALgDAGgGQAGgGADgIQACgIAAgLQAAgMgCgIQgDgIgGgGQgGgGgLgDQgJgDgOABIgYAAg");
	this.shape_4.setTransform(619.3,-344.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.745)").s().p("AAmCCIgoh8IgkACIAAB6IgdAAIAAkDIA/AAQAOABANAEQANAEAJAJQAKAJAFAMQAFANAAAQQAAALgCAKQgDAKgFAIQgFAJgIAFQgIAHgKACIAsCBgAgmgOIAYAAQAOAAAJgEQALgDAGgFQAGgGADgIQACgJAAgKQAAgMgCgIQgDgJgGgFQgGgGgLgDQgJgCgOAAIgYAAg");
	this.shape_5.setTransform(743.1,-382.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.745)").s().p("AgcB+QgPgIgJgPQgGgLgJgfQgDgRgCgsQAAgWAFgmQAEgRALgZQAJgPAPgIQANgHAPAAQAQAAANAHQAPAIAJAPQALAZAEARQAFAmAAAWQgCAsgDARQgJAfgGALQgJAPgPAIQgNAHgQAAQgPAAgNgHgAgRhnQgIAFgGAMQgGAMgEAVQgDAXAAAeQAAAfADAXQAEAVAGAMQAGANAIAEQAJAFAIABQAJgBAIgFQAJgEAGgNQAGgMAEgVQADgXAAgfQAAgegDgXQgEgVgGgMQgGgMgJgFQgIgGgJAAQgIAAgJAGg");
	this.shape_6.setTransform(725,-382.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.745)").s().p("AgMCCIAAkDIAaAAIAAEDg");
	this.shape_7.setTransform(712,-382.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.745)").s().p("AAmCCIgoh8IgkACIAAB6IgdAAIAAkDIA/AAQAOABANAEQANAEAJAJQAKAJAFAMQAFANAAAQQAAALgCAKQgDAKgFAIQgFAJgIAFQgIAHgKACIAsCBgAgmgOIAYAAQAOAAAJgEQALgDAGgFQAGgGADgIQACgJAAgKQAAgMgCgIQgDgJgGgFQgGgGgLgDQgJgCgOAAIgYAAg");
	this.shape_8.setTransform(699.2,-382.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.745)").s().p("Ag8CCIAAkDIB1AAIAAAZIhZAAIAABYIBBAAIAAAVIhBAAIAABlIBdAAIAAAYg");
	this.shape_9.setTransform(682.6,-382.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.745)").s().p("AgNCCIAAjqIg1AAIAAgZICFAAIAAAZIg1AAIAADqg");
	this.shape_10.setTransform(667,-382.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.745)").s().p("AgaCAQgMgGgJgJQgIgKgFgOQgFgNAAgRIAaAAQAAAMADAJQADAJAFAHQAGAHAIADQAIAEAIAAQAJAAAHgEQAHgCAFgGQAFgFADgIQACgIAAgKQAAgLgEgJQgEgJgIgIQgIgIgagUIgTgMQgKgIgHgJQgHgJgEgLQgFgMAAgNQAAgNAFgLQAEgLAIgJQAJgHALgFQAMgEANAAQANAAALAEQAMAGAIAJQAIAIAFANQAFAOABAQIgaAAQgBgKgDgIQgCgJgFgGQgFgGgHgDQgHgFgIAAQgIAAgHAEQgGACgFAEQgKAKAAAPQAAALAFAIQAEAIAIAIQAHAIAaATQAbARAJAMQAIALAEALQAFANAAAPQAAAQgFALQgEANgJAIQgIAJgMAFQgNAEgPAAQgOAAgMgFg");
	this.shape_11.setTransform(652,-382.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.745)").s().p("AgdB+QgOgIgJgPQgGgLgJgfQgDgRgCgsQAAgWAFgmQAEgRALgZQAJgPAOgIQANgHAQAAQAQAAANAHQAOAIAKAPQALAZADARQAGAmAAAWQgCAsgEARQgIAfgGALQgKAPgOAIQgNAHgQAAQgQAAgNgHgAgQhnQgJAFgGAMQgGAMgEAVQgDAXAAAeQAAAfADAXQAEAVAGAMQAGANAJAEQAHAFAJABQAJgBAJgFQAIgEAFgNQAHgMADgVQAEgXAAgfQAAgegEgXQgDgVgHgMQgFgMgIgFQgJgGgJAAQgJAAgHAGg");
	this.shape_12.setTransform(635.1,-382.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.745)").s().p("AhACCIAAkDIA+AAQANAAANAGQANAEAJAKQAJAJAFAOQAFANAAAQQAAAQgFANQgFAOgJAJQgJAHgNAFQgNAFgNAAIgiAAIAAB2gAgkgKIAeAAQAJAAAIgCQAIgEAGgFQAGgGADgJQADgJAAgMQAAgMgDgJQgDgJgGgGQgGgGgIgDQgIgCgJAAIgeAAg");
	this.shape_13.setTransform(618.7,-382.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.745)").s().p("AgdB+QgOgHgJgRQgGgKgJgeQgDgSgCgsQAAgXAFglQAEgSALgXQAJgQAOgIQAOgHAPAAQAQAAANAHQAPAIAJAQQALAXADASQAGAlAAAXQgCAsgEASQgIAegGAKQgJARgPAHQgNAHgQAAQgPAAgOgHgAgQhoQgJAGgGALQgGAOgEAUQgDAXAAAeQAAAfADAXQAEAUAGAOQAGALAJAGQAHAEAJAAQAKAAAIgEQAIgGAFgLQAHgOADgUQAEgXAAgfQAAgegEgXQgDgUgHgOQgFgLgIgGQgIgEgKAAQgJAAgHAEg");
	this.shape_14.setTransform(84,-503.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.745)").s().p("AhDCBIAAkBIBEAAQAOAAAMAEQALAEAIAKQAIAHAEANQAEAMAAAOQAAAJgCAKQgDAIgEAIQgFAIgIAFQgHAGgLADIAAABQAMADAJAEQAIAGAGAJQAFAIADALQADAKAAAMQAAATgFANQgFAOgLAIQgKAKgQAEQgQAFgTgBgAgmBqIAcAAQALAAAJgDQAKgDAGgGQAHgGADgJQAEgJAAgNQAAgMgDgKQgDgKgHgHQgGgGgKgEQgKgDgLAAIgcAAgAgmgRIAPAAQAQAAAJgCQALgDAHgFQAHgGADgJQAEgJAAgNQAAgLgDgIQgCgIgGgFQgFgEgJgDQgJgCgKAAIgcAAg");
	this.shape_15.setTransform(66.1,-503.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.745)").s().p("AA/CBIAAjsIgBAAIg2DsIgQAAIg2jsIgBAAIAADsIgaAAIAAkBIAtAAIAsDCIAAAAIAsjCIAtAAIAAEBg");
	this.shape_16.setTransform(46,-503.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.745)").s().p("AgcB+QgNgFgIgKQgIgJgEgOQgEgNAAgQIAAi9IAdAAIAAC9QACAZAFAJQAEAHAIAEQAHAEAKAAQAKAAAIgEQAHgEAFgHQAFgJACgZIAAi9IAdAAIAAC9QAAAQgEANQgEAOgIAJQgIAKgNAFQgNAFgQAAQgPAAgNgFg");
	this.shape_17.setTransform(26,-502.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAbCCIgehsIgXABIAABrIgtAAIAAkCIA/AAQARAAANADQAPAFAJAJQAKAKAFAOQAEAPAAAUQAAAQgCALQgDALgFAIQgEAGgGAFQgEAEgHADIAmB2gAgagMIAPAAQAKAAAEgBQAGgCAEgFQAEgFACgHQACgIgBgMQABgLgCgIQgCgIgEgEQgEgFgGgCQgEgBgKgBIgPAAg");
	this.shape_18.setTransform(-93.8,-222);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdCAQgMgFgJgKQgJgJgEgLQgEgMAAgOIAAiEQAAgOAEgNQAEgMAJgIQAJgKAMgFQANgFAQAAQARAAANAFQAMAFAJAKQAIAIAFAMQAEANAAAOIAACEQAAAOgEAMQgFALgIAJQgJAKgMAFQgNAFgRAAQgQAAgNgFgAgRhWQgFAHAAAOIAACDQAAAOAFAHQAFAHAMAAQAMAAAGgHQAFgHAAgOIAAiDQAAgOgFgHQgGgHgMAAQgMAAgFAHg");
	this.shape_19.setTransform(-112.2,-222);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVCCIAAkCIArAAIAAECg");
	this.shape_20.setTransform(-126.2,-222);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAbCCIgehsIgXABIAABrIgtAAIAAkCIA/AAQARAAANADQAPAFAKAJQAJAKAEAOQAGAPgBAUQAAAQgCALQgDALgEAIQgFAGgGAFQgFAEgGADIAmB2gAgagMIAPAAQAKAAAEgBQAGgCAEgFQAEgFACgHQABgIAAgMQAAgLgBgIQgCgIgEgEQgEgFgGgCQgEgBgKgBIgPAAg");
	this.shape_21.setTransform(-139.8,-222);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag9CCIAAkCIB2AAIAAAmIhJAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape_22.setTransform(-156.8,-222);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_23.setTransform(-172.1,-222);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAdCCIg3ihIgBAAIAAChIgoAAIAAkCIApAAIA1CSIABAAIAAiSIAoAAIAAECg");
	this.shape_24.setTransform(-188.1,-222);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA2AAIAwECgAARAhIgRhtIAAAAIgRBtIAiAAg");
	this.shape_25.setTransform(-205.1,-222);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAbCCIgehsIgXABIAABrIgtAAIAAkDIA/AAQARAAANAEQAPAFAJAJQAKAJAFAPQAEAOAAAWQAAAPgCALQgDALgEAIQgFAGgGAEQgEAFgHADIAmB2gAgagMIAPAAQAKAAAEgBQAGgCAEgFQAEgFACgHQACgIgBgLQABgNgCgHQgCgIgEgFQgEgEgGgCQgEgBgKgBIgPAAg");
	this.shape_26.setTransform(732.4,-230);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdCAQgNgFgIgKQgJgJgEgLQgEgMAAgOIAAiFQAAgNAEgNQAEgMAJgIQAJgKAMgFQANgFAQAAQARAAANAFQAMAFAJAKQAIAIAFAMQAEANAAANIAACFQAAAOgEAMQgFALgIAJQgJAKgMAFQgNAFgRAAQgQAAgNgFgAgRhWQgFAHAAAOIAACDQAAAOAFAHQAFAHAMAAQAMAAAGgHQAFgHAAgOIAAiDQAAgOgFgHQgGgHgMAAQgMAAgFAHg");
	this.shape_27.setTransform(714,-230);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVCCIAAkDIArAAIAAEDg");
	this.shape_28.setTransform(700,-230);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAbCCIgehsIgXABIAABrIgtAAIAAkDIA/AAQARAAANAEQAPAFAKAJQAJAJAEAPQAGAOAAAWQAAAPgDALQgDALgEAIQgFAGgGAEQgFAFgGADIAmB2gAgagMIAPAAQAKAAAEgBQAGgCAEgFQAEgFACgHQABgIABgLQgBgNgBgHQgCgIgEgFQgEgEgGgCQgEgBgKgBIgPAAg");
	this.shape_29.setTransform(686.4,-230);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag9CCIAAkDIB2AAIAAAnIhJAAIAABEIA4AAIAAAkIg4AAIAABNIBOAAIAAAng");
	this.shape_30.setTransform(669.4,-230);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVCCIAAjcIgrAAIAAgnICBAAIAAAnIgrAAIAADcg");
	this.shape_31.setTransform(654.1,-230);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgcCAQgMgGgJgKQgIgKgFgOQgFgMAAgPIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgIgEgKQgEgHgGgHQgGgIgXgUIgRgOQgJgIgGgJQgGgLgEgKQgEgMAAgNQAAgPAFgMQAEgNAJgIQAJgJANgEQANgEAOAAQAOAAALAFQAKAEAIAJQAIAIAFAMQAFALABAOIgqAEQgBgOgIgIQgGgGgJAAQgJAAgGAHQgFAGAAANQAAAHAEAIQADAHAHAHQAFAGAYAWQAXATAIANQAHAKADAKQAEAMAAANQAAAPgFANQgFAMgJAJQgKAJgNAEQgNAEgNAAQgPAAgNgFg");
	this.shape_32.setTransform(639,-230);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgdCAQgMgFgJgKQgJgJgEgLQgEgMAAgOIAAiFQAAgNAEgNQAEgMAJgIQAJgKAMgFQANgFAQAAQAQAAAOAFQANAFAIAKQAJAIAEAMQAEANAAANIAACFQAAAOgEAMQgEALgJAJQgIAKgNAFQgOAFgQAAQgQAAgNgFgAgRhWQgFAHAAAOIAACDQAAAOAFAHQAFAHAMAAQAMAAAGgHQAFgHAAgOIAAiDQAAgOgFgHQgGgHgMAAQgMAAgFAHg");
	this.shape_33.setTransform(622.1,-230);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhHCCIAAkDIBAAAQATAAAPAEQAPAFAKAJQAKAJAFAPQAFAOAAAWQAAAUgFAOQgFAQgKAGQgKAKgPAEQgPAEgTAAIgTAAIAABrgAgagMIARAAQAJAAAIgBQAGgCAFgFQAEgFADgHQABgIAAgLQAAgNgBgHQgDgIgEgFQgFgEgGgCQgIgBgJgBIgRAAg");
	this.shape_34.setTransform(604.5,-230);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag4CBIAAkCIAsAAIAADcIBFAAIAAAmg");
	this.shape_35.setTransform(363.7,-447);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAgCBIgIg5IgvAAIgIA5IgrAAIAwkCIA1AAIAwECgAASAhIgShuIAAAAIgQBuIAiAAg");
	this.shape_36.setTransform(348,-447);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgcB/QgMgFgJgLQgIgJgFgNQgFgNAAgPIAqgGQACATAHAKQAHAKAJAAQAMAAAHgGQAHgGAAgLQAAgKgEgIQgEgIgGgIQgGgHgXgUIgRgOQgJgJgGgJQgGgKgEgKQgEgMAAgNQAAgPAFgNQAEgMAJgIQAJgIANgFQANgEAOAAQAOAAALAFQAKAEAIAJQAIAIAFALQAFAMABAOIgqAEQgBgPgIgHQgGgGgJAAQgJAAgGAGQgFAHAAAMQAAAJAEAHQADAHAHAHQAFAGAYAXQAXASAIAMQAHALADAKQAEAMAAAMQAAAQgFANQgFAMgJAJQgKAIgNAFQgNAEgNAAQgPAAgNgGg");
	this.shape_37.setTransform(331.9,-447);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAaCBIgdhrIgXABIAABqIgtAAIAAkCIA/AAQARABAOAEQAOAEAJAJQAKAKAFAOQAEAPAAAVQAAAOgCAMQgDALgFAIQgEAGgGAEQgFAFgGACIAmB2gAgagMIAQAAQAJAAAEgCQAGgCAFgEQADgFACgIQABgHAAgLQAAgMgBgIQgCgHgDgGQgFgEgGgCQgEgCgJAAIgQAAg");
	this.shape_38.setTransform(315.5,-447);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgdCAQgMgFgJgKQgIgIgFgNQgEgMAAgOIAAiEQAAgOAEgMQAFgLAIgKQAJgJAMgEQANgGAQAAQAQAAAOAGQAMAEAJAJQAIAKAFALQAEAMAAAOIAACEQAAAOgEAMQgFANgIAIQgJAKgMAFQgOAFgQAAQgQAAgNgFgAgRhWQgFAGAAAPIAACCQAAAQAFAGQAFAHAMAAQAMAAAGgHQAFgGAAgQIAAiCQAAgPgFgGQgGgHgMAAQgMAAgFAHg");
	this.shape_39.setTransform(297.1,-447);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhDCBIAAkCIBCAAQAQABANAFQANAEAJAKQAJAKAFAOQAEAPAAAUIAABlQAAAUgEAOQgFAPgJAKQgJAKgNAFQgNAFgQgBgAgWBdIAPAAQAHAAAGgCQAGgCAEgEQAEgFACgHIABgRIAAhwIgBgQQgCgIgEgEQgEgEgGgCQgGgCgHAAIgPAAg");
	this.shape_40.setTransform(279.1,-447);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag4CBIAAkCIAtAAIAADcIBEAAIAAAmg");
	this.shape_41.setTransform(567.7,57.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAgCBIgIg5IgvAAIgIA5IgrAAIAvkCIA2AAIAwECgAARAhIgRhuIAAAAIgRBuIAiAAg");
	this.shape_42.setTransform(552,57.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAbCBIgehrIgXABIAABqIgtAAIAAkCIA/AAQARABANAEQAPAEAJAJQAKAJAFAPQAEAOAAAWQAAAPgCALQgDALgFAIQgEAGgGAEQgEAFgHACIAmB2gAgagMIAQAAQAJAAAEgCQAGgCAEgEQAEgFACgIQABgHAAgLQAAgMgBgIQgCgHgEgGQgEgEgGgCQgEgBgJAAIgQAAg");
	this.shape_43.setTransform(535.4,57.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVCBIAAjaIgrAAIAAgoICBAAIAAAoIgsAAIAADag");
	this.shape_44.setTransform(519,57.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAdCBIg3igIAAAAIAACgIgpAAIAAkCIAqAAIA0CTIAAAAIAAiTIApAAIAAECg");
	this.shape_45.setTransform(503,57.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ag9CBIAAkCIB2AAIAAAoIhJAAIAABCIA4AAIAAAmIg4AAIAABMIBOAAIAAAmg");
	this.shape_46.setTransform(486.4,57.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVCBIg2kCIAsAAIAfCzIAAAAIAgizIAsAAIg2ECg");
	this.shape_47.setTransform(470.1,57.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgaCAQgMgGgJgJQgIgKgFgNQgFgOAAgRIAaAAQAAAMADAKQADAIAFAHQAGAGAIAEQAIADAIABQAJAAAHgDQAHgEAFgEQAFgGADgIQACgIAAgLQAAgKgEgJQgEgJgIgIQgIgIgagUIgTgMQgKgJgHgHQgHgKgEgLQgFgLAAgNQAAgOAFgLQAEgMAIgHQAJgJALgEQAMgEANAAQANAAALAEQAMAGAIAJQAIAJAFAMQAFAOABARIgaAAQgBgLgDgIQgCgJgFgGQgFgGgHgDQgHgEgIgBQgIABgHADQgGACgFAFQgKAJAAAPQAAALAFAIQAEAJAIAHQAHAHAaAUQAbARAJANQAIAJAEAMQAFANAAAPQAAAPgFAMQgEANgJAJQgIAIgMAFQgNAEgPAAQgOAAgMgFg");
	this.shape_48.setTransform(540.8,221.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ag8CBIAAkCIB1AAIAAAZIhZAAIAABYIBBAAIAAAVIhBAAIAABlIBdAAIAAAXg");
	this.shape_49.setTransform(525.4,221.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAnCBIhOjfIgBAAIAADfIgcAAIAAkCIArAAIBCC+IAAAAIAAi+IAcAAIAAECg");
	this.shape_50.setTransform(507.9,221.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMCBIAAkCIAaAAIAAECg");
	this.shape_51.setTransform(495,221.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag3CBIAAkCIAdAAIAADrIBSAAIAAAXg");
	this.shape_52.setTransform(484.9,221.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAlCBIAAh8IhJAAIAAB8IgdAAIAAkCIAdAAIAABxIBJAAIAAhxIAdAAIAAECg");
	this.shape_53.setTransform(460,221.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgNCBIAAjpIg1AAIAAgZICFAAIAAAZIg1AAIAADpg");
	this.shape_54.setTransform(444,221.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAqCBIgpjKIgBAAIgnDKIgYAAIgrkCIAaAAIAfDKIABAAIAmjKIAVAAIApDKIABAAIAcjKIAaAAIgqECg");
	this.shape_55.setTransform(426,221.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgdB+QgOgHgJgRQgGgKgJgeQgDgSgCgsQAAgXAFglQAEgRALgZQAJgPAOgIQANgHAQAAQAQAAANAHQAOAIAKAPQALAZADARQAGAlAAAXQgCAsgEASQgIAegGAKQgKARgOAHQgNAHgQAAQgQAAgNgHgAgQhoQgJAGgGAMQgGANgDAUQgEAWAAAfQAAAgAEAWQADAUAGANQAGAMAJAFQAHAGAJAAQAJAAAJgGQAIgFAFgMQAHgNADgUQAEgWAAggQAAgfgEgWQgDgUgHgNQgFgMgIgGQgJgEgJgBQgJABgHAEg");
	this.shape_56.setTransform(406.1,221.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAmCBIgoh7IgkACIAAB5IgdAAIAAkCIA/AAQAOABANAEQANAFAJAIQAKAJAFANQAFAMAAAQQAAALgCAKQgDAKgFAIQgFAIgIAHQgIAGgKACIAsCAgAgmgOIAYAAQAOAAAJgDQALgDAGgGQAGgGADgIQACgIAAgLQAAgMgCgIQgDgIgGgGQgGgGgLgDQgJgDgOABIgYAAg");
	this.shape_57.setTransform(388.2,221.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgbB+QgOgHgJgQQgHgLgIgeQgDgRgCgtQAAgXAFgmQADgRAMgYQAJgPAOgIQAOgHAPAAQASAAANAHQAMAHAIAMQAIALAFAQQAEAOABAQIgcAAIgDgXQgDgMgEgHQgFgJgIgEQgHgEgLgBQgKABgIAFQgJAHgGAMQgFANgDAVQgDAVAAAdQAAAeADAVQADAVAFANQAGANAJAFQAIAHAKAAQAKAAAIgDQAHgDAGgFQAFgGACgHQADgIAAgKIAAglIgjAAIAAgXIA/AAIAAB5IgSAAIgEgTQgIALgLAGQgMAGgQAAQgPAAgOgHg");
	this.shape_58.setTransform(369.9,221.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("ABACBIAAjsIgBAAIg2DsIgRAAIg1jsIgBAAIAADsIgaAAIAAkCIAtAAIArDDIAAAAIAtjDIAtAAIAAECg");
	this.shape_59.setTransform(603.8,166.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgdB+QgMgFgIgKQgIgJgEgOQgEgNAAgQIAAi9IAcAAIAAC9QADAZAFAJQAEAHAIAEQAHAEAKAAQAKAAAJgEQAGgEAFgHQAGgJACgZIAAi9IAcAAIAAC9QAAAQgEANQgEAOgIAJQgIAKgNAFQgNAFgQAAQgQAAgNgFg");
	this.shape_60.setTransform(583.8,166.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgbB+QgPgHgJgQQgHgLgIgeQgDgRgCgtQAAgXAFgmQADgRAMgYQAJgQAPgHQANgHAQAAQAPAAALAFQAMAFAIAKQAJAKAFAQQAFAPACAVIgcAAQgCgPgDgLQgDgMgFgGQgFgIgGgDQgHgEgIAAQgKABgJAFQgJAGgGANQgGANgCAWQgDAUAAAdQAAAeADAVQACAVAGANQAGAMAJAGQAJAHAKAAQAKgBAIgDQAHgEAGgIQAFgHADgNQADgNAAgSIAcAAQAAAVgFASQgFAQgIAMQgJALgNAGQgNAGgRAAQgQAAgNgHg");
	this.shape_61.setTransform(565.7,166.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAwCBIgPhNIhAAAIgQBNIgcAAIA5kCIAlAAIA5ECgAAdAdIgdiKIAAAAIgbCKIA4AAg");
	this.shape_62.setTransform(548.8,166.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAmCBIgoh7IgkACIAAB5IgdAAIAAkCIA/AAQAOABANAEQANAEAJAJQAKAJAFAMQAFANAAAQQAAALgCAKQgDAKgFAIQgFAIgIAHQgIAGgKACIAsCAgAgmgOIAYAAQAOAAAJgEQALgDAGgFQAGgGADgIQACgIAAgLQAAgMgCgIQgDgJgGgFQgGgGgLgDQgJgDgOABIgYAAg");
	this.shape_63.setTransform(532,166.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgNCBIAAjpIg1AAIAAgZICFAAIAAAZIg1AAIAADpg");
	this.shape_64.setTransform(515.8,166.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgaCAQgMgGgJgJQgIgKgFgNQgFgOAAgRIAaAAQAAAMADAKQADAIAFAHQAGAGAIAEQAIADAIABQAJAAAHgEQAHgDAFgEQAFgGADgIQACgIAAgKQAAgLgEgJQgEgJgIgIQgIgIgagUIgTgMQgKgJgHgIQgHgJgEgLQgFgMAAgNQAAgNAFgLQAEgMAIgHQAJgJALgEQAMgEANAAQANAAALAEQAMAGAIAJQAIAIAFANQAFAOABARIgaAAQgBgLgDgIQgCgJgFgGQgFgGgHgDQgHgFgIAAQgIAAgHAEQgGACgFAEQgKAKAAAPQAAAKAFAJQAEAJAIAHQAHAIAaATQAbARAJANQAIAKAEALQAFANAAAPQAAAPgFAMQgEANgJAIQgIAJgMAFQgNAEgPAAQgOAAgMgFg");
	this.shape_65.setTransform(500.8,166.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgdB+QgOgHgJgRQgGgKgJgfQgDgRgCgsQAAgWAFgmQAEgRALgZQAJgPAOgIQANgHAQAAQAQAAANAHQAOAIAKAPQALAZADARQAGAmAAAWQgCAsgEARQgIAfgGAKQgKARgOAHQgNAHgQAAQgQAAgNgHgAgQhnQgJAFgGAMQgGAMgEAVQgDAWAAAfQAAAfADAXQAEAVAGAMQAGANAJAEQAHAGAJAAQAJAAAJgGQAIgEAFgNQAHgMADgVQAEgXAAgfQAAgfgEgWQgDgVgHgMQgFgMgIgFQgJgFgJgBQgJABgHAFg");
	this.shape_66.setTransform(483.9,166.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgNCBIAAkCIAaAAIAAECg");
	this.shape_67.setTransform(471,166.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAmCBIgoh7IgkACIAAB5IgdAAIAAkCIA/AAQAOABANAEQANAEAJAJQAKAJAFAMQAFANAAAQQAAALgCAKQgDAKgFAIQgFAIgIAHQgIAGgKACIAsCAgAgmgOIAYAAQAOAAAJgEQALgDAGgFQAGgGADgIQACgIAAgLQAAgMgCgIQgDgJgGgFQgGgGgLgDQgJgDgOABIgYAAg");
	this.shape_68.setTransform(458.1,166.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Ag8CBIAAkCIB1AAIAAAZIhZAAIAABYIBBAAIAAAVIhBAAIAABlIBdAAIAAAXg");
	this.shape_69.setTransform(441.5,166.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AhACBIAAkCIA+AAQANAAANAGQANAEAJAKQAJAJAFAOQAFANAAAQQAAAQgFANQgFANgJAKQgJAHgNAFQgNAFgNAAIgiAAIAAB1gAgkgKIAeAAQAJAAAIgDQAIgDAGgFQAGgGADgJQADgJAAgMQAAgMgDgJQgDgJgGgGQgGgGgIgDQgIgDgJABIgeAAg");
	this.shape_70.setTransform(425.6,166.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgNCCIAAjqIg1AAIAAgYICFAAIAAAYIg1AAIAADqg");
	this.shape_71.setTransform(99.9,143.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgdB+QgOgIgJgPQgGgLgJgfQgDgRgCgsQAAgWAFgmQAEgRALgZQAJgPAOgIQAOgHAPAAQAQAAANAHQAPAIAJAPQALAZADARQAGAmAAAWQgCAsgEARQgIAfgGALQgJAPgPAIQgNAHgQAAQgPAAgOgHgAgQhnQgJAFgGAMQgGAMgEAVQgDAXAAAeQAAAfADAXQAEAVAGAMQAGANAJAEQAHAFAJABQAKgBAIgFQAIgEAFgNQAHgMADgVQAEgXAAgfQAAgegEgXQgDgVgHgMQgFgMgIgFQgIgGgKAAQgJAAgHAGg");
	this.shape_72.setTransform(84,143.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgdB+QgOgIgJgPQgGgLgJgfQgDgRgCgsQAAgWAFgmQAEgRALgZQAJgPAOgIQAOgHAPAAQAQAAANAHQAPAIAJAPQALAZADARQAGAmAAAWQgCAsgEARQgIAfgGALQgJAPgPAIQgNAHgQAAQgPAAgOgHgAgQhnQgJAFgGAMQgGAMgEAVQgDAXAAAeQAAAfADAXQAEAVAGAMQAGANAJAEQAHAFAJABQAKgBAIgFQAIgEAFgNQAHgMADgVQAEgXAAgfQAAgegEgXQgDgVgHgMQgFgMgIgFQgIgGgKAAQgJAAgHAGg");
	this.shape_73.setTransform(66,143.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ag3CCIAAkCIBvAAIAAAYIhSAAIAABYIA8AAIAAAVIg8AAIAAB9g");
	this.shape_74.setTransform(50.9,143.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgmRgRkQACAIC8C2QACACgCPvEAmSABLQACAHiiCZQgIAHAINz");
	this.shape_75.setTransform(352.9,-388.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(2,1,1).p("Acb5xMgAoAnpIDUDUA/GpDIAAS6IDUDUAT1xLMgAoAnpIDUDU");
	this.shape_76.setTransform(199.2,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.1,-518.1,1197.4,764.2);


(lib.LifeCycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FDAE7").s().p("AhJhKICTAHIgBAYIh5gEIAFB5IgaABg");
	this.shape.setTransform(41.6,95.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9FDAE7").s().p("Ai0AyQhUglg9hBIATgRQA6A/BOAhQBPAjBVAAQBaAABSgnQBSglA6hIIAUAQQg+BKhXApQhYAqhfAAQhbAAhTglg");
	this.shape_1.setTransform(67.5,96.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9FDAE7").s().p("AhKBCIB1ghIgphyIAXgIIAyCMIiPAng");
	this.shape_2.setTransform(82.6,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9FDAE7").s().p("Ak2CLQAuiBBvhNQBxhPCGAAQB2AABjA6IgMAWQhfg3huAAQh+AAhqBLQhpBIgrB5g");
	this.shape_3.setTransform(57.3,34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9FDAE7").s().p("AgkEBQgyAAgjgDQgzgCgfgYQgUgPgGgWQgBgFgDgBQgXgMgCggQgBgfAMgwQAPg8AqhOQAlhHAUgjQAbgwAmgSQAXgLAYAEQAWADAPARQAZAagDArQgEBKglBSQgcA9gtA0IAvgQIAvgQQBVgXBJADQAiABAbAOQAYAOgCAZQgFA2gWAaQgYAegyAQQhSAahoAAIgIAAgAhGjtQglAdgWA5QgOAigmBpIgXBAQgNAmgGAeIgDAUQAAAPAIAGQAIAGAPgFIAHgDIA+giQAagPAMgJQAPgLAMgRIAVghQAZgpAWhGQASg2ADgcQAFgrgWgeQgNgVgYgDIgIgBQgUAAgQAOgAC0A9QgnACg6AIIg3ANQBBADAOBAQBJgPA4gWQAHgDgCgHQgGgVgQgLQgPgLgVAAIgDAAg");
	this.shape_4.setTransform(81.8,72.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9FDAE7").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_5.setTransform(25.6,75.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9FDAE7").s().p("AgTAUQgKgIABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAIAJABALQgBAMgIAIQgJAJgMAAQgLAAgIgJg");
	this.shape_6.setTransform(36.1,79.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9FDAE7").s().p("AiFCVQgsgWAAgbQgzgFg2gQQhsghgOg5QAAgNAfgUQA/gnCdghQACgGAGgHQALgPARgJQA1gcBWAqIAmgMQAsgLAfgBQBigBhNBzIBNAXQAOgSAYgTQAwglAzgCQAygCgUAuQgKAXgUAYIAJANQALATAEAQQANA0g2ALQgTgBgVgGQgqgLgIgYQgRgDgWgBQgagCgTACQgCgcgQgVQgPgTgYgDQgZgDgTAQQglAbgWA5IgEAKIhzAAIAKBLQgVgGgWgKgACwBaIADAEQALAigdAVQALgjAEgYg");
	this.shape_7.setTransform(66.8,49.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9FDAE7").s().p("AgaAbQgLgLAAgQQAAgOALgMQALgLAPAAQAPAAAMALQALAMAAAOQAAAQgLALQgMALgPAAQgPAAgLgLg");
	this.shape_8.setTransform(30.2,65.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Am1G2Qi1i2gBkAQABkAC1i1QC2i1D/gBQEAABC2C1QC1C1AAEAQAAEAi1C2Qi2C2kAgBQj/ABi2i2g");
	this.shape_9.setTransform(66.8,62);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyBsIAAjXIBiAAIAAAhIg9AAIAAA4IAuAAIAAAeIguAAIAABAIBAAAIAAAgg");
	this.shape_10.setTransform(121.3,163.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguBsIAAjXIAlAAIAAC3IA5AAIAAAgg");
	this.shape_11.setTransform(109.1,163.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpBfQgNgPAAgYIAAhuQAAgZANgOQAPgRAbAAQAaAAAPASQANAQAAAaIAAAQIgkAAIAAgRQgBgNgFgHQgFgGgHAAQgTAAABAYIAABsQgBAYATAAQARAAABgWIAAgaIAkAAIAAAZQAAAYgNAPQgPAQgaAAQgbAAgPgQg");
	this.shape_12.setTransform(95.1,163.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRBsIAAhaIgth9IAmAAIAYBSIABAAIAYhSIAmAAIgtB9IAABag");
	this.shape_13.setTransform(81,163.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoBfQgOgPgBgYIAAhuQABgZAOgOQAOgRAaAAQAbAAAPASQAOAQAAAaIAAAQIgmAAIAAgRQABgNgGgHQgFgGgIAAQgIAAgFAGQgFAFAAANIAABsQAAAMAFAGQAFAGAIAAQATAAgBgWIAAgaIAmAAIAAAZQAAAYgOAPQgPAQgbAAQgaAAgOgQg");
	this.shape_14.setTransform(66.8,163.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyBsIAAjXIBhAAIAAAhIg9AAIAAA4IAuAAIAAAeIguAAIAABAIBBAAIAAAgg");
	this.shape_15.setTransform(46.4,163.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyBsIAAjXIBlAAIAAAhIhAAAIAAA4IAwAAIAAAeIgwAAIAABgg");
	this.shape_16.setTransform(33,163.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBsIAAjXIAjAAIAADXg");
	this.shape_17.setTransform(21.9,163.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AguBsIAAjXIAlAAIAAC3IA4AAIAAAgg");
	this.shape_18.setTransform(12.4,163.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.8,0,124,174.3);


(lib.InvisibleButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(7,7,7,0.008)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoVAKIAAgTIQsAAIAAATg");
	this.shape.setTransform(228,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoWAKIAAgTIQtAAIAAATg");
	this.shape_1.setTransform(53.5,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3BVIAAipIBvAAIAAAeIhOAAIAAAoIBCAAIAAAcIhCAAIAAApIBOAAIAAAeg");
	this.shape_2.setTransform(156.8,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBVIAAhIIg3AAIAABIIgiAAIAAipIAiAAIAABGIA3AAIAAhGIAiAAIAACpg");
	this.shape_3.setTransform(140.4,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBVIAAiLIgtAAIAAgeIB5AAIAAAeIgtAAIAACLg");
	this.shape_4.setTransform(124.7,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiXFaIAAqzIB3AAIAAJLIC5AAIAABog");
	this.shape_5.setTransform(263.8,156.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AikFaIAAqzIE8AAIAABoIjFAAIAACyICXAAIAABmIiXAAIAADLIDTAAIAABog");
	this.shape_6.setTransform(220.6,156.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiFErQgtg2gEhRIBxgRQAEAzAUAcQASAaAbAAQAgAAATgQQASgRABgeQgBgtglgsQgRgShBg5Qg5gugagmQgmg4ABhDQgBhSAxguQAwgtBWAAQBHAAAsAwQAqAsAIBMIhyANQgDgpgTgUQgRgQgYAAQgaAAgQASQgPARAAAhQAAAnAmApQANAPBEA8QA5AwAaAmQAmA4AABAQAABUg0AwQgzAuhTAAQhQAAgyg5g");
	this.shape_7.setTransform(174.3,156.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiEErQgug2gEhRIBxgRQAEAzATAcQATAaAbAAQAgAAATgQQATgRAAgeQAAgtgmgsQgQgShBg5Qg6gugZgmQgmg4AAhDQAAhTAwgtQAwgtBWAAQBGAAAtAwQAqAsAIBMIhxANQgEgpgUgUQgQgQgYAAQgaAAgQASQgPASAAAgQAAAnAmApQANAPBEA8QA5AwAaAmQAmA4AABAQAABUg1AwQgyAuhTAAQhQAAgxg5g");
	this.shape_8.setTransform(129.2,156.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiEEwQgxgxAAhZIAAoEIB3AAIAAIJQAABMA+AAQA/AAAAhMIAAoJIB3AAIAAIEQAABZgxAxQgwAvhVAAQhUAAgwgvg");
	this.shape_9.setTransform(81.8,157.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACKFaIAAobIgCAAIhsIbIg3AAIhsobIgCAAIAAIbIhnAAIAAqzICcAAIBUGTIAAAAIBVmTICcAAIAAKzg");
	this.shape_10.setTransform(26,156.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmFwIAAk4IirmnIBWAAIB9FDIB6lDIBVAAIipGnIAAE4g");
	this.shape_11.setTransform(258.5,72.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmFwIAAqbIiXAAIAAhEIF7AAIAABEIiXAAIAAKbg");
	this.shape_12.setTransform(213.4,72.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABsFwIAAlfIjXAAIAAFfIhPAAIAArfIBPAAIAAE/IDXAAIAAk/IBPAAIAALfg");
	this.shape_13.setTransform(165.5,72.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiRElQg4hdAAjIQAAjHA4hdQA0hVBlAAQBeAAAyBKQAqA8AJBnIhQAAQgKiqhpABQhCAAggBEQggBJAACoQAACpAgBJQAgBFBCAAQA4gBAegdQAdgeAAg4IAAhpIhkAAIAAhDIC0AAIAAFYIg0AAIgKg3QgwBChVAAQhlAAg0hVg");
	this.shape_14.setTransform(111.5,72.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmFwIAArfIBNAAIAALfg");
	this.shape_15.setTransform(72.6,72.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AC1FwIAAqhIgCAAIiaKhIgyAAIiZqhIgCAAIAAKhIhJAAIAArfIB/AAIB+IrIACAAIB+orIB+AAIAALfg");
	this.shape_16.setTransform(27.6,72.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281.5,192.6);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBXQjBgIAXhAQAIgTAcgXIAbgTIAbgNQAjgOAigHQBsgWBFA4IANAWQANAZgEAWQgMBAiTAAIgdAAg");
	this.shape.setTransform(65.7,75.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9FDAE7").s().p("AA2HSQAkhdgFhaIhFBVIgSgQIBahwQg/AHhMACQhLABhNgIQiagOgHgmQgFgCAHgKQAOgUA6goQgXAHgZAEQgzAJgKgOQgMgQA3hiQA0haAyg+QATgZA0gpQA1gqA+goIiMgbIAFgYIBpAUQg1hJgwgjIgmgUIAEgZIAsAVQA0AlA5BNIAMhmIAZADIgQCOQBZg6BAgYQBLgdARAcQAbAshABhQggAwglAoIhkBtIgEAJQgCAKAGADQAMAGATAAIBCgDQBJgBA7AGQC8AQAFBVQAGAcgkAhQhGBBjPAXIBpBkIgRASIhJhFQAEBdglBeg");
	this.shape_1.setTransform(63.8,65.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Am1G2Qi1i2gBkAQABkAC1i1QC2i2D/AAQEBAAC1C2QC2C1AAEAQAAEAi2C2Qi1C2kBAAQj/AAi2i2g");
	this.shape_2.setTransform(62,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,124);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FDAE7").s().p("AhkghIAQgTIBZBSIBNhfIATAQIhdBzg");
	this.shape.setTransform(78.7,100.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9FDAE7").s().p("AgNgvIgjhMIAWgNIAkBRQAjBeAEBhIgZABQgDhdgihbg");
	this.shape_1.setTransform(75.8,91);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9FDAE7").s().p("AhKBKIACiUICTANIgCAZIh5gLIgBB6g");
	this.shape_2.setTransform(52.1,29.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9FDAE7").s().p("AAaAvQgphXhBhDIASgRQBCBFAtBbQAWAvAKAkIgYAGQgJgggWgug");
	this.shape_3.setTransform(53.9,35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9FDAE7").s().p("AjgDPQi1gFgXhWQgBg4AyhAQBjiED6gvQDLgnCOAZQBHAMAeAUQACAEgEAHQgHANgaALIAVACQAXAEAEAGQgjA4hOBCQibCHjSA5QhHAMhJAAIgfgBg");
	this.shape_4.setTransform(64.1,66);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Am1G2Qi1i2gBkAQABkAC1i1QC2i2D/AAQEBAAC1C2QC2C1AAEAQAAEAi2C2Qi1C2kBAAQj/AAi2i2g");
	this.shape_5.setTransform(62,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,124);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FDAE7").s().p("AA6CiQAdhFgKg/QgShoh/hOIAdBnIgYAHIgpiRICRgdIAFAYIhiAVQCGBTATBzQAQBcg7Big");
	this.shape.setTransform(88.8,62.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9FDAE7").s().p("ACKDZQhEAAhtgYQhbgThXgdQhCgWgigdQgLgKgHgLQgJgOAFgMQAEgNAQgEQAigIAegCQANgBAUABIAhABIAGAAQANgLATgEQAJgCAZgBIBegCIAAgBIjHh+QgVgOgJgQQgLgVAIgRQAJgRAWgEQANgCAMACQBlARAyALQBRASA/AZQB3AvBJBOQAgAhALAYQAUAugTAgIgCADQgDAWgOAQQgMANgVANQg4AihRAAIgFAAgAjyi8QgEAGABAHQABAJAFAGQAIAIAMAJICbBpIAqAeQAXAPATALQAVAMBGAeQAhAOAPAJQAaAOAQATQACACADABQAlAHA4gIIABgDIg6g0Qg0gohdgxIj2iGQgWgMgtgUQgHgDgFAAQgJAAgFAHgAiaATQgfANgDAfQgBAKACAEQADADAKABIFaAlIACgCQgZgWgHgEQgggWhJgdQg+gZg2gEIgTAAQgjAAgVAJg");
	this.shape_1.setTransform(66.6,77.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9FDAE7").s().p("AgiBNIBFgiQhSgeghhgIARgLQAfBfBRAaIgshMIARgKIA7BnIhrAzg");
	this.shape_2.setTransform(32.4,68.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#9FDAE7").p("AAfAAQAAAMgJAKQgKAJgMAAQgMAAgJgJQgJgKAAgMQAAgMAJgJQAJgJAMAAQAMAAAKAJQAJAJAAAMg");
	this.shape_3.setTransform(61.5,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#9FDAE7").p("AAqAAQAAARgMANQgNAMgRAAQgQAAgNgMQgMgNAAgRQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQg");
	this.shape_4.setTransform(56.3,27.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9FDAE7").s().p("AgVAWQgIgKgBgMQABgLAIgKQAKgJALABQAMgBAJAJQAKAKgBALQABAMgKAKQgJAJgMAAQgLAAgKgJg");
	this.shape_5.setTransform(15,48.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#9FDAE7").p("AAeAAQAAAMgJAJQgJAJgMAAQgMAAgJgJQgJgJAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAJAJAAAMg");
	this.shape_6.setTransform(66.8,27.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9FDAE7").s().p("AgaAbQgLgLAAgQQAAgOALgLQAMgMAOAAQAPAAAMAMQALALAAAOQAAAQgLALQgLALgQAAQgOAAgMgLg");
	this.shape_7.setTransform(23.5,43.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#9FDAE7").p("AAmAAQAAAPgLAMQgMALgPAAQgPAAgLgLQgLgMAAgPQAAgOALgMQAMgLAOAAQAPAAAMALQALALAAAPg");
	this.shape_8.setTransform(62.2,39);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9FDAE7").s().p("AgPAPQgGgGAAgJQAAgIAGgHQAHgGAIgBQAJABAGAGQAIAHAAAIQAAAJgIAGQgGAIgJgBQgIABgHgIg");
	this.shape_9.setTransform(19.7,33);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9FDAE7").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgHAIAAQAJAAAGAHQAIAHgBAIQABAJgIAHQgGAHgJAAQgIAAgHgHg");
	this.shape_10.setTransform(18.9,59.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9FDAE7").s().p("AgPAQQgGgGgBgKQABgIAGgHQAHgHAIAAQAJAAAHAHQAGAHAAAIQAAAJgGAHQgHAHgJgBQgIABgHgHg");
	this.shape_11.setTransform(22.8,51.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Am1G2Qi2i2AAkAQAAkAC2i1QC1i2EAAAQEBAAC1C2QC2C1AAEAQAAEAi2C2Qi1C2kBAAQkAAAi1i2g");
	this.shape_12.setTransform(62,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,124);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FDAE7").s().p("AhsBtQgtgtAAhAQAAg+AtguQAtgtA/AAQA/AAAuAtQAtAuAAA+QAABAgtAtQguAtg/AAQg+AAgugtg");
	this.shape.setTransform(62,65.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9FDAE7").s().p("AkbCLQgkgrgag1IgTgrQAYhEA5hGQByiMCpAAQCpAAB0CMQA4BGAYBEQgYBGg4BFQh0CMipAAQipAAhyiMgAjlhfQgxAwgWAvIARAeQAYAkAeAfQBhBhCEAAQCGAABghhQAxgxAVgwQgVgvgxgwQhghiiGAAQiEAAhhBig");
	this.shape_1.setTransform(62,65.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Am1G2Qi2i2AAkAQAAkAC2i1QC1i2EAAAQEBAAC1C2QC2C1AAEAQAAEAi2C2Qi1C2kBAAQkAAAi1i2g");
	this.shape_2.setTransform(62,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,124);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9FDAE7").s().p("AhsBtQgtguAAg/QAAg+AtguQAugtA+AAQBAAAAtAtQAtAuAAA+QAABAgtAtQgtAthAAAQg+AAgugtgAgngoQgRARAAAXQAAAYARARQARARAWAAQAYAAARgRQAQgRABgYQgBgXgQgRQgRgRgYAAQgWAAgRARg");
	this.shape_17.setTransform(62,65.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9FDAE7").s().p("AkbCLQgkgrgag1IgTgrQAXhEA6hGQByiMCpAAQCqAABzCMQA5BGAXBEQgXBGg5BFQhzCMiqAAQipAAhyiMgAjlhfQgxAwgWAvIARAeQAXAkAfAfQBhBhCEAAQCGAABghhQAxgxAVgwQgVgvgxgwQhghiiGAAQiEAAhhBig");
	this.shape_18.setTransform(62,65.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Am1G2Qi2i2AAkAQAAkAC2i1QC1i2EAAAQEAAAC2C2QC2C1AAEAQAAEAi2C2Qi2C2kAAAQkAAAi1i2g");
	this.shape_19.setTransform(62,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,124);


(lib.stomach_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mesh_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,174);


(lib.musselshadowcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(135,131,92,0)","rgba(115,113,68,0.271)","rgba(84,84,31,0.698)","#464012"],[0.008,0.275,0.733,1],0,45.7,0,-45.6).s().p("A29FnQnthehIiuQg4iEC+iUQBIg4BWgoQBRglAxgDQAYApBAgDQAwgCB1ghQC4g0BBgQQCtgpCngSQCIgPEFAVQBjAIGAApQErAhCWAEQDXAHBPgmIB6AiQCWArCOAuQHFCVDDB9QEQCykcBtQlkCIy5AVQi1ADimAAQuvAAoFhhg");
	this.shape.setTransform(204.8,45.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,409.7,91.4);


(lib.intestine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C99F5E").s().p("Egh0ANTQgyhfAwiHQAviIBphCIAlgWQgEgVAFhKQADgughgsIBJiHQAsA6ARBLQAKArALBXQCEgrBjAvQA5AbBKBSQAsAwAUALIAeASIAegWQgTg9glhIQgcg3hCh0QiQj5gsiIQhJjkA6jXQAwi0CKhnQCKhmDRgMQBdgGCIAMQBRAGCeATQCBAQA4AFQBeAIAygEIBZgIQENgXEFAYQDyAWEwBEQENA9DHCiQCYB7C3D+QBRBwDrBIQBXAaBUAOQBLAMAdgFIATCLIgLABQiCAKjxhbQkBhghPhtQirjtiFhtQiwiRjzg3QkohCjdgVQj7gYkMAXIhaAIIgEAAQg7AEhggIQhAgFiEgRQidgShIgGQiDgLhVAEIgPABQlDAYhJEPQgvCwBBDCQAnB1CEDlQBDB2AeA6QAfA8AVA6QATgNAWgMQAfgQBQhDQB4hlBFghQB0g4BgAsQBkAuAwBWQAwBXgOBrQgTCSh2B7Qh/CFivAYQhTAMhPgfQhAgYhHg4QhmCtkrAXQgfACghABIgcAAQlJAAhbitgA/0KYQgeBQAUAnQAbAyBVAaQBVAZCCgCQCLgDBagjQBagiAjg/IAHgNIgqgjQhQAuhHARQhWAThPgXQhhgdg6g8QgvgygbhNQg8AmgfBUgAtrFFQgtAbheBNQgsAmgYASQgkAbgdAQQgbAOglAbQAJA9gFA0QBDA5AuAXQA+AeA7gJQCAgSBfhgQBYhZANhmQAQh5h1g3QgQgHgTAAQgmAAg0AegA8eHeQAPA5AeAfQAhAkBAATQBCAUBTgiQgUgRgjgnQg5g/gkgQQgagLgfAAQgnAAgvARg");
	this.shape.setTransform(219.1,102.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#987744").s().p("Egh0ANTQgyhfAwiHQAviIBphCIAlgWQgEgVAFhKQADgughgsIBJiHQAsA6ARBLQAKArALBXQCEgrBjAvQA5AbBKBSQAsAwAUALIAeASIAegWQgTg9glhIQgcg3hCh0QiQj5gsiIQhJjkA6jXQAwi0CKhnQCKhmDRgMQBdgGCIAMQBRAGCeATQCBAQA4AFQBeAIAygEIBZgIQENgXEFAYQDyAWEwBEQENA9DHCiQCYB7C3D+QBRBwDrBIQBXAaBUAOQBLAMAdgFIATCLIgLABQiCAKjxhbQkBhghPhtQirjtiFhtQiwiRjzg3QkohCjdgVQj7gYkMAXIhaAIIgEAAQg7AEhggIQhAgFiEgRQidgShIgGQiDgLhVAEIgPABQlDAYhJEPQgvCwBBDCQAnB1CEDlQBDB2AeA6QAfA8AVA6QATgNAWgMQAfgQBQhDQB4hlBFghQB0g4BgAsQBkAuAwBWQAwBXgOBrQgTCSh2B7Qh/CFivAYQhTAMhPgfQhAgYhHg4QhmCtkrAXQgfACghABIgbAAQlKAAhbitgA/0KYQgeBQAUAnQAbAyBVAaQBVAZCCgCQCLgDBagjQBagiAjg/IAHgNIgqgjQhQAuhHARQhWAThPgXQhhgdg6g8QgvgygbhNQg8AmgfBUgAtrFFQgtAbheBNQgsAmgYASQgkAbgdAQQgbAOglAbQAJA9gFA0QBDA5AuAXQA+AeA7gJQCAgSBfhgQBYhZANhmQAQh5h1g3QgQgHgTAAQgmAAg0AegA8eHeQAPA5AeAfQAhAkBAATQBCAUBTgiQgUgRgjgnQg5g/gkgQQgagLgfAAQgnAAgvARg");
	this.shape_1.setTransform(222.1,104.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,441.2,207);


(lib.stomachcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stomach();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,174);


(lib.InnerShell_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// internal anatomy
	this.instance = new lib.Mesh();
	this.instance.setTransform(1111.4,585.3);

	this.instance_1 = new lib.Mesh_1_1();
	this.instance_1.setTransform(979,592.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(979,585.3,771,438.9);


(lib.gillstop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.537)").s().p("AAnCGQgCgNgtiXQguiUAAgIQABgLgLgPQgLgQgOgGQgNgEAXgUIAsgfQARgOAFAKQAFAKgLAVQgRAgAOBMQADAUAtCPQAwCSACAKQAFAYANBtQgziJgEgbg");
	this.shape.setTransform(575.5,58.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],24.4,-22.3,-17.5,22.8).s().p("ABdFnQgaABgKgDQgOgDgRgYQgLgPgIhhQgHhigXgkQgNgSgohnQgghTgOgtQgRgyAIgdQAIgcAqglQA8g1AVAEQAOACgHAdQgIAkADAuQAGAtASAlQAXAsAXBTQAcBgAGAPQARAtAIA7QAHA8gHAvQgIA5gCAEQgEANgRAAIgHgBg");
	this.shape_1.setTransform(576.1,63.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.537)").s().p("AAmCGQgCgNgsiYQgsiVAAgIQABgLgKgPQgLgRgPgGQgMgEAXgTQANgLAfgVQARgNAFAKQAFAKgLAWQgRAgAMBMQAEAUAsCQQAuCTACAKQAFAYAMBuQgyiKgEgcg");
	this.shape_2.setTransform(570,60.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],24.7,-22.1,-17.7,22.6).s().p("ABaFpQgaAAgKgCQgOgEgRgYQgLgPgGhiQgGhjgYgkQgMgSgnhoQgchNgRg0QgRgyAJgdQAIgdArglQA8g0ATAEQAQADgIAdQgKAlAFAtQAFAuASAlQAWAtAXBUQAbBhAFAOQARAuAHA7QAHA7gHAwQgIA4gCAGQgFAMgRAAIgHgBg");
	this.shape_3.setTransform(570.6,65.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.537)").s().p("AAlCHQgCgNgqiaQgriWAAgIQABgLgKgQQgLgRgOgFQgNgFAYgTQANgKAfgVQARgNAFAKQAFAKgMAWQgKATAAAgQgBAWAGAjQADAUArCSQAtCUACAKQAEAZALBuQgwiLgEgcg");
	this.shape_4.setTransform(564.5,62.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],24.9,-22,-17.9,22.5).s().p("ABXFrQgbAAgJgDQgOgEgRgYQgLgPgGhjQgDhjgZglQgMgSgmhpQgdhTgPgvQgQgzAJgdQAJgdAqgkQA9gzATAEQAQADgIAdQgKAlAEAtQAEAuASAmQAWAtAWBVQAaBhAFAPQARAuAGA7QAGA9gHAvQgJA5gCAFQgFAMgQAAIgHgBg");
	this.shape_5.setTransform(565.1,67.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.537)").s().p("AAkCHQgBgNgpiaQgqiYAAgIQABgLgKgQQgKgRgPgGQgMgFAYgTQANgKAfgUQARgNAFAKQAEAKgLAWQgSAgAMBNQADAUApCSQAsCXACAJQAEAZAKBvQgviMgEgdg");
	this.shape_6.setTransform(558.9,64.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],25.1,-21.8,-18.2,22.3).s().p("ABTFuQgagBgKgDQgNgEgRgZQgLgPgEhjQgDhkgYglQgMgSglhrQgbhPgQg0QgQgzAJgdQAJgcArgkQA9gzATAEQAQAEgJAdQgKAlAEAtQAEAvASAmQAVAtAVBVQAYBhAGARQARAuAFA8QAGA8gIAwQgJA4gCAGQgFALgPAAIgJAAg");
	this.shape_7.setTransform(559.5,69.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.537)").s().p("AAjCIQgBgNgoicQgpiZABgIQABgLgKgQQgKgRgOgHQgNgFAYgSQANgKAfgUQASgNAFALQACAKgKAVQgRAfAKBOQADAUAoCUQAqCXACAKQAEAaAJBvQguiOgDgcg");
	this.shape_8.setTransform(553.4,66);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],25.4,-21.7,-18.3,22.1).s().p("ABQFvQgagBgJgDQgOgEgRgZQgKgQgEhjQgChkgYgmQgUgfhFjjQgPg0AJgdQAKgcArgkQA9gyATAFQAPADgIAeQgLAkAEAuQADAvASAmQAUAuAVBWQAYBjAFAPQAQAvAFA8QAFA9gIAvQgKA5gCAGQgFALgPAAIgJgBg");
	this.shape_9.setTransform(553.9,71.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.537)").s().p("AAiCJQgBgOgmidQgoiaABgIQABgLgJgQQgLgSgOgGQgMgGAYgSQANgKAfgTQASgNADALQAEAKgKAVQgTAhALBNQACAVAnCUQApCaACAJQADAZAJBwQgtiPgDgcg");
	this.shape_10.setTransform(547.8,67.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],25.5,-21.6,-18.6,21.9).s().p("ABNFxQgbgBgJgDQgOgFgQgZQgKgQgBhkQgDhlgXgmQgMgTgjhsQgYhMgRg5QgOg0AJgdQAKgdArgjQA+gxATAFQAPAEgJAdQgLAkADAuQAEAvARAnQAUAvAUBWQAXBkAFAPQAPAwAFA8QAEA9gIAwQgKA5gDAFQgFALgOAAIgJgBg");
	this.shape_11.setTransform(548.3,73.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.537)").s().p("AAhCJQgBgOglieQgmibABgIQABgLgJgRQgKgRgOgHQgNgGAZgRQANgKAfgUQASgMACALQAFAKgLAVQgRAfAIBPQADAVAlCWQAoCZABALQAEAZAHBxQgriRgDgcg");
	this.shape_12.setTransform(542.1,69.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],25.7,-21.5,-18.8,21.7).s().p("ABKFzQgbgCgJgDQgNgFgQgZQgJgRgChkQgChlgXgmQgMgTgihuQgYhPgPg3QgOg0AKgdQAKgdArgiQA9gxAUAFQAPAEgJAdQgLAlADAuQADAvAQAoQAUAuATBXQAWBlAFAQQAPAvAEA9QAEA9gJAwQgKA5gDAGQgFAKgOAAIgJgBg");
	this.shape_13.setTransform(542.6,74.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.537)").s().p("AAgCJQgBgNgjifQglidABgIQABgLgJgRQgKgSgOgGQgMgGAYgSQAOgKAfgSQAQgMAEAKQAEALgKAVQgTAgAJBOQACAVAkCXQAnCbABAKQADAZAHByQgqiSgDgdg");
	this.shape_14.setTransform(536.5,71);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],25.9,-21.3,-19,21.5).s().p("ABGF1QgagCgJgDQgOgFgQgaQgIgRgBhkQgBhlgXgoQgMgTgghuQgahXgMgxQgOg1AKgdQAKgcAsgiQA8gwAUAFQAQAEgKAeQgLAkACAvQADAvAQAoQATAvASBYQAVBlAFAQQAPAvAEA9QAEA+gKAwQgLA6gDAFQgEAKgOAAIgKgBg");
	this.shape_15.setTransform(537,76.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.537)").s().p("AAfCKQgBgOgiigQgjieABgHQABgMgJgQQgJgTgOgHQgNgGAZgRQANgKAggSQAQgMAEALQAEAKgMAVQgKATgBAhQgCAWAEAlQACAVAjCYQAlCcABAKQADAZAFBzQgoiTgDgdg");
	this.shape_16.setTransform(530.8,72.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],26.1,-21.1,-19.2,21.4).s().p("ABDF3QgagCgJgEQgOgFgPgaQgIgRAAhlQgBhmgWgnQgLgUgghvQgWhMgPg8QgOg2ALgdQAKgcAsgiQA8gvAVAFQAPAFgJAdQgMAlACAvQACAvAQAoQATAwARBYQAVBoAEAOQAOAwADA+QADA+gJAvQgMA5gCAGQgFAKgNAAIgLgBg");
	this.shape_17.setTransform(531.2,78);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.537)").s().p("AAeCKQgBgOggihQgiifABgHQABgMgIgRQgKgSgOgHQgMgHAYgQQAOgKAfgSQAQgMAEALQAEALgMAVQgRAfAHBPQACAVAiCaQAjCcABALQADAaAFByQgoiTgCgeg");
	this.shape_18.setTransform(525.1,74.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],26.3,-21,-19.4,21.2).s().p("ABAF5QgagDgJgEQgOgFgPgbQgIgQAAhmQABhmgWgoQgLgUgfhwQgXhTgNg2QgMg2AKgdQAKgdAsghQA8gvAVAGQAQAFgKAdQgMAlABAvQACAvAQApQASAwARBZQATBmAFARQANAwADA+QADA+gKAwQgMA6gDAFQgFAKgNAAIgKgBg");
	this.shape_19.setTransform(525.5,79.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.537)").s().p("AAeCLQgBgOgfijQghifABgIQACgMgJgRQgJgSgOgIQgMgGAYgRQAOgJAfgSQAQgMAEALQAEALgNAVQgRAgAHBPQACAVAgCbQAiCdABALQADAaADBzQgmiVgBgdg");
	this.shape_20.setTransform(519.3,75.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],26.4,-20.9,-19.6,21).s().p("AA8F7QgZgDgJgEQgOgGgNgaQgJgRABhmQABhngWgpQgLgUgehwQgThJgPhCQgNg2ALgdQALgdAsggQA9gvAVAHQAPAEgKAeQgNAkACAvQABAwAPApQASAxAQBZQASBnAFARQANAxACA+QACA/gKAvQgNA6gCAFQgFAKgMAAIgMgBg");
	this.shape_21.setTransform(519.8,81.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.537)").s().p("AAcCLQAAgOgeijQgfihABgIQABgMgIgRQgJgTgOgHQgMgHAZgQQANgKAggRQAQgMAEALQADALgMAVQgRAfAFBRQACAVAfCbQAhCfABALQACAaADB0QgliWgCgeg");
	this.shape_22.setTransform(513.6,77.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],26.6,-20.7,-19.8,20.9).s().p("AA5F9QgagEgJgEQgNgGgNgbQgJgRAChmQABhogVgoQgKgUgdhyQgVhUgNg4QgMg2ALgdQALgcAtghQA8guAVAHQAPAFgKAdQgNAkABAwQABAwAPApQASAxAPBaQASBpAEAQQANAxABA+QACA/gLAwQgNA6gDAFQgEAKgNAAIgLgBg");
	this.shape_23.setTransform(514,82.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.537)").s().p("AAbCMQAAgNgdimQgeihACgJQABgMgIgRQgJgTgOgIQgMgGAZgQIAtgbQARgLADALQAEALgNAVQgRAfAFBRQABAVAeCdQAfCgABALQACAZACB0QgjiXgCgdg");
	this.shape_24.setTransform(507.8,78.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],26.7,-20.6,-20,20.7).s().p("AA2F+QgagEgJgEQgNgGgNgbQgJgRADhnQADhogVgpQgLgVgchyQgVhZgLgzQgLg3ALgdQALgdAsggQA9gtAVAHQAPAFgKAdQgNAlAAAwQABAwAOAqQARAxAPBaQARBpAEAQQAMAyABA/QABA/gLAwQgNA6gDAFQgFAKgLAAQgGAAgGgCg");
	this.shape_25.setTransform(508.2,84.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.537)").s().p("AAaCMQAAgOgbimQgdijABgHQACgMgIgSQgJgTgNgIQgMgHAYgQQAOgJAfgRQARgLAEALQADALgNAVQgRAeAEBSQABAWAdCdQAeCiABAKQACAbABB0QgjiYgBgeg");
	this.shape_26.setTransform(502,79.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],26.8,-20.5,-20.2,20.5).s().p("AAyGAQgZgEgJgEQgNgGgMgcQgJgSADhnQADhogUgqQgKgVgbhzQgThTgMg6QgLg3ALgdQALgdAtgfQA9gtAVAHQAPAFgLAeQgNAkAAAwQAAAxAOAqQARAyAOBbQAQBqADAPQAMAzABA+QABBAgMAwQgOA6gCAFQgFAKgLAAQgGAAgHgCg");
	this.shape_27.setTransform(502.4,85.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.537)").s().p("AAaCNQgBgOgainQgbikACgIQABgMgIgRQgJgUgNgIQgLgHAYgQQAOgJAegRQASgKAEALQADALgNAVQgSAfAEBRQAAAWAcCeQAdCjABAKQACAbgBB1QghiZAAgeg");
	this.shape_28.setTransform(496.2,81.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27,-20.3,-20.3,20.4).s().p("AAvGCQgZgFgJgEQgNgGgMgcQgJgSAEhoQAFhogUgqQgLgVgah0QgShVgLg6QgLg3AMgdQALgdAtgfQA9gtAUAIQAPAGgKAdQgOAlAAAwQAAAxANAqQARAyANBcQAPBqAEAQQALAzAAA/QABBAgMAwQgPA6gCAFQgFAKgLAAQgGAAgHgCg");
	this.shape_29.setTransform(496.6,86.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.537)").s().p("AAYCOQAAgOgZioQgZilABgIQACgMgIgSQgJgUgNgIQgLgHAYgQIAsgZQASgLAEALQADAMgNAUQgSAeACBTQAAAWAcCgQAcCkAAAKQACAagBB2QggiagBgeg");
	this.shape_30.setTransform(490.4,82.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.2,-20.2,-20.5,20.2).s().p("AAsGDQgZgEgJgFQgLgGgOgcQgJgSAFhoQAGhpgUgrQgKgVgZh1QgUhegJgxQgKg4AMgdQALgcAtgfQA+gsAUAIQAPAFgLAeQgOAkAAAwQgBAyAOAqQAPAzANBcQAOBqAEARQALAzgBA/QAABBgMAwQgOA5gDAGQgFAKgLAAQgGAAgHgDg");
	this.shape_31.setTransform(490.7,88.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.537)").s().p("AAXCOQAAgOgXipQgZimACgIQACgMgIgSQgJgUgNgIQgLgIAZgPIArgZQATgLADAMQAEALgOAVQgSAfABBSQAAAWAbCgQAaClABAKQABAbgCB2QgeibgBgeg");
	this.shape_32.setTransform(484.5,83.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.3,-20,-20.7,20.1).s().p("AApGFQgagFgIgFQgLgGgOgdQgIgSAGhoQAGhqgUgrQgKgVgYh2QgRhSgKg+QgKg4AMgdQAMgdAtgeQA+grAUAIQAOAFgLAeQgOAkgBAxQgBAxANArQAQAzALBdQAOBrADARQALAzgBBAQAABAgNAxQgPA6gDAFQgFAJgKAAQgGAAgHgCg");
	this.shape_33.setTransform(484.9,89.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.537)").s().p("AAVCOQAAgPgVipQgYinACgIQACgMgIgSQgIgUgNgJQgLgHAYgPQAOgJAegQQATgKADALQADAMgOAUQgTAeABBUQABAWAZChQAZCmABAKQABAbgDB3QgdicgBgfg");
	this.shape_34.setTransform(478.7,84.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.4,-19.9,-20.9,19.9).s().p("AAmGHQgagGgIgEQgLgHgNgdQgJgSAHhpQAHhpgTgsQgKgVgXh3QgPhKgMhHQgJg5AMgdQAMgcAtgeQA+grAUAIQAPAGgLAeQgPAkgBAxQgBAxANAsQAPAzAKBdQANBtADAQQALA0gBA/QgCBBgNAxQgPA6gDAFQgFAJgKAAQgGAAgHgCg");
	this.shape_35.setTransform(479,90.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.537)").s().p("AAUCPQAAgPgUirQgWioABgIQADgLgIgTQgIgUgNgJQgLgIAYgPQAOgIAegQQATgKADAMQADALgOAVQgUAeABBTQABAWAYCjQAXCmABALQABAbgEB3QgcidAAgeg");
	this.shape_36.setTransform(472.9,86);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.5,-19.8,-21,19.7).s().p("AAjGIQgagGgIgEQgLgHgNgdQgIgTAHhpQAHhqgSgsQgKgVgWh4QgRhfgIgzQgJg5ANgdQAMgcAtgeQA+gqAUAIQAPAHgMAdQgPAlgBAxQgCAxANAsQAOAzAKBeQAMBsADASQAKA0gCBAQgBBBgNAwQgQA7gDAFQgFAJgKAAQgGAAgHgDg");
	this.shape_37.setTransform(473.1,91.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.537)").s().p("AATCPQAAgOgTisQgUipABgIQACgMgHgSQgIgVgNgJQgLgIAZgPQAOgIAegPQASgKAEAMQACALgOAUQgUAfABBTQAAAWAXCkQAWCnAAALQABAbgEB4QgbieAAgfg");
	this.shape_38.setTransform(467,87.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.7,-19.6,-21.2,19.6).s().p("AAfGKQgZgGgGgFQgNgHgNgdQgIgTAIhqQAIhqgSgsQgJgWgVh4QgQhagIg5QgJg5ANgdQAMgdAtgdQA/gqATAJQAPAGgMAeQgOAkgDAxQgCAyAMAsQAOA0AKBfQALBsADASQAKA0gDBAQgCBCgNAwQgQA6gDAGQgFAJgKAAQgGAAgIgDg");
	this.shape_39.setTransform(467.2,93);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.537)").s().p("AARCQQABgPgSitQgTipABgIQADgMgIgTQgHgVgNgJQgLgIAZgPQAOgIAegPQASgKADAMQADAMgOAUQgVAgABBSQAAAXAVCkQAVCoAAALQABAcgFB4QgaifAAgfg");
	this.shape_40.setTransform(461.1,88.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.8,-19.5,-21.3,19.4).s().p("AAcGMQgZgHgHgFQgMgHgMgeQgJgSAKhqQAIhrgRgtQgJgWgVh4QgNhSgKhCQgIg6ANgdQANgcAtgeQA+gpAUAJQAOAHgLAdQgQAlgCAxQgCAyAMAsQANA1AJBfQAKBsADATQAJA0gDBBQgCBBgOAxQgQA6gEAGQgEAJgLAAQgFAAgIgDg");
	this.shape_41.setTransform(461.2,94.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.537)").s().p("AAQCQQABgOgRiuQgSirACgIQACgMgHgTQgIgVgMgJQgLgIAZgPQAOgIAegOQASgKADAMQADALgOAVQgVAeAABUQgBAXAUClQAVCqAAAKQAAAcgGB4QgZigABgfg");
	this.shape_42.setTransform(455.2,89.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.8,-19.3,-21.5,19.3).s().p("AAZGNQgZgGgGgFQgNgIgMgeQgIgTAKhqQAJhrgRgtQgJgWgTh6QgPhbgHg6QgIg6ANgcQANgdAtgdQA/gpATAKQAPAHgNAdQgPAkgCAyQgDAyALAtQAOA1AIBfQAJBuADASQAJA1gEBAQgDBCgOAxQgRA6gDAGQgFAIgKAAQgGAAgHgDg");
	this.shape_43.setTransform(455.3,95.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.537)").s().p("AAOCRQABgPgPivQgRisACgIQACgMgHgTQgHgUgNgKQgLgIAZgPQAOgIAegOQATgKADAMQACAMgOAUQgVAdgBBWQAAAXATCmQATCrAAAKQAAAcgHB5QgYihABgfg");
	this.shape_44.setTransform(449.4,90.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.9,-19.2,-21.7,19.1).s().p("AAWGPQgXgHgIgFQgNgIgMgeQgHgTAKhrQAKhsgRgtQgIgWgTh6QgPhggGg2QgHg7ANgcQANgdAugcQA+goAUAJQAOAHgMAdQgQAlgDAyQgDAyALAtQANA1AIBgQAIBuADASQAIA1gEBBQgDBDgPAwQgRA7gDAFQgFAJgKAAQgGAAgHgDg");
	this.shape_45.setTransform(449.4,96.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.537)").s().p("AANCRQAAgOgOiwQgPitACgIQADgMgHgTQgIgVgMgKQgLgJAZgOIAsgWQATgJADAMQACALgOAVQgWAegBBVQAAAXARCnQASCrAAALQAAAcgIB5QgWiiABgfg");
	this.shape_46.setTransform(443.5,91.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28,-19.1,-21.9,19).s().p("AATGQQgXgHgIgFQgNgIgMgfQgHgTALhrQALhsgRgtQgIgXgSh7IgTiWQgHg7ANgdQANgcAugdQA/goATAKQAOAHgMAeQgQAkgDAyQgEAzALAtQANA2AGBgQAIBvACASQAIA2gEBBQgEBCgPAxQgSA7gCAFQgFAJgKAAQgGAAgHgEg");
	this.shape_47.setTransform(443.4,97.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.537)").s().p("AAKCRQAAgPgMiwQgPiuACgIQADgMgHgTQgHgVgMgKQgLgJAZgOIAtgWQASgJADAMQACAMgOAUQgWAegCBWQAAAXAQCoQAQCsAAALQAAAbgJB6QgVijACgfg");
	this.shape_48.setTransform(437.7,92.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.1,-19,-22,18.8).s().p("AAPGSQgWgIgJgFQgMgIgLgfQgIgTAMhsQAMhsgRguQgIgXgQh7QgNhggGg4QgGg7ANgcQANgdAugcQA/gnATAKQAOAHgMAeQgQAkgEAyQgEAzALAtQAMA3AGBgQAHByACAQQAHA2gEBBQgFBDgPAxQgRA6gEAGQgEAIgKAAQgGAAgIgDg");
	this.shape_49.setTransform(437.5,98.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.537)").s().p("AAHCSQAAgPgLiyQgNiuACgIQADgMgHgUQgHgVgMgKQgLgJAZgNQAPgIAegOQASgJADAMQACAMgOAUQgWAegDBWQAAAWAPCqQAPCsAAAMQgBAcgJB6QgUikACgfg");
	this.shape_50.setTransform(432,92.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.2,-18.8,-22.2,18.7).s().p("AAMGTQgWgIgIgFQgMgIgMgfQgHgUANhrQAMhtgQguQgIgXgQh9QgLhXgGhBQgGg7AOgdQANgcAugcQA/gnATAKQAOAIgNAdQgQAlgEAyQgEAzAKAuQAMA2AFBiQAGByACAQQAHA2gFBCQgFBCgPAyQgSA6gEAGQgFAIgJAAQgGAAgIgEg");
	this.shape_51.setTransform(431.5,99);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.537)").s().p("AADCSQABgPgKiyQgMiwACgIQADgMgGgUQgHgVgMgKQgKgJAZgOQAOgHAegOQASgJADAMQACAMgOAVQgWAegDBWQgBAXANCqQAOCuAAALQgBAcgKB6QgSikABggg");
	this.shape_52.setTransform(426.2,93.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.2,-18.7,-22.3,18.6).s().p("AAJGVQgXgIgIgGQgMgIgLgfQgHgUAOhsQANhtgQgvQgIgXgPh9QgKhbgGg+QgFg7ANgdQAOgdAugbQA/gmATAKQAOAIgNAdQgRAlgEAyQgEAzAJAuQAMA3AEBiQAFBzACAQQAHA2gFBCQgGBDgPAxQgTA7gDAGQgFAHgJAAQgGAAgIgDg");
	this.shape_53.setTransform(425.5,99.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.537)").s().p("AAACTQABgPgJi0QgKiwACgIQADgMgHgUQgGgVgMgLQgLgJAagNQAOgIAegNQASgJADAMQACAMgPAUQgWAfgDBWQgBAXAMCrQANCugBALQAAAdgMB7QgPimAAgfg");
	this.shape_54.setTransform(420.5,94.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.3,-18.6,-22.5,18.4).s().p("AAGGWQgWgIgIgGQgMgIgLgfQgHgUAOhtQAOhtgPgvQgIgYgOh9QgLhlgEg1QgFg8AOgdQANgcAugbQBAgmASAKQAOAIgNAeQgQAkgFAzQgFAzAJAvQALA3AEBiQAFBzABAQQAHA3gGBCQgGBEgQAxQgTA7gDAFQgFAIgJAAQgGAAgIgEg");
	this.shape_55.setTransform(419.5,100.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.537)").s().p("AgBCTQABgPgJi0QgKiyACgIQADgMgGgUQgGgWgMgKQgLgJAagOIAsgUQATgJACANQACAMgPAUQgWAegEBWQgBAXALCsQALCvAAAMQgBAcgMB8QgOinACgfg");
	this.shape_56.setTransform(414.6,95.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.2,-18.5,-22.8,18.2).s().p("AABGYQgWgJgIgGQgMgIgKggQgHgUAPhtQAOhtgPgwQgHgXgNh/QgKhdgEg9QgFg9AOgcQAOgdAugaQA/gmATALQAOAIgOAdQgQAlgFAzQgFAzAJAvQAKA3ADBjQAEBxACATQAGA3gGBDQgHBDgQAyQgUA7gDAFQgEAIgJAAQgGAAgJgEg");
	this.shape_57.setTransform(413.6,101.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.537)").s().p("AgECTQABgPgIi1QgIiyACgIQADgMgGgUQgGgWgMgLQgLgJAagNIAsgUQATgJACANQACAMgPAUQgWAdgFBYQgCAXAKCsQALCxgBALQgBAdgNB8QgNioADggg");
	this.shape_58.setTransform(408.6,96.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.1,-18.3,-23.1,18.1).s().p("AgCGZQgYgJgIgFQgLgJgLggQgGgUAPhtQAPhugOgwQgIgXgMiAQgHhOgGhNQgEg9AOgcQAOgdAvgaQA/gmATALQANAJgNAdQgRAlgGAzQgFA0AJAuQAKA4ACBjQADByACATQAFA3gGBDQgHBEgRAxQgUA8gDAFQgEAHgJAAQgGAAgHgEg");
	this.shape_59.setTransform(407.6,102.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.537)").s().p("AgHCUQABgPgHi2QgHizACgIQADgMgFgVQgHgWgLgLQgLgJAagNQAOgHAegNQATgIACAMQACANgPAUQgWAcgGBZQgBAXAICuQAJCwAAAMQgCAdgNB8QgMioADggg");
	this.shape_60.setTransform(402.7,96.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28,-18.2,-23.4,18).s().p("AgHGaQgXgJgIgGQgMgIgKggQgHgVAQhtQARhugPgxQgHgYgLh/QgJhpgDg0QgEg8APgdQAOgdAugaQBAgkASALQANAIgNAeQgRAkgGAzQgGA1AIAvQAKA4ACBjQACB0ACASQAFA4gHBCQgIBFgQAxQgVA8gDAEQgEAIgIAAQgHAAgHgFg");
	this.shape_61.setTransform(401.6,103);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.537)").s().p("AgLCUQACgPgGi3QgGi0ADgIQADgMgGgUQgGgWgLgLQgLgKAagNQAOgHAegMQATgJACANQACANgQATQgWAfgGBXQAAAXAGCuQAICygBAMQgCAdgMB9QgNiqADggg");
	this.shape_62.setTransform(396.7,97.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.9,-18.1,-23.7,17.8).s().p("AgMGcQgXgKgIgGQgMgIgKghQgGgUARhuQARhvgOgwQgHgYgKiBQgJhlgCg4QgEg9APgdQAOgcAvgaQA/gkASALQAOAJgOAdQgRAlgGAzQgHA1AIAvQAKA5ABBjQABB2ABAQQAFA4gHBEQgIBEgRAxQgVA8gDAFQgFAHgIAAQgEAAgJgEg");
	this.shape_63.setTransform(395.6,103.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.537)").s().p("AgNCVQABgQgEi4QgFi0ACgIQAEgMgGgVQgFgWgMgLQgKgKAZgNQAOgHAegMQATgIACANQACAMgPAUQgWAdgHBYQAAAXAECwQAHCygBANQgCAcgNB+QgLiqADggg");
	this.shape_64.setTransform(390.7,98.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.8,-18,-24,17.6).s().p("AgQGdQgYgJgIgGQgLgKgKggQgGgVARhuQAShvgOgxQgGgYgKiBQgGhagEhEQgDg9APgdQAPgcAugaQBAgkASAMQANAJgOAdQgRAlgHAzQgGA1AHAvQAJA5ABBlQAAB0ABASQAFA4gIBEQgIBEgSAyQgVA8gDAEQgFAIgGAAQgGAAgIgFg");
	this.shape_65.setTransform(389.6,104.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.537)").s().p("AgRCVQACgPgDi5QgEi1ADgIQADgMgFgVQgGgWgLgMQgKgKAZgMQAOgHAegMQATgIACANQACAMgQAUQgWAegGBYQgCAXAECxQAFCzgBAMQgCAdgOB9QgKiqADghg");
	this.shape_66.setTransform(384.8,98.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.6,-17.9,-24.3,17.5).s().p("AgVGeQgYgKgHgGQgMgJgJghQgGgUAShvQAShvgNgxQgHgZgIiBQgHhjgCg8QgCg+AOgdQAPgcAugZQBAgkASAMQANAJgOAeQgRAkgHA0QgHA0AHAwQAJA5gBBlQAAB1ABATQAEA4gIBEQgIBFgSAxQgWA8gDAFQgEAIgGAAQgHAAgIgGg");
	this.shape_67.setTransform(383.6,105);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.537)").s().p("AgUCWQACgQgCi5QgCi2ACgIQAEgNgFgVQgGgWgLgLQgKgLAZgMQAOgHAegLQATgIACANQACAMgQAUQgWAdgHBZQgCAYADCxQAEC0gBAMQgCAdgPB+QgJisADggg");
	this.shape_68.setTransform(378.8,99.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.5,-17.7,-24.6,17.4).s().p("AgaGgQgXgKgIgGQgLgKgKggQgFgVAShvQAThwgNgxQgGgZgHiCQgGhcgChEQgCg+APgcQAOgdAvgZQBAgjASAMQANAJgPAeQgRAkgHA0QgHA1AGAwQAIA6gBBlQgBB1ABATQAEA4gJBEQgJBFgSAyQgVA7gDAGQgDAHgIAAQgHAAgIgFg");
	this.shape_69.setTransform(377.6,105.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.537)").s().p("AgXCWQACgPgBi7QgBi3ADgIQADgMgFgVQgFgXgLgLQgKgLAZgMQAPgGAegMQATgIABANQABANgPAUQgXAdgGBZQgCAXACCyQABC1AAAMQgBAdgSB/QgIitAEggg");
	this.shape_70.setTransform(373,99.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.5,-17.6,-24.8,17.2).s().p("AgeGiQgXgLgHgGQgMgKgJghQgFgVAThvQAUhwgNgyQgGgZgHiDQgFhjgBg9QgCg+APgdQAPgcAvgZQA/giASAMQANAJgOAeQgSAkgIA0QgHA1AGAxQAIA5gBBmQgCB3ABASQADA4gJBFQgKBFgSAyQgVA8gCAEQgFAIgIAAQgGAAgJgFg");
	this.shape_71.setTransform(371.6,106.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.537)").s().p("AgaCWQACgPAAi7QABi4ACgIQAEgNgFgVQgFgWgLgMQgKgLAZgLQAPgHAegLQATgIABANQABANgPATQgXAdgHBaQgDAYACCyQACC2gBAMQgDAdgSB/QgHitAEghg");
	this.shape_72.setTransform(367.3,100.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.5,-17.5,-24.9,17).s().p("AghGjQgXgLgHgGQgLgKgJghQgFgWAUhvQAUhxgMgyQgGgZgGiDQgFhqAAg3QgCg+AQgdQAPgdAugYQBAgiARAMQANAKgOAdQgSAkgIA1QgIA1AGAxQAIA6gCBmQgDB3ABASQACA5gJBFQgKBFgSAyQgVA8gDAFQgFAHgIAAQgGAAgJgFg");
	this.shape_73.setTransform(365.6,106.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.537)").s().p("AgdCWQACgQACi7QABi5ADgIQADgMgEgVQgFgXgLgMQgKgLAZgLQAPgHAegLQATgHABANQABAMgPAUQgYAegHBZQgDAYABCzQAAC3gBALQgCAegTB/QgGiuAEghg");
	this.shape_74.setTransform(361.5,100.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.6,-17.4,-25,16.9).s().p("AgkGkQgXgLgHgGQgLgKgIgiQgGgVAVhwQAVhwgMgzQgGgZgFiEIgEiiQgBg/APgdQAQgcAugYQBAgiASANQAMAJgOAeQgTAkgIA1QgIA1AGAxQAHA6gDBnQgEB2ABAUQADA5gKBFQgLBFgSAyQgVA8gDAFQgFAHgIAAQgGAAgJgFg");
	this.shape_75.setTransform(359.6,107.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.537)").s().p("AggCXQACgPADi9QACi6ADgIQAEgMgFgWQgFgXgKgMQgKgKAZgMQAPgGAegLQASgHACANQABANgQATQgXAcgIBbQgDAYgBC0QAAC5gBALQgDAdgUCAQgFivAFghg");
	this.shape_76.setTransform(355.8,101.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.6,-17.3,-25.1,16.7).s().p("AgnGlQgWgLgIgHQgLgKgIghQgFgWAWhwQAVhxgLgzQgGgZgEiFIgEiiQAAg/AQgdQAPgcAtgYQBBgiASANQAMAKgOAdQgTAlgIA1QgJA1AGAxQAGA7gDBnQgEB4AAASQACA6gKBFQgLBGgTAxQgVA9gDAFQgFAHgHAAQgHAAgJgGg");
	this.shape_77.setTransform(353.7,107.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.537)").s().p("AgjCYQACgQAEi+QAEi6ADgIQADgMgEgWQgFgXgKgMQgKgLAagLQAOgHAegKQASgIACANQABANgQAUQgXAdgJBaQgCAYgCC1QgCC4gCAMQgDAegUCAQgEiwAFggg");
	this.shape_78.setTransform(350,101.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.6,-17.1,-25.2,16.7).s().p("AgpGnQgXgMgHgGQgLgKgIgiQgFgWAWhwQAWhygLgzQgFgZgDiGQgDhhAAhCQAAg/AQgdQAPgcAtgYQBCghARANQANAKgPAeQgTAkgJA1QgIA1AFAyQAGA6gEBoQgFB2AAAVQACA6gLBFQgLBGgTAyQgWA9gDAEQgFAIgHAAQgGAAgJgGg");
	this.shape_79.setTransform(347.7,108);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.537)").s().p("AgmCYQACgQAGi+QAFi7ADgIQADgNgEgVQgEgYgLgMQgJgLAZgLQAOgGAegLQATgHABANQABANgQAUQgXAcgJBbQgDAYgDC2QgDC4gCANQgDAegVCAQgCiwAEghg");
	this.shape_80.setTransform(344.3,101.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.7,-17.1,-25.3,16.4).s().p("AgsGoQgXgMgHgHQgKgKgIgiQgFgWAXhxQAXhxgLg0QgFgZgDiGQgChrABg5QAAhAAQgcQAQgdAsgXQBCghARAOQANAJgPAeQgTAkgJA1QgJA2AFAyQAGA7gFBoQgGB3AAAUQABA7gLBFQgLBGgUAyQgVA8gEAGQgEAHgIAAQgGAAgJgGg");
	this.shape_81.setTransform(341.8,108.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.537)").s().p("AgnCYQACgPAHjAQAHi7ACgIQAEgNgEgVQgEgYgLgMQgJgLAZgLQAOgHAegKQATgHABANQABANgQAUQgYAdgJBbQgDAYgEC2QgFC6gBAMQgDAegXCBQgBixAFgig");
	this.shape_82.setTransform(338.4,102.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.7,-16.9,-25.4,16.3).s().p("AgvGpQgWgMgHgHQgLgKgHgiQgFgWAXhxQAYhygKg0QgFgZgCiHQgBhhABhEQABhAAPgcQAQgdAtgXQBCggARANQAMAKgPAeQgTAlgJA1QgKA1AFAyQAFA8gGBoQgGB3AAAVQABA7gMBFQgMBHgTAyQgXA9gDAEQgFAHgHAAQgGAAgJgGg");
	this.shape_83.setTransform(335.8,108.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.537)").s().p("AgoCYQADgPAIjAQAHi9ADgIQAEgMgEgWQgEgYgLgMQgJgMAZgKQAPgHAdgKQATgHABAOQABANgQATQgYAdgKBbQgEAZgFC3QgFC7gBAMQgEAdgXCCQAAiyAFgig");
	this.shape_84.setTransform(332.5,102.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.7,-16.8,-25.5,16.2).s().p("AgyGrQgWgMgHgHQgLgLgHgiQgFgXAYhxQAZhygKg0QgFgagBiHQAAhpABg8QABhAAQgdQAQgdAtgWQBCggARANQAMALgPAdQgUAlgJA1QgKA2AEAyQAFA8gGBpQgHB6AAASQABA7gNBGQgMBGgUAzQgXA8gDAFQgEAHgHAAQgHAAgJgGg");
	this.shape_85.setTransform(329.9,109.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.537)").s().p("AgpCZQADgPAJjBQAIi9ADgJQAEgMgDgWQgEgYgLgNQgJgLAagLQAOgGAegKQASgHABAOQABANgQAUQgYAdgLBbQgDAZgHC3QgGC9gCALQgEAegXCBQABiyAFgig");
	this.shape_86.setTransform(326.5,102.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.8,-16.6,-25.5,16.1).s().p("Ag0GsQgWgMgHgIQgLgKgHgjQgEgWAYhyQAZhygJg1QgFgZAAiIQAAhhAChFQAChBAQgdQAQgcAtgWQBCggAQAOQAMAKgPAeQgUAkgJA2QgKA2ADAyQAFA9gHBpQgIB7AAASQAAA7gMBGQgNBGgUAzQgXA8gDAFQgFAHgHAAQgGAAgJgGg");
	this.shape_87.setTransform(323.9,109.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.537)").s().p("AgqCZQADgQAKjBQAKi+ADgIQAEgNgEgWQgEgYgKgMQgJgMAagKQANgGAfgKQASgHABAOQABANgQATQgYAdgMBcQgDAYgIC5QgIC8gBAMQgEAegZCCQADizAFgig");
	this.shape_88.setTransform(320.6,103);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.8,-16.5,-25.6,16).s().p("Ag3GtQgWgMgHgIQgLgKgGgjQgFgXAahxQAZhzgJg1QgFgaABiIQABhpACg+QADhBAQgdQAQgcAtgWQBCggAQAPQAMAKgPAeQgUAkgKA2QgLA2AEAzQAEA8gHBqQgJB5AAAUQAAA8gNBGQgNBHgTAyQgZA9gDAFQgFAHgHAAQgGAAgJgHg");
	this.shape_89.setTransform(318,109.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.537)").s().p("AgrCaQADgRAMjBQALi/ACgIQAFgNgEgWQgDgYgLgNQgJgLAagLQAMgGAggJQASgHABAOQABANgQATQgZAdgMBcQgDAZgJC5QgJC+gBALQgEAegaCDQAEi1AFghg");
	this.shape_90.setTransform(314.7,103.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.9,-16.4,-25.6,15.8).s().p("Ag6GuQgWgNgGgHQgLgLgGgjQgEgWAahyQAahzgJg1QgEgaACiJQABhvADg5QAChBAQgdQARgcAsgWQBCgfARAOQAMALgQAdQgUAlgKA2QgLA2ADAzQAEA9gIBqQgKB5AAAVQAAA8gOBGQgNBHgTAzQgZA8gEAFQgEAHgHAAQgHAAgJgHg");
	this.shape_91.setTransform(312.1,109.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.537)").s().p("AgrCaQADgQAMjDQAMi/ADgJQAFgMgEgXQgDgYgKgNQgJgLAZgLQAMgGAggJQATgGABANQAAAOgQATQgYAcgPBdQgCAZgKC6QgKC+gBAMQgFAegaCDQAFi1AGgig");
	this.shape_92.setTransform(308.8,103.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.9,-16.3,-25.7,15.7).s().p("Ag9GwQgWgNgGgIQgLgKgGgkQgEgWAbhzQAbh0gJg1QgEgaADiKQAChpADg+QADhCAQgdQARgcAsgWQBCgeARAOQAMALgQAdQgUAlgLA2QgLA3ADAzQADA8gJBrQgKB7AAAUQgBA8gOBGQgOBIgTAyQgaA9gDAFQgFAHgGAAQgHAAgJgHg");
	this.shape_93.setTransform(306.2,110.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.537)").s().p("AgsCaQADgQANjDQAOjAADgJQAEgMgDgXQgDgYgKgNQgJgMAZgKQANgGAfgJQATgGABANQAAAOgQATQgZAdgPBcQgCAZgLC7QgLC+gCAMQgEAfgbCDQAGi2AGgig");
	this.shape_94.setTransform(303,103.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.9,-16.1,-25.8,15.6).s().p("AhAGxQgVgNgHgHQgKgMgGgjQgEgXAchyQAbh0gIg2QgEgaAEiKQADhxADg4QADhBARgdQAQgdAtgVQBCgfAQAPQAMALgQAeQgUAkgLA2QgMA3ADAzQADA9gKBrQgLB7AAAVQgBA8gPBHQgOBHgTAzQgaA8gEAGQgEAGgHAAQgHAAgJgHg");
	this.shape_95.setTransform(300.3,110.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.537)").s().p("AgtCbQADgRAPjEQAOjBADgIQAFgMgDgXQgDgYgKgOQgJgLAagKQAMgGAggJQASgGABAOQAAANgQATQgZAcgPBeQgDAZgMC7QgMC/gCAMQgFAfgbCDQAHi2AGgig");
	this.shape_96.setTransform(297.1,103.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28,-16.1,-25.8,15.4).s().p("AhCGyQgVgNgHgIQgKgLgGgjQgDgXAchzQAch0gIg2QgEgbAFiKQADhnAEhDQADhBARgdQARgdAtgVQBCgeAQAPQALAKgQAeQgUAlgMA2QgLA3ACA0QACA+gKBrQgMB+AAARQgCA9gOBHQgPBHgUAzQgaA9gDAFQgFAGgHAAQgGAAgJgHg");
	this.shape_97.setTransform(294.4,110.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.537)").s().p("AguCbQADgRARjEQAPjCADgIQAFgNgDgXQgDgYgKgOQgIgMAZgKQAMgFAggJQASgGABAOQAAANgQAUQgZAcgQBdQgEAZgMC8QgNDAgCANQgFAegcCEQAIi3AGgig");
	this.shape_98.setTransform(291.3,103.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28,-15.9,-25.9,15.3).s().p("AhFGzQgVgNgGgIQgKgLgGgkQgDgXAch0QAdh0gHg2QgEgaAFiMQAEhcAEhOQAEhCASgdQAQgcAtgVQBCgeAQAPQALALgQAeQgUAlgMA2QgMA3ACA0QACA+gLBrQgNB9AAAUQgCA8gPBHQgPBIgUAzQgbA9gDAFQgFAHgGAAQgHAAgJgIg");
	this.shape_99.setTransform(288.6,110.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.537)").s().p("AgvCbQADgQASjGQASjCADgIQAFgNgDgXQgDgYgJgOQgJgMAYgKQAOgFAfgJQATgGAAAOQABAOgRATQgZAcgRBeQgEAZgOC8QgPDCgCALQgFAfgeCEQAKi4AHgig");
	this.shape_100.setTransform(284.9,103.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28,-15.8,-26,15).s().p("AhJG0QgVgOgHgHQgKgMgFgkQgDgXAeh0QAeh0gHg2QgEgbAHiMQAFhhAFhKQAFhCARgdQARgcAtgVQBCgdAPAPQAMAMgRAdQgVAlgMA2QgMA3ABA1QACA+gMBrQgOB8gBAVQgCA9gQBHQgQBJgUAyQgbA9gEAFQgEAHgHAAQgGAAgJgIg");
	this.shape_101.setTransform(282.2,110.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.537)").s().p("AgxCbQADgQAVjHQAVjCADgIQADgNgCgXQgBgZgJgOQgIgMAYgJQAOgFAggIQASgGAAAOQAAANgRATQgaAdgRBdQgFAZgRC9QgSDCgCAMQgGAegfCFQAMi5AIgig");
	this.shape_102.setTransform(277.8,103.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.2,-15.4,-26.2,14.6).s().p("AhQG0QgVgOgHgIQgJgLgFgkQgDgYAghzQAgh1gGg2QgDgcAJiMQAHhrAFhAQAGhCASgdQARgcAtgUQBCgcAQAPQALAMgRAdQgVAlgNA2QgOA3ABA1QAAA+gNBsQgQB9gBAUQgEA9gQBHQgQBIgWAzQgdA+gDAEQgEAGgGAAQgHAAgJgIg");
	this.shape_103.setTransform(275,110.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.537)").s().p("Ag0CbQAEgQAZjHQAXjDACgIQAEgNgBgXQgDgZgGgOQgJgNAZgIQANgFAhgIQASgGAAAPQAAANgRATQgaAbgUBeQgFAZgTC+QgWDCgDAMQgFAfgiCEQAPi5AIgig");
	this.shape_104.setTransform(270.8,103.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.2,-15,-26.5,14.3).s().p("AhYG1QgUgPgHgIQgJgMgEgkQgDgYAihzQAhh0gFg3QgCgcALiMQAJh1AGg3QAHhDASgcQASgcAtgTQBCgcAQAQQALAMgSAdQgWAlgOA2QgOA3AAA1QgBA/gPBsQgSB/gBASQgFA+gRBHQgRBIgXAyQgdA8gEAGQgEAGgGAAQgHAAgJgIg");
	this.shape_105.setTransform(268,110.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.537)").s().p("Ag2CbQAEgPAcjIQAZjEADgIQAFgNgBgXQgCgZgIgOQgGgNAYgIQAOgFAggHQASgFAAAOQgBANgRATQgaAcgVBdQgGAZgWC+QgZDDgDAMQgGAfgkCEQATi6AIgig");
	this.shape_106.setTransform(263.8,103.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.4,-14.6,-26.7,13.9).s().p("AhfG0QgUgPgGgIQgKgMgDgkQgCgYAjhzQAjh1gEg3QgCgbAOiOQAIhcAJhQQAIhCATgdQAQgcAvgSQBDgaAPAQQALAMgSAdQgXAkgOA3QgPA3gCA1QgBA/gRBsQgUB+gCAUQgFA9gTBHQgRBIgZAzQgdA8gEAFQgFAGgFAAQgHAAgJgJg");
	this.shape_107.setTransform(261,110.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.537)").s().p("Ag4CbQAEgQAfjIQAcjEADgIQAGgNgBgXQgBgagJgOQgFgNAXgIQAPgEAfgHQATgFgBAOQAAAOgSASQgbAcgWBdQgGAZgZC/QgcDCgDANQgHAegmCFQAWi6AJgig");
	this.shape_108.setTransform(256.9,103.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.5,-14.2,-26.9,13.5).s().p("AhnG1QgUgQgGgIQgJgMgCglQgCgYAlhzQAlh1gEg3QgBgcAQiNQALhnAKhFQAJhDATgcQAQgcAwgSQBDgZAOAQQALANgTAcQgXAkgPA3QgQA3gCA1QgDA/gSBtQgWB9gCAVQgHA9gUBHQgSBIgaAyQgeA9gEAEQgEAGgGAAQgHAAgJgIg");
	this.shape_109.setTransform(254.1,110.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.537)").s().p("AhPEWQAPhmAGgVQAEgQAijIQAgjEADgJQAGgMgBgYQgBgZgIgPQgHgNAagHQAOgFAggGQATgFgBAPQgBAOgSASQgcAcgXBcQgHAZgcC/QgfDCgDANQgIAfgoCEIAOhhg");
	this.shape_110.setTransform(250.1,102.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.6,-13.8,-27.1,13).s().p("AhuG1QgUgQgGgJQgIgMgCglQgCgYAnhzQAnh0gDg4QgBgcATiOIAXisQAKhDAUgcQARgcAvgRQBEgYAOARQAKAMgTAdQgXAjgRA3QgQA3gDA1QgEA/gUBtQgYB/gDATQgHA+gUBHQgVBIgaAyQggA8gDAFQgFAFgGAAQgHAAgIgIg");
	this.shape_111.setTransform(247.2,109.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.537)").s().p("AhTEWQAQhmAGgWQAFgQAmjIQAijFAEgIQAFgMAAgYQAAgZgIgPQgHgNAagHQAOgFAggFQATgFgBAPQgBAOgTARQgbAbgaBeQgHAYgfDAIgmDPQgIAfgqCEIAQhhg");
	this.shape_112.setTransform(243.4,102.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.7,-13.4,-27.3,12.6).s().p("Ah2G0QgTgQgGgJQgIgMgCgmQgBgXAph0QAphzgCg5QAAgbAUiOQAQhrALhDQALhDASgbQATgcAwgQQBDgXAOARQAKANgTAcQgYAjgRA3QgSA3gEA1QgEA/gXBuQgZB8gDAWQgJA+gUBHQgXBIgbAxIgkBBQgEAFgGAAQgHAAgJgJg");
	this.shape_113.setTransform(240.5,109.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.537)").s().p("AhYEWQAShmAHgWQAFgQApjIQAljFAEgIQAGgNAAgXQABgagIgPQgHgNAagHQAPgEAfgFQATgEgBAOQgCAOgSASQgbAZgcBeQgHAZgjDAQgmDDgDANQgJAegsCEIARhhg");
	this.shape_114.setTransform(236.8,101.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.8,-13,-27.4,12.2).s().p("Ah+G0QgSgRgGgIQgIgNgBgmQAAgYAqhyQArh0gBg4QAAgcAXiPQAPhdAOhQQANhDASgcQAUgbAwgQQBDgWAOASQAJAMgTAdQgZAjgSA2QgSA3gFA2QgGBAgYBsQgcB/gDAUQgKA9gVBIQgYBIgcAxQghA7gEAFQgFAFgFAAQgIAAgIgJg");
	this.shape_115.setTransform(233.8,108.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.537)").s().p("AhcEVQAThmAHgVQAFgQAtjJQApjFAEgIQAGgMABgYQAAgagHgPQgHgNAagHQAPgEAggEQASgEgBAOQgCAOgTASQgbAZgdBeQgIAagmC/QgpDFgDAKQgKAfguCEIAThig");
	this.shape_116.setTransform(230.3,101.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.9,-12.6,-27.6,11.8).s().p("AiFGzQgTgRgFgIQgIgNAAgmQAAgYAshzQAshzABg5QABgcAZiOQAUhvAMg/QAOhDASgcQAUgbAwgOQBEgWANASQAKANgUAcQgZAjgTA2QgUA3gFA2QgHBAgaBtQgeB/gEATQgKA+gXBHQgZBIgcAxQgjA7gEAFQgEAFgGAAQgHAAgIgKg");
	this.shape_117.setTransform(227.2,108);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.537)").s().p("AhhEVQAWhmAHgWQAGgQAvjIQAtjFAEgIQAGgNABgYQABgZgHgQQgGgNAagHQAOgDAggEQATgDgCAOQgCAOgTARQgbAZggBeQgIAYgpDAQgsDEgEAMQgJAfgxCEIAUhig");
	this.shape_118.setTransform(223.8,100.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.9,-12.2,-27.8,11.3).s().p("AiNGzQgSgSgFgIQgIgOABgmQAAgYAuhyQAuhzACg5QABgcAciPQAShgARhOQANhDAUgbQAVgbAwgOQBEgUANASQAJANgUAcQgaAjgUA2QgUA3gHA1QgIBAgbBtQggB/gEAUQgMA+gYBHQgaBHgdAxQgjA6gEAFQgFAGgGAAQgHAAgIgKg");
	this.shape_119.setTransform(220.7,107.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.537)").s().p("AhlEUQAXhmAIgVQAFgQA0jJQAvjFAEgIQAHgMABgYQABgagGgPQgGgOAagGQAOgDAggEQATgDgCAOQgDAOgTARQgdAbgfBcQgIAZgtC/QgwDEgEAMQgKAfgyCDIAWhig");
	this.shape_120.setTransform(217.5,99.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29,-11.8,-28,10.9).s().p("AiVGyQgRgSgFgJQgIgNABgmQABgZAwhxQAwh0ADg4QABgdAeiOQAZh4AOg3QANhDAWgaQAVgbAwgOQBEgSAMASQAJAOgVAbQgaAigUA2QgVA3gIA2QgJBAgdBtQgjB/gEAUQgMA+gaBGQgbBIgeAwQgkA7gFAEQgEAFgFAAQgIAAgIgKg");
	this.shape_121.setTransform(214.3,106.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.537)").s().p("AhqEUQAZhnAIgVQAGgPA2jJQAzjFAFgIQAHgMABgYQACgagGgQQgGgOAagFQAPgDAfgDQATgEgCAPQgDAOgTARQgcAYgjBdQgJAZgwDAQgyDEgEAMQgLAfg0CDIAXhig");
	this.shape_122.setTransform(211.2,98.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29,-11.4,-28.2,10.4).s().p("AidGxQgRgSgFgJQgHgOACgmQABgYAyhyQAyhzADg5QACgcAhiPQAZhvAQg/QAPhDAWgbQAVgaAwgNQBEgSANATQAJANgWAcQgaAigWA2QgWA2gJA2QgKBAgfBtQglB9gEAWQgMA+gcBHQgdBHgfAwQglA6gEAFQgEAFgFAAQgIAAgIgLg");
	this.shape_123.setTransform(208,105.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.537)").s().p("AhuETQAbhmAIgVQAGgRA6jHQA2jFAFgIQAHgMACgYQADgagHgQQgFgOAagFQAOgDAggDQATgCgDAOQgCAOgUARQgdAYgjBdQgKAZgzC/Qg2DEgEAMQgLAfg3CCIAZhig");
	this.shape_124.setTransform(205,97.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.1,-10.9,-28.3,10).s().p("AikGwQgRgTgFgJQgHgOADgmQABgYA0hyQA0hyAFg5QACgdAjiOQAahrARhDQARhEAXgaQAVgaAxgMQBEgRAMATQAIAOgVAbQgbAhgXA2QgXA3gKA2QgLBAghBtQgnB+gFAUQgMA/geBGQgeBHgfAwQglA5gFAFQgFAFgFAAQgIAAgHgLg");
	this.shape_125.setTransform(201.7,104.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.537)").s().p("AhzESQAdhmAIgVQAHgQA9jIQA6jFAFgIQAHgMACgYQADgagGgQQgFgOAagFQAPgCAfgCQATgDgDAPQgDAOgUAQQgdAYglBdQgJAYg3DAIg+DQQgMAeg5CCIAbhig");
	this.shape_126.setTransform(198.9,96.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.2,-10.5,-28.4,9.6).s().p("AisGvQgRgTgEgJQgHgOADgmQACgZA2hxQA2hyAFg5QADgdAmiPQAahkAThJQAThEAXgaQAWgZAwgMQBFgQALATQAIAOgWAbQgbAigYA1QgYA2gKA3QgMBAgjBtQgqB+gFAUQgOA+geBGQgfBHggAwQgnA5gFAEQgEAFgFAAQgIAAgHgLg");
	this.shape_127.setTransform(195.6,103.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.537)").s().p("Ah3ESQAehnAJgVQAHgQBBjIQA9jEAEgIQAIgMADgYQADgagFgQQgFgPAagEQAOgCAggCQASgCgDAPQgDAOgUAQQgeAYgmBcQgKAZg6C/IhCDPQgMAfg7CCIAdhig");
	this.shape_128.setTransform(192.8,95.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.2,-10.1,-28.6,9.2).s().p("Ai0GtQgQgTgEgJQgHgOAEgnQADgYA3hxQA4hxAGg6QADgcApiPQAchmAUhIQAUhDAXgaQAXgZAwgLQBFgPALATQAIAPgXAaQgcAhgYA2QgZA2gLA2QgOBAgkBtQgrB8gGAWQgPA+ggBGQggBHghAvQgoA5gEAEQgFAFgEAAQgIAAgIgMg");
	this.shape_129.setTransform(189.5,102.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(255,255,255,0.537)").s().p("Ah8ERQAghmAJgVQAHgQBFjIQBAjEAFgIQAIgMADgYQAEgagFgQQgFgPAagEQAOgCAggBQATgCgEAPQgDAOgUAPQgeAXgoBdQgLAYg9DAQhADDgFAMQgNAeg9CCIAehig");
	this.shape_130.setTransform(186.9,94.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.3,-9.7,-28.6,8.7).s().p("Ai7GsQgQgTgEgJQgGgPAEgmQADgZA5hwQA6hxAIg5QADgdAriPQAihxARg8QAWhEAXgZQAXgZAxgKQBEgOALATQAHAPgXAaQgcAhgZA1QgaA2gMA2QgPBAgnBtQgsB7gFAXQgSA+ghBGQghBGgiAvQgoA5gFAEQgEAEgFAAQgIAAgHgMg");
	this.shape_131.setTransform(183.4,101);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(255,255,255,0.537)").s().p("AiAEQQAhhmAKgVQAIgQBHjHQBEjEAFgHQAIgMAEgZQAEgZgFgRQgFgPAagDQAPgCAfgBQATgBgEAOQgDAOgVAQQgfAXgoBcQgLAYhBC/IhJDPQgNAeg/CBIAghig");
	this.shape_132.setTransform(181,92.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.3,-9.2,-28.7,8.4).s().p("AjDGrQgPgUgEgJQgGgOAFgnQAEgZA7hvQA7hxAJg6QAEgcAtiPQAfhhAXhMQAXhDAYgaQAXgZAxgJQBEgNAKAUQAIAPgYAaQgdAhgaA0QgaA2gOA2QgPBBgpBsQgvB9gFAVQgTA+giBFQgiBGgjAvQgpA4gFAEQgFAEgEAAQgIAAgHgMg");
	this.shape_133.setTransform(177.5,99.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(255,255,255,0.537)").s().p("AiFEQQAjhmAKgVQAIgRBLjGQBIjEAFgHQAIgMAEgYQAEgbgEgQQgEgPAagDQAOgCAgAAQASgBgEAPQgDAOgVAPQgfAWgrBcQgLAYhEC/IhMDPQgOAehBCAIAhhhg");
	this.shape_134.setTransform(175.2,91.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.4,-8.8,-28.8,7.9).s().p("AjKGqQgPgUgEgKQgGgPAGgmQAEgZA9hvQA9hwAKg6QAFgcAwiPQAhhqAYhDQAXhDAYgZQAYgZAxgIQBFgMAJAUQAIAOgYAbQgeAggbA0QgcA2gOA2QgQBAgrBtQgxB8gFAVQgVA+gjBFQgkBGgjAuQgqA3gFAFQgEAEgFAAQgHAAgHgMg");
	this.shape_135.setTransform(171.6,98.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(255,255,255,0.537)").s().p("AiJEOQAlhlALgVQAIgQBOjGQBLjDAFgIQAIgMAFgYQAFgagEgRQgEgPAagDQAOgBAfAAQATAAgEAOQgEAOgVAPQgfAWgtBbQgLAYhIC/QhJDBgGANQgOAehECAIAjhig");
	this.shape_136.setTransform(169.4,89.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.4,-8.4,-28.9,7.5).s().p("AjSGoQgPgVgDgJQgGgPAHgnQAEgYA/hvQA/hvALg6QAFgdAziOQAnh3AVg2QAYhDAZgZQAYgYAxgIQBFgLAJAUQAHAPgZAaQgeAggcA0QgcA1gPA3QgSBAgsBsQgyB9gHAUQgVA+glBFQgkBFgkAuQgsA3gEAEQgFAFgEAAQgIAAgHgNg");
	this.shape_137.setTransform(165.8,96.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(255,255,255,0.537)").s().p("AiOENQAnhlALgVQAIgQBSjFQBOjDAFgHQAJgMAFgYQAGgbgEgRQgEgPAagCQAPgBAfABQASgBgEAPQgFAOgVAOQgfAWguBbQgMAYhLC+QhNDCgGAMQgPAehFB/IAkhig");
	this.shape_138.setTransform(163.7,88.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.4,-7.9,-29,7.1).s().p("AjaGmQgOgUgDgKQgFgPAHgmQAFgZBAhuQBBhvAMg6QAGgdA1iOQAmhuAZg+QAahDAZgYQAYgZAxgHQBFgJAJAUQAHAPgZAZQgfAggdA0QgdA1gQA2QgTBBguBrQg1B9gHAUQgWA+glBEQgnBGgkAtQgtA3gEADQgFAEgEAAQgIAAgHgNg");
	this.shape_139.setTransform(160,95.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(255,255,255,0.537)").s().p("AiSENQAphmALgUQAIgQBWjFQBRjCAFgIQAJgLAFgZQAGgagDgRQgDgPAZgCQAPgBAfABQASAAgEAOQgFAOgVAPQggAVgvBbQgNAYhOC9IhWDNQgQAehIB/IAnhhg");
	this.shape_140.setTransform(158.1,86.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.3,-7.5,-29.1,6.7).s().p("AjhGlQgOgVgDgKQgFgPAIgnQAFgZBDhtQBDhuAMg6QAHgdA3iNQArh1AXg4QAbhDAZgYQAZgXAxgHQBEgJAJAVQAGAPgZAZQgfAfgdA0QgfA1gRA2QgUBBgwBrQg2B9gIATQgXA+gnBEQgnBFglAtQgtA2gFAEQgEAEgFAAQgHAAgHgNg");
	this.shape_141.setTransform(154.4,93.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(255,255,255,0.537)").s().p("AhhCSQAIgOBZjHQBVjBAGgHQAIgMAGgYQAHgagEgSQgDgPAagBQAPgBAfACQASgBgEAPQgFAOgWAOQggAVgxBaQgNAYhRC9QhUDBgGAMQgQAdhKB+QBMi5ASghg");
	this.shape_142.setTransform(152.6,85.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.4,-7.1,-29,6.3).s().p("AjoGjQgOgVgDgKQgEgPAJgnQAFgZBEhtQBFhuAOg6QAHgdA6iNQAshyAYg5QAdhDAZgYQAagXAwgGQBFgIAIAVQAGAPgZAZQggAfgeA0QgfA0gSA2QgVBAgyBrQg5B7gIAVQgYA9goBEQgoBFgmAtQguA1gFAEQgFAEgEAAQgIAAgGgNg");
	this.shape_143.setTransform(148.7,91.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.537)").s().p("AhjCSQAJgPBajFQBajBAGgIQAJgLAGgYQAHgagDgSQgDgPAagBQAPgBAeADQATAAgFAOQgFAOgWAOQggAUgzBaQgNAYhVC8QhXDAgGAMQgRAehMB9QBPi5ATggg");
	this.shape_144.setTransform(147.1,83.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.3,-6.7,-29.2,5.8).s().p("AjwGhQgNgWgCgKQgFgPAKgnQAGgYBGhtQBGhsAPg7QAHgdA8iMQAthwAbg8QAehCAagYQAZgXAxgFQBEgHAIAVQAGAQgaAYQggAegfA0QggA0gTA2QgWBAg0BrQg6B6gJAVQgaA+goBDQgqBFgmAsQgvA1gFAEQgFADgEAAQgIAAgGgNg");
	this.shape_145.setTransform(143.2,90.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,255,255,0.537)").s().p("AhlCSQAJgQBejEQBdjAAFgHQAKgLAGgZQAIgagDgRQgCgQAZgBQAPAAAeADQATAAgFAOQgGAOgWAOQghAVgzBZQgOAYhYC7QhaDAgHALQgQAehPB8QBSi4AUggg");
	this.shape_146.setTransform(141.7,81.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.3,-6.3,-29.2,5.4).s().p("Aj3GfQgMgWgDgKQgEgPAKgnQAHgZBHhsQBJhsAQg6QAIgcA+iNQAuhsAdg/QAehCAbgXQAagXAwgEQBFgHAHAWQAGAPgbAZQggAeghAzQghA0gTA2QgYBAg1BqQg9B7gIATQgbA9gqBEQgqBEgoAsQgwA1gEADQgFAEgEAAQgIAAgGgOg");
	this.shape_147.setTransform(137.7,88.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,255,255,0.537)").s().p("AhoCRQAKgQBhjCQBgjAAGgHQAJgMAHgYQAIgagCgRQgCgQAZAAQAPgBAeAEQATAAgGAOQgFAOgXAOQghAUg1BYQgOAXhbC8QhdC+gIANQgRAdhQB8QBVi4AUggg");
	this.shape_148.setTransform(136.4,79.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.3,-5.8,-29.1,5.1).s().p("Aj+GdQgMgWgDgKQgDgQALgmQAHgZBJhrQBKhsARg6QAIgdBBiLQAyhyAcg5QAfhCAbgXQAbgWAwgEQBEgFAIAVQAFAQgbAYQghAeghAzQgiA0gUA1QgZBAg3BqQg+B5gKAVQgbA9grBDQgsBDgoAsQgxA0gFAEQgEADgEAAQgIAAgGgOg");
	this.shape_149.setTransform(132.3,86.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,255,255,0.537)").s().p("AhqCQQAKgPBkjDQBji+AHgIQAJgLAIgYQAIgagCgSQgCgPAaAAQAOAAAeADQATABgGAOQgGAOgWANQggATg4BZQgPAYheC6QhhC+gHAMQgRAdhSB7QBYi3AUggg");
	this.shape_150.setTransform(131.1,77.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.3,-5.4,-29.2,4.7).s().p("AkFGbQgMgWgCgLQgDgPALgnQAHgYBMhrQBLhrASg6QAJgcBDiMIBRiqQAhhBAbgXQAagWAxgDQBEgFAHAWQAFAQgbAYQgiAdgiAzQgiAzgWA2QgZA/g5BqQhAB4gKAVQgdA9gsBCQgtBEgpArQgxAzgFAEQgFADgEAAQgIAAgFgOg");
	this.shape_151.setTransform(127,84.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(255,255,255,0.537)").s().p("AhsCPQAKgPBnjBQBni+AGgHQAKgMAIgYQAJgagCgRQgCgQAaAAQAOAAAeAEQATABgHAPQgGAOgWAMQghATg5BYQgPAYhhC5QhjC9gIAMQgSAdhUB7QBbi3AVggg");
	this.shape_152.setTransform(125.9,75.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.2,-5,-29.2,4.3).s().p("AkMGZQgLgXgDgKQgDgQAMgmQAIgZBNhpQBOhrASg6QAQgtCTkkQAihBAbgWQAbgWAwgDQBFgDAGAWQAFAPgcAYQgiAdgiAyQgkA0gWA1QgbA/g7BpQhDB6gJATQgeA9gtBCQguBDgpAqQgyAzgGAEQgEADgEAAQgIAAgFgOg");
	this.shape_153.setTransform(121.7,82.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(255,255,255,0.537)").s().p("AhuCPQAKgPBrjBQBpi9AHgHQAJgLAJgYQAJgbgBgRQgBgQAZABQAOAAAeAFQATABgHAOQgGAOgXAMQgiATg5BXQgQAXhkC6QhnC8gHAMQgTAdhWB5QBei2AWgfg");
	this.shape_154.setTransform(120.8,73.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.2,-4.6,-29.1,4).s().p("AkTGWQgLgWgBgLQgDgPAMgnQAIgYBPhpQBPhqAUg6QAKgbBIiMQA4hwAeg4QAjhBAcgXQAbgVAxgCQBEgDAGAWQAEARgcAXQgiAcgkAyQgkAzgXA1QgcA/g8BpQhEB3gLAVQgfA9guBBQgvBDgqAqQgzAygFAEQgFADgEAAQgIAAgFgPg");
	this.shape_155.setTransform(116.5,80.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(255,255,255,0.537)").s().p("AhwCOQAKgPBujAQBti8AGgHQAKgLAJgYQAKgagBgSQgBgQAZABQAPABAdAFQATABgHAOQgHAOgWAMQgiASg8BYQgQAXhnC4QhpC8gIALQgTAdhYB5QBhi1AWggg");
	this.shape_156.setTransform(115.7,71.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.2,-4.2,-29.1,3.6).s().p("AkaGUQgKgXgCgKQgCgQANgmQAJgZBQhoQBRhpAVg6QAKgbBKiMQA8h0AdgzQAkhBAcgWQAcgVAwgBQBEgCAGAWQADAQgcAXQgiAcglAyQglAygYA1QgdBAg9BoQhIB4gKATQggA8gvBCQgwBCgrApQgzAzgGADQgEADgEAAQgIAAgFgPg");
	this.shape_157.setTransform(111.3,78.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(255,255,255,0.537)").s().p("AhzCNQALgPBxi/QBwi7AGgHQALgLAJgYQAKgagBgSQAAgQAZACQAOAAAeAGQASACgHAOQgHANgXANQgiARg8BXQgQAXhrC3QhtC7gIALQgTAdhaB4QBki0AWggg");
	this.shape_158.setTransform(110.7,69.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.1,-3.8,-29,3.2).s().p("AkgGSQgKgXgCgLQgCgPAOgnQAJgYBShoQBShoAWg6QALgaBNiMQA6htAhg6QAlhAAdgWQAcgVAwAAQBEgBAFAWQADAQgcAXQgjAbglAyQgmAygZA1QgeA/hABnQhIB2gLAWQghA8gwBAQgxBCgsApQg0AygFADQgFADgDAAQgJAAgEgPg");
	this.shape_159.setTransform(106.2,76.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(255,255,255,0.537)").s().p("Ah0CMQAKgOB1i+QByi7AHgHQAKgLAKgYQALgagBgRQAAgQAZABQAOABAeAGQASACgHAOQgHAOgXAMQgjARg+BWQgQAWhtC3QhwC6gJAMQgTAchcB4QBni0AXggg");
	this.shape_160.setTransform(105.7,67.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29,-3.4,-29,2.9).s().p("AknGQQgJgXgCgLQgCgQAPgmQAKgZBThmQBUhoAXg5QALgbBPiLIBeimQAmhBAdgVQAcgVAwABQBEAAAFAWQADARgdAWQgjAbgmAxQgnAygZA1QgfA+hCBnQhJB0gMAXQgiA8gxBAQgzBBgsApQg0AxgGADQgFADgDAAQgJAAgEgPg");
	this.shape_161.setTransform(101.2,73.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(255,255,255,0.537)").s().p("Ah2CMQALgPB3i9QB1i6AHgHQALgKAKgYQALgaAAgSQgBgQAaACQAOABAdAGQASACgHAPQgHANgYAMQgjARg+BVQgRAWhwC2QhzC5gJAMQgUAcheB3QBqizAYgfg");
	this.shape_162.setTransform(100.8,65);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.9,-3,-29,2.6).s().p("AkuGOQgJgYgBgKQgBgQAPgnQAJgYBWhmQBWhmAXg6QAMgaBRiLQA4hjAphCQAnhAAdgVQAdgVAwABQBDABAEAWQADARgdAWQgjAbgnAwQgoAygaA1QggA+hDBmQhMB0gMAWQgjA8gyBAQgzBAgtApQg1AwgGAEQgEACgEAAQgIAAgFgPg");
	this.shape_163.setTransform(96.2,71.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(255,255,255,0.537)").s().p("Ah4CLQALgOB6i8QB5i5AHgHQAKgLALgXQALgaAAgSQAAgQAZACQAOABAeAHQASACgIAOQgHAOgYALQgjARhABVQgRAWhzC1Qh2C4gJAMQgVAchfB1QBtiyAYgfg");
	this.shape_164.setTransform(95.9,62.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.8,-2.6,-29,2.3).s().p("Ak0GLQgJgXgBgLQgBgQAQgmQAKgZBXhlQBXhmAZg5QAUguCukbQApg/AdgVQAdgUAwABQBDACAEAWQADARgeAWQgkAagnAxQgoAxgcA0QghA+hFBmQhOB1gMAUQgjA8g0A/Qg0BAgtAoQg2AwgGAEQgEACgDAAQgJAAgEgQg");
	this.shape_165.setTransform(91.3,69.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,255,255,0.537)").s().p("Ah6CLQALgPB9i7QB8i4AHgHQALgKALgYQALgaABgSQAAgQAZADQAOABAdAHQASADgIAOQgHANgYALQgkARhBBUQgSAXh1CzIiCDDQgVAchhB1QBviyAZgeg");
	this.shape_166.setTransform(91.1,60.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.8,-2.2,-28.9,2).s().p("Ak6GJQgIgYgBgKQgBgQAQgmQALgZBYhkQBZhlAZg5QANgbBUiJQBDhrAlg5QApg/AegVQAdgUAvACQBEADADAWQADARgeAVQglAbgoAwQgpAxgcA0QgiA+hGBlQhRB2gMATQgkA6g0BAQg1A/guAoQg4AwgFADQgEACgEAAQgIAAgEgQg");
	this.shape_167.setTransform(86.4,66.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(255,255,255,0.537)").s().p("Ah9CKQAMgOCAi7QB+i3AIgGQALgLALgYQAMgZABgSQAAgQAZACQAOACAdAHQASADgIAOQgIAOgYAKQgjAQhDBUQgRAWh5CzQh7C2gKAMQgWAchjB0QByixAZgeg");
	this.shape_168.setTransform(86.4,57.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.7,-1.9,-28.8,1.6).s().p("AlAGGQgIgXgBgLQAAgQARgmQALgZBZhjQBbhlAag4QANgaBWiJQA+hiAshCQAqg/AegUQAegTAvACQBEAEADAWQACARgeAVQglAagpAwQgqAwgdA0QgiA+hIBlQhRBygOAVQglA7g2A/Qg2A/guAnQg4AvgGADQgEADgDAAQgJAAgDgRg");
	this.shape_169.setTransform(81.6,64.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(255,255,255,0.537)").s().p("Ah+CJQALgNCDi7QCBi1AIgHQALgKAMgYQAMgaABgSQABgQAZADQAOACAdAIQARADgIANQgIAOgYAKQglARhDBSQgSAXh7CxQh/C2gJALQgWAchlBzQB1iwAageg");
	this.shape_170.setTransform(81.7,55.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.5,-1.5,-28.8,1.4).s().p("AlGGFQgIgYAAgLQgBgQASgmQALgYBchjQBbhkAcg5QAXgvC7kVQArg/AegUQAegTAvADQBDAEADAXQACARgeAUQgmAagpAvQgrAwgeA0QgkA+hJBkQhUB0gMATQgmA6g3A/Qg3A+gvAnQg4AvgGADQgEACgDAAQgJAAgDgQg");
	this.shape_171.setTransform(76.9,61.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(255,255,255,0.537)").s().p("AiACIQAMgOCGi4QCDi1AIgHQALgKAMgXQANgaABgSQACgQAYADQAOACAdAIQARADgIAOQgIANgYALQglAPhFBTQgSAVh+CyQiBC0gKALQgWAchnByQB4ivAageg");
	this.shape_172.setTransform(77.1,52.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.4,-1.2,-28.7,1.1).s().p("AlMGCQgHgYgBgLQAAgQASgmQAMgYBdhiQBdhjAcg4QAOgaBaiIQA9hZAzhJQAsg+AegTQAegUAvAEQBDAFACAWQACARgfAVQglAZgqAvQgrAwgfA0QglA9hLBkQhUBxgOAVQgoA6g3A+Qg4A/gvAlQg6AugFADQgEADgDAAQgJAAgDgRg");
	this.shape_173.setTransform(72.2,59.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(255,255,255,0.537)").s().p("AiCCIQANgOCIi4QCGi0AIgGQALgKANgYQANgZACgSQABgQAZADQAOACAcAIQARAEgIAOQgIANgZAKQglAQhFBRQgTAWiBCwQiEC0gJALQgXAbhoByQB6ivAagdg");
	this.shape_174.setTransform(72.5,50.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.3,-0.9,-28.6,0.8).s().p("AlSGAQgHgZAAgKQAAgQATgmQAMgZBehhQBfhiAdg4QAOgaBciHQBKhpAog4QAtg+AfgTQAegTAvAEQBDAFACAXQABARgfAUQgmAZgrAvQgsAwgfAzQgmA9hMBjQhXBygOAUQgoA6g4A9Qg5A+gwAmQg5AtgGADQgEADgEAAQgJAAgCgRg");
	this.shape_175.setTransform(67.5,56.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(255,255,255,0.537)").s().p("AiECHQANgOCLi3QCJiyAHgHQAMgKANgXQANgaACgSQACgQAYAEQAOACAdAIQARAEgJAOQgJANgYAKQgkAPhIBRQgUAWiCCvQiIC0gIAKQgXAbhqBxQB8iuAbgdg");
	this.shape_176.setTransform(68,47.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.2,-0.5,-28.5,0.6).s().p("AlYF+QgGgZAAgKQAAgRAUglQAMgYBghhQBghiAeg4QAPgaBdiFQBLhpAqg4QAug+AfgTQAegSAvAEQBCAHACAXQABARgfAUQgnAYgrAvQgtAvggAzQgnA9hNBiIhnCFQgpA6g4A9Qg6A9gxAmQg7AtgFADQgEACgDAAQgKAAgCgRg");
	this.shape_177.setTransform(62.9,54.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(255,255,255,0.537)").s().p("AiGCGQAOgOCNi1QCMiyAHgGQAMgKANgXQAOgaACgSQACgQAZAEQANACAcAJQASAEgJANQgJAOgYAJQglAPhJBRQgUAWiFCuQiKCygJAKQgXAbhsBwQB/isAbgeg");
	this.shape_178.setTransform(63.5,45.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.1,-0.3,-28.4,0.3).s().p("AldF7QgGgYAAgLQABgQAUgmQANgYBghgQBihgAfg4QAPgaBfiFQBFheAyhCQAvg9AfgTQAfgSAvAFQBCAHABAXQABARggATQgmAZgtAuQgtAvghAzQgnA8hPBiQhZBugQAWQgpA5g6A9Qg7A9gxAlQg7AtgGADQgEABgDAAQgJAAgCgRg");
	this.shape_179.setTransform(58.4,51.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(255,255,255,0.537)").s().p("AiHCGQANgOCQi0QCPiyAHgGQAMgJANgYQAPgZACgSQACgQAZAEQANACAcAJQARAEgJAOQgJANgYAKQglANhKBRQgUAViICuQiLCwgKALQgYAbhtBvQCBirAcgdg");
	this.shape_180.setTransform(59,42.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.9,0,-28.3,0).s().p("AliF5QgGgZAAgLQABgQAVglQANgYBihfQBjhgAfg4QAQgaBhiEQBMhmAtg5QAwg9AggTQAfgSAuAGQBCAHABAXQABARggAUQgnAYgtAtQguAvgiAzQgoA8hRBhQhZBtgRAXQgqA4g7A9Qg7A8gyAlQg8AtgFACQgEACgDAAQgKAAgBgRg");
	this.shape_181.setTransform(53.9,48.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(255,255,255,0.537)").s().p("AiJCFQAOgOCTizQCQixAIgGQAMgJAOgYQAOgZADgSQACgQAZAEQANADAcAJQARAEgJAOQgJANgZAJQglAOhLBQQgUAViLCtQiOCvgKALQgYAbhvBuQCFirAbgcg");
	this.shape_182.setTransform(54.6,39.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.8,0.2,-28.2,-0.2).s().p("AloF3QgFgZABgLQABgQAVglQANgYBkheQBkhgAgg4QAQgZBkiEQBNhlAug5QAwg9AggSQAfgSAuAGQBCAIABAXQAAASggATQgnAXguAuQguAugjAyQgpA8hSBhQhdBvgPAUQgrA5g8A7Qg8A9gyAkQg8AsgGACQgEACgDAAQgJAAgCgRg");
	this.shape_183.setTransform(49.4,46.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(255,255,255,0.537)").s().p("AiLCEQAOgOCViyQCTivAIgGQAMgKAOgXQAPgZADgSQADgQAYAEQAOADAbAKQARAEgJAOQgKANgZAJQglANhMBPQgUAViNCsQiQCugLAMQgYAahwBuQCGiqAcgdg");
	this.shape_184.setTransform(50.3,37.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.6,0.5,-28.1,-0.4).s().p("AltF1QgFgZABgLQABgQAWgmQAOgXBkheQBmheAhg4QAQgaBliDQBUhqAqgzQAxg9AggRQAfgSAvAGQBBAJAAAXQABARghATQgnAXguAtQgwAugjAzQgpA7hUBgQheBugQAVQgsA4g8A7Qg9A8gzAkQg8ArgGADQgEACgDAAQgKAAgBgRg");
	this.shape_185.setTransform(45,43.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,4,581.6,151.2);


(lib.gillsbtm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.537)").s().p("AArB/QgCgNgziNQgyiMAAgHQAAgLgLgOQgMgQgPgEQgNgEAYgTQANgLAggVQASgNAGAJQAFAKgMAVQgQAeAOBIQAEATAzCHQA1CJACAKQAFAXAQBnQg4iBgFgag");
	this.shape.setTransform(574.9,33.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],22.9,-21.6,-16,22).s().p("ABCFUQgPgDgTgWQgLgOgKhdQgJhdgZghQgOgRgshhQghhLgSgtQgSgwAIgbQAJgcArgkQA+g0AXADQAOACgHAcQgIAjAGArQAFArAUAjQAYApAaBPQAeBZAHAPQATAqAJA4QAJA4gGAuQgIA2gCAFQgGANgXgBIgRAAQgOAAgHgBg");
	this.shape_1.setTransform(575.7,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.537)").s().p("AAqCAQgCgNgxiPQgxiNAAgHQABgLgLgPQgMgPgPgFQgOgEAZgTQANgKAggVQASgNAFAKQAFAJgLAVQgLASABAfQAAAUAHAiQAEATAxCIQAzCLACAJQAFAXAPBpQg3iDgEgag");
	this.shape_2.setTransform(569.4,35.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],23.2,-21.5,-16.2,21.9).s().p("ABlFXQgcABgKgCQgPgEgSgWQgMgOgIhdQgJhegZgiQgWgbhTjRQgTgwAJgcQAJgbAsgkQA+gzAWADQAPACgIAcQgIAjAEArQAGAsAUAjQAYAqAZBPQAdBbAHAOQASArAIA4QAJA5gHAtQgIA3gCAFQgFALgTAAIgFAAg");
	this.shape_3.setTransform(570,40.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.537)").s().p("AApCAQgCgMgwiRQgviOAAgIQABgKgLgPQgMgQgPgFQgNgEAYgTIAugeQASgNAFAJQAFAKgMAVQgRAeAOBJQADATAwCJQAyCNACAJQAFAYANBpQg1iEgEgbg");
	this.shape_4.setTransform(563.8,37.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],23.4,-21.5,-16.5,21.8).s().p("ABhFZQgcABgKgDQgPgDgSgXQgLgOgHheQgIhegYgjQgOgRgphjQgihSgOgpQgSgwAJgbQAJgcAsgjQA+gzAVAEQAQACgIAcQgIAjADArQAGAsATAkQAYAqAYBQQAcBcAGAOQATAsAHA4QAIA5gHAtQgJA3gCAFQgFAMgRAAIgHgBg");
	this.shape_5.setTransform(564.4,42.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.537)").s().p("AAoCBQgCgMguiTQguiPAAgIQABgKgKgPQgMgQgPgGQgNgEAYgSIAugeQASgNAFAKQAFAJgMAVQgSAfAOBJQADATAuCKQAwCOACAJQAFAYAMBqQgziFgEgbg");
	this.shape_6.setTransform(558.2,39.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],23.6,-21.4,-16.7,21.7).s().p("ABdFcQgcgBgJgCQgPgEgSgXQgLgOgGhfQgGhegZgjQgNgSgohkQgehKgRgyQgRgwAJgcQAJgbAsgkQA/gxAUADQAQADgIAcQgKAjAFAsQAFAsATAkQAWAqAYBRQAbBdAGAOQASAsAHA5QAHA6gHAtQgJA3gCAEQgFAMgSAAIgHAAg");
	this.shape_7.setTransform(558.8,44.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.537)").s().p("AAnCCQgCgNgsiTQgtiRABgHQABgLgLgPQgLgRgPgFQgNgFAZgSQANgKAggUQATgMAEAKQAFAJgMAVQgSAfANBJQADAUAsCLQAvCQACAJQAEAYALBqQgyiGgDgbg");
	this.shape_8.setTransform(552.5,41.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],23.8,-21.4,-17,21.6).s().p("ABaFeQgcgBgKgCQgOgEgSgXQgLgPgGhfQgDhfgagkQgMgRgohlQgdhOgQgvQgRgxAJgcQAKgcAsgjQA/gxAUAEQARADgJAcQgLAjAFAsQAFAsASAlQAWArAXBRQAbBfAFANQASAsAGA6QAGA5gHAuQgKA4gCAEQgFALgRAAIgHAAg");
	this.shape_9.setTransform(553.1,46.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.537)").s().p("AAlCCQgCgNgqiUQgriTABgHQABgLgKgPQgLgQgPgGQgNgFAYgSQAOgKAggTQATgMAFAJQADAKgLAVQgLASAAAfQgBAUAFAjQADAUArCNQAtCQACAKQAEAYALBrQgxiIgEgbg");
	this.shape_10.setTransform(546.9,43.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],24,-21.3,-17.2,21.5).s().p("ABWFgQgcgBgKgCQgOgFgRgXQgLgPgFhfQgDhggZgkQgMgSgmhmQgehTgOgrQgQgyAJgbQAKgcAsgiQA/gxAVAEQAQADgJAcQgLAjAEAsQAEAtASAlQAWAsAWBSQAaBfAFAOQARAsAGA6QAFA6gIAuQgKA3gCAFQgFALgQAAIgIgBg");
	this.shape_11.setTransform(547.5,48.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.537)").s().p("AAkCDQgBgNgpiWQgqiTABgIQABgLgKgPQgLgRgOgGQgNgFAZgRQANgKAhgTQASgMAFAJQACAKgKAVQgLASgBAfQgBAWAFAiQADAUApCOQAsCRABAKQAEAYAJBsQgviJgDgbg");
	this.shape_12.setTransform(541.2,45.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],24.2,-21.2,-17.5,21.4).s().p("ABSFiQgbgBgKgDQgOgEgRgYQgLgQgDhfQgDhggYglQgMgSglhnQgbhMgQgzQgQgyAKgcQAKgbAtgiQA/gxAUAFQAQADgJAcQgLAjAEAtQADAtASAlQAWAsAUBTQAZBfAFAPQAQAtAFA6QAGA6gJAuQgLA3gCAFQgFALgQAAIgIgBg");
	this.shape_13.setTransform(541.8,50.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.537)").s().p("AAjCDQgBgNgniXQgoiUABgIQABgLgKgPQgLgRgOgGQgNgGAZgRQAOgKAggSQASgMADAKQAEAKgKAUQgLASgBAgQgBAVAEAjQADAUAnCPQAqCSACAKQAEAZAIBsQguiKgDgcg");
	this.shape_14.setTransform(535.5,47.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],24.4,-21.2,-17.7,21.3).s().p("ABOFkQgbgBgKgDQgOgFgRgYQgKgQgBhgQgDhhgYgkQgMgTgkhoQgahOgPgyQgPgyAKgcQAKgcAtghQBAgwAUAFQAQADgKAcQgLAjADAtQADAtARAmQAVAsAUBUQAYBgAFAPQAQAtAEA6QAFA7gJAuQgMA4gCAEQgFALgPAAIgJgBg");
	this.shape_15.setTransform(536.1,52.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.537)").s().p("AAiCEQgBgNgmiYQgmiWABgHQABgLgJgQQgLgRgOgHQgNgFAZgRQAOgKAggSQARgMAEAKQAEAKgKAUQgTAeAJBMQACAVAmCQQApCUABAKQAEAYAHBtQgsiLgDgcg");
	this.shape_16.setTransform(529.8,48.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],24.7,-21,-17.9,21.2).s().p("ABKFmQgbgCgJgDQgOgEgRgZQgIgPgChhQgBhhgYgmQgMgSgjhqQgahQgOgxQgOgyAKgcQALgcAtghQA/gvAUAFQAQADgJAdQgMAjACAsQADAuARAmQAUAtAUBUQAWBiAFAOQAPAtAEA7QAEA7gJAvQgMA3gCAFQgFAKgPAAIgKgBg");
	this.shape_17.setTransform(530.3,54);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.537)").s().p("AAhCEQgBgMgkiaQgliXABgIQABgLgJgQQgKgRgOgHQgNgFAZgRIAugcQARgLAEAKQAEAKgLAUQgTAfAJBMQACAUAkCSQAnCUABALQAEAYAGBuQgriNgCgcg");
	this.shape_18.setTransform(524.1,50.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],24.9,-21,-18.1,21.1).s().p("ABHFoQgbgDgKgDQgOgEgQgZQgIgQgBhiQgBhigXglQgLgTgihqQgahUgMguQgOgzAKgcQALgcAtghQA+guAWAFQAQAEgKAcQgMAjACAtQACAuARAmQAUAuASBVQAVBiAFAOQAPAuADA7QADA8gKAuQgMA4gCAEQgFALgOAAIgKgBg");
	this.shape_19.setTransform(524.6,55.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.537)").s().p("AAgCFQgBgOgiiaQgjiYABgIQABgLgJgQQgKgRgOgHQgNgGAZgRIAvgbQARgLAEAKQAEAKgNAVQgSAeAIBMQACAUAiCTQAmCXABAKQADAYAFBvQgpiOgCgcg");
	this.shape_20.setTransform(518.4,52.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],25.1,-20.9,-18.4,21).s().p("ABDFqQgbgDgJgDQgOgFgQgZQgIgQAAhiQAAhigXgmQgLgTgghrQgWhLgPg5QgOgzALgcQALgcAuggQA+guAVAFQAQAEgKAdQgNAjACAtQACAuAQAnQAUAuARBVQAUBjAEAPQAPAuACA7QADA8gKAvQgNA4gCAEQgFAKgOAAIgKgBg");
	this.shape_21.setTransform(518.8,57.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.537)").s().p("AAfCGQgBgNghicQghiZABgIQACgLgJgQQgKgSgOgHQgNgGAagQQAOgKAggRQARgMAEALQAEAKgNAUQgSAeAHBOQACAUAhCUQAjCXABAKQADAZAEBvQgoiPgBgcg");
	this.shape_22.setTransform(512.6,54.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],25.3,-20.8,-18.6,20.9).s().p("AA+FsQgagDgJgDQgOgGgOgZQgKgRABhiQAChigXgnQgLgTgfhsQgWhRgNg0QgNg0ALgcQALgbAuggQA+guAWAGQAPAEgKAdQgNAjABAuQACAuAPAnQATAuAQBWQAUBjAEAQQAOAvACA7QACA8gLAvQgNA3gCAFQgGALgNAAIgLgCg");
	this.shape_23.setTransform(513.1,59.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.537)").s().p("AAdCGQAAgNgfidQggibABgHQACgLgJgRQgJgSgOgHQgNgGAagQQAOgJAggSQARgLAEALQAEAKgOAUQgRAfAGBNQABAUAgCWQAhCZABAJQADAZACBwQgliQgCgdg");
	this.shape_24.setTransform(506.9,55.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],25.5,-20.7,-18.9,20.8).s().p("AA6FuQgbgDgJgEQgOgFgNgaQgJgQAChjQAChjgWgnQgLgUgdhtQgXhTgLgyQgNg1AMgbQALgcAuggQA/gtAVAGQAPAFgKAcQgNAjABAuQABAvAPAnQASAvAPBXQASBkAEAPQAOAvABA8QACA8gLAvQgOA4gDAFQgFAKgNAAIgLgCg");
	this.shape_25.setTransform(507.3,61.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.537)").s().p("AAcCHQAAgOgdieQgeibABgIQACgLgJgRQgJgSgOgHQgMgHAZgQQAOgJAhgRQARgLAEALQADAKgNAVQgSAeAFBNQABAVAeCWQAgCaABAKQACAZABBwQgkiRgBgcg");
	this.shape_26.setTransform(501.1,57.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],25.7,-20.6,-19.1,20.6).s().p("AA2FwQgagEgKgEQgNgFgNgaQgJgRADhjQADhkgVgnQgLgUgchuQgThJgOg9QgMg1AMgcQALgbAuggQA/gsAVAGQAQAFgLAcQgNAkAAAtQAAAvAPAoQASAwAOBWQARBmAEAPQANAwABA7QABA9gMAvQgOA4gDAFQgFAJgMAAIgMgBg");
	this.shape_27.setTransform(501.5,62.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.537)").s().p("AAbCHQAAgNgbigQgdicACgIQABgLgIgRQgJgSgOgIQgMgGAZgQQAPgJAegRQATgKAEAKQAEALgOAUQgSAeAEBOQAAAVAdCXQAeCbABAKQACAaAABwQgiiSgBgdg");
	this.shape_28.setTransform(495.3,59);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],25.8,-20.5,-19.4,20.5).s().p("AAyFyQgagEgKgEQgNgGgNgaQgJgRAFhjQAEhkgVgoQgLgUgbhvQgUhRgLg3QgLg1AMgcQAMgbAugfQA/gsAVAHQAPAFgLAcQgOAjAAAuQAAAvAOApQARAwAOBXQAQBlAEAQQAMAwAAA8QABA+gNAuQgOA4gDAFQgFAJgMAAQgFAAgHgBg");
	this.shape_29.setTransform(495.7,64.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.537)").s().p("AAZCIQAAgOgZigQgbieABgIQACgLgIgRQgJgSgNgIQgMgHAZgQQAOgIAfgRQATgKAEALQADAKgOAUQgSAeACBPQAAAVAdCYQAdCdAAAJQACAagBBxQghiTgBgdg");
	this.shape_30.setTransform(489.5,60.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],26.1,-20.4,-19.6,20.4).s().p("AAuF0QgagFgJgEQgMgFgOgbQgJgRAFhkQAGhlgVgoQgKgUgahwQgThQgLg4QgKg2AMgcQAMgbAugfQBAgrAVAHQAPAFgLAcQgPAjAAAvQgBAvAOApQAQAwANBYQAPBlAEARQALAwAAA9QAAA9gNAvQgPA4gDAFQgFAJgMAAQgGAAgGgBg");
	this.shape_31.setTransform(489.9,66);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.537)").s().p("AAYCIQAAgNgYiiQgZifACgHQABgMgHgRQgJgSgNgIQgMgHAZgQQAPgIAegQQATgLAEALQADALgOAUQgTAeABBPQABAVAbCZQAbCeAAAKQABAZgCByQgfiVAAgdg");
	this.shape_32.setTransform(483.7,62.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],26.3,-20.3,-19.9,20.2).s().p("AApF1QgagEgJgFQgLgGgOgbQgJgRAHhkQAGhlgUgpQgKgVgZhwQgThXgJgzQgJg2AMgbQAMgcAugeQBAgrAVAIQAPAFgMAcQgOAkgBAuQgBAwANApQAQAwAMBZQANBmAEAQQALAxgBA9QgBA+gNAvQgQA4gCAFQgFAJgMAAQgGAAgHgCg");
	this.shape_33.setTransform(484.1,67.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.537)").s().p("AAWCJQAAgOgWijQgXifABgIQADgLgIgSQgJgTgNgIQgMgHAagPIAtgYQATgLADAMQADAKgOAUQgVAeACBPQABAVAZCbQAZCeAAALQACAZgEByQgdiVAAgdg");
	this.shape_34.setTransform(478,63.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],26.4,-20.2,-20.1,20).s().p("AAlF3QgagFgJgEQgLgGgNgcQgJgRAHhlQAIhlgUgqQgJgUgYhxQgShXgIg0QgKg2ANgcQAMgcAvgdQBAgrAUAIQAPAGgLAcQgPAjgCAvQgBAwANApQAPAxALBZQAMBpADAPQALAxgCA9QgBA+gOAvQgQA4gDAFQgFAJgLAAQgGAAgHgCg");
	this.shape_35.setTransform(478.2,69.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.537)").s().p("AATCJQABgOgUijQgWihACgIQACgLgHgSQgJgTgNgIQgLgHAZgPQAPgJAegPQATgKAEALQADALgPAUQgVAdABBQQABAVAXCcQAXCfABALQABAagFByQgciXAAgdg");
	this.shape_36.setTransform(472.2,65);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],26.6,-20.1,-20.4,19.9).s().p("AAhF5QgagFgHgFQgNgGgNgcQgIgRAIhmQAIhmgTgpQgJgVgWhyQgShcgHgwQgJg2ANgcQANgcAugdQBAgqAVAIQAPAGgMAcQgPAjgCAwQgDAvANAqQAPAyAJBZQAMBpADAPQAKAygDA9QgCA/gOAvQgQA4gDAFQgFAJgLAAQgGAAgHgCg");
	this.shape_37.setTransform(472.4,70.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.537)").s().p("AASCKQAAgPgSikQgTiiABgHQADgMgIgRQgIgUgNgIQgLgIAZgOQAPgJAfgPQATgKADALQADALgPAUQgVAdAABRQAAAVAWCdQAWCgAAALQAAAagFBzQgbiYABgdg");
	this.shape_38.setTransform(466.4,66.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],26.8,-20,-20.6,19.8).s().p("AAcF6QgagFgGgFQgNgGgNgcQgIgSAJhmQAJhmgSgqQgJgVgVhzQgOhPgJg9QgIg3ANgcQANgcAvgdQBAgpAUAIQAPAGgMAdQgQAjgCAvQgDAwAMAqQAOAyAJBbQAKBoADAQQAJAzgCA9QgDA/gPAvQgRA4gDAFQgFAJgLAAQgFAAgIgDg");
	this.shape_39.setTransform(466.5,72.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.537)").s().p("AAQCKQAAgOgQimQgSijACgHQADgMgHgSQgIgTgNgJQgMgIAagOQAPgIAfgPQATgKADAMQACALgOATQgWAfAABPQgBAWAUCeQAUChAAAKQAAAbgHBzQgYiZABgdg");
	this.shape_40.setTransform(460.6,67.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27,-19.9,-20.8,19.6).s().p("AAYF8QgYgGgIgEQgNgHgNgcQgIgSALhmQAKhngSgrQgIgVgUhzQgOhUgIg6QgHg3ANgcQANgcAvgcQBBgpAUAJQAPAGgNAcQgQAkgDAvQgDAxAMAqQANAyAIBbQAJBoADARQAIAygDA/QgEA+gOAwQgSA4gDAFQgGAJgKAAQgGAAgHgDg");
	this.shape_41.setTransform(460.6,73.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.537)").s().p("AAOCLQAAgOgOinQgQikACgIQADgLgHgSQgIgUgNgJQgLgIAagOQAOgIAfgOQATgKADAMQADALgPATQgVAdgCBSQgBAVASCfQASCiAAALQAAAagIB0QgWiaABgdg");
	this.shape_42.setTransform(454.8,69.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.1,-19.7,-21.1,19.5).s().p("AATF+QgXgHgJgEQgMgHgNgdQgHgSALhmQAMhngSgrQgIgVgTh1QgNhXgHg3QgHg4AOgcQANgbAvgdQBBgoAUAJQAPAHgNAcQgQAjgEAwQgDAxALAqQANAyAGBcQAIBqADAQQAIAzgEA+QgEA/gQAwQgSA5gDAEQgFAJgKAAQgGAAgIgDg");
	this.shape_43.setTransform(454.8,74.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.537)").s().p("AAJCLQABgPgNinQgOilACgHQADgMgHgSQgHgUgNgJQgLgIAagOIAtgWQAUgJACALQADALgPAUQgWAcgDBSQAAAWAQCgQAQCjAAALQAAAagKB0QgViaACgeg");
	this.shape_44.setTransform(449.2,70.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.3,-19.6,-21.4,19.3).s().p("AAPF/QgYgGgIgFQgNgHgMgdQgHgTAMhmQANhngRgsQgIgVgRh1QgNhcgGg0QgGg4AOgcQAOgbAvgcQBBgnATAIQAPAHgNAcQgRAkgEAvQgEAxALArQAMAzAGBcQAHBrACAQQAIAzgFA/QgFA/gQAvQgTA5gCAFQgFAIgKAAQgGAAgIgDg");
	this.shape_45.setTransform(448.9,76.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.537)").s().p("AAECLQABgNgLipQgMimACgIQADgMgGgSQgIgUgMgJQgLgIAagOQAOgIAfgOQAUgJACAMQADALgPATQgOASgGAhQgEAWgCAmQgBAWAOCgQAPCkAAALQgBAbgLB1QgTicACgeg");
	this.shape_46.setTransform(443.7,71.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.4,-19.5,-21.6,19.1).s().p("AAKGBQgXgHgJgFQgMgIgMgdQgHgSAOhnQAOhogRgsQgIgVgQh2QgJhKgIhHQgFg4AOgcQAOgbAvgcQBBgnAUAKQAOAGgNAdQgRAjgEAwQgFAxAKArQAMA0AFBcQAFBrACARQAHAzgFA/QgGA/gQAwQgTA4gDAGQgFAIgKAAQgGAAgIgDg");
	this.shape_47.setTransform(443,77.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.537)").s().p("AAACLQAAgOgJipQgKinACgIQADgLgGgTQgHgUgMgKQgLgIAagOQAOgHAfgOQAUgJACAMQACALgPAUQgXAcgEBTQgBAWANChIAMCwQgBAbgMB1QgPidABgeg");
	this.shape_48.setTransform(438.1,72.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.6,-19.4,-21.9,18.9).s().p("AAFGCQgXgHgIgFQgNgIgLgdQgHgTAPhnQAOhogPgsQgIgWgOh3QgLhfgEgyQgFg5AOgcQAOgbAwgbQBBgnATAKQAPAHgOAdQgRAigFAxQgFAxAJAsQAMAzADBdQAEBsACARQAHA0gGA/QgHBAgQAvQgUA5gDAFQgFAIgJAAQgHAAgIgEg");
	this.shape_49.setTransform(437.1,78.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.537)").s().p("AgECMQABgOgIirQgJioACgHQADgMgGgTQgGgUgMgKQgLgIAagOIAugUQATgJACAMQACALgPAUQgXAdgFBSQgCAWALCiQALCnAAAKQgBAbgOB2QgNieACgeg");
	this.shape_50.setTransform(432.3,74.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.4,-19.2,-22.4,18.8).s().p("AgBGEQgYgIgJgFQgMgIgLgdQgHgTAQhoQAQhogPgtQgIgWgMh3QgJhWgFg9QgEg5AOgcQAPgbAvgaQBCgmATAKQAOAHgOAcQgRAjgGAxQgFAxAJAsQAKA0ADBeQADBqACATQAFA0gGA/QgHBAgRAwQgVA5gDAEQgFAIgJAAQgGAAgHgDg");
	this.shape_51.setTransform(431.2,79.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.537)").s().p("AgICMQABgNgHitQgHioADgIQADgLgGgTQgGgVgMgKQgLgJAagMQAPgIAfgNQATgJACAMQACAMgPATQgXAdgGBTQgBAWAICjQAJCngBALQgBAbgOB2QgMieADgfg");
	this.shape_52.setTransform(426.4,75.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.3,-19.1,-23,18.6).s().p("AgIGFQgZgIgIgFQgMgIgKgeQgHgTARhoQARhpgPgtQgHgWgMh4QgIhXgEg8QgDg6APgbQAOgcAwgaQBCglATAKQAOAHgOAdQgSAjgGAwQgGAyAIAsQAKA0ACBfQACBsABARQAGA0gIBAQgIBAgRAwQgVA5gDAFQgGAIgJAAQgEAAgIgEg");
	this.shape_53.setTransform(425.2,81.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.537)").s().p("AgOCNQACgPgFisQgFiqACgHQAEgMgGgTQgGgUgMgKQgKgJAagNQAPgHAfgNQATgJACAMQACAMgQATQgWAcgHBUQgBAWAFCkQAHCpAAAKQgCAbgOB3QgMifADgfg");
	this.shape_54.setTransform(420.5,76.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.2,-19,-23.5,18.4).s().p("AgQGGQgYgIgIgFQgMgIgKgeQgGgTARhpQAShpgOgtQgHgXgKh4QgHhagDg6QgDg6APgcQAPgbAwgaQBCgkASAKQAOAHgOAdQgSAjgGAxQgHAxAIAtQAJA0ABBfQAABsACASQAEA1gIBAQgIBBgSAvQgWA5gDAFQgFAHgHAAQgGAAgJgEg");
	this.shape_55.setTransform(419.3,82.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.537)").s().p("AgSCOQABgPgDitQgDirADgHQADgMgFgTQgGgVgMgKQgKgJAagNQAPgHAfgMQAUgJABAMQACAMgQATQgXAcgGBUQgCAWADCmQAFCogBALQgCAbgPB3QgKigAEgeg");
	this.shape_56.setTransform(414.6,77.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27,-18.8,-24,18.2).s().p("AgYGIQgYgJgIgFQgMgIgKgfQgGgTAThpQAUhpgOguQgHgXgJh5QgGhcgCg5QgCg6APgcQAPgbAwgZQBCgkATAKQANAIgOAcQgSAkgHAwQgIAyAIAtQAIA1AABfQgBBuABARQAEA1gIBAQgJBBgTAvQgWA6gDAEQgDAIgJAAQgGAAgJgEg");
	this.shape_57.setTransform(413.4,83.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.537)").s().p("AgXCOQABgPgBiuQgBirADgIQAEgMgFgTQgGgVgMgLQgKgJAagMIAugTQAUgIABAMQACAMgQATQgYAcgGBUQgDAWAECmQABCqgBALQgBAbgSB3QgIihAEgeg");
	this.shape_58.setTransform(408.9,78.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],26.9,-18.7,-24.5,18).s().p("AgfGJQgYgJgIgFQgLgJgKgeQgFgUAUhpQAUhqgNguQgHgXgHh6QgFhegCg3QgCg6AQgcQAQgbAwgZQBCgkASALQAOAIgPAcQgTAjgHAxQgIAyAHAtQAIA2gCBfQgBBuABASQADA1gJBAQgKBCgTAvQgWA5gCAFQgFAIgJAAQgGAAgJgFg");
	this.shape_59.setTransform(407.5,84.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.537)").s().p("AgdCOQADgPABiuQABitACgHQAEgMgFgUQgFgVgMgKQgKgKAagMQAPgGAfgMQAUgIABAMQACAMgRATQgXAbgIBVQgDAWACCnQABCqgBAMQgDAbgTB4QgHiiAEgfg");
	this.shape_60.setTransform(403.3,79.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.1,-18.5,-24.7,17.8).s().p("AgjGKQgYgJgIgGQgMgIgIgfQgGgTAVhqQAWhqgNguQgGgXgGh7QgFhfAAg3QgBg7AQgcQAPgbAxgYQBCgjASALQAOAIgQAcQgTAjgIAxQgIAyAGAuQAIA2gDBgQgDBuABASQADA1gKBBQgLBBgTAwQgWA5gDAEQgFAIgIAAQgHAAgIgFg");
	this.shape_61.setTransform(401.5,85.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.537)").s().p("AghCOQACgOADiwQADitACgIQAEgLgEgUQgFgWgMgKQgKgKAbgMQAOgGAggMQATgIACAMQABAMgRATQgYAcgIBVQgDAXgBCnQAACsgBAKQgDAcgVB4QgFijAFgfg");
	this.shape_62.setTransform(397.7,80.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.2,-18.3,-25,17.7).s().p("AgoGMQgYgKgHgGQgMgIgIgfQgGgUAXhqQAWhqgMgvQgGgXgEh7IgEiYQAAg7AQgbQAQgbAugYQBFgjASAMQANAIgPAcQgTAjgJAxQgJAyAGAuQAHA2gEBhQgFBuABATQADA2gLBAQgLBCgUAvQgXA6gDAEQgFAHgIAAQgGAAgJgEg");
	this.shape_63.setTransform(395.6,86.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.537)").s().p("AgmCPQACgPAFixQAFiuADgHQAEgMgFgUQgEgVgMgLQgKgKAbgMQAPgGAfgLQAUgIABAMQABAMgRATQgYAcgJBVQgDAWgDCpQgDCtgBAKQgDAcgWB4QgDijAFgfg");
	this.shape_64.setTransform(392.1,81.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.4,-18.1,-25.2,17.5).s().p("AgtGNQgXgKgIgGQgLgJgIgfQgFgUAXhqQAYhqgMgvQgFgYgDh8QgChTAAhFQAAg7ARgcQAQgbAugYQBFghASALQANAJgQAcQgTAjgKAxQgJAzAFAuQAGA2gFBhQgFBvAAATQACA1gLBBQgMBCgVAwQgXA5gDAEQgFAIgIAAQgGAAgJgFg");
	this.shape_65.setTransform(389.6,87.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.537)").s().p("AgpCPQACgPAHixQAHivADgIQAEgMgEgTQgEgWgLgLQgKgKAagLQAPgHAfgLQAUgHABAMQABAMgRATQgYAbgLBWQgDAXgECpQgFCtgBALQgEAcgXB4QgBikAFgfg");
	this.shape_66.setTransform(386.3,82);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.6,-18,-25.4,17.3).s().p("AgxGOQgYgKgHgGQgLgJgIggQgFgUAZhqQAZhrgLgvQgGgYgBh9QgBhVABhDQABg8AQgbQARgbAvgYQBEghASAMQANAJgQAcQgUAjgKAxQgKAzAFAuQAGA3gGBhQgHBvAAATQABA3gMBBQgNBCgVAvQgXA5gDAFQgFAHgIAAQgHAAgIgFg");
	this.shape_67.setTransform(383.6,88.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.537)").s().p("AgrCPQADgOAJizQAJivADgIQAEgLgEgVQgEgVgLgMQgKgKAbgLQAPgGAfgLQAUgHABAMQABAMgRATQgZAbgLBWQgEAXgGCqQgHCtgCAMQgDAcgZB5QABimAFgfg");
	this.shape_68.setTransform(380.4,82.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.7,-17.8,-25.6,17.1).s().p("Ag2GPQgXgKgIgGQgLgKgHgfQgFgUAahrQAahrgKgwQgFgXAAh+QAAhYABhBQACg8ARgbQARgbAugXQBFghASAMQANAJgRAcQgUAjgKAyQgKAyADAvQAFA3gHBiQgIBwAAASQABA3gOBBQgNBCgVAwQgYA5gDAFQgFAGgIAAQgGAAgJgFg");
	this.shape_69.setTransform(377.7,89);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.537)").s().p("AgsCPQADgPALiyQALixADgHQAEgMgEgUQgEgWgKgMQgKgKAbgLQANgGAhgKQAUgHAAAMQABAMgRATQgZAbgMBWQgEAXgJCrQgICugCALQgEAcgaB6QADimAGggg");
	this.shape_70.setTransform(374.4,83.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],27.9,-17.6,-25.8,16.9).s().p("Ag7GQQgXgKgHgGQgLgKgHggQgEgUAbhrQAbhrgKgwQgFgYACh+QABhcACg+QADg8ARgcQARgbAvgWQBFggARAMQANAJgRAcQgUAjgLAyQgLAzADAvQAFA3gIBiQgKByAAARQgBA3gNBBQgOBDgUAvQgaA5gEAFQgFAGgHAAQgHAAgJgFg");
	this.shape_71.setTransform(371.7,89.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.537)").s().p("AguCQQADgPAOi0QANiwADgIQAEgMgDgUQgEgXgLgLQgJgKAbgLQANgGAhgKQAUgHAAAMQABANgRASQgaAdgPBUQgCAXgKCsQgLCvgCALQgEAcgcB6QAFinAGgfg");
	this.shape_72.setTransform(368.5,84.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.1,-17.4,-26,16.7).s().p("AhAGRQgWgLgIgGQgKgKgHggQgEgVAchqQAchsgJgwQgEgYADh/QAChfADg8QADg8ASgbQARgbAvgWQBFggARANQANAJgRAcQgVAjgLAyQgMAzADAvQAEA3gKBjQgKBwgBAUQgBA3gOBBQgPBDgUAvQgbA6gEAEQgFAHgIAAQgGAAgJgGg");
	this.shape_73.setTransform(365.7,90.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.537)").s().p("AgvCQQADgPAPi0QAPiyADgIQAFgLgDgVQgDgWgLgMQgJgKAbgLIAugPQATgHABAMQABANgSASQgZAbgRBXQgCAWgNCtQgMCwgCALQgFAcgcB6QAGioAHgfg");
	this.shape_74.setTransform(362.5,85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.2,-17.2,-26.1,16.5).s().p("AhEGSQgXgLgHgGQgLgKgGghQgDgUAdhrQAdhsgIgxQgEgYAEh/QADheAEg+QAEg8ASgbQARgbAvgWQBFgfARANQANAJgRAcQgVAjgMAyQgMAzACAvQADA5gLBjQgMByAAASQgCA3gPBCQgQBCgUAwQgcA5gDAEQgGAHgHAAQgHAAgIgGg");
	this.shape_75.setTransform(359.7,91.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.537)").s().p("AgxCQQAEgPARi1QARiyAEgIQAEgMgCgVQgDgWgLgMQgJgKAagLQANgFAigKQAUgGAAAMQAAANgRASQgZAagTBXQgEAXgNCtQgOCxgCALQgFAcgeB7QAJipAGgfg");
	this.shape_76.setTransform(356.6,85.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.3,-17.1,-26.4,16.2).s().p("AhKGTQgWgMgHgGQgKgKgGghQgDgVAehrQAehsgHgxQgEgYAGiAQAEhfAFg9QAEg9ASgbQASgbAvgVQBFgeARANQAMAJgRAcQgVAjgNAyQgNAzACAwQACA4gLBjQgOBzgBASQgCA4gQBCQgQBCgVAwQgcA5gEAEQgFAHgHAAQgHAAgJgGg");
	this.shape_77.setTransform(353.7,92);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.537)").s().p("AgyCQQAEgPATi2QATiyADgIQAFgMgCgVQgDgWgKgNQgJgLAZgJQAPgGAhgJQAUgGAAAMQAAANgSASQgaAcgSBWQgFAXgOCtQgRCygCALQgGAcgfB7QALipAHggg");
	this.shape_78.setTransform(350.6,86.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.5,-16.9,-26.6,16).s().p("AhOGUQgWgMgHgHQgLgKgFghQgDgVAfhrQAghsgHgyQgEgYAIiBQAGhgAFg8QAFg9ASgbQASgbAvgVQBGgdAQANQAMAKgRAcQgWAigNAyQgNAzABAwQACA5gNBkQgPB1gBAQQgDA3gRBCQgQBDgWAwQgdA5gDAEQgGAHgHAAQgHAAgIgGg");
	this.shape_79.setTransform(347.7,92.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.537)").s().p("Ag0CQQAEgPAWi2QAVizADgIQADgMgBgVQgCgXgJgMQgJgLAZgKQAPgFAhgJQAUgGAAANQAAAMgSASQgaAagUBYQgFAXgQCuQgTCzgCALQgGAcghB7QANiqAHggg");
	this.shape_80.setTransform(344.6,86.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.6,-16.7,-26.8,15.8).s().p("AhUGVQgVgMgHgHQgKgKgFghQgDgVAghsQAhhsgGgyQgDgZAJiAQAGhiAGg8QAGg9ATgbQASgbAvgUQBGgdAQANQAMALgSAbQgWAigOAzQgNAzAAAwQABA5gOBkQgQBzgBATQgEA3gRBDQgRBDgXAvQgeA6gDAEQgFAGgHAAQgHAAgJgGg");
	this.shape_81.setTransform(341.8,93.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.537)").s().p("Ag1CQQAEgPAYi3QAXi0ACgIQAEgMgCgVQgCgWgHgNQgJgLAZgJQAPgGAhgIQATgGAAANQABAMgTASQgbAcgTBWQgGAXgSCvQgVCzgCALQgHAcgiB7QAPiqAIggg");
	this.shape_82.setTransform(338.7,87.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.7,-16.5,-27,15.6).s().p("AhYGVQgWgMgGgHQgKgLgFghQgDgVAihsQAjhsgGgyQgDgZAKiBQAIhkAHg6QAGg+ATgbQATgaAvgUQBGgdAQAOQAMAKgTAcQgWAigOAzQgPA0AAAwQABA5gPBkQgSB1gCARQgEA4gSBCQgQBEgZAvQgeA5gDAFQgGAGgGAAQgIAAgIgHg");
	this.shape_83.setTransform(335.7,93.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.537)").s().p("AhGECQAKhdAFgUQAFgPAai4QAYi1ACgHQAFgMgCgVQgCgXgHgNQgIgLAYgJIAxgOQATgGABANQgBANgSASQgcAbgUBXQgGAWgVCwQgWCzgDAMQgHAcgiB8IAJhag");
	this.shape_84.setTransform(332.7,87.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],28.8,-16.3,-27.2,15.3).s().p("AhdGWQgWgMgHgIQgJgKgEgiQgDgVAjhsQAkhsgGgzQgCgZAMiBQAJhjAHg8QAIg+ATgbQASgaAwgUQBGgbAQANQALALgSAbQgXAjgPAyQgPA0AAAwQgBA6gQBkQgTBzgCAUQgFA4gTBDQgRBDgZAvQgeA5gEAFQgFAGgGAAQgHAAgJgHg");
	this.shape_85.setTransform(329.8,94.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.537)").s().p("Ag4CRQAEgPAci5QAai1ADgIQAGgMgCgVQgCgXgHgMQgIgMAZgJQAPgFAhgIQAUgFgBANQAAAMgSASQgbAagXBYQgFAXgXCwQgZCzgDAMQgHAdglB7QATirAJggg");
	this.shape_86.setTransform(326.7,88.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29,-16.1,-27.3,15.1).s().p("AhiGXQgWgNgGgHQgKgLgDghQgDgWAlhsQAkhtgEgyQgCgZANiDQALhnAHg4QAIg+AUgbQARgaAxgTQBGgbAQAOQALALgSAbQgYAigPAzQgQAzgBAxQgBA6gRBlQgUBygCAVQgGA5gUBCQgSBDgZAvQgfA5gEAFQgFAGgGAAQgIAAgIgHg");
	this.shape_87.setTransform(323.8,94.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.537)").s().p("AhMEDQANheAFgUQAFgPAei5QAci2ADgIQAGgLgBgWQgCgXgJgNQgGgLAZgJQAPgFAhgHQAUgGgBANQAAANgTASQgbAagXBXQgGAXgZCxQgbC0gDAMQgIAdgmB7IAMhag");
	this.shape_88.setTransform(320.8,88.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.1,-15.8,-27.5,14.9).s().p("AhnGYQgVgNgHgIQgJgKgDgiQgCgWAlhsQAmhtgEgzQgEgrAlkQQAJg/AUgaQARgbAygSQBGgbAPAOQALALgTAcQgXAigQAzQgQAzgCAxQgCA7gSBkQgWB2gCASQgGA4gVBDQgTBDgaAwQgfA4gEAFQgFAGgGAAQgHAAgJgHg");
	this.shape_89.setTransform(317.8,95.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.537)").s().p("AhPEEQAOhfAGgUQAEgPAhi6QAei2AEgHQAFgMgBgWQgBgXgJgNQgGgMAZgIQAPgFAigHQATgFgBANQAAAMgTASQgaAZgaBZQgGAXgbCxIggDBQgIAcgnB8IAMhag");
	this.shape_90.setTransform(314.8,89.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.2,-15.6,-27.7,14.7).s().p("AhsGYQgVgNgGgIQgKgKgDgjQgBgVAnhtQAnhsgEg0QgBgZARiDQAMhkAKg9QAJg+AUgbQARgaAygSQBHgaAPAPQALALgUAbQgYAigQAzQgRA0gCAxQgDA6gUBlQgXB3gCARQgHA5gVBDQgUBDgaAvQghA6gDAEQgFAGgGAAQgHAAgJgIg");
	this.shape_91.setTransform(311.8,95.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.537)").s().p("AhSEEQAPhfAGgUQAFgOAji7QAgi3AEgIQAFgMAAgVQgBgYgJgNQgIgLAbgJQAPgEAigHQATgFgBANQAAANgTARQgcAagZBYQgHAXgdCyQggC2gDALQgIAcgpB8IAOhag");
	this.shape_92.setTransform(308.8,89.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.4,-15.4,-27.9,14.4).s().p("AhyGZQgUgOgGgHQgJgLgDgiQgBgWAohsQAohtgDg0QgBgaATiDQAOhmAKg7QAKg+AUgbQASgaAygSQBGgaAPAPQALALgUAcQgYAigRAzQgRAzgDAyQgEA7gVBlQgYB1gDATQgHA5gUBDQgXBDgbAwQggA4gEAFQgFAGgHAAQgHAAgJgIg");
	this.shape_93.setTransform(305.8,95.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.537)").s().p("AhVEEQAQhfAGgUQAFgPAmi7QAii3AEgHQAFgNAAgVQgBgXgIgOQgIgMAbgIQAPgEAigHQATgFgBANQgBANgTASQgbAZgbBYQgHAXgfCzQgiC2gDALQgIAdgrB8IAPhbg");
	this.shape_94.setTransform(302.9,89.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.5,-15.2,-28,14.1).s().p("Ah3GZQgUgOgGgHQgJgMgCgiQgBgWAphsQAqhtgCg0QgBgaAUiEQAPhmALg7QALg/AUgaQASgaAygSQBGgZAPAPQALALgUAcQgYAhgSA0QgSA0gEAxQgEA7gWBmQgaB1gDATQgIA6gVBCQgXBEgbAvQghA5gFAEQgFAGgGAAQgHAAgJgIg");
	this.shape_95.setTransform(299.8,96.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.537)").s().p("AhYEFQAShgAGgUQAFgPAoi7QAki4AEgIQAGgLAAgWQgBgYgIgNQgHgMAbgIQAPgFAhgGQAUgFgBAOQgCANgTARQgbAZgcBYQgHAYgiCzQgkC2gDAMQgJAcgsB9IAQhbg");
	this.shape_96.setTransform(296.9,89.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.5,-14.9,-28.3,13.9).s().p("Ah8GaQgUgPgGgHQgJgMgBgiQgBgXAqhsQArhtgBg0QgBgaAWiEQAQhmAMg8QALg/ATgaQAUgaAygRQBHgYAOAPQALALgUAcQgZAhgTAzQgSA0gEAyQgFA6gYBnQgbB0gDAVQgJA5gVBDQgYBEgcAvQgiA5gEAEQgFAGgGAAQgIAAgIgIg");
	this.shape_97.setTransform(293.8,96.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.537)").s().p("AhcEEQAThfAHgUQAFgPAri7QAni4AEgIQAHgMAAgWQAAgXgIgOQgHgMAbgIQAPgEAhgGQAUgEgCANQgBANgUARQgcAZgdBYQgHAXglC0QgnC1gEANQgIAdguB8IARhcg");
	this.shape_98.setTransform(289.9,90.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.7,-14.5,-28.5,13.5).s().p("AiEGZQgTgOgGgIQgJgLAAgjQgBgXAshsQAthtgBg0QAAgaAYiFQAShiANhAQANg/ATgaQAVgaAygQQBGgXAOAPQALAMgVAbQgZAigUAzQgTAzgFAyQgGA8gZBmQgdB1gEATQgKA6gWBDQgZBEgdAvQgjA4gEAEQgFAGgGAAQgHAAgJgJg");
	this.shape_99.setTransform(286.8,96.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.537)").s().p("AhhEEQAVhfAHgUQAGgPAui8QAri4AEgIQAHgLAAgXQABgXgIgOQgHgNAbgHIAxgJQATgEgBANQgCANgUARQgcAZgfBYQgIAXgoC0QgqC2gEAMQgJAdgxB8IAThcg");
	this.shape_100.setTransform(282.8,90.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.8,-14.1,-28.8,13.1).s().p("AiMGZQgTgPgFgIQgJgMAAgjQAAgWAuhsQAvhtAAg0QABgaAaiFQAVhoANg6QAOg/ATgaQAVgaAygQQBHgWAOAQQAKAMgVAbQgaAhgUAzQgUA0gGAyQgHA7gbBmQggB3gDASQgLA6gYBDQgaBDgeAvQgkA4gEAEQgFAFgFAAQgIAAgJgIg");
	this.shape_101.setTransform(279.6,96.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.537)").s().p("AhlEEQAWhgAIgUQAFgPAyi7QAui4AFgIQAGgMABgWQABgYgHgOQgHgMAbgHQAPgEAigEQAUgEgCANQgCANgUARQgeAYgfBYQgJAYgrCzQguC4gEAKQgKAdgyB7IAVhbg");
	this.shape_102.setTransform(275.7,90.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],30.1,-13.7,-29,12.6).s().p("AiTGYQgTgPgGgIQgIgMABgjQAAgWAwhsQAxhtABg0QABgaAdiFIAlijQAOg/AVgaQAVgZAzgPQBHgVANAQQAKAMgWAbQgaAhgVAzQgVAzgHAyQgIA8gdBmQgiB1gEAUQgMA6gZBDQgbBDgfAuQgkA4gFAEQgFAFgFAAQgIAAgIgJg");
	this.shape_103.setTransform(272.4,96.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.537)").s().p("AhqEDQAZhfAIgUQAGgPA1i8QAyi4AEgIQAHgLABgWQACgYgHgPQgHgMAcgHQAPgDAhgEQAUgEgDAOQgCANgUAQQgcAXgjBZQgJAXgvCzQgxC3gEAMQgLAdg0B7IAWhcg");
	this.shape_104.setTransform(268.6,90.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],30.2,-13.2,-29.2,12.2).s().p("AicGXQgSgPgFgIQgIgNABgjQABgWAyhsQAyhsADg1QABgaAgiFQAXhkARg/QAOg/AWgZQAWgZAzgOQBHgUANAQQAKAMgWAbQgbAggWAzQgWA0gIAyQgKA7geBnQgkB1gFAUQgMA5gbBDQgdBDgfAuQgmA3gEAFQgFAEgFAAQgIAAgJgJg");
	this.shape_105.setTransform(265.4,96.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.537)").s().p("AhvEDQAahgAJgUQAGgPA5i7QA1i4AFgIQAHgLACgXQACgYgHgOQgGgNAbgGQAPgDAhgEQAUgDgCANQgDAOgUAQQgeAXgjBYQgKAXgyCzQg0C3gFAMQgLAcg3B7IAYhbg");
	this.shape_106.setTransform(261.7,90.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],30.4,-12.8,-29.5,11.7).s().p("AikGWQgSgQgFgIQgIgMACgkQABgWA0hrQA1hsADg1QACgaAjiGQAWhZAUhJQAQg/AXgaQAWgZAzgNQBHgSANAQQAJANgWAaQgcAggXAzQgXAzgJAyQgKA8ghBmQgmB3gFASQgMA6geBCQgdBEghAtQgmA3gFAEQgFAFgFAAQgHAAgJgKg");
	this.shape_107.setTransform(258.4,96.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.537)").s().p("AhzECQAchgAIgTQAHgQA8i7QA5i4AFgHQAHgMACgWQADgYgHgPQgFgNAbgFQAPgDAhgDQAUgDgDANQgDAOgUAPQgfAYgkBXQgKAXg2CzQg4C3gFALQgLAdg6B7IAbhcg");
	this.shape_108.setTransform(254.9,89.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],30.5,-12.3,-29.7,11.2).s().p("AisGVQgSgQgEgJQgIgMADgkQABgWA2hrQA3hrAEg1QADgbAliFQAbhjAShAQARg/AYgZQAXgYAygNQBIgRAMARQAJAMgXAaQgcAggYAzQgYAzgKAyQgLA8gjBmQgpB3gFARQgNA7gfBCQgfBDghAtQgnA2gFAEQgFAFgFAAQgIAAgIgKg");
	this.shape_109.setTransform(251.5,96.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.537)").s().p("Ah4EBQAehfAJgUQAHgPBAi7QA8i4AFgHQAIgMACgWQADgYgGgPQgFgNAbgFQAPgDAhgCQAUgDgDAOQgDANgVAPQgfAYgmBWQgLAXg5CzQg7C3gFALQgMAdg8B6IAchcg");
	this.shape_110.setTransform(248.2,89.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],30.7,-11.8,-29.9,10.8).s().p("Ai0GUQgSgRgEgJQgHgMADgkQACgWA4hqQA4hrAGg2QADgaAoiFQAehmARg9QAUg/AYgZQAXgYAzgMQBIgQAMARQAIANgXAaQgdAfgZAyQgZAzgLAzQgMA8glBlQgrB1gFAUQgPA6ggBCQggBDgiAsQgoA2gFAFQgFAEgFAAQgIAAgIgKg");
	this.shape_111.setTransform(244.7,96);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.537)").s().p("Ah9EAQAghfAJgUQAHgPBEi7QBAi3AFgHQAIgMADgWQADgYgFgPQgGgOAcgEQAPgCAhgCQAUgDgDAOQgEANgVAPQgfAWgoBXQgLAXg8CzQhAC1gFANQgNAcg+B6IAehcg");
	this.shape_112.setTransform(241.5,89.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],30.8,-11.4,-30.1,10.2).s().p("Ai8GSQgRgRgFgJQgHgNAEgjQADgXA6hqQA6hqAHg2QAEgaAqiFIAyiiQAWg/AYgZQAXgYAzgLQBIgPAMASQAIAMgYAaQgdAfgaAyQgaAzgMAyQgOA8gmBmQgtB0gGAUQgQA6ghBCQgiBCgiAsQgqA2gFAEQgFAFgFAAQgHAAgIgLg");
	this.shape_113.setTransform(238,95.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.537)").s().p("AiCD/QAhhfAKgUQAIgOBHi7QBEi3AFgHQAIgMAEgWQADgYgFgPQgFgOAbgEQAPgCAhgCQAUgCgDAOQgEANgVAPQggAWgqBWQgLAXhACzQhDC2gFALQgOAchAB6IAghcg");
	this.shape_114.setTransform(235,88.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31,-10.9,-30.3,9.8).s().p("AjEGRQgRgSgEgJQgHgNAFgjQADgXA8hpQA9hqAIg2QAEgaAsiFQAhhiAVhAQAXg/AYgYQAYgYAzgKQBIgOALASQAIANgYAZQgeAfgbAyQgbAygMAyQgPA8gpBmQgwB1gEATQgTA5giBCQgjBCgjAsQgrA1gFAEQgFAEgFAAQgIAAgHgKg");
	this.shape_115.setTransform(231.4,95);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.537)").s().p("AiHD+QAjhfALgTQAIgPBLi6QBHi3AFgHQAIgLAFgXQAEgYgFgPQgFgOAbgDQAQgCAhgBQATgCgEANQgDANgWAPQggAVgrBXQgMAXhECxQhHC3gFALQgOAchCB4IAhhbg");
	this.shape_116.setTransform(228.5,88);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31,-10.4,-30.5,9.3).s().p("AjNGPQgQgSgEgJQgGgNAFgkQADgWA/hpQA+hpAJg2QAIgqBlkXQAYg/AZgYQAYgXAzgJQBIgOALATQAIANgZAZQgeAegcAyQgcAygOAyQgQA8grBlQgyB1gEATQgUA5gkBCQgkBBgkAsQgsA1gFAEQgFAEgEAAQgIAAgIgLg");
	this.shape_117.setTransform(224.9,94.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.537)").s().p("AiMD9QAlhfALgTQAIgPBPi5QBLi2AFgIQAJgLAEgWQAFgYgFgQQgEgNAbgEQAPgBAhgBQAUgBgEANQgEANgWAPQgfAUgvBWQgMAXhHCyQhKC1gGALQgOAchFB4IAjhbg");
	this.shape_118.setTransform(222.2,87.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.2,-9.9,-30.6,8.8).s().p("AjVGNQgQgSgEgJQgFgOAGgkQAEgXBAhnQBBhpAKg2QAIgrBrkVQAZg/AZgXQAZgXAzgJQBJgMAKATQAHANgZAZQgfAegcAxQgdAygPAyQgSA8gsBlQg0B0gGATQgVA6glBBQglBBglArQgtA1gFADQgFAEgEAAQgJAAgHgLg");
	this.shape_119.setTransform(218.4,93.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.537)").s().p("AiRD8QAoheALgUQAIgOBTi5QBOi2AGgHQAIgLAFgWQAGgZgFgPQgEgOAbgDQAQgBAhAAQATgBgEANQgEANgWAOQghAVgvBVQgMAXhLCxQhPC1gFALQgPAchIB3IAlhbg");
	this.shape_120.setTransform(215.8,86.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.3,-9.4,-30.8,8.2).s().p("AjdGLQgQgTgDgJQgGgNAHgkQAEgXBChnQBDhoALg2QAGgaA1iFQAmhkAZg9QAag+AagXQAagXAzgIQBIgKAKASQAHAOgZAYQggAegdAxQgeAxgQAzQgTA8gvBkQg0BzgIAUQgWA5gmBAQgnBBgmArIgyA4QgFAEgFAAQgIAAgHgMg");
	this.shape_121.setTransform(212,92.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.537)").s().p("AiVD6QApheALgTQAJgPBWi4QBSi1AGgHQAJgLAFgWQAGgZgEgPQgEgOAcgCQAPgCAgABQAUAAgFANQgEANgXANQggAUgxBVQgNAXhPCwIhXDAIhZCSIAnhbg");
	this.shape_122.setTransform(209.6,85.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.4,-8.8,-30.9,7.8).s().p("AjlGJQgPgTgEgJQgFgOAIgkQAFgXBEhmQBEhnANg2QAGgbA4iEQArhsAXg0QAcg+AagXQAagWAzgHQBJgKAJATQAHAOgaAYQggAdgfAxQgfAxgRAyQgUA8gwBkQg4B0gHASQgYA5gnBBQgoBAgnAqQgvAzgFAEQgFAEgEAAQgIAAgHgMg");
	this.shape_123.setTransform(205.7,92);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.537)").s().p("AibD5QArheAMgTQAJgOBbi4QBVi0AGgHQAJgKAGgXQAHgYgEgQQgEgOAcgCQAPgBAgABQAUAAgFANQgFANgWAOQgiAUgyBUQgNAWhTCwQhVC0gGAKIhcCSIAohbg");
	this.shape_124.setTransform(203.5,84.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.5,-8.4,-31.1,7.2).s().p("AjuGGQgOgTgEgJQgEgOAIgkQAGgXBGhmQBGhmAOg2QAMgsB7kSQAcg+AbgWQAbgWAzgGQBIgJAJATQAHAPgbAXQghAcgfAxQggAxgSAyQgVA7gzBkQg4BxgJAVQgZA6gpA/QgqBAgnAqQgvAygFAEQgFAEgFAAQgIAAgHgNg");
	this.shape_125.setTransform(199.5,91.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.537)").s().p("AigD4QAuheAMgTQAJgOBdi2QBai0AGgHQAKgKAGgXQAHgYgEgQQgDgOAcgCQAPAAAgABQAUAAgFAOQgFANgXANQgkAUgyBTQgOAWhWCvQhZCzgGALIg2BSIgpA+IAqhag");
	this.shape_126.setTransform(197.4,83.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.6,-7.8,-31.2,6.7).s().p("Aj2GEQgOgTgDgKQgFgOAKgkQAGgXBIhkQBIhmAPg2QAHgaA+iDQAqhgAfhAQAeg9AbgWQAbgWAzgFQBIgIAJAUQAGAOgbAXQgiAcggAwQghAxgTAyQgWA8g1BjQg8BzgIASQgaA5gqA/QgrA/goAqIg2A1QgFAEgEAAQgIAAgHgNg");
	this.shape_127.setTransform(193.3,90.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.537)").s().p("AikD3QAuhdANgTQAJgOBgi2QBfiyAHgHQAJgLAHgWQAHgZgDgQQgDgOAcgBQAPAAAgACQAUAAgGANQgFANgXANQghASg3BUQgOAWhZCuQhdCygHALIhiCPIAthZg");
	this.shape_128.setTransform(191.4,82.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.6,-7.2,-31.3,6.3).s().p("Aj+GCQgOgUgDgKQgEgOAKgkQAGgXBKhkQBLhlAQg1QAIgbBAiCQAthiAfg9QAgg9AbgWQAbgVAzgFQBJgGAIAUQAGAOgcAXQgiAcghAvQgiAxgUAyQgYA7g2BjQg+BwgJAUQgbA5gsA+QgsA/gpApQgxAxgFAEQgFADgEAAQgJAAgGgMg");
	this.shape_129.setTransform(187.3,89);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(255,255,255,0.537)").s().p("AipD1QAxhcANgTQAKgOBji1QBjixAGgHQAKgLAIgWQAIgYgDgQQgDgPAbAAQAQgBAgADQATABgGANQgFANgYAMQgiATg3BSQgPAWhdCtQhgCxgHALIhlCOIAuhZg");
	this.shape_130.setTransform(185.5,81.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.6,-6.7,-31.5,5.7).s().p("AkGF/QgNgVgDgJQgEgOAKgkQAHgXBNhjQBMhkARg2QAJgbBCiBQAzhoAdg2QAhg9AcgVQAbgVAzgEQBJgFAHAUQAGAOgcAXQgiAbgjAvQgjAxgVAxQgZA7g4BiQhABwgKAUQgdA5gsA9QgtA/gqApQgyAwgGAEQgEADgEAAQgJAAgGgNg");
	this.shape_131.setTransform(181.3,87.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(255,255,255,0.537)").s().p("AiuD0QAyhdAOgSQAKgOBnizQBnixAGgHQAKgKAIgWQAIgZgCgQQgCgOAbAAQAPgBAgAEQAUABgGANQgGAMgYAMQgkATg3BRQgQAWhhCsQhkCxgHAKQgLARgvBAIgtA9IAwhZg");
	this.shape_132.setTransform(179.7,80.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.7,-6.2,-31.5,5.2).s().p("AkOF8QgNgVgCgJQgEgOALgkQAIgXBOhiQBPhjASg2QAJgaBFiCQAwhdAjhAQAig9AcgUQAcgVAzgDQBIgEAIAUQAFAPgcAWQgjAbgjAvQgkAvgWAyQgaA7g7BhQhDBwgKATQgdA4guA+QgvA+gqAoQgzAvgGAEQgFADgEAAQgJAAgFgNg");
	this.shape_133.setTransform(175.3,86.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(255,255,255,0.537)").s().p("AizDyQA1hbAOgTQAKgNBrizQBqiwAHgGQAKgKAIgXQAJgYgCgQQgCgPAbABQAQAAAfAEQAUABgGANQgGANgYALQgiARg8BSQgQAWhkCrIhvC6QgMAQgwA/IgvA8IAyhYg");
	this.shape_134.setTransform(173.9,78.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.7,-5.6,-31.6,4.8).s().p("AkWF5QgNgVgCgJQgDgPAMgjQAIgXBQhiQBRhiATg1QAKgZBIiCQAyheAkg+QAjg9AdgUQAcgUAzgCQBIgDAHAUQAFAPgdAVQgjAbgkAuQglAvgXAyQgcA7g8BgQhGBwgKASQgeA4gvA9QgwA+gsAnIg5AzQgFADgEAAQgJAAgFgOg");
	this.shape_135.setTransform(169.5,85.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(255,255,255,0.537)").s().p("Ai4DxQA3hbAOgTQAKgNBviyQBuiuAHgHQAKgKAJgWQAJgYgBgQQgCgPAbABQAPAAAgAFQATABgGANQgHANgYALQgkARg7BRQgQAVhpCqQhrCugIALIg9BPIgwA7IA0hXg");
	this.shape_136.setTransform(168.2,77.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.7,-5,-31.6,4.3).s().p("AkfF2QgLgVgDgJQgDgPANgjQAJgXBShhQBThhAUg1QAKgYBLiCIBZibQAlg8AdgVQAdgUAzgBQBIgBAGAUQAFAPgdAVQgkAbglAtQgmAvgYAxQgdA6g/BhQhHBtgLAUQggA4gwA8QgxA9gsAnIg7AyQgEACgEAAQgJAAgGgOg");
	this.shape_137.setTransform(163.7,83.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(255,255,255,0.537)").s().p("Ai9DvQA5hbAOgSQALgOBzivQByitAGgHQALgKAJgWQAKgYgCgQQgBgPAbABQAPABAgAFQATACgHANQgGAMgZALQgiAQg/BQQgQAVhsCqQhuCrgJAMQgMAQg0A+IgwA7IA1hXg");
	this.shape_138.setTransform(162.6,76.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.7,-4.5,-31.7,3.7).s().p("AkmFzQgMgVgBgKQgDgPAOgjQAJgXBUhfQBUhgAWg2QAKgYBOiBQAwhSAthIQAlg8AegUQAdgTAzAAQBIgBAGAUQAEAQgeAUQgkAagmAuQgmAugaAxQgeA6hABfQhKBugLATQgiA3gxA8QgzA9gsAlQg3AugFADQgFADgDAAQgKAAgEgOg");
	this.shape_139.setTransform(158,82.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(255,255,255,0.537)").s().p("AjBDtQA6hZAPgSQALgNB2iwQB1irAHgHQALgKAKgWQAKgYgBgQQgBgPAbACQAPABAgAFQATACgHANQgHANgZAKQgkARg/BOQgSAWhuCnQh0CtgHAJIhBBOIgyA6IA4hXg");
	this.shape_140.setTransform(157,74.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.8,-3.9,-31.7,3.3).s().p("AkvFwQgKgWgCgJQgCgPAOgjQAKgXBWheQBWhfAXg1QALgZBQiAQA6heAmg7QAng7AegTQAdgUAzABQBIAAAGAVQADAPgeAVQgkAZgnAtQgoAugaAwQgfA6hDBfQhMBtgMASQgiA3gzA7QgzA8guAmQg3AtgGADQgEACgEAAQgJAAgFgOg");
	this.shape_141.setTransform(152.4,80.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(255,255,255,0.537)").s().p("AjGDrQA8hZAPgSQALgNB7iuQB4iqAHgGQALgKAKgWQALgYAAgQQgBgPAbACQAPABAfAGQATACgHANQgHANgZAKQgjAPhCBPQgRAUhzCnIh/C1Ih1CGIA5hWg");
	this.shape_142.setTransform(151.5,73);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.8,-3.3,-31.7,2.8).s().p("Ak2FsQgKgVgCgKQgCgPAPgjQAKgXBYhdQBZheAXg1QAMgYBTh/QBBhnAigxQAog7AfgTQAdgTAzACQBIABAFAVQAEAPgfAUQglAZgoAtQgpAtgbAwQghA6hEBeQhPBsgLASQgkA3g0A6Qg0A8gvAkQg4AtgFADQgFACgDAAQgKAAgEgPg");
	this.shape_143.setTransform(146.8,79.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.537)").s().p("AjLDqQA/hZAPgRQAMgNB+itQB8ipAHgGQALgJALgWQALgYAAgRQgBgPAbADQAPABAfAHQATACgHANQgIANgZAKQglAPhCBNQgSAVh2ClQh6CpgIAKIh5CFIA7hVg");
	this.shape_144.setTransform(146.1,71.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.7,-2.8,-31.7,2.3).s().p("Ak+FpQgKgWgBgKQgCgPAQgjQAKgWBbhdQBahcAZg1QAMgYBWh+QA6hZAsg+QApg6AfgTQAegSAzACQBHADAFAUQADAQgfATQgmAZgoAsQgqAsgcAxQgiA4hGBeQhRBqgMATQgkA2g2A6Qg2A7gvAkQg5AsgGADQgEACgDAAQgKAAgEgPg");
	this.shape_145.setTransform(141.3,77.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,255,255,0.537)").s().p("AjPDoQBAhZAPgQQAMgOCCiqQCAioAHgGQALgJALgWQAMgYAAgRQAAgPAbAEQAPABAfAIQATACgIANQgIANgZAJQglAPhEBMQgSAUh6ClQh8CmgKAKQgWAahlBqIA9hUg");
	this.shape_146.setTransform(140.7,69.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.7,-2.1,-31.7,1.9).s().p("AlGFmQgJgWgBgKQgBgPAQgjQALgWBchbQBchcAag0QANgYBXh9QBDhgAog2QAqg6AfgSQAfgSAyADQBIAEAEAVQADAPgfATQgnAYgpArQgrAtgdAwQgjA5hJBcQhTBqgMASQgmA1g2A6Qg3A6gwAjQg6ArgGADQgEACgEAAQgJAAgEgPg");
	this.shape_147.setTransform(135.8,75.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,255,255,0.537)").s().p("AjUDmQBChYAQgRQAMgMCFiqQCDimAIgGQALgJAMgWQAMgXABgRQAAgPAbADQAPACAeAIQATADgIANQgIAMgZAJQgmAOhFBMQgTAUh9CiQiACmgKAKQgWAZhnBpIA+hTg");
	this.shape_148.setTransform(135.4,67.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.6,-1.6,-31.7,1.4).s().p("AlNFiQgJgWgBgKQgBgPASgjQALgWBehaQBehaAbg0QANgYBZh8QBDhcAsg5QArg5AggSQAfgRAyADQBHAFAEAVQACAQgfATQgnAXgqArQgsAsgeAvQgkA5hLBbQhVBpgNASQgmA1g4A5Qg4A5gxAjQg7AqgFADQgFACgDAAQgKAAgDgQg");
	this.shape_149.setTransform(130.4,73.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,255,255,0.537)").s().p("AiEB8QAMgNCJinQCHilAHgGQAMgJAMgVQANgYABgQQAAgPAbADQAOACAfAIQATAEgJANQgIAMgZAJQglANhIBLQgTAUiBChQiDCkgKAKQgXAZhqBnQB6ifAbgbg");
	this.shape_150.setTransform(130.2,65.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.5,-1,-31.7,1).s().p("AlVFfQgIgXgBgKQAAgPASgiQAMgXBfhYQBghaAcgzQAPgYBbh7QBLhjAmgwQAtg5AggSQAfgRAyAFQBHAGADAVQADAQggASQgoAXgrAqQgsArgfAvQglA4hNBbQhXBogOASQgnA1g5A4Qg6A4gxAiQg7AqgGADQgEABgDAAQgKAAgEgPg");
	this.shape_151.setTransform(125.1,71.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(255,255,255,0.537)").s().p("AiGB7QAMgNCNimQCJijAIgGQAMgJANgVQANgXABgRQABgPAbAEQAOACAfAJQASAEgJAMQgIAMgaAJQglANhJBKQgUATiECgQiHCigJAKQgYAZhsBmQB+ieAbgag");
	this.shape_152.setTransform(125,64);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.5,-0.5,-31.6,0.5).s().p("AlcFbQgIgWAAgKQgBgQATgiQAMgWBihXQBihZAdgzQAOgYBeh6IB1iSQAug4AggRQAggRAyAGQBGAHADAVQACAQggASQgoAWgsAqQgtAqghAvQgmA4hOBZQhbBpgNAQQgoA0g6A4Qg7A3gyAiQg9ApgFACQgEACgEAAQgJAAgDgQg");
	this.shape_153.setTransform(119.9,69.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(255,255,255,0.537)").s().p("AiJB6QANgNCQikQCNihAIgGQAMgJANgVQAOgXABgRQACgPAaAFQAPACAeAJQASAEgJANQgJAMgZAIQgnAMhKBJQgTATiICeQiJCggLALQgYAYhuBmQCBidAbgag");
	this.shape_154.setTransform(119.9,62);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.4,0,-31.6,0).s().p("AlkFXQgHgXAAgKQAAgPAUgiQAMgWBjhWQBkhXAegzQAPgYBhh5QBLhbAtg1QAvg4AggRQAggQAyAGQBGAIADAWQABAQggARQgpAVgtAqQguAqghAuQgnA3hQBYQhcBngOARQgqA0g7A3Qg8A3gzAhQg8AogHADIgHABQgKAAgDgQg");
	this.shape_155.setTransform(114.7,67.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(255,255,255,0.537)").s().p("AiLB4QAOgMCSijQCRifAIgGQAMgJANgVQAPgXACgQQABgPAaAFQAPACAeAKQASAEgJAMQgJAMgaAIQgmAMhMBIQgUATiLCcIiYCqQgYAXhwBkQCEibAcgag");
	this.shape_156.setTransform(114.8,60);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.3,0.5,-31.5,-0.4).s().p("AlrFTQgGgXAAgKQAAgPAUgiQANgWBlhVQBmhWAfgyQAQgYBjh3QBKhZAwg3QAxg3AggQQAhgQAxAHQBGAJACAWQACAQghARQgpAVguApQgvApgiAuQgpA3hRBWQhfBngOAQQgrA0g8A2Qg9A2gzAhQg/AngFACIgIACQgKAAgCgRg");
	this.shape_157.setTransform(109.5,65.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(255,255,255,0.537)").s().p("AiNB3QAOgNCWigQCUieAHgFQANgJAOgVQAPgXACgQQACgPAaAFQAOADAeAKQASAEgJAMQgKAMgaAIQgmALhNBHQgVATiOCbQiQCdgLAKQgZAYhyBiQCHiZAdgag");
	this.shape_158.setTransform(109.8,57.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.2,1.1,-31.4,-0.8).s().p("AlyFQQgGgXABgLQAAgPAVghQAOgWBmhUQBohUAggzQAQgXBlh2QBSheAsgwQAxg3AigQQAggPAyAHQBGALABAVQABAQgiARQgoAUgvApQgwApgjAtQgqA2hTBVQhhBmgOARQgtAzg9A1Qg+A2g0AfQg+AmgGADIgIABQgKAAgCgQg");
	this.shape_159.setTransform(104.4,63.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(255,255,255,0.537)").s().p("AiPB2QANgMCaifQCXicAIgGQANgIAOgVQAPgXADgQQACgPAaAFQAPADAdALQASAFgKAMQgJALgaAHQgnALhPBHQgVATiRCYQiUCdgKAJQgaAXh0BhQCKiYAegZg");
	this.shape_160.setTransform(104.9,55.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31.1,1.6,-31.3,-1.2).s().p("Al4FMQgGgYAAgKQABgPAWgiQAOgVBphTQBohSAigzQARgXBnh1QBShbAvgxQAyg3AigPQAggPAyAIQBGAMAAAVQABAQgiAQQgpAUgwAoQgwAogkAuQgrA2hWBTQhiBlgPAQQgtAzg+A0Qg/A1g1AfQg/AmgGACIgHABQgLAAgBgQg");
	this.shape_161.setTransform(99.4,61.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(255,255,255,0.537)").s().p("AiSB0QAPgMCcicQCbibAIgFQAMgIAPgVQAQgWADgRQADgPAZAGQAPADAdALQASAFgKAMQgKALgaAHQgmAKhRBGQgVASiVCXQiXCbgLAJQgaAXh1BgQCNiXAdgZg");
	this.shape_162.setTransform(100,53.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],31,2.1,-31.2,-1.7).s().p("Al/FHQgFgXAAgKQACgPAWgiQAOgVBqhRQBrhSAigyQARgXBrh0QBThZAwgyQA0g1AhgPQAhgOAyAIQBFANAAAVQABAQgiAQQgqATgxAnQgxAoglAtQgrA1hYBTQhjBigRASQguAyg/A0QhAA0g1AeQhAAlgHACIgHACQgKAAgBgSg");
	this.shape_163.setTransform(94.4,59.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(255,255,255,0.537)").s().p("AiUB0QAPgMCgibQCdiZAIgFQANgIAPgVQARgWADgRQADgPAaAGQAOAEAdALQASAFgLAMQgKAMgaAGQgnAKhRBFQgWASiXCVQibCZgLAJQgaAXh4BeQCQiVAegYg");
	this.shape_164.setTransform(95.1,51.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],30.8,2.7,-31.1,-2).s().p("AmGFEQgFgXABgLQACgPAXghQAPgVBrhQQBshRAkgxQASgXBshzQBahdAsgsQA1g1AigOQAhgOAxAJQBFANAAAWQAAAQgiAPQgqATgxAnQgyAngmAsQgtA1hZBSQhmBigQARQgwAxhAAzQhBA0g2AdQhBAkgGACIgHABQgKAAgBgRg");
	this.shape_165.setTransform(89.5,56.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,255,255,0.537)").s().p("AiVByQAOgLCjiaQChiWAIgGQANgHAQgVQAQgWAEgRQADgPAaAHQAOAEAdALQARAGgKAMQgKALgbAGQgnAJhTBEQgWASiaCTQieCXgLAJQgbAXh5BcQCTiTAfgYg");
	this.shape_166.setTransform(90.3,49);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],30.6,3.2,-31,-2.4).s().p("AmNFAQgEgYABgKQACgPAYghQAPgVBthPQBuhPAlgxQASgXBvhxQBQhSA4g2QA2g0AjgOQAhgOAxAKQBFAOgBAWQAAAQgjAPQgqASgyAmQgzAngnAsQguA0hbBRQhoBhgQAQQgwAxhBAyQhDAzg2AdQhCAjgGACIgGABQgLAAgBgRg");
	this.shape_167.setTransform(84.7,54.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(255,255,255,0.537)").s().p("AiXBxQAPgMCmiXQCjiVAJgFQANgIAQgUQARgWAEgRQAEgPAZAHQAOAEAcAMQASAGgLAMQgKALgbAGQgmAIhVBDQgXASidCSIisCeQgbAWh8BbQCWiRAggYg");
	this.shape_168.setTransform(85.6,46.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],30.5,3.7,-30.9,-2.8).s().p("AmTE8QgEgYABgKQACgPAZghQAPgVBvhNQBwhOAlgxQATgWBxhwICLiHQA4g0AigNQAigNAwALQBFAPgBAVQgBAQgjAPQgqASgzAlQg0AmgoAsQgvA0hcBPQhqBggRAQQgwAwhDAyQhDAxg3AdQhDAigGACIgGABQgLAAAAgRg");
	this.shape_169.setTransform(79.9,51.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(255,255,255,0.537)").s().p("AiaBvQAPgKCpiWQCniTAJgFQANgIAQgUQASgWAEgRQAEgPAZAIQAOAEAcAMQASAGgLAMQgLALgaAFQgoAJhVBBQgXASigCQQikCTgLAJQgcAWh9BaQCZiQAfgYg");
	this.shape_170.setTransform(80.9,44.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],30.2,4.1,-30.8,-3.2).s().p("AmaE3QgDgXACgLQACgPAZggQAQgVBwhMQBxhNAngwQATgWBzhvICOiFQA5gzAigNQAigNAwAMQBFAPgCAWQgBAQgjAOQgrASgzAkQg1AmgpArQgwA0hdBOQhtBfgQAPQgyAwhEAxQhDAxg4AcQhCAhgHACIgGABQgMAAAAgSg");
	this.shape_171.setTransform(75.1,49.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(255,255,255,0.537)").s().p("AicBuQAQgMCsiTQCpiRAJgFQAOgHAQgUQASgWAFgQQAEgPAZAHQAOAEAcANQARAGgLAMQgLALgbAFQgoAIhWBBQgYARiiCOQinCSgLAIQgcAWh/BYQCbiOAggXg");
	this.shape_172.setTransform(76.3,41.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],30.1,4.6,-30.6,-3.5).s().p("AmfE0QgDgYACgLQACgPAaggQAQgUByhLQBzhMAngwQAUgVB1huQBchVA1guQA5gzAjgMQAigNAwAMQBEARgCAWQgBAQgkANQgrARg0AkQg2AlgpArQgxAzhfBNQhuBdgRAQQgzAwhEAvQhGAxg4AbQhDAhgGABIgHABQgLAAABgRg");
	this.shape_173.setTransform(70.4,46.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(255,255,255,0.537)").s().p("AkKDHQBYhMAUgOQAPgLCwiSQCsiPAJgFQANgIARgTQATgWAFgQQAEgPAZAIQAOAEAcANQARAHgLALQgLALgbAFQgnAHhZBAQgYARimCMIi1CZQgcAViBBXIBThJg");
	this.shape_174.setTransform(71.7,39.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.9,5.1,-30.5,-3.8).s().p("AmmEwQgCgYACgKQADgQAagfQARgVBzhKQB0hKApgvQAgglD/jfQA5gyAkgMQAigMAwANQBEARgCAWQgCAQgkANQgsARg0AjQg3AlgqAqQgyAyhhBNIiBBrQg0AvhFAvQhGAwg4AaQhEAggHACIgGABQgLAAAAgSg");
	this.shape_175.setTransform(65.7,44.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(255,255,255,0.537)").s().p("AkNDFQBZhLAVgOQAPgLCziQQCuiNAJgFQAOgIASgTQASgVAGgRQAFgPAYAJQAOAEAbAOQASAGgMALQgLALgbAFQgoAGhaA/QgXARipCLQisCOgMAIQgdAViCBWIBUhIg");
	this.shape_176.setTransform(67.1,36.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.7,5.5,-30.3,-4.2).s().p("AmrEsQgCgYACgLQADgPAbgfQASgVB0hIQB1hJAqgvQAUgVB6hrQBfhTA3gtQA7gxAjgMQAjgMAwANQBDASgDAWQgCAQgkANQgsAQg1AjQg3AkgrAqQgzAyhjBLQhyBbgRAPQg0AuhGAuQhHAvg6AaQhFAfgGACIgGABQgLAAABgSg");
	this.shape_177.setTransform(61.1,41.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(255,255,255,0.537)").s().p("AkQDCQBahKAVgOQAPgKC2iPQCxiLAJgFQAOgHASgTQATgVAGgRQAFgPAYAJQAOAFAbANQARAHgMALQgLALgbAEQgpAHhaA+QgYAQirCJQivCMgMAIQgdAViEBUIBWhHg");
	this.shape_178.setTransform(62.6,34.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.5,6,-30.1,-4.5).s().p("AmxEoQgCgZADgKQADgPAcgfQASgUB2hHQB3hIAqgvQAVgVB7hqICZh+QA7gxAkgLQAjgLAvANQBDAUgDAVQgCAQgkANQgsAPg3AjQg3AjgsApQg0AxhkBLQhzBZgSAQQg2AuhHAtQhIAug5AZQhHAfgFABIgFABQgMAAABgSg");
	this.shape_179.setTransform(56.5,39);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(255,255,255,0.537)").s().p("AkTC/QBbhJAVgOQARgKC3iMQC0iKAJgEQAOgHATgTQATgVAGgRQAGgPAYAJQANAFAbAOQARAHgMALQgMALgbAEQgoAGhcA9QgYAQiuCHQixCKgMAIQgeAViGBTIBYhHg");
	this.shape_180.setTransform(58.2,31.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#F8D5AB","#F7D2A7","#F2C79C","#EBB689","#E19E6F","#D4804E","#D07542"],[0.031,0.231,0.416,0.592,0.769,0.937,0.988],29.3,6.4,-29.9,-4.8).s().p("Am2EkQgBgZACgKQAEgPAcgfQASgTB4hGQB4hHArguQAVgVB+hpICbh9QA9gwAjgLQAkgLAvAPQBCAUgDAWQgDAQgkAMQgtAOg3AiQg3AjgtApQg2AxhlBJQh1BZgSAOQg1AthJAtQhIAtg7AZQhGAegHABIgFABQgMAAACgSg");
	this.shape_181.setTransform(52,36.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,4,582.3,134.6);


(lib.adductorMuscle_Posterior = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top pieces
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6D38A").s().p("AgmAjQgEgUAIgOQAWgoAFgEQAOgOAYAeQARAVgPANQgKAKgnAbQgHAFgFAAQgIAAgCgOg");
	this.shape.setTransform(48,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6D38A").s().p("AgYAbQgcgkAagbQAZgbAfApQAVAZgZAfQgLAOgMAAQgMAAgPgVg");
	this.shape_1.setTransform(55.6,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6D38A").s().p("AgXBAQgRgegFgTQgIgXAEgdQABgLAMgHQAPgIAFgEQANgLALAIIAYAPQAUAFgBAbQgBAXgOAcQgPAdgQAMQgGAFgHAAQgIAAgHgKg");
	this.shape_2.setTransform(26.9,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6D38A").s().p("Ag3A1QABgaADgbQAGgsAJgKQATgUASABQASACAUASQAWAUgHAhQgGAggWAPQgWAOgWAIQgMAFgIAAQgSAAABgVg");
	this.shape_3.setTransform(63.4,30.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6D38A").s().p("AgJA+QgegHgJgPQgLgSAXgZQAEgEAPgeQAMgXAKgDQALgEARANQAOAKAEAJQAFAMgHANIgNAUQgHAWgBAZQgDAIgOAAQgJAAgLgDg");
	this.shape_4.setTransform(38.8,19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6D38A").s().p("AgsAlQgdgeAMgdQAJgbAhgLQAdgLAWAQQAaATAHAtQAHA3g6ACIgCAAQgeAAgagdg");
	this.shape_5.setTransform(38.9,33.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6D38A").s().p("Ag6A6QgWgFAFggQADgUALgWQAOgeAOgFQAXgJApAUQAtAVABAZQABAphaAOQgXADgMAAIgLgBg");
	this.shape_6.setTransform(43.8,48.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6D38A").s().p("AgDA3Qg2gngCgqQgCgjAigIQAegIAUAXQARASALAZQAMAbgEAWQgFAigWAAQgPAAgUgRg");
	this.shape_7.setTransform(29.2,43);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6D38A").s().p("AgdA7QgZgUABgLQACgMABgRIABgfQAAgQAKgIQAOgHAJgHQAOgMAeAfQAfAegHARQgMAegIAMQgKAQgTASQgCACgBAAQgKAAgTgPg");
	this.shape_8.setTransform(30.1,58.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6D38A").s().p("AgrAHQgig7ApgKQAVgFAfAXQAgAVAIAWQAIATgMAWQgNAWgYACIgCAAQgXAAghg5g");
	this.shape_9.setTransform(16.2,58.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6D38A").s().p("AAoBHQgggKg0geQgMgGgGgXQgHgVAHgNIAOgZQAJgNAMgBQALgBAQAKQARAMAKAAQAjACAEA/QACAagHARQgGAOgKAAIgFgBg");
	this.shape_10.setTransform(17.2,45.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6D38A").s().p("AgVA6IgKgdQgDgHgPgEQgPgEgCgIQgFgNADgOQACgRALgIQAQgLAhgFIAygHQASgDAGAtQAGAogJARQgJAPg4AYIgFABQgKAAgGgMg");
	this.shape_11.setTransform(43.9,62.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6D38A").s().p("AgqAsQgTgJAPgeQAHgMAMgNQANgQAMgFQATgJAIAGQAFAEANARQAUATgQASQgOASgeAKQgPAFgNAAQgKAAgHgDg");
	this.shape_12.setTransform(34.4,69);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F6D38A").s().p("Ag5AgQgLgTAQgVQAOgVAagMQAagNAUAIQAYAJAEAiQAEAcgOANQgLAKgeABIgLABQgwAAgJgSg");
	this.shape_13.setTransform(21.5,69.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6D38A").s().p("AgLAmQgQgPgNgVQgNgSADgFQALgaATgGQAUgHASAYIAXAcQANARgEAPQgJAggTAAQgOAAgTgSg");
	this.shape_14.setTransform(9,65.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6D38A").s().p("AgaBPQgMgSgGg9QgGhGAZgIQAXgHAXARQAaASgBAXQgCAeggAsQgXAigLAAQgCAAgCgCg");
	this.shape_15.setTransform(4.6,51.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F6D38A").s().p("AglA8QgLgMAIgqIAGgoQAHggAIgCQAPgFAQAVQAQATAKAdQAKAcgFAVQgFAYgYABIgLAAQgfAAgJgKg");
	this.shape_16.setTransform(5.5,35.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F6D38A").s().p("AAYBVQgdgKgYgbQgQgTgUgmQgKgSAVgcQATgbAUgFQAhgJAZAnQAVAhADAmQADA6gBAEQgDAOgSAAQgKAAgOgFg");
	this.shape_17.setTransform(12.9,27.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F6D38A").s().p("AggA7QgZgVADgPQACgLAZgVQAWgWAOgPQAfgbADAMQALAiABAQQADAcgRAOIgjAdQgJAGgJAAQgLAAgJgHg");
	this.shape_18.setTransform(20.7,13.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F6D38A").s().p("AglBFQgogLARg5QARg4AvgKQAigNAUAjQATAigZAYQgQAQgXAQQgdAWgQAAIgFAAg");
	this.shape_19.setTransform(58.6,56.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F6D38A").s().p("AgCA8QgIgLgLgFQgNgFgJgFQgPgIABgaQAGgeABgKQAEgcAYgCQAHgBAnAFQAeADADAVQACAMgJAjQgNArgCAFQgJATgLAAQgJAAgIgMg");
	this.shape_20.setTransform(66.1,44.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F6D38A").s().p("AgyA4QgEgRAEgnQADgoAHgPQAVgvAmAwQAoAugHAnQgFAegtAOQgMAEgKAAQgYAAgGgXg");
	this.shape_21.setTransform(51.7,31.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F6D38A").s().p("AgoAYQgMgvAPghQAJgSAeAhQAQAQAOAUQASASgFAQQgFAOgXAMQgOAIgJAAQgZAAgJgng");
	this.shape_22.setTransform(57.8,17.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F6D38A").s().p("AgXA8QgRgLgJgZQgJgYAFgWQAGgbATgNQAPgKAgAaQAhAaADASQADAQgNAUQgLASgPAIQgMAGgJAAQgLAAgKgGg");
	this.shape_23.setTransform(47.2,7.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F6D38A").s().p("AgqA9QgKgNgGgnQgGgkAGgHQAOgSArgUQAvgXAJAWQAMAdgIAcQgFATgSAfQgZApgLAGQgDAEgGAAQgPAAgSgYg");
	this.shape_24.setTransform(33.1,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// top piece shadows
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A5703F").s().p("AgmAjQgEgUAIgOQAWgoAFgEQAOgOAYAeQARAVgPANQgKAKgnAbQgHAFgFAAQgIAAgCgOg");
	this.shape_25.setTransform(48.9,21.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A5703F").s().p("AgYAbQgcgkAagbQAZgbAfApQAVAZgZAfQgLAOgMAAQgMAAgPgVg");
	this.shape_26.setTransform(56.4,45.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A5703F").s().p("AgXBAQgRgegFgTQgIgXAEgdQABgLAMgHQAPgIAFgEQANgLALAIIAYAPQAUAFgBAbQgBAXgOAcQgPAdgQAMQgGAFgHAAQgIAAgHgKg");
	this.shape_27.setTransform(27.7,27.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A5703F").s().p("Ag3A1QABgaADgbQAGgsAJgKQATgUASABQASACAUASQAWAUgHAhQgGAggWAPQgWAOgWAIQgMAFgIAAQgSAAABgVg");
	this.shape_28.setTransform(64.3,31.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A5703F").s().p("AgJA+QgegHgJgPQgLgSAXgZQAEgEAPgeQAMgXAKgDQALgEARANQAOAKAEAJQAFAMgHANIgNAUQgHAWgBAZQgDAIgOAAQgJAAgLgDg");
	this.shape_29.setTransform(39.7,20.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A5703F").s().p("AgsAlQgdgeAMgdQAJgbAhgLQAdgLAWAQQAaATAHAtQAHA3g6ACIgCAAQgeAAgagdg");
	this.shape_30.setTransform(39.7,35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A5703F").s().p("Ag6A6QgWgFAFggQADgUALgWQAOgeAOgFQAXgJApAUQAtAVABAZQABAphaAOQgXADgMAAIgLgBg");
	this.shape_31.setTransform(44.6,50.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A5703F").s().p("AgDA3Qg2gngCgqQgCgjAigIQAegIAUAXQARASALAZQAMAbgEAWQgFAigWAAQgPAAgUgRg");
	this.shape_32.setTransform(30,44.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A5703F").s().p("AgdA7QgZgUABgLQACgMABgRIABgfQAAgQAKgIQAOgHAJgHQAOgMAeAfQAfAegHARQgMAegIAMQgKAQgTASQgCACgBAAQgKAAgTgPg");
	this.shape_33.setTransform(30.9,59.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A5703F").s().p("AgrAHQgig7ApgKQAVgFAfAXQAgAVAIAWQAIATgMAWQgNAWgYACIgCAAQgXAAghg5g");
	this.shape_34.setTransform(17.1,59.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5703F").s().p("AAoBHQgggKg0geQgMgGgGgXQgHgVAHgNIAOgZQAJgNAMgBQALgBAQAKQARAMAKAAQAjACAEA/QACAagHARQgGAOgKAAIgFgBg");
	this.shape_35.setTransform(18,46.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5703F").s().p("AgVA6IgKgdQgDgHgPgEQgPgEgCgIQgFgNADgOQACgRALgIQAQgLAhgFIAygHQASgDAGAtQAGAogJARQgJAPg4AYIgFABQgKAAgGgMg");
	this.shape_36.setTransform(44.7,63.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A5703F").s().p("AgqAsQgTgJAPgeQAHgMAMgNQANgQAMgFQATgJAIAGQAFAEANARQAUATgQASQgOASgeAKQgPAFgNAAQgKAAgHgDg");
	this.shape_37.setTransform(35.2,70.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A5703F").s().p("Ag5AgQgLgTAQgVQAOgVAagMQAagNAUAIQAYAJAEAiQAEAcgOANQgLAKgeABIgLABQgwAAgJgSg");
	this.shape_38.setTransform(22.3,70.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A5703F").s().p("AgLAmQgQgPgNgVQgNgSADgFQALgaATgGQAUgHASAYIAXAcQANARgEAPQgJAggTAAQgOAAgTgSg");
	this.shape_39.setTransform(9.8,66.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A5703F").s().p("AgaBPQgMgSgGg9QgGhGAZgIQAXgHAXARQAaASgBAXQgCAeggAsQgXAigLAAQgCAAgCgCg");
	this.shape_40.setTransform(5.5,53.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A5703F").s().p("AglA8QgLgMAIgqIAGgoQAHggAIgCQAPgFAQAVQAQATAKAdQAKAcgFAVQgFAYgYABIgLAAQgfAAgJgKg");
	this.shape_41.setTransform(6.3,37);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A5703F").s().p("AAYBVQgdgKgYgbQgQgTgUgmQgKgSAVgcQATgbAUgFQAhgJAZAnQAVAhADAmQADA6gBAEQgDAOgSAAQgKAAgOgFg");
	this.shape_42.setTransform(13.7,29.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A5703F").s().p("AggA7QgZgVADgPQACgLAZgVQAWgWAOgPQAfgbADAMQALAiABAQQADAcgRAOIgjAdQgJAGgJAAQgLAAgJgHg");
	this.shape_43.setTransform(21.6,14.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A5703F").s().p("AglBFQgogLARg5QARg4AvgKQAigNAUAjQATAigZAYQgQAQgXAQQgdAWgQAAIgFAAg");
	this.shape_44.setTransform(59.4,58.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A5703F").s().p("AgCA8QgIgLgLgFQgNgFgJgFQgPgIABgaQAGgeABgKQAEgcAYgCQAHgBAnAFQAeADADAVQACAMgJAjQgNArgCAFQgJATgLAAQgJAAgIgMg");
	this.shape_45.setTransform(66.9,46.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A5703F").s().p("AgyA4QgEgRAEgnQADgoAHgPQAVgvAmAwQAoAugHAnQgFAegtAOQgMAEgKAAQgYAAgGgXg");
	this.shape_46.setTransform(52.5,33);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A5703F").s().p("AgoAYQgMgvAPghQAJgSAeAhQAQAQAOAUQASASgFAQQgFAOgXAMQgOAIgJAAQgZAAgJgng");
	this.shape_47.setTransform(58.7,18.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A5703F").s().p("AgXA8QgRgLgJgZQgJgYAFgWQAGgbATgNQAPgKAgAaQAhAaADASQADAQgNAUQgLASgPAIQgMAGgJAAQgLAAgKgGg");
	this.shape_48.setTransform(48,9.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A5703F").s().p("AgqA9QgKgNgGgnQgGgkAGgHQAOgSArgUQAvgXAJAWQAMAdgIAcQgFATgSAfQgZApgLAGQgDAEgGAAQgPAAgSgYg");
	this.shape_49.setTransform(33.9,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// bckgr
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D1A074").s().p("AiaFSQhugSg2g/Qgyg7gGhFQgCgRAHhhQAFhJAvg0QAlgpBdg4QANgIBEhFQA2g3AlgDQBTgGBMA0QAzAkBGBSQAWAaAvAqQAlAnADArQAFA6gPAuQgOAsglAwQglAyhUAjQhlAkg1AaQg4AdhHAAQggAAghgGg");
	this.shape_50.setTransform(37.2,39.4,0.99,1.106);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A5703F").s().p("AiaFSQhugSg2g/Qgyg7gGhFQgCgRAHhhQAFhJAvg0QAlgpBdg4QANgIBEhFQA2g3AlgDQBTgGBMA0QAzAkBGBSQAWAaAvAqQAlAnADArQAFA6gPAuQgOAsglAwQglAyhUAjQhlAkg1AaQg4AdhHAAQggAAghgGg");
	this.shape_51.setTransform(37.6,43.7,0.99,1.106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50}]}).wait(1));

	// dropShadow
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(66,33,11,0.298)").s().p("AiaFSQhugSg2g/Qgyg7gGhFQgCgRAHhhQAFhJAvg0QAlgpBdg4QANgIBEhFQA2g3AlgDQBTgGBMA0QAzAkBGBSQAWAaAvAqQAlAnADArQAFA6gPAuQgOAsglAwQglAyhUAjQhlAkg1AaQg4AdhHAAQggAAghgGg");
	this.shape_52.setTransform(39.4,46.8,0.99,1.106);

	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.6,84.8);


(lib.adductorMuscle_Anterior = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6D38A").s().p("AAUAUQglgDgKgCQgPgEAKgMQAOgVARADQACABAaAPQAJADABAKQABAKgNAAIgFAAg");
	this.shape.setTransform(17.5,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6D38A").s().p("AgOAXQgagJANgQQATgbAZAGQAaAHgQAXQgNASgPAAQgGAAgHgCg");
	this.shape_1.setTransform(15.4,26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6D38A").s().p("AgUAWQgSgKgEgLQgGgLAPgHIASgNQAKgHAKACIATABQALAAADAFQAIANgBAOQgBAJgJASQgGAMgNAAQgPAAgVgPg");
	this.shape_2.setTransform(35.7,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6D38A").s().p("AgPAhQgVgCgLgOQgNgPAPgNQAcgcAiAJQAOAEAWAqQAJARg4AAIgVAAg");
	this.shape_3.setTransform(6.7,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6D38A").s().p("AgLAfQgGgMgKgJIgPgIQgIgCACgHQACgFAKgIQAMgKAJgBQALgCAMAIQASALAEABQAYAHgGAJQgEAKgYALQgTAIgHAAQgEAAgBgBg");
	this.shape_4.setTransform(24.8,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6D38A").s().p("Ag0ASQgDgWASgPQAQgNAagDQAdgDANALQAPAMgSAUQgSAUgaAIQgQAEgLAAQgXAAgCgTg");
	this.shape_5.setTransform(27.5,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6D38A").s().p("AhCAWQgEgNAigTQAggUATgBQAMgBARALQANAIAHAJQAKAMgRAIQgJAEgeAGQghAHgVAAQgaAAgEgLg");
	this.shape_6.setTransform(26.4,25.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6D38A").s().p("AgpAfQgHgJAFgRQAEgNALgNQANgPAagEQAdgFAFASQAHAVgmAeQgUASgPAAQgMAAgIgLg");
	this.shape_7.setTransform(37.1,19.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6D38A").s().p("AAIAkQgRgEgLgFQgIgEgRgMQgJgHAVgUQAVgWAMACQAIACANAAQAKABADAHIAHAPQADAJAEADQADAFgRAQQgQAPgIAAIgCgBg");
	this.shape_8.setTransform(39.3,26.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6D38A").s().p("AghAhQgOgHADgMQADgMAWgQQAWgTASgDQAkgFgRAlQgSAjgWAFQgGACgGAAQgMAAgJgFg");
	this.shape_9.setTransform(50.5,23);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6D38A").s().p("AgzAVQgIgeAdgKQAIgCANgKQAKgJAJgCQALgDAKAEQAGADAKAGQAIAEgCANQgBANgIAEQgsAdgTAKQgGADgGAAQgOAAgGgXg");
	this.shape_10.setTransform(47.5,17.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6D38A").s().p("AgsAfQgLgFgDgWQgEgVAQgDIAtgJQAagGAQACQAKABAFAHQAFAHgBAIQgBAEgLAGQgMADgBAEIgEAQQgEAKgMABIgYABQgdAAgGgEg");
	this.shape_11.setTransform(28.2,31.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6D38A").s().p("AglASQgRgGANgMQAIgLADgDQAFgFAUgBQAVgBAWANQASAJgOAJQgNAIgbACIgOABQgPAAgKgDg");
	this.shape_12.setTransform(37.8,32.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F6D38A").s().p("AglAbQgNgDgDgPQgGghA9gCQAYgBAQAHQARAIgGALQgGALgvAMQgTAFgMAAIgGAAg");
	this.shape_13.setTransform(48.4,30.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6D38A").s().p("AgkAXQgGgGAHgMIAPgSQALgQARgCQARgCAOAKQADACgHAMQgHAMgLALQgRASgPAAQgLAAgKgJg");
	this.shape_14.setTransform(58,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6D38A").s().p("AAAAeQghgNgHgPQgGgJATgPQASgOASgCQAWgCAIAjQAHAegHALQgCADgGAAQgKAAgVgJg");
	this.shape_15.setTransform(59,16.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F6D38A").s().p("AglAFQAGgnAfgDQAFgBALAOIANASQAPAQgIAJQgHAIghAJQgIACgGAAQgZAAAGghg");
	this.shape_16.setTransform(56.2,9.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F6D38A").s().p("AgrAwQgBgBgIgdQgFgSAMgVQANgYAfgFQAQgDAVAJQAWAIgEALQgLAZgKAKQgOATgWAMQgUAKgKAAQgHAAgDgDg");
	this.shape_17.setTransform(48,8.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F6D38A").s().p("AAEAaIghgFQgQgCgDgPQgCgGACgTQABgHAfAGIAkAIQAZAFAEAFQAFAEgRAQQgLAKgSAAIgEAAg");
	this.shape_18.setTransform(39,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F6D38A").s().p("AgDAcQgYgDgOgDQgZgGAKgTQAKgWAegCQApgHAZAYQAYAVggAPQgIADgPAAIgWgBg");
	this.shape_19.setTransform(15.3,32.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F6D38A").s().p("AgQAjIgVgUQgOgPgBgEQgBgLAYgJQAfgNAHgBQAUgEAIAMIANASQAHAMgMAGIgQAKQgIAGgFAHQgIALgJAAQgHAAgIgFg");
	this.shape_20.setTransform(6.5,28.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F6D38A").s().p("AgqAeQgMgSAYgeQAZggAYARQAIAFALATQAKAQgBAJQAAASgpAFIgPABQgaAAgHgKg");
	this.shape_21.setTransform(16.9,18.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F6D38A").s().p("AgFAiQgtgBAVgZQAJgLAKgMQASgXALAGQASANAAAYQgBAdgoAAIgBAAg");
	this.shape_22.setTransform(8.9,13.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F6D38A").s().p("AgfAdQgOgHgBgJQgBgKAXgRQAXgVANABQAoADgGAgQgHAigsAAQgNAAgNgGg");
	this.shape_23.setTransform(15.8,6.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F6D38A").s().p("AASAlQgKgBgagNQgVgLgIgIQgLgKAEgQQADgNAugBQAlgBAPAFQAGACADAUQACASgGAIQgPAVgQAAIgDAAg");
	this.shape_24.setTransform(27.2,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// top shadow
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A5703F").s().p("AAUAUQglgDgKgCQgPgEAKgMQAOgVARADQACABAaAPQAJADABAKQABAKgNAAIgFAAg");
	this.shape_25.setTransform(18,13.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A5703F").s().p("AgOAXQgagJANgQQATgbAZAGQAaAHgQAXQgNASgPAAQgGAAgHgCg");
	this.shape_26.setTransform(15.9,27.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A5703F").s().p("AgUAWQgSgKgEgLQgGgLAPgHIASgNQAKgHAKACIATABQALAAADAFQAIANgBAOQgBAJgJASQgGAMgNAAQgPAAgVgPg");
	this.shape_27.setTransform(36.1,11.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A5703F").s().p("AgPAhQgVgCgLgOQgNgPAPgNQAcgcAiAJQAOAEAWAqQAJARg4AAIgVAAg");
	this.shape_28.setTransform(7.1,21.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A5703F").s().p("AgLAfQgGgMgKgJIgPgIQgIgCACgHQACgFAKgIQAMgKAJgBQALgCAMAIQASALAEABQAYAHgGAJQgEAKgYALQgTAIgHAAQgEAAgBgBg");
	this.shape_29.setTransform(25.2,11.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A5703F").s().p("Ag0ASQgDgWASgPQAQgNAagDQAdgDANALQAPAMgSAUQgSAUgaAIQgQAEgLAAQgXAAgCgTg");
	this.shape_30.setTransform(27.9,18.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A5703F").s().p("AhCAWQgEgNAigTQAggUATgBQAMgBARALQANAIAHAJQAKAMgRAIQgJAEgeAGQghAHgVAAQgaAAgEgLg");
	this.shape_31.setTransform(26.8,26.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A5703F").s().p("AgpAfQgHgJAFgRQAEgNALgNQANgPAagEQAdgFAFASQAHAVgmAeQgUASgPAAQgMAAgIgLg");
	this.shape_32.setTransform(37.6,20.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A5703F").s().p("AAIAkQgRgEgLgFQgIgEgRgMQgJgHAVgUQAVgWAMACQAIACANAAQAKABADAHIAHAPQADAJAEADQADAFgRAQQgQAPgIAAIgCgBg");
	this.shape_33.setTransform(39.8,27.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A5703F").s().p("AghAhQgOgHADgMQADgMAWgQQAWgTASgDQAkgFgRAlQgSAjgWAFQgGACgGAAQgMAAgJgFg");
	this.shape_34.setTransform(51,24);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5703F").s().p("AgzAVQgIgeAdgKQAIgCANgKQAKgJAJgCQALgDAKAEQAGADAKAGQAIAEgCANQgBANgIAEQgsAdgTAKQgGADgGAAQgOAAgGgXg");
	this.shape_35.setTransform(48,18.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5703F").s().p("AgsAfQgLgFgDgWQgEgVAQgDIAtgJQAagGAQACQAKABAFAHQAFAHgBAIQgBAEgLAGQgMADgBAEIgEAQQgEAKgMABIgYABQgdAAgGgEg");
	this.shape_36.setTransform(28.6,32.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A5703F").s().p("AglASQgRgGANgMQAIgLADgDQAFgFAUgBQAVgBAWANQASAJgOAJQgNAIgbACIgOABQgPAAgKgDg");
	this.shape_37.setTransform(38.2,33.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A5703F").s().p("AglAbQgNgDgDgPQgGghA9gCQAYgBAQAHQARAIgGALQgGALgvAMQgTAFgMAAIgGAAg");
	this.shape_38.setTransform(48.9,31.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A5703F").s().p("AgkAXQgGgGAHgMIAPgSQALgQARgCQARgCAOAKQADACgHAMQgHAMgLALQgRASgPAAQgLAAgKgJg");
	this.shape_39.setTransform(58.5,25.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A5703F").s().p("AAAAeQghgNgHgPQgGgJATgPQASgOASgCQAWgCAIAjQAHAegHALQgCADgGAAQgKAAgVgJg");
	this.shape_40.setTransform(59.5,17.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A5703F").s().p("AglAFQAGgnAfgDQAFgBALAOIANASQAPAQgIAJQgHAIghAJQgIACgGAAQgZAAAGghg");
	this.shape_41.setTransform(56.7,10.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A5703F").s().p("AgrAwQgBgBgIgdQgFgSAMgVQANgYAfgFQAQgDAVAJQAWAIgEALQgLAZgKAKQgOATgWAMQgUAKgKAAQgHAAgDgDg");
	this.shape_42.setTransform(48.4,9.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A5703F").s().p("AAEAaIghgFQgQgCgDgPQgCgGACgTQABgHAfAGIAkAIQAZAFAEAFQAFAEgRAQQgLAKgSAAIgEAAg");
	this.shape_43.setTransform(39.4,4.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A5703F").s().p("AgDAcQgYgDgOgDQgZgGAKgTQAKgWAegCQApgHAZAYQAYAVggAPQgIADgPAAIgWgBg");
	this.shape_44.setTransform(15.8,33.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A5703F").s().p("AgQAjIgVgUQgOgPgBgEQgBgLAYgJQAfgNAHgBQAUgEAIAMIANASQAHAMgMAGIgQAKQgIAGgFAHQgIALgJAAQgHAAgIgFg");
	this.shape_45.setTransform(6.9,29.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A5703F").s().p("AgqAeQgMgSAYgeQAZggAYARQAIAFALATQAKAQgBAJQAAASgpAFIgPABQgaAAgHgKg");
	this.shape_46.setTransform(17.3,19.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A5703F").s().p("AgFAiQgtgBAVgZQAJgLAKgMQASgXALAGQASANAAAYQgBAdgoAAIgBAAg");
	this.shape_47.setTransform(9.3,14.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A5703F").s().p("AgfAdQgOgHgBgJQgBgKAXgRQAXgVANABQAoADgGAgQgHAigsAAQgNAAgNgGg");
	this.shape_48.setTransform(16.3,7.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A5703F").s().p("AASAlQgKgBgagNQgVgLgIgIQgLgKAEgQQADgNAugBQAlgBAPAFQAGACADAUQACASgGAIQgPAVgQAAIgDAAg");
	this.shape_49.setTransform(27.7,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// bkgr
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D1A074").s().p("AkGClQg5gQgNgXIgLg0QgGgYAXgfQAegiAPgTQAtg6AegYQAwglBNgTQAjgJBFAIIBlALQBNAEAzAXQAqAUATAdQA1BUgiAqQgkAthjAnQhhAnhZAGQhxAIgmABIgKAAQhDAAgtgNg");
	this.shape_50.setTransform(32.3,19.9,0.936,1.047,0,0,2.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A5703F").s().p("AkGClQg5gQgNgXIgLg0QgGgYAXgfQAegiAPgTQAtg6AegYQAwglBNgTQAjgJBFAIIBlALQBNAEAzAXQAqAUATAdQA1BUgiAqQgkAthjAnQhhAnhZAGQhxAIgmABIgKAAQhDAAgtgNg");
	this.shape_51.setTransform(32.3,21.8,0.936,1.047,0,0,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50}]}).wait(1));

	// dropshadow
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(66,33,11,0.298)").s().p("AhzC+QhGgBg3gUQhWgfgRhBQgFgWAageQAiggAOgTQAug8AngfQA7gvBNgTQAhgIA5AOQBKASAOABQBmAEAgAJQA0APALAvQAFATAPAtQAJAmgTAYQg8BMjvA6QhFAShEAAIgLgBg");
	this.shape_52.setTransform(33.2,24.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,69.1,43.5);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaCsQgqhNgHg7QgFgkAoiTQAUhKAUhCQABArguEHQgGAhAhBTQAlBhA6A4Qg5gcguhYg");
	this.shape.setTransform(7.7,28.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.5,57.7);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBdQghg/gHgvQgGgsAZhFQANghANgaQABAQgMA+QgLA9ACASQAEAnAWA5QAcBRAtAtQgvgXglhKg");
	this.shape.setTransform(6.4,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.8,38.1);


(lib.foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6D38A").s().p("EggpAhJQkcgJjwg3Qjzg3hfhQQl9lBiwjjQk6mUBVlKQAmiWCKi0QBniHDAi7QDcjSBjhjQCsisBMhyICykcQBViIBHhCQBbhUCKgsQCTgvD5gSQDHgPBVgPQBvgUBFgqQBFgrBChcQA0hHBjitQCKjxF+hSQEJg6FiAXQC9ANFUgEQE5gDCtAQQEUAZEcBYQFOBnGeDPQA3AcCOA8QCBA4BHAlQDiB5BfCuQA0BhA0AzQAuAuBBAaQAkAPBqAdQBzAgBVAgQAAATgLAMQgNAMgEAIQgPAaA0BSQgzAvjKgeQjCgdg2gxQi7irh4AYQhXARhXCOQgwBTgZApQgtBKgmAqQhrB2iSgWQhcgOiEATQgmAFjOAoQicAehnAFQiRAIh6ggQhQgVhFA+Qg4AwgtBgQg+CBghCGQgPA+gbCkQgWCHgbBWQgoB+hPB8QiKDbknCZQhtA4icA9IkDBjQnFCviqBfQiTBRjdC8QiIB0kSA1QjNAoj3AAIhfgBg");
	this.shape.setTransform(375.6,212.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,751.3,424.6);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ao9DfQjJg3iZgNQiHgLh0AUQiGAXA4glQAegUBVgkQAggOCsAOQCTANBjARQDPAjBiAJQC3AQB/gcQBggWCGgPQCCgOBcgVQBmgYD3hQQDihJBlgoQAugRBAgyQBAgxAvgRQgEAFgUA5QgQAtgbANQg3AaiTBWQiYBYgeAZQgyAqinAYQjKAWhZANQhhAPijAfQiJAahCAIQg5AHg6AAQiVAAiggsg");
	this.shape.setTransform(127.3,26.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,254.8,53.6);


(lib.MKReDs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1244.5,0,-186.2).s().p("ApiOVQolgzmShyQj1hFiShqQiNhmgch3Qgch3BZhzQBdh4DOheQDlhrB/ipQBOhpBVjWQAmhhAwg5QA1g8BPggQCTg6FrAXQJ0AnJKCaQISCLH/DvQEJB8BUCdQBVCchmC3QgVAlgNAwQgKAggKA3QgtD0jQB8QjTB+nGAxQiQAPjTAJQjmAIhoAFQrRgektgcg");
	this.shape.setTransform(485.6,180.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,36.3,0,-1394.4).s().p("A/wGnQgKAAgbgIIhigaQBtgyDAhfQCmhQB7grQIojEKuiIQJNh2LshSQKLhIEQE1QCVCrBaD5QAcBMhIAyQhMA2iiAAIkxAAUgUIAAAgkNgADg");
	this.shape_1.setTransform(1028.7,1388.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,36.2,0,-1394.5).s().p("AlPGsQ5EgEsxAAQENhDH2h2QGuhoEThWQCJgrCyhrQDgiIBKgjQBhgtBogdQB5giBngEQFXgNIwgJQLEgLDFgFQGjgLCSAPQErAcC1CCQB/BbARB4QAPBvhWBrQhWBsiiBDQiuBHjYADQteAKywAAIk/AAg");
	this.shape_2.setTransform(1898,1388.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,64.6,0,-1366.1).s().p("ABTLKIprgCI03AAQiRAAgygUQhHgbAvhQQCykpDOl9QBki7D+iRQDyiLFShMQFShMFqADQF4ADFNBaQEuBRN6DmQDSA3A1BFQA4BLh4BfQjJCekIC0QjKCLkpC9QguAdhwAQQhaAMhvACQjmAElAAAIhIAAg");
	this.shape_3.setTransform(691.6,1360.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,234.9,0,-1195.8).s().p("AwhSdQhKgfgkhGQgghAgKh0Qgnngh0nRQhFkWBqj0QBuj8EqjdQDjioFkgDQFngCEWCqQCxBtDXCsQB6BhDxDEQHKFnimGrQjxDumpDQQlICgoYC6QifA2iqAWQjFAbiGAAQiPAAhIgfg");
	this.shape_4.setTransform(582.1,1189.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,60.1,0,-1370.6).s().p("EgoqAJ1QhQgpgFhaQgDg6gYiMQgWh/ABhHQABibB4huQCGh7ECgpQDHgfH7hXQG/hMEGgmQM4h4KEANQJSALHgBwQHzB1GBDiQB1BGAAA4QAAA8iAA4QmECxpFCjQjDA3tXDVQg8APhiACIirAAQjQABwLAAIAAgBIqsgBQmUAAkXACIgIAAQimAAhOgng");
	this.shape_5.setTransform(1520.6,1364.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,48,0,-1382.7).s().p("AxFIiQg7AAhdgEIi6gGIB4hLIBig7QCShVA8hWQBDhfgbhtQgVhSAAhqQAAhDALh8QAMiQCKgmQCKgmDoBMQCHAsDBBFIFCB0ILwELQBEAlCRBMQB+BEA6A3QA5A1AWBGQAVBEgTA+QgFAUiEASQh6AQhrABQnSADpgAAIw0gBg");
	this.shape_6.setTransform(2292.3,1376.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,223.9,0,-1206.8).s().p("AhpkNQAmAjBjBHQBQA/gGAoQgMBDhJBiQgnA3hXBug");
	this.shape_7.setTransform(10.6,1200.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1049.4,0,-381.3).s().p("Aikm8QD7BQA7CCQAxBshSCZQguBWhUB8IiTDQg");
	this.shape_8.setTransform(16.5,375.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,30.4,0,-1400.3).s().p("AxRFzIgogvIORm0IChgoIDDg6QB0gjBOgaQCwg6BRgUQBngZBNAEQBMADBdAjQBIAbCWBKIAAJag");
	this.shape_9.setTransform(2620.5,1394.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1375.3,0,-55.4).s().p("AlZHrQjVgYkSg4InchnQk3hEhchwQhchvBximIDglYMAyTAAAQrzC5mtF7Qi3CjgMAJQh1BghxA6QhcAviMAcQhrAWhWAAQgiAAgegDg");
	this.shape_10.setTransform(1392.8,49.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,390.9,0,-1039.8).s().p("ApfyXQJ+ACEkCZQElCagIFMQgGEXhCERQhdGEjlEDQkZE9ocDCg");
	this.shape_11.setTransform(60.9,1033.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1371,0,-59.7).s().p("AkZHUQjmgikeg6QiOgclthPQlMhHhghwQhihtB7iuQAzhHBmhkICsioMAxXAAAQkJCUh7DMQhkCjgZDuQgOCIjIBdQjGBakRABIgGAAQmIAAnOhFg");
	this.shape_12.setTransform(606.4,53.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,381.4,0,-1049.3).s().p("AiSUAQnDhOkDlAQkGlFg7lQQg7lSCWlTQA5iBB8h0QCLiBCtg9QHyiyFWhWQHnh7HNgYMAAAAlwIiYAjQhbAWg7AQQmaB0lTAAQiYAAiKgXg");
	this.shape_13.setTransform(2615.6,1043.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1282,0,-148.7).s().p("EghTAWRQlMgUj6jaQiMh7ikjCQivjZhfhrQgulGgWijQgokhgBjHQAAjmDLisQDPixGQhfQF5hZFkAPQFxARFLCCQA4AWBZAbICWAtIA5gtImQiTQjphWifhBQgxgVgvguQgyg1gdgZMBQsAAAQk9BwihA3QmRCKjDBtQkZCbhZDGQg4B7ipBIQiwBLjwgFQjagEk7gdQlegjirgOQB9COgUCeQgUCeiiCeQgrAqg3BBQg7BHgdAkIh/BMQhNAugmAkQnSGvrLFJQlSCbkqAAQghAAghgCgAgGFiIACgCIgDADIABgBgAgGFiIAAAAg");
	this.shape_14.setTransform(1775.5,142.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1140,0,-290.7).s().p("EAAyAsdQn3gZn+kYQkLiRlIjMIo6lpQg0ghgfgtQghgxASggQBEh1A+jCQBUkDAWg3QBIiwBsh8QCFibDYhyItKjvMAAAgkRIMjg7IsjkDIAAm9MBHMAAAIjXDbQiACChhBWQixCdigBfQipBji7AyQldBepngzQjHgRkxglIn3g+QgvgFhGgDIh3gFIgPAtILwBqQIjBMDEC8QDCC6ihEdQg8BpgYBnQgbBvARBkQAvEUinDyQihDplrDLQhZAziTBEQimBLhTAnIAkANQAQAHALABQAdADA9gBQOTgIIHE+QFdDVCDBUQEICqC3CMQCOBuCNCXQBTBYCbC6QBxCHhPB5QhJBwjlBfQkRByh5AwQjeBZi3BBQovDFnNAAQgzAAgygCg");
	this.shape_15.setTransform(230.5,284.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1156.2,0,-274.5).s().p("EAnhAn/QnMiwjIiyQj4jcBPkPQg3AYgsAnQjfDEjqA7QjmA6m3gaQooghnaAAQkVABoAAKQofALj1ABQldACi+g3Qj6hIhMi6IhdBcQgtArgfAbQkGDlmdAgQmeAglwi1QjJhjjDiMQidhxoMmAQmlk0kJi6Qi4iBg1hNQhSh2BnhuQBqhyDQg9QDBg5EJgHQTmghPtF4QJSDeCxDjQDCD4jkFRQgCADALAKIAgAeICJi5QAzhFBgiMQBYh8BKhRQBphzCvg0QC5g4DlAbQJTBGLZh3QDdgkGLhSQGohYC9ghQhJhygkg6QhAhmgUhHQgUhHAEhoQAJh4AAg7QhiBQh0CDQiPChgtAsQkqEimjBnQnJBvpHhwQhegSiLgBQg2gBi/AGQhhADjbARQjNAQhwACQjdAEiHhAQiHhBgGhxQgCg4AXhFQAQgxAlhLQAkhJCOkEQBxjOA2iBQCJlFEbiwQF9juKNAQQAGABALgJIAVgRIihgsQhggbg+gUQmciCiyi+Qi2jDB7jLQBHh2CiikIEUkSMBEWAAAQnjF9hfBIQlQD7koCnQr/Gxu6B5IOIGoQAMgiADgZQAzljFTjaQFTjZJ9hXQKmhcJHBrQJSBsFDEdQCLB7CVDFIB6CnQBJBlAzA/IgBgBIADADIgCgCQAfBDBCCEQA5B2AfBSQBFC0hqCMQhtCSkgBhQkiBilTAzQrfBsvDBzQhfALiNAAQiigEhQAAQgygBg9gEIg6gFIEyK3IBAhLQAqgyAagjQDik0GGinQGbixJygkQD9gPE7hJQCggkGBhrQFEhaFFACQFiABD7BxQBuAxBNBRQBRBVgOBAQgfCQA9CKQA3B6CKCNQBkBlANBgQAMBchHBMQiVCfmhAZQpjAmnoDlQjDBcjTCKQh7BQjyCxIgfAOIiPA7QhUAjg3AaQlCCZlBAJIgpABQkwAAlJh+g");
	this.shape_16.setTransform(963.6,268.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,708.9,0,-722.7).s().p("EiVJBv2QtSgDy+ABMggRAAAIAAh/IA/iCQAmhOAPg2QAniFARgsQAohhA+hGQCeizGLhXQlQgNi9g0QjPg5hfh3IAAleID5nqQCTkjBSjKQBokACqicQDYjFF3hjQCsgtEXgqIHohIQlUgVikgIQjLgLiDgpQibgxgYhWQgpiUgNhhQgSiFAVhsQA0kHExi8QCMhXDYh9IFyjYMgj5gDEIAA+yQBzgIDmgVQDOgQCNgCQODgOH8CKQKNCzClHKIB4jqQBLiPBThbQCHiUDmg0QDogzECA5QEIA9EiARQECAPE2gSQCIgIE+gJQElgICggLQBpgJBlgXQBsgZBDghQCkhXC4gaQC5gaDUAkQApAHAxAfIBQA0IhmAYQg9AOgrAFQhWAIh9AIIjUAPIACA1IOpDvQAEgoAWhXQAVhPABgpQAFiBifhKQi2hUhohxQhZhggriGQgTg9gnigQgiiLgehQQhIjHh6h+Qh5h9i1hBIA+BFQAgAjASAXQCiDEAkCyQAoDIh0C5Qh8DFiFBvQi7CckTBAQnFBnmmAKQnYALmhhqQmHhmmygbQmNganOAjQjbAQh1gDQiEgEhLgdQhLgegvhCQgng2gohsQi3BahZAqQijBPiBAWQkBAsmEAnIqRBAMAAAgizQBlArDSBQQC5BJBoA8QCGBODrCkQDuCnCBBMID4CPQCMBTBUA/QDfCoABCgIHaidQEbheDFhEQBUgcAqgSQBEgcAlgbQDfiqFwiTQDwhhHViRQEVhWELgGQERgGEUBMQBbAaCMArIECBRQg7ipCMhxQB7hkENg0QI8htH/gSQEqgKGNAKQA6ABJ/AXQFvAODfAMQFEASEFAZQE6AfC9AsQDJAuBvBJQBwBHAvBvQAsBpgCCkQBzAFDPAEQCyAFBzALQFwAkDFADQE2AGEDgyQGnhSEkBcQEkBbBRDrQATA3AjCNQAfB9AcBHQAOAlA0AzIBdBaIhJkvQgpitgLh2QgJhlhBhLQhEhOiLhAQifhJg+glQhLgvgQgpQgQgqAjg7QAagtBYhlIAfgPIENiMQChhTBrg6QEeiYF/hOQFWhGG5gOQEtgJDPA3QDfA8CJCOQDxD5CCB7QDYDNDMCXQEBC/BaBSQCSCGAeBtQAjB9hkCHQhoCOkPC0QCjADBPAnQBBAhAXBAQAFANAUBwQAOBRAmAxIAnhHQAOgYADgMQBmlWFSjLQFnjZJ/hDQBggKCDgrIDKhDQsCCJq0i2QkwhQj5iHQjrh/iWicQmMmcjRlBQkJmWg3l6QgTiHAIg9QALhMA7gkQA8gmCIgPQB3gND6gCQAGAAAJgIIASgSIjqg3QiLghhdgZQjMg1h5hPQh1hNgWhXQgWhZBQhVQBShZC2hHQGminEpjwQEBjQDBkhIgDACIAEgDIgBABIGVjHQDzh4CfhVQLjmLMsFqQCKA9ElBxQEkBxCKA+QEaB8B/B7QBZBWBjCEICjDdIIum4Ii7gOQh0gJg+gUQo7i1kahdQntijk5iNQj5hvhxhZQh2hcADhXQADhVB4hhQBvhZDxh5QDihyFSihII7kQMAuiAAAIiFDbQhPCChABWQgmA0hBBIIhxB7QiHCVgmBlQh8FHiKCtQjOECl2CjQCnhDCwhfQBvg8DCh2QBMgtGikBQh/g0AAhfQAAhKBQhxQC1j/DdjPQD2jmE3i5MAjJAAAQAHAnAMBPQAMBHAPAvQBJDsiBC+QiGDFlcCOQhNAgkRB8QjYBjiSAyQm5CZnqgoIH+EpQBSg+CQh+QCChrB0g3QEFh8GOimIKkkZMAAAAjTIkVhTQimgxh2gbQkKg+ishqQinhnhSiUQgkg/g4heIhdidQATCDA5COQAyB5BTCPQA2BagzBBQgxA/iaAxQhOAYhyAqQiGAzhOAcIBGALQARACAEAAIBVgSQAxgLAggKQFshvFgAfQFBAeFFCWIBoAuIBpAuIAASYQhtB4i8BKQi5BIjzAUQpHAyrlAPQowAMlHhIQmwhgjOkIQhoEohmCsQiNDtjPCUQn2Fmw7gxQDgA9B0AwQB9AzA7A6QA4A3AQBUQAMBDgHCFQgICQA7DUIA2CyQAhBuAQBFIBVgGIgUhOQgMgvgEggQgUiVgChdQgDiDAchqQBDkCEUi/QB3hSByhuQBWhTBrh7QCgi2DPgeQDRgeEuB3QAyAUA/AhIBrA4QDCBmBkClQAkA8AkBZIA8CXQA7CMA0A8QBaBmCtAwIjQmsQh7j8hfitQgrhPAag2QAdg7B2gsQIsjRKPhKQJkhGLIAvMAAAAizQjxAciTAAQihABhwgfQhwgdhhhHQhYg/hvh5Qg0g6hxhNQiChUg8gsQAoBXBhB9QB6CgAaAoQBTCDhHA/QhHA9kAAcQvWBqxOBsQmRAoj+gcQlRgkjcidQhDCDggAqQguA+hBAXQhAAYiCABQhSABkKgKQiRgGjdABQkAADiNABIAvAYQAMAGAEAAIGJALQDxAHCYAGQFjANCEBIQCJBKgQC0QgcE+igEkQikEsksEMQhNBFimBWQjBBghcA0QFzAwCBB5QCRCIivDXQA9gqAvgtQAggeAtgyQBFhOArgiQA1gpA6gNQA6gOBcAGQBMAGCbAZQAyAIBNAIICAAOQnlifiSiNQhRhOgIhcQgIhbA+h2QB+jvDAkaQCLjMDok0QBniJC6haQDHhfEXghQJAhFH9hNQD/gnDMAYQDVAZC5BjQBrA5C3BGIE2BzQAOgigLgXQgJgRgagSQjzijArhgQArhjFrhLQC5gmEkgeIHrgvIAAeSQjugxh/h/QgxgwgshIIhJiBQhUD/kAC2QkDC5mvBqQpoCYnpA6Qj/AfmCAVQm5AVjiAOIDGAZQFfAqDeA3QDqA6CRBWQCQBVBUCCQBPB5AsC9QBNFSCYGMQApBrAEA/QAEBHgnAxQgpAyhhAsQhZAoisAxQCVAXEoAyQEJArC6ASQFxAmGGgRQDJgIEhgbIHogtIAAJ8QgZB7g8D3QgxDcgNCXQgMCNiJBpQh2BZjxBUQh9ArikBPQi1BahdArIihAoIk2A+Qi3Alh4AfQjmA7jdgEQjbgFjbhCQh4gli0g0IkuhYIrvkLIj7iKQiXhTheg6QkYithBisQhIi9C2jIQFqmOLvkCIDkhPIgEg0QltCFkzANQkMAMj0hQQjAg+jeiKQj7inh/hTQAoBIBRB4QBbCFAgA2QB7DPAtCkQA0DAguCgQhpFtqGEBQnfC+lNBZQnQB9nIATQn/AVk4hgQk7hihdjUQh/kghYldQgRhGAEhqQAIh2AAg7QjFCkhDDNQgyCaAODoQALC0iOA2QiLA2lSgvQgpgGhZgRQhUgQgugGIrDhZQmggzkngVQiggKhMgGQiDgKhWgQQjhgrhfh3IlyCRQjUBSibArQkmBSnDBwIryC6QnQB1mFhWQmDhWigj9QinkIgykwQgrkGApk8QAgj5DUi1QDhjAGjhoQGmhpIehYQJnhjHYCeQDgBMCVB8QCZCAA3CkQArCBBpC6ICxE5IBtgQIhpj9Qg/iXguhmQhKilBZiJQBZiKD3hjQFViIHChcQHChcHqAgQGhAbHgB3QkNiZiejGQiWi9g/j2IiHCXQhCBKg3AoQltEKqeCVQj7A4lrA3Ip5BbQgiAFg2gFIhcgJQjpgXjOhOQjIhMiNh1QiRh1hBiMQhEiRAdiVQBanVI6l8QHTk0NQkcQHwimFuBSQFcBPDpEwQBNBkBwCdIDMEdQDXlqHJiGQG3iBKhBPImrkCQopEJmEgpQmEgrkNlhQiKi1lugRQlqgRj6hpQjyhmh1iuQhRh6idg6QiKg0jpgNQBYA7DLBuQCtBnArBRQBpDDh0CrQhzCqlJCJQpQD3oyFKQloDUkxASQk6ASmkixIiahAQhWgmg4ghQj+iViMinQiViyAHiqQAHi5DBibQDTipGlh4QDSg8Gth2QoFjfh2gmQhRgahFgHQgugFhugBIAjAeQAUAPARAIQCDBAA8AvQA/AxgBAtQAAAsg/AyQg7AuiCA/QjdBtkjC3QieBkizAoQjAArjwgTQj0gTiJADQicADhjAgQhlAhhNBIQhGBBhNB9QhpCqjMBRQjLBRlKAEQhKABh6AJQiWALguACQlbAPiehJQidhLgGi1QgChVAAh9IABjRQgrBahMC1QhICfhMBlQjWEbncCBQnVCAoagCQnDgBoRheIMMGMQAxgPB+gqQB7gpBcgZQOPj6IJiHQEAhDDgARQDxATCaByQCEBjCKCXQBQBYCWCwQAvA1A2BTIBZCKIBXgRIgmhkQgXg8gIgpQgaiJgDgbQgNheAJhGQAZi1DAh0QD8iYCBhnQC1iSBMiTQAqhRBwgaQBwgYCHArQElBfCVA1QDwBWCrBSQCiBODxCTQEgCxBoA3QBkA2DsBrQDgBmBsA9QDdB9B0CQQBxCMACCQQACCPhtCDQhwCEjZBoQk4CWl+BfQlzBemjAlQiWAOjogjQkIgviAgSQgugHg8gXQhCgbgjgMQBRBeAlBCQAvBUgFBFQgMCjk5CBQGYArCpCcQBFBAAmBaQAcBCATBpQBpJLApGrQAPCcjQBrQjMBqkugBQiwgBhcgWQq+iilehTQpniSmdh6Qmmh9jJjFQjRjMAzkEIgDAEQDklqLdiUQlwAPjygvQksg4ixifQhohckdjvQj5jRiHh9QgVgUi5iaQh/hqg8hKQhUhogIhiQgLhzBZh5Ij+DOQiGBshVBCIlZEEQjSCeh9BqQj1DSkFAnQkHAomehwQhbgZiOgdQieghhPgRIgsApQGLBWEsCvQD4CRDRDgQD6ENAtEJQAtELirDeQiyDmmHCUQmhCfppAuIktAaQC4AiEuAdQFpAkBxAQQGDA3DQAlQFGA5DvBDQDzBEAjB6QAfBsh8DVQhFB2ijAqQh7Agj0AAIgIAAgEhV6BHAITYhkIgdg+gEBKjBCnQBoiVDTheQCxhOEXgyQClgeFqgrQFpgqCtgfQpvAYpFBDQnhA4jFABQlsACkShpgEB0KA3BIGmCUICrrEgEBafAedIKpBpIARgmIqjhsgEifbAd2QDSATG4BYQjXhoh0g6QjQhohqhXQhwhchliTQhjidgvg+IlWLwQDWg6EBAAQBtAAB0AKgEBfmAGtQA4AcgfBbQgTA4AEBYIAICcQDrhiBWiRQAohFgLg+QgMhBhFguQifhrkvgOQhogFipAEQjyAGgjAAQBBBgCAAsQCBAsCvgOQA9gEAuAAQBWAAAjAQgEhUzAAIQhEALhFAnQhGAngEAhQgOB6ABCuIADEpIA7AEIAjhSQAVgyAXggQAyhEBbhwQBtiHAjgtQAWgeAbgtIAthLIiagiQhAgNgsAAQgTAAgPACgAJ1HTIIOCIQA6gUBtgsQBmgnBNgKQCWgUA0gpQA2gpgdhRgAdfgBQg3ARgaAXQgPANAZAkQAZAkAZADQA0AFA+gHQBBgHAigRQBtg2CUhRID5iNIgtggIkwAaQAwBcg5AoQg7Aqi1gMIgKAAQgmAAg0ASgEg1NgCMQBAALA+A5QAjAhBNAnICCBEICmgdQpqkJgfkiQgekVH5k0QkYCNh8BKQjNB6hnBwQisC8i0BqQjhCFk9A7QguAJg1AdQg5AkgdAQQgDACAeAVQAfAVALgCICFgRQBLgMAdgUQBTg2BSgCQBBgBB9AmQFkBqD/h0QBEgeA5AAQASAAAQACgEBayg2XQBbAhBEBCQA+A8A8BqQByDKAzDrQAqDAAFD6QACBWgHFlQgFEQAPCqQAEAkgqA2QgvA3gUAeQA7gcBug5QBog1BUgXQDEg1EghEIHchuQnHgaj0i5Qi+iQhZkPQiBmNhWkrQhsl4hElEQgVhkAviZQA7imAUhWIiQB8QhYBLgiA4QhxC7j2BdQjuBbl0AGQiMADjJgBIlJgBQBoAoA1APQBHAUBQAEQB8AHHJgjQCEgKBrAAQDXAAB0ApgECZPg1uQDkCbAZDPILDqBQl4BXmIAFQlwAGmQhDQF7ByDFCGgEBqVhBrQCrAZFQBfQEGBKGXBTIKwCJIA7g2QlKhZjFiVQi9iPhIjJQiPBghYAsQhmAyhjARQhjAQiMgJQh1gHjgghQj3gjhnABQi9ACh9BTQCIgXCLAAQCDAACHAUg");
	this.shape_17.setTransform(1367.6,715.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2735.2,1431.7);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-120.1,-47,120.2,46.9).s().p("EhMpCMqMBzvkn/MAljAOsMhzuEn/g");
	this.shape.setTransform(490.6,994.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,981.2,1988.5);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-121.4,-43.4,121.5,43.4).s().p("EhBpB74MBdVkFUMAl+ANlMhdVEFUg");
	this.shape.setTransform(420.3,879.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,840.6,1759.4);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-124.6,-33.3,124.7,33.4).s().p("Eg3TCA1MBHqkMEMAm9AKbMhHrEMEg");
	this.shape.setTransform(354.1,891.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,708.1,1782.5);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-125.6,-29,125.7,29.1).s().p("Egy5CCpMA+ikOWMAnRAJFMg+iEOWg");
	this.shape.setTransform(325.9,894.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,651.8,1788.6);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-125.6,-29,125.7,29.1).s().p("Egy6CCpMA+jkOXMAnRAJHMg+iEOVg");
	this.shape.setTransform(325.9,894.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,651.8,1788.6);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-126.1,-27.1,126.1,27.2).s().p("Egw6CDaMA6bkPSMAnaAIgMg6aEPRg");
	this.shape_1.setTransform(313.1,895.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,626.2,1790.7);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-126.9,-23,126.9,23.1).s().p("EgspCE6MAxokRBMAnrAHOMgxpERBg");
	this.shape.setTransform(285.9,896.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,571.8,1793.7);


(lib.rock10_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC79A","#C9AC68","#BE9C48"],[0,0.498,1],-34.1,0,34.3,0).s().p("AlRB5QgJg1ANhrQAOh6AdgaQAsgnCGAHIBqAIQA5AEAegEQBwgOBIAYQBiAigaBlQgXBThyA7Qg/AgiBAzQhpA3hdAGIgTABQhwAAgQhkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.2,-22.1,68.5,44.3);


(lib.rock09copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-31.9,-12.1,37.3,13.3).s().p("AijESIh6g0QghgNgfgUQgXh6Aih8QAdhsA2g/QApgvCxgIQCHgHBNANQgFAjAOA7QATBQABARQgeANglArIhEBUQhcByhgAPQANAUBRgQQBcgTAfAMQArARBCgGQAmgDBEgOQAKgDAMACQALABANgEQhjAmhyAiQiVAshXAAQgtAAgcgMg");
	this.shape.setTransform(35.9,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-23.5,-6,29.5,13.5).s().p("AhFDoIipAHQhTADgPgXQBigPCFh3IBghWQAwgtAegNQgCgQgThQQgOg8AGgiQAIgCACAEQATAJBCAFQA/AGAcAPQAmAWAmBNQAmBNgDAvQgDAog4BMQgcAmgaAhQgOADgLgBQgMgBgKACQhMAcgvAMQgkAKgZAAQgnAAgXgTg");
	this.shape_1.setTransform(49.5,25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.3,57.3);


(lib.rock08copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3F3120","#5A4C3C","#9A8B7E"],[0,0.333,1],-7.1,13.1,10.7,-8.1).s().p("AhtBiQAPgNANgZQANgcAIgNQAdgtA9AAQABgPAPgZQAOgXgCgUQBCANgSBUQgRBQg7AeQg2AKgQABIgVABQgjAAgNgMg");
	this.shape.setTransform(79.8,68.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3F3120","#5A4C3C","#9A8B7E"],[0,0.333,1],-23.9,19.8,8.9,-19.3).s().p("AAaEHQAHhHg4gMQAFhMgYgoQgWglhIgnIgEhUQgGhOAGgnQAHgpAYgLQgBgMgMgBIAAgVQgMgJgBgWIAAgqQBNAuAxA7QAAAHgGAFIASAIQALABADAKQABAGAAAPQgNAAAWAZQAXAaAKABQAIABADAGIACAOQgYAHgEAEQgEADAxCCQA1COABAvQgaAJgagEQgngGgWABQAWA+gSAvQgQAmgvAjQAvgqAHhEg");
	this.shape_1.setTransform(88.1,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3F3120","#5A4C3C","#9A8B7E"],[0,0.333,1],-27.7,47.1,37.4,-30.5).s().p("AmQFoQhvg+gticQA3jcD4i+QBWhBBagvQBKgoAUAAQBMgXBWAPQBbAPAOAtQBPBDAUBkQgKgBgXgZQgWgaANAAQABgPgCgGQgDgJgLgBIg+AGQglAEgNAAQgWBBgGAdQgOBCAcAHIAAgVQBAAkAXBRQASA8gHBdQACAUgNAYQgQAZgBAPQg+gBgdAwQgIANgOAcQgNAZgOAMQAQAQA0gEQARgCA3gKQA+gnAVgoQAagygYhFQAVgBAoAGQAZAEAagJQAAgug1iNQgxiDAEgEQADgEAZgHQAWBJBlClQBJCThGA+QhZBQhXAZQhdAZh8gZQgaANhCASQg+ASgbAOQj0gRhpg6g");
	this.shape_2.setTransform(55.8,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.6,87.1);


(lib.rock07copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8F9194","#8C8E91","#76787A","#66686A","#5D5E60","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.012,0.11,0.216,0.333,0.49,0.714,0.886,1],-27.4,0,27.5,0).s().p("ACyBsQiehKgagKQhygmh/AFQAAgNgLgMQgNgPgCgHQBNAHBrgiQBkghBXAMQAEBNAXAHQAVAGAGgqQgDAeAaAYQAOAKAoAXQAhATAIANQAMAUgYAZg");
	this.shape.setTransform(62.4,135);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#8F9194","#8C8E91","#76787A","#66686A","#5D5E60","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.012,0.11,0.216,0.333,0.49,0.714,0.886,1],-105.5,0,105.6,0).s().p("AkyICIBQAAQAYgZgMgTQgIgNghgTQgogXgOgNQgagYADgeQgGArgVgHQgXgHgEhMQhXgMhmAhQhrAihNgIQhUgsgyhKQASgCApgdQAogQAjAvQAagHgCgJQgCgFgTgMQgwggASgeQAbAWA2gfQAogWAngpQigglhTgSQiWgfAUAnQgoAjgKgbQgIgRAEg8QA7gbCQAVQBUANDBAoQAUgbAWgWIASgUQADgGgIgKIgcghQBHALAagDQAVgCAEgNIALgfQAOgUAogOQAJAaAJA2QAJA7AIAZQAcBeBhAZQguhWgVgqQgnhOgBhNQBhgXCcgRQCmgSBEgOQEPg3DtjcQgPAwCdBsQAoAcBIAvQA1AjADAKQAdAHAUAyQAWA0gsAKQgMBkgwBeQgeA8hGBkQgnAWg1AtQhFA6gSANQhsBPiMgEQADAOgIAFQgGAEgQABQgmAIhrAdQhZAYg7AKQg9AeiWAAQiZAAg9geg");
	this.shape_1.setTransform(111,94.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#8F9194","#8C8E91","#76787A","#66686A","#5D5E60","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.012,0.11,0.216,0.333,0.49,0.714,0.886,1],-24.1,0,24.2,0).s().p("AjthpQgLhJAlguIAbAAQgEA+AHASQALAaAngiQgUgpCXAgQBQASChAmQgoAogoAXQg2AegagWQgTAfAwAdQAUAMABAGQADAIgbAHQgjgvgoAQQgmAdgSACQAvBKBUAtQACAHANAOQAMAMAAAOQjMiZinixg");
	this.shape_2.setTransform(24.2,111.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#8F9194","#8C8E91","#76787A","#66686A","#5D5E60","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.012,0.11,0.216,0.333,0.49,0.714,0.886,1],-49,0,49.4,0).s().p("AEJFhQgIgZgJg7QgJg2gJgaQgoAOgOAUIgLAfQgEANgVACQgaADhHgLIAcAhQAIAKgDAGIgSAUQgWAWgUAbQi/gohUgNQiQgVg7AbIgaAAQAupFGXjgQAQABAFAEQAJAFgDAOQgKCMA9CpQAsB2AFAQQAZBNAGBHIFogOQArAEjzA5QABBNAnBOQAVAsAuBWQhhgZgchgg");
	this.shape_3.setTransform(51.9,55.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#8F9194","#8C8E91","#76787A","#66686A","#5D5E60","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.012,0.11,0.216,0.333,0.49,0.714,0.886,1],-19.7,0,19.7,0).s().p("AhJB1QhMhcgehyQgZhfANhBQAGgbAKgHQALgIANASQAMAWBOBeQBfB1ArA4QCwDqhUAkQiWg3hchyg");
	this.shape_4.setTransform(196.9,45.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#8F9194","#8C8E91","#76787A","#66686A","#5D5E60","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.012,0.11,0.216,0.333,0.49,0.714,0.886,1],-68,0,68,0).s().p("ABRGNQhWgGjYgyQjAguhqAEQgGhHgZhPQgFgQgsh2Qg/imAKiNQADgNgJgGQgFgDgPgCQAOgVAqgLIBMgPQBZgXCigJQCkgIBCAQIBpAAQA+AQDEAbQCmAYBSAcQADAQASAHQAJADAfAEQA0AGgGAjQgXgigMAbQgJAXAGA2QAEA3ARApQATAvAZABIAAAWQiGDkihBaQh0BCiSAAIgqgCg");
	this.shape_5.setTransform(116.3,39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,216.6,148.8);


(lib.rock06copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4D").s().p("AjjHFQgKgCgBgHQAbgBAwgUQApgQAgAIQgBgXAVgHQgBgOAJgNQAKgQACgGQAyhqAEhyQgEiPAGhtIAAhPQgChJgag5QgTglgxg8IAAgKQAjgEAvAHQAxAIAZgBQALABgBAJIgnAAQgDALAJAMQAIALgFAPQAIABACAJQABAGgBAOQgCANAPgIQAQgIAAgHQAPAMgTAUQgaAZABAMQBDgvAbgZQAqgmAMgmQAFAAAGAEIAJAGQgDAXANAwQAKAngKASQgRCFgDEOQgTBOghBWQgwB/glALQgNAKg8ANQg8ANgYgDQg/AUhCAAIgSgBg");
	this.shape.setTransform(66.3,46.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AgFAHQgegjgSAAQADgIAdgEQAXgEgGgXQATASAOAuQATA7AGAMQgYgPgjgug");
	this.shape_1.setTransform(27.1,82.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("AgGARQhNggg2gmQAYgcAVAYIAHAIQABgBgDgXQBLAFAwAuIAtAsQAeAfAbAVQhbggg1gZg");
	this.shape_2.setTransform(17.7,84.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgwAwQAUgUgPgMQgBAHgPAIQgQAIACgNQABgOgBgGQgCgHgIgBQAFgPgIgLQgIgMACgLIAnAAQACgJgMgBQAngZApADQAsACAgAeIgJgGQgFgEgGAAQgMAmgqAkQgZAZhDAvQAAgMAZgZg");
	this.shape_3.setTransform(79.4,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgJHGQgJgDAAgHQgbgVgegfIgtguQgyguhLgFQADAXgBABIgHgIQgVgYgYAcQgZg6gJhCQgLhNAQhBQAugwBRhfQBYhqApgsQCbiqCVgwIAAAJQAxA8ATAmQAcA5ADBIIAABPQgHBuAECPQgEBxg0BqQgCAHgKAQQgJAMABAOQgUAIAAAWQgggIgoARQgxAUgbABQABAHAKABIATACQgUAJgjAFIg/AFQAAgEgJgFgAhVEvQgdAEgDAIQARAAAeAlQAmAvAYAPQgHgNgSg9QgOgugVgSQAHAXgYAEg");
	this.shape_4.setTransform(33.5,47.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.3,94.1);


(lib.rock05copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#434345","#4E4E50","#57585A","#5A5B5D","#5D5E60","#66686A","#76787A","#8C8E91","#8F9194"],[0,0.114,0.286,0.51,0.667,0.784,0.89,0.988,1],48.8,0,-48.8,0).s().p("AHhLQQgIgHgYgnQg9hjgLAAQgfAZgkgGQgIgBhageQAXgHAJgGQAPgKgMghQghALhKgKQhGgLglATQgKAMgagXQgagVgMAXQAGALAPASQANAQAHATQgdgWgIAJQgHAGAFAeIAMA8QAFAkgGARQgCgEgggeQgQgPAIgPQAGABAOAOQANAMAHgDIgehGQgZgQhVgcQhDgXgsgsQAMgqgegoQgbgigngMQgGgrgth0Qgwh7gJgqQgWhNAOgpQgEihAjiLQgHgSAPh0QAPh5AUgzQAhAvBABaQA5BRApBFQAJgugwhmQg9h1gVg1QAmgBBGByQBWCMAZAXQBlA1BfB6QB/CeAWCuQADAsALBdQAGBMgRAgQAJAVALADQAHABAMgBQgFBbBUAfQAhAMAmgCQAjgCAYgNQAFAegOAQQgHAGgbANQgWAKgHAOQgJAVAPApQApBEAcAaQAGAdgGAAIgEgCg");
	this.shape.setTransform(48.8,75.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#434345","#4E4E50","#57585A","#5A5B5D","#5D5E60","#66686A","#76787A","#8C8E91","#8F9194"],[0,0.114,0.286,0.51,0.667,0.784,0.89,0.988,1],10.9,-5.4,-8.6,2.9).s().p("AhVAdQgOgnAJgVQAGgPAXgKQAbgMAGgHQAPgPgGgfQATgEAlAVQAnAVATgFQgrBAgUAhQggA6gQA3QgbgagqhDg");
	this.shape_1.setTransform(99,132.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#434345","#4E4E50","#57585A","#5A5B5D","#5D5E60","#66686A","#76787A","#8C8E91","#8F9194"],[0,0.114,0.286,0.51,0.667,0.784,0.89,0.988,1],54.2,0.1,-54.1,0.1).s().p("AmKJhQg8hSgchqQgRhGABgwQAnAMAaAjQAfAngMArQArAsBEAWQBUAcAaARIAdBFQgHADgMgMQgPgOgFgBQgJAQAQAPQAgAeADADQAGgRgGgkIgLg7QgFgeAGgHQAJgJAeAXQgJgUgMgPQgPgSgGgMQAMgXAZAWQAcAWALgMQAkgSBEAKQBLALAggMQAMAhgPALQgIAGgXAGQBaAeAIACQAkAGAegaQALAAA9BkQAYAmAIAHQAMAKgIglQASg3Agg6QAUgjArhAQgTAFgngVQgngVgTAEQgXAOgkABQglACghgMQhVgeAGhbQgNAAgGgBQgLgCgKgVQARgggFhNQgLhcgEgsQgWiuh8ieQhih6hlg2QgZgXhWiMQhGhygmABQAVA2A9B1QAxBlgKAuQgohFg5hRQhBhZgggwQA5iFExCFQBsAvBpBDQBfA7AUAZQBAA/AZA+QAeBMA9BKQADAGBeCkIBhCnQAFBOALBrQAFBYgVBwQgbCPhNBcQhXBmiFARQhHAJhBAAQk0AAiWjMg");
	this.shape_2.setTransform(62.1,81.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,116.3,162.6);


(lib.rock04copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A8B7E","#8A7B6D","#615343","#483A2A","#3F3120"],[0,0.137,0.522,0.82,1],-50.2,-32.8,51,25.6).s().p("AhJG/QgKg2gwhaQhCh6gLgZQBOg5AAiWQAAiXhIhFQg1AShYAKQhPAJg/gBQgMAFgRgBQgPAAgQAHIAKAVIgLAEQgvhZEThSQBpggB+gWQBwgUBMgEICVAzQBaAeA0AbQADAqAnBGQA0BgAIAUQA1A7AGBYQABARgJCPQgrALhzBOQg6Ang2AnQhMAjhmAbQhcAZg3AAIgXgCg");
	this.shape.setTransform(61.2,44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9A8B7E","#8A7B6D","#615343","#483A2A","#3F3120"],[0,0.137,0.522,0.82,1],-35.6,-25.5,29.9,12.3).s().p("ACTFwQgCgBgDgDQANgGgagGQgggIgBgFQAJAAAMADQANADAEADQAHgHghgKQgkgMACgSIAKgJQAGgGgCgEQgHgNgUhbQgPhHgkgdQgKgKgtgIQgmgGgDgQQgkAFgqgEIhGgIQg4gCgagDQgsgFgTgRQgBAAAAgBQgBgBAAAAQAAgBABgBQAAAAABAAIAJgCQAvhqAAg5QAhgIA+gBQA4gBAugPQhjAFgjgBQg4gDAGgdQApgcB0gXQCNgcAhgOQgGgHgXACQglAFgEgBIgFACQgfgDhhATQhaASgfgHQgCgEgIgKQgJgJgCgEQARgHAUgCQAVgCAMgFQA7ABBTgLQBWgNA2gSQAyAxCOBKQCKBJAYAZQiEAlhZBEQhXBOg0AmQAKAZBCB6QAxBaAKA3IgHABIgDAAg");
	this.shape_1.setTransform(38.3,53.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9A8B7E","#8A7B6D","#615343","#483A2A","#3F3120"],[0,0.137,0.522,0.82,1],-26.8,-17.3,28.3,14.5).s().p("AAGCTQgPgUhHhfQg1hCghgfQgOgYghghQglgmgNgTQATASAtAFQAZADA4ABIADAGIABAAIgBgDIBGAIQAqAEAigFQADAQAmAGQAtAHAMALQAkAdAPBGQAUBaAHANIgCAAQACAGgGAKQgDASAgAMQAcAKgHAIQgEgEgIgBIgRAAQACAFAbAFQAVAFgNAFQhegjifADg");
	this.shape_2.setTransform(26.4,71.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9A8B7E","#8A7B6D","#615343","#483A2A","#3F3120"],[0,0.137,0.522,0.82,1],-13.4,-8,11.4,6.3).s().p("AiPANQADgTggAAQgFgEAOgEIALgEQAfAIBagSQBfgTAfADQAIACAjgEQAegEAHAIQgkANiLAcQhzAVgqAdQAMgYACgMg");
	this.shape_3.setTransform(23,26.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9A8B7E","#8A7B6D","#615343","#483A2A","#3F3120"],[0,0.137,0.522,0.82,1],-13.4,-3.6,5.3,7.2).s().p("Ah6CEQgCgpAghbQAchUgLg0QAgAAgDAVQgBAMgMAYQgGAdA4ACQAhACBjgFQguAPg4AAQg8ABghAIQAAAigMAlIgdBPQAHAIgNAGg");
	this.shape_4.setTransform(13.2,39.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9A8B7E","#8A7B6D","#615343","#483A2A","#3F3120"],[0,0.137,0.522,0.82,1],-8.7,-5,8.8,5.1).s().p("AgHAAQgohGgDgrQAJAWAyBcQAnBHACAqQgHgUgyheg");
	this.shape_5.setTransform(105.6,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.6,90.2);


(lib.rock03copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C4A873","#AA863B","#8C6F2D"],[0,0.498,1],-22.3,0,22.4,0).s().p("AjQJQQgGgVAKgPQAMgRgDgOQgBgTALgRQAPgWACgIQBHiPAFiaQgGjBAJiTIAAhrQgDhignhMQgZgzhChRQA4gBAaA0QAPAeAXBCQAmABARgOQATgPgHgnQAKACADAMQABAHgBATQgDASAVgKQASgLACgKQAUAQgbAbQggAhABARQBZhAAkghQA5g0AQgzQAHAAAHAGQAIAHAEABQgFAfASBAQAQA2gPAYQgXCzgEFsQgOA5h8CnQh/Ctg0AQQgMAIgUAUQgRAMgWAAIgJAAg");
	this.shape.setTransform(99.4,62.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C4A873","#AA863B","#8C6F2D"],[0,0.498,1],-45.1,0,45.2,0).s().p("AAyJrQhLgBgBgOQgkgcgogqQgyg0gLgKQhDg9hmgGQAEAegBABIgKgLQgbggggAmQgihPgMhZQgPhnAVhYQA+hBBtiAQB4iQA2g6QDSjmDJhBIAAANQBCBRAZAzQAnBMADBiIAABrQgJCTAGDCQgFCZhHCPQgCAIgPAWQgLARABATQADAPgMAQQgKAPAGAVQhTAahaAAQgeAPhKAAIgFAAg");
	this.shape_1.setTransform(45.2,63.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C4A873","#AA863B","#8C6F2D"],[0,0.498,1],-18.6,0,18.7,0).s().p("AgJAXQhngshJgzQAhgmAbAgIAKALQABgBgEgeQBlAGBCA9QALAKAxAyQApAqAkAcQh6grhJghg");
	this.shape_2.setTransform(23.8,114.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C4A873","#AA863B","#8C6F2D"],[0,0.498,1],-11.3,0,11.4,0).s().p("AAGBQQgVhCgPgbQgag0g4ABIAAgNQAvgGA/AJQBFALAggBQAIABADACQAEADgBAHIg2AAQgCAPALAQQALAQgGASQAHAmgTAQQgPAMghAAIgHAAg");
	this.shape_3.setTransform(88.4,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C4A873","#AA863B","#8C6F2D"],[0,0.498,1],-12.6,0,12.7,0).s().p("AhBBAQAbgbgUgQQgCAKgUALQgVALADgSQABgTgBgIQgDgKgKgBQAGgUgLgQQgLgQACgPIA2AAQABgHgEgDQgDgCgIgBQA0giA5AEQA7ADArAoQgEgBgIgGQgHgGgHAAQgQAyg5AzQgiAghbBAQgBgQAigig");
	this.shape_4.setTransform(107,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.8,125.6);


(lib.rock02copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#867278","#5C4A56","#433545"],[0,0.498,1],-18.1,0,18.1,0).s().p("AhhB9QgZgKg6gNQAJgBAMgFQANgGAIAAQAVABAdgQQAbgPAAgGQgNgDgKgMIgSgUQgWgZAYgfQATgYAggNQAHgFAKgaQAJgUAPgDIgDAeQgCASAMAGQACgNAJgPIAQgaQATAHA0AgQAzAfAPANQAMAFAFANQgNAKgKAVQgQAfgOATIgIANQgGAGgJgBQABAHAEgBIAAAMQAEAAADgDIAFgDQAHACgEADIgJAHQgEgCgLgPQgHgKgOAJQABgDACgDIAEgGQgKgCgGAEQgIAFgGgBQgSAAgbAFQgbAHgPAAQABAHgMAGQgNAHgSgCQgEAAgIASQgEAJgDAAQgCAAgDgEg");
	this.shape.setTransform(30.8,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#867278","#5C4A56","#433545"],[0,0.498,1],-4.4,0,4.5,0).s().p("AgrAvQAJABAGgGIAJgNQAOgTANgdQALgXANgKQAEAHABAVQACATAFAFQgOAEgFAGQgGAIANAFQgKAJgWAIQgeAJgHAEIgCAAQgDAAgBgGg");
	this.shape_1.setTransform(45.7,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#867278","#5C4A56","#433545"],[0,0.498,1],-26,0,26,0).s().p("Ai6CGQhXhJARg8QAIgbAbgVQAhgVAPgNQANgQBYghQBkgmAvAQIgQAaQgKAPgEANQgMgGACgSIAEgeQgQADgJAUQgKAagFAFQggANgSAYQgZAfAWAbIASASQALAMANADQgBAGgbAPQgdAQgVgBQgIAAgMAGQgNAFgIABQA6ANAZAKQAFAKAGgPQAIgSAFAAQASACAKgHQAMgGgBgHQAQAAAcgHQAbgFASAAQAHABAHgFQAHgEAJACIgEAGQgCADAAADQALgHAqgHQAngHAJgJQgNgFAGgIQAFgGAOgEQAZAUgIAbQgFAThEAfQhKAhg8AAQgaAAgkAIIg+AOQgVAEgTAAQgtAAgcgXg");
	this.shape_2.setTransform(26,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.1,31.6);


(lib.rock01copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-12.5,0,12.5,0).s().p("Ah8CWQARgTAOgmQAQgrAJgUQAhhHBFABQABgXASgnQAQgjgDgfQAmAKANAsQANAngJA4QgIA0gXAvQgZAxgfAVQg2AOgaADIgYACQgnAAgPgTg");
	this.shape.setTransform(110.1,105.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-7.2,0.1,7.3,0.1).s().p("AgnBgQAAgWgBgIQgCgRgNgBIAAghQgOgMgBghIAAhAQBWBHA4BWQgCAdgmAEQgvgCgYACg");
	this.shape_1.setTransform(111.2,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-72,0,72.2,0).s().p("Am8IvQjjhigwjcQACgdAdgcQAegfADgYQAJgMAhhKQAYg0AegUQAagwAshuQAshqAbgzQBcitCXgoQATgaA/gMQBLgNASgNQAeACAkgPQAngSAWgBQB0gKBHAQQBUASAhA4QBaBnAWCZQgMgBgZgnQgZgoAOAAQACgWgCgJQgDgPgNgCQgcADgfASQgoAXgNAEQAOgPgEgIQgEgJgWAAQgZBigHAuQgPBlAfALIAAggQBJA3AaB8QAUBdgHCOQADAfgQAkQgSAngBAWQhHAAghBIQgJAUgQAsQgOAlgRATQATAZA7gHQAagDA4gPQBGg8AYg8QAehNgchrQAZgBAtAKQAdAGAdgPQAAhHg8jYQg4jJAEgGQAEgFALgEIARgHQAPBCAnBeQA6CLAGARQBGDBgsCxQhQBdhpAuQiDA6iEglQgdAUhLAcQhJAbgfAVQlNgeiehEgAGom9QAmgDABgdQg3hZhZhHIAABBQACAiAOANIAAAgQAMACACAQQACAJAAAVIAeAAIArAAg");
	this.shape_2.setTransform(72,67.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-15.2,0,15.2,0).s().p("AAREzQAIhug/gRQAGiPgUhdQgZh7hKg3QAMgYAChLQAChHARgXQAMgEAogXQAggSAbgCQALABADAPQACAKgCAVQgMAAAXAoQAaAnALABQAKABADALIADAVIgRAGQgLAEgDAFQgFAHA4DIQA8DZAABHQgdAOgdgGQgtgKgYACQAYBggVBGQgSA7g2A3QA2hCAIhng");
	this.shape_3.setTransform(120.8,70.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-15.2,0,15.2,0).s().p("AAigWQhEgQh1AKQBXgjBgAXQBoAYAPBCQghg2hUgSg");
	this.shape_4.setTransform(100,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-3.1,0,3.2,0).s().p("AgZAPQAHgrAXhiQAWgBAEAJQAEAJgOAPQgRAWgCBHQgCBKgJAXIAAAgQgggLAQhmg");
	this.shape_5.setTransform(106.7,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,144.1,133.4);


(lib.rockShadow_01copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqaInQlSgTlWhqQlKhmghk1IDciKIDwhQMAjngFTIAogVIFoBQQAKAKACAMQAIAwAAAyIEECMQAAAKgDAJQgHAWgKATIvACMIC0BiIjICMQAAAUAHAEQAwAWAFA2IDICMQo3Btp1AAQjYAAjggNg");
	this.shape.setTransform(171,56.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,342.1,112.9);


(lib.overlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ehc0ChSMAAAlCjMC5pAAAMAAAFCjg");
	this.shape.setTransform(594.2,1032.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1188.3,2064.5);


(lib.outterShellpng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.musseloutterShell();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,689,1226);


(lib.musselshadowcopy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(135,131,92,0)","rgba(115,113,68,0.271)","rgba(84,84,31,0.698)","#464012"],[0.008,0.275,0.733,1],0,45.7,0,-45.6).s().p("A29FnQnthehIiuQg4iEC+iUQBIg4BWgoQBRglAxgDQAYApBAgDQAwgCB1ghQC4g0BBgQQCtgpCngSQCIgPEFAVQBjAIGAApQErAhCWAEQDXAHBPgmIB6AiQCWArCOAuQHFCVDDB9QEQCykcBtQlkCIy5AVQi1ADimAAQuvAAoFhhg");
	this.shape_1.setTransform(204.8,45.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,409.7,91.4);


(lib.musseloutterShell_pngcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.musseloutterShell();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,689,1226);


(lib.grass_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7CD61").s().p("AwgTWQAihwBFiGQA2iMFsn5QB7ipB8ikQBtiPACACIBwiOQCJirCAiTQCKifCoi0QCKiTBMhMQBkhmBehOQBCg2B9haQhXBvhABLQhLBWhnBqQhRBRiECNQioC1iHCcQiBCTiHCpIhvCNQgCgChtCOQh6Cjh7CpQlqH2gzCFQhRCcglBMQgzBngzBwQATiMAdhhg");
	this.shape.setTransform(451.4,304.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7CD61").s().p("Aq/V/QAdhxAtiFQCjnVBWjoQBAizBQjHIBCihIBFiiQBWjGBTipQBYi4B7jSQBhimA9hbQBQh4BLhWQA9hIBlhgIh0DJQg9BmhLByQg+BdhdCgQh5DRhYC1QhUCnhTDEQgrBhgaBAIhBCgQhQDFhACzQhACvhWDyIhiEaQgvCHgvBoQgmBUhDB9QAdiQAWhTg");
	this.shape_1.setTransform(526.4,338.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7CD61").s().p("A/OYCIB9huIEakBQA3gvEOkEQEvkkC2ilQDRjADzjRQB6hmBRhBIDLimQD8jIDkinQD4i1EvjDQD3igCJhMQC6hrCbhIQB+g7DEhLQjOCChZA3QiYBeixBmQiJBNj0CdQktDCj2C0QjjClj7DIIjKCkQhQBCh5BlQjyDPjQDAQixChkyEnQkNEBg6AyQiQCDibByQhuBLgiARQhXAwhVAGQBPgWBMg7g");
	this.shape_2.setTransform(307.3,162);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B7CD61").s().p("EghkAcCQBQixCSjfQBUiLDrkiQEDlAEFkTQDjj3EVkGQCJiDBbhSQgEgCDvjMQEdj2EOjNQEZjZFoj2QECixC6h0QDWiICzhhQCOhNDhhtQjSCUh/BXQiqBzjTCGQi3B0kDCxQlmD1kXDXQkNDLkbD1IjqDNQhbBSiICCQkREEjiD1QkEETkBE9QjoEehTCJQibDqhVCUQhgCmhaDHQA8jhBLimg");
	this.shape_3.setTransform(409.3,226.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7CD61").s().p("A+gecQAcjGBfjvQAkhXA1hpQBJiNBViEQCfj6Erl7QDPkED6kSQDPjkADAEIDXjbQEGkGD3jeQD9jnFPkSQDRirDHibQDDiWCohwQB+hWDYiCQizCaiBBsQiVB7jICbQjGCbjQCqQlNESj9DlQj1DckFEEIjWDaQhUBWh8CJQj4EQjOECQkmF0ifD5QhUCDhGCJQg0BlgjBWQheDqgtC2QgoCmgYDmQgQjsAYiqg");
	this.shape_4.setTransform(611.9,310.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B7CD61").s().p("A6wLoQBZheCOhqQCAhzJ4lKQDShtDVhpQC5hcABACIC5hZQDlhqDOhYQDihgEDhnQDehXBsgmQCbg4CGgjQBdgZCvgkQiNBEhtAvQh0AyikA9QhtAnjbBVQkEBnjfBfQjNBXjkBqIi4BYQAAgCi6BcQjSBmjTBvQp1FJh5BuQiqB9hEA2QhpBUhlBeQBTiDBUhZg");
	this.shape_5.setTransform(590.8,466.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B7CD61").s().p("Ay5N5QAvhgBThzQA3hPB+iTQCVitCPiLQB+h9CZiMIB8hzIB/hwQCaiHCThrQCbh1DKh3QCghcBhgrQB9g6BqgeQBXgZCFgVIjHBjQhyA4hpAyQhgAriaBaQjHBziYBzQiQBqiZCFIh8BuIh7ByQiYCLh+B9QiMCJiUCqQh7CQg2BNIiQDDQhJBig4BSQAmh7AqhXg");
	this.shape_6.setTransform(567.8,404);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B7CD61").s().p("AyWRzQA8hoBYh3QBFhfB7iWQCejFCNiaQCBiQCdiiIB/iAICAiBQCgibCOiFQERj/ErkGQBuhhBfhIQBKg3B+hSQhhBxhABDQhTBWhuBiQl6FTi/CyQiOCEifCbIiAB/Ih+B/QicChh/CPQiLCZieDEQh1COhJBkQhYB1hMBcQg6BGhiBwQA/iFAuhSg");
	this.shape_7.setTransform(565.3,311.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B7CD61").s().p("EgkfAeTQCJi/CjjNQDnkjCFigQE4l0EHkNQD8kIEykYQCYiNBlhXIECjeQE7kKEnjaQEvjnGNkOQEBiuDjiQQDoiSDEhrQCWhSD5h6QjiCciQBhQi3B7joCSQj0CdjuChQmNENksDlQklDak8EIIj/DdQhkBXiXCLQkwEXj7EGQkEEKk2F0QhsCAkBFAQizDiiJCdQiACVivC1QC/kQBEhdg");
	this.shape_8.setTransform(501.5,332.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B7CD61").s().p("A/ve7QBKi/B3jqQBai2C0kiQDol3DkkgQDPkOEHkfQCCiPBYhaQBXhZCLiIQEUkPEFjeQEPjrFjkPQD2i7C/iGQDUiVCwhrQCOhWDfh4QjPCgh+BdQioB9jOCUQjACHjzC5QlhENkODqQkDDdkTEMQiJCGhXBaQhXBZiBCOQkFEcjNEMQjhEdjnFzQiwEbhbC4Qh/D4hSCkQhVCrhgDPQBEjwA8ihg");
	this.shape_9.setTransform(367.8,314);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B7CD61").s().p("Av4TLQAkhtBAiEQAwhmBfinQB5jWB0ipQBrigCEisQBBhVAsg2QAqg3BFhTQCIioCBiOQCFiXCsizQB8iCBWhXQBmhmBYhLQBGg7B0hVQhVBxg8BHQhKBZhlBmQkyE5jPDoQh/COiHClQhFBTgqA2QgsA2hABUQiDCrhoCeQhzCnh3DTQhdCjgxBmQg9B7g5BpQgkBEhPCJQAgiJAfhag");
	this.shape_10.setTransform(486.7,461.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B7CD61").s().p("AsHT1QgJhsAdiMQAOhVBGi9QBMjLBbi4QBNihBkixQAxhWAig4QCEjgCgjtQBqibCKi6QBkiGBHhbQBShpBLhPQA5g8BlhcQhCBzgvBJQg7BahRBqQhKBehgCCQiJC5hpCaQhlCShoCqQg0BUghA4QghA3gxBWQhiCuhNCfQhYC1hLDHQhFC5gNBPQgeCTgJBUQgKBlAIBzQguh0gJhkg");
	this.shape_11.setTransform(468.1,377.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B7CD61").s().p("EgPdAh2IgXgkQgUgigRgnQgchIgLhTQgVicAsjOQAOhEAchfQAih2Auh3QAkhiBMizQBajXAehMQBhj1CAkKIBtjYQAshVBHiBQCQkECMjcQCWjsDIkPQCbjRBjh3QB9iYBvhxQBXhZCTiDQh3CjhIBeQhgB/h6CXQhjB3iZDOQjGENiVDpQiKDaiPEBQhHCAgsBVIhrDWQh/EIhgDyQggBShZDSQhMC0gjBeQgsB1giBzQgbBbgOBDQgrDJABCMQABBTANBCQAJArAMAhIAPAmQAAAHALgGQAKgGAIgHIgPARQgFAEgGAAQgFAAgGgEg");
	this.shape_12.setTransform(542.7,386.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B7CD61").s().p("A0OaPQA6iwA9iVQAkhVAdhAQA1h2A6hkQCzktCOjPQCMjSCtjpICOi8QDgkoEIk4QEelVF1mdQB/iMBwhsQBUhRCTiDQhvCZhOBhQhfB3iACPQmSHBkAEwQkFE3jgElIiNC7QisDoiLDRQiIDHi1ExQg5Bgg0BzQgcA+gkBVQhUDOg2BuQhCCIhXCJQAUg1BQjyg");
	this.shape_13.setTransform(190.3,367.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B7CD61").s().p("AwmZlQAYh+BMizQAwhsBwjhQCBkCB7jjQBujMCGjkIBvi3QCvkjDLk3QCHjOCpj4QCAi6BThzQBjiOBchtQBDhRB6iGQhUCYg7BgQhJB3hlCQQkYGNjpFkQh+C/iJDhIhxC3IhuC3QiHDlhsDIQh4DfiCEEQhvDegxBrQhaDUgaBMQguCFgRCNQgSiZAaiHg");
	this.shape_14.setTransform(244.9,378.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BDCD7A").s().p("EgZ6AgzIAAgBIACgfIAFgtQAOhgAWhLQAtijBpjNQA9h5CikZQDOluCRjbQCgj0DGkEQBkiCBDhSQgFgCCyjOQDRj2DNjUQDTjcEWj/QDIi4CQh5QCjiLCThpQBlhJDDh9QiSCKhyBoQh6BuitCVQicCFi6CrQkVD/jRDZQjMDSjQD0QiuDMADACQhCBRhiCAQjGEEidDxQiNDUjPFxQihEWg+B5QhoDKg9CVQgeBIgcBXIgNAvQAXgSAfgmQgPAcgKAOQgOAWgQAPIgKAKg");
	this.shape_15.setTransform(537.8,361.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8EAE64").s().p("A7nfnQB9kEBJiCQBDiADXkuQDVkrDyk1QDHj/DrkWQB1iJBPhYQBMhaB6iHQDwkQDejsQFxmKIAoFQCriqCSiEQBvhlC8ieQiaC2hpB1QiCCQirCtQoQIXlgF3QliF4kxFiQgBgCjBDjQjpETjIEAQjuEvjWEuQjWEthAB5QixE7gnBAQhsCwiBCPQBUiGBnjUg");
	this.shape_16.setTransform(437.3,321);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8EAE64").s().p("EgYwAjxQAvgHASgyQAPg9APgaIAhhQQAVgwAMghQAYg/AnhsIBJjKQAkh+CUkxQCWk3CskwQCQkAC3kaICWjjQA9haBhiHQDCkTC5jiQDEj2EAkZQDCjVCAh+QCZibCMh2QBkhUC4iMQiFCUhwB2QhuB1inCpQiBCBi+DQQj/EYjCDzQi4DhjAEQQhhCHg8BYIiVDiQi1EZiPD+QisEwiVExQiQEsglB9QhYDthFCFQgSAigZArIguBMQgKANgMAYIgVApQgKAXgXAOQgVAOgXAAIgEgBg");
	this.shape_17.setTransform(245.3,415);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8EAE64").s().p("AwsWQQAbh+A5iaQAnh0BcjGQB1j5B4jFQBti3CKjIQBGhhAug/IB3ifQCSjACKikQDokXFClfQBqh1BhhaQBGhBCAhsQhcCChABSQhPBlhsB3IjiD7Qi8DUiLCmQiICiiRC+Ih2CeQguA+hEBgQiKDHhrC1Qh2DBhyD1QhaDAgoB0IhmEMIhbD1QAOiaAWhqg");
	this.shape_18.setTransform(555.2,398.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8EAE64").s().p("EgKNAgTIgCgKQgHgmgCgoQgJiRAqijQgDBcAJBXIAFgrQAPhTAgkzQAynjAMhkQAaj6A9kWIA3jjQAZhWAriHQBYkPBijmQBkjwCRklQBdi5BbimQBbijBUh/QBBhiBxiYQhMCqg0BsQhCCHhaClQkMHrieGCQhhDjhXELQgrCDgYBXIg2DfQg8ERgaD3Ig9JGQggE0gPBVQgHAygZCDIgNBDIAAABIhCABg");
	this.shape_19.setTransform(403.1,331.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8EAE64").s().p("AsKWJQAVhyAziNQAniMEQorIELoOQgFgDEaoGQEioRBSiFQBIh8BEhhQAzhKBdh0Qg3CGgoBUQgxBqhIB+QhSCHkhIOQkaIFAFACIkJIMQkQIqglCGIhaDzQgwCAggBeQAGiLAThig");
	this.shape_20.setTransform(174.3,347.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8EAE64").s().p("AtmUmIBBj3QAUhDAQgyQAgheAnhNQBTiwB8jeQBcilB0i4QBhiTAAgBIBjiSQB5i0BwiXQB4iiCYjCQBxiOBMhdQBZhuBShTQA+g/BthiQhJB4g1BOQhBBdhbBxQkAE6jKERQhwCXh4CyIhiCSIhfCRQh0C3haCkQh0DMhZC9QglBJgeBZQgQAvgTBCQg0CqgjBMQgzBthSBXQAuhcAhh8g");
	this.shape_21.setTransform(173.8,321.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8EAE64").s().p("As+XcQALh8AjiZQAZh2A8jHQBNj/BTjOQBMjABljTIBWirIBZiqQBwjNBrixQBxi6CXjcQBuihBQhrQBch8BUheQBChJBwhrQhSCIgzBQQhFBphaB7QhUB0hnCWQiXDchvC4QhqCuhvDMIhZCnIhUCpQhkDShLC+QhSDIhMD9Qg5C/gbB6QggCLgiCCIhAD1QgCiYAKhng");
	this.shape_22.setTransform(523.9,359.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8EAE64").s().p("AtXWTQACh5AciYQASh1A4jEQBGj6BWjHQBMi5BqjMQA0hkAkhAQAkhAA7hiQB1jEBximQB3itCijPQBxiQBYhnQBjh0BYhTQBHhDB1hgQhbCBg2BIQhLBihfBxQhaBphtCNQigDNh2CrQhwCjh0DCQg6BhgkA/QgjBAg0BhQhoDKhLC2QhTDDhGD2Qg1C8gUB1IgxEJQgYCAgTByQgQiRAChng");
	this.shape_23.setTransform(507,446.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8EAE64").s().p("AyeU8QAYiAA7ibQAohyBmjIQB+j2CFjAQB5i1CRjAIB7igQAwg+BNheQCci+CRidQCbiqDPi6QCciPBphQQCAhlBwhEQBag2CQhHIjJCsQhqBZh3BeQhnBQiaCLQjMC5iYCoQiTCbiXC7QhNBegwA+QgCgDh3CgQiQC/h4CzQiCC+h8DxQhkDDgnBvQhCCtgkBhQgqB2gsCDQAKidAWhrg");
	this.shape_24.setTransform(193.3,349.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8EAE64").s().p("A2RcaQAFgMAniJIArihQAahlAZhWQA+jgA9i1QB1lUCQjpQCDjqC2jxICajDQA9hMBmhwQDJjfDFi1QDLi/ERjZQCwiNCfh0QCih2CKhVQBrhCCwhgQiVCAhmBRQh8BkihB3QijB4iqCHQkPDZjJC7QjCCzjIDdQhkBug9BKIiXDBQiyDtiCDmQiMDjhyFOQg8Cxg+DfQhADagzB+QgrBpgaApQgxBQhJAlQA9gyAghSg");
	this.shape_25.setTransform(323.8,376);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8EAE64").s().p("A4HWOQA/iBB2ilQArhADKj+QD4k2B1icQCdjKC5jWQCZizACACICfitQDDjQC7irQDHi7ECjFQDLicB8hOQChhpCKhDQBug3CvhDIkBCsQiQBgiMBbQh7BOjICZQj+DEjFC3Qi5CpjBDOIifCsQg9BEhdBsQi3DVibDIQh6Cij0ExQjLD+goA9QiWDRgtBEQhXCBhICHQAvinA/h+g");
	this.shape_26.setTransform(490.3,371.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9ACC57").s().p("A11WrQAyh8BxijQBciFH4pZQD5kkDuj+QgFgFH6oRQH/oTCTiQQB+h/BuhhQBThKCOh0QhvCQhJBWQhfBvh+CAQiXCVn6INQn5IQAEAEQjsD+j5EjQnxJQheCIQiBC5gwBSQhIB8gxCLQARifA2iBg");
	this.shape_27.setTransform(382.8,435);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9ACC57").s().p("A99b0QA9h4AXgjQBTiNCJjDIEQl8QDrlQC9jZQDBjhDzjnIDLi7QBQhICAhrQD/jXDviwQDvizFFjjQCsh4DViRQCyh7CdhhQBphBDPh4QijCMh0BcQiKBsi6CBImAEJQlHDljrCvQjvCxj7DTQiABrhPBHIjJC6QjwDki+DeQi1DQjwFUIkPF7QhmCOiGC2QgJAKhgCCQhABXhAAyQAyg4Azhjg");
	this.shape_28.setTransform(284.8,438.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9ACC57").s().p("EgmyAiQQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAgBAAIgBgHQgFgUgBgJQgHg1AKg9QAPhcA2h0IBkjLQBBiBBChmQBaieDxk2QEUljEUkkQD4kIE3kKQCbiFBohQQBnhTClh4QFHjxE0jAQH9lELSl+QDuh9DJhdQCXhGD+hqQjeCIidBbQi5BqjzCCQrqGOngExQkzC/lEDvQijB3hmBSQhoBQiZCEQk0EHj1EFQkREhkRFgQjvEyhZCbQg5BZhMCHQhQCPghA1QhABsgYBQQgRA7AAAvQgBAMACAPIAGgEQAhgWAQgMQgOAPgdAaIgNAMQgMgDABgBg");
	this.shape_29.setTransform(249.3,282.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9ACC57").s().p("AscbnQADguAAgVQABgnAMhXQAQiBAliZQAsizAniSQBJkUBJjIQBEjIBdjeIBOizQAghHAzhsQBojbBji4QBojDCRjsQBficBUh/QBYiFBShkQA/hNBth2QhKCLgzBZQhABthYCFQkCGPimE2QhjC5hmDXQgzBrgfBFIhOCxQhbDdhEDGQhHDEhJETQgnCQgsCzQgrCtgeBnIgTA7QgMAkgGAZQgFAUgNAqQgJAkAHAdQgPgbAAgog");
	this.shape_30.setTransform(437.1,362.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9ACC57").s().p("EgEKAiGIhKiIQhLiGhBjEQg3iWgtkCQg7lRALkaQADkJA4knQA3jugBAAQAYhdAuiOQBdkaBxjwQBwj3CnkvQBRiSB/jVQBkinBdiFQBBhdB9ilQhPCog/B4QhHCHhnCuQiBDahOCMQilEuhvDyQhvDthbEVQguCMgXBbQABAAg2DpQg3EggDECQgKEUA5FIQAsD7A1CSQBGDVAwB2QAmBeAPA2QAZBVADBQQgThKgohPg");
	this.shape_31.setTransform(491.7,398.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9ACC57").s().p("AsBWYQhIhqggifQgMg5gChMQgEhjANhjQAMhtAph7QAoh3A8hvQBfi0CLi8QB2iTgCgBQgDgDGNnaQFAl9DAjjQBhh0BVhaQBBhEBvhsQhOCFg2BQQhFBmhhB1IoAJgQmMHaADADQACAAh0CRQiIC4hcCtQg5BtglBuQgnBzgLBmQgMBeADBbQACBGALA0QAfCWAtBlQAtBhBWBsQh1hSg/hfg");
	this.shape_32.setTransform(153.8,422);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9ACC57").s().p("EgkPAgPQABhKAjiGQA8jYCNjbQAzhQBOhmQBliDByh8QDajtFwlPQEDjpEyj3QCZh8BkhOQgFgHNSp9QOtq/CWh2QDIidCuiBQByhVDminQi0C1iABzQiaCLjQCkQicB9uoK6QtRJ8AFAGQhkBOiXB7QkzD4j/DmQllFEjgDzQhwB6hjB/QhLBigzBQQiEDLhQDPQgxCOgJA0QgSBxAvBfQhAhZADh7g");
	this.shape_33.setTransform(630.7,352.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9ACC57").s().p("EgicAVtID6laQBRh+D+j6QERkMEcjiQD4jDEpjJQCUhkBig9QgEgDD+iWQEvi0EbiTQHcj5KGkdQDYheC0hDQCKgzDkhJQjNBsiLBEQipBUjaBgQqGEenWD2QkaCSkvCzQj5CUACAEQhhA8iTBkQkmDEj0DFQkaDgkNEHQj6D2hPB5QjED/hIBRQiECVicBuQB2h4B+ivg");
	this.shape_34.setTransform(591.8,395.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9ACC57").s().p("A5DS2QBCiBBqiYQBOh1Cei7QDIjsC+iyQCtimDVitQBqhWBFg2IC0iHQDbijDJiFQFdjqHIkJQCchbCEhBQBlgwCphIQiPBphjBCQh3BQidBcQnYEVlKDcQjICEjZCiIiyCFQhFA2hoBVQjTCriqClQi8CvjFDpQiaC2hOB0QjlFEh7C6QA+ilA2htg");
	this.shape_35.setTransform(484.8,368);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9ACC57").s().p("Am2fMQhUiIhIi8Qg9iRgukFQg7lRAZkbQAQkJBGkjQAWhZAZhSIAThAQAchcA1iLQBqkVB8jqQB/j2C6kdQCHjLBqiIQB5ieBsh0QBYhdCQiBIi8EEQhjCHhwCTQhsCNiBDDQi5Eah8DyQh7DnhoEQQg0CIgbBbQABAAhCDlQhFEdgOECQgYESA5FHQAsD8A7CNQBGC7A+CJQA4B7BXCjQh8iThFhwg");
	this.shape_36.setTransform(336.4,290.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9ACC57").s().p("AxbZrQABiQAgi3QAViLBIjrQBbkpBzjpQBmjZCPjqQB4i+gBAAQAwhJBOhwQCejgCWi6QCfjEDTjpQCRifB1h2QB+iBBvhgQBXhJCRhuQhzCKhNBWQhfBsh+CCQiACDiECRQjTDoicDBQiVC5icDcQhNBvgwBIQABABh2C6QiNDohkDWQhxDlhZEjQhGDkgVCIQgiC/gTB+QgTCEgPChQgYitABh8g");
	this.shape_37.setTransform(329.1,377);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9ACC57").s().p("EgjOAmAQgIgWgCgmQgBgaADggIAHg4QAPhdAmh6QA+jGB7kNQBfjQChk8QBqjZBWicQB5jbByijQDPkyEdk0QCOiZBkhcQBgheCfiIQE7kQExjSQEyjaGnj5QCEhOF3jSIGyj0QAugaCShNQA6ggAggfQAGgEANgQIAHgIIgDgBQgLgDgRAEIgeAHIAdgMQAQgGAOABIAJAAQAFABAAAMIgIANQgJAPgIAJQgdAmg4ApIi0B8QizB6j3CNQmKDehvBBQmkD4kwDZQkwDQk2EMQidCGhfBdQhiBbiNCXQkZEujLEvQhyCkh1DTQhUCZhrDbQibEvhkDaQiNExg9CUQg3CIgTBDQgVBIgDAkQgDAlADAUQAGAgAYAQQgagMgMgig");
	this.shape_38.setTransform(369.5,354.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,862.8,644);


(lib.fishShadow_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhKDeQgugpgLgEQgUgIhzgPQhygPgSgHQhMgbgrgSQhMgggMgZIACgJQACgEAGACQBAAUgQgIIglgPQgBgYA1gbIBYgrQCIg2AFgBIBNgPQAwgJAEgFIBVhfQABAcA9AqQAbAUAfAQIgqAQQAhAJDCA7QBqAhAvgBQAtAAAXgNQALgHAfggQAOgOAtggQAvghAHAAIACABQgVBRgjAsQgcAkAAAFIAqA+QAtBAAJAZIAAADQgBACgGAAQgVAAgZgQIgxgiQhIgyhHAAIgMACIgGABQAHAFACAFQhKAjgoAkIgeAbQgJAAgZgOQgXgOgKAAQgeAIgoAJQhPARg8ADQAWADAGADQAFADABAIQABAeAeAiQgegBgpgjg");
	this.shape.setTransform(60.7,25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.3,51.8);


(lib.bubbleshinecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnjHkQjJjJAAkbQAAkbDJjIQBfhfB6g0QCAg2CKAAQEbAADJDJQDJDIAAEbQAAEcjJDIQjIDJkcAAQkbAAjIjJg");
	this.shape.setTransform(68.6,68.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.2,137.2);


(lib.bubbleoutlinecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABrCMQgdgdgwhDQgwhDgcgdQgvgyg2gZIg8hQQCjgHCAB7QCHB9gLCuQg2gUgvgwg");
	this.shape.setTransform(20.9,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.8,41.8);


(lib.dirt04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996633").s().p("Ag1BQQgRgGgBg/QgCgqAEgoQAHgMAZAAQAYgBAcAKQAcAJAQAfQAQAegDAlQgCAig1AMQgTAFgVAAQgUAAgKgEg");
	this.shape.setTransform(7.3,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.7,16.9);


(lib.dirt03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996633").s().p("Ag0DnQgmgGgvgOIghgKQAAgvADhHQAFiRArhVQBahDAhgNQBIgZA1BBQA1BDgOBmQgJA8gyCBQgZBAhXAAQgWAAgbgEgAiqDJIAAAAIAAAAg");
	this.shape.setTransform(5.4,7.5,0.319,0.319);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.9,15);


(lib.dirt02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996633").s().p("AhUBdQgxgigLgtQgKgkAkgQIAegKQAQgEAFgGQAEgFADgJIACgPQAFgTAYgPQAPgCAdAJQAdAIAeAOQBJAhAAAbQAAANgQAZQgQAYgYAbIgHAIIgKAJQgRAQgQAMQgaATgQABIgGAAQgkAAgpgdg");
	this.shape.setTransform(14.7,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.5,24.6);


(lib.dirt01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AhBA6QgIgEAAgXQAAgUAFgRIALgQQAHgLAGgGQAUgVAZAAQAigBATAQQAWARgCAjQgDAkhAANQgVAFgYAAIgJAAQgNAAgFgDg");
	this.shape.setTransform(7.5,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,12.3);


(lib.dirtlg_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996633").s().p("EiHdDNgQgKgvgEgXQgGgmAAghQAAhPAig5IAPgaQAGgPgFgNQAIABAHgHQAGgGABgHQAeADBEAFIAOACQAHABAFAFQAHAFAFAXQAOBmgBA8QgBBZgcBBQg2gDh2gHgEBzvDCIQgpgYgJhWQgvAKg5gNQgQgrAAg8QAAgkAIhHQAOgDAEgPQBAAAARABQAtADAiAIQAkAMAQAJQAZAMAJANQAKALADARQADAJACAVQAKBfgMBVQgEApgWAHQgGAEgOABIgXABQggAAgRgJgEgH7CwsQgEAtgQAUQgKAPgRAGQgTAGgOgJQgbhjAHhuIgeAAQAMBDgeBIIg0gKQgQhDgEgjQgGg6AMguQALgrAcgkQAcgmAngVQAegDASACQAaAEAOAPQAPASgBAsQgBAwAJAQQBAAZAeARQAyAcAYAmQAcAsgBA+QgDA1gYA4QhGhQhkgugEhiVCgoIhEgFIhEgDQgdhrANh6QAEgZAEgLQAFgVAJgPQAKgTAkggIAogkQAggLAwAYQAOAJAUAPIAiAZIAjATQAWALALAKQAVASAMAdQALAbACAdQADAxgZA/Qg3gMgrggQAGAVgNAbQgIAPgVAbQgPAXgPAHQgGADgKAAIgQAAgECBPCRzQgOgOgGgRQgMgbAAgtQgDgaADgaQAGgdAWgdQANgSAfgfQAcgcAQgNQAagWAYgKIAhgNQASgJAJgNQAOAGAUAAIAigBQAtAAARAVQAGAKADANIADAXQACAoAAAVQgBAggHAZQgIAegRAXQgTAZgaAKIgSAIIgUAEQhsAZhSBJQgSgEgOgOgEirFCQPQgTg/gBhCQABhEATg/QAsgCBaAAQAYAAAKAFQAOAFASAVQAUAXAMAHQAHAEAeAJQAYAIAJANQAIAMAAAdIAABCQAAAVgCAKQgEAPgKAGQgKAIgaAAgEh5DB8RQgKAAgYgDIgegPQgkgQg+gIQgVhCAJhIQAEgZAMgOQAKgMAlgMQAggMAJgRQCIAEBIAEQAcAAAIAKQAHAGADALQACAFACAPQAGAxAAAbQgBArgNAhQgIAVgUAaQgNASgLAFQgIACgSgBgEA41B69QgSABgIgFIgLgIIgLgHQgHgFgUgEQgSgFgHgHQgIgIgEgRQgbh3Ahh0QAOAFAJALQAJAMAAAOQAjgWAZgbQASgCAQALQAQAKAGASQACAEACAKIAEAPQAGARAZAVQAcAYAHANQAHAMACASIABAgIAAA7QAAAVgIAKQgMAQgkAAQguAAgYgCgEC+AB5MQgVgFgIABIgMg/QgEgUAAgHQAAgHADgLIADgQIACgVQABgNADgJQAFgSAXgUIAwgvQAIgJAEABQAIgBAIAJQAJANABAYIACAoIAEARQACAKAAAFQAAANgEATIgEAdQgCAQgGAKQgEAHgLAMIgRATIgGALQgDAGgFAEQgFAEgHAAQgHAAgIgDgEgxnB4FQgFgEgfgiQgVgZgTgGQgKgGgmgGQgegFgOgOQgOgOgEghQgKhLAig/QAkACAtAMQAdAIAyARIAZAKQANAHAIAIQAKAIAFANQAEAMgFAMQCCADB+gwQAegNARgNQAZgRAMgVQAmBggUBeQgDAZgNAOQgNAPgZALQhcAthsAQQgbADgYAAQhGAAgpgigEgEJB1eIgahhQhGAAgkgCQgJAdgLAYQgLgHgFgPQgDgHgFgUQgShpAihqQABgDADgDIAGgEICeAFQAPAAAHACQAMACAIAGQASALAEArQAOCNgQCgQgCAXgIAQQgLAVgRACgEBXbBcdQg9gEgvgHQhWgMhagnQhLgdgZgxQgQgdAAgrQgGhFAMhFIAGgSQADgKAHgGQAIgHAOgDQAJgBARAAQCQgBBIAJQBPAKBhAYQAlAHARALQAvAdALBUQAGBDgOA4QgQA/gqAmIhsgCgEiyLBTsQAAgfAKgUQAFgMAMgPIAVgZQAzgyAxhMQAagkAOgkQATgxgDhDIAYgKQAsCPgcCbQgIAmgSAOQgHAFgRAGQgQAFgIAHQgGAFgFAMIgJATQgSAlgkAkQgYAXgwAjQgggfAIhSgEDJRBPhQhIgMgkgHQgQgtAAg7QAAgkAIhHQAIgBAFgFQAFgGAAgIQBGAECMAEIAQADQAJACAFADQASAJAEAlQAEBKgEAmQgEA0gcAFQgUgNgKgIQgIATgHAgIgLA0QgTBAgrANQgehBAQhLgEiCJBMPQAAhPAWhIQALAEAIAMQAIAKABANIABAaIABAaQABAKAFARQAFAQABAKQAAAOgFAXQgGAagBAKIgBAaIgBAZQgIAegWAGQgVhMABhNgEg9rBDVQghhmAVhsIgmAAQgFALgPAnQgMgHgGgQQgEgLgEgWQgIg4AEgcQADglATgiQASgjAegYQAvADA8AOIBpAeQAWADAMAMQAKANAEAaQAVCbgbCZQgEAWgIAFQgIAEgSAAQh8gIg+gCgEA4PA+/QgeAAgSgDQgagFgQgOQgUgRgGghQgEgUAAgnIAEhQQADgIAJAAQAIgCAIADIAOAIIAOAIIAWAEQBQAIAoAGQAMAAAGAEQAYAKAAAyIAABAQAAAagGAKQgNAUgrAAgEiB1A2NQgPgoAAgrQAAgsAPgnIANgfQAHgUAEgPQAIgiAFgQQAJgfASgLIASgLQAJgHgBgIQAJADAnADQAdACANAMQAKAOAAAjIAABAQAAAegIAOQgJAOgcALQgiAMgJAJQgWARgHAwQgKA3gNARQgQgEgigGgEAHKAqaQgigGgNABIgLg3QgHggACgZQAGgmAAgTIABgSQABgMACgGQACgLAJgKIARgSQAkggAQgQQAGgDAMgNIAcAAQARAAALACQAfALAJAXQAEAJACARQACAIAGAIIAMAOQATAgABAsQAAAfgKAyQgEASgGAFQgHALgTAAQgOADgcAFQgXAEgHADIgYAOQgIAEgNAAQgKAAgOgDgEBx9AftQgKglgDgUQgGghADgaIAEgdQADgTgBgMIAAgSQAAgLAEgHQAEgFAKgFQAKgGAEgEQAHgIADgZQACgYAKgIIAGgNIB+AGIAYADQAMADAGAHQAIAKAEAXIAHA9QADAigCAaIgDAkQgDAVAAAPQgDAcgBAIQgGATgOAHQgGADgSAAgEDJZAcuIh0gIQgih2AYh0QAEgTAKgHIAGgGQABAAAAgBQAAgBAAgBQAAAAAAgBQAAAAgBAAQAQADA0ABQArAAAXAMQANAKAPAFQAHADAoAHQAdAGAMAPQAKALAAAkIAABAQAAARgCAIQgCANgIAGQgJALgTABQgJABgZgDQgTgBgOAGQgSAGgDAPIgCALQgCAHgCACQgFAFgIAAIgHAAgEA/HAWNQgJg+ADg7Ii0gfQgehlAWhtIASgKQALAUAvAFIC+ALIAPADQAIABAFADQAPAHAFAUQAEALACAaQAAAogBAOQgEAfgNAVQgGAIgPAQQgPARgGAIQgPAYgGA3QgGA4gPAYQgUgMgEglgEgnIAICQghgGgMABQgGhQgchNIgMgkQgHgWgBgRQAAgIAGgoQAEgggEgUQAIAAAGgEQAGgGAAgIICEAHIAVACQAKADAHAGQAIAKACAPIAAAbQAAANADAUIAFAfQAFAtgLBBQgHAggDAOQgIAZgMAQQgUATgOAEQgJADgMAAQgKAAgOgCgEhYjgALQgPgqABguQAAgvAQgrQACgDAGgHQDAAEBiAEQAWAAAKAIQASAMAAAnQAAApACAXQAAAXgGAKQgIAQgVAHQgQADgZAAQi4AAhcgCgEipbgFaIAHgZQAFgOAIgHQAMgMAdgIQAfgJAMgKQAOAQAFAYQADARAAAcQAAAygIAXQgPAmgrAhIgJAIQgDAEgCAEQgCADgBAHIABAKQgDAbgbAKQgghvAShqgAqykhQhKgFgXAFQgOghgBg0IABhaIgEhuQgEhDAGgsQAIg/AcgcIAogdQAZgRAHgSQANAGATAAIAigDQAvAAAPAYQADAFAEAJIAFAOQAGANAMAPIAWAaQAqA3AFBJQAFBIggA+QgKASgXAjQgXAhgKATIgRAfQgLASgMAIQgYATgtAAIgUgBgECzlgMrQgZhHAPhJQAEgWAIgJQAJgLAXgIQAbgJAJgGQgDgVAIgRQAKgUARgIIANgLQAGgHgBgGQAGAAAEABIAAgKQAOgBANAGQANAGAIALQAKAOAEAhQAIBLgEAmIgDAgQgDATAAANQAAAYgBAGQgDAQgKAIQgKAKgcAAQhcAAgugCgECOtgS5QgRhAgDhMQg0AAgwASQgbhcAThkQACgNACgFQAEgJAIgFQAFgEAHAAIAOAAQAxAGAxAMIAciEQAQAGAIAUQAGANAEAZIAEArQABAagBARIgCBSQAAAPADAeQADAeAAAPQAABFgeBTQgmgIgOgCgEhMFgj0Qgqi7Aoi/QAOACAJAMQAKAMgBANQANgGATgBIAggBICmAHIAYADQAaALAEAtQANBLgPBDQgVBNg1AnQguAfhEADIgNAAQgtAAhCgLgEB3OguxQgUgQgFgQQgCgHAAgOQABgSgBgHQAAgHgEgPQgEgOAAgIQgDgVAHgaQAEgWAMgxQAgASAUAkQASAgAEA/QAAATgCALQgDAsgVAnIghgWgEgKWg2dQgQgXgngqIjmgUQgPgtAAgtQAAgvARgpQAEgFAEgIQCAAFA+ADQAeABAOAFQANAEAOAMIAXAUIAYAcQAPAQAHAOQAPAdADAzQADA8gJA3QgIAogWAHQgKgkgbgmgEidVg5CQgWhHABhdQABg4AMhvQAHgBAGgGQAFgFAAgHQAUgCASAPQAPAOAHAUQAFATgCAYIgFAnQAkgQAZggQAZggAGgnQByAAA6gCQAdAAAPAKQAIAGAEANQACAGACAQQAMBRgcBRQgbBPg7A8IkigKgEC8thEfQAEgbAAgRQAAgLgEgdQAAgjAKgkQACgHAEgEQAFgGADAFQACgHAAgDIDQAHQAXAAANALQAQALAAAmIAABAQAAAbgGALQgKAVgiAIIgcAEIgcADQgSADgVALIgnASQg0AXgiAKQgQg8AAghgEA2mhDjIgFAAQgPACgLgEIgGAAIhUgGIgDgMIgGgNQgFgMgCgUQgJhVAHhfQAEgyAGgZQASgqAGgWQAFgQAGguQAEgoAJgVQAJABAHAGQAHAGADAJQADAIABAOIAAAGIASgWQASAIAzgCQAsgBAPASQAIAIAEAOQACAIACAQQAOB8gLBbIgBAKQACAqgGAyQgEAhgQAIQgEADgKABQgNAagPAYIgvgCgEA3NhHtIACgCIgCAAIAAACgEgZZhRVIgqgGQgdhUAThgQgagCgXARQgXAQgGAaIgBAYQgBARgCAIQgCANgHAKQgJAKgMACQgShVAAgzQgBhNAdg2IASgeQAIgTgEgPQARgDADgRIBJADQAqACAfAFQAkAIAaAMQAdARALAQQAOAUAEArQAGBdgKBHQgFAjgJALQgGAKgNAKIgVAOQgkAUgSAFQgMACgPAAIgPgBgEhiFhVCIhGgIQgIgVgMgoQgeAUgeAAQgWhKAIg0QAFghAQgaQARgeAcgOQAIgFAYgIQAUgHAKgGQATgMALgZQAJgQAHggQANgEAJAWQAOAuAAAiQABAUgBAfIgCA0IACAiQABAWgBANQgBASgFAbIgIAtQAAATgKAHQgEADgGAAIgMAAgECJPhcjIiqgIQgKgegKgTQgKADgKAHQgThVgBg1QgBhMAdg1IASgeQAIgTgEgPQAIgBAGgGQAGgFAAgIQCMAFBGAEQAWgBAIAHQASALAEAmQAIBRAAAsQACA3gHAnQgJAzgaAjQgOAUgSAGQgIAEgLAAIgTgBgEgr4hupIAAgBIgBgNQAAgaAGgfQAFgpALgnQANACAIAMQADAFACAFIACAEQACAIABANIAAAQIABAZIADANIACAHQAEALABAIIAAAIIAAAHQABANgEAXQgHAbAAAJIgBAaIgBAXQgEAOgGAKQgJALgLABQgVhJAAhNgEBZxhx5IgigDQgVgEgLgIQgUgNgKgcQgIgTgEghQgHhBAJgrQANg7AvgaQANgIA2gMQAqgKARgVICgAGQAbAAAPAMQAIAHAEAMQACAGACAQQAMBKgGBLQAAAngMAdQgHAWgPAXQgLAPgVAWgEiL1h5cQAAgSgigFQhUgLgqgFQgqiUAqhyQASAIAJARQAHASgEATQAfAEBVAMQARAAALAJQAMAJADAVQABAIAAAdIAGAqQAAAbgIAsQgIAigSAAIgCAAgEgBSh6EQgTgCgOgJQgqgXgEhEQgBgSADgkQADglgBgRQAIgBAGgFQAGgGAAgIQAKADAeACQAaACAMAGQAFADAJAFIAMAIQAGADAJABIAPADQAmABBGAJQAnAEALAPQAGALAAAYQAAAtACAZQAAAsgWAMQgIADgSAAQg2AChqAAQgYAAgNgBgEjKViCNQgbhSAHhfQgtgJgPgTQgOgSAAgaQgGgmAGglQACgQACgIQAEgOAIgKQALgOAegKQAkgLALgJQALAGAFAVQAGAbAEAHQAGANAaANIBmA0QAgARAIALQAaAcgEBAQAAAYgCAMQgDAUgLALQgPATgpAIQgtAKgPAKQgKAFgMAPQgQARgGAEQgNAMgRABIgCAAQgQAAgIgLgEhJAiHqQhYgLgbAFQgNgogFg1QgCgXgChJQAAhMABgVQADg4AKgpQAIgfAVg/QAPg4gGgoQAIAAAFgEQAGgGABgIQA1gFBTATQBuAaAaACQAUADAIACQARADAJAJQAMAOAEAgQALBwgDBIQgGBlgiBMIgQAcQgKAOgKAJQgIAFgPAHQgSAJgHAFQgLAGgPAOQgSAPgIAEQgbARgtAAQgRAAgUgCgEhF7iMuIACAWIAagjIgfgJIADAWgEhIdiNvIABASIA3gEIAIAAIgKgDQgfgLgSAAIgFAAgEA93iHsQgTgHgHADQghhlAdhrQAGgXAKgcQAMgnAMhVQAOAEAKALQAKANAAAOQAkgXAYgdQATAuADA+QACAmgEBJQAAAngIAhQgEAVgMAKQgIAHgYAEQgVAFgHAKQgCAFgDAWQgCASgJAGQgDABgFAAQgHAAgJgDgEAHriNaQgMhBgEggQgFgSgDgHQgFgNgLgGQgBAUgLARQgKAQgQAJQgfhdANhyIAHgeQAGgRAJgJQAMgMAdgIQAggJALgKQALAQAZAHIAsALQAgAHA8AbIASAMQAKAGAGAHQAKALAGATQACAKACAYQAGBfgKBNQgCARgDAIQgEAOgLAGQgKAJgcAAQh0AAg6gCgEiVdivZQAAgiAIhCQAAgOAGgKQAKgKASgDIBqgZQALASApAFQA2AFAaAFIANACQAHACAEAEQAKAEAHAMQAFALAAAMIABAZIgBAVIABAZIgBAXQAAANgFAKQgHALgKAHQgJAFgPABQhAAGh8AOQguADgeANQgQgoAAg3gEB+7ivtQgigHgUgUQgQgQgIgcQgEgPgEgkQgOibAehuQAWAFAIAdQADAJAAAOIgBAZQADAtAZAjQAJgqADgrQAAgnAUgEQAPgCAOAHQAOAHAHANQAFAIADAMIACAVQAKBigBAyQgDBUgaA7QgoABgWgFgEArVi37IgOg7QgGgjAEgaIAEgbQACgPAAgMIgBgVQAAgNAFgIQAHgJAOgDQAIgBATAAQAaAAAOABQAOABAGgHQAGgGAAgJIAMgzQAKACAIAJQAHAJADANIABAVIgBAXQABALAHAbQAGAYAAANQAAANgGAYQgHAZgBAMIABATIgBATQAAAXgSAJQgIAEgSAAgEhuQjG5QgqgEgLADQgNg9gEgaQgHgxAGgnQAEgdAPgtQATg5AEgQIAKgkQAFgSALgKIAYgVQAPgMADgMQAKAFAnACQAcAAALAPQAKANAAAaIAEBkIABAsIgBApQgEAhgIANQgQAeg4ARIABArQgBAagMANQgLALgXAAIgLAAg");
	this.shape.setTransform(1304.8,1316.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2609.5,2632.4);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0.075)","rgba(255,255,255,0)"],[0,0.965,1],81.8,-90.5,-79.3,90.6).s().p("ALUI4IgfhpIH9AyQijhxjfiJQm9kRkrh8QkDhtpJjAQpjjKiLgRQHqApJxC1QKiDEGUDwQC1BuGmEHIjOmoIBTggIFzLeg");
	this.shape.setTransform(152.3,65.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.6,131.1);


(lib.ShowAnatomy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_3();
	this.instance.setTransform(90.5,62,1,1,0,0,0,62,62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBsIAAhaIgth9IAmAAIAYBSIABAAIAYhSIAmAAIgtB9IAABag");
	this.shape.setTransform(168.2,163.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqBsIAAioIAAAAIgiCoIgQAAIghioIAAAAIAACoIghAAIAAjXIAxAAIAZB9IAAAAIAah9IAxAAIAADXg");
	this.shape_1.setTransform(152.4,163.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpBfQgOgPgBgYIAAhuQABgZAOgOQAPgRAaAAQAbAAAPARQAPAOAAAZIAABuQAAAYgPAPQgPAQgbAAQgaAAgPgQgAgOhHQgEAFgBANIAABsQABAMAEAGQAFAGAJAAQAKAAAFgGQAFgGAAgMIAAhsQAAgNgFgFQgFgGgKAAQgJAAgFAGg");
	this.shape_2.setTransform(135.7,163.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBsIAAi2IgkAAIAAghIBrAAIAAAhIgkAAIAAC2g");
	this.shape_3.setTransform(122.4,163.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBsIgIgwIgmAAIgGAwIgkAAIAnjXIAsAAIApDXgAgOAbIAdAAIgPhaIAAAAg");
	this.shape_4.setTransform(111,163.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBsIguiGIAAAAIAACGIgiAAIAAjXIAiAAIAsB6IAAAAIAAh6IAhAAIAADXg");
	this.shape_5.setTransform(96.8,163.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbBsIgHgwIgnAAIgGAwIgkAAIAnjXIAsAAIApDXgAgOAbIAdAAIgPhaIAAAAg");
	this.shape_6.setTransform(82.7,163.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcBsIgbiOIgBAAIgXCOIggAAIgojXIAiAAIAXCIIAAAAIAZiIIAcAAIAZCIIABAAIAViIIAiAAIgmDXg");
	this.shape_7.setTransform(59.1,163.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBfQgOgPgBgYIAAhuQABgZAOgOQAOgRAbAAQAcAAAOARQAOAOABAZIAABuQgBAYgOAPQgOAQgcAAQgbAAgOgQgAgOhHQgFAFAAANIAABsQAAAMAFAGQAFAGAJAAQAKAAAFgGQAEgGAAgMIAAhsQAAgNgEgFQgFgGgKAAQgJAAgFAGg");
	this.shape_8.setTransform(41.9,163.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATBsIAAhgIglAAIAABgIglAAIAAjXIAlAAIAABZIAlAAIAAhZIAlAAIAADXg");
	this.shape_9.setTransform(26.9,163.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBdQgPgRgBgZIAkgFQACAhASAAQAVAAAAgUQAAgTgjggQgmgeAAgiQAAgaAPgOQAPgOAZAAQAWAAAOAPQAOAOACAYIgjAEQgCgYgSAAQgRAAAAAVQAAAQAkAhQAmAfAAAgQAAAagRAPQgPAOgZAAQgZAAgPgSg");
	this.shape_10.setTransform(12.6,163.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.9,0,167.7,174.3);


(lib.OpenMussel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_4();
	this.instance.setTransform(84.3,62,1,1,0,0,0,62,62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBsIAAjXIAlAAIAAC3IA5AAIAAAgg");
	this.shape.setTransform(157.3,163.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBsIAAjXIBhAAIAAAhIg8AAIAAA4IAuAAIAAAeIguAAIAABAIBAAAIAAAgg");
	this.shape_1.setTransform(144.6,163.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoBdQgPgRgBgZIAkgFQACAhASAAQAVAAAAgUQAAgTgjggQgmgeAAgiQAAgaAPgOQAPgOAZAAQAWAAAOAPQAOAOACAYIgjAEQgCgYgSAAQgRAAAAAVQAAAQAkAhQAmAfAAAgQAAAagRAPQgPAOgZAAQgZAAgPgSg");
	this.shape_2.setTransform(130.8,163.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoBdQgPgRgBgZIAjgFQADAhASAAQAVAAAAgUQAAgTgjggQgmgeAAgiQAAgaAPgOQAPgOAZAAQAXAAANAPQANAOADAYIgkAEQgCgYgRAAQgRAAAAAVQAAAQAkAhQAmAfAAAgQAAAagRAPQgPAOgZAAQgZAAgPgSg");
	this.shape_3.setTransform(117.5,163.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBfQgPgPgBgcIAAigIAlAAIAAChQABAYASAAQATAAAAgYIAAihIAmAAIAACgQgBAcgPAPQgPAOgaAAQgaAAgOgOg");
	this.shape_4.setTransform(103.5,163.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBsIAAioIgBAAIghCoIgQAAIgiioIgBAAIAACoIggAAIAAjXIAxAAIAZB9IAAAAIAbh9IAwAAIAADXg");
	this.shape_5.setTransform(86.8,163.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYBsIgtiGIgBAAIAACGIghAAIAAjXIAiAAIAsB6IAAAAIAAh6IAhAAIAADXg");
	this.shape_6.setTransform(56.8,163.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyBsIAAjXIBhAAIAAAhIg8AAIAAA4IAuAAIAAAeIguAAIAABAIBAAAIAAAgg");
	this.shape_7.setTransform(43,163.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7BsIAAjXIA1AAQAhAAAQAPQARAPAAAiQAAAigRAOQgQAOghAAIgQAAIAABZgAgWgJIAPAAQAQAAAHgIQAGgGAAgUQAAgTgGgHQgHgHgQAAIgPAAg");
	this.shape_8.setTransform(28.8,163.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqBfQgNgPAAgYIAAhuQAAgZANgOQAPgRAbAAQAcAAAPARQANAOAAAZIAABuQAAAYgNAPQgPAQgcAAQgbAAgPgQgAgOhHQgFAFABANIAABsQgBAMAFAGQAEAGAKAAQALAAAEgGQAEgGAAgMIAAhsQAAgNgEgFQgEgGgLAAQgKAAgEAGg");
	this.shape_9.setTransform(13.5,163.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.8,0,154.3,174.3);


(lib.HideAnatomy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjhFJIFqq/IBZAtIlqLAgAjGFAIA2AcIFXqcIg2gcg");
	this.shape.setTransform(84.1,64.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9FDAE7").s().p("AjTFFIFgqtIBHAkIlgKtg");
	this.shape_1.setTransform(84.1,64.9);

	this.instance = new lib.Group_1();
	this.instance.setTransform(84.6,62,1,1,0,0,0,62,62);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBsIAAhaIgth9IAmAAIAYBSIAAAAIAZhSIAmAAIgtB9IAABag");
	this.shape_2.setTransform(156.5,163.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBsIAAioIAAAAIgiCoIgQAAIghioIgBAAIAACoIggAAIAAjXIAwAAIAaB9IAAAAIAah9IAxAAIAADXg");
	this.shape_3.setTransform(140.7,163.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpBfQgOgPgBgYIAAhuQABgZAOgOQAPgRAaAAQAbAAAPARQAPAOAAAZIAABuQAAAYgPAPQgPAQgbAAQgaAAgPgQgAgOhHQgEAFgBANIAABsQABAMAEAGQAFAGAJAAQAKAAAFgGQAEgGAAgMIAAhsQAAgNgEgFQgFgGgKAAQgJAAgFAGg");
	this.shape_4.setTransform(124.1,163.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRBsIAAi2IgkAAIAAghIBrAAIAAAhIgkAAIAAC2g");
	this.shape_5.setTransform(110.7,163.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBsIgGgwIgnAAIgHAwIgkAAIApjXIAsAAIAnDXgAgNAbIAcAAIgPhaIAAAAg");
	this.shape_6.setTransform(99.3,163.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBsIgtiGIgBAAIAACGIghAAIAAjXIAiAAIAsB6IAAAAIAAh6IAhAAIAADXg");
	this.shape_7.setTransform(85.2,163.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbBsIgHgwIgnAAIgGAwIgkAAIAnjXIAsAAIApDXgAgOAbIAdAAIgPhaIAAAAg");
	this.shape_8.setTransform(71,163.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBsIAAjXIBhAAIAAAhIg8AAIAAA4IAuAAIAAAeIguAAIAABAIBAAAIAAAgg");
	this.shape_9.setTransform(51.4,163.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4BsIAAjXIA4AAQA4AAABBBIAABVQgBBBg4AAgAgSBNIANAAQANAAAFgHQAGgGABgRIAAhdQgBgRgGgHQgFgGgNAAIgNAAg");
	this.shape_10.setTransform(36.9,163.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBsIAAjXIAjAAIAADXg");
	this.shape_11.setTransform(25.2,163.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATBsIAAhgIglAAIAABgIglAAIAAjXIAlAAIAABZIAlAAIAAhZIAlAAIAADXg");
	this.shape_12.setTransform(13.5,163.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.8,0,155.1,174.3);


(lib.Filtration = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_2();
	this.instance.setTransform(66.9,62,1,1,0,0,0,62,62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBsIguiGIAAAAIAACGIghAAIAAjXIAiAAIArB6IABAAIAAh6IAhAAIAADXg");
	this.shape.setTransform(120.2,163.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBfQgOgPABgYIAAhuQgBgZAOgOQAQgRAaAAQAbAAAQARQAOAOAAAZIAABuQAAAYgOAPQgQAQgbAAQgaAAgQgQgAgOhHQgEAFgBANIAABsQABAMAEAGQAEAGAKAAQALAAAEgGQAFgGgBgMIAAhsQABgNgFgFQgEgGgLAAQgKAAgEAGg");
	this.shape_1.setTransform(105.2,163.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBsIAAjXIAjAAIAADXg");
	this.shape_2.setTransform(93.5,163.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBsIAAi2IgkAAIAAghIBrAAIAAAhIgkAAIAAC2g");
	this.shape_3.setTransform(83.5,163.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaBsIgGgwIgnAAIgHAwIgkAAIAojXIAtAAIAnDXgAgOAbIAdAAIgPhaIAAAAg");
	this.shape_4.setTransform(72.2,163.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWBsIgZhaIgTABIAABZIglAAIAAjXIA0AAQAeAAAPAPQAQAPAAAiQAAArgaAJIAgBjgAgWgJIANAAQAOAAAGgIQAGgHAAgTQAAgTgGgHQgGgHgOAAIgNAAg");
	this.shape_5.setTransform(58.3,163.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRBsIAAi2IgkAAIAAghIBrAAIAAAhIgkAAIAAC2g");
	this.shape_6.setTransform(44.6,163.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBsIAAjXIAlAAIAAC3IA4AAIAAAgg");
	this.shape_7.setTransform(34.1,163.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBsIAAjXIAjAAIAADXg");
	this.shape_8.setTransform(23.5,163.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzBsIAAjXIBnAAIAAAhIhBAAIAAA4IAwAAIAAAeIgwAAIAABgg");
	this.shape_9.setTransform(13,163.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.9,0,124,174.3);


(lib.CloseMussel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_6();
	this.instance.setTransform(86.1,62,1,1,0,0,0,62,62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBsIAAjXIAlAAIAAC3IA4AAIAAAgg");
	this.shape.setTransform(160.7,163.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBsIAAjXIBhAAIAAAhIg8AAIAAA4IAuAAIAAAeIguAAIAABAIBAAAIAAAgg");
	this.shape_1.setTransform(147.9,163.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoBdQgPgRgBgZIAkgFQACAhASAAQAKAAAGgFQAGgGAAgJQAAgTgkggQgmgeAAgiQAAgaAPgOQAPgOAaAAQAWAAANAPQAOAOACAYIgjAEQgCgYgSAAQgRAAAAAVQAAAQAkAhQAmAfAAAgQAAAagRAPQgPAOgZAAQgZAAgPgSg");
	this.shape_2.setTransform(134.2,163.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoBdQgPgRgBgZIAkgFQACAhASAAQAVAAAAgUQAAgTgjggQgmgeAAgiQAAgaAPgOQAPgOAZAAQAXAAANAPQANAOADAYIgjAEQgCgYgSAAQgRAAAAAVQAAAQAkAhQAmAfAAAgQAAAagRAPQgPAOgZAAQgZAAgPgSg");
	this.shape_3.setTransform(120.9,163.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBfQgPgPgBgcIAAigIAlAAIAAChQABAYASAAQAUAAAAgYIAAihIAlAAIAACgQAAAcgQAPQgPAOgaAAQgaAAgOgOg");
	this.shape_4.setTransform(106.8,163.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBsIAAioIgBAAIgiCoIgQAAIghioIgBAAIAACoIggAAIAAjXIAxAAIAZB9IAAAAIAah9IAxAAIAADXg");
	this.shape_5.setTransform(90.1,163.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzBsIAAjXIBiAAIAAAhIg8AAIAAA4IAuAAIAAAeIguAAIAABAIBBAAIAAAgg");
	this.shape_6.setTransform(68,163.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBdQgPgRgBgZIAkgFQACAhASAAQAKAAAFgFQAHgGAAgJQAAgTgkggQgmgeAAgiQAAgaAPgOQAPgOAaAAQAWAAANAPQANAOADAYIgjAEQgCgYgSAAQgRAAAAAVQAAAQAkAhQAmAfAAAgQAAAagRAPQgPAOgZAAQgZAAgPgSg");
	this.shape_7.setTransform(54.3,163.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBfQgOgPgBgYIAAhuQABgZAOgOQAPgRAaAAQAbAAAPARQAPAOAAAZIAABuQAAAYgPAPQgPAQgbAAQgaAAgPgQgAgOhHQgEAFgBANIAABsQABAMAEAGQAFAGAJAAQAKAAAFgGQAEgGAAgMIAAhsQAAgNgEgFQgFgGgKAAQgJAAgFAGg");
	this.shape_8.setTransform(40.2,163.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguBsIAAjXIAlAAIAAC3IA4AAIAAAgg");
	this.shape_9.setTransform(27.4,163.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpBfQgOgPAAgYIAAhuQAAgZAOgOQAPgRAaAAQAbAAAPASQAOAQAAAaIAAAQIgmAAIAAgRQAAgNgFgHQgFgGgIAAQgJAAgEAGQgEAFAAANIAABsQAAAMAEAGQAEAGAJAAQASAAAAgWIAAgaIAmAAIAAAZQAAAYgOAPQgPAQgbAAQgaAAgPgQg");
	this.shape_10.setTransform(13.4,163.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.8,0,157.6,174.3);


(lib.CloseButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.InvisibleButton();
	this.instance.setTransform(30.6,30.8,0.455,0.442,0,0,0,100,100);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkwEmIJWpWIALALIpWJWg");
	this.shape.setTransform(30.6,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkwklIALgLIJWJWIgLALg");
	this.shape_1.setTransform(30.6,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-13.4,91,88.5);


(lib.openingtestcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABPbcIm2gUQkAgMi9gKQj8gOjIgTQi0gRiKgVQmthClFiIQjahbjZiOQjCh+jNivQigiKhoh0QiHiUhIiPQg6hvgZh0QgXhiABhjQgBjfBpjEQBmjCDDiUQDAiRD5hOIC5g6QBmgoA0g5QAWgYAfgzQAjg4ASgVQAgglAzggQAngaA9gbQFSigGAhNQE8g/FDABIARAAQA8gBA9ADQB4AFEMAZQD4AXCFACQB6AAA+ABQBoADBNAQQBdATBzA1IDGBhQCFBCEcB1QERBxCGBEQB6A9CtBrQC7B0BfA4QFMDEEAA7QBjAWDMAdQCzAfBlA3QCpBbBeDNQA7CEAyD5QAPBRAFAqQAEAiAAAeQAAAggEAdQgPB0hdCXQhwCxirCSQipCRjLBeQhlAuiCAsQhRAbibAuQlBBeidApQkLBFjYAiQj0AmkiAKIgeABQhPADhTAAIgfABQj3AAnNgUg");
	mask.setTransform(-58.4,-179.8);

	// Layer 1
	this.instance = new lib.outterShellpng();
	this.instance.setTransform(38,3.1,1,1,90,0,0,344.5,613);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-432.3,-341.4,747.9,339.3);


(lib.mantellower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(412,326.7,1,1,0,0,0,127.3,26.8);
	this.instance.alpha = 0.129;

	this.instance_1 = new lib.Mesh_1();

	this.instance_2 = new lib.Mesh_1_2();
	this.instance_2.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,689,373.4);


(lib.LP02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.setTransform(13.8,50.1,1,1,0,0,0,6.4,19.1);
	this.instance.alpha = 0.16;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F8D5AB","#F5CEA4","#EEBC90","#E19E6F","#D07542"],[0.031,0.184,0.412,0.682,0.988],-11,-31,18.1,34.1).s().p("ABCFkQgVgNg6hjQg4hbgTgtQgSgrgHhOQgJhVAQgfQAchAAZgyQAwhgAhggIBICrQgnA+gWAoQgoBMADAXQAJAmgEBGQAIBLBGBsQAtBFgRAKQgDABgEAAQgNAAgbgQg");
	this.shape.setTransform(11.8,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.6,74.5);


(lib.LP01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_2();
	this.instance.setTransform(15.7,41.9,1,1,0,0,0,7.7,28.8);
	this.instance.alpha = 0.289;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F8D5AB","#F3C99E","#E6AB7D","#D27A47","#D07542"],[0.031,0.204,0.522,0.949,0.988],-13.5,-31.5,30.7,28.1).s().p("ABmGIQgagGhGhIQhChGgkg3QgYglgThRQgThUAKgoIAmiaQAkh2AzhIICrAIIhaDeQhIC6ACAZQAFA6ATAyQAdBGBJBhQAxBCgNALQgCACgHAAQgMAAgbgGg");
	this.shape.setTransform(15.3,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.7,79.7);


(lib.LabialPalp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LP01();
	this.instance.setTransform(22.6,39.9,1,1,0,0,0,15.2,39.9);
	this.instance.shadow = new cjs.Shadow("rgba(160,105,34,0.686)",1,7,9);

	this.instance_1 = new lib.LP02();
	this.instance_1.setTransform(11.8,43.5,1,1,0,0,0,11.8,37.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(160,105,34,0.349)",1,3,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-3,59.4,103);


(lib.musselfoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mesh_2();

	this.instance_1 = new lib.foot();
	this.instance_1.setTransform(375.6,212.2,1,1,0,0,0,375.6,212.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.388)",2,2,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,775,448);


(lib.Group_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0_1();
	this.instance.setTransform(13.8,50.1,1,1,0,0,0,6.4,19.1);
	this.instance.alpha = 0.16;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F8D5AB","#F5CEA4","#EEBC90","#E19E6F","#D07542"],[0.031,0.184,0.412,0.682,0.988],-11,-31,18.1,34.1).s().p("ABCFkQgVgNg6hjQg4hbgTgtQgSgrgHhOQgJhVAQgfQAchAAZgyQAwhgAhggIBICrQgnA+gWAoQgoBMADAXQAJAmgEBGQAIBLBGBsQAtBFgRAKQgDABgEAAQgNAAgbgQg");
	this.shape_6.setTransform(11.8,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.6,74.5);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_2_1();
	this.instance.setTransform(15.7,41.9,1,1,0,0,0,7.7,28.8);
	this.instance.alpha = 0.289;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F8D5AB","#F3C99E","#E6AB7D","#D27A47","#D07542"],[0.031,0.204,0.522,0.949,0.988],-13.5,-31.5,30.7,28.1).s().p("ABmGIQgagGhGhIQhChGgkg3QgYglgThRQgThUAKgoIAmiaQAkh2AzhIICrAIIhaDeQhIC6ACAZQAFA6ATAyQAdBGBJBhQAxBCgNALQgCACgHAAQgMAAgbgGg");
	this.shape.setTransform(15.3,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.7,79.7);


(lib.sunbeams_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.MKReDs();
	this.instance.setTransform(934.2,1243.9,1,1,0,0,0,1367.5,715.9);
	this.instance.alpha = 0.398;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E7EB9F","#B1D58D","rgba(170,206,137,0.82)","rgba(153,191,131,0.318)","rgba(142,183,127,0)"],[0,0.51,0.667,0.89,1],0,638.3,0,-638.2).s().p("EiWIBjuMAAAjHbMEsRAAAMAAADHbg");
	this.shape.setTransform(963.2,1278.9);

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(1741.5,543,1,1,0,0,0,285.9,896.8);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.setTransform(1402.4,735,1,1,0,0,0,313.1,895.3);
	this.instance_2.alpha = 0.398;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(1315.4,315,1,1,0,0,0,325.9,894.3);
	this.instance_3.alpha = 0.148;

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(1022.1,498,1,1,0,0,0,325.9,894.2);
	this.instance_4.alpha = 0.398;

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(782.1,471,1,1,0,0,0,354.1,891.2);
	this.instance_5.alpha = 0.148;

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(550.9,528,1,1,0,0,0,420.2,879.7);
	this.instance_6.alpha = 0.25;

	this.instance_7 = new lib.Path_7();
	this.instance_7.setTransform(222,435.2,1,1,0,0,0,490.6,994.2);
	this.instance_7.alpha = 0.25;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B1D58D","#8EB77F","#779363","#727D50"],[0,0.247,0.624,1],0,961,0,-961).s().p("EiWICWKMAAAksTMEsRAAAMAAAEsTg");
	this.shape_1.setTransform(963.2,956.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-433.3,-579.3,2735.2,2539);


(lib.musselburriedcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AOYcCQgpgEisgsQhPgUjuhCIlmhlQhkgcjNAFQjdAFgegFQgegFhuAXQiQAihTAQQlGBBiBhEQgniqAJiqQAFiDAhh7QAXhVBwjgIBrjOQgEgqgEg2QgHhrAFg7QAHhLAiibQAiijAQgZQALgRgIgHQgNgOABgfQAAglAshrQA1h6ARgxQAXhADGjdQCri/BGg/QAcgYBahhQBChHBQg3QAhgWAhg3QAjg5ALgJQAQgNBBgrQBKgxAZgSQAvgiBNgwQBWg3AigOQAlgQBdgDQBegEA7ANQBAAOBEAaQBLAcAWAWQAaAXBeCQQBfCTAPAoQAKAdA8CJQA+CPANAgQATAyA1EIQA1ECAJBSQAKBagHDjQgHD3gYB0QgQBThrJxQhtJdguBhQgZA0hVAAQgRAAgUgCg");
	mask.setTransform(150.5,198.9);

	// png
	this.instance = new lib.musseloutterShell_pngcopy();
	this.instance.setTransform(152.5,264.7,0.402,0.402,0,0,0,344.7,613);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,19.3,274.5,359.3);


(lib.musselburried_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mussel_mc
	this.instance = new lib.musselburriedcopy();
	this.instance.setTransform(173.9,263.1,1,1,0,0,0,147,263.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.musselshadowcopy_1();
	this.instance_1.setTransform(204.8,390.3,1,1,0,0,0,204.8,45.6);
	this.instance_1.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,18.3,409.7,492.8);


(lib.fishGroup_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fishShadow_mccopy();
	this.instance.setTransform(300.6,40.2,1.543,1.543,0,0,0,60.9,26);
	this.instance.alpha = 0.078;

	this.instance_1 = new lib.fishShadow_mccopy();
	this.instance_1.setTransform(60.6,25.9,1,1,0,0,0,60.6,25.9);
	this.instance_1.alpha = 0.078;

	this.instance_2 = new lib.fishShadow_mccopy();
	this.instance_2.setTransform(372.3,90.2,1,1,0,0,0,60.6,25.9);
	this.instance_2.alpha = 0.078;

	this.instance_3 = new lib.fishShadow_mccopy();
	this.instance_3.setTransform(176.6,76.8,1,1,0,0,0,85.7,36.6);
	this.instance_3.alpha = 0.078;

	this.instance_4 = new lib.fishShadow_mccopy();
	this.instance_4.setTransform(262.8,142.4,1,1,0,0,0,64.8,27.6);
	this.instance_4.alpha = 0.078;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,433,166.5);


(lib.bubblecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubbleoutlinecopy();
	this.instance.setTransform(28.3,-35.8,1,1,0,0,0,20.9,20.9);
	this.instance.alpha = 0.328;

	this.instance_1 = new lib.bubbleshinecopy();
	this.instance_1.setTransform(0,0,1,1,0,0,0,68.5,68.5);
	this.instance_1.alpha = 0.109;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-68.5,137.1,137.1);


(lib.bkgr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sun beams
	this.instance = new lib.sunbeams_mccopy();
	this.instance.setTransform(299.3,1012.5,1,1,0,0,0,574.5,1012.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:934.2,regY:690.2,scaleX:1,x:658.3,y:690.2},0).wait(1).to({scaleX:1,x:657.5},0).wait(1).to({scaleX:1,x:656.7},0).wait(1).to({scaleX:0.99,x:656},0).wait(1).to({scaleX:0.99,x:655.3},0).wait(1).to({scaleX:0.99,x:654.5},0).wait(1).to({scaleX:0.99,x:653.8},0).wait(1).to({scaleX:0.99,x:653.1},0).wait(1).to({scaleX:0.99,x:652.3},0).wait(1).to({scaleX:0.98,x:651.6},0).wait(1).to({scaleX:0.98,x:650.8},0).wait(1).to({scaleX:0.98,x:650.1},0).wait(1).to({scaleX:0.98,x:649.3},0).wait(1).to({scaleX:0.98,x:648.6},0).wait(1).to({scaleX:0.97,x:647.8},0).wait(1).to({scaleX:0.97,x:647.1},0).wait(1).to({scaleX:0.97,x:646.4},0).wait(1).to({scaleX:0.97,x:645.6},0).wait(1).to({scaleX:0.97,x:644.9},0).wait(1).to({scaleX:0.97,x:644.1},0).wait(1).to({scaleX:0.96,x:643.4},0).wait(1).to({scaleX:0.96,x:642.6},0).wait(1).to({scaleX:0.96,x:641.9},0).wait(1).to({scaleX:0.96,x:641.2},0).wait(1).to({scaleX:0.96,x:640.4},0).wait(1).to({scaleX:0.96,x:639.7},0).wait(1).to({scaleX:0.95,x:638.9},0).wait(1).to({scaleX:0.95,x:638.2},0).wait(1).to({scaleX:0.95,x:637.4},0).wait(1).to({scaleX:0.95,x:636.7},0).wait(1).to({scaleX:0.95,x:635.9},0).wait(1).to({scaleX:0.95,x:635.2},0).wait(1).to({scaleX:0.94,x:634.5},0).wait(1).to({scaleX:0.94,x:633.7},0).wait(1).to({scaleX:0.94,x:633},0).wait(1).to({scaleX:0.94,x:632.2},0).wait(1).to({scaleX:0.94,x:631.5},0).wait(1).to({scaleX:0.94,x:630.7},0).wait(1).to({scaleX:0.93,x:630},0).wait(1).to({scaleX:0.93,x:629.3},0).wait(1).to({scaleX:0.93,x:628.5},0).wait(1).to({scaleX:0.93,x:627.8},0).wait(1).to({scaleX:0.93,x:627},0).wait(1).to({scaleX:0.92,x:626.3},0).wait(1).to({scaleX:0.92,x:625.5},0).wait(1).to({scaleX:0.92,x:624.8},0).wait(1).to({scaleX:0.92,x:624},0).wait(1).to({scaleX:0.92,x:623.3},0).wait(1).to({scaleX:0.92,x:622.6},0).wait(1).to({scaleX:0.91,x:621.8},0).wait(1).to({scaleX:0.91,x:621.1},0).wait(1).to({scaleX:0.91,x:620.4},0).wait(1).to({scaleX:0.91,x:619.6},0).wait(1).to({scaleX:0.91,x:618.8},0).wait(1).to({scaleX:0.91,x:618.1},0).wait(1).to({scaleX:0.9,x:617.4},0).wait(1).to({scaleX:0.9,x:616.6},0).wait(1).to({scaleX:0.9,x:615.9},0).wait(1).to({scaleX:0.9,x:615.1},0).wait(1).to({scaleX:0.9,x:614.4},0).wait(1).to({scaleX:0.9,x:613.7},0).wait(1).to({scaleX:0.89,x:612.9},0).wait(1).to({scaleX:0.89,x:612.2},0).wait(1).to({scaleX:0.89,x:611.4,y:690.3},0).wait(1).to({scaleX:0.89,x:611.5},0).wait(1).to({scaleX:0.89},0).wait(1).to({scaleX:0.89},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.9,x:611.6},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.9,x:611.7},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.9,x:611.8},0).wait(1).to({scaleX:0.91,x:611.7},0).wait(1).to({scaleX:0.91,x:611.8},0).wait(1).to({scaleX:0.91},0).wait(1).to({scaleX:0.91},0).wait(1).to({scaleX:0.91,x:611.9},0).wait(1).to({scaleX:0.91},0).wait(1).to({scaleX:0.91},0).wait(1).to({scaleX:0.91,x:612},0).wait(1).to({scaleX:0.91},0).wait(1).to({scaleX:0.92},0).wait(1).to({scaleX:0.92,x:612.1},0).wait(1).to({scaleX:0.92,x:612},0).wait(1).to({scaleX:0.92,x:612.1},0).wait(1).to({scaleX:0.92},0).wait(1).to({scaleX:0.92},0).wait(1).to({scaleX:0.92,x:612.2},0).wait(1).to({scaleX:0.92},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93,x:612.3},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93,x:612.4},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.94,x:612.5},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.94,x:612.6},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.94,x:612.7},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.95,x:612.8},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.95,x:612.9},0).wait(1).to({scaleX:0.95,x:612.8},0).wait(1).to({scaleX:0.95,x:612.9},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.96,x:613},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.96,x:613.1},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.96,x:613.2},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.97,x:613.3},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.97,x:613.4},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.98,x:613.5},0).wait(1).to({scaleX:0.98,x:615.9},0).wait(1).to({scaleX:0.98,x:618.3},0).wait(1).to({scaleX:0.98,x:620.7},0).wait(1).to({scaleX:0.98,x:623,y:690.2},0).wait(1).to({scaleX:0.98,x:625.5},0).wait(1).to({scaleX:0.99,x:627.9},0).wait(1).to({scaleX:0.99,x:630.2},0).wait(1).to({scaleX:0.99,x:632.7},0).wait(1).to({scaleX:0.99,x:635},0).wait(1).to({scaleX:0.99,x:637.4},0).wait(1).to({scaleX:0.99,x:639.8},0).wait(1).to({scaleX:0.99,x:642.2},0).wait(1).to({scaleX:0.99,x:644.6},0).wait(1).to({scaleX:0.99,x:647},0).wait(1).to({scaleX:1,x:649.4},0).wait(1).to({scaleX:1,x:651.8},0).wait(1).to({scaleX:1,x:654.2},0).wait(1).to({scaleX:1,x:656.6},0).wait(1).to({scaleX:1,x:659},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-708.6,-579.3,2735.2,2539);


(lib.dirt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// front
	this.instance = new lib.dirtlg_01();
	this.instance.setTransform(-1047.3,837.3,1.015,1,0,0,9.8,1302.9,1306.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1304.8,regY:1316.2,skewY:9.9,x:-1043.4,y:846.9},0).wait(1).to({skewY:9.8,x:-1041.4},0).wait(1).to({x:-1039.4},0).wait(1).to({x:-1037.4},0).wait(1).to({skewY:9.7,x:-1035.5},0).wait(1).to({x:-1033.5,y:847},0).wait(1).to({x:-1031.5},0).wait(1).to({skewY:9.6,x:-1029.5},0).wait(1).to({x:-1027.6},0).wait(1).to({x:-1025.6},0).wait(1).to({skewY:9.5,x:-1023.6},0).wait(1).to({x:-1021.6},0).wait(1).to({x:-1019.6,y:847.1},0).wait(1).to({skewY:9.4,x:-1017.7},0).wait(1).to({x:-1015.7},0).wait(1).to({x:-1013.7},0).wait(1).to({skewY:9.3,x:-1011.7},0).wait(1).to({x:-1009.7},0).wait(1).to({x:-1007.7},0).wait(1).to({skewY:9.2,x:-1005.8,y:847.2},0).wait(1).to({x:-1003.8},0).wait(1).to({x:-1001.8},0).wait(1).to({skewY:9.1,x:-999.8},0).wait(1).to({x:-997.9},0).wait(1).to({x:-995.9},0).wait(1).to({skewY:9,x:-993.9,y:847.3},0).wait(1).to({x:-991.9},0).wait(1).to({skewY:8.9,x:-989.9},0).wait(1).to({x:-987.9},0).wait(1).to({x:-986},0).wait(1).to({skewY:8.8,x:-984},0).wait(1).to({x:-982},0).wait(1).to({x:-980},0).wait(1).to({skewY:8.7,x:-978.1},0).wait(1).to({x:-976.1},0).wait(1).to({x:-974.1,y:847.4},0).wait(1).to({skewY:8.6,x:-972.1},0).wait(1).to({x:-970.1},0).wait(1).to({x:-968.2},0).wait(1).to({skewY:8.5,x:-966.2},0).wait(1).to({x:-964.2},0).wait(1).to({x:-962.2},0).wait(1).to({skewY:8.4,x:-960.2},0).wait(1).to({x:-958.2},0).wait(1).to({x:-956.3,y:847.5},0).wait(1).to({skewY:8.3,x:-954.3},0).wait(1).to({x:-952.3},0).wait(1).to({x:-950.3},0).wait(1).to({skewY:8.2,x:-948.4},0).wait(1).to({x:-946.4},0).wait(1).to({x:-944.4,y:847.6},0).wait(1).to({skewY:8.1,x:-942.4},0).wait(1).to({x:-940.4},0).wait(1).to({skewY:8,x:-938.4},0).wait(1).to({x:-936.5},0).wait(1).to({x:-934.5},0).wait(1).to({skewY:7.9,x:-932.5},0).wait(1).to({x:-930.5},0).wait(1).to({x:-928.5},0).wait(1).to({skewY:7.8,x:-926.6,y:847.7},0).wait(1).to({x:-924.6},0).wait(1).to({x:-922.6},0).wait(1).to({skewY:7.7,x:-920.7},0).wait(1).to({x:-918.7},0).wait(1).to({x:-916.7},0).wait(1).to({skewY:7.6,x:-914.7},0).wait(1).to({x:-912.7,y:847.8},0).wait(1).to({x:-910.7},0).wait(1).to({skewY:7.5,x:-908.8},0).wait(1).to({x:-906.8},0).wait(1).to({x:-904.8},0).wait(1).to({skewY:7.4,x:-902.8},0).wait(1).to({x:-900.8,y:847.9},0).wait(1).to({x:-898.8},0).wait(1).to({skewY:7.3,x:-896.9},0).wait(1).to({x:-894.9},0).wait(1).to({x:-892.9},0).wait(1).to({skewY:7.2,x:-890.9},0).wait(1).to({x:-888.9},0).wait(1).to({x:-887},0).wait(1).to({skewY:7.1,x:-885},0).wait(1).to({x:-883,y:848},0).wait(1).to({skewY:7,x:-881},0).wait(1).to({x:-879},0).wait(1).to({x:-877.1},0).wait(1).to({skewY:6.9,x:-875.1},0).wait(1).to({x:-873.1},0).wait(1).to({x:-871.2},0).wait(1).to({skewY:6.8,x:-869.2},0).wait(1).to({x:-867.2},0).wait(1).to({x:-865.2,y:848.1},0).wait(1).to({skewY:6.7,x:-863.2},0).wait(1).to({x:-861.2},0).wait(1).to({x:-859.2},0).wait(1).to({skewY:6.6,x:-857.3},0).wait(1).to({x:-855.3},0).wait(1).to({x:-853.3},0).wait(1).to({skewY:6.5,x:-851.3},0).wait(1).to({x:-849.4,y:848.2},0).wait(1).to({x:-847.4},0).wait(1).to({skewY:6.4,x:-845.4},0).wait(1).to({x:-843.4},0).wait(1).to({x:-841.4},0).wait(1).to({skewY:6.3,x:-839.4},0).wait(1).to({x:-837.5},0).wait(1).to({x:-835.5},0).wait(1).to({skewY:6.2,x:-833.5,y:848.3},0).wait(1).to({x:-831.5},0).wait(1).to({skewY:6.1,x:-829.6},0).wait(1).to({x:-827.6},0).wait(1).to({x:-825.6},0).wait(1).to({skewY:6,x:-823.7},0).wait(1).to({x:-821.7},0).wait(1).to({x:-819.7,y:848.4},0).wait(1).to({skewY:5.9,x:-817.7},0).wait(1).to({x:-815.7},0).wait(1).to({x:-813.7},0).wait(1).to({skewY:5.8,x:-811.8},0).wait(1).to({x:-809.8},0).wait(1).to({x:-807.8},0).wait(1).to({skewY:5.7,x:-805.8,y:848.5},0).wait(1).to({x:-803.8},0).wait(1).to({x:-801.9},0).wait(1).to({skewY:5.6,x:-799.9},0).wait(1).to({x:-797.9},0).wait(1).to({x:-795.9},0).wait(1).to({skewY:5.5,x:-794},0).wait(1).to({x:-792,y:848.6},0).wait(1).to({x:-790},0).wait(1).to({skewY:5.4,x:-788},0).wait(1).to({x:-786},0).wait(1).to({x:-784},0).wait(1).to({skewY:5.3,x:-782},0).wait(1).to({x:-780.1},0).wait(1).to({x:-778.1},0).wait(1).to({skewY:5.2,x:-776.1},0).wait(1).to({x:-774.2},0).wait(1).to({skewY:5.1,x:-772.2},0).wait(1).to({x:-770.2},0).wait(1).to({x:-768.2,y:848.7},0).wait(1).to({skewY:5,x:-766.2},0).wait(1).to({x:-764.2},0).wait(1).to({x:-762.3},0).wait(1).to({skewY:4.9,x:-760.3},0).wait(1).to({x:-758.3},0).wait(1).to({x:-756.3,y:848.8},0).wait(1).to({skewY:4.8,x:-754.4},0).wait(1).to({x:-752.3},0).wait(1).to({x:-750.4},0).wait(1).to({skewY:4.7,x:-748.4},0).wait(1).to({x:-746.4},0).wait(1).to({x:-744.4,y:848.9},0).wait(1).to({skewY:4.6,x:-742.5},0).wait(1).to({x:-740.5},0).wait(1).to({x:-738.5},0).wait(1).to({skewY:4.5,x:-736.5},0).wait(1).to({x:-734.6},0).wait(1).to({x:-732.5},0).wait(1).to({skewY:4.4,x:-730.6},0).wait(1).to({x:-728.6},0).wait(1).to({x:-726.6},0).wait(1).to({skewY:4.3,x:-724.6,y:849},0).wait(1).to({x:-722.7},0).wait(1).to({skewY:4.2,x:-720.7},0).wait(1).to({x:-718.7},0).wait(1).to({x:-716.7},0).wait(1).to({skewY:4.1,x:-714.7},0).wait(1).to({x:-712.7},0).wait(1).to({x:-710.8,y:849.1},0).wait(1).to({skewY:4,x:-708.8},0).wait(1).to({x:-706.8},0).wait(1).to({x:-704.9},0).wait(1).to({skewY:3.9,x:-702.9},0).wait(1).to({x:-700.9},0).wait(1).to({x:-698.9},0).wait(1).to({skewY:3.8,x:-696.9,y:849.2},0).wait(1).to({x:-695},0).wait(1).to({x:-693},0).wait(1).to({skewY:3.7,x:-691},0).wait(1).to({x:-689},0).wait(1).to({x:-687},0).wait(1).to({skewY:3.6,x:-685.1},0).wait(1).to({x:-683.1},0).wait(1).to({x:-681.1,y:849.3},0).wait(1).to({skewY:3.5,x:-679.1},0).wait(1).to({x:-677.2},0).wait(1).to({x:-675.1},0).wait(1).to({skewY:3.4,x:-673.2},0).wait(1).to({x:-671.2},0).wait(1).to({x:-669.2},0).wait(1).to({skewY:3.3,x:-667.3},0).wait(1).to({x:-665.3},0).wait(1).to({skewY:3.2,x:-663.3},0).wait(1).to({x:-661.3,y:849.4},0).wait(1).to({x:-659.3},0).wait(1).to({skewY:3.1,x:-657.3},0).wait(1).to({x:-655.3},0).wait(1).to({x:-653.4},0).wait(1).to({skewY:3,x:-651.4,y:849.5},0).wait(1).to({x:-649.4},0).wait(1).to({x:-647.4},0).wait(1).to({skewY:2.9,x:-645.5},0).wait(1).to({x:-643.5},0).wait(1).to({x:-641.5},0).wait(1).to({skewY:2.8,x:-639.5},0).wait(1).to({x:-637.5},0).wait(1).to({x:-635.6},0).wait(1).to({skewY:2.7,x:-633.6},0).wait(1).to({x:-631.6,y:849.6},0).wait(1).to({x:-629.6},0).wait(1).to({skewY:2.6,x:-627.6},0).wait(1).to({x:-625.6},0).wait(1).to({x:-623.7},0).wait(1).to({skewY:2.5,x:-621.7,y:849.7},0).wait(1).to({x:-619.7},0).wait(1).to({x:-617.7},0).wait(1).to({skewY:2.4,x:-615.8},0).wait(1).to({x:-613.8},0).wait(1).to({skewY:2.3,x:-611.8},0).wait(1).to({x:-609.8},0).wait(1).to({x:-607.8},0).wait(1).to({skewY:2.2,x:-605.9},0).wait(1).to({x:-603.9,y:849.8},0).wait(1).to({x:-601.9},0).wait(1).to({skewY:2.1,x:-599.9},0).wait(1).to({x:-597.9},0).wait(1).to({x:-596},0).wait(1).to({skewY:2,x:-594},0).wait(1).to({x:-592},0).wait(1).to({x:-590},0).wait(1).to({skewY:1.9,x:-588},0).wait(1).to({x:-586.1,y:849.9},0).wait(1).to({x:-584.1},0).wait(1).to({skewY:1.8,x:-582.1},0).wait(1).to({x:-580.1},0).wait(1).to({x:-578.2},0).wait(1).to({skewY:1.7,x:-576.2},0).wait(1).to({x:-574.2},0).wait(1).to({x:-572.2,y:850},0).wait(1).to({skewY:1.6,x:-570.2},0).wait(1).to({x:-568.3},0).wait(1).to({x:-566.3},0).wait(1).to({skewY:1.5,x:-564.3},0).wait(1).to({x:-562.3},0).wait(1).to({x:-560.3},0).wait(1).to({skewY:1.4,x:-558.4,y:850.1},0).wait(1).to({x:-556.4},0).wait(1).to({skewY:1.3,x:-554.4},0).wait(1).to({x:-552.4},0).wait(1).to({x:-550.4},0).wait(1).to({skewY:1.2,x:-548.5},0).wait(1).to({x:-546.5},0).wait(1).to({x:-544.5},0).wait(1).to({skewY:1.1,x:-542.5},0).wait(1).to({x:-540.5,y:850.2},0).wait(1).to({x:-538.6},0).wait(1).to({skewY:1,x:-536.6},0).wait(1).to({x:-534.6},0).wait(1).to({x:-532.6},0).wait(1).to({skewY:0.9,x:-530.6},0).wait(1).to({x:-528.6},0).wait(1).to({x:-526.7},0).wait(1).to({skewY:0.8,x:-524.7},0).wait(1).to({x:-522.7,y:850.3},0).wait(1).to({x:-520.8},0).wait(1).to({skewY:0.7,x:-518.8},0).wait(1).to({x:-516.8},0).wait(1).to({x:-514.8},0).wait(1).to({skewY:0.6,x:-512.8},0).wait(1).to({x:-510.9},0).wait(1).to({x:-508.8},0).wait(1).to({skewY:0.5,x:-506.9,y:850.4},0).wait(1).to({x:-504.9},0).wait(1).to({skewY:0.4,x:-502.9},0).wait(1).to({x:-500.9},0).wait(1).to({x:-499},0).wait(1).to({skewY:0.3,x:-497,y:850.5},0).wait(1).to({x:-495},0).wait(1).to({x:-493,y:850.4},0).wait(1).to({skewY:0.2,x:-491.1},0).wait(1).to({x:-489.1,y:850.5},0).wait(1).to({x:-487.1},0).wait(1).to({skewY:0.1,x:-485.1},0).wait(1).to({x:-483.1},0).wait(1).to({x:-481.1},0).wait(1).to({skewY:0,x:-479.2,y:850.6},0).wait(1).to({x:-477.2},0).wait(1).to({x:-475.2},0).wait(1).to({skewY:-0.1,x:-473.2},0).wait(1).to({x:-471.2},0).wait(1).to({x:-469.3},0).wait(1).to({skewY:-0.2,x:-467.3},0).wait(1).to({x:-465.3},0).wait(1).to({x:-463.4,y:850.7},0).wait(1).to({skewY:-0.3,x:-461.4},0).wait(1).to({x:-459.4},0).wait(1).to({x:-457.4},0).wait(1).to({skewY:-0.4,x:-455.4},0).wait(1).to({x:-453.4},0).wait(1).to({x:-451.4,y:850.8},0).wait(1).to({skewY:-0.5,x:-449.5},0).wait(1).to({x:-447.5},0).wait(1).to({skewY:-0.6,x:-445.5},0).wait(1).to({x:-443.5},0).wait(1).to({x:-441.6},0).wait(1).to({skewY:-0.7,x:-439.6},0).wait(1).to({x:-437.6},0).wait(1).to({x:-435.6,y:850.9},0).wait(1).to({skewY:-0.8,x:-433.7},0).wait(1).to({x:-431.7},0).wait(1).to({x:-429.7},0).wait(1).to({skewY:-0.9,x:-427.7},0).wait(1).to({x:-425.7},0).wait(1).to({x:-423.7},0).wait(1).to({skewY:-1,x:-421.8},0).wait(1).to({x:-419.8,y:851},0).wait(1).to({x:-417.8},0).wait(1).to({skewY:-1.1,x:-415.8},0).wait(1).to({x:-413.8},0).wait(1).to({x:-411.8},0).wait(1).to({skewY:-1.2,x:-409.9},0).wait(1).to({x:-407.9},0).wait(1).to({x:-405.9},0).wait(1).to({skewY:-1.3,x:-403.9},0).wait(1).to({x:-402,y:851.1},0).wait(1).to({x:-400},0).wait(1).to({skewY:-1.4,x:-398},0).wait(1).to({x:-396.1},0).wait(1).to({skewY:-1.5,x:-394.1},0).wait(1).to({x:-392.1,y:851.2},0).wait(1).to({x:-390.1},0).wait(1).to({skewY:-1.6,x:-388.1},0).wait(1).to({x:-386.2},0).wait(1).to({x:-384.1},0).wait(1).to({skewY:-1.7,x:-382.1},0).wait(1).to({x:-380.2},0).wait(1).to({x:-378.2},0).wait(1).to({skewY:-1.8,x:-376.2},0).wait(1).to({x:-374.2,y:851.3},0).wait(1).to({x:-372.3},0).wait(1).to({skewY:-1.9,x:-370.3},0).wait(1).to({x:-368.3},0).wait(1).to({x:-366.3},0).wait(1).to({skewY:-2,x:-364.4},0).wait(1).to({x:-362.4},0).wait(1).to({x:-360.4},0).wait(1).to({skewY:-2.1,x:-358.4},0).wait(1).to({x:-356.4,y:851.4},0).wait(1).to({x:-354.5},0).wait(1).to({skewY:-2.2,x:-352.5},0).wait(1).to({x:-350.5},0).wait(1).to({x:-348.5},0).wait(1).to({skewY:-2.3,x:-346.5},0).wait(1).to({x:-344.6},0).wait(1).to({x:-342.5,y:851.5},0).wait(1).to({skewY:-2.4,x:-340.6,y:851.4},0).wait(1).to({x:-338.6,y:851.5},0).wait(1).to({skewY:-2.5,x:-336.6},0).wait(1).to({x:-334.6},0).wait(1).to({x:-332.7},0).wait(1).to({skewY:-2.6,x:-330.7},0).wait(1).to({x:-328.7,y:851.6},0).wait(1).to({x:-326.7},0).wait(1).to({skewY:-2.7,x:-324.8},0).wait(1).to({x:-322.8},0).wait(1).to({x:-320.8},0).wait(1).to({skewY:-2.8,x:-318.8},0).wait(1).to({x:-316.8},0).wait(1).to({x:-314.9},0).wait(1).to({skewY:-2.9,x:-312.9},0).wait(1).to({x:-310.9},0).wait(1).to({x:-308.9,y:851.7},0).wait(1).to({skewY:-3,x:-306.9},0).wait(1).to({x:-305},0).wait(1).to({x:-303},0).wait(1).to({skewY:-3.1,x:-301},0).wait(1).to({x:-299},0).wait(1).to({x:-297},0).wait(1).to({skewY:-3.2,x:-295.1},0).wait(1).to({x:-293.1,y:851.8},0).wait(1).to({x:-291.1},0).wait(1).to({skewY:-3.3,x:-289.1},0).wait(1).to({x:-287.2},0).wait(1).to({skewY:-3.4,x:-285.2},0).wait(1).to({x:-283.2},0).wait(1).to({x:-281.2,y:851.9},0).wait(1).to({skewY:-3.5,x:-279.2},0).wait(1).to({x:-277.3},0).wait(1).to({x:-275.3},0).wait(1).to({skewY:-3.6,x:-273.3},0).wait(1).to({x:-271.3},0).wait(1).to({x:-269.4},0).wait(1).to({skewY:-3.7,x:-267.3},0).wait(1).to({x:-265.4},0).wait(1).to({x:-263.4},0).wait(1).to({skewY:-3.8,x:-261.4},0).wait(1).to({x:-259.5,y:852},0).wait(1).to({x:-257.5},0).wait(1).to({skewY:-3.9,x:-255.5},0).wait(1).to({x:-253.5},0).wait(1).to({x:-251.5},0).wait(1).to({skewY:-4,x:-249.5,y:852.1},0).wait(1).to({x:-247.6},0).wait(1).to({x:-245.6},0).wait(1).to({skewY:-4.1,x:-243.6},0).wait(1).to({x:-241.6},0).wait(1).to({x:-239.6},0).wait(1).to({skewY:-4.2,x:-237.7},0).wait(1).to({x:-235.7},0).wait(1).to({x:-233.7},0).wait(1).to({skewY:-4.3,x:-231.7},0).wait(1).to({x:-229.7},0).wait(1).to({skewY:-4.4,x:-227.8,y:852.2},0).wait(1).to({x:-225.8},0).wait(1).to({x:-223.8},0).wait(1).to({skewY:-4.5,x:-221.8},0).wait(1).to({x:-219.9},0).wait(1).to({x:-217.9,y:852.3},0).wait(1).to({skewY:-4.6,x:-215.9},0).wait(1).to({x:-213.9},0).wait(1).to({x:-211.9},0).wait(1).to({skewY:-4.7,x:-209.9},0).wait(1).to({x:-208},0).wait(1).to({x:-206},0).wait(1).to({skewY:-4.8,x:-204},0).wait(1).to({x:-202},0).wait(1).to({x:-200.1,y:852.4},0).wait(1).to({skewY:-4.9,x:-198.1},0).wait(1).to({x:-196.1},0).wait(1).to({x:-194.1},0).wait(1).to({skewY:-5,x:-192.1},0).wait(1).to({x:-190.1},0).wait(1).to({x:-188.2},0).wait(1).to({skewY:-5.1,x:-186.2},0).wait(1).to({x:-184.2,y:852.5},0).wait(1).to({x:-182.2},0).wait(1).to({skewY:-5.2,x:-180.3},0).wait(1).to({x:-178.3},0).wait(1).to({skewY:-5.3,x:-176.3},0).wait(1).to({x:-174.3},0).wait(1).to({x:-172.3},0).wait(1).to({skewY:-5.4,x:-170.4,y:852.6},0).wait(1).to({x:-168.4},0).wait(1).to({x:-166.4},0).wait(1).to({skewY:-5.5,x:-164.4},0).wait(1).to({x:-162.4},0).wait(1).to({x:-160.5},0).wait(1).to({skewY:-5.6,x:-158.5},0).wait(1).to({x:-156.5,y:852.7},0).wait(1).to({x:-154.5},0).wait(1).to({skewY:-5.7,x:-152.6},0).wait(1).to({x:-150.5},0).wait(1).to({x:-148.6},0).wait(1).to({skewY:-5.8,x:-146.6},0).wait(1).to({x:-144.6},0).wait(1).to({x:-142.7},0).wait(1).to({skewY:-5.9,x:-140.6},0).wait(1).to({x:-138.7,y:852.8},0).wait(1).to({x:-136.7},0).wait(1).to({skewY:-6,x:-134.7},0).wait(1).to({x:-132.7},0).wait(1).to({x:-130.8},0).wait(1).to({skewY:-6.1,x:-128.8},0).wait(1).to({x:-126.8},0).wait(1).to({x:-124.8},0).wait(1).to({skewY:-6.2,x:-122.8,y:852.9},0).wait(1).to({x:-120.9},0).wait(1).to({skewY:-6.3,x:-118.9},0).wait(1).to({x:-116.9},0).wait(1).to({x:-114.9},0).wait(1).to({skewY:-6.4,x:-112.9},0).wait(1).to({x:-111},0).wait(1).to({x:-109},0).wait(1).to({skewY:-6.5,x:-107,y:853},0).wait(1).to({x:-105},0).wait(1).to({x:-103},0).wait(1).to({skewY:-6.6,x:-101.1},0).wait(1).to({x:-99.1},0).wait(1).to({x:-97.1},0).wait(1).to({skewY:-6.7,x:-95.1},0).wait(1).to({x:-93.1},0).wait(1).to({x:-91.2},0).wait(1).to({skewY:-6.8,x:-89.2,y:853.1},0).wait(1).to({x:-87.2},0).wait(1).to({x:-85.2},0).wait(1).to({skewY:-6.9,x:-83.3},0).wait(1).to({x:-81.3},0).wait(1).to({x:-79.3},0).wait(1).to({skewY:-7,x:-77.3,y:853.2},0).wait(1).to({x:-75.3},0).wait(1).to({x:-73.3},0).wait(1).to({skewY:-7.1,x:-71.4},0).wait(1).to({x:-69.4},0).wait(1).to({skewY:-7.2,x:-67.4},0).wait(1).to({x:-65.4,y:853.3},0).wait(1).to({x:-63.4},0).wait(1).to({skewY:-7.3,x:-61.5},0).wait(1).to({x:-59.5},0).wait(1).to({x:-57.5},0).wait(1).to({skewY:-7.4,x:-55.5},0).wait(1).to({x:-53.5},0).wait(1).to({x:-51.6},0).wait(1).to({skewY:-7.5,x:-49.6},0).wait(1).to({x:-47.6},0).wait(1).to({x:-45.7,y:853.4},0).wait(1).to({skewY:-7.6,x:-43.7},0).wait(1).to({x:-41.7},0).wait(1).to({x:-39.7},0).wait(1).to({skewY:-7.7,x:-37.7},0).wait(1).to({x:-35.8},0).wait(1).to({x:-33.8},0).wait(1).to({skewY:-7.8,x:-31.8},0).wait(1).to({x:-29.8,y:853.5},0).wait(1).to({x:-27.8},0).wait(1).to({skewY:-7.9,x:-25.8},0).wait(1).to({x:-23.9},0).wait(1).to({x:-21.9},0).wait(1).to({skewY:-8,x:-19.9},0).wait(1).to({x:-17.9,y:853.6},0).wait(1).to({x:-15.9},0).wait(1).to({skewY:-8.1,x:-14},0).wait(1).to({x:-12},0).wait(1).to({skewY:-8.2,x:-10},0).wait(1).to({x:-8},0).wait(1).to({x:-6.1},0).wait(1).to({skewY:-8.3,x:-4.1},0).wait(1).to({x:-2.1},0).wait(1).to({x:-0.1},0).wait(1).to({skewY:-8.4,x:1.8,y:853.7},0).wait(1).to({x:3.8},0).wait(1).to({x:5.8},0).wait(1).to({skewY:-8.5,x:7.8},0).wait(1).to({x:9.8},0).wait(1).to({x:11.7},0).wait(1).to({skewY:-8.6,x:13.7,y:853.8},0).wait(1).to({x:15.7},0).wait(1).to({x:17.7},0).wait(1).to({skewY:-8.7,x:19.7},0).wait(1).to({x:21.6},0).wait(1).to({x:23.6},0).wait(1).to({skewY:-8.8,x:25.6},0).wait(1).to({x:27.6},0).wait(1).to({x:29.6},0).wait(1).to({skewY:-8.9,x:31.5,y:853.9},0).wait(1).to({x:33.5},0).wait(1).to({x:35.5},0).wait(1).to({skewY:-9,x:37.5},0).wait(1).to({x:39.4},0).wait(1).to({skewY:-9.1,x:41.5},0).wait(1).to({x:43.4},0).wait(1).to({x:45.4},0).wait(1).to({skewY:-9.2,x:47.4,y:854},0).wait(1).to({x:49.4},0).wait(1).to({x:51.3},0).wait(1).to({skewY:-9.3,x:53.3},0).wait(1).to({x:55.3},0).wait(1).to({x:57.3},0).wait(1).to({skewY:-9.4,x:59.3},0).wait(1).to({x:61.2},0).wait(1).to({x:63.2},0).wait(1).to({skewY:-9.5,x:65.2},0).wait(1).to({x:67.2,y:854.1},0).wait(1).to({x:69.2},0).wait(1).to({skewY:-9.6,x:71.1},0).wait(1).to({x:73.1},0).wait(1).to({x:75.1},0).wait(1).to({skewY:-9.7,x:77.1},0).wait(1).to({x:79},0).wait(1).to({x:81.1,y:854.2},0).wait(1).to({skewY:-9.8,x:83},0).wait(1).to({x:85},0).wait(1).to({x:87},0).wait(1).to({skewY:-9.9,x:89},0).wait(1).to({x:90.9},0).wait(1));

	// back copy
	this.instance_1 = new lib.dirtlg_01();
	this.instance_1.setTransform(-247.3,1469.4,0.505,0.523,0,15.3,0,1278.7,1309.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:1304.8,regY:1316.2,x:-234.6,y:1472.9},0).wait(1).to({x:-234.2,y:1472.8},0).wait(1).to({x:-233.7},0).wait(1).to({x:-233.2,y:1472.7},0).wait(1).to({x:-232.7,y:1472.6},0).wait(1).to({x:-232.2},0).wait(1).to({x:-231.7,y:1472.5},0).wait(1).to({x:-231.3,y:1472.4},0).wait(1).to({x:-230.8},0).wait(1).to({x:-230.3,y:1472.3},0).wait(1).to({x:-229.8},0).wait(1).to({x:-229.3,y:1472.2},0).wait(1).to({x:-228.9,y:1472.1},0).wait(1).to({x:-228.4},0).wait(1).to({x:-227.9,y:1472},0).wait(1).to({x:-227.4,y:1471.9},0).wait(1).to({x:-226.9},0).wait(1).to({x:-226.5,y:1471.8},0).wait(1).to({x:-226,y:1471.7},0).wait(1).to({x:-225.5},0).wait(1).to({x:-225,y:1471.6},0).wait(1).to({x:-224.5},0).wait(1).to({x:-224.1,y:1471.5},0).wait(1).to({x:-223.6,y:1471.4},0).wait(1).to({x:-223.1},0).wait(1).to({x:-222.6,y:1471.3},0).wait(1).to({x:-222.1,y:1471.2},0).wait(1).to({x:-221.6},0).wait(1).to({x:-221.2,y:1471.1},0).wait(1).to({x:-220.7},0).wait(1).to({x:-220.2,y:1471},0).wait(1).to({x:-219.7,y:1470.9},0).wait(1).to({x:-219.2},0).wait(1).to({x:-218.8,y:1470.8},0).wait(1).to({x:-218.3,y:1470.7},0).wait(1).to({x:-217.8},0).wait(1).to({x:-217.3,y:1470.6},0).wait(1).to({x:-216.8},0).wait(1).to({x:-216.4,y:1470.5},0).wait(1).to({x:-215.9,y:1470.4},0).wait(1).to({x:-215.4},0).wait(1).to({x:-214.9,y:1470.3},0).wait(1).to({x:-214.4,y:1470.2},0).wait(1).to({x:-214},0).wait(1).to({x:-213.5,y:1470.1},0).wait(1).to({x:-213},0).wait(1).to({x:-212.5,y:1470},0).wait(1).to({x:-212,y:1469.9},0).wait(1).to({x:-211.5},0).wait(1).to({x:-211.1,y:1469.8},0).wait(1).to({x:-210.6,y:1469.7},0).wait(1).to({x:-210.1},0).wait(1).to({x:-209.6,y:1469.6},0).wait(1).to({x:-209.1},0).wait(1).to({x:-208.7,y:1469.5},0).wait(1).to({x:-208.2,y:1469.4},0).wait(1).to({x:-207.7},0).wait(1).to({x:-207.2,y:1469.3},0).wait(1).to({x:-206.7,y:1469.2},0).wait(1).to({x:-206.3},0).wait(1).to({x:-205.8,y:1469.1},0).wait(1).to({x:-205.3},0).wait(1).to({x:-204.8,y:1469},0).wait(1).to({x:-204.3,y:1468.9},0).wait(1).to({x:-203.9},0).wait(1).to({x:-203.4,y:1468.8},0).wait(1).to({x:-202.9,y:1468.7},0).wait(1).to({x:-202.4},0).wait(1).to({x:-201.9,y:1468.6},0).wait(1).to({x:-201.4},0).wait(1).to({x:-201,y:1468.5},0).wait(1).to({x:-200.5,y:1468.4},0).wait(1).to({x:-200},0).wait(1).to({x:-199.5,y:1468.3},0).wait(1).to({x:-199,y:1468.2},0).wait(1).to({x:-198.6},0).wait(1).to({x:-198.1,y:1468.1},0).wait(1).to({x:-197.6,y:1468},0).wait(1).to({x:-197.1},0).wait(1).to({x:-196.6,y:1467.9},0).wait(1).to({x:-196.2},0).wait(1).to({x:-195.7,y:1467.8},0).wait(1).to({x:-195.2,y:1467.7},0).wait(1).to({x:-194.7},0).wait(1).to({x:-194.2,y:1467.6},0).wait(1).to({x:-193.8,y:1467.5},0).wait(1).to({x:-193.3},0).wait(1).to({x:-192.8,y:1467.4},0).wait(1).to({x:-192.3},0).wait(1).to({x:-191.8,y:1467.3},0).wait(1).to({x:-191.3,y:1467.2},0).wait(1).to({x:-190.9},0).wait(1).to({x:-190.4,y:1467.1},0).wait(1).to({x:-189.9,y:1467},0).wait(1).to({x:-189.4},0).wait(1).to({x:-188.9,y:1466.9},0).wait(1).to({x:-188.5},0).wait(1).to({x:-188,y:1466.8},0).wait(1).to({x:-187.5,y:1466.7},0).wait(1).to({x:-187},0).wait(1).to({x:-186.5,y:1466.6},0).wait(1).to({x:-186.1,y:1466.5},0).wait(1).to({x:-185.6},0).wait(1).to({x:-185.1,y:1466.4},0).wait(1).to({x:-184.6},0).wait(1).to({x:-184.1,y:1466.3},0).wait(1).to({x:-183.7,y:1466.2},0).wait(1).to({x:-183.2},0).wait(1).to({x:-182.7,y:1466.1},0).wait(1).to({x:-182.2,y:1466},0).wait(1).to({x:-181.7},0).wait(1).to({x:-181.2,y:1465.9},0).wait(1).to({x:-180.8},0).wait(1).to({x:-180.3,y:1465.8},0).wait(1).to({x:-179.8,y:1465.7},0).wait(1).to({x:-179.3},0).wait(1).to({x:-178.8,y:1465.6},0).wait(1).to({x:-178.4,y:1465.5},0).wait(1).to({x:-177.9},0).wait(1).to({x:-177.4,y:1465.4},0).wait(1).to({x:-176.9},0).wait(1).to({x:-176.4,y:1465.3},0).wait(1).to({x:-176,y:1465.2},0).wait(1).to({x:-175.5},0).wait(1).to({x:-175,y:1465.1},0).wait(1).to({x:-174.5,y:1465},0).wait(1).to({x:-174},0).wait(1).to({x:-173.6,y:1464.9},0).wait(1).to({x:-173.1},0).wait(1).to({x:-172.6,y:1464.8},0).wait(1).to({x:-172.1,y:1464.7},0).wait(1).to({x:-171.6},0).wait(1).to({x:-171.1,y:1464.6},0).wait(1).to({x:-170.7,y:1464.5},0).wait(1).to({x:-170.2},0).wait(1).to({x:-169.7,y:1464.4},0).wait(1).to({x:-169.2,y:1464.3},0).wait(1).to({x:-168.7},0).wait(1).to({x:-168.3,y:1464.2},0).wait(1).to({x:-167.8},0).wait(1).to({x:-167.3,y:1464.1},0).wait(1).to({x:-166.8,y:1464},0).wait(1).to({x:-166.3},0).wait(1).to({x:-165.9,y:1463.9},0).wait(1).to({x:-165.4,y:1463.8},0).wait(1).to({x:-164.9},0).wait(1).to({x:-164.4,y:1463.7},0).wait(1).to({x:-163.9},0).wait(1).to({x:-163.5,y:1463.6},0).wait(1).to({x:-163,y:1463.5},0).wait(1).to({x:-162.5},0).wait(1).to({x:-162,y:1463.4},0).wait(1).to({x:-161.5,y:1463.3},0).wait(1).to({x:-161.1},0).wait(1).to({x:-160.6,y:1463.2},0).wait(1).to({x:-160.1},0).wait(1).to({x:-159.6,y:1463.1},0).wait(1).to({x:-159.1,y:1463},0).wait(1).to({x:-158.6},0).wait(1).to({x:-158.2,y:1462.9},0).wait(1).to({x:-157.7,y:1462.8},0).wait(1).to({x:-157.2},0).wait(1).to({x:-156.7,y:1462.7},0).wait(1).to({x:-156.2},0).wait(1).to({x:-155.8,y:1462.6},0).wait(1).to({x:-155.3,y:1462.5},0).wait(1).to({x:-154.8},0).wait(1).to({x:-154.3,y:1462.4},0).wait(1).to({x:-153.8,y:1462.3},0).wait(1).to({x:-153.4},0).wait(1).to({x:-152.9,y:1462.2},0).wait(1).to({x:-152.4},0).wait(1).to({x:-151.9,y:1462.1},0).wait(1).to({x:-151.4,y:1462},0).wait(1).to({x:-151},0).wait(1).to({x:-150.5,y:1461.9},0).wait(1).to({x:-150,y:1461.8},0).wait(1).to({x:-149.5},0).wait(1).to({x:-149,y:1461.7},0).wait(1).to({x:-148.5},0).wait(1).to({x:-148.1,y:1461.6},0).wait(1).to({x:-147.6,y:1461.5},0).wait(1).to({x:-147.1},0).wait(1).to({x:-146.6,y:1461.4},0).wait(1).to({x:-146.1,y:1461.3},0).wait(1).to({x:-145.7},0).wait(1).to({x:-145.2,y:1461.2},0).wait(1).to({x:-144.7},0).wait(1).to({x:-144.2,y:1461.1},0).wait(1).to({x:-143.7,y:1461},0).wait(1).to({x:-143.3},0).wait(1).to({x:-142.8,y:1460.9},0).wait(1).to({x:-142.3,y:1460.8},0).wait(1).to({x:-141.8},0).wait(1).to({x:-141.3,y:1460.7},0).wait(1).to({x:-140.9,y:1460.6},0).wait(1).to({x:-140.4},0).wait(1).to({x:-139.9,y:1460.5},0).wait(1).to({x:-139.4},0).wait(1).to({x:-138.9,y:1460.4},0).wait(1).to({x:-138.4,y:1460.3},0).wait(1).to({x:-138},0).wait(1).to({x:-137.5,y:1460.2},0).wait(1).to({x:-137,y:1460.1},0).wait(1).to({x:-136.5},0).wait(1).to({x:-136,y:1460},0).wait(1).to({x:-135.6},0).wait(1).to({x:-135.1,y:1459.9},0).wait(1).to({x:-134.6,y:1459.8},0).wait(1).to({x:-134.1},0).wait(1).to({x:-133.6,y:1459.7},0).wait(1).to({x:-133.2,y:1459.6},0).wait(1).to({x:-132.7},0).wait(1).to({x:-132.2,y:1459.5},0).wait(1).to({x:-131.7},0).wait(1).to({x:-131.2,y:1459.4},0).wait(1).to({x:-130.8,y:1459.3},0).wait(1).to({x:-130.3},0).wait(1).to({x:-129.8,y:1459.2},0).wait(1).to({x:-129.3,y:1459.1},0).wait(1).to({x:-128.8},0).wait(1).to({x:-128.3,y:1459},0).wait(1).to({x:-127.9},0).wait(1).to({x:-127.4,y:1458.9},0).wait(1).to({x:-126.9,y:1458.8},0).wait(1).to({x:-126.4},0).wait(1).to({x:-125.9,y:1458.7},0).wait(1).to({x:-125.5,y:1458.6},0).wait(1).to({x:-125},0).wait(1).to({x:-124.5,y:1458.5},0).wait(1).to({x:-124},0).wait(1).to({x:-123.5,y:1458.4},0).wait(1).to({x:-123.1,y:1458.3},0).wait(1).to({x:-122.6},0).wait(1).to({x:-122.1,y:1458.2},0).wait(1).to({x:-121.6,y:1458.1},0).wait(1).to({x:-121.1},0).wait(1).to({x:-120.7,y:1458},0).wait(1).to({x:-120.2},0).wait(1).to({x:-119.7,y:1457.9},0).wait(1).to({x:-119.2,y:1457.8},0).wait(1).to({x:-118.7},0).wait(1).to({x:-118.2,y:1457.7},0).wait(1).to({x:-117.8,y:1457.6},0).wait(1).to({x:-117.3},0).wait(1).to({x:-116.8,y:1457.5},0).wait(1).to({x:-116.3,y:1457.4},0).wait(1).to({x:-115.8},0).wait(1).to({x:-115.4,y:1457.3},0).wait(1).to({x:-114.9},0).wait(1).to({x:-114.4,y:1457.2},0).wait(1).to({x:-113.9,y:1457.1},0).wait(1).to({x:-113.4},0).wait(1).to({x:-113,y:1457},0).wait(1).to({x:-112.5,y:1456.9},0).wait(1).to({x:-112},0).wait(1).to({x:-111.5,y:1456.8},0).wait(1).to({x:-111},0).wait(1).to({x:-110.6,y:1456.7},0).wait(1).to({x:-110.1,y:1456.6},0).wait(1).to({x:-109.6},0).wait(1).to({x:-109.1,y:1456.5},0).wait(1).to({x:-108.6,y:1456.4},0).wait(1).to({x:-108.1},0).wait(1).to({x:-107.7,y:1456.3},0).wait(1).to({x:-107.2},0).wait(1).to({x:-106.7,y:1456.2},0).wait(1).to({x:-106.2,y:1456.1},0).wait(1).to({x:-105.7},0).wait(1).to({x:-105.3,y:1456},0).wait(1).to({x:-104.8,y:1455.9},0).wait(1).to({x:-104.3},0).wait(1).to({x:-103.8,y:1455.8},0).wait(1).to({x:-103.3},0).wait(1).to({x:-102.9,y:1455.7},0).wait(1).to({x:-102.4,y:1455.6},0).wait(1).to({x:-101.9},0).wait(1).to({x:-101.4,y:1455.5},0).wait(1).to({x:-100.9,y:1455.4},0).wait(1).to({x:-100.5},0).wait(1).to({x:-100,y:1455.3},0).wait(1).to({x:-99.5},0).wait(1).to({x:-99,y:1455.2},0).wait(1).to({x:-98.5,y:1455.1},0).wait(1).to({x:-98},0).wait(1).to({x:-97.6,y:1455},0).wait(1).to({x:-97.1,y:1454.9},0).wait(1).to({x:-96.6},0).wait(1).to({x:-96.1,y:1454.8},0).wait(1).to({x:-95.6},0).wait(1).to({x:-95.2,y:1454.7},0).wait(1).to({x:-94.7,y:1454.6},0).wait(1).to({x:-94.2},0).wait(1).to({x:-93.7,y:1454.5},0).wait(1).to({x:-93.2,y:1454.4},0).wait(1).to({x:-92.8},0).wait(1).to({x:-92.3,y:1454.3},0).wait(1).to({x:-91.8},0).wait(1).to({x:-91.3,y:1454.2},0).wait(1).to({x:-90.8,y:1454.1},0).wait(1).to({x:-90.4},0).wait(1).to({x:-89.9,y:1454},0).wait(1).to({x:-89.4,y:1453.9},0).wait(1).to({x:-88.9},0).wait(1).to({x:-88.4,y:1453.8},0).wait(1).to({x:-88,y:1453.7},0).wait(1).to({x:-87.5},0).wait(1).to({x:-87,y:1453.6},0).wait(1).to({x:-86.5},0).wait(1).to({x:-86,y:1453.5},0).wait(1).to({x:-85.5,y:1453.4},0).wait(1).to({x:-85.1},0).wait(1).to({x:-84.6,y:1453.3},0).wait(1).to({x:-84.1,y:1453.2},0).wait(1).to({x:-83.6},0).wait(1).to({x:-83.1,y:1453.1},0).wait(1).to({x:-82.7},0).wait(1).to({x:-82.2,y:1453},0).wait(1).to({x:-81.7,y:1452.9},0).wait(1).to({x:-81.2},0).wait(1).to({x:-80.7,y:1452.8},0).wait(1).to({x:-80.3,y:1452.7},0).wait(1).to({x:-79.8},0).wait(1).to({x:-79.3,y:1452.6},0).wait(1).to({x:-78.8},0).wait(1).to({x:-78.3,y:1452.5},0).wait(1).to({x:-77.9,y:1452.4},0).wait(1).to({x:-77.4},0).wait(1).to({x:-76.9,y:1452.3},0).wait(1).to({x:-76.4,y:1452.2},0).wait(1).to({x:-75.9},0).wait(1).to({x:-75.4,y:1452.1},0).wait(1).to({x:-75},0).wait(1).to({x:-74.5,y:1452},0).wait(1).to({x:-74,y:1451.9},0).wait(1).to({x:-73.5},0).wait(1).to({x:-73,y:1451.8},0).wait(1).to({x:-72.6,y:1451.7},0).wait(1).to({x:-72.1},0).wait(1).to({x:-71.6,y:1451.6},0).wait(1).to({x:-71.1},0).wait(1).to({x:-70.6,y:1451.5},0).wait(1).to({x:-70.2,y:1451.4},0).wait(1).to({x:-69.7},0).wait(1).to({x:-69.2,y:1451.3},0).wait(1).to({x:-68.7,y:1451.2},0).wait(1).to({x:-68.2},0).wait(1).to({x:-67.8,y:1451.1},0).wait(1).to({x:-67.3},0).wait(1).to({x:-66.8,y:1451},0).wait(1).to({x:-66.3,y:1450.9},0).wait(1).to({x:-65.8},0).wait(1).to({x:-65.3,y:1450.8},0).wait(1).to({x:-64.9,y:1450.7},0).wait(1).to({x:-64.4},0).wait(1).to({x:-63.9,y:1450.6},0).wait(1).to({x:-63.4},0).wait(1).to({x:-62.9,y:1450.5},0).wait(1).to({x:-62.5,y:1450.4},0).wait(1).to({x:-62},0).wait(1).to({x:-61.5,y:1450.3},0).wait(1).to({x:-61,y:1450.2},0).wait(1).to({x:-60.5},0).wait(1).to({x:-60.1,y:1450.1},0).wait(1).to({x:-59.6,y:1450},0).wait(1).to({x:-59.1},0).wait(1).to({x:-58.6,y:1449.9},0).wait(1).to({x:-58.1},0).wait(1).to({x:-57.7,y:1449.8},0).wait(1).to({x:-57.2,y:1449.7},0).wait(1).to({x:-56.7},0).wait(1).to({x:-56.2,y:1449.6},0).wait(1).to({x:-55.7,y:1449.5},0).wait(1).to({x:-55.2},0).wait(1).to({x:-54.8,y:1449.4},0).wait(1).to({x:-54.3},0).wait(1).to({x:-53.8,y:1449.3},0).wait(1).to({x:-53.3,y:1449.2},0).wait(1).to({x:-52.8},0).wait(1).to({x:-52.4,y:1449.1},0).wait(1).to({x:-51.9,y:1449},0).wait(1).to({x:-51.4},0).wait(1).to({x:-50.9,y:1448.9},0).wait(1).to({x:-50.4},0).wait(1).to({x:-50,y:1448.8},0).wait(1).to({x:-49.5,y:1448.7},0).wait(1).to({x:-49},0).wait(1).to({x:-48.5,y:1448.6},0).wait(1).to({x:-48,y:1448.5},0).wait(1).to({x:-47.6},0).wait(1).to({x:-47.1,y:1448.4},0).wait(1).to({x:-46.6},0).wait(1).to({x:-46.1,y:1448.3},0).wait(1).to({x:-45.6,y:1448.2},0).wait(1).to({x:-45.1},0).wait(1).to({x:-44.7,y:1448.1},0).wait(1).to({x:-44.2,y:1448},0).wait(1).to({x:-43.7},0).wait(1).to({x:-43.2,y:1447.9},0).wait(1).to({x:-42.7},0).wait(1).to({x:-42.3,y:1447.8},0).wait(1).to({x:-41.8,y:1447.7},0).wait(1).to({x:-41.3},0).wait(1).to({x:-40.8,y:1447.6},0).wait(1).to({x:-40.3,y:1447.5},0).wait(1).to({x:-39.9},0).wait(1).to({x:-39.4,y:1447.4},0).wait(1).to({x:-38.9},0).wait(1).to({x:-38.4,y:1447.3},0).wait(1).to({x:-37.9,y:1447.2},0).wait(1).to({x:-37.5},0).wait(1).to({x:-37,y:1447.1},0).wait(1).to({x:-36.5,y:1447},0).wait(1).to({x:-36},0).wait(1).to({x:-35.5,y:1446.9},0).wait(1).to({x:-35},0).wait(1).to({x:-34.6,y:1446.8},0).wait(1).to({x:-34.1,y:1446.7},0).wait(1).to({x:-33.6},0).wait(1).to({x:-33.1,y:1446.6},0).wait(1).to({x:-32.6,y:1446.5},0).wait(1).to({x:-32.2},0).wait(1).to({x:-31.7,y:1446.4},0).wait(1).to({x:-31.2,y:1446.3},0).wait(1).to({x:-30.7},0).wait(1).to({x:-30.2,y:1446.2},0).wait(1).to({x:-29.8},0).wait(1).to({x:-29.3,y:1446.1},0).wait(1).to({x:-28.8,y:1446},0).wait(1).to({x:-28.3},0).wait(1).to({x:-27.8,y:1445.9},0).wait(1).to({x:-27.4,y:1445.8},0).wait(1).to({x:-26.9},0).wait(1).to({x:-26.4,y:1445.7},0).wait(1).to({x:-25.9},0).wait(1).to({x:-25.4,y:1445.6},0).wait(1).to({x:-24.9,y:1445.5},0).wait(1).to({x:-24.5},0).wait(1).to({x:-24,y:1445.4},0).wait(1).to({x:-23.5,y:1445.3},0).wait(1).to({x:-23},0).wait(1).to({x:-22.5,y:1445.2},0).wait(1).to({x:-22.1},0).wait(1).to({x:-21.6,y:1445.1},0).wait(1).to({x:-21.1,y:1445},0).wait(1).to({x:-20.6},0).wait(1).to({x:-20.1,y:1444.9},0).wait(1).to({x:-19.7,y:1444.8},0).wait(1).to({x:-19.2},0).wait(1).to({x:-18.7,y:1444.7},0).wait(1).to({x:-18.2},0).wait(1).to({x:-17.7,y:1444.6},0).wait(1).to({x:-17.3,y:1444.5},0).wait(1).to({x:-16.8},0).wait(1).to({x:-16.3,y:1444.4},0).wait(1).to({x:-15.8,y:1444.3},0).wait(1).to({x:-15.3},0).wait(1).to({x:-14.8,y:1444.2},0).wait(1).to({x:-14.4},0).wait(1).to({x:-13.9,y:1444.1},0).wait(1).to({x:-13.4,y:1444},0).wait(1).to({x:-12.9},0).wait(1).to({x:-12.4,y:1443.9},0).wait(1).to({x:-12,y:1443.8},0).wait(1).to({x:-11.5},0).wait(1).to({x:-11,y:1443.7},0).wait(1).to({x:-10.5},0).wait(1).to({x:-10,y:1443.6},0).wait(1).to({x:-9.6,y:1443.5},0).wait(1).to({x:-9.1},0).wait(1).to({x:-8.6,y:1443.4},0).wait(1).to({x:-8.1,y:1443.3},0).wait(1).to({x:-7.6},0).wait(1).to({x:-7.2,y:1443.2},0).wait(1).to({x:-6.7},0).wait(1).to({x:-6.2,y:1443.1},0).wait(1).to({x:-5.7,y:1443},0).wait(1).to({x:-5.2},0).wait(1).to({x:-4.8,y:1442.9},0).wait(1).to({x:-4.3,y:1442.8},0).wait(1).to({x:-3.8},0).wait(1).to({x:-3.3,y:1442.7},0).wait(1).to({x:-2.8,y:1442.6},0).wait(1).to({x:-2.3},0).wait(1).to({x:-1.9,y:1442.5},0).wait(1).to({x:-1.4},0).wait(1).to({x:-0.9,y:1442.4},0).wait(1).to({x:-0.4,y:1442.3},0).wait(1).to({x:0.1},0).wait(1).to({x:0.5,y:1442.2},0).wait(1).to({x:1,y:1442.1},0).wait(1).to({x:1.5},0).wait(1).to({x:2,y:1442},0).wait(1).to({x:2.5},0).wait(1).to({x:2.9,y:1441.9},0).wait(1).to({x:3.4,y:1441.8},0).wait(1).to({x:3.9},0).wait(1).to({x:4.4,y:1441.7},0).wait(1).to({x:4.9,y:1441.6},0).wait(1).to({x:5.3},0).wait(1).to({x:5.8,y:1441.5},0).wait(1).to({x:6.3},0).wait(1).to({x:6.8,y:1441.4},0).wait(1).to({x:7.3,y:1441.3},0).wait(1).to({x:7.8},0).wait(1).to({x:8.2,y:1441.2},0).wait(1).to({x:8.7,y:1441.1},0).wait(1).to({x:9.2},0).wait(1).to({x:9.7,y:1441},0).wait(1).to({x:10.2},0).wait(1).to({x:10.6,y:1440.9},0).wait(1).to({x:11.1,y:1440.8},0).wait(1).to({x:11.6},0).wait(1).to({x:12.1,y:1440.7},0).wait(1).to({x:12.6,y:1440.6},0).wait(1).to({x:13},0).wait(1).to({x:13.5,y:1440.5},0).wait(1).to({x:14},0).wait(1).to({x:14.5,y:1440.4},0).wait(1).to({x:15,y:1440.3},0).wait(1).to({x:15.4},0).wait(1).to({x:15.9,y:1440.2},0).wait(1).to({x:16.4,y:1440.1},0).wait(1).to({x:16.9},0).wait(1).to({x:17.4,y:1440},0).wait(1).to({x:17.9},0).wait(1).to({x:18.3,y:1439.9},0).wait(1).to({x:18.8,y:1439.8},0).wait(1).to({x:19.3},0).wait(1).to({x:19.8,y:1439.7},0).wait(1).to({x:20.3,y:1439.6},0).wait(1).to({x:20.7},0).wait(1).to({x:21.2,y:1439.5},0).wait(1).to({x:21.7,y:1439.4},0).wait(1).to({x:22.2},0).wait(1).to({x:22.7,y:1439.3},0).wait(1).to({x:23.1},0).wait(1).to({x:23.6,y:1439.2},0).wait(1).to({x:24.1,y:1439.1},0).wait(1).to({x:24.6},0).wait(1).to({x:25.1,y:1439},0).wait(1).to({x:25.5,y:1438.9},0).wait(1).to({x:26},0).wait(1).to({x:26.5,y:1438.8},0).wait(1).to({x:27},0).wait(1).to({x:27.5,y:1438.7},0).wait(1).to({x:28,y:1438.6},0).wait(1).to({x:28.4},0).wait(1).to({x:28.9,y:1438.5},0).wait(1).to({x:29.4,y:1438.4},0).wait(1).to({x:29.9},0).wait(1).to({x:30.4,y:1438.3},0).wait(1).to({x:30.8},0).wait(1).to({x:31.3,y:1438.2},0).wait(1).to({x:31.8,y:1438.1},0).wait(1).to({x:32.3},0).wait(1).to({x:32.8,y:1438},0).wait(1).to({x:33.2,y:1437.9},0).wait(1).to({x:33.7},0).wait(1).to({x:34.2,y:1437.8},0).wait(1).to({x:34.7},0).wait(1).to({x:35.2,y:1437.7},0).wait(1).to({x:35.6,y:1437.6},0).wait(1).to({x:36.1},0).wait(1).to({x:36.6,y:1437.5},0).wait(1).to({x:37.1,y:1437.4},0).wait(1).to({x:37.6},0).wait(1).to({x:38.1,y:1437.3},0).wait(1).to({x:38.5},0).wait(1).to({x:39,y:1437.2},0).wait(1).to({x:39.5,y:1437.1},0).wait(1).to({x:40},0).wait(1).to({x:40.5,y:1437},0).wait(1).to({x:40.9,y:1436.9},0).wait(1));

	// back
	this.instance_2 = new lib.dirtlg_01();
	this.instance_2.setTransform(-191.3,269.1,0.505,0.523,0,15.3,0,1277.5,1309.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:1304.8,regY:1316.2,x:-179,y:272.8},0).wait(1).to({x:-179.5},0).wait(1).to({x:-180,y:272.9},0).wait(1).to({x:-180.4},0).wait(1).to({x:-180.9,y:273},0).wait(1).to({x:-181.4,y:273.1},0).wait(1).to({x:-181.9},0).wait(1).to({x:-182.4,y:273.2},0).wait(1).to({x:-182.8,y:273.3},0).wait(1).to({x:-183.3},0).wait(1).to({x:-183.8,y:273.4},0).wait(1).to({x:-184.3},0).wait(1).to({x:-184.8,y:273.5},0).wait(1).to({x:-185.2,y:273.6},0).wait(1).to({x:-185.7},0).wait(1).to({x:-186.2,y:273.7},0).wait(1).to({x:-186.7,y:273.8},0).wait(1).to({x:-187.2},0).wait(1).to({x:-187.7,y:273.9},0).wait(1).to({x:-188.1},0).wait(1).to({x:-188.6,y:274},0).wait(1).to({x:-189.1,y:274.1},0).wait(1).to({x:-189.6},0).wait(1).to({x:-190.1,y:274.2},0).wait(1).to({x:-190.5,y:274.3},0).wait(1).to({x:-191},0).wait(1).to({x:-191.5,y:274.4},0).wait(1).to({x:-192},0).wait(1).to({x:-192.5,y:274.5},0).wait(1).to({x:-192.9,y:274.6},0).wait(1).to({x:-193.4},0).wait(1).to({x:-193.9,y:274.7},0).wait(1).to({x:-194.4,y:274.8},0).wait(1).to({x:-194.9},0).wait(1).to({x:-195.3,y:274.9},0).wait(1).to({x:-195.8},0).wait(1).to({x:-196.3,y:275},0).wait(1).to({x:-196.8,y:275.1},0).wait(1).to({x:-197.3},0).wait(1).to({x:-197.7,y:275.2},0).wait(1).to({x:-198.2,y:275.3},0).wait(1).to({x:-198.7},0).wait(1).to({x:-199.2,y:275.4},0).wait(1).to({x:-199.7,y:275.5},0).wait(1).to({x:-200.2},0).wait(1).to({x:-200.6,y:275.6},0).wait(1).to({x:-201.1},0).wait(1).to({x:-201.6,y:275.7},0).wait(1).to({x:-202.1,y:275.8},0).wait(1).to({x:-202.6},0).wait(1).to({x:-203,y:275.9},0).wait(1).to({x:-203.5,y:276},0).wait(1).to({x:-204},0).wait(1).to({x:-204.5,y:276.1},0).wait(1).to({x:-205},0).wait(1).to({x:-205.4,y:276.2},0).wait(1).to({x:-205.9,y:276.3},0).wait(1).to({x:-206.4},0).wait(1).to({x:-206.9,y:276.4},0).wait(1).to({x:-207.4,y:276.5},0).wait(1).to({x:-207.8},0).wait(1).to({x:-208.3,y:276.6},0).wait(1).to({x:-208.8},0).wait(1).to({x:-209.3,y:276.7},0).wait(1).to({x:-209.8,y:276.8},0).wait(1).to({x:-210.3},0).wait(1).to({x:-210.7,y:276.9},0).wait(1).to({x:-211.2,y:277},0).wait(1).to({x:-211.7},0).wait(1).to({x:-212.2,y:277.1},0).wait(1).to({x:-212.7},0).wait(1).to({x:-213.1,y:277.2},0).wait(1).to({x:-213.6,y:277.3},0).wait(1).to({x:-214.1},0).wait(1).to({x:-214.6,y:277.4},0).wait(1).to({x:-215.1,y:277.5},0).wait(1).to({x:-215.5},0).wait(1).to({x:-216,y:277.6},0).wait(1).to({x:-216.5},0).wait(1).to({x:-217,y:277.7},0).wait(1).to({x:-217.5,y:277.8},0).wait(1).to({x:-217.9},0).wait(1).to({x:-218.4,y:277.9},0).wait(1).to({x:-218.9,y:278},0).wait(1).to({x:-219.4},0).wait(1).to({x:-219.9,y:278.1},0).wait(1).to({x:-220.4},0).wait(1).to({x:-220.8,y:278.2},0).wait(1).to({x:-221.3,y:278.3},0).wait(1).to({x:-221.8},0).wait(1).to({x:-222.3,y:278.4},0).wait(1).to({x:-222.8,y:278.5},0).wait(1).to({x:-223.2},0).wait(1).to({x:-223.7,y:278.6},0).wait(1).to({x:-224.2},0).wait(1).to({x:-224.7,y:278.7},0).wait(1).to({x:-225.2,y:278.8},0).wait(1).to({x:-225.6},0).wait(1).to({x:-226.1,y:278.9},0).wait(1).to({x:-226.6,y:279},0).wait(1).to({x:-227.1},0).wait(1).to({x:-227.6,y:279.1},0).wait(1).to({x:-228,y:279.2},0).wait(1).to({x:-228.5},0).wait(1).to({x:-229,y:279.3},0).wait(1).to({x:-229.5},0).wait(1).to({x:-230,y:279.4},0).wait(1).to({x:-230.5,y:279.5},0).wait(1).to({x:-230.9},0).wait(1).to({x:-231.4,y:279.6},0).wait(1).to({x:-231.9,y:279.7},0).wait(1).to({x:-232.4},0).wait(1).to({x:-232.9,y:279.8},0).wait(1).to({x:-233.3},0).wait(1).to({x:-233.8,y:279.9},0).wait(1).to({x:-234.3,y:280},0).wait(1).to({x:-234.8},0).wait(1).to({x:-235.3,y:280.1},0).wait(1).to({x:-235.7,y:280.2},0).wait(1).to({x:-236.2},0).wait(1).to({x:-236.7,y:280.3},0).wait(1).to({x:-237.2},0).wait(1).to({x:-237.7,y:280.4},0).wait(1).to({x:-238.1,y:280.5},0).wait(1).to({x:-238.6},0).wait(1).to({x:-239.1,y:280.6},0).wait(1).to({x:-239.6,y:280.7},0).wait(1).to({x:-240.1},0).wait(1).to({x:-240.6,y:280.8},0).wait(1).to({x:-241},0).wait(1).to({x:-241.5,y:280.9},0).wait(1).to({x:-242,y:281},0).wait(1).to({x:-242.5},0).wait(1).to({x:-243,y:281.1},0).wait(1).to({x:-243.4,y:281.2},0).wait(1).to({x:-243.9},0).wait(1).to({x:-244.4,y:281.3},0).wait(1).to({x:-244.9},0).wait(1).to({x:-245.4,y:281.4},0).wait(1).to({x:-245.8,y:281.5},0).wait(1).to({x:-246.3},0).wait(1).to({x:-246.8,y:281.6},0).wait(1).to({x:-247.3,y:281.7},0).wait(1).to({x:-247.8},0).wait(1).to({x:-248.2,y:281.8},0).wait(1).to({x:-248.7},0).wait(1).to({x:-249.2,y:281.9},0).wait(1).to({x:-249.7,y:282},0).wait(1).to({x:-250.2},0).wait(1).to({x:-250.7,y:282.1},0).wait(1).to({x:-251.1,y:282.2},0).wait(1).to({x:-251.6},0).wait(1).to({x:-252.1,y:282.3},0).wait(1).to({x:-252.6},0).wait(1).to({x:-253.1,y:282.4},0).wait(1).to({x:-253.5,y:282.5},0).wait(1).to({x:-254},0).wait(1).to({x:-254.5,y:282.6},0).wait(1).to({x:-255,y:282.7},0).wait(1).to({x:-255.5},0).wait(1).to({x:-255.9,y:282.8},0).wait(1).to({x:-256.4,y:282.9},0).wait(1).to({x:-256.9},0).wait(1).to({x:-257.4,y:283},0).wait(1).to({x:-257.9},0).wait(1).to({x:-258.3,y:283.1},0).wait(1).to({x:-258.8,y:283.2},0).wait(1).to({x:-259.3},0).wait(1).to({x:-259.8,y:283.3},0).wait(1).to({x:-260.3,y:283.4},0).wait(1).to({x:-260.8},0).wait(1).to({x:-261.2,y:283.5},0).wait(1).to({x:-261.7},0).wait(1).to({x:-262.2,y:283.6},0).wait(1).to({x:-262.7,y:283.7},0).wait(1).to({x:-263.2},0).wait(1).to({x:-263.6,y:283.8},0).wait(1).to({x:-264.1,y:283.9},0).wait(1).to({x:-264.6},0).wait(1).to({x:-265.1,y:284},0).wait(1).to({x:-265.6},0).wait(1).to({x:-266,y:284.1},0).wait(1).to({x:-266.5,y:284.2},0).wait(1).to({x:-267},0).wait(1).to({x:-267.5,y:284.3},0).wait(1).to({x:-268,y:284.4},0).wait(1).to({x:-268.4},0).wait(1).to({x:-268.9,y:284.5},0).wait(1).to({x:-269.4},0).wait(1).to({x:-269.9,y:284.6},0).wait(1).to({x:-270.4,y:284.7},0).wait(1).to({x:-270.8},0).wait(1).to({x:-271.3,y:284.8},0).wait(1).to({x:-271.8,y:284.9},0).wait(1).to({x:-272.3},0).wait(1).to({x:-272.8,y:285},0).wait(1).to({x:-273.3},0).wait(1).to({x:-273.7,y:285.1},0).wait(1).to({x:-274.2,y:285.2},0).wait(1).to({x:-274.7},0).wait(1).to({x:-275.2,y:285.3},0).wait(1).to({x:-275.7,y:285.4},0).wait(1).to({x:-276.1},0).wait(1).to({x:-276.6,y:285.5},0).wait(1).to({x:-277.1},0).wait(1).to({x:-277.6,y:285.6},0).wait(1).to({x:-278.1,y:285.7},0).wait(1).to({x:-278.5},0).wait(1).to({x:-279,y:285.8},0).wait(1).to({x:-279.5,y:285.9},0).wait(1).to({x:-280},0).wait(1).to({x:-280.5,y:286},0).wait(1).to({x:-280.9},0).wait(1).to({x:-281.4,y:286.1},0).wait(1).to({x:-281.9,y:286.2},0).wait(1).to({x:-282.4},0).wait(1).to({x:-282.9,y:286.3},0).wait(1).to({x:-283.4,y:286.4},0).wait(1).to({x:-283.8},0).wait(1).to({x:-284.3,y:286.5},0).wait(1).to({x:-284.8,y:286.6},0).wait(1).to({x:-285.3},0).wait(1).to({x:-285.8,y:286.7},0).wait(1).to({x:-286.2},0).wait(1).to({x:-286.7,y:286.8},0).wait(1).to({x:-287.2,y:286.9},0).wait(1).to({x:-287.7},0).wait(1).to({x:-288.2,y:287},0).wait(1).to({x:-288.6,y:287.1},0).wait(1).to({x:-289.1},0).wait(1).to({x:-289.6,y:287.2},0).wait(1).to({x:-290.1},0).wait(1).to({x:-290.6,y:287.3},0).wait(1).to({x:-291,y:287.4},0).wait(1).to({x:-291.5},0).wait(1).to({x:-292,y:287.5},0).wait(1).to({x:-292.5,y:287.6},0).wait(1).to({x:-293},0).wait(1).to({x:-293.5,y:287.7},0).wait(1).to({x:-293.9},0).wait(1).to({x:-294.4,y:287.8},0).wait(1).to({x:-294.9,y:287.9},0).wait(1).to({x:-295.4},0).wait(1).to({x:-295.9,y:288},0).wait(1).to({x:-296.3,y:288.1},0).wait(1).to({x:-296.8},0).wait(1).to({x:-297.3,y:288.2},0).wait(1).to({x:-297.8},0).wait(1).to({x:-298.3,y:288.3},0).wait(1).to({x:-298.7,y:288.4},0).wait(1).to({x:-299.2},0).wait(1).to({x:-299.7,y:288.5},0).wait(1).to({x:-300.2,y:288.6},0).wait(1).to({x:-300.7},0).wait(1).to({x:-301.1,y:288.7},0).wait(1).to({x:-301.6},0).wait(1).to({x:-302.1,y:288.8},0).wait(1).to({x:-302.6,y:288.9},0).wait(1).to({x:-303.1},0).wait(1).to({x:-303.6,y:289},0).wait(1).to({x:-304,y:289.1},0).wait(1).to({x:-304.5},0).wait(1).to({x:-305,y:289.2},0).wait(1).to({x:-305.5},0).wait(1).to({x:-306,y:289.3},0).wait(1).to({x:-306.4,y:289.4},0).wait(1).to({x:-306.9},0).wait(1).to({x:-307.4,y:289.5},0).wait(1).to({x:-307.9,y:289.6},0).wait(1).to({x:-308.4},0).wait(1).to({x:-308.8,y:289.7},0).wait(1).to({x:-309.3,y:289.8},0).wait(1).to({x:-309.8},0).wait(1).to({x:-310.3,y:289.9},0).wait(1).to({x:-310.8},0).wait(1).to({x:-311.2,y:290},0).wait(1).to({x:-311.7,y:290.1},0).wait(1).to({x:-312.2},0).wait(1).to({x:-312.7,y:290.2},0).wait(1).to({x:-313.2,y:290.3},0).wait(1).to({x:-313.7},0).wait(1).to({x:-314.1,y:290.4},0).wait(1).to({x:-314.6},0).wait(1).to({x:-315.1,y:290.5},0).wait(1).to({x:-315.6,y:290.6},0).wait(1).to({x:-316.1},0).wait(1).to({x:-316.5,y:290.7},0).wait(1).to({x:-317,y:290.8},0).wait(1).to({x:-317.5},0).wait(1).to({x:-318,y:290.9},0).wait(1).to({x:-318.5},0).wait(1).to({x:-318.9,y:291},0).wait(1).to({x:-319.4,y:291.1},0).wait(1).to({x:-319.9},0).wait(1).to({x:-320.4,y:291.2},0).wait(1).to({x:-320.9,y:291.3},0).wait(1).to({x:-321.3},0).wait(1).to({x:-321.8,y:291.4},0).wait(1).to({x:-322.3},0).wait(1).to({x:-322.8,y:291.5},0).wait(1).to({x:-323.3,y:291.6},0).wait(1).to({x:-323.8},0).wait(1).to({x:-324.2,y:291.7},0).wait(1).to({x:-324.7,y:291.8},0).wait(1).to({x:-325.2},0).wait(1).to({x:-325.7,y:291.9},0).wait(1).to({x:-326.2},0).wait(1).to({x:-326.6,y:292},0).wait(1).to({x:-327.1,y:292.1},0).wait(1).to({x:-327.6},0).wait(1).to({x:-328.1,y:292.2},0).wait(1).to({x:-328.6,y:292.3},0).wait(1).to({x:-329},0).wait(1).to({x:-329.5,y:292.4},0).wait(1).to({x:-330},0).wait(1).to({x:-330.5,y:292.5},0).wait(1).to({x:-331,y:292.6},0).wait(1).to({x:-331.4},0).wait(1).to({x:-331.9,y:292.7},0).wait(1).to({x:-332.4,y:292.8},0).wait(1).to({x:-332.9},0).wait(1).to({x:-333.4,y:292.9},0).wait(1).to({x:-333.9},0).wait(1).to({x:-334.3,y:293},0).wait(1).to({x:-334.8,y:293.1},0).wait(1).to({x:-335.3},0).wait(1).to({x:-335.8,y:293.2},0).wait(1).to({x:-336.3,y:293.3},0).wait(1).to({x:-336.7},0).wait(1).to({x:-337.2,y:293.4},0).wait(1).to({x:-337.7,y:293.5},0).wait(1).to({x:-338.2},0).wait(1).to({x:-338.7,y:293.6},0).wait(1).to({x:-339.1},0).wait(1).to({x:-339.6,y:293.7},0).wait(1).to({x:-340.1,y:293.8},0).wait(1).to({x:-340.6},0).wait(1).to({x:-341.1,y:293.9},0).wait(1).to({x:-341.5,y:294},0).wait(1).to({x:-342},0).wait(1).to({x:-342.5,y:294.1},0).wait(1).to({x:-343},0).wait(1).to({x:-343.5,y:294.2},0).wait(1).to({x:-344,y:294.3},0).wait(1).to({x:-344.4},0).wait(1).to({x:-344.9,y:294.4},0).wait(1).to({x:-345.4,y:294.5},0).wait(1).to({x:-345.9},0).wait(1).to({x:-346.4,y:294.6},0).wait(1).to({x:-346.8},0).wait(1).to({x:-347.3,y:294.7},0).wait(1).to({x:-347.8,y:294.8},0).wait(1).to({x:-348.3},0).wait(1).to({x:-348.8,y:294.9},0).wait(1).to({x:-349.2,y:295},0).wait(1).to({x:-349.7},0).wait(1).to({x:-350.2,y:295.1},0).wait(1).to({x:-350.7},0).wait(1).to({x:-351.2,y:295.2},0).wait(1).to({x:-351.6,y:295.3},0).wait(1).to({x:-352.1},0).wait(1).to({x:-352.6,y:295.4},0).wait(1).to({x:-353.1,y:295.5},0).wait(1).to({x:-353.6},0).wait(1).to({x:-354,y:295.6},0).wait(1).to({x:-354.5},0).wait(1).to({x:-355,y:295.7},0).wait(1).to({x:-355.5,y:295.8},0).wait(1).to({x:-356},0).wait(1).to({x:-356.5,y:295.9},0).wait(1).to({x:-356.9,y:296},0).wait(1).to({x:-357.4},0).wait(1).to({x:-357.9,y:296.1},0).wait(1).to({x:-358.4},0).wait(1).to({x:-358.9,y:296.2},0).wait(1).to({x:-359.3,y:296.3},0).wait(1).to({x:-359.8},0).wait(1).to({x:-360.3,y:296.4},0).wait(1).to({x:-360.8,y:296.5},0).wait(1).to({x:-361.3},0).wait(1).to({x:-361.7,y:296.6},0).wait(1).to({x:-362.2},0).wait(1).to({x:-362.7,y:296.7},0).wait(1).to({x:-363.2,y:296.8},0).wait(1).to({x:-363.7},0).wait(1).to({x:-364.1,y:296.9},0).wait(1).to({x:-364.6,y:297},0).wait(1).to({x:-365.1},0).wait(1).to({x:-365.6,y:297.1},0).wait(1).to({x:-366.1,y:297.2},0).wait(1).to({x:-366.6},0).wait(1).to({x:-367,y:297.3},0).wait(1).to({x:-367.5},0).wait(1).to({x:-368,y:297.4},0).wait(1).to({x:-368.5,y:297.5},0).wait(1).to({x:-369},0).wait(1).to({x:-369.4,y:297.6},0).wait(1).to({x:-369.9,y:297.7},0).wait(1).to({x:-370.4},0).wait(1).to({x:-370.9,y:297.8},0).wait(1).to({x:-371.4},0).wait(1).to({x:-371.8,y:297.9},0).wait(1).to({x:-372.3,y:298},0).wait(1).to({x:-372.8},0).wait(1).to({x:-373.3,y:298.1},0).wait(1).to({x:-373.8,y:298.2},0).wait(1).to({x:-374.2},0).wait(1).to({x:-374.7,y:298.3},0).wait(1).to({x:-375.2},0).wait(1).to({x:-375.7,y:298.4},0).wait(1).to({x:-376.2,y:298.5},0).wait(1).to({x:-376.7},0).wait(1).to({x:-377.1,y:298.6},0).wait(1).to({x:-377.6,y:298.7},0).wait(1).to({x:-378.1},0).wait(1).to({x:-378.6,y:298.8},0).wait(1).to({x:-379.1},0).wait(1).to({x:-379.5,y:298.9},0).wait(1).to({x:-380,y:299},0).wait(1).to({x:-380.5},0).wait(1).to({x:-381,y:299.1},0).wait(1).to({x:-381.5,y:299.2},0).wait(1).to({x:-381.9},0).wait(1).to({x:-382.4,y:299.3},0).wait(1).to({x:-382.9},0).wait(1).to({x:-383.4,y:299.4},0).wait(1).to({x:-383.9,y:299.5},0).wait(1).to({x:-384.3},0).wait(1).to({x:-384.8,y:299.6},0).wait(1).to({x:-385.3,y:299.7},0).wait(1).to({x:-385.8},0).wait(1).to({x:-386.3,y:299.8},0).wait(1).to({x:-386.8},0).wait(1).to({x:-387.2,y:299.9},0).wait(1).to({x:-387.7,y:300},0).wait(1).to({x:-388.2},0).wait(1).to({x:-388.7,y:300.1},0).wait(1).to({x:-389.2,y:300.2},0).wait(1).to({x:-389.6},0).wait(1).to({x:-390.1,y:300.3},0).wait(1).to({x:-390.6},0).wait(1).to({x:-391.1,y:300.4},0).wait(1).to({x:-391.6,y:300.5},0).wait(1).to({x:-392},0).wait(1).to({x:-392.5,y:300.6},0).wait(1).to({x:-393,y:300.7},0).wait(1).to({x:-393.5},0).wait(1).to({x:-394,y:300.8},0).wait(1).to({x:-394.4,y:300.9},0).wait(1).to({x:-394.9},0).wait(1).to({x:-395.4,y:301},0).wait(1).to({x:-395.9},0).wait(1).to({x:-396.4,y:301.1},0).wait(1).to({x:-396.9,y:301.2},0).wait(1).to({x:-397.3},0).wait(1).to({x:-397.8,y:301.3},0).wait(1).to({x:-398.3,y:301.4},0).wait(1).to({x:-398.8},0).wait(1).to({x:-399.3,y:301.5},0).wait(1).to({x:-399.7},0).wait(1).to({x:-400.2,y:301.6},0).wait(1).to({x:-400.7,y:301.7},0).wait(1).to({x:-401.2},0).wait(1).to({x:-401.7,y:301.8},0).wait(1).to({x:-402.1,y:301.9},0).wait(1).to({x:-402.6},0).wait(1).to({x:-403.1,y:302},0).wait(1).to({x:-403.6},0).wait(1).to({x:-404.1,y:302.1},0).wait(1).to({x:-404.5,y:302.2},0).wait(1).to({x:-405},0).wait(1).to({x:-405.5,y:302.3},0).wait(1).to({x:-406,y:302.4},0).wait(1).to({x:-406.5},0).wait(1).to({x:-407,y:302.5},0).wait(1).to({x:-407.4},0).wait(1).to({x:-407.9,y:302.6},0).wait(1).to({x:-408.4,y:302.7},0).wait(1).to({x:-408.9},0).wait(1).to({x:-409.4,y:302.8},0).wait(1).to({x:-409.8,y:302.9},0).wait(1).to({x:-410.3},0).wait(1).to({x:-410.8,y:303},0).wait(1).to({x:-411.3},0).wait(1).to({x:-411.8,y:303.1},0).wait(1).to({x:-412.2,y:303.2},0).wait(1).to({x:-412.7},0).wait(1).to({x:-413.2,y:303.3},0).wait(1).to({x:-413.7,y:303.4},0).wait(1).to({x:-414.2},0).wait(1).to({x:-414.6,y:303.5},0).wait(1).to({x:-415.1},0).wait(1).to({x:-415.6,y:303.6},0).wait(1).to({x:-416.1,y:303.7},0).wait(1).to({x:-416.6},0).wait(1).to({x:-417.1,y:303.8},0).wait(1).to({x:-417.5,y:303.9},0).wait(1).to({x:-418},0).wait(1).to({x:-418.5,y:304},0).wait(1).to({x:-419},0).wait(1).to({x:-419.5,y:304.1},0).wait(1).to({x:-419.9,y:304.2},0).wait(1).to({x:-420.4},0).wait(1).to({x:-420.9,y:304.3},0).wait(1).to({x:-421.4,y:304.4},0).wait(1).to({x:-421.9},0).wait(1).to({x:-422.3,y:304.5},0).wait(1).to({x:-422.8,y:304.6},0).wait(1).to({x:-423.3},0).wait(1).to({x:-423.8,y:304.7},0).wait(1).to({x:-424.3},0).wait(1).to({x:-424.7,y:304.8},0).wait(1).to({x:-425.2,y:304.9},0).wait(1).to({x:-425.7},0).wait(1).to({x:-426.2,y:305},0).wait(1).to({x:-426.7,y:305.1},0).wait(1).to({x:-427.1},0).wait(1).to({x:-427.6,y:305.2},0).wait(1).to({x:-428.1},0).wait(1).to({x:-428.6,y:305.3},0).wait(1).to({x:-429.1,y:305.4},0).wait(1).to({x:-429.6},0).wait(1).to({x:-430,y:305.5},0).wait(1).to({x:-430.5,y:305.6},0).wait(1).to({x:-431},0).wait(1).to({x:-431.5,y:305.7},0).wait(1).to({x:-432},0).wait(1).to({x:-432.4,y:305.8},0).wait(1).to({x:-432.9,y:305.9},0).wait(1).to({x:-433.4},0).wait(1).to({x:-433.9,y:306},0).wait(1).to({x:-434.4,y:306.1},0).wait(1).to({x:-434.8},0).wait(1).to({x:-435.3,y:306.2},0).wait(1).to({x:-435.8},0).wait(1).to({x:-436.3,y:306.3},0).wait(1).to({x:-436.8,y:306.4},0).wait(1).to({x:-437.2},0).wait(1).to({x:-437.7,y:306.5},0).wait(1).to({x:-438.2,y:306.6},0).wait(1).to({x:-438.7},0).wait(1).to({x:-439.2,y:306.7},0).wait(1).to({x:-439.7},0).wait(1).to({x:-440.1,y:306.8},0).wait(1).to({x:-440.6,y:306.9},0).wait(1).to({x:-441.1},0).wait(1).to({x:-441.6,y:307},0).wait(1).to({x:-442.1,y:307.1},0).wait(1).to({x:-442.5},0).wait(1).to({x:-443,y:307.2},0).wait(1).to({x:-443.5},0).wait(1).to({x:-444,y:307.3},0).wait(1).to({x:-444.5,y:307.4},0).wait(1).to({x:-444.9},0).wait(1).to({x:-445.4,y:307.5},0).wait(1).to({x:-445.9,y:307.6},0).wait(1).to({x:-446.4},0).wait(1).to({x:-446.9,y:307.7},0).wait(1).to({x:-447.3,y:307.8},0).wait(1).to({x:-447.8},0).wait(1).to({x:-448.3,y:307.9},0).wait(1).to({x:-448.8},0).wait(1).to({x:-449.3,y:308},0).wait(1).to({x:-449.8,y:308.1},0).wait(1).to({x:-450.2},0).wait(1).to({x:-450.7,y:308.2},0).wait(1).to({x:-451.2,y:308.3},0).wait(1).to({x:-451.7},0).wait(1).to({x:-452.2,y:308.4},0).wait(1).to({x:-452.6},0).wait(1).to({x:-453.1,y:308.5},0).wait(1).to({x:-453.6,y:308.6},0).wait(1).to({x:-454.1},0).wait(1).to({x:-454.6,y:308.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2349.9,-694.6,3011.4,3082.9);


(lib.foot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.musselfoot();
	this.instance.setTransform(376,213.6,1,1,0,0,0,375.9,213.5);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,775,448);


(lib.InnerShelllowerFiltration_mc05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hole in
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#934511").s().p("AgOBzQgWgDgLgkQgKgkAGguQAHgwAUgfQAUggATADQAWADALAkQAKAkgGAuQgHAwgTAgQgTAdgSAAIgDgBg");
	this.shape.setTransform(1725.8,821.6,1.159,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// hole out
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#934511").s().p("AgRAxQgLgTgCgcQgCgaAIgVQAIgUANgBQALgBALATQAKATACAcQADAagIAVQgIAUgNABIgCAAQgKAAgKgSg");
	this.shape_1.setTransform(1727.8,789.5,1,1.333);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// LabialPalp
	this.instance = new lib.LabialPalp();
	this.instance.setTransform(1076,820.1,1,1,0,0,0,19,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// adductorMuscle_Posterior
	this.instance_1 = new lib.adductorMuscle_Posterior();
	this.instance_1.setTransform(1587.9,744.9,1,1,0,0,0,36.9,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// foot
	this.instance_2 = new lib.foot_1();
	this.instance_2.setTransform(1355,868.8,1,1,0,0,0,376,213.5);
	this.instance_2.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// adductorMuscle_Anterior
	this.instance_3 = new lib.adductorMuscle_Anterior();
	this.instance_3.setTransform(1098.3,730.7,1,1,-24.9,0,0,34.6,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// stomach copy
	this.instance_4 = new lib.stomachcopy();
	this.instance_4.setTransform(1199.9,794.6,1,1,0,0,0,124.5,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// intestine
	this.instance_5 = new lib.intestine();
	this.instance_5.setTransform(1508.2,785.7,1,1,0,0,0,219.1,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// gills-top
	this.instance_6 = new lib.gillstop();
	this.instance_6.setTransform(1360,832.5,1,1,0,0,0,298.8,79.5);
	this.instance_6.shadow = new cjs.Shadow("rgba(198,100,34,0.878)",1,5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// gills-btm
	this.instance_7 = new lib.gillsbtm();
	this.instance_7.setTransform(1355.3,847.7,1,1,0,0,0,299.1,71.2);
	this.instance_7.shadow = new cjs.Shadow("rgba(198,100,34,0.878)",1,5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// v
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#632E1C","#6C3822","#835234","#A87C50","#DCB677","#F6D38A","#F8D5AB"],[0,0.098,0.267,0.482,0.733,0.847,0.969],-72.3,3.8,70.4,-6.7).s().p("AoJGsQg0gag8gvQhAgwgGgDQBGhTgBhlQgBgsgfh5QgZhhASg0QAahMB2g3QEJh6CRgUQBygPA2AxQAUASASAgIAeA2QAmA+BDAFQBqAJCuBPQB9A5BMAyQg9AYgFA/QgDAgATBkQiUgMjkBMQjYBIkQCTQhFAlhKAAQhQAAhXgsg");
	this.shape_2.setTransform(1657.9,816.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// mantel-lower
	this.instance_8 = new lib.mantellower();
	this.instance_8.setTransform(1378,816.7,1,1,0,0,0,344.5,186.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// lower shell
	this.instance_9 = new lib.innerShellupperEdge();
	this.instance_9.setTransform(1111.4,585.3);

	this.instance_10 = new lib.innerShell();
	this.instance_10.setTransform(979,592.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(971,585.3,779,510);


(lib.InnerShelllowerFiltration_mc04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// water flow arrow02
	this.instance = new lib.arrow();
	this.instance.setTransform(1618.9,686.9,0.365,0.525,0,-123.6,71.9,73.5,49.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:152.3,regY:65.5,scaleX:0.37,scaleY:0.53,skewX:-123,skewY:71.7,x:1643.9,y:717.3,alpha:0.25},0).wait(1).to({scaleX:0.38,skewX:-122.5,skewY:71.5,x:1652.4,y:725.6,alpha:0.5},0).wait(1).to({scaleX:0.39,skewX:-121.9,skewY:71.2,x:1660.2,y:734.7,alpha:0.75},0).wait(1).to({scaleX:0.4,scaleY:0.53,skewX:-121.4,skewY:71,x:1666.5,y:744.8,alpha:1},0).wait(1).to({scaleX:0.4,skewX:-126.2,skewY:65.4,x:1676.2,y:754.1},0).wait(1).to({scaleX:0.41,skewX:-131,skewY:59.7,x:1687.6,y:761.7},0).wait(1).to({scaleX:0.42,skewX:-135.8,skewY:54.1,x:1699.6,y:768.2},0).wait(1).to({scaleX:0.42,scaleY:0.52,skewX:-140.7,skewY:48.5,x:1712.3,y:773.4},0).wait(1).to({scaleX:0.43,skewX:-145.5,skewY:42.9,x:1726.7,y:775.2},0).wait(1).to({scaleX:0.44,skewX:-150.3,skewY:37.2,x:1740.3,y:778.2},0).wait(1).to({scaleX:0.45,scaleY:0.52,skewX:-155.1,skewY:31.6,x:1754.2,y:779.6},0).wait(1).to({scaleX:0.46,scaleY:0.54,skewX:-174.1,skewY:11.9,x:1770.8,y:781.4},0).wait(1).to({scaleX:0.48,scaleY:0.55,skewX:-193.1,skewY:-7.8,x:1776.9,y:768.9},0).wait(1).to({scaleX:0.5,scaleY:0.57,skewX:-212,skewY:-27.5,x:1774.4,y:739.4},0).wait(1).to({scaleX:0.52,scaleY:0.58,skewX:-231,skewY:-47.2,x:1765.7,y:712.9},0).wait(1).to({scaleX:0.54,scaleY:0.6,skewX:-250,skewY:-67,x:1753.6,y:690.4},0).wait(1).to({skewX:-255.3,skewY:-72.2,x:1748.5,y:640.8,alpha:0.75},0).wait(1).to({skewX:-260.5,skewY:-77.5,x:1742,y:591.6,alpha:0.5},0).wait(1).to({skewX:-265.8,skewY:-82.8,x:1735.3,y:542.7,alpha:0.25},0).wait(1).to({skewX:-271.1,skewY:-88.1,x:1729.7,y:494.2,alpha:0},0).to({_off:true},1).wait(2).to({_off:false,regX:73.5,regY:49.4,scaleX:0.37,scaleY:0.53,skewX:-123.6,skewY:71.9,x:1607.6,y:707.7},0).wait(1).to({regX:152.3,regY:65.5,scaleX:0.37,scaleY:0.53,skewX:-123,skewY:71.7,x:1632.6,y:738.1,alpha:0.25},0).wait(1).to({scaleX:0.38,skewX:-122.5,skewY:71.5,x:1641.2,y:746.4,alpha:0.5},0).wait(1).to({scaleX:0.39,skewX:-121.9,skewY:71.2,x:1648.9,y:755.5,alpha:0.75},0).wait(1).to({scaleX:0.4,scaleY:0.53,skewX:-121.4,skewY:71,x:1655.2,y:765.6,alpha:1},0).wait(1).to({scaleX:0.4,skewX:-126.2,skewY:65.4,x:1665,y:774.9},0).wait(1).to({scaleX:0.41,skewX:-131,skewY:59.7,x:1676.4,y:782.5},0).wait(1).to({scaleX:0.42,skewX:-135.8,skewY:54.1,x:1688.4,y:789},0).wait(1).to({scaleX:0.42,scaleY:0.52,skewX:-140.7,skewY:48.5,x:1701.1,y:794.2},0).wait(1).to({scaleX:0.43,skewX:-145.5,skewY:42.9,x:1715.4,y:796},0).wait(1).to({scaleX:0.44,skewX:-150.3,skewY:37.2,x:1729,y:799},0).wait(1).to({scaleX:0.45,scaleY:0.52,skewX:-155.1,skewY:31.6,x:1742.9,y:800.4},0).wait(1).to({scaleX:0.46,scaleY:0.54,skewX:-174.1,skewY:11.9,x:1759.5,y:802.2},0).wait(1).to({scaleX:0.48,scaleY:0.55,skewX:-193.1,skewY:-7.8,x:1765.7,y:789.7},0).wait(1).to({scaleX:0.5,scaleY:0.57,skewX:-212,skewY:-27.5,x:1763.1,y:760.2},0).wait(1).to({scaleX:0.52,scaleY:0.58,skewX:-231,skewY:-47.2,x:1754.4,y:733.7},0).wait(1).to({scaleX:0.54,scaleY:0.6,skewX:-250,skewY:-67,x:1742.3,y:711.2},0).wait(1).to({skewX:-255.3,skewY:-72.2,x:1737.2,y:661.6,alpha:0.75},0).wait(1).to({skewX:-260.5,skewY:-77.5,x:1730.7,y:612.4,alpha:0.5},0).wait(1).to({skewX:-265.8,skewY:-82.8,x:1724.1,y:563.5,alpha:0.25},0).wait(1).to({skewX:-271.1,skewY:-88.1,x:1718.5,y:515,alpha:0},0).to({_off:true},1).wait(2).to({_off:false,regX:73.5,regY:49.4,scaleX:0.37,scaleY:0.53,skewX:-123.6,skewY:71.9,x:1607.6,y:707.7},0).wait(1).to({regX:152.3,regY:65.5,scaleX:0.37,scaleY:0.53,skewX:-123,skewY:71.7,x:1632.6,y:738.1,alpha:0.25},0).wait(1).to({scaleX:0.38,skewX:-122.5,skewY:71.5,x:1641.2,y:746.4,alpha:0.5},0).wait(1).to({scaleX:0.39,skewX:-121.9,skewY:71.2,x:1648.9,y:755.5,alpha:0.75},0).wait(1).to({scaleX:0.4,scaleY:0.53,skewX:-121.4,skewY:71,x:1655.2,y:765.6,alpha:1},0).wait(1).to({scaleX:0.4,skewX:-126.2,skewY:65.4,x:1665,y:774.9},0).wait(1).to({scaleX:0.41,skewX:-131,skewY:59.7,x:1676.4,y:782.5},0).wait(1).to({scaleX:0.42,skewX:-135.8,skewY:54.1,x:1688.4,y:789},0).wait(1).to({scaleX:0.42,scaleY:0.52,skewX:-140.7,skewY:48.5,x:1701.1,y:794.2},0).wait(1).to({scaleX:0.43,skewX:-145.5,skewY:42.9,x:1715.4,y:796},0).wait(1).to({scaleX:0.44,skewX:-150.3,skewY:37.2,x:1729,y:799},0).wait(1).to({scaleX:0.45,scaleY:0.52,skewX:-155.1,skewY:31.6,x:1742.9,y:800.4},0).wait(1).to({scaleX:0.46,scaleY:0.54,skewX:-174.1,skewY:11.9,x:1759.5,y:802.2},0).wait(1).to({scaleX:0.48,scaleY:0.55,skewX:-193.1,skewY:-7.8,x:1765.7,y:789.7},0).wait(1).to({scaleX:0.5,scaleY:0.57,skewX:-212,skewY:-27.5,x:1763.1,y:760.2},0).wait(1).to({scaleX:0.52,scaleY:0.58,skewX:-231,skewY:-47.2,x:1754.4,y:733.7},0).wait(1).to({scaleX:0.54,scaleY:0.6,skewX:-250,skewY:-67,x:1742.3,y:711.2},0).wait(1).to({skewX:-255.3,skewY:-72.2,x:1737.2,y:661.6,alpha:0.75},0).wait(1).to({skewX:-260.5,skewY:-77.5,x:1730.7,y:612.4,alpha:0.5},0).wait(1).to({skewX:-265.8,skewY:-82.8,x:1724.1,y:563.5,alpha:0.25},0).wait(1).to({skewX:-271.1,skewY:-88.1,x:1718.5,y:515,alpha:0},0).to({_off:true},1).wait(2));

	// hole in
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#934511").s().p("AgOBzQgWgDgLgkQgKgkAGguQAHgwAUgfQAUggATADQAWADALAkQAKAkgGAuQgHAwgTAgQgTAdgSAAIgDgBg");
	this.shape.setTransform(1725.8,821.6,1.159,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(69));

	// hole out
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#934511").s().p("AgRAxQgLgTgCgcQgCgaAIgVQAIgUANgBQALgBALATQAKATACAcQADAagIAVQgIAUgNABIgCAAQgKAAgKgSg");
	this.shape_1.setTransform(1727.8,789.5,1,1.333);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(69));

	// LabialPalp
	this.instance_1 = new lib.LabialPalp();
	this.instance_1.setTransform(1076,820.1,1,1,0,0,0,19,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69));

	// adductorMuscle_Posterior
	this.instance_2 = new lib.adductorMuscle_Posterior();
	this.instance_2.setTransform(1587.9,744.9,1,1,0,0,0,36.9,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69));

	// foot
	this.instance_3 = new lib.foot_1();
	this.instance_3.setTransform(1355,868.8,1,1,0,0,0,376,213.5);
	this.instance_3.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:376.7,regY:213.3,x:1355.7,y:868.6},0).wait(68));

	// adductorMuscle_Anterior
	this.instance_4 = new lib.adductorMuscle_Anterior();
	this.instance_4.setTransform(1098.3,730.7,1,1,-24.9,0,0,34.6,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

	// dirt01
	this.instance_5 = new lib.dirt01();
	this.instance_5.setTransform(1374.5,821.2,2.375,1.156,0,63.4,71.2,6.5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:7.5,regY:6.2,scaleX:2.38,scaleY:1.16,skewX:66.4,skewY:74.3,x:1364.9,y:811.4},0).wait(1).to({skewX:69.5,skewY:77.4,x:1358.4,y:797.4},0).wait(1).to({skewX:72.6,skewY:80.5,x:1351.8,y:783.5},0).wait(1).to({skewX:75.7,skewY:83.6,x:1345.3,y:769.4},0).wait(1).to({skewX:78.8,skewY:86.7,x:1338.8,y:755.4},0).wait(1).to({skewX:93.5,skewY:101.4,x:1338,y:736.1},0).wait(1).to({skewX:108.2,skewY:116.1,x:1341.6,y:717.2},0).wait(1).to({skewX:122.9,skewY:130.8,x:1351.8,y:701.1},0).wait(1).to({skewX:137.6,skewY:145.5,x:1368,y:691.4},0).wait(1).to({skewX:152.3,skewY:160.2,x:1386.5,y:687.8},0).wait(1).to({skewX:167,skewY:174.9,x:1405.6,y:687.9},0).wait(1).to({skewX:169.8,skewY:177.7,x:1440.1,y:689.9},0).wait(1).to({skewX:172.6,skewY:180.5,x:1474.6,y:692.1},0).wait(1).to({skewX:175.4,skewY:183.3,x:1509.2,y:694.5},0).wait(1).to({skewX:178.2,skewY:186.1,x:1543.6,y:697.3},0).wait(1).to({skewX:181,skewY:188.9,x:1578.1,y:700.9},0).wait(1).to({skewX:193.5,skewY:201.4,x:1611.6,y:712.4},0).wait(1).to({skewX:206,skewY:213.8,x:1647.1,y:738.6},0).wait(1).to({skewX:218.5,skewY:226.3,x:1669.6,y:771.1},0).wait(1).to({skewX:198.3,skewY:206.1,x:1706.2,y:782.1},0).wait(1).to({skewX:178.1,skewY:185.9,x:1748.8,y:789.5},0).wait(1).to({skewX:182,skewY:189.9,x:1758.3,y:793.4},0).wait(1).to({skewX:186,skewY:193.8,x:1766.9,y:799},0).wait(1).to({skewX:189.9,skewY:197.8,x:1774.4,y:805.9},0).wait(1).to({skewX:193.8,skewY:201.7,x:1780.7,y:813.8},0).wait(1).to({skewX:197.8,skewY:205.6,x:1786.1,y:822.4},0).wait(1).to({skewX:201.7,skewY:209.6,x:1790.5,y:831.6},0).wait(1).to({skewX:205.7,skewY:213.5,x:1794.2,y:841},0).wait(1).to({skewX:209.6,skewY:217.5,x:1797.3,y:850.6},0).wait(1).to({skewX:213.6,skewY:221.4,x:1799.8,y:860.5},0).wait(1).to({skewX:212.1,skewY:219.9,x:1801.8,y:877.2},0).wait(1).to({skewX:210.6,skewY:218.5,x:1803.5,y:894},0).wait(1).to({skewX:209.1,skewY:217,x:1804.8,y:910.8},0).wait(1).to({skewX:207.7,skewY:215.5,x:1805.8,y:927.6},0).wait(1).to({skewX:206.2,skewY:214.1,x:1806.2,y:944.4},0).wait(1).to({skewX:204.7,skewY:212.6,x:1806,y:961.3},0).wait(1).to({skewX:203.3,skewY:211.1,x:1805.1,y:978.2},0).wait(1).to({skewX:201.8,skewY:209.6,x:1803,y:994.9},0).wait(1).to({skewX:200.3,skewY:208.2,x:1799.5,y:1011.4},0).wait(1).to({skewX:198.8,skewY:206.7,x:1793.8,y:1027.3},0).wait(1).to({skewX:197.4,skewY:205.2,x:1784.9,y:1041.7},0).wait(1).to({skewX:195.9,skewY:203.8,x:1780.5,y:1053.8},0).wait(1).to({skewX:194.4,skewY:202.3,x:1776.3,y:1066.1},0).wait(1).to({skewX:193,skewY:200.8,x:1772.3,y:1078.3},0).wait(1).to({skewX:191.5,skewY:199.3,x:1768.6,y:1090.7},0).wait(1).to({skewX:190,skewY:197.9,x:1765.1,y:1103.2},0).wait(1).to({skewX:188.5,skewY:196.4,x:1762.1,y:1115.7},0).wait(1).to({skewX:187.1,skewY:194.9,x:1759.5,y:1128.4},0).wait(1).to({skewX:185.6,skewY:193.5,x:1757.5,y:1141.2},0).wait(1).to({skewX:184.1,skewY:192,x:1756.2,y:1154.1},0).wait(1).to({skewX:182.7,skewY:190.5,x:1755.9,y:1167},0).wait(1).to({skewX:181.2,skewY:189,x:1756.8,y:1179.8},0).wait(1).to({skewX:179.7,skewY:187.6,x:1759.4,y:1192.4},0).wait(1).to({skewX:178.2,skewY:186.1,x:1764.4,y:1204.3},0).wait(1).to({skewX:176.8,skewY:184.6,x:1772.2,y:1214.4},0).wait(1).to({skewX:175.3,skewY:183.2,x:1782.6,y:1221.8},0).wait(1).to({skewX:173.8,skewY:181.7,x:1794.6,y:1226.2},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

	// stomach copy
	this.instance_6 = new lib.stomachcopy();
	this.instance_6.setTransform(1199.9,794.6,1,1,0,0,0,124.5,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69));

	// intestine
	this.instance_7 = new lib.intestine();
	this.instance_7.setTransform(1508.2,785.7,1,1,0,0,0,219.1,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69));

	// gills-top
	this.instance_8 = new lib.gillstop();
	this.instance_8.setTransform(1360,832.5,1,1,0,0,0,298.8,79.5);
	this.instance_8.shadow = new cjs.Shadow("rgba(198,100,34,0.878)",1,5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(69));

	// gills-btm
	this.instance_9 = new lib.gillsbtm();
	this.instance_9.setTransform(1355.3,847.7,1,1,0,0,0,299.1,71.2);
	this.instance_9.shadow = new cjs.Shadow("rgba(198,100,34,0.878)",1,5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(69));

	// v
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#632E1C","#6C3822","#835234","#A87C50","#DCB677","#F6D38A","#F8D5AB"],[0,0.098,0.267,0.482,0.733,0.847,0.969],-72.3,3.8,70.4,-6.7).s().p("AoJGsQg0gag8gvQhAgwgGgDQBGhTgBhlQgBgsgfh5QgZhhASg0QAahMB2g3QEJh6CRgUQBygPA2AxQAUASASAgIAeA2QAmA+BDAFQBqAJCuBPQB9A5BMAyQg9AYgFA/QgDAgATBkQiUgMjkBMQjYBIkQCTQhFAlhKAAQhQAAhXgsg");
	this.shape_2.setTransform(1657.9,816.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(69));

	// mantel-lower
	this.instance_10 = new lib.mantellower();
	this.instance_10.setTransform(1378,816.7,1,1,0,0,0,344.5,186.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(69));

	// lower shell
	this.instance_11 = new lib.innerShellupperEdge();
	this.instance_11.setTransform(1111.4,585.3);

	this.instance_12 = new lib.innerShell();
	this.instance_12.setTransform(979,592.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(971,585.3,779,510);


(lib.InnerShelllowerFiltration_mc03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// water flow arrow02
	this.instance = new lib.arrow();
	this.instance.setTransform(1103,819.9,0.493,0.531,0,-46.1,-68,142.4,57.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:152.3,regY:65.5,scaleY:0.53,skewX:-42.1,skewY:-64,x:1117.4,y:810.3,alpha:0.167},0).wait(1).to({skewX:-38.1,skewY:-60,x:1127.9,y:803.5,alpha:0.333},0).wait(1).to({skewX:-34.2,skewY:-56,x:1139.2,y:798.1,alpha:0.5},0).wait(1).to({skewX:-30.2,skewY:-52.1,x:1151.1,y:794,alpha:0.667},0).wait(1).to({skewX:-26.2,skewY:-48.1,x:1163.3,y:791,alpha:0.833},0).wait(1).to({skewX:-22.3,skewY:-44.1,x:1175.7,y:789,alpha:1},0).wait(1).to({skewX:-18.3,skewY:-40.2,x:1188.2,y:788},0).wait(1).to({skewX:-14.3,skewY:-36.2,x:1200.9,y:787.7},0).wait(1).to({skewX:-10.4,skewY:-32.2,x:1213.4,y:788},0).wait(1).to({skewX:-6.4,skewY:-28.3,x:1225.9,y:788.9},0).wait(1).to({skewX:-2.4,skewY:-24.3,x:1238.3,y:790.4},0).wait(1).to({skewX:1.5,skewY:-20.3,x:1250.8,y:792.4},0).wait(1).to({skewX:5.5,skewY:-16.4,x:1263,y:794.9},0).wait(1).to({skewX:9.5,skewY:-12.4,x:1275.2,y:797.8},0).wait(1).to({skewX:13.4,skewY:-8.4,x:1287.2,y:801.1},0).wait(1).to({skewX:12.3,skewY:-9.6,x:1299.5,y:804.6,alpha:0.857},0).wait(1).to({skewX:11.2,skewY:-10.7,x:1311.6,y:808.5,alpha:0.714},0).wait(1).to({skewX:10.1,skewY:-11.8,x:1323.5,y:813,alpha:0.571},0).wait(1).to({skewX:9,skewY:-12.9,x:1335.2,y:817.9,alpha:0.429},0).wait(1).to({skewX:7.9,skewY:-14,x:1346.6,y:823.4,alpha:0.286},0).wait(1).to({skewX:6.8,skewY:-15.1,x:1357.6,y:829.6,alpha:0.143},0).wait(1).to({skewX:5.7,skewY:-16.2,x:1368.1,y:836.7,alpha:0},0).to({_off:true},1).wait(30));

	// hole in
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#934511").s().p("AgOBzQgWgDgLgkQgKgkAGguQAHgwAUgfQAUggATADQAWADALAkQAKAkgGAuQgHAwgTAgQgTAdgSAAIgDgBg");
	this.shape.setTransform(1725.8,821.6,1.159,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(54));

	// hole out
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#934511").s().p("AgRAxQgLgTgCgcQgCgaAIgVQAIgUANgBQALgBALATQAKATACAcQADAagIAVQgIAUgNABIgCAAQgKAAgKgSg");
	this.shape_1.setTransform(1727.8,789.5,1,1.333);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(54));

	// LabialPalp
	this.instance_1 = new lib.LabialPalp();
	this.instance_1.setTransform(1076,820.1,1,1,0,0,0,19,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54));

	// adductorMuscle_Posterior
	this.instance_2 = new lib.adductorMuscle_Posterior();
	this.instance_2.setTransform(1587.9,744.9,1,1,0,0,0,36.9,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54));

	// foot
	this.instance_3 = new lib.foot_1();
	this.instance_3.setTransform(1355,868.8,1,1,0,0,0,376,213.5);
	this.instance_3.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:376.7,regY:213.3,x:1355.7,y:868.6},0).wait(53));

	// adductorMuscle_Anterior
	this.instance_4 = new lib.adductorMuscle_Anterior();
	this.instance_4.setTransform(1098.3,730.7,1,1,-24.9,0,0,34.6,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54));

	// dirt04
	this.instance_5 = new lib.dirt04();
	this.instance_5.setTransform(1102.7,842.8,0.479,0.582,0,120.9,104.3,0.5,0.9);
	this.instance_5.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:7.3,regY:8.4,scaleX:0.47,scaleY:0.58,skewX:121.5,skewY:104.5,x:1091.5,y:842.7,alpha:0.45},0).wait(1).to({scaleX:0.47,scaleY:0.57,skewX:122,skewY:104.6,x:1084.9,y:841.6},0).wait(1).to({scaleX:0.46,scaleY:0.57,skewX:122.5,x:1078.9,y:839.2},0).wait(1).to({scaleX:0.45,scaleY:0.56,skewX:122.9,x:1100.7,y:822.5},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.4,skewY:104.7,x:1121.7,y:804.6},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.9,x:1141.1,y:785},0).wait(1).to({scaleX:0.43,scaleY:0.55,skewX:124.3,skewY:104.8,x:1162.9,y:772.8},0).wait(1).to({scaleX:0.42,scaleY:0.55,skewX:124.8,x:1194,y:765.8},0).wait(1).to({scaleX:0.42,scaleY:0.54,skewX:125.3,x:1217.4,y:762.6},0).wait(1).to({scaleX:0.41,scaleY:0.54,skewX:125.7,skewY:104.9,x:1224.7,y:762.8},0).wait(1).to({scaleX:0.4,scaleY:0.53,skewX:126.2,x:1232.1,y:763},0).wait(1).to({scaleX:0.39,scaleY:0.53,skewX:126.6,x:1239.4,y:763.2},0).wait(1).to({scaleX:0.39,scaleY:0.52,skewX:127.1,skewY:105,x:1246.8,y:763.4},0).wait(1).to({scaleX:0.38,scaleY:0.52,skewX:127.6,x:1254.2,y:763.6},0).wait(1).to({scaleX:0.37,scaleY:0.52,skewX:128,x:1261.5,y:763.9},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:128.5,skewY:105.1,x:1268.9,y:764.1},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:129,x:1276.2,y:764.6},0).wait(1).to({scaleX:0.35,scaleY:0.5,skewX:129.4,skewY:105.2,x:1282.1,y:770},0).wait(1).to({scaleX:0.34,scaleY:0.5,skewX:129.9,x:1287.9,y:775.4},0).wait(1).to({scaleX:0.34,scaleY:0.49,skewX:130.4,x:1293.7,y:780.9},0).wait(1).to({scaleX:0.33,scaleY:0.49,skewX:130.8,skewY:105.3,x:1299.5,y:786.3},0).wait(1).to({scaleX:0.32,scaleY:0.48,skewX:131.3,x:1305.3,y:791.8},0).wait(1).to({scaleX:0.31,scaleY:0.48,skewX:131.8,x:1311.1,y:797.3},0).wait(1).to({x:1310.3,y:805.8},0).wait(1).to({x:1310.1,y:814.4},0).wait(1).to({x:1310.5,y:822.9},0).wait(1).to({x:1311.8,y:831.4},0).wait(1).to({x:1314.5,y:839.6},0).wait(1).to({x:1319.1,y:846.7},0).wait(1).to({x:1325.9,y:851.9},0).wait(1).to({x:1334.1,y:854.4},0).wait(1).to({x:1342.6,y:854.7},0).wait(1).to({x:1351.1,y:853.5},0).wait(1).to({x:1359.4,y:851.4},0).wait(1).to({x:1367.4,y:848.5},0).wait(1).to({x:1375.4,y:845.2},0).wait(1).to({x:1379.6,y:840.1},0).wait(1).to({x:1386.6,y:831.8},0).wait(1).to({x:1389.8,y:828.1},0).wait(1).to({x:1396.3,y:822.4},0).wait(1).to({x:1402.5,y:817.7},0).wait(1).to({x:1409,y:813.3},0).wait(1).to({x:1416.1,y:809.7},0).wait(1).to({x:1422.3,y:807.9},0).wait(1).to({x:1430.8,y:807.6},0).wait(1).to({x:1439.4,y:810.2},0).wait(1).to({x:1445.1,y:813.9},0).wait(1).to({x:1444.8,y:835.7,alpha:0.375},0).wait(1).to({x:1435.3,y:857.2,alpha:0.3},0).wait(1).to({x:1420.2,y:868.9,alpha:0.225},0).wait(1).to({x:1396,y:869.6,alpha:0.15},0).wait(1).to({x:1374,y:858.7,alpha:0.075},0).wait(1).to({x:1356.8,y:845.1,alpha:0},0).wait(1));

	// dirt03
	this.instance_6 = new lib.dirt03();
	this.instance_6.setTransform(1103.7,848.1,0.479,0.582,0,120.9,104.3,0.1,0.1);
	this.instance_6.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:5.4,regY:7.5,scaleX:0.47,scaleY:0.58,skewX:121.5,skewY:104.5,x:1090.6,y:844.6,alpha:0.45},0).wait(1).to({scaleX:0.47,scaleY:0.57,skewX:122,skewY:104.6,x:1082.1,y:840.5},0).wait(1).to({scaleX:0.46,scaleY:0.57,skewX:122.5,x:1074.2,y:835.3},0).wait(1).to({scaleX:0.45,scaleY:0.56,skewX:122.9,x:1105.4,y:818.7},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.4,skewY:104.7,x:1129.5,y:796.6},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.9,x:1163.8,y:770.8},0).wait(1).to({scaleX:0.43,scaleY:0.55,skewX:124.3,skewY:104.8,x:1189.3,y:772},0).wait(1).to({scaleX:0.42,scaleY:0.55,skewX:124.8,x:1225.1,y:781.7},0).wait(1).to({scaleX:0.42,scaleY:0.54,skewX:125.3,x:1247.9,y:785.5},0).wait(1).to({scaleX:0.41,scaleY:0.54,skewX:125.7,skewY:104.9,x:1245.7,y:792.6},0).wait(1).to({scaleX:0.4,scaleY:0.53,skewX:126.2,x:1243.4,y:799.7},0).wait(1).to({scaleX:0.39,scaleY:0.53,skewX:126.6,x:1241.2,y:806.8},0).wait(1).to({scaleX:0.39,scaleY:0.52,skewX:127.1,skewY:105,x:1239,y:813.9},0).wait(1).to({scaleX:0.38,scaleY:0.52,skewX:127.6,x:1236.8,y:821},0).wait(1).to({scaleX:0.37,scaleY:0.52,skewX:128,x:1234.6,y:828.1},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:128.5,skewY:105.1,x:1232.3,y:835.2},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:129,x:1229.9,y:842.2},0).wait(1).to({scaleX:0.35,scaleY:0.5,skewX:129.4,skewY:105.2,x:1243,y:834},0).wait(1).to({scaleX:0.34,scaleY:0.5,skewX:129.9,x:1256.1,y:825.7},0).wait(1).to({scaleX:0.34,scaleY:0.49,skewX:130.4,x:1269.3,y:817.5},0).wait(1).to({scaleX:0.33,scaleY:0.49,skewX:130.8,skewY:105.3,x:1282.4,y:809.2},0).wait(1).to({scaleX:0.32,scaleY:0.48,skewX:131.3,x:1295.5,y:801},0).wait(1).to({scaleX:0.31,scaleY:0.48,skewX:131.8,x:1308.7,y:792.9},0).wait(1).to({x:1309.8,y:799.3},0).wait(1).to({x:1311.1,y:805.7},0).wait(1).to({x:1312.5,y:812.1},0).wait(1).to({x:1314.1,y:818.4},0).wait(1).to({x:1315.9,y:824.6},0).wait(1).to({x:1318,y:830.8},0).wait(1).to({x:1320.5,y:836.9},0).wait(1).to({x:1323.4,y:842.7},0).wait(1).to({x:1326.9,y:848.1},0).wait(1).to({x:1331.3,y:853},0).wait(1).to({x:1336.5,y:856.6},0).wait(1).to({x:1342.9,y:858.5},0).wait(1).to({x:1349.4,y:858.1},0).wait(1).to({x:1355,y:854.1},0).wait(1).to({x:1362.1,y:848.9},0).wait(1).to({x:1368.7,y:844.1},0).wait(1).to({x:1376.4,y:838.6},0).wait(1).to({x:1381.4,y:834.9},0).wait(1).to({x:1387.7,y:830.1},0).wait(1).to({x:1394.1,y:825.5},0).wait(1).to({x:1400.8,y:821.1},0).wait(1).to({x:1407.6,y:817.1},0).wait(1).to({x:1414.7,y:813.4},0).wait(1).to({x:1422,y:810.9},0).wait(1).to({x:1444.2,y:816.1,alpha:0.375},0).wait(1).to({x:1445.9,y:837.1,alpha:0.3},0).wait(1).to({x:1433.9,y:856.9,alpha:0.225},0).wait(1).to({x:1414.4,y:868.1,alpha:0.15},0).wait(1).to({x:1392.8,y:866,alpha:0.075},0).wait(1).to({x:1374.7,y:851.8,alpha:0},0).wait(1));

	// dirt02
	this.instance_7 = new lib.dirt02();
	this.instance_7.setTransform(1134.4,792.5,0.479,0.582,0,120.9,104.3);
	this.instance_7.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:14.7,regY:12.3,scaleX:0.47,scaleY:0.58,skewX:121.5,skewY:104.5,x:1141.3,y:784.5,alpha:0.45},0).wait(1).to({scaleX:0.47,scaleY:0.57,skewX:122,skewY:104.6,x:1158.6,y:774.7},0).wait(1).to({scaleX:0.46,scaleY:0.57,skewX:122.5,x:1174.3,y:770.3},0).wait(1).to({scaleX:0.45,scaleY:0.56,skewX:122.9,x:1192.9,y:767.6},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.4,skewY:104.7,x:1211.6,y:766.2},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.9,x:1230.2,y:765.5},0).wait(1).to({scaleX:0.43,scaleY:0.55,skewX:124.3,skewY:104.8,x:1249},0).wait(1).to({scaleX:0.42,scaleY:0.55,skewX:124.8,x:1268.5,y:766.1},0).wait(1).to({scaleX:0.42,scaleY:0.54,skewX:125.3,x:1285.3,y:768.3},0).wait(1).to({scaleX:0.41,scaleY:0.54,skewX:125.7,skewY:104.9,x:1284.6,y:773.2},0).wait(1).to({scaleX:0.4,scaleY:0.53,skewX:126.2,x:1283.9,y:778.2},0).wait(1).to({scaleX:0.39,scaleY:0.53,skewX:126.6,x:1283.3,y:783.2},0).wait(1).to({scaleX:0.39,scaleY:0.52,skewX:127.1,skewY:105,x:1282.7,y:788.2},0).wait(1).to({scaleX:0.38,scaleY:0.52,skewX:127.6,x:1282.2,y:793.2},0).wait(1).to({scaleX:0.37,scaleY:0.52,skewX:128,x:1281.9,y:798.2},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:128.5,skewY:105.1,x:1281.7,y:803.2},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:129,x:1282.4,y:808.2},0).wait(1).to({scaleX:0.35,scaleY:0.5,skewX:129.4,skewY:105.2,x:1286.8,y:806.2},0).wait(1).to({scaleX:0.34,scaleY:0.5,skewX:129.9,x:1291.4,y:804.2},0).wait(1).to({scaleX:0.34,scaleY:0.49,skewX:130.4,x:1296,y:802.3},0).wait(1).to({scaleX:0.33,scaleY:0.49,skewX:130.8,skewY:105.3,x:1300.7,y:800.6},0).wait(1).to({scaleX:0.32,scaleY:0.48,skewX:131.3,x:1305.5,y:799.2},0).wait(1).to({scaleX:0.31,scaleY:0.48,skewX:131.8,x:1310.4,y:799.3},0).wait(1).to({x:1311,y:807.3},0).wait(1).to({x:1312.2,y:815.8},0).wait(1).to({x:1313.7,y:824},0).wait(1).to({x:1315.7,y:832.2},0).wait(1).to({x:1318.5,y:840.1},0).wait(1).to({x:1322.4,y:847.5},0).wait(1).to({x:1328.2,y:853.4},0).wait(1).to({x:1336,y:855.6},0).wait(1).to({x:1344.3,y:855.2},0).wait(1).to({x:1352.4,y:853},0).wait(1).to({x:1360.2,y:849.7},0).wait(1).to({x:1368,y:845.5},0).wait(1).to({x:1374.6,y:841.8},0).wait(1).to({x:1380.6,y:836.3},0).wait(1).to({x:1387.4,y:832},0).wait(1).to({x:1394.6,y:828.3},0).wait(1).to({x:1401.5,y:824.2},0).wait(1).to({x:1407.4,y:819.9},0).wait(1).to({x:1413.5,y:816},0).wait(1).to({x:1419.8,y:812.5},0).wait(1).to({x:1426.6,y:810},0).wait(1).to({x:1433.8,y:809.6},0).wait(1).to({x:1440.2,y:812.6},0).wait(1).to({x:1444.7,y:818.3},0).wait(1).to({x:1445.7,y:835.8,alpha:0.375},0).wait(1).to({x:1433,y:858.9,alpha:0.3},0).wait(1).to({x:1411.9,y:869.5,alpha:0.225},0).wait(1).to({x:1391,y:867.8,alpha:0.15},0).wait(1).to({x:1369.4,y:849.9,alpha:0.075},0).wait(1).to({x:1356.3,y:834.2,alpha:0},0).wait(1));

	// dirt01
	this.instance_8 = new lib.dirt01();
	this.instance_8.setTransform(1118.6,845.7,0.479,0.582,0,120.9,104.3,1.2,2);
	this.instance_8.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:7.5,regY:6.2,scaleX:0.47,scaleY:0.58,skewX:121.5,skewY:104.5,x:1102.2,y:846.3,alpha:0.45},0).wait(1).to({scaleX:0.47,scaleY:0.57,skewX:122,skewY:104.6,x:1088.7,y:844.6},0).wait(1).to({scaleX:0.46,scaleY:0.57,skewX:122.5,x:1075.7,y:840.7},0).wait(1).to({scaleX:0.45,scaleY:0.56,skewX:122.9,x:1100.1,y:824.5},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.4,skewY:104.7,x:1128.5,y:798},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.9,x:1155.6,y:780},0).wait(1).to({scaleX:0.43,scaleY:0.55,skewX:124.3,skewY:104.8,x:1190.9,y:770.7},0).wait(1).to({scaleX:0.42,scaleY:0.55,skewX:124.8,x:1227.3,y:765.8},0).wait(1).to({scaleX:0.42,scaleY:0.54,skewX:125.3,x:1259.2,y:764.2},0).wait(1).to({scaleX:0.41,scaleY:0.54,skewX:125.7,skewY:104.9,x:1258.3,y:769.8},0).wait(1).to({scaleX:0.4,scaleY:0.53,skewX:126.2,x:1257.5,y:775.3},0).wait(1).to({scaleX:0.39,scaleY:0.53,skewX:126.6,x:1256.6,y:780.9},0).wait(1).to({scaleX:0.39,scaleY:0.52,skewX:127.1,skewY:105,x:1255.8,y:786.5},0).wait(1).to({scaleX:0.38,scaleY:0.52,skewX:127.6,x:1255,y:792.1},0).wait(1).to({scaleX:0.37,scaleY:0.52,skewX:128,x:1254.3,y:797.7},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:128.5,skewY:105.1,x:1253.6,y:803.3},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:129,y:808.9},0).wait(1).to({scaleX:0.35,scaleY:0.5,skewX:129.4,skewY:105.2,x:1262,y:805.7},0).wait(1).to({scaleX:0.34,scaleY:0.5,skewX:129.9,x:1270.4,y:802.5},0).wait(1).to({scaleX:0.34,scaleY:0.49,skewX:130.4,x:1278.8,y:799.4},0).wait(1).to({scaleX:0.33,scaleY:0.49,skewX:130.8,skewY:105.3,x:1287.2,y:796.4},0).wait(1).to({scaleX:0.32,scaleY:0.48,skewX:131.3,x:1295.7,y:793.5},0).wait(1).to({scaleX:0.31,scaleY:0.48,skewX:131.8,x:1304.4,y:791.3},0).wait(1).to({x:1305.8,y:797.9},0).wait(1).to({x:1307.3,y:804.5},0).wait(1).to({x:1308.9,y:811},0).wait(1).to({x:1310.8,y:817.4},0).wait(1).to({x:1312.9,y:823.8},0).wait(1).to({x:1315.4,y:830.1},0).wait(1).to({x:1318.2,y:836.2},0).wait(1).to({x:1321.6,y:842},0).wait(1).to({x:1325.6,y:847.3},0).wait(1).to({x:1330.5,y:851.8},0).wait(1).to({x:1336.4,y:854.8},0).wait(1).to({x:1343.1,y:855.8},0).wait(1).to({x:1349.7,y:854.7},0).wait(1).to({x:1357.2,y:849.9},0).wait(1).to({x:1364.7,y:845.1},0).wait(1).to({x:1372.2,y:840.3},0).wait(1).to({x:1379.7,y:835.6},0).wait(1).to({x:1387.3,y:830.9},0).wait(1).to({x:1394.9,y:826.3},0).wait(1).to({x:1402.6,y:821.8},0).wait(1).to({x:1410.4,y:817.5},0).wait(1).to({x:1418.2,y:813.3},0).wait(1).to({x:1426.2,y:809.3},0).wait(1).to({x:1434.4,y:806},0).wait(1).to({x:1446.5,y:827.3,alpha:0.375},0).wait(1).to({x:1444.7,y:852,alpha:0.3},0).wait(1).to({x:1425.1,y:865.9,alpha:0.225},0).wait(1).to({x:1402.4,y:870,alpha:0.15},0).wait(1).to({x:1377.2,y:855.9,alpha:0.075},0).wait(1).to({x:1357.1,y:841.1,alpha:0},0).wait(1));

	// dirt04
	this.instance_9 = new lib.dirt04();
	this.instance_9.setTransform(1143.2,850.8,0.479,0.582,0,120.9,104.3);
	this.instance_9.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:7.3,regY:8.4,scaleX:0.47,scaleY:0.58,skewX:121.5,skewY:104.5,x:1115.3,y:844,alpha:0.45},0).wait(1).to({scaleX:0.47,scaleY:0.57,skewX:122,skewY:104.6,x:1092.6,y:835.9},0).wait(1).to({scaleX:0.46,scaleY:0.57,skewX:122.5,x:1070.8,y:825.7},0).wait(1).to({scaleX:0.45,scaleY:0.56,skewX:122.9,x:1105.9,y:822.2},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.4,skewY:104.7,x:1127.4,y:796.9},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.9,x:1156.5,y:778.5},0).wait(1).to({scaleX:0.43,scaleY:0.55,skewX:124.3,skewY:104.8,x:1189,y:761.7},0).wait(1).to({scaleX:0.42,scaleY:0.55,skewX:124.8,x:1227.4,y:753.8},0).wait(1).to({scaleX:0.42,scaleY:0.54,skewX:125.3,x:1258,y:753.5},0).wait(1).to({scaleX:0.41,scaleY:0.54,skewX:125.7,skewY:104.9,x:1264.2,y:751.4},0).wait(1).to({scaleX:0.4,scaleY:0.53,skewX:126.2,x:1270.4,y:749.2},0).wait(1).to({scaleX:0.39,scaleY:0.53,skewX:126.6,x:1276.6,y:747.2},0).wait(1).to({scaleX:0.39,scaleY:0.52,skewX:127.1,skewY:105,x:1282.9,y:745.2},0).wait(1).to({scaleX:0.38,scaleY:0.52,skewX:127.6,x:1289.2,y:743.2},0).wait(1).to({scaleX:0.37,scaleY:0.52,skewX:128,x:1295.5,y:741.2},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:128.5,skewY:105.1,x:1301.8,y:739.4},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:129,x:1308.2,y:738.1},0).wait(1).to({scaleX:0.35,scaleY:0.5,skewX:129.4,skewY:105.2,x:1308.9,y:748.2},0).wait(1).to({scaleX:0.34,scaleY:0.5,skewX:129.9,x:1309.7,y:758.3},0).wait(1).to({scaleX:0.34,scaleY:0.49,skewX:130.4,x:1310.5,y:768.5},0).wait(1).to({scaleX:0.33,scaleY:0.49,skewX:130.8,skewY:105.3,x:1311.4,y:778.6},0).wait(1).to({scaleX:0.32,scaleY:0.48,skewX:131.3,x:1312.5,y:788.7},0).wait(1).to({scaleX:0.31,scaleY:0.48,skewX:131.8,x:1314.6,y:798.6},0).wait(1).to({x:1314,y:805.8},0).wait(1).to({x:1313.7,y:813},0).wait(1).to({y:820.2},0).wait(1).to({x:1314.3,y:827.3},0).wait(1).to({x:1315.6,y:834.5},0).wait(1).to({x:1317.9,y:841.2},0).wait(1).to({x:1321.6,y:847.4},0).wait(1).to({x:1327,y:852},0).wait(1).to({x:1333.8,y:854.4},0).wait(1).to({x:1341,y:854.8},0).wait(1).to({x:1348.1,y:853.7},0).wait(1).to({x:1355,y:851.8},0).wait(1).to({x:1361.7,y:849.2},0).wait(1).to({x:1367.6,y:845.5},0).wait(1).to({x:1374.5,y:841.1},0).wait(1).to({x:1382.3,y:836.1},0).wait(1).to({x:1386.6,y:832},0).wait(1).to({x:1392,y:826.7},0).wait(1).to({x:1397.9,y:821.9},0).wait(1).to({x:1404.1,y:817.6},0).wait(1).to({x:1410.8,y:814},0).wait(1).to({x:1417.8,y:811.1},0).wait(1).to({x:1425.3,y:809.4},0).wait(1).to({x:1432.5,y:810},0).wait(1).to({x:1448.7,y:823.9,alpha:0.375},0).wait(1).to({x:1442.1,y:850.7,alpha:0.3},0).wait(1).to({x:1427.6,y:865.3,alpha:0.225},0).wait(1).to({x:1408.4,y:870.9,alpha:0.15},0).wait(1).to({x:1379.9,y:857.9,alpha:0.075},0).wait(1).to({x:1365.4,y:842.8,alpha:0},0).wait(1));

	// dirt03
	this.instance_10 = new lib.dirt03();
	this.instance_10.setTransform(1162.4,856.9,0.479,0.582,0,120.9,104.3);
	this.instance_10.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:5.4,regY:7.5,scaleX:0.47,scaleY:0.58,skewX:121.5,skewY:104.5,x:1140.4,y:853.4,alpha:0.45},0).wait(1).to({scaleX:0.47,scaleY:0.57,skewX:122,skewY:104.6,x:1122.9,y:849.6},0).wait(1).to({scaleX:0.46,scaleY:0.57,skewX:122.5,x:1105.5,y:845.5},0).wait(1).to({scaleX:0.45,scaleY:0.56,skewX:122.9,x:1088.2,y:840.9},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.4,skewY:104.7,x:1071.6,y:834.4},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.9,x:1090.4,y:824.4},0).wait(1).to({scaleX:0.43,scaleY:0.55,skewX:124.3,skewY:104.8,x:1144,y:781.7},0).wait(1).to({scaleX:0.42,scaleY:0.55,skewX:124.8,x:1188.7,y:781},0).wait(1).to({scaleX:0.42,scaleY:0.54,skewX:125.3,x:1229.3,y:799.1},0).wait(1).to({scaleX:0.41,scaleY:0.54,skewX:125.7,skewY:104.9,x:1232.3,y:791.7},0).wait(1).to({scaleX:0.4,scaleY:0.53,skewX:126.2,x:1235.3,y:784.3},0).wait(1).to({scaleX:0.39,scaleY:0.53,skewX:126.6,x:1238.4,y:776.8},0).wait(1).to({scaleX:0.39,scaleY:0.52,skewX:127.1,skewY:105,x:1241.6,y:769.4},0).wait(1).to({scaleX:0.38,scaleY:0.52,skewX:127.6,x:1244.8,y:762.1},0).wait(1).to({scaleX:0.37,scaleY:0.52,skewX:128,x:1248.3,y:754.8},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:128.5,skewY:105.1,x:1252,y:747.6},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:129,x:1257,y:741.7},0).wait(1).to({scaleX:0.35,scaleY:0.5,skewX:129.4,skewY:105.2,x:1265.6,y:749.7},0).wait(1).to({scaleX:0.34,scaleY:0.5,skewX:129.9,x:1274.2,y:757.8},0).wait(1).to({scaleX:0.34,scaleY:0.49,skewX:130.4,x:1282.8,y:765.9},0).wait(1).to({scaleX:0.33,scaleY:0.49,skewX:130.8,skewY:105.3,x:1291.5,y:773.9},0).wait(1).to({scaleX:0.32,scaleY:0.48,skewX:131.3,x:1300.1,y:782},0).wait(1).to({scaleX:0.31,scaleY:0.48,skewX:131.8,x:1308.6,y:790.2},0).wait(1).to({x:1308.8,y:798.9},0).wait(1).to({x:1309.4,y:807.7},0).wait(1).to({x:1310.5,y:816.3},0).wait(1).to({x:1312.2,y:824.9},0).wait(1).to({x:1314.8,y:833.3},0).wait(1).to({x:1318.7,y:841.2},0).wait(1).to({x:1324.1,y:848},0).wait(1).to({x:1331.1,y:853},0).wait(1).to({x:1339.5,y:855.6},0).wait(1).to({x:1348.3,y:855.8},0).wait(1).to({x:1356.9,y:854.3},0).wait(1).to({x:1365.2,y:851.7},0).wait(1).to({x:1373.3,y:848.3},0).wait(1).to({x:1377.5,y:844.1},0).wait(1).to({x:1381.7,y:839.9},0).wait(1).to({x:1386,y:835.8},0).wait(1).to({x:1390.4,y:831.8},0).wait(1).to({x:1394.8,y:827.9},0).wait(1).to({x:1399.4,y:824.1},0).wait(1).to({x:1404.1,y:820.4},0).wait(1).to({x:1408.9,y:816.9},0).wait(1).to({x:1413.9,y:813.7},0).wait(1).to({x:1419.1,y:811},0).wait(1).to({x:1424.8,y:809.1},0).wait(1).to({x:1445.8,y:819.6,alpha:0.375},0).wait(1).to({x:1445.6,y:839.5,alpha:0.3},0).wait(1).to({x:1432.2,y:858.1,alpha:0.225},0).wait(1).to({x:1409.6,y:870.6,alpha:0.15},0).wait(1).to({x:1384.2,y:862,alpha:0.075},0).wait(1).to({x:1364.8,y:849,alpha:0},0).wait(1));

	// dirt02
	this.instance_11 = new lib.dirt02();
	this.instance_11.setTransform(1149.5,853.9,0.479,0.582,0,120.9,104.3,9,6.8);
	this.instance_11.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:14.7,regY:12.3,scaleX:0.47,scaleY:0.58,skewX:121.5,skewY:104.5,x:1121.7,y:851.2,alpha:0.45},0).wait(1).to({scaleX:0.47,scaleY:0.57,skewX:122,skewY:104.6,x:1097.5,y:847.2},0).wait(1).to({scaleX:0.46,scaleY:0.57,skewX:122.5,x:1073.4,y:842},0).wait(1).to({scaleX:0.45,scaleY:0.56,skewX:122.9,x:1098.1,y:819.9},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.4,skewY:104.7,x:1124.9,y:800.3},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.9,x:1153.7,y:784.2},0).wait(1).to({scaleX:0.43,scaleY:0.55,skewX:124.3,skewY:104.8,x:1185.6,y:775.5},0).wait(1).to({scaleX:0.42,scaleY:0.55,skewX:124.8,x:1216.7,y:784.3},0).wait(1).to({scaleX:0.42,scaleY:0.54,skewX:125.3,x:1234.7,y:811.6},0).wait(1).to({scaleX:0.41,scaleY:0.54,skewX:125.7,skewY:104.9,x:1239.5,y:799.4},0).wait(1).to({scaleX:0.4,scaleY:0.53,skewX:126.2,x:1246.8,y:785.1},0).wait(1).to({scaleX:0.39,scaleY:0.53,skewX:126.6,x:1255.7,y:770.5},0).wait(1).to({scaleX:0.39,scaleY:0.52,skewX:127.1,skewY:105,x:1263.3,y:765.7},0).wait(1).to({scaleX:0.38,scaleY:0.52,skewX:127.6,x:1273.7,y:775.1},0).wait(1).to({scaleX:0.37,scaleY:0.52,skewX:128,x:1289.6,y:773.6},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:128.5,skewY:105.1,x:1301.1,y:783.1},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:129,x:1308,y:795.7},0).wait(1).to({scaleX:0.35,scaleY:0.5,skewX:129.4,skewY:105.2,x:1309.2,y:798.3},0).wait(1).to({scaleX:0.34,scaleY:0.5,skewX:129.9,x:1310.3,y:801},0).wait(1).to({scaleX:0.34,scaleY:0.49,skewX:130.4,x:1311.4,y:803.6},0).wait(1).to({scaleX:0.33,scaleY:0.49,skewX:130.8,skewY:105.3,x:1312.5,y:806.3},0).wait(1).to({scaleX:0.32,scaleY:0.48,skewX:131.3,x:1313.6,y:809},0).wait(1).to({scaleX:0.31,scaleY:0.48,skewX:131.8,x:1314.7,y:811.8},0).wait(1).to({x:1315.5,y:819.7},0).wait(1).to({x:1316.9,y:827.8},0).wait(1).to({x:1318.8,y:835.7},0).wait(1).to({x:1321.3,y:843.4},0).wait(1).to({x:1324.9,y:850.7},0).wait(1).to({x:1330.5,y:856.6},0).wait(1).to({x:1337.9,y:859.3},0).wait(1).to({x:1346,y:859.9},0).wait(1).to({x:1354,y:858.8},0).wait(1).to({x:1361.7,y:856.2},0).wait(1).to({x:1368.9,y:852.4},0).wait(1).to({x:1375.4,y:847.5},0).wait(1).to({x:1381.1,y:841.7},0).wait(1).to({x:1386.4,y:835.6},0).wait(1).to({x:1392,y:829.6},0).wait(1).to({x:1397.9,y:824},0).wait(1).to({x:1404.1,y:818.8},0).wait(1).to({x:1410.9,y:814.2},0).wait(1).to({x:1418.2,y:810.6},0).wait(1).to({x:1426.1,y:808.7},0).wait(1).to({x:1434.2,y:809.6},0).wait(1).to({x:1441.1,y:813.6},0).wait(1).to({x:1446.4,y:819.8},0).wait(1).to({x:1449.9,y:827.2},0).wait(1).to({x:1443,y:848.6,alpha:0.375},0).wait(1).to({x:1426.3,y:865.8,alpha:0.3},0).wait(1).to({x:1405.2,y:866.4,alpha:0.225},0).wait(1).to({x:1382,y:856.2,alpha:0.15},0).wait(1).to({x:1359.9,y:842.7,alpha:0.075},0).wait(1).to({x:1343.2,y:829.7,alpha:0},0).wait(1));

	// dirt01
	this.instance_12 = new lib.dirt01();
	this.instance_12.setTransform(1113.2,854.7,0.479,0.582,0,120.9,104.3);
	this.instance_12.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:7.5,regY:6.2,scaleX:0.47,scaleY:0.58,skewX:121.5,skewY:104.5,x:1095.8,y:851.8,alpha:0.45},0).wait(1).to({scaleX:0.47,scaleY:0.57,skewX:122,skewY:104.6,x:1082.6,y:846.5},0).wait(1).to({scaleX:0.46,scaleY:0.57,skewX:122.5,x:1071.4,y:838.2},0).wait(1).to({scaleX:0.45,scaleY:0.56,skewX:122.9,x:1097.1,y:822},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.4,skewY:104.7,x:1133.4,y:791.7},0).wait(1).to({scaleX:0.44,scaleY:0.56,skewX:123.9,x:1162.1,y:772.3},0).wait(1).to({scaleX:0.43,scaleY:0.55,skewX:124.3,skewY:104.8,x:1199.5,y:768},0).wait(1).to({scaleX:0.42,scaleY:0.55,skewX:124.8,x:1246.4,y:776.3},0).wait(1).to({scaleX:0.42,scaleY:0.54,skewX:125.3,x:1276.8,y:784.6},0).wait(1).to({scaleX:0.41,scaleY:0.54,skewX:125.7,skewY:104.9,x:1279.1,y:785.4},0).wait(1).to({scaleX:0.4,scaleY:0.53,skewX:126.2,x:1281.5,y:786.2},0).wait(1).to({scaleX:0.39,scaleY:0.53,skewX:126.6,x:1283.8,y:787},0).wait(1).to({scaleX:0.39,scaleY:0.52,skewX:127.1,skewY:105,x:1286.1,y:787.7},0).wait(1).to({scaleX:0.38,scaleY:0.52,skewX:127.6,x:1288.4,y:788.5},0).wait(1).to({scaleX:0.37,scaleY:0.52,skewX:128,x:1290.8,y:789.3},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:128.5,skewY:105.1,x:1293,y:790.1},0).wait(1).to({scaleX:0.36,scaleY:0.51,skewX:129,x:1295.4,y:790.9},0).wait(1).to({scaleX:0.35,scaleY:0.5,skewX:129.4,skewY:105.2,x:1297.7,y:791.7},0).wait(1).to({scaleX:0.34,scaleY:0.5,skewX:129.9,x:1300,y:792.5},0).wait(1).to({scaleX:0.34,scaleY:0.49,skewX:130.4,x:1302.3,y:793.3},0).wait(1).to({scaleX:0.33,scaleY:0.49,skewX:130.8,skewY:105.3,x:1304.6,y:794.1},0).wait(1).to({scaleX:0.32,scaleY:0.48,skewX:131.3,x:1306.9,y:794.8},0).wait(1).to({scaleX:0.31,scaleY:0.48,skewX:131.8,x:1309.3,y:795.7},0).wait(1).to({x:1309.9,y:802},0).wait(1).to({x:1310.6,y:808.3},0).wait(1).to({x:1311.6,y:814.6},0).wait(1).to({x:1312.8,y:820.9},0).wait(1).to({x:1314.3,y:827.1},0).wait(1).to({x:1316.2,y:833.2},0).wait(1).to({x:1318.6,y:839.1},0).wait(1).to({x:1321.5,y:844.7},0).wait(1).to({x:1325.4,y:849.8},0).wait(1).to({x:1330.2,y:853.9},0).wait(1).to({x:1336.1,y:856.4},0).wait(1).to({x:1342.4,y:857},0).wait(1).to({x:1348.7,y:856.1},0).wait(1).to({x:1355.7,y:853.6},0).wait(1).to({x:1362.3,y:850.1},0).wait(1).to({x:1368.5,y:846},0).wait(1).to({x:1374.5,y:841.6},0).wait(1).to({x:1380.3,y:836.9},0).wait(1).to({x:1386.1,y:832.2},0).wait(1).to({x:1391.8,y:827.4},0).wait(1).to({x:1397.6,y:822.8},0).wait(1).to({x:1403.6,y:818.4},0).wait(1).to({x:1409.9,y:814.4},0).wait(1).to({x:1416.6,y:811.1},0).wait(1).to({x:1439.9,y:812.3,alpha:0.375},0).wait(1).to({x:1449.5,y:834.3,alpha:0.3},0).wait(1).to({x:1438.2,y:858.1,alpha:0.225},0).wait(1).to({x:1415,y:871.6,alpha:0.15},0).wait(1).to({x:1389.4,y:867.1,alpha:0.075},0).wait(1).to({x:1370.6,y:851.5,alpha:0},0).wait(1));

	// big poo
	this.instance_13 = new lib.dirt01();
	this.instance_13.setTransform(1385.3,848.1,2.375,1.156,0,63.4,71.2,6.5,2.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(51).to({_off:false},0).wait(1).to({regX:7.5,regY:6.2,scaleX:2.38,scaleY:1.16,skewX:63.3,x:1380.9,y:844.3,alpha:0.5},0).wait(1).to({x:1379.7,y:836.2,alpha:1},0).wait(1));

	// stomach copy
	this.instance_14 = new lib.stomachcopy();
	this.instance_14.setTransform(1199.9,794.6,1,1,0,0,0,124.5,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(54));

	// intestine
	this.instance_15 = new lib.intestine();
	this.instance_15.setTransform(1508.2,785.7,1,1,0,0,0,219.1,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(54));

	// gills-top
	this.instance_16 = new lib.gillstop();
	this.instance_16.setTransform(1360,832.5,1,1,0,0,0,298.8,79.5);
	this.instance_16.shadow = new cjs.Shadow("rgba(198,100,34,0.878)",1,5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(54));

	// gills-btm
	this.instance_17 = new lib.gillsbtm();
	this.instance_17.setTransform(1355.3,847.7,1,1,0,0,0,299.1,71.2);
	this.instance_17.shadow = new cjs.Shadow("rgba(198,100,34,0.878)",1,5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(54));

	// v
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#632E1C","#6C3822","#835234","#A87C50","#DCB677","#F6D38A","#F8D5AB"],[0,0.098,0.267,0.482,0.733,0.847,0.969],-72.3,3.8,70.4,-6.7).s().p("AoJGsQg0gag8gvQhAgwgGgDQBGhTgBhlQgBgsgfh5QgZhhASg0QAahMB2g3QEJh6CRgUQBygPA2AxQAUASASAgIAeA2QAmA+BDAFQBqAJCuBPQB9A5BMAyQg9AYgFA/QgDAgATBkQiUgMjkBMQjYBIkQCTQhFAlhKAAQhQAAhXgsg");
	this.shape_2.setTransform(1657.9,816.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(54));

	// mantel-lower
	this.instance_18 = new lib.mantellower();
	this.instance_18.setTransform(1378,816.7,1,1,0,0,0,344.5,186.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(54));

	// lower shell
	this.instance_19 = new lib.innerShellupperEdge();
	this.instance_19.setTransform(1111.4,585.3);

	this.instance_20 = new lib.innerShell();
	this.instance_20.setTransform(979,592.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19}]}).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(971,585.3,779,510);


(lib.InnerShelllowerFiltration_mc02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// water flow arrow02
	this.instance = new lib.arrow();
	this.instance.setTransform(1786.8,640.5,0.755,0.755,0,70.2,70.7,145.2,57.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:152.3,regY:65.5,scaleX:0.77,scaleY:0.76,skewX:88.8,skewY:83.7,x:1781.9,y:686.5,alpha:0.333},0).wait(1).to({scaleX:0.78,scaleY:0.76,skewX:107.5,skewY:96.6,x:1785.7,y:726.2,alpha:0.667},0).wait(1).to({scaleX:0.79,skewX:126.3,skewY:109.6,x:1772.3,y:763.3,alpha:1},0).wait(1).to({scaleX:0.79,skewX:134.3,skewY:118.6,x:1741.6,y:776.1},0).wait(1).to({scaleX:0.78,skewX:136.4,skewY:121.6,x:1710.7,y:794.3},0).wait(1).to({scaleX:0.78,skewX:138.4,skewY:124.6,x:1678,y:810.2},0).wait(1).to({scaleX:0.78,skewX:140.5,skewY:127.6,x:1644.2,y:824.4},0).wait(1).to({scaleX:0.78,skewX:142.6,skewY:130.6,x:1608.6,y:837.4},0).wait(1).to({scaleX:0.77,skewX:144.7,skewY:133.6,x:1576.9,y:847.1},0).wait(1).to({scaleX:0.77,scaleY:0.75,skewX:146.7,skewY:136.6,x:1541.4,y:855},0).wait(1).to({scaleX:0.77,skewX:148.8,skewY:139.6,x:1505.6,y:860.8},0).wait(1).to({scaleX:0.77,skewX:150.9,skewY:142.6,x:1469.6,y:865.1},0).wait(1).to({scaleX:0.76,skewX:152.9,skewY:145.6,x:1433.5,y:868},0).wait(1).to({scaleX:0.76,skewX:155,skewY:148.6,x:1397.3,y:869.7},0).wait(1).to({scaleX:0.76,skewX:157.1,skewY:151.6,x:1361.7,y:869.2},0).wait(1).to({skewX:158.8,skewY:153.3,x:1338.8,y:866.1,alpha:0.8},0).wait(1).to({skewX:160.6,skewY:155.1,x:1315.9,y:863.1,alpha:0.6},0).wait(1).to({skewX:162.4,skewY:156.9,x:1293,y:860.4,alpha:0.4},0).wait(1).to({skewX:164.1,skewY:158.6,x:1270.1,y:857.9,alpha:0.2},0).wait(1).to({skewX:165.9,skewY:160.4,x:1247.1,y:855.8,alpha:0},0).to({_off:true},1).wait(7));

	// hole in
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#934511").s().p("AgOBzQgWgDgLgkQgKgkAGguQAHgwAUgfQAUggATADQAWADALAkQAKAkgGAuQgHAwgTAgQgTAdgSAAIgDgBg");
	this.shape.setTransform(1725.8,821.6,1.159,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(28));

	// hole out
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#934511").s().p("AgRAxQgLgTgCgcQgCgaAIgVQAIgUANgBQALgBALATQAKATACAcQADAagIAVQgIAUgNABIgCAAQgKAAgKgSg");
	this.shape_1.setTransform(1727.8,789.5,1,1.333);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(28));

	// LabialPalp
	this.instance_1 = new lib.LabialPalp();
	this.instance_1.setTransform(1076,820.1,1,1,0,0,0,19,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28));

	// adductorMuscle_Posterior
	this.instance_2 = new lib.adductorMuscle_Posterior();
	this.instance_2.setTransform(1587.9,744.9,1,1,0,0,0,36.9,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28));

	// foot
	this.instance_3 = new lib.foot_1();
	this.instance_3.setTransform(1355,868.8,1,1,0,0,0,376,213.5);
	this.instance_3.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:376.7,regY:213.3,x:1355.7,y:868.6},0).wait(27));

	// adductorMuscle_Anterior
	this.instance_4 = new lib.adductorMuscle_Anterior();
	this.instance_4.setTransform(1098.3,730.7,1,1,-24.9,0,0,34.6,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28));

	// dirt04
	this.instance_5 = new lib.dirt04();
	this.instance_5.setTransform(1626.5,844.3,0.638,0.682,0,110.6,103.6,2.1,1.9);
	this.instance_5.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:7.3,regY:8.4,scaleX:0.63,scaleY:0.68,skewX:111.1,skewY:103.7,x:1606.8,y:851.6,alpha:0.45},0).wait(1).to({scaleX:0.63,scaleY:0.68,skewX:111.5,skewY:103.8,x:1592,y:857.3},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:111.9,x:1577.2,y:863},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:112.3,x:1562.6,y:868.7},0).wait(1).to({scaleX:0.61,scaleY:0.66,skewX:112.7,x:1547.8,y:874.3},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113,skewY:103.9,x:1533,y:880},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113.4,x:1518.2,y:885.3},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:113.8,x:1491.6,y:884.5},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:114.2,skewY:104,x:1463.8,y:883.1},0).wait(1).to({scaleX:0.58,scaleY:0.65,skewX:114.6,x:1436.3,y:881.7},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:114.9,x:1408.8,y:880.1},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:115.3,skewY:104.1,x:1381.4,y:878.3},0).wait(1).to({scaleX:0.56,scaleY:0.64,skewX:115.7,x:1353.9,y:876.5},0).wait(1).to({scaleX:0.56,scaleY:0.63,skewX:116.1,x:1326.5,y:874.4},0).wait(1).to({scaleX:0.55,scaleY:0.63,skewX:116.5,x:1299.1,y:872.1},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:116.9,skewY:104.2,x:1271.6,y:869.6},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:117.2,x:1244.3,y:866.7},0).wait(1).to({scaleX:0.53,scaleY:0.62,skewX:117.6,x:1217,y:863.4},0).wait(1).to({scaleX:0.53,scaleY:0.61,skewX:118,skewY:104.3,x:1189.8,y:859.6},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.4,x:1161.9,y:854.5},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.8,x:1137.5,y:846.5},0).wait(1).to({scaleX:0.51,scaleY:0.6,skewX:119.2,skewY:104.4,x:1131.1,y:846},0).wait(6));

	// dirt03
	this.instance_6 = new lib.dirt03();
	this.instance_6.setTransform(1597.9,838.7,0.638,0.682,0,110.6,103.6,2.3,2.2);
	this.instance_6.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:5.4,regY:7.5,scaleX:0.63,scaleY:0.68,skewX:111.1,skewY:103.7,x:1577.7,y:847,alpha:0.45},0).wait(1).to({scaleX:0.63,scaleY:0.68,skewX:111.5,skewY:103.8,x:1561.3,y:854.6},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:111.9,x:1544.8,y:862.1},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:112.3,x:1528.3,y:869.5},0).wait(1).to({scaleX:0.61,scaleY:0.66,skewX:112.7,x:1511.7,y:876.6},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113,skewY:103.9,x:1494.9,y:883.2},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113.4,x:1477.5,y:887.2},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:113.8,x:1453.7,y:886},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:114.2,skewY:104,x:1429.8,y:884.8},0).wait(1).to({scaleX:0.58,scaleY:0.65,skewX:114.6,x:1405.9,y:883.6},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:114.9,x:1382.1,y:882.3},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:115.3,skewY:104.1,x:1358.2,y:881.1},0).wait(1).to({scaleX:0.56,scaleY:0.64,skewX:115.7,x:1334.3,y:879.8},0).wait(1).to({scaleX:0.56,scaleY:0.63,skewX:116.1,x:1310.5,y:878.4},0).wait(1).to({scaleX:0.55,scaleY:0.63,skewX:116.5,x:1286.6,y:877.1},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:116.9,skewY:104.2,x:1262.8,y:875.6},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:117.2,x:1238.9,y:874},0).wait(1).to({scaleX:0.53,scaleY:0.62,skewX:117.6,x:1215.1,y:872.4},0).wait(1).to({scaleX:0.53,scaleY:0.61,skewX:118,skewY:104.3,x:1191.3,y:870.6},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.4,x:1167.5,y:868.5},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.8,x:1144,y:864.6},0).wait(1).to({scaleX:0.51,scaleY:0.6,skewX:119.2,skewY:104.4,x:1136.9,y:862.1},0).wait(6));

	// dirt02
	this.instance_7 = new lib.dirt02();
	this.instance_7.setTransform(1610.6,822.5,0.638,0.682,0,110.6,103.6);
	this.instance_7.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:14.7,regY:12.3,scaleX:0.63,scaleY:0.68,skewX:111.1,skewY:103.7,x:1584.2,y:836.5,alpha:0.45},0).wait(1).to({scaleX:0.63,scaleY:0.68,skewX:111.5,skewY:103.8,x:1567.9,y:844.2},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:111.9,x:1551.6,y:851.7},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:112.3,x:1535.1,y:859.1},0).wait(1).to({scaleX:0.61,scaleY:0.66,skewX:112.7,x:1518.4,y:866.1},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113,skewY:103.9,x:1501.5,y:872.3},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113.4,x:1484.3,y:874.3},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:113.8,x:1457.4,y:873.1},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:114.2,skewY:104,x:1430.5,y:871.9},0).wait(1).to({scaleX:0.58,scaleY:0.65,skewX:114.6,x:1403.7,y:870.6},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:114.9,x:1376.8,y:869.3},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:115.3,skewY:104.1,x:1349.9,y:868},0).wait(1).to({scaleX:0.56,scaleY:0.64,skewX:115.7,x:1323.1,y:866.5},0).wait(1).to({scaleX:0.56,scaleY:0.63,skewX:116.1,x:1296.2,y:865},0).wait(1).to({scaleX:0.55,scaleY:0.63,skewX:116.5,x:1269.3,y:863.4},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:116.9,skewY:104.2,x:1242.5,y:861.7},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:117.2,x:1215.7,y:859.9},0).wait(1).to({scaleX:0.53,scaleY:0.62,skewX:117.6,x:1188.9,y:857.9},0).wait(1).to({scaleX:0.53,scaleY:0.61,skewX:118,skewY:104.3,x:1162.1,y:855.5},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.4,x:1135.3,y:852.6},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.8,x:1109.4,y:846.6},0).wait(1).to({scaleX:0.51,scaleY:0.6,skewX:119.2,skewY:104.4,x:1092.9,y:838.7},0).wait(6));

	// dirt01
	this.instance_8 = new lib.dirt01();
	this.instance_8.setTransform(1640.6,829.8,0.638,0.682,0,110.6,103.6,4.1,3.8);
	this.instance_8.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:7.5,regY:6.2,scaleX:0.63,scaleY:0.68,skewX:111.1,skewY:103.7,x:1623.4,y:836.8,alpha:0.45},0).wait(1).to({scaleX:0.63,scaleY:0.68,skewX:111.5,skewY:103.8,x:1608.4,y:842.2},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:111.9,x:1593.2,y:847.5},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:112.3,x:1578,y:852.5},0).wait(1).to({scaleX:0.61,scaleY:0.66,skewX:112.7,x:1562.6,y:857.1},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113,skewY:103.9,x:1547.1,y:860.9},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113.4,x:1531.2,y:861.5},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:113.8,x:1506.2,y:861},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:114.2,skewY:104,x:1481.2,y:860.6},0).wait(1).to({scaleX:0.58,scaleY:0.65,skewX:114.6,x:1456.1,y:860.2},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:114.9,x:1431,y:859.7},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:115.3,skewY:104.1,x:1406,y:859.2},0).wait(1).to({scaleX:0.56,scaleY:0.64,skewX:115.7,x:1380.9,y:858.6},0).wait(1).to({scaleX:0.56,scaleY:0.63,skewX:116.1,x:1355.9,y:858},0).wait(1).to({scaleX:0.55,scaleY:0.63,skewX:116.5,x:1330.8,y:857.2},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:116.9,skewY:104.2,x:1305.8,y:856.5},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:117.2,x:1280.8,y:855.6},0).wait(1).to({scaleX:0.53,scaleY:0.62,skewX:117.6,x:1255.7,y:854.6},0).wait(1).to({scaleX:0.53,scaleY:0.61,skewX:118,skewY:104.3,x:1230.7,y:853.4},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.4,x:1205.7,y:851.8},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.8,x:1180.9,y:848.2},0).wait(1).to({scaleX:0.51,scaleY:0.6,skewX:119.2,skewY:104.4,x:1170.6},0).wait(6));

	// dirt04
	this.instance_9 = new lib.dirt04();
	this.instance_9.setTransform(1674.1,827.9,0.638,0.682,0,110.6,103.6);
	this.instance_9.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:7.3,regY:8.4,scaleX:0.63,scaleY:0.68,skewX:111.1,skewY:103.7,x:1659.6,y:834.3,alpha:0.45},0).wait(1).to({scaleX:0.63,scaleY:0.68,skewX:111.5,skewY:103.8,x:1651.5,y:837.9},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:111.9,x:1643.4,y:841.4},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:112.3,x:1635.2,y:844.6},0).wait(1).to({scaleX:0.61,scaleY:0.66,skewX:112.7,x:1626.7,y:847.4},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113,skewY:103.9,x:1618.1,y:849.2},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113.4,x:1609.6,y:847.4},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:113.8,x:1584.8,y:851.2},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:114.2,skewY:104,x:1559.9,y:854.9},0).wait(1).to({scaleX:0.58,scaleY:0.65,skewX:114.6,x:1535.1,y:858.6},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:114.9,x:1510.2,y:862.3},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:115.3,skewY:104.1,x:1485.3,y:865.8},0).wait(1).to({scaleX:0.56,scaleY:0.64,skewX:115.7,x:1460.4,y:869.4},0).wait(1).to({scaleX:0.56,scaleY:0.63,skewX:116.1,x:1435.5,y:872.8},0).wait(1).to({scaleX:0.55,scaleY:0.63,skewX:116.5,x:1410.6,y:876.2},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:116.9,skewY:104.2,x:1385.7,y:879.5},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:117.2,x:1360.7,y:882.5},0).wait(1).to({scaleX:0.53,scaleY:0.62,skewX:117.6,x:1335.7,y:885.5},0).wait(1).to({scaleX:0.53,scaleY:0.61,skewX:118,skewY:104.3,x:1310.7,y:888.2},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.4,x:1285.7,y:890.2},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.8,x:1260.7,y:889.2},0).wait(1).to({scaleX:0.51,scaleY:0.6,skewX:119.2,skewY:104.4,x:1240.6,y:883.3},0).wait(6));

	// dirt03
	this.instance_10 = new lib.dirt03();
	this.instance_10.setTransform(1663.5,821.5,0.638,0.682,0,110.6,103.6,0.2,-0.1);
	this.instance_10.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:5.4,regY:7.5,scaleX:0.63,scaleY:0.68,skewX:111.1,skewY:103.7,x:1646.4,y:828.1,alpha:0.45},0).wait(1).to({scaleX:0.63,scaleY:0.68,skewX:111.5,skewY:103.8,x:1634.8,y:833.2},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:111.9,x:1623.2,y:838},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:112.3,x:1611.4,y:842.5},0).wait(1).to({scaleX:0.61,scaleY:0.66,skewX:112.7,x:1599.5,y:846.6},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113,skewY:103.9,x:1587.3,y:849.7},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113.4,x:1575,y:849},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:113.8,x:1551.9,y:851.6},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:114.2,skewY:104,x:1528.9,y:854.2},0).wait(1).to({scaleX:0.58,scaleY:0.65,skewX:114.6,x:1505.8,y:856.8},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:114.9,x:1482.7,y:859.2},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:115.3,skewY:104.1,x:1459.5,y:861.7},0).wait(1).to({scaleX:0.56,scaleY:0.64,skewX:115.7,x:1436.5,y:864.1},0).wait(1).to({scaleX:0.56,scaleY:0.63,skewX:116.1,x:1413.4,y:866.3},0).wait(1).to({scaleX:0.55,scaleY:0.63,skewX:116.5,x:1390.2,y:868.6},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:116.9,skewY:104.2,x:1367.1,y:870.7},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:117.2,x:1344,y:872.6},0).wait(1).to({scaleX:0.53,scaleY:0.62,skewX:117.6,x:1320.8,y:874.4},0).wait(1).to({scaleX:0.53,scaleY:0.61,skewX:118,skewY:104.3,x:1297.6,y:875.9},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.4,x:1274.4,y:876.8},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.8,x:1251.4,y:874.9},0).wait(1).to({scaleX:0.51,scaleY:0.6,skewX:119.2,skewY:104.4,x:1236,y:872.1},0).wait(6));

	// dirt02
	this.instance_11 = new lib.dirt02();
	this.instance_11.setTransform(1686.5,825.5,0.638,0.682,0,110.6,103.6,11.8,9.5);
	this.instance_11.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:14.7,regY:12.3,scaleX:0.63,scaleY:0.68,skewX:111.1,skewY:103.7,x:1675.7,y:828.7,alpha:0.45},0).wait(1).to({scaleX:0.63,scaleY:0.68,skewX:111.5,skewY:103.8,x:1667,y:830.5},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:111.9,x:1658.5,y:832.2},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:112.3,x:1649.9,y:833.9},0).wait(1).to({scaleX:0.61,scaleY:0.66,skewX:112.7,x:1641.2,y:835.2},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113,skewY:103.9,x:1632.4,y:835.9},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113.4,x:1623.8,y:835},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:113.8,x:1599.3,y:838.1},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:114.2,skewY:104,x:1574.7,y:841.3},0).wait(1).to({scaleX:0.58,scaleY:0.65,skewX:114.6,x:1550.2,y:844.3},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:114.9,x:1525.7,y:847.4},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:115.3,skewY:104.1,x:1501.1,y:850.4},0).wait(1).to({scaleX:0.56,scaleY:0.64,skewX:115.7,x:1476.6,y:853.4},0).wait(1).to({scaleX:0.56,scaleY:0.63,skewX:116.1,x:1452,y:856.4},0).wait(1).to({scaleX:0.55,scaleY:0.63,skewX:116.5,x:1427.5,y:859.3},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:116.9,skewY:104.2,x:1402.9,y:862.1},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:117.2,x:1378.3,y:864.8},0).wait(1).to({scaleX:0.53,scaleY:0.62,skewX:117.6,x:1353.8,y:867.5},0).wait(1).to({scaleX:0.53,scaleY:0.61,skewX:118,skewY:104.3,x:1329.2,y:870},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.4,x:1304.5,y:872.2},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.8,x:1279.9,y:872.7},0).wait(1).to({scaleX:0.51,scaleY:0.6,skewX:119.2,skewY:104.4,x:1258.2,y:869.8},0).wait(6));

	// dirt01
	this.instance_12 = new lib.dirt01();
	this.instance_12.setTransform(1659,838.7,0.638,0.682,0,110.6,103.6);
	this.instance_12.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:7.5,regY:6.2,scaleX:0.63,scaleY:0.68,skewX:111.1,skewY:103.7,x:1641.6,y:846.3,alpha:0.45},0).wait(1).to({scaleX:0.63,scaleY:0.68,skewX:111.5,skewY:103.8,x:1629.4,y:850.6},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:111.9,x:1617.1,y:854.8},0).wait(1).to({scaleX:0.62,scaleY:0.67,skewX:112.3,x:1604.7,y:859},0).wait(1).to({scaleX:0.61,scaleY:0.66,skewX:112.7,x:1592.3,y:862.7},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113,skewY:103.9,x:1579.7,y:866},0).wait(1).to({scaleX:0.6,scaleY:0.66,skewX:113.4,x:1566.8,y:867.5},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:113.8,x:1539.3,y:868.3},0).wait(1).to({scaleX:0.59,scaleY:0.65,skewX:114.2,skewY:104,x:1511.8,y:869.2},0).wait(1).to({scaleX:0.58,scaleY:0.65,skewX:114.6,x:1484.3,y:870},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:114.9,x:1456.7,y:870.8},0).wait(1).to({scaleX:0.57,scaleY:0.64,skewX:115.3,skewY:104.1,x:1429.2,y:871.6},0).wait(1).to({scaleX:0.56,scaleY:0.64,skewX:115.7,x:1401.7,y:872.4},0).wait(1).to({scaleX:0.56,scaleY:0.63,skewX:116.1,x:1374.2,y:873.1},0).wait(1).to({scaleX:0.55,scaleY:0.63,skewX:116.5,x:1346.6,y:873.8},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:116.9,skewY:104.2,x:1319.1,y:874.5},0).wait(1).to({scaleX:0.54,scaleY:0.62,skewX:117.2,x:1291.5,y:875.2},0).wait(1).to({scaleX:0.53,scaleY:0.62,skewX:117.6,x:1264,y:875.8},0).wait(1).to({scaleX:0.53,scaleY:0.61,skewX:118,skewY:104.3,x:1236.5,y:876.3},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.4,x:1209,y:876.6},0).wait(1).to({scaleX:0.52,scaleY:0.61,skewX:118.8,x:1181.4,y:876.1},0).wait(1).to({scaleX:0.51,scaleY:0.6,skewX:119.2,skewY:104.4,x:1169.4,y:873.2},0).wait(6));

	// stomach copy
	this.instance_13 = new lib.stomachcopy();
	this.instance_13.setTransform(1199.9,794.6,1,1,0,0,0,124.5,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(28));

	// intestine
	this.instance_14 = new lib.intestine();
	this.instance_14.setTransform(1508.2,785.7,1,1,0,0,0,219.1,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(28));

	// gills-top
	this.instance_15 = new lib.gillstop();
	this.instance_15.setTransform(1360,832.5,1,1,0,0,0,298.8,79.5);
	this.instance_15.shadow = new cjs.Shadow("rgba(198,100,34,0.878)",1,5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(28));

	// gills-btm
	this.instance_16 = new lib.gillsbtm();
	this.instance_16.setTransform(1355.3,847.7,1,1,0,0,0,299.1,71.2);
	this.instance_16.shadow = new cjs.Shadow("rgba(198,100,34,0.878)",1,5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(28));

	// v
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#632E1C","#6C3822","#835234","#A87C50","#DCB677","#F6D38A","#F8D5AB"],[0,0.098,0.267,0.482,0.733,0.847,0.969],-72.3,3.8,70.4,-6.7).s().p("AoJGsQg0gag8gvQhAgwgGgDQBGhTgBhlQgBgsgfh5QgZhhASg0QAahMB2g3QEJh6CRgUQBygPA2AxQAUASASAgIAeA2QAmA+BDAFQBqAJCuBPQB9A5BMAyQg9AYgFA/QgDAgATBkQiUgMjkBMQjYBIkQCTQhFAlhKAAQhQAAhXgsg");
	this.shape_2.setTransform(1657.9,816.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(28));

	// mantel-lower
	this.instance_17 = new lib.mantellower();
	this.instance_17.setTransform(1378,816.7,1,1,0,0,0,344.5,186.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(28));

	// lower shell
	this.instance_18 = new lib.innerShellupperEdge();
	this.instance_18.setTransform(1111.4,585.3);

	this.instance_19 = new lib.innerShell();
	this.instance_19.setTransform(979,592.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18}]}).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(971,522.2,896.5,573.1);


(lib.internal_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// internal anatomy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#934511").s().p("AgOBzQgWgDgLgkQgKgkAGguQAHgwAUgfQAUggATADQAWADALAkQAKAkgGAuQgHAwgTAgQgTAdgSAAIgDgBg");
	this.shape.setTransform(747.7,218.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#934511").s().p("AgRAxQgLgTgCgcQgCgaAIgVQAIgUANgBQALgBALATQAKATACAcQADAagIAVQgIAUgNABIgCAAQgKAAgKgSg");
	this.shape_1.setTransform(745.4,185.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(36));

	// <Group>_0
	this.instance = new lib.Group_0();
	this.instance.setTransform(100.6,216.2,1,1,0,0,0,15.2,39.9);
	this.instance.shadow = new cjs.Shadow("rgba(160,105,34,0.686)",1,7,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// adductor muscle r
	this.instance_1 = new lib.adductorMuscle_Posterior();
	this.instance_1.setTransform(608.9,141.5,1,1,0,0,0,36.9,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36));

	// foot
	this.instance_2 = new lib.foot_1();
	this.instance_2.setTransform(376,265.3,1,1,0,0,0,376,213.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:376.7,regY:213.3,x:376.7,y:265.1},0).wait(29).to({alpha:0.89},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.67},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.45},0).wait(2));

	// <Group>_4
	this.instance_3 = new lib.Group_4_1();
	this.instance_3.setTransform(89.8,219.8,1,1,0,0,0,11.8,37.2);
	this.instance_3.shadow = new cjs.Shadow("rgba(160,105,34,0.349)",1,3,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36));

	// Adductor muscle L
	this.instance_4 = new lib.adductorMuscle_Anterior();
	this.instance_4.setTransform(157.3,99.8,1,1,-24.9,0,0,34.6,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36));

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9C882").s().p("ArOCFQAsgdBFgUQA9gZEagoQEGgiAAgBQAFADEAgxQEQg0A3geQAvgRA+gSQBJgVAfgKQgmA0goAeQgrAhhCAZQg9AgkVAzQkOA0AGgHIAAAAIAAAAQgCACkFAlQkXAng2AXQgsANhDAOQhCANgnAMQAmgxAsgdg");
	this.shape_2.setTransform(575,196.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(36));

	// stomach
	this.instance_5 = new lib.stomach_1();
	this.instance_5.setTransform(220.9,191.1,1,1,0,0,0,124.5,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36));

	// intestine
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DBB16E").s().p("Egh0ANTQgyhfAwiHQAviIBphCIAlgWQgEgVAFhKQADgughgsIBJiHQAsA6ARBLQAKArALBXQCEgrBjAvQA5AbBKBSQAsAwAUALIAeASIAegWQgTg9glhIQgcg3hCh0QiQj5gsiIQhJjkA6jXQAwi0CKhnQCKhmDRgMQBdgGCIAMQBRAGCeATQCBAQA4AFQBeAIAygEIBZgIQENgXEFAYQDyAWEwBEQENA9DHCiQCYB7C3D+QBRBwDrBIQBXAaBUAOQBLAMAdgFIATCLIgLABQiCAKjxhbQkBhghPhtQirjtiFhtQiwiRjzg3QkohCjdgVQj7gYkMAXIhaAIIgEAAQg7AEhggIQhAgFiEgRQidgShIgGQiDgLhVAEIgPABQlDAYhJEPQgvCwBBDCQAnB1CEDlQBDB2AeA6QAfA8AVA6QATgNAWgMQAfgQBQhDQB4hlBFghQB0g4BgAsQBkAuAwBWQAwBXgOBrQgTCSh2B7Qh/CFivAYQhTAMhPgfQhAgYhHg4QhmCtkrAXQgfACghABIgcAAQlJAAhbitgA/0KYQgeBQAUAnQAbAyBVAaQBVAZCCgCQCLgDBagjQBagiAjg/IAHgNIgqgjQhQAuhHARQhWAThPgXQhhgdg6g8QgvgygbhNQg8AmgfBUgAtrFFQgtAbheBNQgsAmgYASQgkAbgdAQQgbAOglAbQAJA9gFA0QBDA5AuAXQA+AeA7gJQCAgSBfhgQBYhZANhmQAQh5h1g3QgQgHgTAAQgmAAg0AegA8eHeQAPA5AeAfQAhAkBAATQBCAUBTgiQgUgRgjgnQg5g/gkgQQgagLgfAAQgnAAgvARg");
	this.shape_3.setTransform(529.2,182.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#937340").s().p("Egh0ANTQgyhfAwiHQAviIBphCIAlgWQgEgVAFhKQADgughgsIBJiHQAsA6ARBLQAKArALBXQCEgrBjAvQA5AbBKBSQAsAwAUALIAeASIAegWQgTg9glhIQgcg3hCh0QiQj5gsiIQhJjkA6jXQAwi0CKhnQCKhmDRgMQBdgGCIAMQBRAGCeATQCBAQA4AFQBeAIAygEIBZgIQENgXEFAYQDyAWEwBEQENA9DHCiQCYB7C3D+QBRBwDrBIQBXAaBUAOQBLAMAdgFIATCLIgLABQiCAKjxhbQkBhghPhtQirjtiFhtQiwiRjzg3QkohCjdgVQj7gYkMAXIhaAIIgEAAQg7AEhggIQhAgFiEgRQidgShIgGQiDgLhVAEIgPABQlDAYhJEPQgvCwBBDCQAnB1CEDlQBDB2AeA6QAfA8AVA6QATgNAWgMQAfgQBQhDQB4hlBFghQB0g4BgAsQBkAuAwBWQAwBXgOBrQgTCSh2B7Qh/CFivAYQhTAMhPgfQhAgYhHg4QhmCtkrAXQgfACghABIgcAAQlJAAhbitgA/0KYQgeBQAUAnQAbAyBVAaQBVAZCCgCQCLgDBagjQBagiAjg/IAHgNIgqgjQhQAuhHARQhWAThPgXQhhgdg6g8QgvgygbhNQg8AmgfBUgAtrFFQgtAbheBNQgsAmgYASQgkAbgdAQQgbAOglAbQAJA9gFA0QBDA5AuAXQA+AeA7gJQCAgSBfhgQBYhZANhmQAQh5h1g3QgQgHgTAAQgmAAg0AegA8eHeQAPA5AeAfQAhAkBAATQBCAUBTgiQgUgRgjgnQg5g/gkgQQgagLgfAAQgnAAgvARg");
	this.shape_4.setTransform(532,185.2,1,1.001,0,-2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(36));

	// Blend
	this.instance_6 = new lib.gillstop();
	this.instance_6.setTransform(381,229,1,1,0,0,0,298.8,79.5);
	this.instance_6.shadow = new cjs.Shadow("rgba(198,100,34,0.878)",1,5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36));

	// Blend_1
	this.instance_7 = new lib.gillsbtm();
	this.instance_7.setTransform(376.3,244.3,1,1,0,0,0,299.1,71.2);
	this.instance_7.shadow = new cjs.Shadow("rgba(198,100,34,0.878)",1,5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36));

	// Layer 12
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#632E1C","#6C3822","#835234","#A87C50","#DCB677","#F6D38A","#F8D5AB"],[0,0.098,0.267,0.482,0.733,0.847,0.969],-72.3,3.8,70.4,-6.7).s().p("AoJGsQg0gag8gvQhAgwgGgDQBGhTgBhlQgBgsgfh5QgZhhASg0QAahMB2g3QEJh6CRgUQBygPA2AxQAUASASAgIAeA2QAmA+BDAFQBqAJCuBPQB9A5BMAyQg9AYgFA/QgDAgATBkQiUgMjkBMQjYBIkQCTQhFAlhKAAQhQAAhXgsg");
	this.shape_5.setTransform(678.9,213.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(36));

	// mantel-lower
	this.instance_8 = new lib.mantellower();
	this.instance_8.setTransform(399,213.3,1,1,0,0,0,344.5,186.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,26.6,775,466.3);


(lib.bubbles_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubble
	this.bubble = new lib.bubblecopy();
	this.bubble.setTransform(28,157.5,0.088,0.076);

	this.timeline.addTween(cjs.Tween.get(this.bubble).wait(1).to({x:34.5},0).wait(1).to({x:40.9},0).wait(1).to({x:47.4},0).wait(1).to({x:42.5},0).wait(1).to({x:37.7},0).wait(1).to({x:32.8},0).wait(1).to({x:28},0).wait(1));

	// bubble
	this.bubble_1 = new lib.bubblecopy();
	this.bubble_1.setTransform(55.2,320.5,0.067,0.067);

	this.timeline.addTween(cjs.Tween.get(this.bubble_1).wait(1).to({x:59.9},0).wait(1).to({x:64.7},0).wait(1).to({x:69.4},0).wait(1).to({x:74.2},0).wait(1).to({x:67.8},0).wait(1).to({x:61.5},0).wait(1).to({x:55.2},0).wait(1));

	// bubble
	this.bubble_2 = new lib.bubblecopy();
	this.bubble_2.setTransform(78.3,285,0.067,0.067);

	this.timeline.addTween(cjs.Tween.get(this.bubble_2).wait(1).to({x:70.6},0).wait(1).to({x:62.9},0).wait(1).to({x:55.2},0).wait(1).to({x:57.5},0).wait(1).to({x:59.8},0).wait(1).to({x:62.1},0).wait(1).to({x:64.4},0).wait(1));

	// bubble
	this.bubble_3 = new lib.bubblecopy();
	this.bubble_3.setTransform(65.4,59.8,0.111,0.111);

	this.timeline.addTween(cjs.Tween.get(this.bubble_3).wait(1).to({x:57.9,y:59.3},0).wait(1).to({x:50.4,y:58.8},0).wait(1).to({x:43,y:58.4},0).wait(1).to({x:51,y:58.7},0).wait(1).to({x:59.1,y:59.1},0).wait(1).to({x:67.1,y:59.4},0).wait(1).to({x:75.2,y:59.8},0).wait(1));

	// bubble
	this.bubble_4 = new lib.bubblecopy();
	this.bubble_4.setTransform(25.4,25.4,0.369,0.369);

	this.timeline.addTween(cjs.Tween.get(this.bubble_4).wait(1).to({x:32.4},0).wait(1).to({x:39.4},0).wait(1).to({x:46.4},0).wait(1).to({x:53.4},0).wait(1).to({x:36.5,y:25.8},0).wait(1).to({x:19.6,y:26.3},0).wait(1).to({x:2.7,y:26.8},0).wait(1));

	// bubble
	this.bubble_5 = new lib.bubblecopy();
	this.bubble_5.setTransform(48.9,211.2,0.637,0.637);

	this.timeline.addTween(cjs.Tween.get(this.bubble_5).wait(1).to({x:71.5},0).wait(1).to({x:94.2},0).wait(1).to({x:78.6},0).wait(1).to({x:63},0).wait(1).to({x:47.4},0).wait(1).to({x:31.8},0).wait(1).to({x:16.2},0).wait(1));

	// bubble
	this.bubble_6 = new lib.bubblecopy();
	this.bubble_6.setTransform(112.7,147.6,0.345,0.345);

	this.timeline.addTween(cjs.Tween.get(this.bubble_6).wait(1).to({x:105.4,y:146.7},0).wait(1).to({x:98,y:145.7},0).wait(1).to({x:90.7,y:144.8},0).wait(1).to({x:83.4,y:143.9},0).wait(1).to({x:86,y:143.8},0).wait(1).to({x:88.6},0).wait(1).to({x:91.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.3,325);


(lib.BackgroundLoop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rocks-foreground
	this.rock11 = new lib.rock09copy();
	this.rock11.setTransform(214.3,1248.9,1.048,1.048,0,0,0,-3.1,-8.1);

	this.rock12 = new lib.rock08copy();
	this.rock12.setTransform(256.1,1170,1.408,1.408,0,0,0,-3.2,-8.1);

	this.rock11_1 = new lib.rock09copy();
	this.rock11_1.setTransform(1021.1,1967.3,1.331,1.331,0,0,0,-3.1,-8.1);

	this.rock10 = new lib.rock10_mccopy();
	this.rock10.setTransform(1050.4,1553.8,1.331,1.331,22.2);

	this.rock12_1 = new lib.rock08copy();
	this.rock12_1.setTransform(868.5,1845,1.787,1.787,0,0,0,-3.2,-8.1);

	this.rock05 = new lib.rock02copy();
	this.rock05.setTransform(169.6,1824.6,1.993,1.993,0,0,0,-3.1,-8.2);

	this.rock08 = new lib.rock04copy();
	this.rock08.setTransform(9.8,1789.2,1.331,1.331,0,0,0,-3.1,-8.2);

	this.rock09 = new lib.rock03copy();
	this.rock09.setTransform(1275.9,1796.1,1.816,1.816,0,0,180,-3.1,-8.2);

	this.rock = new lib.rock07copy();
	this.rock.setTransform(845.5,1409.8,1,1,0,0,0,-3.1,-8.2);

	this.rock02 = new lib.rock01copy();
	this.rock02.setTransform(1014.2,1372,1.331,1.331,0,0,0,-3.1,-8.2);

	this.rock03 = new lib.rock06copy();
	this.rock03.setTransform(62.6,1708.9,1.908,1.908,0,0,0,-3.1,-8.1);

	this.rock04 = new lib.rock05copy();
	this.rock04.setTransform(-53.5,1652.7,1.331,1.331,0,0,0,-3,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rock04},{t:this.rock03},{t:this.rock02},{t:this.rock},{t:this.rock09},{t:this.rock08},{t:this.rock05},{t:this.rock12_1},{t:this.rock10},{t:this.rock11_1},{t:this.rock12},{t:this.rock11}]}).wait(160));

	// grass copy 2
	this.instance = new lib.grass_mccopy();
	this.instance.setTransform(189.5,858.2,0.386,0.385,0,-6.8,0,243.1,583.6);
	this.instance.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:431.4,regY:322,skewX:-6.6,x:250.5,y:758},0).wait(1).to({skewX:-6.5,x:250.8},0).wait(1).to({skewX:-6.3,x:251.1},0).wait(1).to({skewX:-6.2,x:251.3,y:757.9},0).wait(1).to({skewX:-6,x:251.6},0).wait(1).to({skewX:-5.9,x:251.8},0).wait(1).to({skewX:-5.7,x:252.1},0).wait(1).to({skewX:-5.6,x:252.4,y:757.8},0).wait(1).to({skewX:-5.4,x:252.7},0).wait(1).to({skewX:-5.3,x:252.9},0).wait(1).to({skewX:-5.1,x:253.2},0).wait(1).to({skewX:-4.9,x:253.5,y:757.7},0).wait(1).to({skewX:-4.8,x:253.7},0).wait(1).to({skewX:-4.6,x:254,y:757.6},0).wait(1).to({skewX:-4.5,x:254.2},0).wait(1).to({skewX:-4.3,x:254.5},0).wait(1).to({skewX:-4.2,x:254.8},0).wait(1).to({skewX:-4,x:255.1},0).wait(1).to({skewX:-3.9,x:255.3,y:757.5},0).wait(1).to({skewX:-3.7,x:255.6},0).wait(1).to({skewX:-3.6,x:255.9},0).wait(1).to({skewX:-3.4,x:256.1},0).wait(1).to({skewX:-3.3,x:256.4},0).wait(1).to({skewX:-3.1,x:256.6},0).wait(1).to({skewX:-3,x:256.9,y:757.4},0).wait(1).to({skewX:-2.8,x:257.2},0).wait(1).to({skewX:-2.7,x:257.4},0).wait(1).to({skewX:-2.6,x:257.5},0).wait(1).to({scaleY:0.39,x:257.6},0).wait(1).to({skewX:-2.5,x:257.7},0).wait(1).to({x:257.8,y:757.3},0).wait(1).to({skewX:-2.4,x:257.9,y:757.4},0).wait(1).to({x:258},0).wait(1).to({skewX:-2.3,x:258.1,y:757.3},0).wait(1).to({x:258.2},0).wait(1).to({skewX:-2.2},0).wait(1).to({x:258.3},0).wait(1).to({skewX:-2.1,x:258.4},0).wait(1).to({x:258.5},0).wait(1).to({skewX:-2,x:258.6},0).wait(2).to({skewX:-1.9,x:258.7},0).wait(1).to({x:258.8},0).wait(1).to({skewX:-1.8,x:258.9},0).wait(1).to({x:259},0).wait(1).to({skewX:-1.7,x:259.1},0).wait(2).to({skewX:-1.6,x:259.2},0).wait(1).to({x:259.3},0).wait(1).to({skewX:-1.5,x:259.4,y:757.2},0).wait(1).to({x:259.5},0).wait(1).to({skewX:-1.4,x:259.6,y:757.3},0).wait(1).to({x:259.7},0).wait(1).to({skewX:-1.5,x:259.4},0).wait(1).to({skewX:-1.7,x:259.2,y:757.2},0).wait(1).to({skewX:-1.8,x:259},0).wait(1).to({skewX:-1.9,x:258.7},0).wait(1).to({skewX:-2.1,x:258.5},0).wait(1).to({skewX:-2.2,x:258.2,y:757.3},0).wait(1).to({skewX:-2.3,x:258},0).wait(1).to({skewX:-2.5,x:257.8},0).wait(1).to({skewX:-2.6,x:257.6},0).wait(1).to({skewX:-2.7,x:257.3},0).wait(1).to({skewX:-2.9,x:257.1},0).wait(1).to({skewX:-3,x:256.9},0).wait(1).to({skewX:-3.1,x:256.6},0).wait(1).to({skewX:-3.3,x:256.4},0).wait(1).to({skewX:-3.4,x:256.1},0).wait(1).to({skewX:-3.5,x:255.9,y:757.4},0).wait(1).to({skewX:-3.7,x:255.7},0).wait(1).to({skewX:-3.8,x:255.5},0).wait(1).to({skewX:-3.9,x:255.2},0).wait(1).to({skewX:-4.1,x:255},0).wait(1).to({skewX:-4.2,x:254.8},0).wait(1).to({skewX:-4.3,x:254.5},0).wait(1).to({skewX:-4.5,x:254.3,y:757.5},0).wait(1).to({skewX:-4.6,x:254},0).wait(1).to({skewX:-4.7,x:253.8},0).wait(1).to({skewX:-4.9,x:253.6},0).wait(1).to({skewX:-5,x:253.3},0).wait(1).to({skewX:-5.1,x:253.1,y:757.6},0).wait(1).to({skewX:-5.3,x:252.9,y:757.5},0).wait(1).to({skewX:-5.4,x:252.7,y:757.6},0).wait(1).to({skewX:-5.5,x:252.4},0).wait(1).to({skewX:-5.7,x:252.2},0).wait(1).to({skewX:-5.8,x:251.9},0).wait(1).to({skewX:-5.9,x:251.7,y:757.7},0).wait(1).to({skewX:-6.1,x:251.4},0).wait(1).to({skewX:-5.9,x:251.7},0).wait(1).to({skewX:-5.8,x:251.9,y:757.6},0).wait(1).to({skewX:-5.7,x:252.1},0).wait(1).to({skewX:-5.6,x:252.3},0).wait(1).to({skewX:-5.4,x:252.6,y:757.5},0).wait(1).to({skewX:-5.3,x:252.7},0).wait(1).to({skewX:-5.2,x:253},0).wait(1).to({skewX:-5.1,x:253.2},0).wait(1).to({skewX:-4.9,x:253.4,y:757.4},0).wait(1).to({skewX:-4.8,x:253.6},0).wait(1).to({skewX:-4.7,x:253.9},0).wait(1).to({skewX:-4.6,x:254.1},0).wait(1).to({skewX:-4.5,x:254.3,y:757.3},0).wait(1).to({skewX:-4.3,x:254.5,y:757.4},0).wait(1).to({skewX:-4.2,x:254.7,y:757.3},0).wait(1).to({skewX:-4.1,x:254.9},0).wait(1).to({skewX:-4,x:255.2},0).wait(1).to({skewX:-3.8,x:255.4},0).wait(1).to({skewX:-3.7,x:255.6,y:757.2},0).wait(1).to({skewX:-3.6,x:255.8,y:757.3},0).wait(1).to({skewX:-3.5,x:256,y:757.2},0).wait(1).to({skewX:-3.3,x:256.3},0).wait(1).to({skewX:-3.2,x:256.5},0).wait(1).to({skewX:-3.1,x:256.7},0).wait(1).to({skewX:-3,x:256.9},0).wait(1).to({skewX:-2.8,x:257.1},0).wait(1).to({scaleY:0.39,skewX:-2.7,x:257.3,y:757.1},0).wait(1).to({skewX:-2.6,x:257.6},0).wait(1).to({skewX:-2.5,x:257.8},0).wait(1).to({skewX:-2.3,x:258},0).wait(1).to({skewX:-2.2,x:258.2},0).wait(1).to({skewX:-2.1,x:258.4},0).wait(1).to({skewX:-2,x:258.7},0).wait(1).to({skewX:-1.9,x:258.9,y:757},0).wait(1).to({skewX:-1.7,x:259.1,y:757.1},0).wait(1).to({skewX:-1.6,x:259.3,y:757},0).wait(1).to({skewX:-1.5,x:259.5},0).wait(1).to({skewX:-1.4,x:259.7},0).wait(1).to({skewX:-1.2,x:260},0).wait(1).to({skewX:-1.1,x:260.2},0).wait(1).to({skewX:-1,x:260.4},0).wait(1).to({skewX:-0.9,x:260.6},0).wait(1).to({skewX:-0.7,x:260.8},0).wait(1).to({skewX:-0.6,x:261.1},0).wait(1).to({skewX:-0.5,x:261.2},0).wait(1).to({skewX:-0.4,x:261.5,y:756.9},0).wait(1).to({skewX:-0.2,x:261.7},0).wait(1).to({skewX:-0.1,x:261.9,y:757},0).wait(1).to({skewX:0,x:262.1},0).wait(1).to({skewX:-0.3,x:261.7},0).wait(1).to({skewX:-0.5,x:261.2},0).wait(1).to({skewX:-0.8,x:260.8},0).wait(1).to({skewX:-1,x:260.3},0).wait(1).to({skewX:-1.3,x:259.9,y:756.9},0).wait(1).to({skewX:-1.5,x:259.4,y:757},0).wait(1).to({skewX:-1.8,x:259},0).wait(1).to({skewX:-2,x:258.5},0).wait(1).to({skewX:-2.3,x:258.1},0).wait(1).to({skewX:-2.5,x:257.6},0).wait(1).to({skewX:-2.8,x:257.2,y:757.1},0).wait(1).to({skewX:-3,x:256.7},0).wait(1).to({skewX:-3.3,x:256.3},0).wait(1).to({skewX:-3.6,x:255.8},0).wait(1).to({skewX:-3.8,x:255.4},0).wait(1).to({skewX:-4.1,x:255,y:757.2},0).wait(1).to({skewX:-4.3,x:254.5},0).wait(1).to({skewX:-4.6,x:254.1},0).wait(1).to({skewX:-4.8,x:253.6},0).wait(1).to({skewX:-5.1,x:253.2,y:757.3},0).wait(1).to({skewX:-5.3,x:252.7},0).wait(1).to({skewX:-5.6,x:252.3},0).wait(1));

	// grass copy
	this.instance_1 = new lib.grass_mccopy();
	this.instance_1.setTransform(45.8,868.8,0.386,0.385,0,-6.8,0,242.7,583.6);
	this.instance_1.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:431.4,regY:322,skewX:-6.7,x:106.9,y:768.7},0).wait(1).to({skewX:-6.6,x:107},0).wait(1).to({skewX:-6.5,x:107.2},0).wait(1).to({skewX:-6.4,x:107.3,y:768.6},0).wait(1).to({skewX:-6.3,x:107.5,y:768.7},0).wait(1).to({skewX:-6.2,x:107.6,y:768.6},0).wait(1).to({x:107.8},0).wait(1).to({skewX:-6.1,x:107.9},0).wait(1).to({skewX:-6,x:108.1,y:768.5},0).wait(1).to({skewX:-5.9,x:108.2,y:768.6},0).wait(1).to({skewX:-5.8,x:108.4,y:768.5},0).wait(1).to({skewX:-5.7,x:108.5},0).wait(1).to({skewX:-5.6,x:108.7},0).wait(1).to({skewX:-5.5,x:108.9},0).wait(1).to({x:109},0).wait(1).to({skewX:-5.4,x:109.1,y:768.4},0).wait(1).to({skewX:-5.3,x:109.3},0).wait(1).to({skewX:-5.2,x:109.5},0).wait(1).to({skewX:-5.1,x:109.6},0).wait(1).to({skewX:-5,x:109.8},0).wait(1).to({skewX:-4.9,x:109.9},0).wait(1).to({skewX:-4.8,x:110.1,y:768.3},0).wait(1).to({x:110.2,y:768.4},0).wait(1).to({skewX:-4.7,x:110.4,y:768.3},0).wait(1).to({skewX:-4.6,x:110.5},0).wait(1).to({skewX:-4.5,x:110.7},0).wait(1).to({skewX:-4.4,x:110.8},0).wait(1).to({skewX:-4.3,x:111},0).wait(1).to({skewX:-4.2,x:111.1},0).wait(1).to({skewX:-4.1,x:111.3},0).wait(1).to({x:111.5,y:768.2},0).wait(1).to({skewX:-4,x:111.6},0).wait(1).to({skewX:-3.9,x:111.7},0).wait(1).to({skewX:-3.8,x:111.9},0).wait(1).to({skewX:-3.7,x:112.1},0).wait(1).to({skewX:-3.6,x:112.2},0).wait(1).to({skewX:-3.5,x:112.4},0).wait(1).to({x:112.5,y:768.1},0).wait(1).to({skewX:-3.4,x:112.7},0).wait(1).to({skewX:-3.3,x:112.8,y:768.2},0).wait(1).to({skewX:-3.2,x:113,y:768.1},0).wait(1).to({skewX:-3.1,x:113.1},0).wait(1).to({skewX:-3,x:113.3},0).wait(1).to({skewX:-2.9,x:113.5},0).wait(1).to({skewX:-2.8,x:113.6},0).wait(1).to({x:113.7},0).wait(1).to({skewX:-2.7,x:113.9},0).wait(1).to({skewX:-2.6,x:114,y:768},0).wait(1).to({skewX:-2.5,x:114.1,y:768.1},0).wait(1).to({x:114.2},0).wait(1).to({skewX:-2.4,x:114.3},0).wait(1).to({skewX:-2.3,x:114.5,y:768},0).wait(1).to({x:114.6},0).wait(1).to({skewX:-2.2,x:114.7},0).wait(1).to({x:114.8},0).wait(1).to({skewX:-2.1,x:114.9},0).wait(1).to({skewX:-2,x:115},0).wait(1).to({x:115.1},0).wait(1).to({skewX:-1.9,x:115.3},0).wait(1).to({skewX:-1.8,x:115.4},0).wait(1).to({x:115.5},0).wait(1).to({skewX:-1.7,x:115.6},0).wait(1).to({x:115.7},0).wait(1).to({skewX:-1.6,x:115.8},0).wait(1).to({skewX:-1.5,x:115.9},0).wait(1).to({x:116},0).wait(1).to({skewX:-1.4,x:116.1},0).wait(1).to({skewX:-1.5,x:115.9},0).wait(1).to({skewX:-1.7,x:115.6},0).wait(1).to({skewX:-1.8,x:115.4},0).wait(1).to({scaleY:0.39,skewX:-2,x:115.1},0).wait(1).to({skewX:-2.1,x:114.9},0).wait(1).to({skewX:-2.2,x:114.6},0).wait(1).to({skewX:-2.4,x:114.4},0).wait(1).to({skewX:-2.5,x:114.2},0).wait(1).to({skewX:-2.7,x:113.9},0).wait(1).to({skewX:-2.8,x:113.6,y:768.1},0).wait(1).to({skewX:-3,x:113.4,y:768},0).wait(1).to({skewX:-3.1,x:113.1,y:768.1},0).wait(1).to({skewX:-3.2,x:112.9},0).wait(1).to({skewX:-3.4,x:112.6},0).wait(1).to({skewX:-3.5,x:112.4},0).wait(1).to({skewX:-3.7,x:112.1},0).wait(1).to({skewX:-3.8,x:111.9},0).wait(1).to({skewX:-3.9,x:111.7},0).wait(1).to({skewX:-4.1,x:111.4,y:768.2},0).wait(1).to({skewX:-4.2,x:111.2},0).wait(1).to({skewX:-4.4,x:110.9},0).wait(1).to({skewX:-4.5,x:110.7},0).wait(1).to({skewX:-4.6,x:110.4},0).wait(1).to({skewX:-4.8,x:110.2,y:768.3},0).wait(1).to({skewX:-4.9,x:109.9},0).wait(1).to({skewX:-5.1,x:109.6},0).wait(1).to({skewX:-5.2,x:109.4},0).wait(1).to({skewX:-5.4,x:109.2},0).wait(1).to({skewX:-5.5,x:108.9,y:768.4},0).wait(1).to({skewX:-5.6,x:108.7},0).wait(1).to({skewX:-5.8,x:108.4},0).wait(1).to({skewX:-5.9,x:108.2},0).wait(1).to({skewX:-6.1,x:107.9,y:768.5},0).wait(1).to({skewX:-5.8,x:108.3,y:768.4},0).wait(1).to({skewX:-5.6,x:108.7},0).wait(1).to({skewX:-5.4,x:109.1,y:768.3},0).wait(1).to({skewX:-5.2,x:109.5},0).wait(1).to({skewX:-5,x:109.8},0).wait(1).to({skewX:-4.8,x:110.2,y:768.2},0).wait(1).to({skewX:-4.5,x:110.6},0).wait(1).to({skewX:-4.3,x:111},0).wait(1).to({skewX:-4.1,x:111.4,y:768.1},0).wait(1).to({skewX:-3.9,x:111.7},0).wait(1).to({skewX:-3.7,x:112.1},0).wait(1).to({skewX:-3.5,x:112.5},0).wait(1).to({skewX:-3.2,x:112.9},0).wait(1).to({skewX:-3,x:113.2,y:768},0).wait(1).to({skewX:-2.8,x:113.6},0).wait(1).to({skewX:-2.6,x:114},0).wait(1).to({skewX:-2.4,x:114.4},0).wait(1).to({skewX:-2.2,x:114.8,y:767.9},0).wait(1).to({skewX:-1.9,x:115.1,y:768},0).wait(1).to({skewX:-1.7,x:115.5,y:767.9},0).wait(1).to({skewX:-1.5,x:115.9},0).wait(1).to({skewX:-1.3,x:116.3},0).wait(1).to({skewX:-1.1,x:116.7},0).wait(1).to({skewX:-0.9,x:117},0).wait(1).to({skewX:-0.6,x:117.4},0).wait(1).to({skewX:-0.4,x:117.8},0).wait(1).to({skewX:-0.2,x:118.2},0).wait(1).to({skewX:0,x:118.6,y:767.8},0).wait(1).to({skewX:-0.1,x:118.4},0).wait(1).to({skewX:-0.2,x:118.2},0).wait(1).to({skewX:-0.3,x:118},0).wait(1).to({skewX:-0.5,x:117.8},0).wait(1).to({skewX:-0.6,x:117.6},0).wait(1).to({skewX:-0.7,x:117.4},0).wait(1).to({skewX:-0.8,x:117.2,y:767.9},0).wait(1).to({skewX:-0.9,x:117},0).wait(1).to({skewX:-1,x:116.8},0).wait(1).to({skewX:-1.1,x:116.6},0).wait(1).to({skewX:-1.3,x:116.4},0).wait(1).to({skewX:-1.4,x:116.2},0).wait(1).to({skewX:-1.5,x:116},0).wait(1).to({skewX:-1.6,x:115.8},0).wait(1).to({skewX:-1.7,x:115.6},0).wait(1).to({skewX:-1.8,x:115.4},0).wait(1).to({skewX:-2,x:115.2},0).wait(1).to({skewX:-2.1,x:115},0).wait(1).to({skewX:-2.2,x:114.8},0).wait(1).to({skewX:-2.3,x:114.6},0).wait(1).to({skewX:-2.4,x:114.3},0).wait(1).to({skewX:-2.5,x:114.1,y:768},0).wait(1).to({skewX:-2.6,x:113.9,y:767.9},0).wait(1).to({skewX:-2.8,x:113.7},0).wait(1).to({skewX:-2.9,x:113.5,y:768},0).wait(1).to({skewX:-3,x:113.3},0).wait(1).to({skewX:-3.1,x:113.1},0).wait(1).to({skewX:-3.2,x:112.9},0).wait(1).to({skewX:-3.3,x:112.7},0).wait(1).to({skewX:-3.4,x:112.5},0).wait(1).to({skewX:-3.6,x:112.3},0).wait(1));

	// grass
	this.instance_2 = new lib.grass_mccopy();
	this.instance_2.setTransform(857.5,1484.1,1,1,0,0,0,255.3,584.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:431.4,regY:322,skewX:-0.2,x:1032.5,y:1221.9},0).wait(1).to({skewX:-0.4,x:1031.6,y:1221.8},0).wait(1).to({scaleY:1,skewX:-0.6,x:1030.6},0).wait(1).to({skewX:-0.9,x:1029.6,y:1221.7},0).wait(1).to({skewX:-1.1,x:1028.6},0).wait(1).to({skewX:-1.3,x:1027.6},0).wait(1).to({skewX:-1.5,x:1026.6},0).wait(1).to({scaleY:1,skewX:-1.7,x:1025.6,y:1221.6},0).wait(1).to({skewX:-1.9,x:1024.6},0).wait(1).to({skewX:-2.2,x:1023.7},0).wait(1).to({skewX:-2.4,x:1022.6},0).wait(1).to({skewX:-2.6,x:1021.6},0).wait(1).to({scaleY:1,skewX:-2.8,x:1020.7},0).wait(1).to({skewX:-3,x:1019.6},0).wait(1).to({skewX:-3.2,x:1018.7},0).wait(1).to({skewX:-3.5,x:1017.7},0).wait(1).to({skewX:-3.7,x:1016.7},0).wait(1).to({scaleY:1,skewX:-3.9,x:1015.7},0).wait(1).to({skewX:-4.1,x:1014.7},0).wait(1).to({skewX:-4.3,x:1013.7},0).wait(1).to({skewX:-4.5,x:1012.7,y:1221.7},0).wait(1).to({skewX:-4.8,x:1011.7},0).wait(1).to({scaleY:1,skewX:-5,x:1010.7},0).wait(1).to({skewX:-5.2,x:1009.7},0).wait(1).to({skewX:-5.4,x:1008.7,y:1221.8},0).wait(1).to({skewX:-5.6,x:1007.7},0).wait(1).to({skewX:-5.8,x:1006.7,y:1221.9},0).wait(1).to({scaleY:1.01,skewX:-6.1,x:1005.7},0).wait(1).to({scaleY:1,skewX:-5.9,x:1006.4},0).wait(1).to({skewX:-5.8,x:1007},0).wait(1).to({skewX:-5.6,x:1007.7},0).wait(1).to({skewX:-5.5,x:1008.3},0).wait(1).to({skewX:-5.4,x:1009},0).wait(1).to({skewX:-5.2,x:1009.6,y:1221.8},0).wait(1).to({scaleY:1,skewX:-5.1,x:1010.3},0).wait(1).to({skewX:-4.9,x:1010.9},0).wait(1).to({skewX:-4.8,x:1011.6},0).wait(1).to({skewX:-4.6,x:1012.2},0).wait(1).to({skewX:-4.5,x:1012.9},0).wait(1).to({skewX:-4.4,x:1013.5,y:1221.7},0).wait(1).to({scaleY:1,skewX:-4.2,x:1014.2,y:1221.8},0).wait(1).to({skewX:-4.1,x:1014.8},0).wait(1).to({skewX:-3.9,x:1015.5},0).wait(1).to({skewX:-3.8,x:1016.1},0).wait(1).to({skewX:-3.7,x:1016.8},0).wait(1).to({skewX:-3.5,x:1017.4,y:1221.7},0).wait(1).to({scaleY:1,skewX:-3.4,x:1018.1,y:1221.8},0).wait(1).to({skewX:-3.2,x:1018.7},0).wait(1).to({skewX:-3.1,x:1019.3},0).wait(1).to({skewX:-3,x:1020},0).wait(1).to({skewX:-2.8,x:1020.7},0).wait(1).to({skewX:-2.7,x:1021.3},0).wait(1).to({scaleY:1,skewX:-2.5,x:1022,y:1221.9},0).wait(1).to({skewX:-2.4,x:1022.6,y:1221.8},0).wait(1).to({skewX:-2.2,x:1023.3,y:1221.9},0).wait(1).to({skewX:-2.1,x:1023.9},0).wait(1).to({skewX:-2,x:1024.6},0).wait(1).to({skewX:-1.8,x:1025.2},0).wait(1).to({scaleY:1,skewX:-1.7,x:1025.8,y:1222},0).wait(1).to({skewX:-1.5,x:1026.5},0).wait(1).to({skewX:-1.4,x:1027.1},0).wait(1).to({skewX:-1.5,x:1026.8},0).wait(1).to({x:1026.6},0).wait(1).to({skewX:-1.6,x:1026.3},0).wait(1).to({skewX:-1.7,x:1026},0).wait(1).to({x:1025.7},0).wait(1).to({skewX:-1.8,x:1025.4},0).wait(1).to({x:1025.1},0).wait(1).to({skewX:-1.9,x:1024.8},0).wait(1).to({skewX:-2,x:1024.5},0).wait(1).to({x:1024.2},0).wait(1).to({skewX:-2.1,x:1024},0).wait(1).to({scaleY:1,skewX:-2.2,x:1023.7},0).wait(1).to({x:1023.4},0).wait(1).to({skewX:-2.3,x:1023.1},0).wait(1).to({x:1022.8},0).wait(1).to({skewX:-2.4,x:1022.5},0).wait(1).to({skewX:-2.5,x:1022.2},0).wait(1).to({x:1021.9},0).wait(1).to({skewX:-2.6,x:1021.6},0).wait(1).to({skewX:-2.7,x:1021.4},0).wait(1).to({x:1021,y:1222.1},0).wait(1).to({skewX:-2.8,x:1020.6},0).wait(1).to({scaleY:1,skewX:-2.9,x:1020.3,y:1222.2},0).wait(1).to({skewX:-3,x:1019.9},0).wait(1).to({skewX:-3.1,x:1019.5},0).wait(1).to({x:1019.1,y:1222.3},0).wait(1).to({skewX:-3.2,x:1018.8},0).wait(1).to({skewX:-3.3,x:1018.4,y:1222.4},0).wait(1).to({skewX:-3.4,x:1018.1,y:1222.5},0).wait(1).to({skewX:-3.5,x:1017.7},0).wait(1).to({x:1017.3},0).wait(1).to({skewX:-3.6,x:1017},0).wait(1).to({skewX:-3.7,x:1016.6},0).wait(1).to({skewX:-3.8,x:1016.2},0).wait(1).to({skewX:-3.9,x:1015.9},0).wait(1).to({x:1015.5},0).wait(1).to({scaleY:1,skewX:-4,x:1015.2,y:1222.4},0).wait(1).to({skewX:-4.1,x:1014.8,y:1222.5},0).wait(1).to({skewX:-4.2,x:1014.4,y:1222.4},0).wait(1).to({skewX:-4.3,x:1014},0).wait(1).to({x:1013.7},0).wait(1).to({skewX:-4.4,x:1013.3},0).wait(1).to({skewX:-4.5,x:1012.9},0).wait(1).to({scaleY:1,skewX:-4.6,x:1012.6},0).wait(1).to({skewX:-4.7,x:1012.2},0).wait(1).to({x:1011.8},0).wait(1).to({skewX:-4.8,x:1011.4},0).wait(1).to({skewX:-4.9,x:1011.1,y:1222.3},0).wait(1).to({skewX:-5,x:1010.7},0).wait(1).to({skewX:-5.1,x:1010.3},0).wait(1).to({scaleY:1,x:1009.9,y:1222.4},0).wait(1).to({skewX:-5.2,x:1009.6,y:1222.3},0).wait(1).to({skewX:-5.3,x:1009.2},0).wait(1).to({skewX:-5.4,x:1008.9},0).wait(1).to({skewX:-5.5,x:1008.5},0).wait(1).to({skewX:-5.6,x:1008.1},0).wait(1).to({x:1007.7},0).wait(1).to({scaleY:1,skewX:-5.7,x:1007.4},0).wait(1).to({skewX:-5.8,x:1007},0).wait(1).to({skewX:-5.9,x:1006.6},0).wait(1).to({skewX:-6,x:1006.2},0).wait(1).to({x:1005.9},0).wait(1).to({skewX:-6.1,x:1005.5},0).wait(1).to({skewX:-6.2,x:1005.2},0).wait(1).to({scaleY:1,skewX:-6.3,x:1004.8},0).wait(1).to({skewX:-6.4,x:1004.4},0).wait(1).to({x:1004},0).wait(1).to({skewX:-6.5,x:1003.7},0).wait(1).to({skewX:-6.6,x:1003.3},0).wait(1).to({skewX:-6.7,x:1002.9},0).wait(1).to({scaleY:1.01,skewX:-6.8,x:1002.5},0).wait(1).to({x:1002.2,y:1222.4},0).wait(1).to({scaleY:1,skewX:-6.6,x:1003.4,y:1222.3},0).wait(1).to({skewX:-6.3,x:1004.6,y:1222.1},0).wait(1).to({skewX:-6,x:1005.8},0).wait(1).to({skewX:-5.8,x:1007,y:1222},0).wait(1).to({skewX:-5.5,x:1008.2},0).wait(1).to({scaleY:1,skewX:-5.3,x:1009.4,y:1221.9},0).wait(1).to({skewX:-5,x:1010.7},0).wait(1).to({skewX:-4.7,x:1011.8,y:1221.8},0).wait(1).to({skewX:-4.5,x:1013.1},0).wait(1).to({skewX:-4.2,x:1014.3,y:1221.7},0).wait(1).to({scaleY:1,skewX:-3.9,x:1015.5},0).wait(1).to({skewX:-3.7,x:1016.7},0).wait(1).to({skewX:-3.4,x:1017.9},0).wait(1).to({skewX:-3.2,x:1019.1},0).wait(1).to({scaleY:1,skewX:-2.9,x:1020.3,y:1221.6},0).wait(1).to({skewX:-2.6,x:1021.5},0).wait(1).to({skewX:-2.4,x:1022.7,y:1221.7},0).wait(1).to({skewX:-2.1,x:1023.9},0).wait(1).to({skewX:-1.8,x:1025.1},0).wait(1).to({scaleY:1,skewX:-1.6,x:1026.3},0).wait(1).to({skewX:-1.3,x:1027.5},0).wait(1).to({skewX:-1.1,x:1028.7,y:1221.8},0).wait(1).to({skewX:-0.8,x:1030},0).wait(1).to({scaleY:1,skewX:-0.5,x:1031.1},0).wait(1).to({skewX:-0.3,x:1032.3,y:1221.9},0).wait(1).to({skewX:0,x:1033.6,y:1222},0).wait(1));

	// rocks-bkgr
	this.instance_3 = new lib.rockShadow_01copy();
	this.instance_3.setTransform(1042.3,2025.5,1.245,0.799,0,-2.2,-179.5,170.4,57.1);
	this.instance_3.alpha = 0.129;

	this.instance_4 = new lib.rockShadow_01copy();
	this.instance_4.setTransform(20.6,1888.8,1.599,0.799,0,-2.2,-179.5,170.4,57.1);
	this.instance_4.alpha = 0.129;

	this.instance_5 = new lib.rockShadow_01copy();
	this.instance_5.setTransform(1074.6,1557.7,1.214,2.056,0,-74.1,0.5,170.6,57);
	this.instance_5.alpha = 0.129;

	this.instance_6 = new lib.rockShadow_01copy();
	this.instance_6.setTransform(340.7,1296.6,0.816,0.848,0,-69.4,-6,171.1,56.4);
	this.instance_6.alpha = 0.129;

	this.rock03_1 = new lib.rock06copy();
	this.rock03_1.setTransform(893.4,845,0.518,0.355,0,0,0,-3.1,-8.2);
	this.rock03_1.alpha = 0.641;

	this.rock09_1 = new lib.rock03copy();
	this.rock09_1.setTransform(986.3,826.3,0.425,0.398,0,19.5,-160.5,-3,-8.2);
	this.rock09_1.alpha = 0.781;

	this.rock_1 = new lib.rock07copy();
	this.rock_1.setTransform(-75.1,946,0.788,0.788,0,0,0,-3.1,-8.2);

	this.rock05_1 = new lib.rock02copy();
	this.rock05_1.setTransform(1046.8,813.9,0.785,1.695,0,0,0,-3.1,-8.2);
	this.rock05_1.alpha = 0.988;

	this.rock02_1 = new lib.rock01copy();
	this.rock02_1.setTransform(1078.2,794.9,0.574,0.574,0,0,0,-3.1,-8.2);

	this.rock10_1 = new lib.rock10_mccopy();
	this.rock10_1.setTransform(150.7,988.5,0.497,0.767,4.7);

	this.rock04_1 = new lib.rock05copy();
	this.rock04_1.setTransform(952,781.6,1.189,0.554,0,0,0,-3.1,-8.2);
	this.rock04_1.alpha = 0.75;

	this.rock08_1 = new lib.rock04copy();
	this.rock08_1.setTransform(149.5,924.3,0.782,0.782,0,0,180,-3.1,-8.1);

	this.rock09_2 = new lib.rock03copy();
	this.rock09_2.setTransform(103.1,907.2,1.208,0.768,0,12.3,-167.7,-3.2,-8.2);

	this.instance_7 = new lib.rockShadow_01copy();
	this.instance_7.setTransform(35,1026.6,1,1,0,0,0,171,56.4);
	this.instance_7.alpha = 0.129;

	this.instance_8 = new lib.rockShadow_01copy();
	this.instance_8.setTransform(1044.4,871.2,1.017,0.465,0,-169.8,-175.9,171,56.4);
	this.instance_8.alpha = 0.09;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.rock09_2},{t:this.rock08_1},{t:this.rock04_1},{t:this.rock10_1},{t:this.rock02_1},{t:this.rock05_1},{t:this.rock_1},{t:this.rock09_1},{t:this.rock03_1},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(160));

	// fish
	this.instance_9 = new lib.fishGroup_mccopy();
	this.instance_9.setTransform(1385.3,313.7,1,1,0,0,0,216.5,85);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).wait(1).to({regY:83.2,x:1348.2,y:311.9},0).wait(1).to({x:1311},0).wait(1).to({x:1273.9},0).wait(1).to({x:1236.7},0).wait(1).to({x:1199.6},0).wait(1).to({x:1162.5},0).wait(1).to({x:1125.3},0).wait(1).to({x:1088.2},0).wait(1).to({x:1051},0).wait(1).to({x:1013.9},0).wait(1).to({x:976.7},0).wait(1).to({x:939.6},0).wait(1).to({x:902.5},0).wait(1).to({x:865.3},0).wait(1).to({x:828.2},0).wait(1).to({x:791},0).wait(1).to({x:753.9},0).wait(1).to({x:716.7},0).wait(1).to({x:679.6},0).wait(1).to({x:642.5},0).wait(1).to({x:605.3},0).wait(1).to({x:568.2},0).wait(1).to({x:531},0).wait(1).to({x:493.9},0).wait(1).to({x:456.7},0).wait(1).to({x:419.6},0).wait(1).to({x:382.5},0).wait(1).to({x:345.4},0).wait(1).to({x:308.2},0).wait(1).to({x:271.1},0).wait(1).to({x:233.9},0).wait(1).to({x:196.8},0).wait(1).to({x:159.7},0).wait(1).to({x:122.5},0).wait(1).to({x:85.4},0).wait(1).to({x:48.2},0).wait(1).to({x:11.1},0).wait(1).to({x:-26},0).wait(1).to({x:-63.2},0).wait(1).to({x:-100.3},0).wait(1).to({x:-137.5},0).wait(1).to({x:-174.6},0).wait(1).to({x:-211.8},0).wait(1).to({x:-248.9},0).wait(1).to({regY:85,x:1385.3,y:313.7},0).wait(88));

	// bubbles- copy
	this.instance_10 = new lib.bubbles_mccopy();
	this.instance_10.setTransform(1014.5,1611.7,0.531,0.531,0,0,0,65.2,324.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).wait(1).to({regX:55.2,regY:162.5,scaleX:0.54,scaleY:0.54,x:1009.1,y:1477.2},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:1009,y:1428.8},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:1008.8,y:1380.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:1008.7,y:1332.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:1008.5,y:1283.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:1008.4,y:1235.4},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:1008.3,y:1187},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:1008.2,y:1138.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:1008,y:1090.3},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:1007.9,y:1041.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:1007.8,y:993.6},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:1007.6,y:945.2},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:1007.5,y:896.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:1007.4,y:848.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:1007.2,y:800.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:1007.1,y:751.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:1007,y:703.4},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:1006.9,y:655.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:1006.7,y:606.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1006.6,y:558.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:1006.4,y:510},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:1006.3,y:461.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1006.2,y:413.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1006.1,y:364.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1005.9,y:316.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1005.8,y:268.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1005.6,y:219.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1005.5,y:171.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1005.4,y:123.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1005.3,y:74.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1005.1,y:26.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1005,y:-21.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1004.9,y:-70.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1004.7,y:-118.6},0).wait(1).to({scaleX:1,scaleY:1,x:1004.6,y:-166.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:1004.5,y:-215.3},0).to({_off:true},1).wait(121));

	// bubbles- copy 2
	this.instance_11 = new lib.bubbles_mccopy();
	this.instance_11.setTransform(149.1,1120,0.531,0.531,0,0,0,65.2,324.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60).to({_off:false},0).wait(1).to({regX:55.2,regY:162.5,scaleX:0.54,scaleY:0.54,x:143.6,y:985.6},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:143.5,y:937.2},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:143.4,y:888.9},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:143.3,y:840.5},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:143.1,y:792.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:143,y:743.8},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:142.8,y:695.5},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:142.7,y:647.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:142.6,y:598.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:142.5,y:550.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:142.3,y:502},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:142.2,y:453.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:142,y:405.3},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:141.9,y:357},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:141.8,y:308.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:141.7,y:260.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:141.5,y:211.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:141.4,y:163.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:141.2,y:115.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:141.1,y:66.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:141,y:18.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:140.9,y:-29.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:140.7,y:-78.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:140.6,y:-126.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:140.5,y:-174.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:140.4,y:-223.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:140.2,y:-271.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:140.1,y:-320},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:139.9,y:-368.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:139.8,y:-416.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:139.7,y:-465},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:139.6,y:-513.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:139.4,y:-561.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:139.3,y:-610.1},0).wait(1).to({scaleX:1,scaleY:1,x:139.1,y:-658.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:139,y:-706.7},0).to({_off:true},1).wait(63));

	// bubbles-
	this.instance_12 = new lib.bubbles_mccopy();
	this.instance_12.setTransform(866.5,851.2,0.25,0.25,0,0,0,65.2,324.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(64).to({_off:false},0).wait(1).to({regX:55.2,regY:162.5,x:864,y:781.7},0).wait(1).to({y:752.7},0).wait(1).to({y:723.8},0).wait(1).to({y:694.8},0).wait(1).to({y:665.9},0).wait(1).to({y:636.9},0).wait(1).to({y:608},0).wait(1).to({y:579},0).wait(1).to({y:550.1},0).wait(1).to({y:521.1},0).wait(1).to({y:492.2},0).wait(1).to({y:463.2},0).wait(1).to({x:864.1,y:434.3},0).wait(1).to({y:405.3},0).wait(1).to({y:376.4},0).wait(1).to({y:347.4},0).wait(1).to({y:318.5},0).wait(1).to({y:289.5},0).wait(1).to({y:260.6},0).wait(1).to({y:231.6},0).wait(1).to({y:202.7},0).wait(1).to({y:173.7},0).wait(1).to({y:144.8},0).wait(1).to({y:115.8},0).wait(1).to({y:86.9},0).wait(1).to({y:57.9},0).wait(1).to({y:29},0).wait(1).to({y:0.1},0).wait(1).to({y:-28.9},0).wait(1).to({y:-57.8},0).wait(1).to({y:-86.8},0).wait(1).to({y:-115.7},0).wait(1).to({y:-144.7},0).wait(1).to({y:-173.7},0).wait(1).to({y:-202.6},0).wait(1).to({y:-231.6},0).to({_off:true},1).wait(59));

	// bkgr
	this.instance_13 = new lib.bkgr("synched",0);
	this.instance_13.setTransform(591.7,1094.6,1,1,0,0,0,599.2,1094.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-922.3,-579.3,2941.3,2704.5);


(lib.InnerShelllower_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.internal_mc("synched",0,false);
	this.instance.setTransform(1355.6,856.2,1,1,0,0,0,376.6,252.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(602));

	// shell
	this.instance_1 = new lib.Mesh();
	this.instance_1.setTransform(1111.4,585.3);

	this.instance_2 = new lib.Mesh_1_1();
	this.instance_2.setTransform(979,592.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(602));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(971,585.3,779,510);


// stage content:
(lib.FWWMM_all_v01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{AttractLoop:0,MusselClosing:20,MusselClosed:38,MusselOpening:39,MusselOpen:59,FiltrationStep1:60,FiltrationStep2:141,FiltrationStep3:217});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		this.stop();
		this.BackgroundLoop.play();
		
		this.OpenMusselButton.visible 	= true;
		this.ShowAnatomyButton.visible 	= true;
		this.FiltrationButton.visible 	= true;
		this.LifeCycleButton.visible 	= true;
		this.HideAnatomyButton.visible 	= false;
		this.CloseMusselButton.visible 	= false;
		
		this.CloseMusselButton.alpha = 0;
		this.OpenMusselButton.alpha = 0;
		this.ShowAnatomyButton.alpha = 0;
		this.HideAnatomyButton.alpha = 0;
		this.FiltrationButton.alpha = 0;
		this.LifeCycleButton.alpha = 0;
		
		this.goToFiltration = false;
		
		this.AttractLoopButton.addEventListener("click", attractLoopClose.bind(this));
		function attractLoopClose() {
			this.gotoAndPlay("MusselClosing");
		}
		
		this.fadeOutNav = function() {
			console.log("Fade out triggered.", createjs.Ticker.paused);
			
			root.OpenMusselButton.alpha 	-= 0.05;
			root.CloseMusselButton.alpha 	-= 0.05;
			root.HideAnatomyButton.alpha 	-= 0.05;
			root.ShowAnatomyButton.alpha 	-= 0.05;
			root.FiltrationButton.alpha 	-= 0.05;
			root.LifeCycleButton.alpha 		-= 0.05;
			
			if( root.OpenMusselButton.alpha <= 0 ){
				root.OpenMusselButton.visible 	= false;
				root.CloseMusselButton.visible 	= false;
				root.HideAnatomyButton.visible 	= false;
				root.ShowAnatomyButton.visible 	= false;
				root.FiltrationButton.visible 	= false;
				root.LifeCycleButton.visible 	= false;
				
				root.removeEventListener("tick", this.fadeOutNav.bind(this));
			}
		}
		this.fadeInNav = function() {
			
			this.OpenMusselButton.alpha 	+= 0.05;
			this.CloseMusselButton.alpha 	+= 0.05;
			this.HideAnatomyButton.alpha    += 0.05;
			this.ShowAnatomyButton.alpha 	+= 0.05;
			this.FiltrationButton.alpha 	+= 0.05;
			this.LifeCycleButton.alpha 		+= 0.05;
			
			if( this.OpenMusselButton.alpha >= 1 ){				
				this.removeEventListener("tick", this.fadeInNav.bind(this));
			}
		}
	}
	this.frame_20 = function() {
		this.HideAnatomyButton.visible 		= false;
		this.CloseMusselButton.visible 		= false;
		
		this.ClosedMusselAnatomy.visible 	= false;
		this.OpenMusselAnatomy.visible 		= false;
		
		this.addEventListener("tick", this.fadeInNav.bind(this));
	}
	this.frame_38 = function() {
		var root = this;
		
		this.stop();
		
		this.CloseMusselButton.alpha = 1;
		this.OpenMusselButton.alpha = 1;
		this.ShowAnatomyButton.alpha = 1;
		this.HideAnatomyButton.alpha = 1;
		this.FiltrationButton.alpha = 1;
		this.LifeCycleButton.alpha = 1;
		
		this.OpenMusselButton.addEventListener("click", openMussel.bind(this));
		this.CloseMusselButton.addEventListener("click", closeMussel.bind(this));
		
		this.HideAnatomyButton.addEventListener("click", hideAnatomy.bind(this));
		this.ShowAnatomyButton.addEventListener("click", showAnatomy.bind(this));
		
		this.FiltrationButton.addEventListener("click", playFiltration.bind(this));
		
		function openMussel() {
			this.gotoAndPlay("MusselOpening");
			this.CloseMusselButton.visible 		= true;
			this.OpenMusselButton.visible 		= false;
		}
		function closeMussel() {
			this.gotoAndStop("MusselClosed");
			this.CloseMusselButton.visible 		= false;
			this.OpenMusselButton.visible 		= true;
		}
		
		function showAnatomy() {
			// Toggle anatomy buttons
			this.HideAnatomyButton.visible 		= true;
			this.ShowAnatomyButton.visible 		= false;
			
			// Hide anatomy layers
			this.ClosedMusselAnatomy.visible 	= true;
			this.OpenMusselAnatomy.visible 		= true;
		}
		function hideAnatomy() {
			// Toggle anatomy buttons
			this.HideAnatomyButton.visible 		= false;
			this.ShowAnatomyButton.visible 		= true;
			
			// Show anatomy layers
			this.ClosedMusselAnatomy.visible 	= false;
			this.OpenMusselAnatomy.visible 		= false;
		}
		
		function playFiltration() {
			console.log("Play Filtration started.");
			
			this.goToFiltration = true;
			this.addEventListener("tick", this.fadeOutNav.bind(this));
			this.gotoAndPlay("MusselOpening");
		}
	}
	this.frame_59 = function() {
		this.stop();
		
		if (this.goToFiltration == true){
			this.goToFiltration = false;
			this.gotoAndPlay("FiltrationStep1");
		}
	}
	this.frame_60 = function() {
		this.CloseButton.addEventListener("click", closeFiltration.bind(this));
		
		function closeFiltration() {
			this.gotoAndStop("MusselClosed");
			this.addEventListener("tick", this.fadeInNav.bind(this));
		}
	}
	this.frame_140 = function() {
		this.stop();
		this.FiltrationDirt.play();
	}
	this.frame_216 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(18).call(this.frame_38).wait(21).call(this.frame_59).wait(1).call(this.frame_60).wait(80).call(this.frame_140).wait(76).call(this.frame_216).wait(83).call(this.frame_299).wait(1));

	// BLOCKOUT (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EBUeDTnIAAgGMio7AAAIAAAGMhpCAAAMAAAmnNMBpCAAAIAAAoMCo7AAAIAAgoMBpBAAAMAAAGnNgEhUdCWRMCo7AAAMAAAkr+Mio7AAAg");
	mask.setTransform(539.6,958.3);

	// CloseMussel
	this.CloseMusselButton = new lib.CloseMussel();
	this.CloseMusselButton.setTransform(166.5,1752.3,1,1,0,0,0,86,95.1);
	this.CloseMusselButton.alpha = 0;
	new cjs.ButtonHelper(this.CloseMusselButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.CloseMusselButton).wait(300));

	// OpenMussel
	this.OpenMusselButton = new lib.OpenMussel();
	this.OpenMusselButton.setTransform(166.7,1752.3,1,1,0,0,0,84.4,95.1);
	this.OpenMusselButton.alpha = 0;
	new cjs.ButtonHelper(this.OpenMusselButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.OpenMusselButton).wait(300));

	// LifeCycle
	this.LifeCycleButton = new lib.LifeCycle();
	this.LifeCycleButton.setTransform(683.1,1752.3,1,1,0,0,0,66.8,95.1);
	this.LifeCycleButton.alpha = 0;
	new cjs.ButtonHelper(this.LifeCycleButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.LifeCycleButton).wait(300));

	// Filtration
	this.FiltrationButton = new lib.Filtration();
	this.FiltrationButton.setTransform(925.3,1752.3,1,1,0,0,0,66.8,95.1);
	this.FiltrationButton.alpha = 0;
	new cjs.ButtonHelper(this.FiltrationButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.FiltrationButton).wait(300));

	// HideAnatomy
	this.HideAnatomyButton = new lib.HideAnatomy();
	this.HideAnatomyButton.setTransform(428.9,1752.3,1,1,0,0,0,84.6,95.1);
	this.HideAnatomyButton.alpha = 0;
	new cjs.ButtonHelper(this.HideAnatomyButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.HideAnatomyButton).wait(300));

	// ShowAnatomy
	this.ShowAnatomyButton = new lib.ShowAnatomy();
	this.ShowAnatomyButton.setTransform(428.7,1752.3,1,1,0,0,0,90.5,95.1);
	this.ShowAnatomyButton.alpha = 0;
	new cjs.ButtonHelper(this.ShowAnatomyButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ShowAnatomyButton).wait(300));

	// invisButton
	this.AttractLoopButton = new lib.InvisibleButton();
	this.AttractLoopButton.setTransform(540,960,5.4,9.6,0,0,0,100,100);
	new cjs.ButtonHelper(this.AttractLoopButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.AttractLoopButton).to({_off:true},20).wait(280));

	// mussel
	this.instance = new lib.musselburried_mccopy();
	this.instance.setTransform(582.3,1573.4,1,1,0,0,0,204.8,264.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},20).wait(280));

	// anatomyClosed
	this.OpenMusselAnatomy = new lib.OpenMusselAnatomy();
	this.OpenMusselAnatomy.setTransform(481,1397.5,1,1,0,0,0,207,83.5);
	this.OpenMusselAnatomy._off = true;

	this.timeline.addTween(cjs.Tween.get(this.OpenMusselAnatomy).wait(39).to({_off:false},0).to({_off:true},21).wait(240));

	// anatomyOpen
	this.ClosedMusselAnatomy = new lib.ClosedMusselAnatomy();
	this.ClosedMusselAnatomy.setTransform(481.3,1397.6,1,1,0,0,0,207,83.5);
	this.ClosedMusselAnatomy._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ClosedMusselAnatomy).wait(20).to({_off:false},0).to({_off:true},19).wait(261));

	// mussel (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_20 = new cjs.Graphics().p("EAOKCDyQgpgEisgsQhPgUjuhCIlmhlQhkgcjNAFQjdAFgegFQgegFhuAXQiQAihTAQQlGBBiBhEQgThUpoh3QmxhTuLiBQyMimiegZQpTheAMgsQAXhVgdnEIgimyQgD8SA9/LUAB7g+UAE/gOfQDwq1I3oLQIQnnMKk3QLdkkN4htQNYhpN8BNQN6BNMlD3QM7D+J0GQQKWGlFvIbQGKJBAaKcMAB+A8vUAB/A8HAAHABCQAEAipsBvQjxAsxnC7QuwCemxBVQp2B9gLA4QgWBtjXIBQi1GuhYC6QgZA0hVAAQgRAAgUgCg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_1_graphics_20,x:556.2,y:843.7}).wait(280));

	// mussel-outterShell_png
	this.instance_1 = new lib.outterShellpng();
	this.instance_1.setTransform(556.8,1573.5,0.402,0.402,0,0,0,344.6,612.8);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(1).to({regX:344.5,regY:613,scaleX:0.43,scaleY:0.43,rotation:8.5,x:558,y:1527.7},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:17.1,x:559.3,y:1481.9},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:25.6,x:560.5,y:1436},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:34.2,x:561.8,y:1390.2},0).wait(1).to({scaleX:0.54,scaleY:0.54,rotation:42.7,x:563,y:1344.3},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:51.3,x:564.2,y:1298.4},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:59.8,x:565.6,y:1252.6},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:68.4,x:566.8,y:1206.8},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:76.9,x:568,y:1160.9},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:85.5,x:569.3,y:1115},0).wait(10).to({scaleX:0.49,rotation:0,skewX:85.7,skewY:73.6,x:557,y:1039.1},0).wait(1).to({scaleX:0.3,scaleY:0.67,skewX:85.9,skewY:61.7,x:544.7,y:963.2},0).wait(1).to({scaleX:0.25,scaleY:0.68,skewX:86.1,skewY:64.4,x:536.8,y:939.1,alpha:0.953},0).wait(1).to({scaleX:0.2,scaleY:0.69,skewX:86.3,skewY:67,x:529,y:914.9,alpha:0.907},0).wait(1).to({scaleX:0.14,scaleY:0.7,skewX:86.5,skewY:69.7,x:521.2,y:890.9,alpha:0.86},0).wait(1).to({scaleX:0.07,scaleY:0.7,skewX:87.2,skewY:-105.9,x:535.2,y:857.5,alpha:0},0).wait(1).to({scaleX:0.28,scaleY:0.7,skewX:88,skewY:-101.6,x:549.3,y:824.1},0).wait(1).to({scaleX:0.49,scaleY:0.7,skewX:88.7,skewY:-97.2,x:563.3,y:790.7},0).wait(1).to({scaleX:0.7,scaleY:0.7,skewX:89.5,skewY:-92.9,x:577.3,y:757.4},0).wait(11).to({_off:true},1).wait(240));

	// mussel-inner
	this.instance_2 = new lib.InnerShelllower_mc("synched",0,false);
	this.instance_2.setTransform(580.8,1578.5,0.656,0.583,0,-77.4,-77.2,1362.6,833.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(1).to({regX:1361.1,regY:836.9,scaleX:0.7,scaleY:0.62,skewX:-68.8,skewY:-68.7,y:1537.7,startPosition:1},0).wait(1).to({scaleX:0.74,scaleY:0.67,skewX:-60.3,skewY:-60.1,x:578.9,y:1495.7,startPosition:2},0).wait(1).to({scaleX:0.79,scaleY:0.71,skewX:-51.7,skewY:-51.6,x:577,y:1453.6,startPosition:3},0).wait(1).to({scaleX:0.83,scaleY:0.75,skewX:-43.2,skewY:-43.1,x:574.9,y:1411.4,startPosition:4},0).wait(1).to({scaleX:0.87,scaleY:0.79,skewX:-34.7,skewY:-34.5,x:572.8,y:1369.2,startPosition:5},0).wait(1).to({scaleX:0.92,scaleY:0.83,skewX:-26.2,skewY:-26,x:570.7,y:1327,startPosition:6},0).wait(1).to({scaleX:0.96,scaleY:0.87,skewX:-17.7,skewY:-17.5,x:568.5,y:1284.7,startPosition:7},0).wait(1).to({scaleX:1,scaleY:0.91,skewX:-9.1,skewY:-8.9,x:566.3,y:1242.3,startPosition:8},0).wait(1).to({scaleX:1.04,scaleY:0.95,skewX:-0.6,skewY:-0.4,x:564,y:1199.9,startPosition:9},0).wait(1).to({scaleX:1.09,scaleY:0.99,skewX:7.9,skewY:8.1,x:561.8,y:1157.2,startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).to({_off:true},1).wait(240));

	// upper inside
	this.instance_3 = new lib.InnerShell_mc("synched",0);
	this.instance_3.setTransform(573.6,761.9,1.09,1.002,0,170.7,-9.3,1344,787);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).wait(1).to({regX:1364.5,regY:804.7,scaleX:1.08,scaleY:0.92,skewY:-7.4,x:593.6,y:773.2},0).wait(1).to({scaleX:1.07,scaleY:0.84,skewY:-5.6,x:594.3,y:805.6},0).wait(1).to({scaleX:1.06,scaleY:0.76,skewY:-3.7,x:594.9,y:838},0).wait(1).to({scaleX:1.06,scaleY:0.68,skewY:-1.8,x:595.5,y:870.4},0).wait(1).to({scaleX:1.05,scaleY:0.59,skewY:0.1,x:596.1,y:902.7},0).wait(1).to({scaleX:1.04,scaleY:0.51,skewY:2,x:596.7,y:935.1},0).wait(1).to({scaleX:1.03,scaleY:0.43,skewY:3.8,x:597.2,y:967.5},0).wait(1).to({scaleX:1.02,scaleY:0.35,skewY:5.7,x:597.8,y:999.9},0).wait(1).to({scaleX:1.01,scaleY:0.27,skewY:7.6,x:598.3,y:1032.2},0).wait(1).to({scaleX:1,scaleY:0.19,skewY:9.5,x:598.8,y:1064.4},0).wait(1).to({x:597,y:1063.6,alpha:0.111},0).wait(1).to({x:595.2,y:1062.9,alpha:0.222},0).wait(1).to({x:593.3,y:1062.1,alpha:0.333},0).wait(1).to({x:591.5,y:1061.3,alpha:0.444},0).wait(1).to({x:589.7,y:1060.5,alpha:0.556},0).wait(1).to({x:587.9,y:1059.8,alpha:0.667},0).wait(1).to({x:586,y:1059,alpha:0.778},0).wait(1).to({x:584.2,y:1058.2,alpha:0.889},0).wait(1).to({x:582.4,y:1057.5,alpha:1},0).wait(1).to({scaleX:1.03,scaleY:0.07,skewX:-9.3,skewY:5.1,x:571,y:1017.2},0).wait(1).to({scaleX:1.06,scaleY:0.32,skewX:-9.3,skewY:0.8,x:559.5,y:976.8},0).wait(1).to({scaleY:0.22,skewY:-0.7,x:550.7,y:953},0).wait(1).to({scaleY:0.12,skewY:-2.2,x:541.9,y:929.3},0).wait(1).to({scaleX:1.04,scaleY:0.09,skewX:170.7,skewY:-3,x:542.5,y:898.6},0).wait(1).to({scaleX:1.06,scaleY:0.29,skewY:-2.4,x:546.1,y:870.8},0).wait(1).to({scaleX:1.06,scaleY:0.47,skewY:-4.2,x:557.8,y:838.4},0).wait(1).to({scaleX:1.07,scaleY:0.65,skewY:-5.9,x:569.5,y:805.9},0).wait(1).to({scaleX:1.08,scaleY:0.82,skewY:-7.6,x:581.2,y:773.3},0).wait(1).to({scaleX:1.09,scaleY:1,skewY:-9.3,x:592.9,y:740.8},0).wait(1).to({alpha:0.832},0).wait(1).to({alpha:0.664},0).wait(1).to({alpha:0.496},0).wait(1).to({alpha:0.328},0).wait(1).to({alpha:0.16},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(240));

	// mussel-shadow
	this.instance_4 = new lib.musselshadowcopy();
	this.instance_4.setTransform(582.3,1699.1,1,1,0,0,0,204.8,45.6);
	this.instance_4.alpha = 0.5;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).wait(1).to({regY:45.7,y:1699.2,alpha:0.45},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0},0).wait(29).to({_off:true},1).wait(240));

	// bump
	this.instance_5 = new lib.openingtestcopy();
	this.instance_5.setTransform(685.5,909.8,1,1,0,0,0,38,-5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).wait(1).to({regX:-58.4,regY:-171.8,scaleX:0.98,scaleY:0.98,x:581.3,y:771.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:573.6,y:800.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:565.9,y:828.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:558.1,y:857.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:550.4,y:885.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:542.7,y:914.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:534.9,y:942.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:527.2,y:971.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:519.5,y:1000.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:511.8,y:1028.6,alpha:1},0).wait(10).to({scaleX:0.76,scaleY:0.67,skewX:-8.7,skewY:-2.6,x:475.1,y:987.3},0).wait(1).to({scaleY:0.59,skewX:-17.3,skewY:-5.1,x:443.3,y:947.8},0).wait(1).to({scaleX:0.89,scaleY:0.54,skewX:-11.2,skewY:-4.4,x:470.6,y:925.6},0).wait(1).to({scaleX:1.02,scaleY:0.49,skewX:-5.1,skewY:-3.7,x:496.4,y:904.3},0).wait(1).to({scaleX:1.15,scaleY:0.44,skewX:1,skewY:-3,x:520.4,y:883.9},0).wait(1).to({scaleX:1.06,scaleY:0.44,skewX:-0.7,skewY:-4.4,x:526.4,y:862.7},0).wait(1).to({scaleX:0.97,scaleY:0.45,skewX:-2.5,skewY:-5.7,x:532.4,y:841.1},0).wait(1).to({scaleX:0.95,x:534.6,y:838.1},0).wait(1).to({scaleX:0.93,x:536.9,y:835.2},0).to({_off:true},1).wait(251));

	// CloseButton
	this.CloseButton = new lib.CloseButton();
	this.CloseButton.setTransform(1006.9,80,1,1,0,0,0,30.6,30.5);
	this.CloseButton.alpha = 0;
	this.CloseButton._off = true;
	new cjs.ButtonHelper(this.CloseButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.CloseButton).wait(60).to({_off:false},0).wait(1).to({regY:30.8,y:80.3,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(232));

	// filter-text01
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAMQgFgFgBgHQAAgGAGgEQAFgGAFAAQAHAAAEAGQAGAEAAAGQAAAHgGAFQgEAEgHAAQgFAAgFgEg");
	this.shape.setTransform(269.7,468.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_1.setTransform(261.1,463.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZBsIAAgFIgBgJIgBAAQgLAHgHADQgIADgKAAQgMAAgLgEQgKgEgHgIQgIgIgDgLQgEgKgBgMQAAgQAGgNQAFgMALgJQAKgHAMgFQAOgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgCgEgGgEIgDgCIgCgDIACgDQAVgHALgFQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQAEAAAJgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgBABQgZADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAgUgEQgIAEgGAFQgFAHgCAJQgDAJAAAKQAAAKADAKQADAJAFAIQAGAIAJAEQAIAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgIgEgFAAQgLAAgHAEg");
	this.shape_2.setTransform(249.1,459.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_3.setTransform(233.3,463.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAJgJAMgFQAMgFALAAQAMAAAMAFQALAEAIAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgLAFgNAAQgNAAgLgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQACAKAFAIQAFAIAIAFQAHAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgEgJgIgFQgIgGgHAAQgIAAgHAEg");
	this.shape_4.setTransform(218,463.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBlIgcABQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAHgBQAHgBADgFQABgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIAAgDIABgCQARgIAMgIQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABIgCAOQAAABABAAQAAABAAAAQABABAAAAQABAAABAAQAWgOARAAQAMAAAJAFQAJAEAGAHQAHAIAEAKQADAKAAALQAAAQgGANQgFAMgJAJQgLAJgNAGQgOAFgNAAIgRgBQgDABAAAHIAAAgQAAAQABAEQABAEAJABIALACQABAAAAAAQAAABAAAAQABABAAAAQAAABgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhOQgGACgDADQgDAFAAANIAAAzQAAAFACAEQABADAFAEQAJAHALAAQAJAAAIgEQAGgEAFgHQAFgGADgJQADgKAAgMQAAgJgDgJQgDgIgFgHQgEgHgIgEQgIgEgJAAQgIAAgHADg");
	this.shape_5.setTransform(202.9,467.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZBsIAAgFIgBgJIgBAAQgLAHgIADQgGADgLAAQgMAAgLgEQgJgEgIgIQgHgIgEgLQgFgKAAgMQABgQAFgNQAGgMAJgJQAKgHANgFQAOgFANAAQANAAAHADQABAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgCgEQgBgEgGgEIgEgCIgBgDIABgDQAXgHAKgFQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVABAGQACAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQABABAAABQAAAEgDABQgXADgQAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAgVgEQgHAEgFAFQgFAHgDAJQgDAJAAAKQAAAKADAKQADAJAFAIQAHAIAIAEQAIAEAKAAQAFAAAGgCQAIgDADgDQACgCAAgJIAAg8QAAgHgEgEQgDgEgGgDQgIgEgGAAQgJAAgJAEg");
	this.shape_6.setTransform(180.8,459.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_7.setTransform(165.1,463.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgDgEgDAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAIAAAGADQAFACAEAFQAEAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAFAAADgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_8.setTransform(151.6,463.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAgQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAJgEAGgEQAHgIAAgKQAAgLgPgFQgFgDAAgFQAAgGAEgEQAEgEAHAAQAHAAAGAHQAEAEACAFQACAGAAAIQAAAGgDAHQgDAHgFAGQgFAEgGAFIgPAGQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_9.setTransform(930.9,423.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_10.setTransform(922.4,417.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_11.setTransform(906,417.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgIAAQgNAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAHAAAHADQAFACAEAFQAEAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAEAAAEgCIAEgCQABAAAAAAQAAAAAAABQABAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_12.setTransform(888.6,417.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg1AAQgGAAgBABQgBABAAAGQAAAJADALQADAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_13.setTransform(876.3,417.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_14.setTransform(865.6,417.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_15.setTransform(855.9,417.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_16.setTransform(846.1,417.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTAgQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAJgEAGgEQAHgIAAgKQAAgLgPgFQgFgDAAgFQAAgGAEgEQAEgEAHAAQAHAAAGAHQAEAEACAFQACAGAAAIQAAAGgDAHQgDAHgFAGQgFAEgGAFIgPAGQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_17.setTransform(829.9,423.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_18.setTransform(821.4,417.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_19.setTransform(812.1,417.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg2AAQgFAAgBABQgBABAAAGQAAAJADALQADAKAHAHQAFAIAKAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAAEgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_20.setTransform(801,417.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgEQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAcABIAYgBQABABAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgEAAQgHABgBACQgBADACAGIAVA4IAFAKIAFgMIARgqQAGgOAAgEQAAgFgGAAIgGgBIgCgEQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAXABIAVgBQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEAAQgHACgFAGIgKATQgLAVgRAoIgKAZQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_21.setTransform(788.5,418.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAABcIgaACQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgFQABgEAAgQIAAg0QAAgIgBgCQgBgDgGgEIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAjIAAA2QAAAQABAEQACAFAIABIAHABQAAAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgEAAgHQAAgHAFgFQAEgDAHAAQAFgBAEAFQAFAEgBAHQAAAHgEAFQgFADgFAAQgGAAgFgEg");
	this.shape_22.setTransform(778.2,414.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_23.setTransform(769.7,417.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_24.setTransform(749,417.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAABcIgbACQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAAAQAAgBAAAAIAHgBQAIgBACgFQABgEABgQIAAg0QgBgIAAgCQgCgDgGgEIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgCAjIAAA2QABAQACAEQABAFAIABIAGABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAEAEABAHQAAAHgGAFQgEADgFAAQgHAAgEgEg");
	this.shape_25.setTransform(737.3,414.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_26.setTransform(721.5,417.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgEgEQgCgEgDAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgCgFQgDgGAAgGQAAgJAFgFQAFgGAPgFIAhgLQAFgCABgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgFADQgHAEAAAGQAAAJgDACQgHAFgKAAQgEAAgBgEQAAgFAGgHQAFgGAKgGQAIgGAKgDQAJgEAHAAQAHAAAGADQAHACADAFQAFAEABAHQACAGgBAIIgBAzQgBALADAHQAEAIAHAAQAFAAADgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgEgCgAgFAJQgPAFgFAEQgHAFAAAJQADASAQAAQALAAAFgIQADgDABgLIABgSQAAgEgDAAg");
	this.shape_27.setTransform(711.2,417.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_28.setTransform(700.2,417.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAABcIgbACQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgFQABgEAAgQIAAg0QAAgIgBgCQgBgDgGgEIgDgCIAAgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBAjIAAA2QAAAQACAEQABAFAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAEAEABAHQAAAHgGAFQgDADgGAAQgGAAgFgEg");
	this.shape_29.setTransform(691.6,414.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgcBpIgMgEQgDAAgEAFIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIABgZIAAiNQAAgOgCgEQgBgDgHgEIgCgCIgCgDIACgDIAggNQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIgBAlIAAA5QAAAGADAAQAHgEAIgCQAJgEAIAAQANAAALAFQAKAEAIAHQAIAHAEALQAEALAAAMQAAAPgFANQgFAMgKAJQgJAJgMAFQgNAFgNAAQgNAAgNgEgAgYAAQgEADAAAOIAAAvQAAAIACAHQACAGADAFQAEAFAGACQAGADAFAAQALAAAHgEQAIgEAEgHQAFgHACgJQADgJAAgKQAAgLgDgKQgDgLgGgHQgGgHgIgEQgJgDgJAAQgNAAgHADg");
	this.shape_30.setTransform(680,413.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgHAAQgOAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAFgGAPgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgKAAQgEAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAJgEAHAAQAHAAAGADQAHACADAFQAEAEACAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQAAAAABAAQAAAAABABQAAAAAAABQAAABAAABQgKANgPAAQgGAAgFgCgAgFAJQgPAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQADgDABgLIABgSQAAgEgDAAg");
	this.shape_31.setTransform(667.2,417.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_32.setTransform(652.8,413.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgHADQgIADgKAAQgMAAgLgEQgKgEgHgIQgIgIgDgLQgEgKAAgMQgBgQAGgNQAFgMALgJQAJgHANgFQAOgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgCgEgHgEIgCgCIgBgDIABgDQAVgHALgFQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQAEAAAJgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgBABQgZADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgUgEQgIAEgGAFQgFAHgCAJQgDAJAAAKQAAAKADAKQADAJAGAIQAFAIAIAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgIgEgFAAQgLAAgHAEg");
	this.shape_33.setTransform(630.3,413.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXA7QgMgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAJgJAMgFQALgFAMAAQAMAAALAFQALAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgNAAgKgEgAgOgxQgHADgFAHQgEAHgCAJQgDAKAAAMQAAAJACAKQACAKAFAIQAFAIAIAFQAHAFAIAAQAJAAAHgFQAGgEAFgIQAFgKACgYQAAgIgCgKQgDgKgEgIQgEgJgIgFQgIgGgIAAQgHAAgGAEg");
	this.shape_34.setTransform(615,417.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXA7QgMgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAIgJAMgFQALgFAMAAQANAAAKAFQALAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgLAFgNAAQgMAAgLgEgAgOgxQgHADgEAHQgFAHgCAJQgDAKAAAMQAAAJACAKQADAKAEAIQAFAIAIAFQAHAFAIAAQAJAAAHgFQAHgEAEgIQAFgKACgYQAAgIgCgKQgCgKgEgIQgGgJgHgFQgHgGgJAAQgHAAgGAEg");
	this.shape_35.setTransform(600.5,417.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgkBiQgJgDgGgGQgGgEgDgHQgCgFAAgGQAAgIADgEIAUgUQAGgFgDgCQgJgCgHgHQgGgHAAgIQAAgCAEgCQAIgEAIgIQADgEAAgCQgJgFgGgJQgDgEgCgGQgCgGAAgGQAAgKAEgIQADgJAHgGQAHgGAJgEQAJgDAKAAQANAAAOAGQAKAFAIAAIAYAAQADABgBAGQgBAEgDABIgVAAIAAAPQAAAJgCAIQgDAJgGAGQgGAIgJAEQgLAEgLAAIgNgBQgOAIAAAHQAAAFAGADQAFAEAKABIAigCIAOACQAIABAFACQAHAFAEAFQAEAIAAAKQAAAMgGALQgGALgLAHQgKAIgNAEQgOAEgNAAQgNAAgKgDgAgZAiQgGADgEAGQgFAIAAAIQAAAFADAGQACAGAFAEQAFAEAIACQAHACAKAAQAIABAJgDQAIgDAGgEQAFgEAEgGQADgHAAgGQAAgHgDgFQgCgFgEgDQgFgDgGgBIgOgCIgJAAQgUAAgFAEgAgahSQgDAFgCAFQgCAHAAAIQAAAHACAHQACAGAEAFQAIAKALgBQAGAAADgCQAFgCADgFQAGgHAAgPIgCgOQgBgHgEgFQgDgGgFgCQgDgDgHAAQgLAAgHAJg");
	this.shape_36.setTransform(587,421.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_37.setTransform(566.7,417.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAZBsIAAgFIgBgJIgBAAQgLAHgHADQgIADgKAAQgMAAgLgEQgKgEgHgIQgIgIgDgLQgEgKgBgMQAAgQAGgNQAFgMALgJQAJgHANgFQAOgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgCgEgGgEIgDgCIgCgDIACgDQAVgHALgFQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQAEAAAJgDQAAAAABABQAAAAAAABQAAAAAAABQAAABABABQAAAEgCABQgZADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAgUgEQgIAEgGAFQgFAHgCAJQgDAJAAAKQAAAKADAKQADAJAFAIQAGAIAIAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgIgEgFAAQgLAAgHAEg");
	this.shape_38.setTransform(553.3,413.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAABcIgbACQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAAAQAAgBAAAAIAHgBQAIgBACgFQABgEABgQIAAg0QgBgIAAgCQgCgDgGgEIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgCAjIAAA2QABAQACAEQABAFAIABIAGABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAEAEABAHQAAAHgGAFQgEADgFAAQgHAAgEgEg");
	this.shape_39.setTransform(541.6,414.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgEQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAcABIAYgBQABABAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgEAAQgHABgBACQgBADACAGIAVA4IAFAKIAFgMIARgqQAGgOAAgEQAAgFgGAAIgGgBIgCgEQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBIAXABIAVgBQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEAAQgHACgFAGIgKATQgLAVgRAoIgKAZQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_40.setTransform(531.2,418.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAJgJALgFQAMgFALAAQAMAAAMAFQAKAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgLAFgNAAQgMAAgMgEgAgOgxQgHADgEAHQgFAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAIAAQAJAAAHgFQAHgEAEgIQAFgKACgYQAAgIgCgKQgDgKgDgIQgGgJgGgFQgJgGgHAAQgIAAgGAEg");
	this.shape_41.setTransform(517.3,417.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_42.setTransform(505.5,417.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgkBlIgcABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAHgBQAHgBADgFQABgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIAAgDIABgCQARgIAMgIQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABIgCAOQAAABABAAQAAABAAAAQABABAAAAQABAAABAAQAWgOARAAQAMAAAJAFQAJAEAGAHQAHAIAEAKQADAKAAALQAAAQgGANQgFAMgJAJQgLAJgNAGQgOAFgNAAIgRgBQgDABAAAHIAAAgQAAAQABAEQABAEAJABIALACQABAAAAAAQAAABAAAAQABABAAAAQAAABgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhOQgGACgDADQgDAFAAANIAAAzQAAAFACAEQABADAFAEQAJAHALAAQAJAAAIgEQAGgEAFgHQAFgGADgJQADgKAAgMQAAgJgDgJQgDgIgFgHQgEgHgIgEQgIgEgJAAQgIAAgHADg");
	this.shape_43.setTransform(492.3,421.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAZBsIAAgFIgBgJIgBAAQgLAHgIADQgGADgLAAQgMAAgLgEQgJgEgIgIQgHgIgEgLQgFgKAAgMQABgQAFgNQAGgMAJgJQAKgHANgFQAOgFANAAQANAAAHADQABAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgCgEQgBgEgGgEIgEgCIgBgDIABgDQAXgHAKgFQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVABAGQACAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQABABAAABQAAAEgDABQgXADgQAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAgVgEQgHAEgGAFQgEAHgDAJQgDAJAAAKQAAAKADAKQADAJAFAIQAHAIAIAEQAIAEAKAAQAFAAAGgCQAIgDADgDQACgCAAgJIAAg8QAAgHgEgEQgDgEgGgDQgIgEgGAAQgJAAgJAEg");
	this.shape_44.setTransform(470.2,413.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_45.setTransform(454.4,417.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgDgEgDAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAIAAAGADQAFACAEAFQAEAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAFAAADgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_46.setTransform(441,417.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgTAgQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAJgEAGgEQAHgIAAgKQAAgLgPgFQgFgDAAgFQAAgGAEgEQAEgEAHAAQAHAAAGAHQAEAEACAFQACAGAAAIQAAAGgDAHQgDAHgFAGQgFAEgGAFIgPAGQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_47.setTransform(422.9,423.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_48.setTransform(414.4,417.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_49.setTransform(405.1,417.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAFgMQADgMAJgKQAIgJAKgFQAMgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgFAFgHAEQgMAGgOAAQgMAAgMgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_50.setTransform(394,417.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_51.setTransform(383.6,417.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_52.setTransform(374.4,417.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAABcIgaACQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAIAGgBQAIgBACgFQACgEAAgQIAAg0QAAgIgBgCQgCgDgGgEIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBAjIAAA2QAAAQACAEQACAFAIABIAGABQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgEAAgHQAAgHAFgFQAEgDAHAAQAFgBAEAFQAFAEgBAHQAAAHgEAFQgEADgFAAQgIAAgEgEg");
	this.shape_53.setTransform(365.8,414.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_54.setTransform(357.2,417.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_55.setTransform(346.3,417.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_56.setTransform(320.6,417.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAJgJALgFQAMgFALAAQAMAAAMAFQAKAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgMAFgMAAQgMAAgMgEgAgPgxQgGADgEAHQgFAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAHgEADgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgEgJgHgFQgJgGgHAAQgIAAgHAEg");
	this.shape_57.setTransform(301.4,417.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_58.setTransform(289.9,417.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_59.setTransform(280.7,417.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAJgJALgFQAMgFALAAQAMAAAMAFQAKAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgLAFgNAAQgMAAgMgEgAgOgxQgHADgEAHQgFAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAHgEAEgIQAFgKACgYQAAgIgCgKQgDgKgDgIQgGgJgGgFQgJgGgHAAQgIAAgGAEg");
	this.shape_60.setTransform(268.5,417.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgcBpIgMgEQgDAAgEAFIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBIABgZIAAiNQAAgOgCgEQgBgDgHgEIgCgCIgCgDIACgDIAggNQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIgBAlIAAA5QAAAGADAAQAHgEAIgCQAJgEAIAAQANAAALAFQAKAEAIAHQAIAHAEALQAEALAAAMQAAAPgFANQgFAMgKAJQgJAJgMAFQgNAFgNAAQgNAAgNgEgAgYAAQgEADAAAOIAAAvQAAAIACAHQACAGADAFQAEAFAGACQAGADAFAAQALAAAHgEQAIgEAEgHQAFgHACgJQADgJAAgKQAAgLgDgKQgDgLgGgHQgGgHgIgEQgJgDgJAAQgNAAgHADg");
	this.shape_61.setTransform(253.6,413.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_62.setTransform(234.2,417.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgXA7QgMgFgIgIQgJgIgFgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAJgJALgFQALgFAMAAQANAAAKAFQALAEAJAJQAJAIAEALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgMAFgMAAQgNAAgKgEgAgOgxQgHADgEAHQgFAHgCAJQgDAKAAAMQAAAJACAKQACAKAFAIQAFAIAIAFQAHAFAIAAQAJAAAHgFQAGgEAFgIQAFgKACgYQAAgIgCgKQgCgKgEgIQgGgJgHgFQgHgGgJAAQgHAAgGAEg");
	this.shape_63.setTransform(221.5,417.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgYBqIgcABQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAhAQAAgGgBgBQAAgBgFAAIgKAAQgDgBACgDIANgGQAEgDAAgDQAAgPACgMQADgOAFgMIAHgNQAFgHAGgGQAHgFAHgEQAJgDALAAQAMAAAIAFQAJAFAAAIQAAAEgEADQgDAEgEAAQgEAAgEgEQgFgGgFgDQgHgEgHAAQgHAAgFAEQgEAEgDAIQgEAKgBAPIgCAaIAAAJIABAHQAAAAABAAQAAABAAAAQABAAABAAQABAAABAAIAgAAQACACgBAFQgBADgCABIgeAAQgBAAgBAAQgBAAgBAAQAAAAAAAAQgBAAAAABIgBAHIAABAQAAAQACAFQACAEAIABIAJABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAg");
	this.shape_64.setTransform(211.9,413.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgHADQgIADgKAAQgMAAgLgEQgKgEgHgIQgIgIgEgLQgDgKAAgMQgBgQAGgNQAFgMAKgJQALgHANgFQANgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgBgEgIgEIgCgCIgBgDIABgDQAVgHALgFQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgBABQgZADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgUgEQgIAEgFAFQgGAHgCAJQgDAJAAAKQAAAKADAKQADAJAGAIQAGAIAHAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgHgEgHAAQgJAAgIAEg");
	this.shape_65.setTransform(190.8,413.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgXA7QgMgFgIgIQgJgIgFgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAIgJAMgFQALgFAMAAQAMAAALAFQALAEAJAJQAJAIAEALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgNAAgKgEgAgOgxQgHADgFAHQgEAHgCAJQgDAKAAAMQAAAJACAKQADAKAEAIQAFAIAIAFQAHAFAIAAQAJAAAHgFQAGgEAFgIQAFgKACgYQAAgIgCgKQgCgKgEgIQgFgJgIgFQgHgGgJAAQgHAAgGAEg");
	this.shape_66.setTransform(175.5,417.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAJgJALgFQAMgFALAAQAMAAAMAFQAKAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgLAFgNAAQgMAAgMgEgAgOgxQgHADgEAHQgFAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAHgEAEgIQAFgKACgYQAAgIgCgKQgDgKgDgIQgFgJgHgFQgJgGgHAAQgIAAgGAEg");
	this.shape_67.setTransform(160.9,417.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgYBqIgcABQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAhAQAAgGgBgBQAAgBgFAAIgKAAQgDgBACgDIANgGQAEgDAAgDQAAgPACgMQADgOAFgMIAHgNQAFgHAGgGQAHgFAHgEQAJgDALAAQAMAAAIAFQAJAFAAAIQAAAEgEADQgDAEgEAAQgEAAgEgEQgFgGgFgDQgHgEgHAAQgHAAgFAEQgEAEgDAIQgEAKgBAPIgCAaIAAAJIABAHQAAAAABAAQAAABAAAAQABAAABAAQABAAABAAIAgAAQACACgBAFQgBADgCABIgeAAQgBAAgBAAQgBAAgBAAQAAAAAAAAQgBAAAAABIgBAHIAABAQAAAQACAFQACAEAIABIAJABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAg");
	this.shape_68.setTransform(151.4,413.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAEgMAJgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgCABQgBABAAAGQAAAJADALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_69.setTransform(911.2,371.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgIADQgHADgKAAQgMAAgLgEQgJgEgIgIQgHgIgFgLQgDgKAAgMQgBgQAGgNQAFgMAKgJQALgHANgFQANgFANAAQANAAAHADQABAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgCgEQAAgEgIgEIgCgCIgBgDIABgDQAWgHAKgFQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgCABQgYADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgVgEQgHAEgFAFQgFAHgDAJQgDAJAAAKQAAAKADAKQADAJAGAIQAGAIAHAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgHgEgHAAQgKAAgIAEg");
	this.shape_70.setTransform(897.8,367.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAABcIgbABQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgEQABgEAAgRIAAg0QAAgIgBgCQgBgEgGgDIgDgCIgBgDIACgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgBAkIAAA2QAAARABAEQACAEAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAEAEAAAHQAAAHgEAFQgFADgFABQgGgBgFgEg");
	this.shape_71.setTransform(886.1,368.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgFQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAcABIAYgBQABABAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgEABQgHAAgBACQgBACACAHIAVA4IAFAKIAFgMIARgqQAGgOAAgEQAAgFgGAAIgGgBIgCgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBIAXABIAVgBQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEABQgHABgFAGIgKATQgLAUgRAqIgKAYQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_72.setTransform(875.7,372.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAKgJALgFQAMgFALAAQANAAALAFQALAEAIAJQAJAIAEALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgNAAgLgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQACAKAFAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgCgKgFgIQgFgJgGgFQgIgGgIAAQgIAAgHAEg");
	this.shape_73.setTransform(861.9,371.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_74.setTransform(850.1,371.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgkBlIgcABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAGgBQAJgBABgFQACgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIgBgDIABgCQATgIALgIQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIgBAOQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQAXgOASAAQALAAAJAFQAJAEAHAHQAGAIAEAKQADAKAAALQAAAQgFANQgGAMgJAJQgLAJgNAGQgOAFgNAAIgRgBQgDABAAAHIAAAgQgBAQACAEQABAEAIABIAMACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhOQgHACgCADQgEAFABANIAAAzQAAAFABAEQACADAFAEQAJAHALAAQAJAAAHgEQAIgEAEgHQAGgGACgJQADgKAAgMQAAgJgDgJQgCgIgGgHQgFgHgHgEQgIgEgKAAQgHAAgHADg");
	this.shape_75.setTransform(836.8,375.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgTAgQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAJgEAGgEQAHgIAAgKQAAgLgPgFQgFgDAAgFQAAgGAEgEQAEgEAHAAQAHAAAGAHQAEAEACAFQACAGAAAIQAAAGgDAHQgDAHgFAGQgFAEgGAFIgPAGQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_76.setTransform(818.1,377.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("Ag5BdQgDgEAAgFQAAgGADgEQAEgCAFAAIAGAAQAGAAAEgGQALgSAGgPQADgIAAgFQAAgGgFgOIgYg/IgGgQQgEgGgHgBIgIgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIAdABIAagBQAAAAAAAAQABAAAAABQAAAAAAABQAAABABAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAIgHACQgHABAAADQAAADAJAZIAKAbIAGAWQACgCAJgVIALgXQAKgZAAgFQAAgEgHgBIgJgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIAbABIAWgBQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgFABQgHABgGAIQgEAGgJARIgQAiIgwBnQgDAIgGAEQgEACgGAAQgGAAgEgDg");
	this.shape_77.setTransform(808.2,375.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_78.setTransform(797.1,371.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAABcIgbABQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgEQABgEAAgRIAAg0QAAgIgBgCQgBgEgGgDIgDgCIgBgDIACgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgBAkIAAA2QAAARABAEQACAEAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAEAEAAAHQAAAHgEAFQgFADgFABQgGgBgFgEg");
	this.shape_79.setTransform(788.5,368.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_80.setTransform(780.8,367.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgIAAQgNAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAHAAAHADQAFACAEAFQAEAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAEAAAEgCIAEgCQABAAAAAAQAAAAAAABQABAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_81.setTransform(771.6,371.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAYA+IAAgMQAAgEgCAAQgWAPgSAAQgKAAgHgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgCgEgGgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQATAAANgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAaIAAAwQABATADAGQAEAFAFACQAGADAIAAQAEAAAHgDQAGgCAFgEQAHgGgBgMIAAgvQAAgOgCgEQgCgDgGgDIgFgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAYAAALgFQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABIgBAaIAAAwQAAATABAHQACAHAGAAIAMgBQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgeAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_82.setTransform(757.7,372.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAkBiIgfABQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAIAKgBQAIgBABgEQACgEAAgRIAAgnQAAgIgDAAQgGAEgIACQgIACgGAAQgQAAgNgGQgLgFgIgKQgGgGgEgKQgDgKAAgJQAAgQAGgNQAFgNAKgJQAKgIANgFQANgEANgBQAOAAALAEIAKACQADAAAFgGQABAAAAABQABAAAAAAQABABAAAAQAAABABABQgDAJAAAbIAAB8QAAAQACAEQACAEAIABIAIACQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgThVQgHADgFAHQgFAGgDAJQgDAJAAALQAAAMADAKQAEALAGAHQAGAGAJAEQAJAEAIAAQAQAAAEgFQACgCAAgIIAAgtQAAgWgEgHQgDgHgHgDQgHgEgHAAQgIAAgIAEg");
	this.shape_83.setTransform(742.6,375.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_84.setTransform(722.7,371.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg1AAQgGAAgBABQgBABAAAGQAAAJADALQADAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_85.setTransform(711.6,371.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_86.setTransform(701.1,371.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgDgEgBAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgDgFQgCgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCgBgHIABgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAJgGQAJgGAKgDQAJgEAHAAQAIAAAGADQAFACAFAFQAEAEABAHQACAGgBAIIgCAzQAAALADAHQADAIAJAAQAEAAADgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgGAEQgGAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAg");
	this.shape_87.setTransform(690.8,371.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAhA8QgGgSgHgPIgOghIgGgOIgFAOIgQAjIgMAfIgEACIgDgCIgJgYIgchDQgFgLgDgFQgEgEgGgBIgFgBIgBgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAbABIAagBQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgHABQgHABAAADQAAAEAFALIATAsIAFAOIAHgPIAPgjQAEgLgCgGQgDgIgKgCIgFgBQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAXABIAcgBQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgGABQgJACgBABQgBADADAIIAXA2IAEAIIAEgIIAUgzQADgJAAgFQAAgCgFgBIgIgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAXABIAUgBQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgGABQgGABgDAEQgDADgFAKQgWAzgGAQIgKAbIgEACg");
	this.shape_88.setTransform(674.3,372.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgCADQAAACgRAAIg1AAQgGAAgCABQgBABAAAGQABAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_89.setTransform(651.1,371.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgFQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAcABIAYgBQABABAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgEABQgHAAgBACQgBACACAHIAVA4IAFAKIAFgMIARgqQAGgOAAgEQAAgFgGAAIgGgBIgCgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBIAXABIAVgBQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEABQgHABgFAGIgKATQgLAUgRAqIgKAYQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_90.setTransform(638.6,372.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAKgJALgFQAMgFALAAQANAAALAFQALAEAIAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgNAAgLgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQACAKAFAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgFgJgGgFQgJgGgHAAQgIAAgHAEg");
	this.shape_91.setTransform(624.7,371.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_92.setTransform(612.9,371.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgkBlIgcABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAGgBQAJgBABgFQACgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIgBgDIABgCQATgIALgIQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIgBAOQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQAXgOASAAQALAAAJAFQAJAEAHAHQAGAIAEAKQADAKAAALQAAAQgFANQgGAMgKAJQgKAJgNAGQgOAFgNAAIgRgBQgDABAAAHIAAAgQgBAQACAEQACAEAHABIAMACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhOQgHACgCADQgDAFAAANIAAAzQAAAFABAEQACADAFAEQAJAHALAAQAJAAAHgEQAIgEAEgHQAGgGACgJQADgKAAgMQAAgJgDgJQgCgIgGgHQgFgHgHgEQgIgEgKAAQgHAAgHADg");
	this.shape_93.setTransform(599.7,375.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_94.setTransform(580.6,371.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAABcIgaABQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAIAGgBQAIgBACgEQACgEAAgRIAAg0QgBgIgBgCQgBgEgGgDIgDgCIgBgDIACgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBAkIAAA2QAAARACAEQACAEAIABIAGABQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhCQgEgEAAgHQAAgHAFgFQAEgDAHAAQAFgBAEAFQAFAEgBAHQAAAHgEAFQgFADgEABQgIgBgEgEg");
	this.shape_95.setTransform(565,368.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_96.setTransform(545.8,371.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgDgEgDAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQAAgFAGgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAIAAAGADQAFACAEAFQAEAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAEAAAEgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAg");
	this.shape_97.setTransform(532.3,371.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_98.setTransform(520.1,371.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_99.setTransform(501.3,371.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_100.setTransform(492.8,367.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg1AAQgGAAgBABQgBABAAAGQAAAJADALQADAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_101.setTransform(483.4,371.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_102.setTransform(472.4,371.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_103.setTransform(462.7,371.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAYA+IAAgMQAAgEgCAAQgWAPgSAAQgJAAgIgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgCgEgGgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQATAAANgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAaIAAAwQABATADAGQAEAFAFACQAFADAJAAQAEAAAHgDQAGgCAFgEQAHgGgBgMIAAgvQAAgOgCgEQgCgDgGgDIgFgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAYAAALgFQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABIgCAaIAAAwQAAATACAHQACAHAGAAIAMgBQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgeAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_104.setTransform(450.7,372.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_105.setTransform(430.9,371.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgTAgQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAJgEAGgEQAHgIAAgKQAAgLgPgFQgFgDAAgFQAAgGAEgEQAEgEAHAAQAHAAAGAHQAEAEACAFQACAGAAAIQAAAGgDAHQgDAHgFAGQgFAEgGAFIgPAGQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_106.setTransform(407.6,377.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_107.setTransform(399.1,371.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgHgJQgHgIgDgLQgDgJAAgLQAAgMAEgMQAEgMAIgKQAJgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgCABQAAABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgFAFgHAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_108.setTransform(388.7,371.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgFQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAcABIAYgBQABABAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgEABQgHAAgBACQgBACACAHIAVA4IAFAKIAFgMIARgqQAGgOAAgEQAAgFgGAAIgGgBIgCgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBIAXABIAVgBQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEABQgHABgFAGIgKATQgLAUgRAqIgKAYQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_109.setTransform(376.1,372.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_110.setTransform(365.9,367.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgIAAQgNAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQABgKgFgHQgCgEgDgDQgEgCgHAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAHAAAHADQAFACAFAFQADAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAEAAAEgCIAEgCQABAAAAAAQAAAAAAABQABAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_111.setTransform(356.7,371.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgFQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAcABIAYgBQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgEABQgHAAgBACQgBACACAHIAVA4IAFAKIAFgMIARgqQAGgOAAgEQAAgFgGAAIgGgBIgCgEQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAXABIAVgBQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEABQgHABgFAGIgKATQgLAUgRAqIgKAYQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_112.setTransform(343.7,372.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAABcIgbABQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgEQACgEgBgRIAAg0QAAgIgBgCQgBgEgGgDIgDgCIAAgDIABgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgBAkIAAA2QAAARACAEQABAEAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAEAEAAAHQABAHgGAFQgDADgGABQgGgBgFgEg");
	this.shape_113.setTransform(333.4,368.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgcBpIgMgEQgDAAgEAFIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIABgZIAAiNQAAgOgCgEQgBgDgHgEIgCgCIgCgDIACgDIAggNQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIgBAlIAAA5QAAAGADAAQAHgEAIgCQAJgEAIAAQANAAALAFQAKAEAIAHQAIAHAEALQAEALAAAMQAAAPgFANQgFAMgKAJQgJAJgMAFQgNAFgNAAQgNAAgNgEgAgYAAQgEADAAAOIAAAvQAAAIACAHQACAGADAFQAEAFAGACQAGADAFAAQALAAAHgEQAIgEAEgHQAFgHACgJQADgJAAgKQAAgLgDgKQgDgLgGgHQgGgHgIgEQgJgDgJAAQgNAAgHADg");
	this.shape_114.setTransform(321.8,367.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_115.setTransform(302.4,371.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_116.setTransform(291.3,371.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_117.setTransform(277.4,367.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_118.setTransform(265.4,371.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAJgJALgFQAMgFALAAQAMAAAMAFQAKAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgLAFgNAAQgMAAgMgEgAgOgxQgHADgEAHQgFAHgCAJQgDAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAIAAQAJAAAHgFQAHgEADgIQAGgKACgYQAAgIgCgKQgDgKgDgIQgFgJgHgFQgJgGgHAAQgIAAgGAEg");
	this.shape_119.setTransform(253.2,371.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgHgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJADALQAEAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgDAHgGAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_120.setTransform(232.7,371.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAoBqIgfABQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAFgBQAIgBAAgCQAAgDgGgGIgeglQgDgEgGAAQgEAAgBACQgBABAAAHIAAARQAAAQACAEQACAFAIABIAHABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgdgBIgdABQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIgBAlIAABlIABADIAFABQAFAAAEgDQAFgCAGgHIAKgNQALgLAAgCQAAgBgHgBIgHAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAHAAQAZAAAXgCQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAQAAABgBABQAAAAAAAAQAAABgBAAIgJACQgIACgLAGIgbAaQgEAEABADIAVAYIAcAeQAFAFAKACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_121.setTransform(219.9,367.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAABcIgbABQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgEQABgEAAgRIAAg0QAAgIgBgCQgBgEgGgDIgDgCIgBgDIACgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgBAkIAAA2QAAARABAEQACAEAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAEAEAAAHQAAAHgEAFQgFADgFABQgGgBgFgEg");
	this.shape_122.setTransform(208.4,368.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_123.setTransform(200.7,367.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_124.setTransform(185.2,371.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_125.setTransform(175.4,371.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AAZA+IAAgMQgBgEgCAAQgWAPgRAAQgKAAgIgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgBgEgHgDIgEgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQASAAAOgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAaIAAAwQACATAEAGQADAFAFACQAGADAIAAQAEAAAHgDQAHgCAEgEQAHgGAAgMIAAgvQgBgOgCgEQgCgDgGgDIgFgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAYAAALgFQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgBAaIAAAwQABATABAHQACAHAGAAIAMgBQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgeAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_126.setTransform(163.4,372.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgyB7QAAgFADgEQAEgFAEAAIALACQAHACAGAAQAIAAAEgIQAEgOACg9IAAhwIgBgUQgBgHgBgEQgDgGgNgBIgIgBIgBgEIACgDIAmABIAigBQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgDABQgNACgDAGQgDAGAAAYIAABuQAAAUgCAMQgBAQgEAKQgEAJgFAIQgGAIgGAGQgHAGgKADQgJADgKAAQgNAAAAgGg");
	this.shape_127.setTransform(148.9,370.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgKAMQgGgFAAgHQABgFAEgGQAFgEAGAAQAHAAAFAEQAEAGAAAFQAAAHgEAFQgFAFgHAAQgFAAgFgFg");
	this.shape_128.setTransform(373.4,698.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_129.setTransform(361.9,693.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAJgJAMgFQAMgFALAAQANAAALAFQALAEAIAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgNAAgLgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQACAKAFAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgFgJgGgFQgJgGgHAAQgIAAgHAEg");
	this.shape_130.setTransform(346.6,693.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgHAAQgOAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAFgGAPgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAKgEAGAAQAHAAAGADQAHACADAFQAEAEACAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgFgCgAgGAJQgOAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQADgDABgLIABgSQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_131.setTransform(324.3,693.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgHgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg1AAQgGAAgCABQgBABAAAGQAAAJADALQAEAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgDAHgGAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_132.setTransform(311.9,693.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAFgMQADgMAJgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgFAFgHAEQgMAGgOAAQgMAAgMgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_133.setTransform(273,693.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAZA+IAAgMQAAgEgDAAQgWAPgRAAQgLAAgGgCQgIgCgEgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgBgEgHgDIgEgBQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQASAAAOgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAaIAAAwQABATAFAGQADAFAFACQAGADAIAAQAEAAAHgDQAHgCAEgEQAGgGABgMIAAgvQAAgOgDgEQgBgDgIgDIgDgBQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAYAAALgFQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIgBAaIAAAwQABATABAHQACAHAGAAIALgBQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgdAGgKAFQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_134.setTransform(212.3,694.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJADALQAEAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgDAHgGAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_135.setTransform(181.4,693.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_136.setTransform(167.5,693.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAKgJALgFQAMgFALAAQANAAALAFQALAEAIAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgNAAgLgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQACAKAFAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgCgKgFgIQgFgJgGgFQgIgGgIAAQgIAAgHAEg");
	this.shape_137.setTransform(152.2,693.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAABcIgaABQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAGgBQAIgBACgEQACgFAAgQIAAg1QAAgGgBgDQgCgEgGgDIgDgCIgBgDIACgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBAkIAAA2QAAAQACAFQACAEAIABIAGABQABAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhCQgEgFAAgFQAAgIAFgEQAEgFAHAAQAFABAEAEQAFAFgBAGQAAAIgEADQgEAEgFABQgIAAgEgFg");
	this.shape_138.setTransform(907.6,644.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_139.setTransform(891.5,647.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgFAFgHAEQgNAGgNAAQgMAAgLgGgAgGgyQgGACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_140.setTransform(880.4,647.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_141.setTransform(870,647.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgDgEgBAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgDgFQgCgGAAgGQAAgJAFgFQAGgGAOgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgFAEgBAGQgBAJgCACQgHAFgLAAQgDAAAAgEQAAgFAFgHQAFgGAJgGQAJgGAJgDQAKgEAHAAQAHAAAHADQAFACAFAFQAEAEABAHQACAGAAAIIgDAzQAAALADAHQADAIAJAAQADAAAEgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQACgDABgLIABgSQAAgEgDAAg");
	this.shape_142.setTransform(859.6,647.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAhA8QgGgSgHgPIgOggIgGgQIgFAPIgQAjIgMAfIgEACIgDgCIgJgYIgchDQgFgMgDgEQgEgEgGgBIgFgBIgBgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAbABIAagBQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgHABQgHABAAADQAAAEAFAMIATArIAFANIAHgOIAPgiQAEgMgCgFQgDgJgKgCIgFgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAXABIAcgBQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgGABQgJABgBACQgBADADAHIAXA2IAEAJIAEgJIAUgyQADgJAAgFQAAgDgFAAIgIgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAXABIAUgBQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgGABQgGABgDAEQgDADgFALQgWAzgGAPIgKAbIgEACg");
	this.shape_143.setTransform(843.2,648.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgHgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAGAFQAFAFADAHQADAGAAAHQAAAFgCADQAAACgRAAIg2AAQgFAAgCABQgBABAAAGQAAAJADALQAEAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_144.setTransform(820,647.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_145.setTransform(806.1,643.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_146.setTransform(794.1,647.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_147.setTransform(773.9,647.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAABcIgaABQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAGgBQAIgBACgEQACgFAAgQIAAg1QAAgGgBgDQgCgEgGgDIgDgCIgBgDIACgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBAkIAAA2QAAAQACAFQACAEAIABIAGABQABAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhCQgEgFAAgFQAAgIAFgEQAEgFAHAAQAFABAEAEQAFAFgBAGQAAAIgEADQgEAEgFABQgIAAgEgFg");
	this.shape_148.setTransform(762.2,644.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgHgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJADALQAEAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_149.setTransform(735.4,647.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_150.setTransform(725.5,643.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AAABcIgbABQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgBQAIgBACgEQABgFAAgQIAAg1QAAgGgBgDQgBgEgGgDIgDgCIgBgDIACgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgBAkIAAA2QAAAQABAFQACAEAIABIAHABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhCQgEgFAAgFQAAgIAFgEQAFgFAGAAQAFABAEAEQAEAFAAAGQAAAIgEADQgFAEgFABQgGAAgFgFg");
	this.shape_151.setTransform(706.1,644.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_152.setTransform(697.8,647.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_153.setTransform(688.4,647.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgHAAQgOAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAFgGAPgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAJgEAHAAQAHAAAGADQAHACADAFQAEAEACAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgFgCgAgGAJQgOAFgFAEQgHAFAAAJQADASAQAAQALAAAFgIQADgDABgLIABgSQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_154.setTransform(677.5,647.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgkBlIgcABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAGgBQAJgBABgFQACgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIgBgDIABgCQASgIAMgIQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIgBAOQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQAXgOASAAQAKAAAKAFQAJAEAHAHQAGAIAEAKQADAKAAALQAAAQgFANQgFAMgKAJQgLAJgNAGQgOAFgNAAIgRgBQgDABAAAHIAAAgQgBAQACAEQACAEAHABIAMACQABAAAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhOQgHACgCADQgEAFABANIAAAzQAAAFABAEQACADAFAEQAJAHALAAQAJAAAHgEQAHgEAFgHQAFgGADgJQADgKAAgMQAAgJgDgJQgDgIgFgHQgEgHgIgEQgIgEgKAAQgHAAgHADg");
	this.shape_155.setTransform(663,651.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgYBqIgcABQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAhAQAAgGgBgBQAAgBgFAAIgKAAQgDgBACgDIANgGQAEgDAAgDQAAgPACgMQADgOAFgMIAHgNQAFgHAGgGQAHgFAHgEQAJgDALAAQAMAAAIAFQAJAFAAAIQAAAEgEADQgDAEgEAAQgEAAgEgEQgFgGgFgDQgHgEgHAAQgHAAgFAEQgEAEgDAIQgEAKgBAPIgCAaIAAAJIABAHQAAAAABAAQAAABAAAAQABAAABAAQABAAABAAIAgAAQACACgBAFQgBADgCABIgeAAQgBAAgBAAQgBAAgBAAQAAAAAAAAQgBABAAAAIgBAHIAABAQAAAQACAFQACAEAIABIAJABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAg");
	this.shape_156.setTransform(645.9,643.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAJgJALgFQAMgFALAAQAMAAAMAFQAKAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgMAFgMAAQgMAAgMgEgAgPgxQgGADgEAHQgFAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAHgEADgIQAGgKACgYQAAgIgCgKQgDgKgDgIQgFgJgHgFQgJgGgHAAQgIAAgHAEg");
	this.shape_157.setTransform(632.2,647.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AggB9QAMgMAJgOQAIgNAEgPQAFgQADgSQADgSABgTQgBgSgDgSQgDgSgFgQQgEgPgIgNQgJgOgMgMQAAgEAFAAQANAIAMAOQAJANAJARQAHASAFATQAEATABAUQgBAVgEATQgFATgHASQgJAQgJAOQgMAOgNAIQgFAAAAgEg");
	this.shape_158.setTransform(611.7,645.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgKBeQgFgEAAgIQAAgHAEgGQAFgEAGAAQAHAAAFAEQAEAGAAAHQAAAIgEAEQgFAFgHgBQgGABgEgFgAgDAhIgIhfIgCgbQAAgFADgBQADgDAHAAQAHAAADADQAEABAAAFIgCAbIgJBfIgDABQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_159.setTransform(604.5,644.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_160.setTransform(587.3,647.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_161.setTransform(574.6,647.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCgBgHIABgOQAAgKgEgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAJgGQAJgGAJgDQAKgEAHAAQAIAAAGADQAFACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_162.setTransform(561.2,647.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_163.setTransform(546.8,643.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgkBlIgcABQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAGgBQAHgBADgFQABgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIAAgDIABgCQASgIALgIQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABIgCAOQAAABABAAQAAABAAAAQABABAAAAQABAAABAAQAWgOARAAQALAAAKAFQAJAEAGAHQAHAIADAKQAEAKAAALQAAAQgGANQgEAMgLAJQgJAJgNAGQgPAFgNAAIgQgBQgFABAAAHIAAAgQAAAQACAEQABAEAJABIAMACQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBABQABAAgBABQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhOQgHACgCADQgEAFAAANIAAAzQAAAFADAEQABADAFAEQAJAHALAAQAJAAAIgEQAHgEAFgHQAEgGADgJQADgKAAgMQAAgJgDgJQgDgIgEgHQgFgHgIgEQgIgEgJAAQgHAAgIADg");
	this.shape_164.setTransform(531.2,651.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgFAFgHAEQgNAGgNAAQgMAAgLgGgAgGgyQgGACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_165.setTransform(518.2,647.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_166.setTransform(508.3,643.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgHgJQgHgIgDgLQgDgJAAgLQAAgMAEgMQAEgMAIgKQAJgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgCABQAAABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAGgDQAGgDAHgIQAFgCAAAFQgEAHgFAGQgFAFgHAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_167.setTransform(498.9,647.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAEgMAIgKQAJgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgCABQAAABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAGgDQAGgDAHgIQAEgCABAFQgEAHgFAGQgFAFgHAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_168.setTransform(479.6,647.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_169.setTransform(468.9,647.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgXA7QgMgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAJgJAMgFQALgFAMAAQAMAAALAFQALAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgNAAgKgEgAgOgxQgHADgFAHQgEAHgCAJQgDAKAAAMQAAAJACAKQACAKAFAIQAFAIAIAFQAHAFAIAAQAJAAAHgFQAGgEAFgIQAFgKACgYQAAgIgCgKQgDgKgEgIQgEgJgIgFQgHgGgJAAQgHAAgGAEg");
	this.shape_170.setTransform(456.2,647.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_171.setTransform(437.2,647.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_172.setTransform(413.3,647.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgXA7QgMgFgIgIQgJgIgFgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAJgJALgFQALgFAMAAQAMAAALAFQALAEAJAJQAJAIAEALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgMAFgMAAQgNAAgKgEgAgOgxQgHADgEAHQgFAHgCAJQgDAKAAAMQAAAJACAKQADAKAEAIQAFAIAIAFQAHAFAIAAQAJAAAHgFQAGgEAFgIQAFgKACgYQAAgIgCgKQgCgKgEgIQgGgJgHgFQgHgGgJAAQgHAAgGAEg");
	this.shape_173.setTransform(400.6,647.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("Ag1BnQgBgDACgCQASgBAQgFQAPgGAKgJQAMgKAHgNIAFgNQACgHAAgIQAAgIgDgGQgBgHgEgFQgHgIgNgHQgJgFgPgDQgMgDgPAAQgGAAADgJIAQg2QACgHAGgBIBGgKQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABQgEAKgHAIIg3AIQgIABgCAIIgFASQgCAFAGAAIAGAAQAPACAMAEQAOAEALAIQAMAIAHALQADAGACAFQACAIAAAIQAAAKgDAJQgCAJgFAIQgFAIgHAHQgGAHgIAGQgUAOgNAEQgZAHgMABQgCgBAAgEg");
	this.shape_174.setTransform(378.1,645.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgYBqIgcABQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAhAQAAgGgBgBQAAgBgFAAIgKAAQgDgBACgDIANgGQAEgDAAgDQAAgPACgMQADgOAFgMIAHgNQAFgHAGgGQAHgFAHgEQAJgDALAAQAMAAAIAFQAJAFAAAIQAAAEgEADQgDAEgEAAQgEAAgEgEQgFgGgFgDQgHgEgHAAQgHAAgFAEQgEAEgDAIQgEAKgBAPIgCAaIAAAJIABAHQAAAAABAAQAAABAAAAQABAAABAAQABAAABAAIAgAAQACACgBAFQgBADgCABIgeAAQgBAAgBAAQgBAAgBAAQAAAAAAAAQgBABAAAAIgBAHIAABAQAAAQACAFQACAEAIABIAJABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAg");
	this.shape_175.setTransform(361,643.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAIgIQAKgJALgFQAMgFALAAQAMAAAMAFQAKAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgMAFgMAAQgMAAgMgEgAgPgxQgGADgEAHQgFAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAHgEADgIQAGgKACgYQAAgIgCgKQgDgKgDgIQgFgJgHgFQgJgGgHAAQgIAAgHAEg");
	this.shape_176.setTransform(347.3,647.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_177.setTransform(328.3,647.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_178.setTransform(315.6,643.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgkBiQgJgDgGgFQgGgGgDgGQgCgGAAgGQAAgHADgDIAUgVQAGgFgDgCQgJgCgHgHQgGgHAAgIQAAgBAEgDQAIgEAIgJQADgDAAgDQgJgEgGgIQgDgFgCgFQgCgHAAgHQAAgJAEgJQADgIAHgGQAHgGAJgDQAJgEAKAAQANAAAOAGQAKAFAIAAIAYAAQADABgBAFQgBAGgDAAIgVAAIAAAQQAAAIgCAHQgDAJgGAHQgGAHgJAEQgLAFgLAAIgNAAQgOAHAAAHQAAAFAGAEQAFADAKAAIAiAAIAOAAQAIACAFADQAHADAEAHQAEAHAAALQAAAMgGAKQgGAKgLAIQgKAHgNAFQgOAEgNAAQgNAAgKgDgAgZAhQgGAEgEAHQgFAHAAAHQAAAHADAFQACAFAFAFQAFAEAIACQAHADAKAAQAIgBAJgDQAIgCAGgFQAFgDAEgHQADgFAAgHQAAgGgDgFQgCgGgEgCQgFgEgGgCIgOgBIgJAAQgUAAgFADgAgahSQgDAEgCAHQgCAGAAAHQAAAIACAHQACAGAEAFQAIAJALAAQAGAAADgCQAFgCADgEQAGgJAAgNIgCgPQgBgHgEgFQgDgGgFgCQgDgDgHAAQgLAAgHAJg");
	this.shape_179.setTransform(301.7,651.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AAABcIgaABQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgBQAIgBACgEQABgFAAgQIAAg1QAAgGgBgDQgBgEgGgDIgDgCIgBgDIACgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAAAkIAAA2QAAAQABAFQACAEAIABIAHABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhCQgEgFAAgFQAAgIAFgEQAEgFAHAAQAFABAEAEQAFAFgBAGQAAAIgEADQgFAEgFABQgGAAgFgFg");
	this.shape_180.setTransform(290.9,644.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQADgMAIgKQAJgJAKgFQAMgGAMAAQAJAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgBABQgCABAAAGQABAJADALQADAKAHAHQAFAIAKAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgMAGgOAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAAEgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_181.setTransform(281.2,647.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAhA8QgGgSgHgPIgOggIgGgQIgFAPIgQAjIgMAfIgEACIgDgCIgJgYIgchDQgFgMgDgEQgEgEgGgBIgFgBIgBgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAbABIAagBQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgHABQgHABAAADQAAAEAFAMIATArIAFANIAHgOIAPgiQAEgMgCgFQgDgJgKgCIgFgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAXABIAcgBQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgGABQgJABgBACQgBADADAHIAXA2IAEAJIAEgJIAUgyQADgJAAgFQAAgDgFAAIgIgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAXABIAUgBQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgGABQgGABgDAEQgDADgFALQgWAzgGAPIgKAbIgEACg");
	this.shape_182.setTransform(265.2,648.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQADgMAIgKQAJgJAKgFQAMgGAMAAQAJAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgBABQgCABAAAGQABAJADALQADAKAHAHQAFAIAKAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgFAFgHAEQgMAGgOAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAAEgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_183.setTransform(242,647.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_184.setTransform(228.1,643.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_185.setTransform(216.1,647.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AADBrQgJgOgJgQQgIgSgEgTQgEgTgBgVQABgUAEgTQAEgTAIgSQAJgRAJgNQAMgOANgIQAEAAAAAEQgLAMgIAOQgJANgEAPQgGAQgCASQgEASAAASQAAATAEASQACASAGAQQAEAPAJANQAIAOALAMQAAAEgEAAQgNgIgMgOg");
	this.shape_186.setTransform(207.3,645.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_187.setTransform(189.2,647.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_188.setTransform(176.7,647.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgXA7QgMgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAJgJAMgFQALgFAMAAQAMAAALAFQALAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgNAAgKgEgAgOgxQgHADgFAHQgEAHgCAJQgDAKAAAMQAAAJACAKQACAKAFAIQAFAIAIAFQAHAFAIAAQAJAAAHgFQAGgEAFgIQAFgKACgYQAAgIgCgKQgDgKgEgIQgEgJgIgFQgHgGgJAAQgHAAgGAEg");
	this.shape_189.setTransform(161.4,647.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_190.setTransform(149.9,647.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_191.setTransform(921.1,601.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAGgBQAIgBACgFQABgDABgRIAAg1QAAgGgBgDQgCgEgGgDIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBAkIAAA2QAAARADADQABAFAIABIAGABQABAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgFAAgFQAAgIAFgEQAFgFAGAAQAFABAEAEQAFAEAAAHQgBAIgFADQgEAEgEABQgIAAgEgFg");
	this.shape_192.setTransform(910.9,598.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_193.setTransform(902.4,601.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_194.setTransform(892.7,601.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg1AAQgGAAgCABQgBABAAAGQAAAJADALQAEAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_195.setTransform(882.1,601.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_196.setTransform(864.2,601.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgaBjQgNgFgHgLQgJgKgEgOQgDgNAAgQQAAgKABgLQACgKAFgLQAEgNAIgMQAIgNALgLQAMgLALgJQALgHANgFQAPgHAXgEQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIAAADQgtAQgTAXQgKAJgGAMQgHALgEAMQgEALgCAKQgCALAAANQAAANACAMQADAMAFAJQAFAKAIAFQAIAFAJAAQAIAAAGgDQAHgDAEgHQAEgGADgJQACgIAAgJQAAgKgCgJQgCgJgFgHQgFgHgGgEQgIgFgJAAQgEAAgIADQgDgCACgBQAHgEAFgCQAHgDAJAAQAKAAAKAEQAIAEAGAFQAGAIAEAJQADAKAAAMQAAANgFALQgEAMgIAIQgJAJgLAFQgNAEgNAAQgOAAgMgGg");
	this.shape_197.setTransform(837.4,597.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AANBfIgqAAIghABQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIADgDQAKgHAKgJIAagbIAPgSIAMgTQAHgKADgLQAEgMAAgLQAAgKgDgIQgCgJgFgFQgFgGgHgDQgFgDgJAAQgGAAgGACQgGACgEAFQgLAHgFAOQgBAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAEgLAGgHQAGgIAIgGQAIgFAJgDQAKgDAIAAQALAAAJADQAJAEAHAHQAGAGAEAJQADAJAAALQgCATgGALQgNAUgLAOIgSAVQgXAcgCAHQAAACAJAAIAjAAQALAAAGgBQAHgCAEgDQAGgFAEgIQAEgBACADQgJAfgFAGg");
	this.shape_198.setTransform(822.1,598.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAIgIQAKgJALgFQAMgFALAAQAMAAAMAFQAKAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgMAFgMAAQgMAAgMgEgAgPgxQgGADgEAHQgFAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAHgEADgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgEgJgHgFQgJgGgHAAQgIAAgHAEg");
	this.shape_199.setTransform(800,601.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_200.setTransform(788.5,601.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgkBlIgcABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAHgBQAHgBADgFQABgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIAAgDIAAgCQASgIAMgIQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIgBAOQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAQAWgOASAAQAKAAAKAFQAJAEAHAHQAGAIAEAKQADAKAAALQAAAQgGANQgFAMgJAJQgLAJgNAGQgNAFgOAAIgRgBQgDABAAAHIAAAgQAAAQABAEQABAEAJABIALACQABAAAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhOQgHACgCADQgEAFABANIAAAzQAAAFACAEQABADAFAEQAJAHALAAQAJAAAIgEQAGgEAFgHQAFgGADgJQADgKAAgMQAAgJgDgJQgDgIgFgHQgEgHgIgEQgIgEgJAAQgIAAgHADg");
	this.shape_201.setTransform(768.2,605.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AAZA+IAAgMQAAgEgDAAQgWAPgRAAQgLAAgGgCQgIgCgEgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgBgEgHgDIgEgBQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQASAAAOgFQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIgBAaIAAAwQABATAFAGQADAFAFACQAGADAIAAQAEAAAHgDQAHgCAFgEQAFgGABgMIAAgvQAAgOgDgEQgBgDgIgDIgDgBQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAYAAALgFQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIAAAaIAAAwQAAATABAHQACAHAGAAIALgBQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgdAGgKAFQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_202.setTransform(753.6,602.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAIAEALAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgGACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_203.setTransform(732.3,601.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgFQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAcABIAYgBQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgEABQgHABgBACQgBABACAIIAVA3IAFAJIAFgLIARgqQAGgOAAgFQAAgDgGgBIgGgBIgCgEQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAIAXABIAVgBQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEABQgHAAgFAHIgKASQgLAVgRAqIgKAYQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_204.setTransform(719.8,602.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgXA7QgMgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAJgJAMgFQALgFAMAAQAMAAALAFQALAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgNAAgKgEgAgOgxQgHADgFAHQgEAHgCAJQgDAKAAAMQAAAJACAKQACAKAFAIQAFAIAIAFQAHAFAIAAQAJAAAHgFQAGgEAFgIQAFgKACgYQAAgIgCgKQgDgKgEgIQgEgJgIgFQgHgGgJAAQgHAAgGAEg");
	this.shape_205.setTransform(705.9,601.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_206.setTransform(687,601.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgFAFgHAEQgNAGgNAAQgMAAgLgGgAgGgyQgGACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_207.setTransform(669.4,601.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_208.setTransform(658.7,601.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAIgIQAKgJALgFQAMgFALAAQAMAAAMAFQAKAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgMAFgMAAQgMAAgMgEgAgPgxQgGADgEAHQgFAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAHgEADgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgEgJgHgFQgJgGgHAAQgIAAgHAEg");
	this.shape_209.setTransform(638.5,601.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_210.setTransform(626.9,601.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAZBsIAAgFIgBgJIgBAAQgLAHgHADQgIADgKAAQgMAAgLgEQgKgEgHgIQgIgIgDgLQgEgKgBgMQAAgQAGgNQAFgMALgJQAJgHANgFQAOgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgCgEgGgEIgDgCIgCgDIACgDQAVgHALgFQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQAEAAAJgDQAAAAABABQAAAAAAABQAAAAAAABQAAABABABQAAAEgCABQgZADgPAGQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBgAgUgEQgIAEgGAFQgFAHgCAJQgDAJAAAKQAAAKADAKQADAJAFAIQAGAIAIAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgIgEgFAAQgLAAgHAEg");
	this.shape_211.setTransform(607.3,597.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQADgMAIgKQAJgJAKgFQAMgGAMAAQAJAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg2AAQgFAAgBABQgBABAAAGQAAAJADALQADAKAHAHQAGAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAAEgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_212.setTransform(593.6,601.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_213.setTransform(583.1,601.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAJgEAHAAQAHAAAGADQAGACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQAAAAABAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_214.setTransform(572.8,601.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_215.setTransform(554.4,601.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AAABdIgaABQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgBQAIgBACgFQABgDAAgRIAAg1QAAgGgBgDQgBgEgGgDIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAABAAIgBAkIAAA2QAAARABADQACAFAIABIAHABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgFAAgFQAAgIAFgEQAEgFAHAAQAFABAEAEQAFAEgBAHQAAAIgEADQgFAEgFABQgGAAgFgFg");
	this.shape_216.setTransform(538.8,598.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_217.setTransform(530.5,601.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgCABQgBABAAAGQABAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_218.setTransform(510.3,601.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCgBgHIABgOQAAgKgEgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAJgGQAJgGAJgDQAKgEAHAAQAIAAAGADQAFACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgGAEQgGAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_219.setTransform(481.5,601.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AAhA8QgGgTgHgOIgOggIgGgQIgFAPIgQAkIgMAeIgEABIgDgBIgJgYIgchCQgFgNgDgEQgEgEgGgBIgFgCIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAbABIAagBQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgHACQgHABAAADQAAAEAFAMIATAsIAFAMIAHgOIAPgiQAEgMgCgFQgDgJgKgCIgFgCQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAXABIAcgBQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgJABgBACQgBADADAHIAXA2IAEAJIAEgJIAUgzQADgIAAgFQAAgCgFgBIgIgCQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAXABIAUgBQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgGABgDAEQgDADgFALQgWAzgGAPIgKAbIgEABg");
	this.shape_220.setTransform(465.1,602.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgIAAQgNAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgGAEAAAGQgBAJgCACQgHAFgLAAQgDAAgBgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAHAAAHADQAGACAEAFQADAEACAHQACAGAAAIIgDAzQAAALADAHQADAIAIAAQAEAAAEgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgGAJQgOAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_221.setTransform(442.1,601.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAGgBQAIgBACgFQABgDAAgRIAAg1QAAgGAAgDQgCgEgGgDIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgCAkIAAA2QAAARADADQABAFAIABIAGABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgFAAgFQAAgIAFgEQAFgFAGAAQAFABAEAEQAEAEABAHQAAAIgGADQgDAEgGABQgGAAgFgFg");
	this.shape_222.setTransform(431.8,598.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_223.setTransform(420,601.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgBAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgGAEAAAGQgBAJgCACQgHAFgLAAQgEAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAHAAAHADQAGACAEAFQADAEACAHQACAGAAAIIgDAzQAAALADAHQADAIAJAAQADAAAEgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgGAJQgOAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_224.setTransform(406.6,601.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgFQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAcABIAYgBQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgEABQgHABgBACQgBABACAIIAVA3IAFAJIAFgLIARgqQAGgOAAgFQAAgDgGgBIgGgBIgCgEQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAIAXABIAVgBQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEABQgHAAgFAHIgKASQgLAVgRAqIgKAYQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_225.setTransform(393.5,602.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_226.setTransform(383.3,597.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("Ag5BdQgDgEAAgFQAAgGADgEQAEgCAFAAIAGAAQAGAAAEgGQALgSAGgPQADgIAAgFQAAgGgFgOIgYg/IgGgQQgEgGgHgBIgIgCQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIAdABIAagBQAAAAAAAAQABAAAAABQAAAAAAABQAAABABAAQAAABgBAAQAAABAAABQAAAAAAAAQgBABAAAAIgHACQgHABAAADQAAADAJAZIAKAbIAGAWQACgCAJgVIALgXQAKgZAAgFQAAgEgHgBIgJgCQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIAbABIAWgBQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgFABQgHABgGAIQgEAGgJARIgQAiIgwBnQgDAIgGAEQgEACgGAAQgGAAgEgDg");
	this.shape_227.setTransform(373.3,605.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_228.setTransform(349.1,601.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_229.setTransform(333.3,601.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgeBjIglABIgCgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAGgBQANgCADgGQADgGgBgXIAAhtQAAgUgBgFQgDgHgJgBIgMAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAQgCArAAQASAAAOACQAOAEAKAFQALAIAGAKQAHARAAAKQAAAKgDAJQgDAHgEAHQgIAJgMAEQgJAFgMACQgLACgJAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQALgCAJgFQAIgCAFgGQAGgHACgIQADgIgBgKQAAgLgCgJQgEgJgGgGQgGgHgJgDQgKgDgJAAQgMAAgCABQgCACAAAIIAACEQAAAYADAFQADAGANACIAHABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABg");
	this.shape_230.setTransform(305.3,598);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_231.setTransform(281.8,601.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_232.setTransform(269.2,601.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_233.setTransform(247.7,601.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgDgEgDAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAIAAAGADQAFACAEAFQAEAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAFAAADgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_234.setTransform(227.7,601.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgFAFgHAEQgNAGgNAAQgMAAgLgGgAgGgyQgGACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_235.setTransform(215.3,601.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_236.setTransform(201.4,597.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_237.setTransform(189.4,601.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AAZA+IAAgMQAAgEgDAAQgWAPgRAAQgLAAgGgCQgIgCgEgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgBgEgHgDIgEgBQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQASAAAOgFQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIgBAaIAAAwQABATAFAGQADAFAFACQAGADAIAAQAEAAAHgDQAHgCAEgEQAGgGABgMIAAgvQAAgOgDgEQgBgDgIgDIgEgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQAYAAALgFQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIgBAaIAAAwQABATABAHQACAHAGAAIALgBQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgdAGgKAFQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_238.setTransform(177.2,602.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgXA7QgMgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAJgJAMgFQALgFAMAAQAMAAALAFQALAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgNAAgKgEgAgOgxQgHADgFAHQgEAHgCAJQgDAKAAAMQAAAJACAKQACAKAFAIQAFAIAIAFQAHAFAIAAQAJAAAHgFQAGgEAFgIQAFgKACgYQAAgIgCgKQgDgKgEgIQgEgJgIgFQgHgGgJAAQgHAAgGAEg");
	this.shape_239.setTransform(161.9,601.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAHgBQAIgBACgFQABgDAAgRIAAg1QAAgGAAgDQgCgEgGgDIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgCAjIAAA2QAAARADADQABAFAIABIAGABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgFAAgFQAAgIAFgFQAFgEAGAAQAFABAEAEQAEAEABAHQAAAIgGADQgDAEgFAAQgHABgFgFg");
	this.shape_240.setTransform(833.2,552.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AAZBsIAAgFIgBgJIgBAAQgLAHgIADQgGADgLAAQgMAAgLgEQgKgEgHgIQgHgIgEgLQgFgKAAgMQABgQAFgNQAGgMAJgJQAKgHANgFQAOgFANAAQANAAAHADQABAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgCgEQgBgEgGgEIgEgCIgBgDIABgDQAWgHALgFQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIgBAlIAACBQAAAVABAGQACAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQABABAAABQAAAEgDABQgXADgQAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAgVgEQgHAEgGAFQgEAHgDAJQgDAJAAAKQAAAKADAKQADAJAFAIQAHAIAIAEQAIAEAKAAQAFAAAGgCQAIgDADgDQACgCAAgJIAAg8QAAgHgEgEQgDgEgGgDQgIgEgGAAQgJAAgJAEg");
	this.shape_241.setTransform(814.4,551.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgHgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAIAEALAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgDAHgGAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgGACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_242.setTransform(800.7,555.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAGgBQAIgBACgFQABgDABgRIAAg1QgBgGAAgDQgCgEgGgDIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgCAjIAAA2QAAARADADQABAFAIABIAGABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgFAAgFQAAgIAFgFQAFgEAGAAQAFABAEAEQAEAEABAHQAAAIgGADQgDAEgGAAQgGABgFgFg");
	this.shape_243.setTransform(790.9,552.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgHADQgIADgKAAQgMAAgLgEQgKgEgHgIQgIgIgDgLQgEgKgBgMQAAgQAGgNQAFgMALgJQAJgHANgFQAOgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgCgEgGgEIgDgCIgCgDIACgDQAVgHALgFQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQAEAAAJgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgBABQgZADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgUgEQgIAEgGAFQgFAHgCAJQgDAJAAAKQAAAKADAKQADAJAFAIQAGAIAIAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgIgEgFAAQgLAAgHAEg");
	this.shape_244.setTransform(779.6,551.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AAYA+IAAgMQAAgEgCAAQgWAPgSAAQgKAAgHgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgCgEgGgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQATAAANgFQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIAAAaIAAAwQABATADAGQAEAFAFACQAFADAJAAQAEAAAHgDQAGgCAFgEQAHgGgBgMIAAgvQAAgOgCgEQgCgDgGgDIgFgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAYAAALgFQABAAAAAAQAAAAABABQAAAAAAAAQAAAAABABIgCAaIAAAwQAAATACAHQACAHAGAAIAMgBQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgeAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_245.setTransform(764.3,556.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_246.setTransform(752,555.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_247.setTransform(742.2,555.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgIADQgHADgKAAQgMAAgLgEQgKgEgHgIQgIgIgEgLQgDgKAAgMQgBgQAGgNQAFgMALgJQAKgHANgFQANgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgBgEgIgEIgCgCIgBgDIABgDQAVgHALgFQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgBABQgZADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgUgEQgIAEgFAFQgGAHgCAJQgDAJAAAKQAAAKADAKQADAJAGAIQAGAIAHAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgHgEgGAAQgKAAgIAEg");
	this.shape_248.setTransform(722.7,551.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAEgMQAEgMAIgKQAJgJAKgFQAMgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgFAFgHAEQgNAGgNAAQgMAAgLgGgAgGgyQgGACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_249.setTransform(709,555.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_250.setTransform(676.6,551.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgHgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAEgMAIgKQAJgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAIAAAGgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgFAFgHAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_251.setTransform(667.2,555.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_252.setTransform(656.2,555.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_253.setTransform(646.5,555.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AAYA+IAAgMQABgEgDAAQgWAPgSAAQgJAAgIgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgCgEgGgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQATAAANgFQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIAAAaIAAAwQABATADAGQAEAFAFACQAGADAIAAQAEAAAHgDQAGgCAGgEQAFgGAAgMIAAgvQABgOgDgEQgCgDgHgDIgDgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAYAAALgFQAAAAABAAQAAAAABABQAAAAAAAAQAAAAABABIgBAaIAAAwQAAATABAHQACAHAGAAIALgBQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgdAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_254.setTransform(634.5,556.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_255.setTransform(614.7,555.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_256.setTransform(575.7,555.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgXA7QgMgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAIgJAMgFQALgFAMAAQANAAAKAFQALAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgLAFgNAAQgMAAgLgEgAgOgxQgHADgEAHQgFAHgCAJQgDAKAAAMQAAAJACAKQACAKAFAIQAFAIAHAFQAIAFAIAAQAJAAAHgFQAHgEAEgIQAFgKACgYQAAgIgCgKQgDgKgDgIQgGgJgHgFQgHgGgJAAQgHAAgGAEg");
	this.shape_257.setTransform(560.4,555.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgTAgQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAJgDAGgFQAHgHAAgLQAAgKgPgFQgFgDAAgGQAAgFAEgEQAEgEAHAAQAHAAAGAHQAEAEACAGQACAFAAAHQAAAHgDAHQgDAHgFAFQgFAFgGAEIgPAHQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_258.setTransform(541.8,561.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_259.setTransform(532.5,555.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_260.setTransform(522.6,551.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgkBlIgcABQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAGgBQAHgBADgFQABgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIAAgDIABgCQARgIAMgIQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABIgCAOQAAABABAAQAAABAAAAQABABAAAAQABAAABAAQAWgOARAAQALAAAKAFQAJAEAGAHQAHAIADAKQAEAKAAALQAAAQgGANQgFAMgJAJQgKAJgNAGQgPAFgNAAIgQgBQgEABgBAHIAAAgQAAAQACAEQABAEAJABIAMACQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhOQgGACgDADQgEAFAAANIAAAzQABAFACAEQABADAFAEQAJAHALAAQAJAAAIgEQAHgEAEgHQAFgGADgJQADgKAAgMQAAgJgDgJQgDgIgFgHQgEgHgIgEQgIgEgJAAQgHAAgIADg");
	this.shape_261.setTransform(511.1,559.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_262.setTransform(492,555.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAJgEAHAAQAHAAAGADQAGACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQAAAAABAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgEgDAAg");
	this.shape_263.setTransform(474.7,555.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AAgA7IgdABQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAIgBQAGgBACgCQAAgCgDgEIgPgXIgFgJIgFAIIgNAUQgFAHAAADQABACAFABIAFABIABAEQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgXgBIgWABQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBgBgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAHgBQAHgCAIgHQAGgHAUgdQAEgEgDgCIgbglQgDgGgEgDQgFgDgGgBIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQABgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAaABIAagBQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABIgBAEIgEABQgGABgBACQAAABAEAHIAOAVIACAFIARgaQAEgGAAgCQgBgCgFgBIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAWABIAWgBQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABIgBAEIgEABQgMACgDADQgIAGgVAcQgCAEAAABIADAGIAcAlQAFAIAEADQAEADAGAAIAFABQABAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABg");
	this.shape_264.setTransform(461.6,556);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAFgMQADgMAJgKQAIgJAKgFQAMgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgFAFgHAEQgMAGgOAAQgMAAgMgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_265.setTransform(449.4,555.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_266.setTransform(428,555.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgCgFQgDgGAAgGQAAgJAGgFQAEgGAPgFIAhgLQAFgCABgHIAAgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQAAAJgDACQgHAFgKAAQgFAAAAgEQAAgFAGgHQAGgGAJgGQAIgGAKgDQAJgEAHAAQAIAAAFADQAHACADAFQAEAEACAHQACAGAAAIIgCAzQgBALADAHQAEAIAHAAQAEAAAEgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgEgCgAgFAJQgPAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQADgDABgLIABgSQAAgEgDAAg");
	this.shape_267.setTransform(414.5,555.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_268.setTransform(395.5,555.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AA+BkIgjABQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAABAAIAJgBQAKgBAAgFQAAgEgEgMIgNgoQgCgFgCgCQgCgBgGAAIgsAAQgGAAgBABQgDACgBAEIgLAgQgGAUAAAFQAAAFAIABIAKABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgfgBIgdABIgCgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAKgBQAGgBAEgDQAFgDADgIIAbhDIAehPQAGgQgBgFQAIgCAGgJQADAAABACIANAoIAqB3QAGATAFAGQAEAGAKABIAIABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgCAEgAgKguIgTAyQgBAFABABQAAABAHAAIAjAAQAGAAABgBQABgCgCgGIgQgvIgFgTIAAAAg");
	this.shape_269.setTransform(381.3,551.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgKAMQgGgFAAgHQABgGAEgFQAFgEAGgBQAHABAFAEQAEAFAAAGQAAAHgEAFQgFAFgHgBQgFABgFgFg");
	this.shape_270.setTransform(360.8,560.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_271.setTransform(345.4,555.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgDgEgDAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAIAAAFADQAGACAEAFQAEAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAFAAADgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_272.setTransform(328,555.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgFAFgHAEQgNAGgNAAQgMAAgLgGgAgGgyQgGACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_273.setTransform(315.7,555.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_274.setTransform(305,555.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_275.setTransform(295.3,555.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_276.setTransform(285.5,555.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_277.setTransform(273,555.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AAhA8QgGgTgHgOIgOggIgGgPIgFAOIgQAkIgMAeIgEABIgDgBIgJgZIgchBQgFgNgDgEQgEgEgGgBIgFgCIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAbABIAagBQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgHACQgHABAAADQAAAEAFAMIATAsIAFAMIAHgOIAPgiQAEgMgCgFQgDgJgKgCIgFgCQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAXABIAcgBQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgJACgBACQgBABADAIIAXA2IAEAJIAEgJIAUgzQADgIAAgEQAAgDgFgBIgIgCQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAXABIAUgBQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgGABgDAEQgDAEgFAKQgWAygGAQIgKAbIgEABg");
	this.shape_278.setTransform(255.2,556.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAJgJALgFQAMgFALAAQAMAAAMAFQAKAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgLAFgNAAQgMAAgMgEgAgOgxQgHADgEAHQgFAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAIAAQAJAAAHgFQAHgEAEgIQAFgKACgYQAAgIgCgKQgDgKgDgIQgFgJgHgFQgJgGgHAAQgIAAgGAEg");
	this.shape_279.setTransform(237.9,555.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgIADQgGADgLAAQgMAAgLgEQgJgEgIgIQgHgIgFgLQgDgKAAgMQAAgQAFgNQAFgMAKgJQALgHANgFQANgFANAAQANAAAHADQABAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgCgEQAAgEgIgEIgCgCIgBgDIABgDQAWgHAKgFQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIgBAlIAACBQAAAVABAGQACAIAGAAQAEAAAJgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgCABQgYADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgVgEQgHAEgFAFQgFAHgDAJQgDAJAAAKQAAAKADAKQADAJAGAIQAFAIAIAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgEgEQgDgEgGgDQgHgEgHAAQgKAAgIAEg");
	this.shape_280.setTransform(223.4,551.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_281.setTransform(203.3,555.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJADALQAEAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgDAHgGAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_282.setTransform(192.2,555.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_283.setTransform(181.8,555.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AAhA8QgGgTgHgOIgOggIgGgPIgFAOIgQAkIgMAeIgEABIgDgBIgJgZIgchBQgFgNgDgEQgEgEgGgBIgFgCIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAbABIAagBQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgHACQgHABAAADQAAAEAFAMIATAsIAFAMIAHgOIAPgiQAEgMgCgFQgDgJgKgCIgFgCQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAXABIAcgBQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgJACgBACQgBABADAIIAXA2IAEAJIAEgJIAUgzQADgIAAgEQAAgDgFgBIgIgCQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAXABIAUgBQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgGABgDAEQgDAEgFAKQgWAygGAQIgKAbIgEABg");
	this.shape_284.setTransform(155,556.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_285.setTransform(881.5,509.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_286.setTransform(870.4,509.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_287.setTransform(856.5,509.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgBAAIgKAFQgOAIgIAAQgNAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgGAEAAAGQgBAJgCACQgHAFgLAAQgEAAABgEQAAgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAHAAAHADQAGACAEAFQADAEACAHQACAGAAAIIgDAzQAAALADAHQADAIAIAAQAEAAAEgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgGAJQgOAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQACgDABgLIABgSQAAgEgDAAg");
	this.shape_288.setTransform(843.1,509.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg2AAQgFAAgBABQgBABAAAGQAAAJADALQADAKAGAHQAGAIAKAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_289.setTransform(830.7,509.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_290.setTransform(811.6,509.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_291.setTransform(789.9,509.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AAABdIgaABQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgBQAIgBACgFQABgDAAgRIAAg1QAAgGgBgDQgBgDgGgEIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAjIAAA2QAAARABADQACAFAIABIAHABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgFAAgFQAAgIAFgFQAEgDAHAAQAFAAAEAEQAFAFgBAGQAAAIgEAEQgFADgFAAQgGABgFgFg");
	this.shape_292.setTransform(778.2,506.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_293.setTransform(761.8,509.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_294.setTransform(752.8,509.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AAZA+IAAgMQgBgEgCAAQgWAPgSAAQgJAAgIgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgBgEgHgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQASAAAOgFQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIgBAaIAAAwQACATADAGQAEAFAFACQAFADAJAAQAEAAAHgDQAHgCAEgEQAHgGAAgMIAAgvQgBgOgCgEQgCgDgGgDIgFgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAYAAALgFQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIgBAaIAAAwQAAATACAHQACAHAGAAIAMgBQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgeAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_295.setTransform(733.2,510.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_296.setTransform(720.2,509.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_297.setTransform(699.1,509.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_298.setTransform(678.4,509.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAJgJALgFQALgFAMAAQAMAAAMAFQAKAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgLAFgNAAQgMAAgMgEgAgPgxQgGADgEAHQgFAHgCAJQgDAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAHgEADgIQAGgKACgYQAAgIgCgKQgDgKgDgIQgGgJgGgFQgJgGgHAAQgIAAgHAEg");
	this.shape_299.setTransform(663.1,509.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAGgBQAIgBACgFQABgDABgRIAAg1QAAgGgBgDQgCgDgGgEIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBAjIAAA2QAAARADADQABAFAIABIAGABQABAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgFAAgFQAAgIAFgFQAFgDAGAAQAFAAAEAEQAFAFAAAGQgBAIgFAEQgEADgEAAQgIABgEgFg");
	this.shape_300.setTransform(652.2,506.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_301.setTransform(643.9,509.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAJgEAHAAQAHAAAGADQAGACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQAAAAABAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgEgDAAg");
	this.shape_302.setTransform(633.5,509.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_303.setTransform(622.3,509.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_304.setTransform(612.6,509.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AAABdIgaABQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAGgBQAIgBACgFQACgDAAgRIAAg1QAAgGgBgDQgCgDgGgEIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBAjIAAA2QAAARACADQACAFAIABIAGABQABAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgFAAgFQAAgIAFgFQAEgDAHAAQAFAAAEAEQAFAFgBAGQAAAIgEAEQgEADgFAAQgIABgEgFg");
	this.shape_305.setTransform(596.6,506.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgYBqIgcABQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAhAQAAgGgBgBQAAgBgFAAIgKAAQgDgBACgDIANgGQAEgDAAgDQAAgPACgMQADgOAFgMIAHgNQAFgHAGgGQAHgFAHgEQAJgDALAAQAMAAAIAFQAJAFAAAIQAAAEgEADQgDAEgEAAQgEAAgEgEQgFgGgFgDQgHgEgHAAQgHAAgFAEQgEAEgDAIQgEAKgBAPIgCAaIAAAJIABAHQAAAAABAAQAAABAAAAQABAAABAAQABAAABAAIAgAAQACACgBAFQgBADgCABIgeAAQgBAAgBAAQgBAAgBAAQAAAAAAAAQgBABAAAAIgBAHIAABAQAAAQACAFQACAEAIABIAJABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAg");
	this.shape_306.setTransform(590.3,505.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_307.setTransform(571.9,509.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgHgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAGAFQAFAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg1AAQgGAAgCABQgBABAAAGQAAAJADALQAEAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgDAHgGAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_308.setTransform(560.8,509.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_309.setTransform(550.3,509.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgDgEgDAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAIAAAFADQAGACAEAFQAEAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAEAAAEgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQACgDABgLIABgSQAAgEgDAAg");
	this.shape_310.setTransform(540,509.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AAhA8QgGgTgHgOIgOggIgGgPIgFAOIgQAkIgMAeIgEABIgDgBIgJgZIgchBQgFgMgDgFQgEgEgGgBIgFgCIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAbACIAagCQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgHACQgHABAAADQAAAEAFAMIATAsIAFAMIAHgOIAPgjQAEgLgCgFQgDgJgKgCIgFgCQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAXACIAcgCQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgJACgBACQgBABADAJIAXA1IAEAJIAEgJIAUgzQADgIAAgEQAAgDgFgBIgIgCQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAXACIAUgCQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgGABgDAEQgDAEgFAJQgWAzgGAQIgKAbIgEABg");
	this.shape_311.setTransform(523.5,510.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_312.setTransform(501.1,509.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AAABdIgaABQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAGgBQAIgBACgFQACgDAAgRIAAg1QAAgGgBgDQgCgDgGgEIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBAjIAAA2QAAARACADQACAFAIABIAGABQABAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgFAAgFQAAgIAFgFQAEgDAHAAQAFAAAEAEQAFAFgBAGQAAAIgEAEQgEADgFAAQgIABgEgFg");
	this.shape_313.setTransform(492.7,506.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AAABnIgpABQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIALgBQANgBADgHQADgGAAgYIAAiEQAAgHgCgBQgBgBgGAAIgRAAQgdAAgIAHQgHAHgGAOQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAHgUAEgZQAEgCACACQABAGAIACQAEABANAAIB3AAQAMAAAEgBQAFgBADgGQAEgCABADQgCAJgCAPIAAAVQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgBIgCgNQgCgHgEgCQgFgEgIgCQgJgBgNAAIgVAAQgGAAgCABQgBABAAAIIAACDQABAZACAFQACAHANABIAKABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEg");
	this.shape_314.setTransform(463.2,505.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AgKAMQgGgFAAgHQAAgGAGgEQAFgFAFgBQAHABAFAFQAEAEAAAGQAAAHgEAFQgFAEgHAAQgFAAgFgEg");
	this.shape_315.setTransform(442.1,514.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_316.setTransform(433.5,509.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_317.setTransform(424.5,509.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_318.setTransform(411.8,509.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgDgEgBAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgDgFQgCgGAAgGQAAgJAFgFQAGgGAOgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgFAEgBAGQgBAJgCACQgHAFgLAAQgDAAAAgEQAAgFAFgHQAFgGAJgGQAJgGAJgDQALgEAGAAQAIAAAGADQAFACAFAFQAEAEABAHQACAGAAAIIgDAzQAAALADAHQADAIAJAAQADAAAEgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQACgDABgLIABgSQAAgEgDAAg");
	this.shape_319.setTransform(398.4,509.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_320.setTransform(387.4,509.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AAZA+IAAgMQAAgEgDAAQgWAPgRAAQgLAAgGgCQgIgCgEgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgBgEgHgDIgEgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQASAAAOgFQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIgBAaIAAAwQABATAFAGQADAFAFACQAGADAIAAQAEAAAHgDQAHgCAFgEQAFgGABgMIAAgvQAAgOgDgEQgBgDgIgDIgEgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQAYAAALgFQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIgBAaIAAAwQABATABAHQACAHAGAAIALgBQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgdAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_321.setTransform(375.2,510.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_322.setTransform(356.1,505.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAIgIQAKgJALgFQAMgFALAAQAMAAAMAFQAKAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgMAFgMAAQgMAAgMgEgAgPgxQgGADgEAHQgFAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAHgEADgIQAGgKACgYQAAgIgCgKQgDgKgDgIQgFgJgHgFQgJgGgHAAQgIAAgHAEg");
	this.shape_323.setTransform(345.1,509.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgkBlIgcABQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAFgBQAIgBADgFQABgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIgBgDIACgCQARgIAMgIQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABIgCAOQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQAXgOARAAQALAAAKAFQAJAEAGAHQAHAIADAKQAEAKAAALQAAAQgGANQgEAMgLAJQgJAJgNAGQgOAFgOAAIgQgBQgFABAAAHIAAAgQABAQABAEQACAEAHABIANACQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhOQgGACgDADQgDAFgBANIAAAzQAAAFACAEQACADAFAEQAJAHALAAQAJAAAHgEQAHgEAGgHQAEgGADgJQADgKAAgMQAAgJgDgJQgDgIgEgHQgGgHgHgEQgIgEgKAAQgGAAgIADg");
	this.shape_324.setTransform(330,513.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAFgMQADgMAJgKQAIgJAKgFQAMgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgFAFgHAEQgMAGgOAAQgMAAgMgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_325.setTransform(309.4,509.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_326.setTransform(291.6,509.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAJgJAMgFQAMgFALAAQANAAALAFQALAEAIAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgNAAgLgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQACAKAFAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgFgJgGgFQgJgGgHAAQgIAAgHAEg");
	this.shape_327.setTransform(272.4,509.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_328.setTransform(260.2,509.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_329.setTransform(240.2,509.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAIAEALAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgGACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_330.setTransform(226.5,509.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgEQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAcACIAYgCQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgEAAQgHABgBADQgBABACAIIAVA3IAFAJIAFgLIARgqQAGgOAAgEQAAgEgGgBIgGgBIgCgEQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIAXACIAVgCQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEAAQgHABgFAHIgKASQgLAWgRAoIgKAZQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_331.setTransform(214,510.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_332.setTransform(201.7,509.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_333.setTransform(165.1,509.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgTAgQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAJgDAGgFQAHgIAAgKQAAgLgPgFQgFgDAAgGQAAgFAEgEQAEgEAHAAQAHAAAGAHQAEAEACAFQACAGAAAIQAAAGgDAHQgDAHgFAGQgFAFgGAEIgPAGQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_334.setTransform(909.7,469.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgCADQAAACgRAAIg1AAQgGAAgCABQAAABgBAGQABAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_335.setTransform(900.4,463.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgCgFQgDgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCABgHIAAgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQAAgFAGgHQAGgGAJgGQAIgGAKgDQAJgEAHAAQAIAAAFADQAHACADAFQAFAEABAHQACAGgBAIIgBAzQgBALADAHQAEAIAHAAQAEAAAEgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgEgCgAgFAJQgPAFgFAEQgHAFAAAJQAEASAPAAQALAAAGgIQACgDABgLIABgSQAAgEgDAAg");
	this.shape_336.setTransform(888.8,463.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgkBiQgJgDgGgGQgGgEgDgHQgCgGAAgFQAAgIADgEIAUgUQAGgFgDgCQgJgCgHgHQgGgHAAgIQAAgCAEgCQAIgEAIgIQADgEAAgDQgJgEgGgIQgDgFgCgGQgCgGAAgHQAAgJAEgIQADgJAHgGQAHgGAJgEQAJgDAKAAQANAAAOAGQAKAFAIAAIAYAAQADABgBAGQgBAEgDABIgVAAIAAAPQAAAJgCAHQgDAKgGAGQgGAIgJADQgLAFgLAAIgNgBQgOAIAAAHQAAAFAGADQAFAEAKABIAigBIAOABQAIABAFACQAHAEAEAGQAEAIAAAKQAAAMgGALQgGALgLAHQgKAHgNAFQgOAEgNAAQgNAAgKgDgAgZAhQgGAEgEAGQgFAIAAAIQAAAFADAGQACAGAFADQAFAFAIACQAHADAKgBQAIAAAJgCQAIgDAGgFQAFgEAEgFQADgHAAgGQAAgGgDgGQgCgEgEgEQgFgDgGgBIgOgCIgJAAQgUAAgFADgAgahSQgDAFgCAFQgCAHAAAIQAAAHACAHQACAGAEAFQAIAKALAAQAGAAADgDQAFgCADgEQAGgJAAgOIgCgOQgBgHgEgFQgDgGgFgCQgDgDgHAAQgLAAgHAJg");
	this.shape_337.setTransform(876,467.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_338.setTransform(865.1,459.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgCgFQgDgGAAgGQAAgJAGgFQAEgGAPgFIAhgLQAFgCABgHIAAgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQAAgFAGgHQAGgGAJgGQAIgGAKgDQAJgEAHAAQAIAAAFADQAHACADAFQAEAEACAHQACAGgBAIIgBAzQgBALADAHQAEAIAHAAQAEAAAEgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgEgCgAgFAJQgPAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQADgDABgLIABgSQAAgEgDAAg");
	this.shape_339.setTransform(856,463.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgTAgQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAJgDAGgFQAHgIAAgKQAAgLgPgFQgFgDAAgGQAAgFAEgEQAEgEAHAAQAHAAAGAHQAEAEACAFQACAGAAAIQAAAGgDAHQgDAHgFAGQgFAFgGAEIgPAGQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_340.setTransform(837.9,469.9);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_341.setTransform(820.6,463.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAIAGgBQAIgBACgFQABgDABgRIAAg0QAAgIgBgCQgCgDgGgEIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBAjIAAA2QAAARADADQABAFAIABIAGABQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgEAAgGQAAgIAFgFQAEgDAHAAQAFgBAEAFQAFAFAAAGQgBAHgFAFQgEADgEAAQgIABgEgFg");
	this.shape_342.setTransform(811.5,460.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AAZBsIAAgFIgBgJIgBAAQgLAHgHADQgHADgLAAQgMAAgLgEQgJgEgIgIQgIgIgDgLQgFgKAAgMQAAgQAGgNQAGgMAKgJQAJgHANgFQAOgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgCgEgGgEIgEgCIgBgDIABgDQAXgHAKgFQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVABAGQACAIAGAAQAEAAAJgDQAAAAABABQAAAAAAABQAAAAAAABQABABAAABQAAAEgCABQgZADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAgUgEQgIAEgGAFQgEAHgDAJQgDAJAAAKQAAAKADAKQADAJAFAIQAGAIAJAEQAIAEAKAAQAFAAAGgCQAIgDADgDQACgCAAgJIAAg8QAAgHgEgEQgDgEgGgDQgIgEgFAAQgLAAgHAEg");
	this.shape_343.setTransform(800.2,459.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_344.setTransform(779.8,463.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgDgEgBAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgDgFQgCgGAAgGQAAgJAFgFQAGgGAOgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgFAEgBAGQgBAJgCACQgHAFgLAAQgDAAAAgEQAAgFAFgHQAFgGAJgGQAJgGAJgDQAKgEAHAAQAHAAAHADQAFACAFAFQAEAEABAHQACAGAAAIIgDAzQAAALADAHQADAIAJAAQADAAAEgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQACgDABgLIABgSQAAgEgDAAg");
	this.shape_345.setTransform(769.6,463.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_346.setTransform(734.5,463.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AAZA+IAAgMQAAgEgDAAQgWAPgRAAQgLAAgGgCQgIgCgEgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgBgEgHgDIgEgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQASAAAOgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAaIAAAwQABATAFAGQADAFAFACQAFADAJAAQAEAAAHgDQAGgCAGgEQAFgGABgMIAAgvQAAgOgDgEQgBgDgIgDIgDgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAYAAALgFQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIgBAaIAAAwQABATABAHQACAHAGAAIALgBQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgdAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_347.setTransform(720.7,464.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_348.setTransform(707.8,463.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_349.setTransform(690.6,463.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgFAFgHAEQgNAGgNAAQgMAAgLgGgAgGgyQgGACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_350.setTransform(680.2,463.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_351.setTransform(670.3,459.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_352.setTransform(661.1,463.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAAAQAAgBAAAAIAHgBQAIgBACgFQABgDAAgRIAAg0QAAgIAAgCQgCgDgGgEIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgCAjIAAA2QAAARADADQABAFAIABIAGABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgEAAgGQAAgIAFgFQAFgDAGAAQAFgBAEAFQAEAFABAGQAAAHgGAFQgDADgFAAQgHABgFgFg");
	this.shape_353.setTransform(650.9,460.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_354.setTransform(633.2,463.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgDgEgDAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQAAgFAGgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAIAAAGADQAFACAEAFQAEAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAEAAAEgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_355.setTransform(622.3,463.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgkBlIgcABQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAGgBQAHgBADgFQABgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIAAgDIABgCQARgIAMgIQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABIgCAOQAAABABAAQAAABAAAAQABABAAAAQABAAABAAQAWgOARAAQALAAAKAFQAJAEAGAHQAHAIADAKQAEAKAAALQAAAQgGANQgFAMgJAJQgKAJgNAGQgPAFgNAAIgQgBQgEABgBAHIAAAgQAAAQACAEQABAEAJABIAMACQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhOQgGACgDADQgEAFAAANIAAAzQAAAFADAEQABADAFAEQAJAHALAAQAJAAAIgEQAHgEAEgHQAFgGADgJQADgKAAgMQAAgJgDgJQgDgIgFgHQgEgHgIgEQgIgEgJAAQgHAAgIADg");
	this.shape_356.setTransform(607.8,467.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_357.setTransform(589.3,459.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_358.setTransform(581.9,459.2);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_359.setTransform(554.4,463.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_360.setTransform(537.6,463.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAJgEAHAAQAHAAAGADQAGACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQAAAAABAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgEgDAAg");
	this.shape_361.setTransform(510.7,463.9);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAIAEALAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgGACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_362.setTransform(498.3,463.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgIADQgHADgKAAQgMAAgLgEQgKgEgHgIQgIgIgEgLQgDgKAAgMQgBgQAGgNQAFgMALgJQAKgHANgFQANgFANAAQANAAAHADQABAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgCgEQAAgEgIgEIgCgCIgBgDIABgDQAVgHALgFQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgCABQgYADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgVgEQgHAEgFAFQgGAHgCAJQgDAJAAAKQAAAKADAKQADAJAGAIQAGAIAHAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgHgEgGAAQgKAAgJAEg");
	this.shape_363.setTransform(477.4,459.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_364.setTransform(461.7,463.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgDgEgBAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgDgFQgCgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAJgDQAKgEAHAAQAIAAAGADQAFACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgGAEQgGAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgEgDAAg");
	this.shape_365.setTransform(448.2,463.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgkBlIgcABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAHgBQAHgBACgFQACgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIAAgDIAAgCQASgIAMgIQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIgBAOQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAQAWgOASAAQAKAAAKAFQAJAEAHAHQAGAIAEAKQADAKAAALQAAAQgGANQgFAMgJAJQgLAJgNAGQgNAFgOAAIgRgBQgDABAAAHIAAAgQAAAQABAEQABAEAJABIALACQABAAAAAAQAAABAAAAQABABAAAAQAAABgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhOQgHACgCADQgEAFABANIAAAzQAAAFACAEQABADAFAEQAJAHALAAQAJAAAIgEQAGgEAFgHQAFgGADgJQADgKAAgMQAAgJgDgJQgDgIgFgHQgEgHgIgEQgIgEgJAAQgIAAgHADg");
	this.shape_366.setTransform(426.2,467.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_367.setTransform(402.2,463.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAJgJAMgFQAMgFALAAQAMAAALAFQAMAEAIAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgLAFgNAAQgNAAgLgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQACAKAFAIQAFAIAIAFQAHAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgEgJgIgFQgIgGgHAAQgIAAgHAEg");
	this.shape_368.setTransform(372.8,463.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgTAgQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAJgDAGgFQAHgIAAgKQAAgLgPgFQgFgDAAgGQAAgFAEgEQAEgEAHAAQAHAAAGAHQAEAEACAFQACAGAAAIQAAAGgDAHQgDAHgFAGQgFAFgGAEIgPAGQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_369.setTransform(345,469.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgCADQAAACgRAAIg1AAQgGAAgCABQgBABAAAGQAAAJADALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_370.setTransform(335.7,463.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgEQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAcABIAYgBQABABAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgEAAQgHABgBADQgBABACAIIAVA3IAFAJIAFgLIARgqQAGgOAAgEQAAgFgGAAIgGgBIgCgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBIAXABIAVgBQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEAAQgHABgFAHIgKASQgLAWgRAoIgKAZQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_371.setTransform(323.1,464.2);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQADgMAJgKQAIgJAKgFQAMgGAMAAQAJAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgBABQgCABAAAGQABAJADALQADAKAHAHQAFAIAKAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgMAGgOAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAAEgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_372.setTransform(310.9,463.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgFQACgDgBgRIAAg0QAAgIgBgCQgBgDgGgEIgDgCIAAgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBAjIAAA2QAAARACADQABAFAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgEAAgGQAAgIAFgFQAFgDAGAAQAFgBAEAFQAEAFAAAGQABAHgGAFQgDADgGAAQgGABgFgFg");
	this.shape_373.setTransform(301,460.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_374.setTransform(292.1,463.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAJgEAHAAQAHAAAGADQAGACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQAAAAABAAQAAAAABABQAAAAAAABQAAABAAABQgKANgPAAQgGAAgFgCgAgGAJQgOAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgEgDAAg");
	this.shape_375.setTransform(274.4,463.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAEgMAIgKQAJgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAGgDQAGgDAHgIQAEgCABAFQgEAHgFAGQgFAFgHAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_376.setTransform(254.6,463.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AAoBqIgfABQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAFgBQAIgBAAgCQAAgDgGgGIgeglQgDgEgGAAQgEAAgBACQgBABAAAHIAAARQAAAQACAEQACAFAIABIAHABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgdgBIgdABQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIgBAlIAABlIABADIAFABQAFAAAEgDQAFgCAGgHIAKgNQALgLAAgCQAAgBgHgBIgHAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAHAAQAZAAAXgCQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABgBABQAAAAAAAAQAAABgBAAIgJACQgIACgLAGIgbAaQgEAEABADIAVAYIAcAeQAFAFAKACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_377.setTransform(241.8,459.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBAAAAIAHgBQAIgBACgFQACgDgBgRIAAg0QAAgIAAgCQgCgDgGgEIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBAjIAAA2QAAARACADQABAFAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgEAAgGQAAgIAFgFQAFgDAGAAQAFgBAEAFQAEAFABAGQAAAHgGAFQgDADgGAAQgGABgFgFg");
	this.shape_378.setTransform(230.3,460.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_379.setTransform(222.6,459.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_380.setTransform(203.6,459.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_381.setTransform(190.4,463.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AAYA+IAAgMQAAgEgCAAQgWAPgSAAQgKAAgHgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgCgEgGgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQATAAANgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAaIAAAwQABATADAGQAEAFAFACQAFADAJAAQAEAAAHgDQAGgCAFgEQAHgGgBgMIAAgvQAAgOgCgEQgCgDgGgDIgFgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAYAAALgFQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABIgCAaIAAAwQAAATACAHQACAHAGAAIAMgBQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgeAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_382.setTransform(176.6,464.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("ABPA+IgbABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgqQAAgIgBgFQgCgGgEgEQgDgEgFgCQgGgCgHAAQgIAAgHAEQgGACgEAFQgEAFAAANIAAAsQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgaABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAFgBQAIgCACgEQACgEAAgQIAAgqQAAgPgHgIQgEgEgFgCQgFgCgHAAQgIAAgHAEQgGACgEAFQgFAFAAAMIAAAtQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgdABQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAJgHAJgEQAMgEAKAAQALAAAHAEQAFAEAGAKQADAAAFgDQAKgHAJgEQAMgEAKAAQAIAAAHADQAHADAEAFQAFAFACAGQACAHAAAIIAAAyQAAAQACAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAg");
	this.shape_383.setTransform(156.9,463.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_384.setTransform(907.4,417.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_385.setTransform(899,413.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_386.setTransform(891.6,413.2);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AAABcIgaACQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAIAGgBQAIgBACgFQACgEAAgQIAAg0QAAgIgBgCQgCgDgGgEIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBAjIAAA2QAAAQACAEQACAFAIABIAGABQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgEAAgHQAAgHAFgFQAEgDAHAAQAFgBAEAFQAFAEgBAHQAAAHgEAFQgEADgFAAQgIAAgEgEg");
	this.shape_387.setTransform(884.2,414.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgkBiQgJgDgGgGQgGgEgDgHQgCgFAAgGQAAgIADgEIAUgUQAGgFgDgCQgJgCgHgHQgGgHAAgIQAAgCAEgCQAIgEAIgIQADgEAAgCQgJgFgGgJQgDgEgCgGQgCgGAAgGQAAgKAEgIQADgJAHgGQAHgGAJgEQAJgDAKAAQANAAAOAGQAKAFAIAAIAYAAQADABgBAGQgBAEgDABIgVAAIAAAPQAAAJgCAIQgDAJgGAGQgGAIgJAEQgLAEgLAAIgNgBQgOAIAAAHQAAAFAGADQAFAEAKABIAigCIAOACQAIABAFACQAHAFAEAFQAEAIAAAKQAAAMgGALQgGALgLAHQgKAIgNAEQgOAEgNAAQgNAAgKgDgAgZAiQgGADgEAGQgFAIAAAIQAAAFADAGQACAGAFAEQAFAEAIACQAHACAKAAQAIABAJgDQAIgDAGgEQAFgEAEgGQADgHAAgGQAAgHgDgFQgCgFgEgDQgFgDgGgBIgOgCIgJAAQgUAAgFAEgAgahSQgDAFgCAFQgCAHAAAIQAAAHACAHQACAGAEAFQAIAKALgBQAGAAADgCQAFgCADgFQAGgHAAgPIgCgOQgBgHgEgFQgDgGgFgCQgDgDgHAAQgLAAgHAJg");
	this.shape_388.setTransform(841.3,421.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgDAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgCgFQgDgGAAgGQAAgJAFgFQAFgGAPgFIAhgLQAFgCABgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgFADQgHAEAAAGQAAAJgDACQgHAFgKAAQgEAAgBgEQAAgFAGgHQAFgGAKgGQAIgGAKgDQAJgEAHAAQAHAAAGADQAHACADAFQAFAEABAHQACAGgBAIIgBAzQgBALADAHQAEAIAHAAQAEAAAEgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgFgCgAgFAJQgPAFgFAEQgHAFAAAJQADASAQAAQALAAAFgIQADgDABgLIABgSQAAgEgDAAg");
	this.shape_389.setTransform(818.7,417.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_390.setTransform(808.4,413.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AAABcIgbACQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgFQABgEAAgQIAAg0QAAgIgBgCQgBgDgGgEIgDgCIAAgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBAjIAAA2QAAAQABAEQACAFAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAEAEAAAHQAAAHgEAFQgFADgFAAQgGAAgFgEg");
	this.shape_391.setTransform(783.5,414.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAFgMQADgMAJgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgFAFgHAEQgMAGgOAAQgMAAgMgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_392.setTransform(773.8,417.9);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_393.setTransform(759.9,413.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQADgMAIgKQAJgJAKgFQAMgGAMAAQAJAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgBABQgCABAAAGQABAJADALQADAKAHAHQAFAIAKAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgFAFgHAEQgMAGgOAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAAEgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_394.setTransform(729.8,417.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_395.setTransform(718.8,417.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AAZA+IAAgMQgBgEgCAAQgWAPgSAAQgJAAgIgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgCgEgGgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQATAAANgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAaIAAAwQABATADAGQAEAFAFACQAFADAJAAQAEAAAHgDQAGgCAFgEQAHgGAAgMIAAgvQgBgOgCgEQgCgDgGgDIgFgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAYAAALgFQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABIgCAaIAAAwQAAATACAHQACAHAGAAIAMgBQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgeAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_396.setTransform(706.7,418.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AAZBsIAAgFIgBgJIgBAAQgLAHgIADQgGADgLAAQgMAAgLgEQgKgEgHgIQgHgIgEgLQgFgKAAgMQABgQAFgNQAGgMAJgJQAKgHANgFQAOgFANAAQANAAAHADQABAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgCgEQgBgEgGgEIgEgCIgBgDIABgDQAWgHALgFQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVABAGQACAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQABABAAABQAAAEgDABQgXADgQAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAgVgEQgHAEgGAFQgEAHgDAJQgDAJAAAKQAAAKADAKQADAJAFAIQAHAIAIAEQAIAEAKAAQAFAAAGgCQAIgDADgDQACgCAAgJIAAg8QAAgHgEgEQgDgEgGgDQgIgEgGAAQgJAAgJAEg");
	this.shape_397.setTransform(683.9,413.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgDgEgDAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAIAAAFADQAGACAEAFQAEAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAEAAAEgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQACgDABgLIABgSQAAgEgDAAg");
	this.shape_398.setTransform(654.7,417.9);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgHgJQgHgIgDgLQgDgJAAgLQAAgMAEgMQAEgMAIgKQAJgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgCABQAAABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgEAHgFAGQgFAFgHAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_399.setTransform(624.9,417.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgIAAQgNAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgGAEAAAGQgBAJgCACQgHAFgLAAQgEAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAHAAAHADQAGACAEAFQADAEACAHQACAGAAAIIgDAzQAAALADAHQADAIAIAAQAEAAAEgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgGAJQgOAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQACgDABgLIABgSQAAgEgDAAg");
	this.shape_400.setTransform(604.1,417.9);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AAhA8QgGgSgHgPIgOghIgGgOIgFAOIgQAjIgMAfIgEACIgDgCIgJgZIgchBQgFgMgDgFQgEgEgGgBIgFgCIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAbABIAagBQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgHACQgHABAAADQAAAEAFALIATAsIAFAOIAHgPIAPgjQAEgLgCgGQgDgIgKgCIgFgCQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAXABIAcgBQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgJABgBADQgBABADAJIAXA2IAEAIIAEgIIAUg0QADgIAAgEQAAgEgFAAIgIgCQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAXABIAUgBQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgGABgDAEQgDADgFAKQgWAzgGAQIgKAbIgEACg");
	this.shape_401.setTransform(587.7,418.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AAZA+IAAgMQgBgEgCAAQgWAPgSAAQgJAAgIgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgBgEgHgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQASAAAOgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAaIAAAwQACATADAGQAEAFAFACQAFADAJAAQAEAAAHgDQAHgCAEgEQAHgGAAgMIAAgvQgBgOgCgEQgCgDgGgDIgFgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAYAAALgFQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgBAaIAAAwQAAATACAHQACAHAGAAIAMgBQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgeAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_402.setTransform(505.5,418.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_403.setTransform(492.5,417.9);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_404.setTransform(475.4,417.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_405.setTransform(466.9,413.2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgHgJQgHgIgDgLQgDgJAAgLQAAgMAEgMQAEgMAIgKQAJgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgCABQAAABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAIAAAGgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgFAFgHAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_406.setTransform(457.5,417.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_407.setTransform(446.5,417.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_408.setTransform(436.8,417.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AAYA+IAAgMQABgEgDAAQgWAPgSAAQgJAAgIgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgCgEgGgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQATAAANgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAaIAAAwQABATADAGQAEAFAFACQAGADAIAAQAEAAAHgDQAGgCAGgEQAFgGAAgMIAAgvQABgOgDgEQgBgDgIgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAYAAALgFQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAaIAAAwQAAATABAHQACAHAGAAIALgBQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgdAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_409.setTransform(424.8,418.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_410.setTransform(373.2,417.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AAABcIgaACQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAIAGgBQAIgBACgFQACgEAAgQIAAg0QAAgIgCgCQgBgDgGgEIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAjIAAA2QgBAQACAEQACAFAIABIAGABQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgEAAgHQAAgHAFgFQAEgDAHAAQAFgBAEAFQAFAEgBAHQAAAHgEAFQgFADgEAAQgIAAgEgEg");
	this.shape_411.setTransform(364.8,414.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_412.setTransform(353,413.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAKgJALgFQAMgFALAAQANAAALAFQALAEAIAJQAJAIAEALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgMAAgMgEgAgPgxQgGADgEAHQgFAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgFgJgGgFQgIgGgIAAQgIAAgHAEg");
	this.shape_413.setTransform(321.3,417.9);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AAZBsIAAgFIgBgJIgBAAQgLAHgIADQgGADgLAAQgMAAgLgEQgKgEgHgIQgHgIgEgLQgFgKAAgMQABgQAFgNQAGgMAJgJQAKgHANgFQAOgFANAAQANAAAHADQABAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgCgEQgBgEgGgEIgEgCIgBgDIABgDQAXgHAKgFQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVABAGQACAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQABABAAABQAAAEgDABQgXADgQAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAgVgEQgHAEgGAFQgEAHgDAJQgDAJAAAKQAAAKADAKQADAJAFAIQAHAIAIAEQAIAEAKAAQAFAAAGgCQAIgDADgDQACgCAAgJIAAg8QAAgHgEgEQgDgEgGgDQgIgEgGAAQgJAAgJAEg");
	this.shape_414.setTransform(306.8,413.5);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgXA7QgMgFgIgIQgJgIgFgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAJgJALgFQALgFAMAAQANAAAKAFQALAEAJAJQAJAIAEALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgMAFgMAAQgMAAgLgEgAgOgxQgHADgEAHQgFAHgCAJQgDAKAAAMQAAAJACAKQACAKAFAIQAFAIAIAFQAHAFAIAAQAJAAAHgFQAGgEAFgIQAFgKACgYQAAgIgCgKQgCgKgEgIQgGgJgHgFQgHgGgJAAQgHAAgGAEg");
	this.shape_415.setTransform(284,417.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AAABnIgpABQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIALgBQANgBADgHQADgGAAgYIAAiEQAAgHgCgBQgBgBgGAAIgQAAQgeAAgHAHQgIAHgGAOQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAHgUAEgZQAEgCACACQABAGAHACQAEABAOAAIB3AAQAMAAAEgBQAFgBADgGQADgCACADQgCAJgCAPIgBAVQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgFgBIgCgNQgCgHgDgCQgFgEgIgCQgJgBgMAAIgWAAQgHAAgBABQgBABAAAIIAACDQABAZACAFQACAHANABIAKABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgCAEg");
	this.shape_416.setTransform(266.8,413.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AgKAMQgGgEABgIQAAgGAEgEQAFgGAGAAQAHAAAFAGQAEAEAAAGQAAAIgEAEQgFAEgHABQgFgBgFgEg");
	this.shape_417.setTransform(245.7,422.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg2AAQgFAAgBABQgBABAAAGQAAAJADALQADAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_418.setTransform(236.3,417.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AAABcIgaACQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgFQABgEAAgQIAAg0QAAgIgBgCQgBgDgGgEIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAjIAAA2QAAAQABAEQACAFAIABIAHABQAAAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgEAAgHQAAgHAFgFQAEgDAHAAQAFgBAEAFQAFAEgBAHQAAAHgEAFQgFADgFAAQgGAAgFgEg");
	this.shape_419.setTransform(213.5,414.6);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_420.setTransform(205.8,413.2);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("Ag5BdQgDgEAAgFQAAgGADgEQAEgCAFAAIAGAAQAGAAAEgGQALgSAGgPQADgIAAgFQAAgGgFgOIgYg/IgGgQQgEgGgHgBIgIgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAdABIAagBQAAAAAAAAQABAAAAABQAAAAAAABQAAAAABABQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAIgHACQgHABAAADQAAADAJAZIAKAbIAGAWQACgCAJgVIALgXQAKgZAAgFQAAgEgHgBIgJgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAbABIAWgBQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgFABQgHABgGAIQgEAGgJARIgQAiIgwBnQgDAIgGAEQgEACgGAAQgGAAgEgDg");
	this.shape_421.setTransform(188.3,421.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAFgMQADgMAJgKQAIgJAKgFQAMgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgFAFgHAEQgMAGgOAAQgMAAgMgGgAgFgyQgGACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_422.setTransform(175.8,417.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_423.setTransform(161.9,413.2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_424.setTransform(922.4,367.2);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_425.setTransform(909.1,371.9);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AAABcIgbABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgEQACgEgBgRIAAg0QAAgIgBgCQgBgEgGgDIgCgCIgBgDIABgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgBAkIAAA2QAAARACAEQABAEAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAEAEABAHQAAAHgGAFQgDADgGABQgGgBgFgEg");
	this.shape_426.setTransform(899,368.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_427.setTransform(887.2,367.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_428.setTransform(844.5,371.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_429.setTransform(805.6,371.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgDgEgBAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgDgFQgCgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAJgEAHAAQAIAAAGADQAFACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQADAAAEgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgGAEQgGAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAg");
	this.shape_430.setTransform(784.8,371.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AAhA8QgGgSgHgPIgOghIgGgOIgFAOIgQAjIgMAfIgEACIgDgCIgJgYIgchDQgFgLgDgFQgEgEgGgBIgFgBIgBgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAbABIAagBQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgHABQgHABAAADQAAAEAFALIATAsIAFAOIAHgPIAPgjQAEgLgCgGQgDgIgKgCIgFgBQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAXABIAcgBQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgGABQgJACgBABQgBADADAIIAXA2IAEAIIAEgIIAUgzQADgJAAgFQAAgCgFgBIgIgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAXABIAUgBQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgGABQgGABgDAEQgDADgFAKQgWAzgGAQIgKAbIgEACg");
	this.shape_431.setTransform(768.4,372.2);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgCADQAAACgRAAIg1AAQgGAAgCABQAAABgBAGQABAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_432.setTransform(745.2,371.9);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_433.setTransform(731.3,367.2);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_434.setTransform(699.1,371.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgIAAQgNAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAHAAAHADQAFACAEAFQAEAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAEAAAEgCIAEgCQABAAAAAAQAAAAAAABQABAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_435.setTransform(685.7,371.9);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_436.setTransform(663.5,367.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_437.setTransform(654.2,371.9);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AgkBlIgcABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAGgBQAJgBABgFQACgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIgBgDIABgCQASgIAMgIQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIgBAOQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAQAWgOASAAQAKAAAKAFQAJAEAHAHQAGAIAEAKQADAKAAALQAAAQgFANQgGAMgJAJQgLAJgNAGQgOAFgNAAIgRgBQgDABAAAHIAAAgQgBAQACAEQACAEAHABIAMACQABAAAAAAQAAABAAAAQABABAAAAQAAABgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhOQgHACgCADQgEAFABANIAAAzQAAAFACAEQABADAFAEQAJAHALAAQAJAAAIgEQAHgEAEgHQAFgGADgJQADgKAAgMQAAgJgDgJQgDgIgFgHQgEgHgIgEQgIgEgJAAQgIAAgHADg");
	this.shape_438.setTransform(632.4,375.3);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_439.setTransform(621.4,367.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_440.setTransform(598.1,367.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_441.setTransform(578.6,371.1);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgIAAQgNAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAHAAAHADQAFACAEAFQAEAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAEAAAEgCIAEgCQABAAAAAAQAAAAAAABQABAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_442.setTransform(568.2,371.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_443.setTransform(553.8,367.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_444.setTransform(541.8,371.1);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_445.setTransform(524.5,371.9);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_446.setTransform(516.1,367.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgBAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgGAEAAAGQgBAJgCACQgHAFgLAAQgEAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAHAAAHADQAGACAEAFQADAEACAHQACAGAAAIIgDAzQAAALADAHQADAIAJAAQADAAAEgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgGAJQgOAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_447.setTransform(506.9,371.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AAABcIgaABQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAIAGgBQAIgBACgEQABgEABgRIAAg0QAAgIgBgCQgCgEgGgDIgCgCIgCgDIACgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBAkIAAA2QAAARACAEQACAEAIABIAGABQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhCQgEgEAAgHQAAgHAFgFQAEgDAHAAQAFgBAEAFQAFAEAAAHQgBAHgEAFQgFADgEABQgIgBgEgEg");
	this.shape_448.setTransform(473,368.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_449.setTransform(461.2,371.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCgBgHIABgOQAAgKgEgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAJgGQAJgGAJgDQAKgEAHAAQAIAAAGADQAFACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgGAEQgGAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAg");
	this.shape_450.setTransform(447.8,371.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AgkBiQgJgDgGgFQgGgFgDgHQgCgFAAgHQAAgHADgEIAUgUQAGgFgDgCQgJgCgHgHQgGgHAAgIQAAgCAEgCQAIgDAIgKQADgDAAgCQgJgFgGgJQgDgEgCgGQgCgGAAgGQAAgKAEgIQADgJAHgGQAHgGAJgEQAJgDAKAAQANAAAOAGQAKAFAIAAIAYAAQADABgBAGQgBAFgDAAIgVAAIAAAPQAAAJgCAIQgDAIgGAHQgGAHgJAFQgLAEgLAAIgNgBQgOAIAAAHQAAAGAGACQAFAEAKAAIAigBIAOABQAIACAFADQAHAEAEAFQAEAIAAALQAAALgGALQgGAKgLAIQgKAIgNAEQgOAEgNAAQgNAAgKgDgAgZAiQgGADgEAHQgFAGAAAJQAAAGADAFQACAGAFAEQAFAEAIACQAHACAKABQAIAAAJgDQAIgDAGgEQAFgFAEgFQADgHAAgGQAAgHgDgEQgCgFgEgEQgFgDgGgBIgOgCIgJAAQgUAAgFAEgAgahSQgDAFgCAGQgCAGAAAHQAAAIACAHQACAGAEAFQAIAJALAAQAGAAADgCQAFgCADgFQAGgHAAgOIgCgPQgBgHgEgFQgDgFgFgDQgDgDgHAAQgLAAgHAJg");
	this.shape_451.setTransform(427.4,375.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_452.setTransform(412.5,371.6);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AAABcIgbABQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgEQACgEgBgRIAAg0QAAgIAAgCQgCgEgGgDIgCgCIgBgDIABgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgBAkIAAA2QAAARACAEQABAEAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAEAEABAHQAAAHgGAFQgDADgGABQgGgBgFgEg");
	this.shape_453.setTransform(400.8,368.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgHADQgIADgKAAQgMAAgLgEQgKgEgHgIQgIgIgEgLQgDgKAAgMQgBgQAGgNQAFgMALgJQAJgHANgFQAOgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgBgEgIgEIgCgCIgBgDIABgDQAVgHALgFQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQAEAAAJgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgBABQgZADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgUgEQgIAEgGAFQgFAHgCAJQgDAJAAAKQAAAKADAKQADAJAGAIQAGAIAHAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgIgEgFAAQgLAAgHAEg");
	this.shape_454.setTransform(389.6,367.5);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_455.setTransform(375.9,371.9);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgCABQgBABAAAGQABAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_456.setTransform(364,371.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AglACQAAgDADgDIBDgGQAFADAAAGQAAADgCADIhEAGQgFgDAAgGg");
	this.shape_457.setTransform(344.3,371.6);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQADgMAIgKQAJgJAKgFQAMgGAMAAQAJAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgBABQgCABAAAGQABAJADALQADAKAHAHQAFAIAKAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgMAGgOAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAAEgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_458.setTransform(323.9,371.9);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_459.setTransform(313.5,371.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_460.setTransform(304.9,367.2);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AAABcIgaABQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAIAGgBQAIgBACgEQABgEABgRIAAg0QAAgIgBgCQgCgEgGgDIgCgCIgCgDIACgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBAkIAAA2QAAARACAEQACAEAIABIAGABQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhCQgEgEAAgHQAAgHAFgFQAEgDAHAAQAFgBAEAFQAFAEAAAHQgBAHgEAFQgFADgEABQgIgBgEgEg");
	this.shape_461.setTransform(297.5,368.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgFAFgHAEQgNAGgNAAQgMAAgLgGgAgGgyQgGACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_462.setTransform(271.6,371.9);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgHAAQgOAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAFgGAPgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgKAAQgEAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAKgEAGAAQAHAAAGADQAHACADAFQAEAEACAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQAAAAABAAQAAAAABABQAAAAAAABQAAABAAABQgKANgPAAQgGAAgFgCgAgFAJQgPAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQADgDABgLIABgSQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAg");
	this.shape_463.setTransform(250,371.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_464.setTransform(231,371.9);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AAABqIgcABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAHgBQAIgBACgFQABgEAAgQIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHAJgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAACMQAAAQACAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_465.setTransform(222.5,367.2);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAFgMQADgMAJgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgFAFgHAEQgMAGgOAAQgMAAgMgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_466.setTransform(213.1,371.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_467.setTransform(202.1,371.9);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AgVA9QgHgDgGgEQgFgLABgTIAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAEAOAHAIQAFAEAEADQAGACAFAAQAIAAAFgEQAGgGAAgJQAAgJgHgIQgFgEgJgHQgPgHgGgGQgJgKAAgLQAAgIADgHQADgGAGgFQAGgEAHgCQAHgDAHAAQAUAAAGAGQAFALAAANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgKgGgGQgHgGgJAAQgHAAgFAFQgGAFAAAIQAAAIAIAHIAOAKQAOAJAHAFQAEAFADAGQACAGAAAIQAAAIgEAHQgDAGgGAEQgGAFgIACQgIACgGAAQgLAAgIgCg");
	this.shape_468.setTransform(192.4,371.9);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AAZA+IAAgMQAAgEgDAAQgWAPgRAAQgLAAgGgCQgIgCgEgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgBgEgHgDIgEgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQASAAAOgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBAaIAAAwQABATAFAGQADAFAFACQAGADAIAAQAEAAAHgDQAHgCAEgEQAGgGABgMIAAgvQAAgOgDgEQgBgDgIgDIgEgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAYAAALgFQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIgBAaIAAAwQABATABAHQACAHAGAAIALgBQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgdAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_469.setTransform(180.4,372.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AgHBkQgDgLgKgUIgOgdIgbg5IgTgqIAAAAIgDA1QgCApAAAbQAAARACAFQACAGAJAAIALABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIghgBIgfABIgBgEQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIAGgBQAKgBAEgEQAEgEABgPIAFhCIADhBQABgPgEgEQgDgFgOgDIgFAAIAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAXABIAZgBQgBAJAFAOQAEAKAIARIAiBDIATApIAAAAIAXgtIAdg3IAQghQAGgPAAgKIAXABIAbgBIABAFIgBADIgGAAQgOACgEAGQgEAFAAAQQACBVACAsQABAOABADQADAGAJABIAKABIABAEQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgkgBIgkABQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAJgBQAKgBADgFQACgEAAgPIgBh7IgBAAIgTAmIgbAzQgbA2gDAPIgDABg");
	this.shape_470.setTransform(158.4,368.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AgKAMQgGgEABgIQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAIgEAEQgFAFgHgBQgFABgFgFg");
	this.shape_471.setTransform(842.4,606.6);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AgfB9QALgMAIgNQAJgOAEgPQAGgQADgSQADgSAAgTQAAgTgDgRQgDgSgGgQQgEgPgJgNQgIgOgLgMQgBgEAFgBQAOAKALANQAJAOAIAQQAJARAEAUQAEATAAAUQAAAUgEAUQgEATgJARQgIARgJAOQgLAOgOAIQgFAAABgEg");
	this.shape_472.setTransform(832.9,599.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AgKBeQgFgEAAgIQAAgIAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAIQAAAIgEAEQgFAFgHgBQgGABgEgFgAgDAhIgIhfIgCgbQAAgFADgBQADgDAHAAQAHAAADADQAEABAAAFIgCAbIgJBfIgDABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_473.setTransform(825.7,598.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAEgMAJgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgCADQAAACgRAAIg1AAQgGAAgCABQgBABABAGQgBAJADALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_474.setTransform(806.8,601.9);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AgkBiQgJgDgGgFQgGgGgDgGQgCgGAAgFQAAgIADgDIAUgVQAGgFgDgCQgJgCgHgHQgGgHAAgIQAAgCAEgCQAIgEAIgJQADgDAAgDQgJgEgGgIQgDgFgCgFQgCgHAAgHQAAgJAEgJQADgIAHgGQAHgGAJgDQAJgEAKAAQANAAAOAGQAKAFAIAAIAYAAQADABgBAFQgBAGgDAAIgVAAIAAAQQAAAIgCAHQgDAJgGAHQgGAHgJAEQgLAFgLAAIgNAAQgOAHAAAHQAAAGAGADQAFAEAKgBIAiAAIAOAAQAIACAFACQAHAFAEAGQAEAHAAALQAAALgGALQgGAKgLAIQgKAIgNAEQgOAEgNAAQgNAAgKgDgAgZAhQgGAEgEAGQgFAIAAAHQAAAGADAGQACAFAFAEQAFAFAIACQAHACAKAAQAIAAAJgDQAIgCAGgFQAFgDAEgHQADgFAAgHQAAgGgDgFQgCgGgEgCQgFgEgGgCIgOgBIgJAAQgUAAgFADgAgahSQgDAEgCAGQgCAHAAAHQAAAIACAHQACAGAEAFQAIAKALAAQAGgBADgCQAFgCADgEQAGgJAAgOIgCgOQgBgHgEgFQgDgFgFgDQgDgDgHAAQgLAAgHAJg");
	this.shape_475.setTransform(794.5,605.8);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AgXA7QgMgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAIgJAMgFQALgFAMAAQANAAAKAFQALAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgLAFgNAAQgMAAgLgEgAgOgxQgHADgEAHQgFAHgCAJQgDAKAAAMQAAAJACAKQADAKAEAIQAFAIAHAFQAIAFAIAAQAJAAAHgFQAHgEAEgIQAFgKACgYQAAgIgCgKQgCgKgEgIQgGgJgHgFQgHgGgJAAQgHAAgGAEg");
	this.shape_476.setTransform(764.3,601.9);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AAZA+IAAgMQAAgEgDAAQgWAPgRAAQgLAAgGgCQgIgCgEgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgBgEgHgDIgEgBQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQASAAAOgFQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIgBAaIAAAwQABATAFAGQADAFAFACQAGADAIAAQAEAAAHgDQAGgCAGgEQAFgGABgMIAAgvQAAgOgDgEQgBgDgIgDIgDgBQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAYAAALgFQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIAAAaIAAAwQAAATABAHQACAHAGAAIALgBQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgdAGgKAFQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_477.setTransform(679.8,602.1);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgIAAQgNAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgGAEAAAGQgBAJgCACQgHAFgLAAQgEAAAAgEQABgFAFgHQAFgGAJgGQAJgGAJgDQALgEAGAAQAHAAAHADQAGACAEAFQADAEACAHQACAGAAAIIgDAzQAAALADAHQADAIAIAAQAEAAAEgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgGAJQgOAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_478.setTransform(610,601.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AgkBiQgJgDgGgFQgGgGgDgGQgCgGAAgFQAAgIADgDIAUgVQAGgFgDgCQgJgCgHgHQgGgHAAgIQAAgCAEgCQAIgEAIgJQADgDAAgDQgJgEgGgIQgDgFgCgFQgCgHAAgHQAAgJAEgJQADgIAHgGQAHgGAJgDQAJgEAKAAQANAAAOAGQAKAFAIAAIAYAAQADABgBAFQgBAGgDAAIgVAAIAAAQQAAAIgCAHQgDAJgGAHQgGAHgJAEQgLAFgLAAIgNAAQgOAHAAAHQAAAGAGADQAFAEAKgBIAiAAIAOAAQAIACAFACQAHAFAEAGQAEAHAAALQAAALgGALQgGAKgLAIQgKAIgNAEQgOAEgNAAQgNAAgKgDgAgZAhQgGAEgEAGQgFAIAAAHQAAAGADAGQACAFAFAEQAFAFAIACQAHACAKAAQAIAAAJgDQAIgCAGgFQAFgDAEgHQADgFAAgHQAAgGgDgFQgCgGgEgCQgFgEgGgCIgOgBIgJAAQgUAAgFADgAgahSQgDAEgCAGQgCAHAAAHQAAAIACAHQACAGAEAFQAIAKALAAQAGgBADgCQAFgCADgEQAGgJAAgOIgCgOQgBgHgEgFQgDgFgFgDQgDgDgHAAQgLAAgHAJg");
	this.shape_479.setTransform(589.6,605.8);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgBQAIgBACgFQABgDAAgRIAAg1QAAgGgBgDQgBgEgGgDIgDgCIAAgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgBAkIAAA2QAAARABADQACAFAIABIAHABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgFAAgFQAAgIAFgEQAFgFAGAAQAFABAEAEQAEAEAAAHQAAAIgEADQgFAEgFABQgGAAgFgFg");
	this.shape_480.setTransform(563,598.6);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgFQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAcABIAYgBQABAAAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgEABQgHABgBACQgBABACAIIAVA3IAFAJIAFgLIARgqQAGgOAAgFQAAgDgGgBIgGgBIgCgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAIAXABIAVgBQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEABQgHAAgFAHIgKASQgLAVgRAqIgKAYQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_481.setTransform(552.6,602.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AAABdIgaABQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAGgBQAIgBACgFQACgDAAgRIAAg1QAAgGgBgDQgCgEgGgDIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBAkIAAA2QAAARACADQACAFAIABIAGABQABAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgFAAgFQAAgIAFgEQAEgFAHAAQAFABAEAEQAFAEgBAHQAAAIgEADQgEAEgFABQgIAAgEgFg");
	this.shape_482.setTransform(474.7,598.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AADBrQgJgOgIgRQgJgRgEgTQgEgUAAgUQAAgUAEgTQAEgUAJgRQAIgQAJgOQAMgNAOgKQADABAAAEQgLAMgIAOQgJANgEAPQgFAQgEASQgDARAAATQAAATADASQAEASAFAQQAEAPAJAOQAIANALAMQAAAEgDAAQgOgIgMgOg");
	this.shape_483.setTransform(397.9,599.8);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AAYA+IAAgMQABgEgDAAQgWAPgSAAQgJAAgIgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgCgEgGgDIgDgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQATAAANgFQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIAAAaIAAAwQABATADAGQAEAFAFACQAGADAIAAQAEAAAHgDQAGgCAGgEQAFgGAAgMIAAgvQABgOgDgEQgBgDgIgDIgDgBQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAYAAALgFQAAAAABAAQAAAAABABQAAAAAAAAQAAAAABABIgBAaIAAAwQAAATABAHQACAHAGAAIALgBQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgdAGgKAFQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_484.setTransform(355.9,602.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgBQAIgBACgFQACgDgBgRIAAg1QAAgGgBgDQgBgEgGgDIgDgCIAAgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgBAkIAAA2QAAARACADQABAFAIABIAHABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgFAAgFQAAgIAFgEQAFgFAGAAQAFABAEAEQAEAEAAAHQABAIgGADQgDAEgGABQgGAAgFgFg");
	this.shape_485.setTransform(324.9,598.6);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAKgEAGAAQAHAAAGADQAGACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQAAAAABAAQAAAAABABQAAAAAAABQAAABAAABQgKANgPAAQgGAAgFgCgAgGAJQgOAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_486.setTransform(300.5,601.9);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgCADQAAACgRAAIg1AAQgGAAgCABQAAABAAAGQgBAJADALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_487.setTransform(263.2,601.9);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgBQAIgBACgFQABgDAAgRIAAg1QAAgGgBgDQgBgEgGgDIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgBAkIAAA2QAAARACADQABAFAIABIAHABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgFAAgFQAAgIAFgEQAFgFAGAAQAFABAEAEQAEAEAAAHQAAAIgEADQgFAEgFABQgGAAgFgFg");
	this.shape_488.setTransform(189.5,598.6);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgFQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAcABIAYgBQABAAAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgEABQgHABgBACQgBABACAIIAVA3IAFAJIAFgLIARgqQAGgOAAgFQAAgDgGgBIgGgBIgCgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAIAXABIAVgBQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEABQgHAAgFAHIgKASQgLAVgRAqIgKAYQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_489.setTransform(179.1,602.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_490.setTransform(164.8,601.6);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQADgMAIgKQAJgJAKgFQAMgGAMAAQAJAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgBABQgCABAAAGQABAJADALQADAKAHAHQAFAIAKAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgEAHgFAGQgFAFgHAEQgMAGgOAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAAEgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_491.setTransform(831.5,555.9);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AglACQAAgDACgDIBEgGQAFADAAAGQAAADgDADIhDAGQgFgDAAgGg");
	this.shape_492.setTransform(811.3,555.6);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AgkBiQgJgDgGgGQgGgFgDgGQgCgGAAgFQAAgIADgDIAUgVQAGgFgDgCQgJgCgHgHQgGgHAAgIQAAgBAEgDQAIgDAIgJQADgEAAgDQgJgEgGgIQgDgFgCgFQgCgHAAgHQAAgJAEgJQADgIAHgGQAHgGAJgDQAJgEAKAAQANAAAOAGQAKAFAIAAIAYAAQADABgBAFQgBAFgDABIgVAAIAAAPQAAAJgCAHQgDAKgGAGQgGAIgJADQgLAFgLAAIgNAAQgOAHAAAHQAAAFAGADQAFAFAKAAIAigBIAOABQAIABAFACQAHAFAEAFQAEAIAAAKQAAANgGAKQgGALgLAHQgKAHgNAFQgOAEgNAAQgNAAgKgDgAgZAhQgGAEgEAGQgFAHAAAIQAAAGADAGQACAFAFAEQAFAFAIACQAHACAKAAQAIAAAJgDQAIgCAGgFQAFgDAEgHQADgFAAgHQAAgGgDgGQgCgEgEgDQgFgEgGgBIgOgCIgJAAQgUAAgFADgAgahSQgDAFgCAFQgCAHAAAIQAAAHACAHQACAGAEAFQAIAKALAAQAGgBADgCQAFgCADgEQAGgJAAgOIgCgOQgBgHgEgFQgDgGgFgCQgDgDgHAAQgLAAgHAJg");
	this.shape_493.setTransform(800.4,559.8);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAJgJAMgFQAMgFALAAQAMAAALAFQAMAEAIAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgLAFgNAAQgNAAgLgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQACAKAFAIQAFAIAIAFQAHAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgEgJgHgFQgJgGgHAAQgIAAgHAEg");
	this.shape_494.setTransform(770.2,555.9);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAEgMAJgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgCADQAAACgRAAIg1AAQgGAAgCABQgBABABAGQgBAJADALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_495.setTransform(734.8,555.9);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AAYA+IAAgMQABgEgDAAQgWAPgSAAQgJAAgIgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgCgEgGgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQATAAANgFQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIAAAaIAAAwQABATADAGQAEAFAFACQAGADAIAAQAEAAAHgDQAGgCAGgEQAFgGAAgMIAAgvQABgOgDgEQgCgDgHgDIgDgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAYAAALgFQAAAAABAAQAAAAABABQAAAAAAAAQAAAAABABIgBAaIAAAwQAAATABAHQACAHAGAAIAMgBQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgeAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_496.setTransform(711.4,556.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgIADQgHADgKAAQgMAAgLgEQgKgEgHgIQgIgIgEgLQgDgKAAgMQgBgQAGgNQAFgMALgJQAKgHANgFQANgFANAAQANAAAHADQABAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgCgEQAAgEgIgEIgCgCIgBgDIABgDQAVgHALgFQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgCABQgYADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgVgEQgHAEgFAFQgGAHgCAJQgDAJAAAKQAAAKADAKQADAJAGAIQAGAIAHAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgHgEgGAAQgKAAgJAEg");
	this.shape_497.setTransform(696.1,551.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AAZBsIAAgFIgBgJIgBAAQgLAHgHADQgHADgLAAQgMAAgLgEQgJgEgIgIQgHgIgEgLQgFgKAAgMQABgQAFgNQAGgMAKgJQAJgHANgFQAOgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgCgEgGgEIgEgCIgBgDIABgDQAXgHAKgFQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIgBAlIAACBQAAAVABAGQACAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQABABAAABQAAAEgCABQgYADgQAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAgUgEQgIAEgGAFQgEAHgDAJQgDAJAAAKQAAAKADAKQADAJAFAIQAHAIAIAEQAIAEAKAAQAFAAAGgCQAIgDADgDQACgCAAgJIAAg8QAAgHgEgEQgDgEgGgDQgIgEgFAAQgLAAgHAEg");
	this.shape_498.setTransform(645.8,551.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_499.setTransform(630,555.6);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_500.setTransform(561.2,555.6);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgCgFQgDgGAAgGQAAgJAGgFQAEgGAPgFIAhgLQAFgCABgHIAAgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQAAgFAGgHQAGgGAJgGQAIgGAKgDQAJgEAHAAQAHAAAGADQAHACADAFQAEAEACAHQACAGgBAIIgBAzQgBALADAHQAEAIAHAAQAEAAAEgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgEgCgAgFAJQgPAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQADgDABgLIABgSQAAgEgDAAg");
	this.shape_501.setTransform(547.7,555.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AgcBpIgMgEQgDAAgEAFIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAgBgBIABgZIAAiNQAAgOgCgEQgBgDgHgEIgCgCIgCgDIACgDIAggNQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIgBAlIAAA5QAAAGADAAQAHgEAIgCQAJgEAIAAQANAAALAFQAKAEAIAHQAIAHAEALQAEALAAAMQAAAPgFANQgFAMgKAJQgJAJgMAFQgNAFgNAAQgNAAgNgEgAgYAAQgEADAAAOIAAAvQAAAIACAHQACAGADAFQAEAFAGACQAGADAFAAQALAAAHgEQAIgEAEgHQAFgHACgJQADgJAAgKQAAgLgDgKQgDgLgGgHQgGgHgIgEQgJgDgJAAQgNAAgHADg");
	this.shape_502.setTransform(533.4,551.3);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AAYA+IAAgMQABgEgDAAQgWAPgSAAQgKAAgHgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgCgEgGgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQATAAANgFQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIAAAaIAAAwQABATADAGQAEAFAFACQAGADAIAAQAEAAAHgDQAGgCAFgEQAHgGgBgMIAAgvQABgOgDgEQgCgDgGgDIgFgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAYAAALgFQABAAAAAAQAAAAABABQAAAAAAAAQAAAAABABIgBAaIAAAwQAAATABAHQACAHAGAAIAMgBQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgeAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_503.setTransform(508.8,556.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgBQAIgBACgFQACgDgBgRIAAg1QAAgGAAgDQgCgEgGgDIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBAjIAAA2QAAARACADQABAFAIABIAHABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgFAAgFQAAgIAFgFQAFgEAGAAQAFABAEAEQAEAEABAHQAAAIgGADQgDAEgGAAQgGABgFgFg");
	this.shape_504.setTransform(478.2,552.6);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgHADQgIADgKAAQgMAAgLgEQgKgEgHgIQgIgIgDgLQgEgKAAgMQgBgQAGgNQAFgMALgJQAKgHAMgFQAOgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgCgEgHgEIgCgCIgBgDIABgDQAVgHALgFQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQAEAAAJgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgBABQgZADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgUgEQgIAEgGAFQgFAHgCAJQgDAJAAAKQAAAKADAKQADAJAGAIQAFAIAIAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgIgEgFAAQgLAAgHAEg");
	this.shape_505.setTransform(467,551.5);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAKgJALgFQAMgFALAAQANAAALAFQALAEAIAJQAJAIAEALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgMAAgMgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgFgJgGgFQgIgGgIAAQgIAAgHAEg");
	this.shape_506.setTransform(444.2,555.9);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgHgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAGAFQAFAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJADALQAEAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_507.setTransform(414.5,555.9);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgEQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAcABIAYgBQABAAAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgEAAQgHABgBADQgBABACAIIAVA3IAFAJIAFgLIARgqQAGgOAAgFQAAgDgGgBIgGgBIgCgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAIAXABIAVgBQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEAAQgHABgFAHIgKASQgLAWgRAoIgKAZQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_508.setTransform(402,556.2);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAHgBQAIgBACgFQABgDABgRIAAg1QgBgGAAgDQgCgEgGgDIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgCAjIAAA2QABARACADQABAFAIABIAGABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgFAAgFQAAgIAFgFQAFgEAGAAQAFABAEAEQAEAEABAHQAAAIgGADQgDAEgFAAQgHABgFgFg");
	this.shape_509.setTransform(391.7,552.6);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgBQAIgBACgFQACgDgBgRIAAg1QAAgGgBgDQgBgEgGgDIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBAjIAAA2QAAARACADQABAFAIABIAHABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgFAAgFQAAgIAFgFQAFgEAGAAQAFABAEAEQAEAEAAAHQABAIgGADQgDAEgGAAQgGABgFgFg");
	this.shape_510.setTransform(374.8,552.6);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgCADQAAACgRAAIg1AAQgGAAgCABQAAABAAAGQgBAJADALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_511.setTransform(339.7,555.9);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgHAAQgOAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAFgGAPgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAKgEAGAAQAHAAAGADQAHACADAFQAEAEACAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgFgCgAgGAJQgOAFgFAEQgHAFAAAJQADASAQAAQALAAAFgIQADgDABgLIABgSQAAgEgDAAg");
	this.shape_512.setTransform(289.2,555.9);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AgTAgQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAJgDAGgFQAHgHAAgLQAAgKgPgFQgFgDAAgGQAAgFAEgEQAEgEAHAAQAHAAAGAHQAEAEACAGQACAFAAAHQAAAHgDAHQgDAHgFAFQgFAFgGAEIgPAHQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_513.setTransform(271.1,561.9);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAKgJALgFQAMgFALAAQANAAALAFQALAEAIAJQAJAIAEALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgNAAgLgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQACAKAFAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgCgKgFgIQgFgJgGgFQgJgGgHAAQgIAAgHAEg");
	this.shape_514.setTransform(260.2,555.9);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgHADQgIADgKAAQgMAAgLgEQgKgEgHgIQgIgIgEgLQgDgKAAgMQgBgQAGgNQAFgMAKgJQALgHANgFQANgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgBgEgIgEIgCgCIgBgDIABgDQAVgHALgFQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgBABQgZADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgUgEQgIAEgFAFQgGAHgCAJQgDAJAAAKQAAAKADAKQADAJAGAIQAGAIAHAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgHgEgHAAQgJAAgIAEg");
	this.shape_515.setTransform(229,551.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgFAFgHAEQgNAGgNAAQgMAAgLgGgAgGgyQgGACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_516.setTransform(215.3,555.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AgkBlIgcABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAGgBQAJgBABgFQACgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIgBgDIABgCQATgIALgIQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIgBAOQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQAXgOASAAQALAAAJAFQAJAEAHAHQAGAIAEAKQADAKAAALQAAAQgFANQgGAMgJAJQgLAJgNAGQgOAFgNAAIgRgBQgDABAAAHIAAAgQgBAQACAEQACAEAHABIAMACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhOQgHACgCADQgDAFAAANIAAAzQAAAFABAEQACADAFAEQAJAHALAAQAJAAAHgEQAIgEAEgHQAGgGACgJQADgKAAgMQAAgJgDgJQgCgIgGgHQgFgHgHgEQgIgEgKAAQgHAAgHADg");
	this.shape_517.setTransform(177.1,559.3);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQADgMAIgKQAJgJAKgFQAMgGAMAAQAJAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgBABQgCABAAAGQABAJADALQADAKAHAHQAFAIAKAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgMAGgOAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAAEgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_518.setTransform(151.1,555.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgDgEQgDgEgDAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgCgFQgDgGAAgGQAAgJAFgFQAFgGAPgFIAhgLQAFgCABgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgFADQgHAEAAAGQAAAJgDACQgHAFgKAAQgEAAgBgEQAAgFAGgHQAFgGAKgGQAIgGAKgDQAJgEAHAAQAHAAAGADQAHACADAFQAFAEABAHQACAGgBAIIgBAzQgBALADAHQAEAIAHAAQAEAAAEgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgFgCgAgFAJQgPAFgFAEQgHAFAAAJQADASAQAAQALAAAFgIQADgDABgLIABgSQAAgEgDAAg");
	this.shape_519.setTransform(858.8,509.9);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("Ag5BdQgDgEAAgFQAAgGADgEQAEgCAFAAIAGAAQAGAAAEgGQALgSAGgPQADgIAAgFQAAgGgFgOIgYg/IgGgQQgEgGgHgBIgIgCQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAdABIAagBQAAAAAAAAQABAAAAABQAAAAAAABQAAAAABABQAAABgBAAQAAABAAABQAAAAAAAAQgBABAAAAIgHACQgHABAAADQAAADAJAZIAKAbIAGAWQACgCAJgVIALgXQAKgZAAgFQAAgEgHgBIgJgCQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAbABIAWgBQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgFABQgHABgGAIQgEAGgJARIgQAiIgwBnQgDAIgGAEQgEACgGAAQgGAAgEgDg");
	this.shape_520.setTransform(838.3,513.6);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgIAAQgNAAgHgHQgFgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgGAEAAAGQgBAJgCACQgHAFgLAAQgEAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAHAAAHADQAGACAEAFQADAEACAHQACAGAAAIIgDAzQAAALADAHQADAIAJAAQADAAAEgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgEgCgAgGAJQgOAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgEgDAAg");
	this.shape_521.setTransform(772.4,509.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQADgMAJgKQAIgJAKgFQAMgGAMAAQAJAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgBABQgCABAAAGQABAJADALQADAKAHAHQAFAIAKAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgMAGgOAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAAEgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_522.setTransform(733,509.9);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgEQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAcACIAYgCQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgEAAQgHABgBADQgBABACAIIAVA3IAFAJIAFgLIARgqQAGgOAAgEQAAgEgGgBIgGgBIgCgEQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAXACIAVgCQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEAAQgHABgFAHIgKASQgLAWgRAoIgKAZQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_523.setTransform(720.4,510.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgBQAIgBACgFQABgDAAgRIAAg1QAAgGgBgDQgBgDgGgEIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBAjIAAA2QAAARACADQABAFAIABIAHABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgFAAgFQAAgIAFgFQAFgDAGAAQAFAAAEAEQAEAFAAAGQAAAIgEAEQgFADgFAAQgGABgFgFg");
	this.shape_524.setTransform(710.2,506.6);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AgCAgIgIguIgCgLQABgFADgCIAIgBIAJABQADACAAAFIgBALIgIAuQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_525.setTransform(675.5,498.3);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQADgMAIgKQAJgJAKgFQAMgGAMAAQAJAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg2AAQgFAAgBABQgBABAAAGQAAAJADALQADAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgNAGgNAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_526.setTransform(473,509.9);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAKgJALgFQAMgFALAAQANAAALAFQALAEAIAJQAJAIAEALQAFAMAAANQAAAMgFAMQgEAMgIAJQgJAIgMAFQgMAFgMAAQgMAAgMgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgFgJgGgFQgJgGgHAAQgIAAgHAEg");
	this.shape_527.setTransform(383.9,509.9);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAJgJAMgFQAMgFALAAQAMAAALAFQAMAEAIAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgLAFgNAAQgNAAgLgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQACAKAFAIQAFAIAIAFQAHAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgEgJgIgFQgIgGgHAAQgIAAgHAEg");
	this.shape_528.setTransform(342.2,509.9);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_529.setTransform(308.1,509.9);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgBQAIgBACgFQABgDAAgRIAAg1QAAgGgBgDQgBgDgGgEIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBAjIAAA2QAAARACADQABAFAIABIAHABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgFAAgFQAAgIAFgFQAFgDAGAAQAFAAAEAEQAEAFAAAGQAAAIgEAEQgFADgFAAQgGABgFgFg");
	this.shape_530.setTransform(298,506.6);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgIADQgHADgKAAQgMAAgLgEQgJgEgIgIQgHgIgFgLQgDgKAAgMQgBgQAGgNQAFgMAKgJQALgHANgFQANgFANAAQANAAAHADQABAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgCgEQAAgEgIgEIgCgCIgBgDIABgDQAWgHAKgFQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgCABQgYADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgVgEQgHAEgFAFQgFAHgDAJQgDAJAAAKQAAAKADAKQADAJAGAIQAGAIAHAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgHgEgHAAQgJAAgJAEg");
	this.shape_531.setTransform(286.7,505.5);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgBQAIgBACgFQABgDAAgRIAAg1QAAgGgBgDQgBgDgGgEIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBAjIAAA2QAAARABADQACAFAIABIAHABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgFAAgFQAAgIAFgFQAFgDAGAAQAFAAAEAEQAEAFAAAGQAAAIgEAEQgFADgFAAQgGABgFgFg");
	this.shape_532.setTransform(259.3,506.6);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AAYA+IAAgMQABgEgDAAQgWAPgSAAQgJAAgIgCQgGgCgFgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgCgEgGgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQATAAANgFQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIAAAaIAAAwQABATADAGQAEAFAFACQAGADAIAAQAEAAAHgDQAGgCAGgEQAFgGAAgMIAAgvQABgOgDgEQgBgDgIgDIgDgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAYAAALgFQAAAAABAAQAAAAABABQAAAAAAAAQAAAAABABIgBAaIAAAwQAAATABAHQACAHAGAAIALgBQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgdAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_533.setTransform(233.1,510.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgCADQAAACgRAAIg1AAQgGAAgCABQgBABABAGQAAAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_534.setTransform(200.7,509.9);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AAhA8QgGgTgHgOIgOggIgGgPIgFAOIgQAkIgMAeIgEABIgDgBIgJgZIgchBQgFgMgDgFQgEgEgGgBIgFgCIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAbACIAagCQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgHACQgHABAAADQAAAEAFAMIATAsIAFAMIAHgOIAPgjQAEgLgCgFQgDgJgKgCIgFgCQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAXACIAcgCQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgJACgBACQgBABADAJIAXA1IAEAJIAEgJIAUgzQADgIAAgEQAAgDgFgBIgIgCQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAXACIAUgCQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgGABgDAEQgDAEgFAJQgWAzgGAQIgKAbIgEABg");
	this.shape_535.setTransform(184.7,510.2);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAKgJALgFQAMgFALAAQANAAALAFQALAEAIAJQAJAIAEALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgMAAgMgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgFgJgGgFQgIgGgIAAQgIAAgHAEg");
	this.shape_536.setTransform(167.4,509.9);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AgkBlIgcABQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAGgBQAIgBACgFQABgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIAAgDIABgCQASgIALgIQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABIgCAOQAAABABAAQAAABAAAAQABABAAAAQABAAABAAQAWgOARAAQALAAAKAFQAJAEAGAHQAHAIADAKQAEAKAAALQAAAQgGANQgEAMgLAJQgJAJgNAGQgPAFgNAAIgQgBQgFABAAAHIAAAgQAAAQACAEQABAEAJABIAMACQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhOQgHACgCADQgEAFAAANIAAAzQAAAFADAEQABADAFAEQAJAHALAAQAJAAAIgEQAHgEAFgHQAEgGADgJQADgKAAgMQAAgJgDgJQgDgIgEgHQgFgHgIgEQgIgEgJAAQgHAAgIADg");
	this.shape_537.setTransform(152.3,513.3);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AgcBpIgMgEQgDAAgEAFIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBIABgZIAAiNQAAgOgCgEQgBgDgHgEIgCgCIgCgDIACgDIAggNQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIgBAlIAAA5QAAAGADAAQAHgEAIgCQAJgEAIAAQANAAALAFQAKAEAIAHQAIAHAEALQAEALAAAMQAAAPgFANQgFAMgKAJQgJAJgMAFQgNAFgNAAQgNAAgNgEgAgYAAQgEADAAAOIAAAvQAAAIACAHQACAGADAFQAEAFAGACQAGADAFAAQALAAAHgEQAIgEAEgHQAFgHACgJQADgJAAgKQAAgLgDgKQgDgLgGgHQgGgHgIgEQgJgDgJAAQgNAAgHADg");
	this.shape_538.setTransform(899.1,459.3);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AAYA+IAAgMQAAgEgCAAQgWAPgSAAQgJAAgHgCQgIgCgEgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgCgEgGgDIgEgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQASAAAOgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAaIAAAwQAAATAEAGQAEAFAFACQAGADAIAAQAEAAAHgDQAGgCAGgEQAFgGAAgMIAAgvQAAgOgCgEQgCgDgHgDIgDgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAYAAALgFQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAaIAAAwQgBATACAHQACAHAGAAIALgBQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgdAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_539.setTransform(797.5,464.1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgHgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAIAEALAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_540.setTransform(742.7,463.9);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AAhA8QgGgSgHgPIgOghIgGgOIgFAOIgQAkIgMAeIgEABIgDgBIgJgZIgchBQgFgMgDgFQgEgEgGgBIgFgCIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAbABIAagBQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgHACQgHABAAADQAAAEAFALIATAtIAFAMIAHgOIAPgjQAEgLgCgGQgDgIgKgCIgFgCQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAXABIAcgBQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgJACgBACQgBABADAJIAXA2IAEAIIAEgIIAUg0QADgIAAgEQAAgEgFAAIgIgCQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAXABIAUgBQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgGACQgGABgDAEQgDAEgFAJQgWAzgGAQIgKAbIgEABg");
	this.shape_541.setTransform(705.4,464.2);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_542.setTransform(627.8,463.6);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgHgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAIAEALAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_543.setTransform(616.7,463.9);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AAZBsIAAgFIgBgJIgBAAQgLAHgIADQgHADgKAAQgMAAgLgEQgKgEgHgIQgHgIgFgLQgEgKAAgMQABgQAFgNQAGgMAJgJQALgHANgFQANgFANAAQANAAAHADQABAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgCgEQAAgEgIgEIgDgCIgBgDIABgDQAWgHALgFQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVABAGQACAIAGAAQAEAAAJgDQAAAAABABQAAAAAAABQAAAAAAABQABABAAABQgBAEgCABQgXADgQAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAgVgEQgHAEgFAFQgFAHgDAJQgDAJAAAKQAAAKADAKQADAJAFAIQAGAIAJAEQAIAEAKAAQAFAAAGgCQAHgDAEgDQACgCAAgJIAAg8QAAgHgEgEQgDgEgGgDQgIgEgGAAQgJAAgJAEg");
	this.shape_544.setTransform(603.3,459.5);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AAABdIgaABQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAIAGgBQAIgBACgFQACgDAAgRIAAg0QAAgIgCgCQgBgDgGgEIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBAjIAAA2QAAARACADQACAFAIABIAHABQAAAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgEAAgGQAAgIAFgFQAEgDAHAAQAFgBAEAFQAFAFgBAGQAAAHgEAFQgFADgEAAQgIABgEgFg");
	this.shape_545.setTransform(591.6,460.6);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_546.setTransform(570.2,463.6);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAKgJALgFQAMgFALAAQANAAALAFQALAEAIAJQAJAIAEALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgMAFgMAAQgMAAgMgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgFgJgGgFQgJgGgHAAQgIAAgHAEg");
	this.shape_547.setTransform(554.9,463.9);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AAABdIgaABQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAIAGgBQAIgBACgFQABgDABgRIAAg0QAAgIgBgCQgCgDgGgEIgCgCIgCgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBAjIAAA2QAAARACADQACAFAIABIAGABQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgEAAgGQAAgIAFgFQAEgDAHAAQAFgBAEAFQAFAFAAAGQgBAHgFAFQgEADgEAAQgIABgEgFg");
	this.shape_548.setTransform(495.9,460.6);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_549.setTransform(475,463.6);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAFgMQAEgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgBADQgCACgQAAIg2AAQgFAAgBABQgBABAAAGQAAAJADALQADAKAGAHQAHAIAJAFQAIAEALAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgGAFgGAEQgMAGgOAAQgMAAgLgGgAgGgyQgFACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_550.setTransform(461.3,463.9);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgFQABgDAAgRIAAg0QAAgIgBgCQgBgDgGgEIgDgCIAAgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBAjIAAA2QAAARABADQACAFAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgEAAgGQAAgIAFgFQAFgDAGAAQAFgBAEAFQAEAFAAAGQAAAHgEAFQgFADgFAAQgGABgFgFg");
	this.shape_551.setTransform(451.4,460.6);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_552.setTransform(441.9,463.9);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("Ag5BdQgDgEAAgFQAAgGADgEQAEgCAFAAIAGAAQAGAAAEgGQALgSAGgPQADgIAAgFQAAgGgFgOIgYg/IgGgQQgEgGgHgBIgIgCQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAdABIAagBQAAAAAAAAQABAAAAABQAAAAAAABQAAAAABABQAAABgBAAQAAABAAABQAAAAAAAAQgBABAAAAIgHACQgHABAAADQAAADAJAZIAKAbIAGAWQACgCAJgVIALgXQAKgZAAgFQAAgEgHgBIgJgCQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAbABIAWgBQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgFABQgHABgGAIQgEAGgJARIgQAiIgwBnQgDAIgGAEQgEACgGAAQgGAAgEgDg");
	this.shape_553.setTransform(412,467.6);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_554.setTransform(397.4,463.6);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AgHBkQgDgLgKgUIgOgeIgbg3IgTgrIAAAAIgDA1QgCAoAAAcQAAARACAFQACAFAJABIALABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIghgBIgfABIgBgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIAGgBQAKgCAEgDQAEgFABgPIAFhBIADhCQABgOgEgFQgDgFgOgCIgFAAIAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAXACIAZgCQgBAJAFAOQAEALAIAQIAiBEIATAoIAAAAIAXgtIAdg3IAQgiQAGgOAAgKIAXACIAbgCIABAFIgBADIgGAAQgOACgEAGQgEAFAAAQQACBVACArQABAOABAEQADAGAJABIAKABIABAEQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgkgBIgkABQgBgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAJgBQAKgBADgFQACgEAAgPIgBh8IgBAAIgTAnIgbAzQgbA3gDAOIgDABg");
	this.shape_555.setTransform(363.4,460.1);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("AgKAMQgFgFAAgHQAAgGAEgEQAFgGAGAAQAHAAAEAGQAFAEABAGQgBAHgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape_556.setTransform(338.7,468.6);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgJgIgEgLQgFgMAAgOQAAgMAFgMQAFgMAIgIQAJgJAMgFQAMgFALAAQAMAAAMAFQALAEAIAJQAIAIAFALQAFAMAAANQAAAMgFAMQgEAMgJAJQgIAIgMAFQgLAFgNAAQgNAAgLgEgAgPgxQgGADgFAHQgEAHgDAJQgCAKAAAMQAAAJACAKQACAKAFAIQAFAIAIAFQAHAFAHAAQAKAAAHgFQAGgEAEgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgFgJgHgFQgIgGgIAAQgHAAgHAEg");
	this.shape_557.setTransform(271.1,463.9);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AgcBpIgMgEQgDAAgEAFIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAgBgBIABgZIAAiNQAAgOgCgEQgBgDgHgEIgCgCIgCgDIACgDIAggNQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIgBAlIAAA5QAAAGADAAQAHgEAIgCQAJgEAIAAQANAAALAFQAKAEAIAHQAIAHAEALQAEALAAAMQAAAPgFANQgFAMgKAJQgJAJgMAFQgNAFgNAAQgNAAgNgEgAgYAAQgEADAAAOIAAAvQAAAIACAHQACAGADAFQAEAFAGACQAGADAFAAQALAAAHgEQAIgEAEgHQAFgHACgJQADgJAAgKQAAgLgDgKQgDgLgGgHQgGgHgIgEQgJgDgJAAQgNAAgHADg");
	this.shape_558.setTransform(256.2,459.3);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_559.setTransform(236.8,463.6);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AgEA8IgLgfIgZg7IgHgPQgEgGgHgBIgGgBIgBgEQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIAcABIAYgBQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgEAAQgHABgBADQgBABACAIIAVA3IAFAJIAFgLIARgqQAGgOAAgEQAAgFgGAAIgGgBIgCgEQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAXABIAVgBQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEAAQgHABgFAHIgKASQgLAWgRAoIgKAZQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_560.setTransform(213.2,464.2);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AAABdIgbABQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgFQACgDgBgRIAAg0QAAgIgBgCQgBgDgGgEIgDgCIAAgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBAjIAAA2QAAARACADQABAFAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgEAAgGQAAgIAFgFQAFgDAGAAQAFgBAEAFQAEAFABAGQAAAHgGAFQgDADgGAAQgGABgFgFg");
	this.shape_561.setTransform(202.9,460.6);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AgNA+IgbABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQANgEARgKQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARIABADIAOgMQAKgGAHAAQAGAAAEADQAEAEAAAFQAAAHgFADQgEAEgEAAQgDAAgEgCQgHgFgGAAQgGAAgFAGQgCAFAAASIAAAnQAAAQACAFQAAAEAIABIALABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_562.setTransform(194.4,463.6);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAFgMQADgMAJgKQAIgJAKgFQAMgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgFAFgHAEQgMAGgOAAQgMAAgMgGgAgFgyQgGACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_563.setTransform(175.8,463.9);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgHgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAIAEALAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgGAFgGAEQgMAGgOAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_564.setTransform(914.1,417.9);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AAIA9IgZAAIggABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAKgNATgfIAdg0QAEgGgBgCQgBgBgFAAIgSAAQgPAAgGAFQgGAEgFANQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAgBAAIAEgSQADgMAEgFQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAADAEABIARABIApAAQANAAAFgBQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAIgVAiIgjA7QgEAIAAACQABACAIAAIAJAAIATgBQALgCAFgGQAEgEAGgNQAEgDACAFQgGAcgEAGg");
	this.shape_565.setTransform(902.6,417.7);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgHgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAEgMAIgKQAJgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgCABQAAABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgFAFgHAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_566.setTransform(849,417.9);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("AgYA7QgLgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAJgJALgFQAMgFALAAQAMAAAMAFQAKAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgMAFgMAAQgMAAgMgEgAgPgxQgGADgEAHQgFAHgDAJQgCAKAAAMQAAAJACAKQADAKAEAIQAGAIAGAFQAIAFAHAAQAKAAAHgFQAHgEADgIQAGgKACgYQAAgIgCgKQgDgKgEgIQgEgJgHgFQgJgGgHAAQgIAAgHAEg");
	this.shape_567.setTransform(819.4,417.9);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AAABcIgbACQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgFQACgEgBgQIAAg0QAAgIgBgCQgBgDgGgEIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBAjIAAA2QAAAQACAEQABAFAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAEAEABAHQAAAHgGAFQgDADgGAAQgGAAgFgEg");
	this.shape_568.setTransform(762.6,414.6);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("AgkBlIgcABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAGgBQAJgBABgFQACgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIgBgDIABgCQASgIAMgIQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIgBAOQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQAXgOASAAQAKAAAKAFQAJAEAHAHQAGAIAEAKQADAKAAALQAAAQgFANQgFAMgKAJQgLAJgNAGQgOAFgNAAIgRgBQgDABAAAHIAAAgQgBAQACAEQACAEAHABIAMACQABAAAAAAQAAABAAAAQABABAAAAQAAABgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhOQgHACgCADQgEAFABANIAAAzQAAAFABAEQACADAFAEQAJAHALAAQAJAAAHgEQAHgEAFgHQAFgGADgJQADgKAAgMQAAgJgDgJQgDgIgFgHQgEgHgIgEQgIgEgKAAQgHAAgHADg");
	this.shape_569.setTransform(750.8,421.3);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAEgMAJgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgCADQAAACgRAAIg1AAQgGAAgCABQgBABABAGQgBAJADALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_570.setTransform(730.3,417.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("AAZBsIAAgFIgBgJIgBAAQgLAHgHADQgIADgKAAQgMAAgLgEQgKgEgHgIQgIgIgDgLQgEgKgBgMQAAgQAGgNQAFgMALgJQAKgHAMgFQAOgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgCgEgGgEIgDgCIgCgDIACgDQAVgHALgFQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQAEAAAJgDQAAAAABABQAAAAAAABQAAAAAAABQABABAAABQgBAEgBABQgZADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAgUgEQgIAEgGAFQgFAHgCAJQgDAJAAAKQAAAKADAKQADAJAFAIQAGAIAJAEQAIAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgIgEgFAAQgLAAgHAEg");
	this.shape_571.setTransform(531.2,413.5);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_572.setTransform(515.5,417.6);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgHAAQgOAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAFgGAPgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAKgEAGAAQAHAAAGADQAHACADAFQAEAEACAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgFgCgAgGAJQgOAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQADgDABgLIABgSQAAgEgDAAg");
	this.shape_573.setTransform(502,417.9);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAFgMQADgMAJgKQAIgJAKgFQAMgGAMAAQAIAAAJADQAIADAFAFQAGAFADAHQADAGAAAHQAAAFgCADQgBACgQAAIg2AAQgFAAgCABQgBABAAAGQAAAJAEALQADAKAHAHQAFAIAKAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAFgCAAAFQgEAHgFAGQgFAFgHAEQgMAGgOAAQgMAAgMgGgAgFgyQgGACgFAFQgKAIAAAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAFgDQABgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_574.setTransform(447.6,417.9);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("AAABcIgbACQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgFQACgEgBgQIAAg0QAAgIAAgCQgCgDgGgEIgCgCIgBgDIABgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBAjIAAA2QAAAQACAEQABAFAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAEAEABAHQAAAHgGAFQgDADgGAAQgGAAgFgEg");
	this.shape_575.setTransform(437.7,414.6);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AgkBiQgJgDgGgGQgGgEgDgHQgCgFAAgGQAAgIADgEIAUgUQAGgFgDgCQgJgCgHgHQgGgHAAgIQAAgCAEgCQAIgEAIgIQADgEAAgCQgJgFgGgJQgDgEgCgGQgCgGAAgGQAAgKAEgIQADgJAHgGQAHgGAJgEQAJgDAKAAQANAAAOAGQAKAFAIAAIAYAAQADABgBAGQgBAEgDABIgVAAIAAAPQAAAJgCAIQgDAJgGAGQgGAIgJAEQgLAEgLAAIgNgBQgOAIAAAHQAAAFAGADQAFAEAKABIAigCIAOACQAIABAFACQAHAFAEAFQAEAIAAAKQAAAMgGALQgGALgLAHQgKAIgNAEQgOAEgNAAQgNAAgKgDgAgZAiQgGADgEAGQgFAIAAAIQAAAFADAGQACAGAFAEQAFAEAIACQAHACAKAAQAIABAJgDQAIgDAGgEQAFgEAEgGQADgHAAgGQAAgHgDgFQgCgFgEgDQgFgDgGgBIgOgCIgJAAQgUAAgFAEgAgahSQgDAFgCAFQgCAHAAAIQAAAHACAHQACAGAEAFQAIAKALgBQAGAAADgCQAFgCADgFQAGgHAAgPIgCgOQgBgHgEgFQgDgGgFgCQgDgDgHAAQgLAAgHAJg");
	this.shape_576.setTransform(369.8,421.8);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AAYA+IAAgMQAAgEgCAAQgWAPgRAAQgLAAgGgCQgIgCgEgFQgEgFgCgHQgCgHAAgJIAAgwQAAgPgBgEQgCgEgGgDIgEgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQASAAAOgFQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAaIAAAwQAAATAFAGQADAFAFACQAFADAJAAQAEAAAHgDQAGgCAGgEQAFgGAAgMIAAgvQAAgOgCgEQgBgDgIgDIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAYAAALgFQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIAAAaIAAAwQgBATACAHQACAHAGAAIALgBQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgdAGgKAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_577.setTransform(321.9,418.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgEgEgCAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgCgFQgDgGAAgGQAAgJAGgFQAEgGAPgFIAhgLQAFgCABgHIAAgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQAAgFAGgHQAGgGAJgGQAIgGAKgDQAJgEAHAAQAIAAAFADQAHACADAFQAEAEACAHQACAGAAAIIgCAzQgBALADAHQAEAIAHAAQAEAAAEgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgEgCgAgFAJQgPAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQADgDABgLIABgSQAAgEgDAAg");
	this.shape_578.setTransform(284,417.9);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_579.setTransform(271.8,417.9);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AiVAHIAAgNIErAAIAAANg");
	this.shape_580.setTransform(250.3,417.7);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_581.setTransform(221.4,417.1);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgDgEgBAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgDgFQgCgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCgBgHIABgOQAAgKgEgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAJgGQAJgGAJgDQAKgEAHAAQAIAAAGADQAFACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgGAEQgGAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgEgDAAg");
	this.shape_582.setTransform(211.1,417.9);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_583.setTransform(200.1,417.1);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AAABcIgaACQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAIAGgBQAIgBACgFQACgEAAgQIAAg0QAAgIgCgCQgBgDgGgEIgDgCIgBgDIACgDQASgFALgJQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBAjIAAA2QAAAQACAEQACAFAIABIAGABQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABgAgMhCQgEgEAAgHQAAgHAFgFQAEgDAHAAQAFgBAEAFQAFAEgBAHQAAAHgEAFQgFADgEAAQgIAAgEgEg");
	this.shape_584.setTransform(191.5,414.6);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("AgcBpIgMgEQgDAAgEAFIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBIABgZIAAiNQAAgOgCgEQgBgDgHgEIgCgCIgCgDIACgDIAggNQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIgBAlIAAA5QAAAGADAAQAHgEAIgCQAJgEAIAAQANAAALAFQAKAEAIAHQAIAHAEALQAEALAAAMQAAAPgFANQgFAMgKAJQgJAJgMAFQgNAFgNAAQgNAAgNgEgAgYAAQgEADAAAOIAAAvQAAAIACAHQACAGADAFQAEAFAGACQAGADAFAAQALAAAHgEQAIgEAEgHQAFgHACgJQADgJAAgKQAAgLgDgKQgDgLgGgHQgGgHgIgEQgJgDgJAAQgNAAgHADg");
	this.shape_585.setTransform(179.9,413.3);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgDgEgBAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgDgFQgCgGAAgGQAAgJAFgFQAGgGAOgFIAigLQAEgCAAgHIABgOQABgKgFgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgFAEgBAGQgBAJgCACQgHAFgLAAQgDAAAAgEQAAgFAFgHQAFgGAJgGQAJgGAJgDQALgEAGAAQAHAAAHADQAFACAFAFQAEAEABAHQACAGAAAIIgDAzQAAALADAHQADAIAJAAQADAAAEgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQACgDABgLIABgSQAAgEgDAAg");
	this.shape_586.setTransform(167.1,417.9);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AAABcIgaABQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAIAGgBQAIgBACgEQABgEABgRIAAg0QAAgIgBgCQgCgEgGgDIgCgCIgCgDIACgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBAkIAAA2QAAARACAEQACAEAIABIAGABQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhCQgEgEAAgHQAAgHAFgFQAEgDAHAAQAFgBAEAFQAFAEAAAHQgBAHgFAFQgEADgEABQgIgBgEgEg");
	this.shape_587.setTransform(817.7,368.6);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_588.setTransform(763.4,371.1);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AAVA9QgGgDgDgEQgDgEgDAAIgJAFQgOAIgHAAQgOAAgIgHQgEgEgDgFQgCgGAAgGQAAgJAGgFQAEgGAPgFIAigLQAEgCAAgHIABgOQAAgKgEgHQgDgEgCgDQgFgCgGAAQgHAAgFADQgHAEAAAGQgBAJgCACQgHAFgKAAQgFAAAAgEQABgFAFgHQAGgGAIgGQAJgGAJgDQALgEAGAAQAIAAAFADQAGACAEAFQAEAEACAHQACAGAAAIIgCAzQAAALACAHQAEAIAHAAQAFAAADgCIAEgCQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQgKANgPAAQgGAAgEgCgAgFAJQgPAFgGAEQgGAFAAAJQADASAQAAQALAAAGgIQADgDAAgLIABgSQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAg");
	this.shape_589.setTransform(745.6,371.9);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AgTA5QgMgFgGgJQgHgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAHgKQAJgJAKgFQAMgGALAAQAKAAAIADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgBADQgBACgRAAIg1AAQgGAAgBABQgBABAAAGQAAAJACALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAIAAAHgDQAGgDAHgIQAEgCABAFQgDAHgGAGQgFAFgHAEQgNAGgNAAQgMAAgLgGgAgGgyQgGACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAaAAADgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgGADg");
	this.shape_590.setTransform(733.3,371.9);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_591.setTransform(719.4,367.2);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgHADQgIADgKAAQgMAAgLgEQgKgEgHgIQgIgIgEgLQgDgKAAgMQgBgQAGgNQAFgMALgJQAJgHANgFQAOgFANAAQANAAAIADQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgBgEQgBgEgIgEIgCgCIgBgDIABgDQAVgHALgFQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQAEAAAJgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgBABQgZADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgUgEQgIAEgGAFQgFAHgCAJQgDAJAAAKQAAAKADAKQADAJAGAIQAGAIAHAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgHgEgGAAQgLAAgHAEg");
	this.shape_592.setTransform(696.9,367.5);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_593.setTransform(681.2,371.6);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgCgEgCAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCAAgHIAAgOQAAgKgEgHQgCgEgDgDQgFgCgGAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAKgGQAIgGAKgDQAJgEAHAAQAHAAAGADQAGACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQAAAAABAAQAAAAABABQAAAAAAABQAAABAAABQgKANgPAAQgGAAgFgCgAgGAJQgOAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAg");
	this.shape_594.setTransform(667.7,371.9);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AAgA6IgdABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAIAIgBQAGAAACgDQAAgCgDgEIgPgXIgFgJIgFAIIgNAUQgFAHAAACQABADAFABIAFABIABAEQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgXgBIgWABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBgBgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAHgCQAHgBAIgIQAGgGAUgcQAEgFgDgCIgbgmQgDgFgEgCQgFgEgGgBIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQABgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAaABIAagBQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgBAEIgEABQgGABgBACQAAACAEAFIAOAWIACAEIARgZQAEgGAAgCQgBgCgFgBIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAWABIAWgBQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgBAEIgEABQgMACgDADQgIAGgVAcQgCADAAADIADAFIAcAmQAFAHAEADQAEADAGABIAFAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_595.setTransform(647.2,372);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AgkBlIgcABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAGgBQAJgBABgFQACgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIgBgDIABgCQASgIAMgIQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIgBAOQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQAXgOASAAQAKAAAKAFQAJAEAHAHQAGAIAEAKQADAKAAALQAAAQgFANQgGAMgJAJQgLAJgNAGQgOAFgNAAIgRgBQgDABAAAHIAAAgQgBAQACAEQACAEAHABIAMACQABAAAAAAQAAABAAAAQABABAAAAQAAABgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhOQgHACgCADQgEAFABANIAAAzQAAAFABAEQACADAFAEQAJAHALAAQAJAAAHgEQAHgEAFgHQAFgGADgJQADgKAAgMQAAgJgDgJQgDgIgFgHQgEgHgIgEQgIgEgKAAQgHAAgHADg");
	this.shape_596.setTransform(613.5,375.3);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AgXA7QgMgFgIgIQgIgIgGgLQgEgMAAgOQAAgMAFgMQAFgMAJgIQAIgJAMgFQALgFAMAAQANAAAKAFQALAEAJAJQAIAIAFALQAFAMAAANQAAAMgFAMQgFAMgHAJQgJAIgMAFQgLAFgNAAQgMAAgLgEgAgOgxQgHADgEAHQgFAHgCAJQgDAKAAAMQAAAJACAKQADAKAEAIQAFAIAHAFQAIAFAIAAQAJAAAHgFQAHgEAEgIQAFgKACgYQAAgIgCgKQgCgKgEgIQgGgJgHgFQgHgGgJAAQgHAAgGAEg");
	this.shape_597.setTransform(575.3,371.9);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_598.setTransform(562.5,371.9);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_599.setTransform(532.4,371.1);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("AAABcIgbABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAIAGgBQAIgBACgEQABgEABgRIAAg0QAAgIgBgCQgCgEgGgDIgCgCIgBgDIABgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBAkIAAA2QAAARADAEQABAEAIABIAGABQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAFAEAAAHQgBAHgFAFQgEADgEABQgIgBgEgEg");
	this.shape_600.setTransform(498.7,368.6);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_601.setTransform(490.4,371.1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("AgRA7QgLgEgHgHQgJgIgEgLQgFgMAAgOQAAgKAEgMQAFgMAJgJQAJgKANgGIANgEIASgCQAPAAALAFQAFAEAAAIQAAAFgCADQgCAEgDAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAgBgBAAQgFgHgIgEQgIgFgJAAQgIAAgFADQgIADgFAGQgHAGgDAJQgDAJAAAMQAAAHADAJQADAJAGAHQAGAIAJAEQAHAFAMAAQAMAAAIgFQAHgEAGgJQAFgBABAFQgEAIgGAGQgFAGgIAEQgGADgIACIgNACQgLAAgKgEg");
	this.shape_602.setTransform(457.2,371.9);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("AAYBsIAAgFIAAgJIgBAAQgLAHgHADQgIADgKAAQgMAAgLgEQgKgEgHgIQgIgIgEgLQgDgKAAgMQgBgQAGgNQAFgMALgJQAKgHANgFQANgFANAAQANAAAHADQABAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAAgtQAAgNgCgEQAAgEgIgEIgCgCIgBgDIABgDQAVgHALgFQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIgBAlIAACBQAAAVACAGQABAIAGAAQADAAAKgDQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAEgCABQgYADgPAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgVgEQgHAEgFAFQgGAHgCAJQgDAJAAAKQAAAKADAKQADAJAGAIQAGAIAHAEQAJAEAKAAQAFAAAHgCQAGgDAEgDQACgCAAgJIAAg8QAAgHgDgEQgEgEgGgDQgHgEgGAAQgKAAgJAEg");
	this.shape_603.setTransform(436,367.5);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AAoA+IgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgOgHgHQgDgEgGgDQgFgCgIAAQgGAAgHADQgHADgDAFQgFAGAAAMIAAAsQAAAQACAEQACAEAIACIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgcgBIgcABQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgBQAIgBACgFQABgEAAgQIAAgzQAAgJgBgCQgBgEgGgDIgDgCIgBgDIACgDQATgGALgIQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAOQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQALgHAJgDQAJgFALAAQAJAAAHADQAGADAFAFQAEAFACAHQACAGAAAIIAAAyQAAAQABAEQACAFAIABIAHABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg");
	this.shape_604.setTransform(420.3,371.6);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgDgEgBAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgDgFQgCgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCgBgHIABgOQAAgKgEgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAJgGQAJgGAKgDQAJgEAHAAQAIAAAGADQAFACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgFAEQgHAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAg");
	this.shape_605.setTransform(406.8,371.9);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("AgUA5QgKgFgIgJQgGgIgDgLQgDgJAAgLQAAgMAEgMQAFgMAIgKQAIgJALgFQALgGALAAQAJAAAJADQAHADAHAFQAFAFADAHQADAGAAAHQAAAFgCADQAAACgRAAIg1AAQgGAAgCABQAAABAAAGQgBAJADALQAEAKAGAHQAHAIAJAFQAHAEAMAAQAJAAAFgDQAHgDAHgIQAEgCABAFQgEAHgFAGQgGAFgGAEQgNAGgNAAQgMAAgMgGgAgFgyQgHACgEAFQgKAIgBAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAVAAQAZAAAEgDQACgBAAgFQAAgHgFgFQgGgHgMAAQgFAAgFADg");
	this.shape_606.setTransform(387,371.9);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AAIA9IgZAAIggABQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQALgNATgfIAdg0QADgGgBgCQAAgBgEAAIgUAAQgPAAgFAFQgGAEgFANQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAgBAAIAEgSQADgMADgFQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAADAEABIARABIApAAQAOAAAEgBQAAAAABABQAAAAAAAAQABABAAAAQAAABgBAAIgVAiIgjA7QgEAIAAACQABACAIAAIAJAAIATgBQALgCAFgGQAEgEAGgNQAEgDACAFQgHAcgDAGg");
	this.shape_607.setTransform(375.4,371.7);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFFFFF").s().p("AAABcIgbABQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgEQACgEgBgRIAAg0QAAgIgBgCQgBgEgGgDIgCgCIgBgDIABgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgBAkIAAA2QAAARACAEQABAEAIABIAHABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhCQgEgEAAgHQAAgHAFgFQAFgDAGAAQAFgBAEAFQAEAEAAAHQABAHgGAFQgDADgGABQgGgBgFgEg");
	this.shape_608.setTransform(365.8,368.6);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("AAABcIgaABQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgBQAIgBACgEQABgEAAgRIAAg0QAAgIgBgCQgBgEgGgDIgDgCIgBgDIACgCQASgHALgIQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAAAkIAAA2QAAARABAEQACAEAIABIAHABQAAAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhCQgEgEAAgHQAAgHAFgFQAEgDAHAAQAFgBAEAFQAFAEgBAHQAAAHgEAFQgFADgFABQgGgBgFgEg");
	this.shape_609.setTransform(350.7,368.6);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFFFFF").s().p("AAUA9QgFgDgEgEQgDgEgBAAIgKAFQgOAIgIAAQgNAAgHgHQgFgEgCgFQgDgGAAgGQAAgJAFgFQAGgGAOgFIAhgLQAGgCgBgHIABgOQAAgKgEgHQgDgEgCgDQgEgCgHAAQgHAAgGADQgFAEgBAGQAAAJgDACQgHAFgLAAQgDAAAAgEQgBgFAGgHQAFgGAJgGQAJgGAJgDQAKgEAHAAQAIAAAGADQAFACAFAFQAEAEABAHQACAGgBAIIgCAzQABALACAHQADAIAJAAQAEAAADgCIAEgCQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQgLANgOAAQgGAAgFgCgAgGAJQgOAFgGAEQgGAFAAAJQAEASAPAAQALAAAFgIQAEgDAAgLIABgSQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAg");
	this.shape_610.setTransform(326.3,371.9);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFFFFF").s().p("AgGBFQgGgCgEgFQgDgEgCgGIgBgNIAAhDQAAgGgBgBQgBgBgEAAIgJAAQgDgDADgEQANgEAGgFQAHgGAFgMQAFgBABADIAAANIAAAFQAAABAEAAIAhAAQADACAAAFQAAAEgCACIgiAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAAAGIAAA2QAAAQACAHQACAFAEADQAFACAHAAIAIgBIAIgEIADABIAAAEQgFAFgHAEQgJAEgLAAQgHAAgGgCg");
	this.shape_611.setTransform(315.3,371.1);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("AgkBlIgcABQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAFgBQAIgBADgFQABgEAAgQIAAh/QAAgJgBgDQgBgDgGgEIgDgCIgBgDIACgCQARgIAMgIQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABIgCAOQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQAXgOARAAQALAAAKAFQAJAEAGAHQAHAIADAKQAEAKAAALQAAAQgFANQgFAMgLAJQgJAJgNAGQgPAFgNAAIgQgBQgFABAAAHIAAAgQABAQABAEQACAEAHABIANACQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAgAgMhOQgGACgDADQgDAFgBANIAAAzQAAAFACAEQACADAFAEQAJAHALAAQAJAAAHgEQAHgEAGgHQAEgGADgJQADgKAAgMQAAgJgDgJQgDgIgEgHQgGgHgHgEQgIgEgKAAQgGAAgIADg");
	this.shape_612.setTransform(285.4,375.3);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFFFF").s().p("AAoBqIgcABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBQAIgCACgEQACgEAAgQIAAgrQAAgPgHgJQgEgEgFgCQgGAAgHAAQgFAAgHAAQgFACgEAEQgFADgBADIgBAKIAAAzQAAAQACAEQACAFAIABIAGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEIgdgBIgdABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAIgBQAIgBACgFQABgDAAgRIAAiGQAAgNgBgEQgCgEgGgEIgDgCIgBgDIABgDQAVgHALgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAlIAAA/QAAAEACAAQAIgGAKgEQAJgEALAAQAKAAAIADQAHADAFAFQAFADACAIQACAGAAAJIAAAyQAAAQABAEQACAFAIABIAIABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAg");
	this.shape_613.setTransform(251.1,367.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_127},{t:this.shape_126,p:{x:163.4,y:372.1}},{t:this.shape_125,p:{x:175.4,y:371.9}},{t:this.shape_124,p:{x:185.2,y:371.1}},{t:this.shape_123,p:{x:200.7,y:367.2}},{t:this.shape_122},{t:this.shape_121,p:{x:219.9,y:367.2}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118,p:{x:265.4,y:371.1}},{t:this.shape_117,p:{x:277.4,y:367.2}},{t:this.shape_116,p:{x:291.3,y:371.9}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110,p:{x:365.9,y:367.2}},{t:this.shape_109},{t:this.shape_108,p:{x:388.7,y:371.9}},{t:this.shape_107,p:{x:399.1,y:371.9}},{t:this.shape_106},{t:this.shape_105,p:{x:430.9}},{t:this.shape_104},{t:this.shape_103,p:{x:462.7,y:371.9}},{t:this.shape_102,p:{x:472.4,y:371.9}},{t:this.shape_101},{t:this.shape_100,p:{x:492.8,y:367.2}},{t:this.shape_99,p:{x:501.3,y:371.9}},{t:this.shape_98,p:{x:520.1,y:371.9}},{t:this.shape_97},{t:this.shape_96,p:{x:545.8,y:371.6}},{t:this.shape_95,p:{x:565}},{t:this.shape_94,p:{x:580.6,y:371.6}},{t:this.shape_93,p:{x:599.7,y:375.3}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90,p:{x:638.6}},{t:this.shape_89,p:{x:651.1,y:371.9}},{t:this.shape_88,p:{x:674.3}},{t:this.shape_87,p:{x:690.8}},{t:this.shape_86,p:{x:701.1,y:371.1}},{t:this.shape_85,p:{x:711.6}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81,p:{x:771.6,y:371.9}},{t:this.shape_80,p:{x:780.8,y:367.2}},{t:this.shape_79},{t:this.shape_78,p:{x:797.1,y:371.1}},{t:this.shape_77,p:{x:808.2}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72,p:{x:875.7}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69,p:{x:911.2,y:371.9}},{t:this.shape_68,p:{x:151.4,y:413.2}},{t:this.shape_67,p:{x:160.9,y:417.9}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{x:211.9,y:413.2}},{t:this.shape_63,p:{x:221.5,y:417.9}},{t:this.shape_62,p:{x:234.2,y:417.6}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59,p:{x:280.7,y:417.1}},{t:this.shape_58,p:{x:289.9,y:417.1}},{t:this.shape_57,p:{x:301.4,y:417.9}},{t:this.shape_56,p:{x:320.6,y:417.6}},{t:this.shape_55,p:{x:346.3,y:417.9}},{t:this.shape_54,p:{x:357.2,y:417.6}},{t:this.shape_53,p:{x:365.8}},{t:this.shape_52,p:{x:374.4,y:417.1}},{t:this.shape_51,p:{x:383.6,y:417.1}},{t:this.shape_50,p:{x:394,y:417.9}},{t:this.shape_49,p:{x:405.1,y:417.6}},{t:this.shape_48,p:{x:414.4,y:417.9}},{t:this.shape_47},{t:this.shape_46,p:{x:441,y:417.9}},{t:this.shape_45,p:{x:454.4}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:505.5}},{t:this.shape_41,p:{x:517.3,y:417.9}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:566.7,y:417.9}},{t:this.shape_36,p:{x:587}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:652.8,y:413.2}},{t:this.shape_31},{t:this.shape_30,p:{x:680,y:413.3}},{t:this.shape_29},{t:this.shape_28,p:{x:700.2,y:417.1}},{t:this.shape_27},{t:this.shape_26,p:{x:721.5,y:417.1}},{t:this.shape_25,p:{x:737.3}},{t:this.shape_24,p:{x:749}},{t:this.shape_23,p:{x:769.7}},{t:this.shape_22,p:{x:778.2}},{t:this.shape_21,p:{x:788.5}},{t:this.shape_20},{t:this.shape_19,p:{x:812.1}},{t:this.shape_18,p:{x:821.4,y:417.9}},{t:this.shape_17,p:{x:829.9}},{t:this.shape_16,p:{x:846.1,y:417.9}},{t:this.shape_15,p:{x:855.9,y:417.1}},{t:this.shape_14,p:{x:865.6,y:417.6}},{t:this.shape_13,p:{x:876.3,y:417.9}},{t:this.shape_12,p:{x:888.6,y:417.9}},{t:this.shape_11,p:{x:906,y:417.6}},{t:this.shape_10,p:{x:922.4,y:417.9}},{t:this.shape_9,p:{x:930.9}},{t:this.shape_8,p:{x:151.6,y:463.9}},{t:this.shape_7,p:{x:165.1,y:463.6}},{t:this.shape_6,p:{y:459.5}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:233.3,y:463.6}},{t:this.shape_2},{t:this.shape_1,p:{x:261.1,y:463.9}},{t:this.shape}]},60).to({state:[{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_62,p:{x:260.9,y:371.6}},{t:this.shape_462},{t:this.shape_68,p:{x:291.2,y:367.2}},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459,p:{x:313.5,y:371.1}},{t:this.shape_458,p:{x:323.9,y:371.9}},{t:this.shape_54,p:{x:335,y:371.6}},{t:this.shape_457},{t:this.shape_64,p:{x:355.6,y:367.2}},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452,p:{x:412.5,y:371.6}},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449,p:{x:461.2,y:371.6}},{t:this.shape_448},{t:this.shape_105,p:{x:488.6}},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444,p:{x:541.8,y:371.1}},{t:this.shape_443,p:{x:553.8}},{t:this.shape_442},{t:this.shape_441,p:{x:578.6,y:371.1}},{t:this.shape_440,p:{x:598.1,y:367.2}},{t:this.shape_69,p:{x:612,y:371.9}},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_85,p:{x:673.3}},{t:this.shape_435},{t:this.shape_434},{t:this.shape_124,p:{x:719.3,y:371.1}},{t:this.shape_433,p:{x:731.3,y:367.2}},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_118,p:{x:795.2,y:371.1}},{t:this.shape_429},{t:this.shape_49,p:{x:816.7,y:371.6}},{t:this.shape_95,p:{x:832.8}},{t:this.shape_428,p:{x:844.5,y:371.6}},{t:this.shape_88,p:{x:869.7}},{t:this.shape_427,p:{x:887.2,y:367.2}},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424,p:{x:922.4,y:367.2}},{t:this.shape_86,p:{x:149.9,y:417.1}},{t:this.shape_423,p:{x:161.9,y:413.2}},{t:this.shape_422,p:{x:175.8,y:417.9}},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_21,p:{x:223.7}},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_78,p:{x:341,y:417.1}},{t:this.shape_412,p:{x:353,y:413.2}},{t:this.shape_411,p:{x:364.8}},{t:this.shape_410,p:{x:373.2,y:417.9}},{t:this.shape_17,p:{x:381.7}},{t:this.shape_94,p:{x:405,y:417.6}},{t:this.shape_409},{t:this.shape_408,p:{x:436.8,y:417.9}},{t:this.shape_407,p:{x:446.5,y:417.9}},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404,p:{x:475.4,y:417.9}},{t:this.shape_403},{t:this.shape_402,p:{x:505.5,y:418.1}},{t:this.shape_98,p:{x:519.2,y:417.9}},{t:this.shape_121,p:{x:532.6,y:413.2}},{t:this.shape_53,p:{x:550.7}},{t:this.shape_96,p:{x:562.4,y:417.6}},{t:this.shape_401},{t:this.shape_400},{t:this.shape_59,p:{x:614.5,y:417.1}},{t:this.shape_399},{t:this.shape_42,p:{x:636}},{t:this.shape_398},{t:this.shape_45,p:{x:668.2}},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395,p:{x:718.8}},{t:this.shape_394},{t:this.shape_58,p:{x:747.9,y:417.1}},{t:this.shape_393,p:{x:759.9,y:413.2}},{t:this.shape_392,p:{x:773.8,y:417.9}},{t:this.shape_391},{t:this.shape_23,p:{x:792.6}},{t:this.shape_390},{t:this.shape_389},{t:this.shape_19,p:{x:829.6}},{t:this.shape_388,p:{x:841.3}},{t:this.shape_89,p:{x:853.6,y:417.9}},{t:this.shape_36,p:{x:874}},{t:this.shape_387},{t:this.shape_386,p:{x:891.6,y:413.2}},{t:this.shape_385,p:{x:899,y:413.2}},{t:this.shape_384,p:{x:907.4}},{t:this.shape_9,p:{x:915.9}},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380,p:{x:203.6,y:459.2}},{t:this.shape_379,p:{x:222.6,y:459.2}},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374,p:{x:292.1,y:463.9}},{t:this.shape_373},{t:this.shape_372,p:{x:310.9,y:463.9}},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_52,p:{x:361.3,y:463.1}},{t:this.shape_368,p:{x:372.8,y:463.9}},{t:this.shape_51,p:{x:392.5,y:463.1}},{t:this.shape_367,p:{x:402.2}},{t:this.shape_81,p:{x:413.4,y:463.9}},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_28,p:{x:521,y:463.1}},{t:this.shape_360,p:{x:537.6}},{t:this.shape_359},{t:this.shape_12,p:{x:572.7,y:463.9}},{t:this.shape_358,p:{x:581.9,y:459.2}},{t:this.shape_357,p:{x:589.3,y:459.2}},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354,p:{x:633.2}},{t:this.shape_26,p:{x:642.6,y:463.1}},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351,p:{x:670.3,y:459.2}},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348,p:{x:707.8}},{t:this.shape_347},{t:this.shape_346,p:{x:734.5}},{t:this.shape_117,p:{x:747.7,y:459.2}},{t:this.shape_345},{t:this.shape_344,p:{x:779.8}},{t:this.shape_343,p:{x:800.2,y:459.5}},{t:this.shape_342},{t:this.shape_341,p:{x:820.6,y:463.6}},{t:this.shape_15,p:{x:830,y:463.1}},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338,p:{x:865.1,y:459.2}},{t:this.shape_337},{t:this.shape_336,p:{x:888.8,y:463.9}},{t:this.shape_335,p:{x:900.4,y:463.9}},{t:this.shape_334},{t:this.shape_46,p:{x:151.6,y:509.9}},{t:this.shape_333},{t:this.shape_6,p:{y:505.5}},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328,p:{x:260.2,y:509.9}},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322,p:{x:356.1,y:505.2}},{t:this.shape_123,p:{x:363.5,y:505.2}},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318,p:{x:411.8}},{t:this.shape_317},{t:this.shape_316,p:{x:433.5,y:509.9}},{t:this.shape_315},{t:this.shape_314},{t:this.shape_32,p:{x:480.9,y:505.2}},{t:this.shape_313},{t:this.shape_312,p:{x:501.1,y:509.9}},{t:this.shape_311,p:{x:523.5}},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307,p:{x:571.9}},{t:this.shape_306,p:{x:590.3}},{t:this.shape_305},{t:this.shape_110,p:{x:604,y:505.2}},{t:this.shape_304},{t:this.shape_303,p:{x:622.3}},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297,p:{x:699.1}},{t:this.shape_13,p:{x:709.8,y:509.9}},{t:this.shape_296},{t:this.shape_295},{t:this.shape_100,p:{x:744.2,y:505.2}},{t:this.shape_294},{t:this.shape_293,p:{x:761.8,y:509.9}},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290,p:{x:811.6,y:509.9}},{t:this.shape_80,p:{x:820.9,y:505.2}},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287,p:{x:856.5,y:509.6}},{t:this.shape_286},{t:this.shape_285,p:{x:881.5}},{t:this.shape_284},{t:this.shape_8,p:{x:171.4,y:555.9}},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281,p:{x:203.3,y:555.6}},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277,p:{x:273,y:555.6}},{t:this.shape_276,p:{x:285.5,y:555.9}},{t:this.shape_275},{t:this.shape_274,p:{x:305}},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268,p:{x:395.5,y:555.9}},{t:this.shape_267,p:{x:414.5,y:555.9}},{t:this.shape_266,p:{x:428,y:555.6}},{t:this.shape_265},{t:this.shape_264,p:{x:461.6}},{t:this.shape_263,p:{x:474.7,y:555.9}},{t:this.shape_262,p:{x:492,y:555.6}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258,p:{x:541.8}},{t:this.shape_257},{t:this.shape_256,p:{x:575.7,y:555.6}},{t:this.shape_116,p:{x:589.6,y:555.9}},{t:this.shape_255,p:{x:614.7,y:555.6}},{t:this.shape_254},{t:this.shape_253,p:{x:646.5,y:555.9}},{t:this.shape_252,p:{x:656.2,y:555.9}},{t:this.shape_251,p:{x:667.2,y:555.9}},{t:this.shape_250,p:{x:676.6}},{t:this.shape_30,p:{x:695.2,y:551.3}},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247,p:{x:742.2}},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_3,p:{x:844.9,y:555.6}},{t:this.shape_125,p:{x:149.7,y:601.9}},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235,p:{x:215.3,y:601.9}},{t:this.shape_234},{t:this.shape_107,p:{x:237.9,y:601.9}},{t:this.shape_233,p:{x:247.7,y:601.1}},{t:this.shape_50,p:{x:258.1,y:601.9}},{t:this.shape_232,p:{x:269.2,y:601.6}},{t:this.shape_231,p:{x:281.8}},{t:this.shape_230},{t:this.shape_37,p:{x:319.6,y:601.9}},{t:this.shape_229},{t:this.shape_228},{t:this.shape_103,p:{x:361.6,y:601.9}},{t:this.shape_227,p:{x:373.3}},{t:this.shape_226,p:{x:383.3}},{t:this.shape_225},{t:this.shape_224,p:{x:406.6,y:601.9}},{t:this.shape_223,p:{x:420}},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_102,p:{x:491.7,y:601.9}},{t:this.shape_218},{t:this.shape_99,p:{x:520.7,y:601.9}},{t:this.shape_217,p:{x:530.5,y:601.1}},{t:this.shape_216},{t:this.shape_215,p:{x:554.4,y:601.6}},{t:this.shape_214},{t:this.shape_213,p:{x:583.1,y:601.1}},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210,p:{x:626.9,y:601.1}},{t:this.shape_209},{t:this.shape_208,p:{x:658.7,y:601.6}},{t:this.shape_207},{t:this.shape_206,p:{x:687}},{t:this.shape_205,p:{x:705.9,y:601.9}},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200,p:{x:788.5,y:601.1}},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196,p:{x:864.2}},{t:this.shape_195,p:{x:882.1,y:601.9}},{t:this.shape_194,p:{x:892.7,y:601.1}},{t:this.shape_193,p:{x:902.4,y:601.6}},{t:this.shape_192,p:{x:910.9}},{t:this.shape_191,p:{x:921.1}},{t:this.shape_190,p:{x:149.9,y:647.1}},{t:this.shape_189,p:{x:161.4,y:647.9}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:216.1,y:647.1}},{t:this.shape_184},{t:this.shape_183,p:{x:242,y:647.9}},{t:this.shape_182},{t:this.shape_181,p:{x:281.2,y:647.9}},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:328.3,y:647.1}},{t:this.shape_176},{t:this.shape_175,p:{x:361,y:643.2}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172,p:{x:413.3,y:647.6}},{t:this.shape_171,p:{x:437.2,y:647.6}},{t:this.shape_170,p:{x:456.2,y:647.9}},{t:this.shape_169,p:{x:468.9,y:647.6}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166,p:{x:508.3,y:643.2}},{t:this.shape_165,p:{x:518.2,y:647.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161,p:{x:574.6,y:647.6}},{t:this.shape_160,p:{x:587.3,y:647.1}},{t:this.shape_48,p:{x:596.3,y:647.9}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156,p:{x:645.9,y:643.2}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153,p:{x:688.4,y:647.6}},{t:this.shape_152,p:{x:697.8,y:647.1}},{t:this.shape_151},{t:this.shape_55,p:{x:716.3,y:647.9}},{t:this.shape_150,p:{x:725.5,y:643.2}},{t:this.shape_149},{t:this.shape_18,p:{x:745.8,y:647.9}},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146,p:{x:794.1,y:647.1}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142,p:{x:859.6,y:647.9}},{t:this.shape_141,p:{x:870,y:647.1}},{t:this.shape_140,p:{x:880.4,y:647.9}},{t:this.shape_139,p:{x:891.5,y:647.6}},{t:this.shape_138},{t:this.shape_7,p:{x:919.3,y:647.6}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:181.4,y:693.9}},{t:this.shape_16,p:{x:199.4,y:693.9}},{t:this.shape_134},{t:this.shape_56,p:{x:231.5,y:693.6}},{t:this.shape_11,p:{x:255.1,y:693.6}},{t:this.shape_133,p:{x:273,y:693.9}},{t:this.shape_14,p:{x:284.1,y:693.6}},{t:this.shape_10,p:{x:300.9,y:693.9}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_1,p:{x:334.5,y:693.9}},{t:this.shape_130,p:{x:346.6,y:693.9}},{t:this.shape_129,p:{x:361.9,y:693.6}},{t:this.shape_128}]},81).to({state:[{t:this.shape_470},{t:this.shape_469},{t:this.shape_410,p:{x:192.4,y:371.9}},{t:this.shape_408,p:{x:202.1,y:371.9}},{t:this.shape_466},{t:this.shape_386,p:{x:222.5,y:367.2}},{t:this.shape_407,p:{x:231,y:371.9}},{t:this.shape_613},{t:this.shape_183,p:{x:265,y:371.9}},{t:this.shape_385,p:{x:274.4,y:367.2}},{t:this.shape_612},{t:this.shape_404,p:{x:305.5,y:371.9}},{t:this.shape_611},{t:this.shape_610},{t:this.shape_30,p:{x:339.1,y:367.3}},{t:this.shape_609},{t:this.shape_379,p:{x:358.1,y:367.2}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_402,p:{x:470.8,y:372.1}},{t:this.shape_358,p:{x:481.8,y:367.2}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_90,p:{x:509}},{t:this.shape_87,p:{x:522}},{t:this.shape_599},{t:this.shape_85,p:{x:542.8}},{t:this.shape_598},{t:this.shape_597},{t:this.shape_56,p:{x:594.5,y:371.6}},{t:this.shape_596},{t:this.shape_357,p:{x:625.1,y:367.2}},{t:this.shape_335,p:{x:634.9,y:371.9}},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_351,p:{x:754.8,y:367.2}},{t:this.shape_588},{t:this.shape_443,p:{x:775.4}},{t:this.shape_77,p:{x:789.9}},{t:this.shape_54,p:{x:809.1,y:371.6}},{t:this.shape_587},{t:this.shape_72,p:{x:827.9}},{t:this.shape_251,p:{x:840.5,y:371.9}},{t:this.shape_49,p:{x:851.6,y:371.6}},{t:this.shape_440,p:{x:152.7,y:413.2}},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_395,p:{x:230.5}},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_93,p:{x:296.8,y:421.3}},{t:this.shape_459,p:{x:309.6,y:417.1}},{t:this.shape_577},{t:this.shape_42,p:{x:334.6}},{t:this.shape_411,p:{x:343.2}},{t:this.shape_428,p:{x:354.9,y:417.6}},{t:this.shape_576},{t:this.shape_452,p:{x:391.5,y:417.6}},{t:this.shape_126,p:{x:407.3,y:418.1}},{t:this.shape_444,p:{x:419.5,y:417.1}},{t:this.shape_23,p:{x:429.2}},{t:this.shape_575},{t:this.shape_574},{t:this.shape_129,p:{x:461.3,y:417.6}},{t:this.shape_441,p:{x:473.9,y:417.1}},{t:this.shape_384,p:{x:483}},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_374,p:{x:550.7,y:417.9}},{t:this.shape_124,p:{x:560.5,y:417.1}},{t:this.shape_130,p:{x:572.1,y:417.9}},{t:this.shape_19,p:{x:584.8}},{t:this.shape_25,p:{x:593.3}},{t:this.shape_24,p:{x:605}},{t:this.shape_388,p:{x:619.9}},{t:this.shape_118,p:{x:638.5,y:417.1}},{t:this.shape_433,p:{x:650.5,y:413.2}},{t:this.shape_165,p:{x:664.4,y:417.9}},{t:this.shape_11,p:{x:682,y:417.6}},{t:this.shape_9,p:{x:697.3}},{t:this.shape_427,p:{x:716.4,y:413.2}},{t:this.shape_570},{t:this.shape_338,p:{x:739.7,y:413.2}},{t:this.shape_569},{t:this.shape_568},{t:this.shape_449,p:{x:774.3,y:417.6}},{t:this.shape_36,p:{x:789.2}},{t:this.shape_86,p:{x:807.8,y:417.1}},{t:this.shape_567},{t:this.shape_68,p:{x:840.6,y:413.2}},{t:this.shape_566},{t:this.shape_14,p:{x:860.1,y:417.6}},{t:this.shape_78,p:{x:869.6,y:417.1}},{t:this.shape_53,p:{x:877.9}},{t:this.shape_322,p:{x:885.3,y:413.2}},{t:this.shape_22,p:{x:893}},{t:this.shape_565},{t:this.shape_564},{t:this.shape_59,p:{x:149.9,y:463.1}},{t:this.shape_424,p:{x:161.9,y:459.2}},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_422,p:{x:225.7,y:463.9}},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_58,p:{x:283.3,y:463.1}},{t:this.shape_52,p:{x:292.5,y:463.1}},{t:this.shape_205,p:{x:304.1,y:463.9}},{t:this.shape_262,p:{x:323.3,y:463.6}},{t:this.shape_556},{t:this.shape_555},{t:this.shape_142,p:{x:384,y:463.9}},{t:this.shape_554},{t:this.shape_553},{t:this.shape_102,p:{x:430.5,y:463.9}},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_51,p:{x:487.6,y:463.1}},{t:this.shape_548},{t:this.shape_360,p:{x:504.4}},{t:this.shape_28,p:{x:514.2,y:463.1}},{t:this.shape_348,p:{x:523.2}},{t:this.shape_346,p:{x:542.1}},{t:this.shape_547},{t:this.shape_546},{t:this.shape_344,p:{x:582.7}},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_64,p:{x:646.2,y:459.2}},{t:this.shape_367,p:{x:653.9}},{t:this.shape_89,p:{x:664.6,y:463.9}},{t:this.shape_328,p:{x:675.1,y:463.9}},{t:this.shape_423,p:{x:687.7,y:459.2}},{t:this.shape_541},{t:this.shape_267,p:{x:721.9,y:463.9}},{t:this.shape_26,p:{x:732.2,y:463.1}},{t:this.shape_540},{t:this.shape_354,p:{x:753.8}},{t:this.shape_255,p:{x:777.7,y:463.6}},{t:this.shape_539},{t:this.shape_316,p:{x:809.5,y:463.9}},{t:this.shape_312,p:{x:819.2,y:463.9}},{t:this.shape_69,p:{x:830.2,y:463.9}},{t:this.shape_123,p:{x:839.6,y:459.2}},{t:this.shape_293,p:{x:848.1,y:463.9}},{t:this.shape_15,p:{x:865.4,y:463.1}},{t:this.shape_189,p:{x:876.9,y:463.9}},{t:this.shape_538},{t:this.shape_50,p:{x:912.9,y:463.9}},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_341,p:{x:211.8,y:509.6}},{t:this.shape_306,p:{x:222.7}},{t:this.shape_533},{t:this.shape_110,p:{x:244.1,y:505.2}},{t:this.shape_532},{t:this.shape_318,p:{x:271}},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_263,p:{x:320.3,y:509.9}},{t:this.shape_233,p:{x:330.7,y:509.1}},{t:this.shape_528},{t:this.shape_307,p:{x:354.9}},{t:this.shape_276,p:{x:364.2,y:509.9}},{t:this.shape_527},{t:this.shape_175,p:{x:397.6,y:505.2}},{t:this.shape_217,p:{x:412.3,y:509.1}},{t:this.shape_412,p:{x:424.3,y:505.2}},{t:this.shape_108,p:{x:438.2,y:509.9}},{t:this.shape_393,p:{x:459.1,y:505.2}},{t:this.shape_526},{t:this.shape_224,p:{x:485.3,y:509.9}},{t:this.shape_100,p:{x:494.5,y:505.2}},{t:this.shape_213,p:{x:503.1,y:509.1}},{t:this.shape_380,p:{x:515.1,y:505.2}},{t:this.shape_41,p:{x:537.6,y:509.9}},{t:this.shape_156,p:{x:551.3,y:505.2}},{t:this.shape_210,p:{x:566,y:509.1}},{t:this.shape_117,p:{x:578,y:505.2}},{t:this.shape_37,p:{x:591.9,y:509.9}},{t:this.shape_311,p:{x:615.1}},{t:this.shape_170,p:{x:632.1,y:509.9}},{t:this.shape_303,p:{x:644.8}},{t:this.shape_80,p:{x:653.1,y:505.2}},{t:this.shape_343,p:{x:664.8,y:505.5}},{t:this.shape_525},{t:this.shape_268,p:{x:683.8,y:509.9}},{t:this.shape_297,p:{x:701.6}},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_285,p:{x:744.1}},{t:this.shape_253,p:{x:753.4,y:509.9}},{t:this.shape_521},{t:this.shape_252,p:{x:782.6,y:509.9}},{t:this.shape_200,p:{x:799.9,y:509.1}},{t:this.shape_32,p:{x:811.9,y:505.2}},{t:this.shape_195,p:{x:825.8,y:509.9}},{t:this.shape_520},{t:this.shape_519},{t:this.shape_281,p:{x:869.6,y:509.6}},{t:this.shape_13,p:{x:880.3,y:509.9}},{t:this.shape_518},{t:this.shape_264,p:{x:163.4}},{t:this.shape_517},{t:this.shape_63,p:{x:192.2,y:555.9}},{t:this.shape_247,p:{x:204.3}},{t:this.shape_516},{t:this.shape_515},{t:this.shape_194,p:{x:248.7,y:555.1}},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_274,p:{x:300}},{t:this.shape_235,p:{x:310.7,y:555.9}},{t:this.shape_125,p:{x:328.7,y:555.9}},{t:this.shape_511},{t:this.shape_287,p:{x:353.4,y:555.6}},{t:this.shape_107,p:{x:365.9,y:555.9}},{t:this.shape_510},{t:this.shape_190,p:{x:383.4,y:555.1}},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_185,p:{x:432.6,y:555.1}},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_103,p:{x:486.7,y:555.9}},{t:this.shape_177,p:{x:496.5,y:555.1}},{t:this.shape_503},{t:this.shape_232,p:{x:521.5,y:555.6}},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_290,p:{x:575.4,y:555.9}},{t:this.shape_392,p:{x:587.1,y:555.9}},{t:this.shape_99,p:{x:597.5,y:555.9}},{t:this.shape_336,p:{x:616.6,y:555.9}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_140,p:{x:666.7,y:555.9}},{t:this.shape_161,p:{x:680.4,y:555.6}},{t:this.shape_497},{t:this.shape_496},{t:this.shape_208,p:{x:724.1,y:555.6}},{t:this.shape_495},{t:this.shape_258,p:{x:744.1}},{t:this.shape_250,p:{x:759.2}},{t:this.shape_494},{t:this.shape_3,p:{x:785.5,y:555.6}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_160,p:{x:821.1,y:555.1}},{t:this.shape_491},{t:this.shape_193,p:{x:842.6,y:555.6}},{t:this.shape_215,p:{x:859.1,y:555.6}},{t:this.shape_458,p:{x:151.1,y:601.9}},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_172,p:{x:198.6,y:601.6}},{t:this.shape_67,p:{x:210.4,y:601.9}},{t:this.shape_277,p:{x:225.7,y:601.6}},{t:this.shape_206,p:{x:245.4}},{t:this.shape_487},{t:this.shape_256,p:{x:276.9,y:601.6}},{t:this.shape_152,p:{x:289.6,y:601.1}},{t:this.shape_486},{t:this.shape_226,p:{x:309.7}},{t:this.shape_485},{t:this.shape_48,p:{x:333.3,y:601.9}},{t:this.shape_18,p:{x:343,y:601.9}},{t:this.shape_484},{t:this.shape_372,p:{x:369.4,y:601.9}},{t:this.shape_16,p:{x:379.8,y:601.9}},{t:this.shape_483},{t:this.shape_10,p:{x:406.6,y:601.9}},{t:this.shape_368,p:{x:418.7,y:601.9}},{t:this.shape_196,p:{x:437.9}},{t:this.shape_181,p:{x:455.8,y:601.9}},{t:this.shape_146,p:{x:466.4,y:601.1}},{t:this.shape_482},{t:this.shape_171,p:{x:490.3,y:601.6}},{t:this.shape_135,p:{x:508.1,y:601.9}},{t:this.shape_1,p:{x:518.6,y:601.9}},{t:this.shape_166,p:{x:534.7,y:597.2}},{t:this.shape_192,p:{x:542.4}},{t:this.shape_481},{t:this.shape_480},{t:this.shape_231,p:{x:574.7}},{t:this.shape_479},{t:this.shape_478},{t:this.shape_191,p:{x:629.4}},{t:this.shape_133,p:{x:641.1,y:601.9}},{t:this.shape_266,p:{x:654.8,y:601.6}},{t:this.shape_141,p:{x:667.4,y:601.1}},{t:this.shape_477},{t:this.shape_169,p:{x:692.5,y:601.6}},{t:this.shape_227,p:{x:703.8}},{t:this.shape_57,p:{x:724.9,y:601.9}},{t:this.shape_153,p:{x:737.6,y:601.6}},{t:this.shape_150,p:{x:753.3,y:597.2}},{t:this.shape_476},{t:this.shape_223,p:{x:779.6}},{t:this.shape_475},{t:this.shape_474},{t:this.shape_139,p:{x:817.9,y:601.6}},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471}]},76).wait(83));

	// filter-stage03
	this.instance_6 = new lib.InnerShelllowerFiltration_mc03("synched",0,false);
	this.instance_6.setTransform(562.4,1154.1,1.086,0.992,0,8,8.2,1361.2,832.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(165).to({_off:false},0).to({_off:true},53).wait(82));

	// filter-stage02
	this.instance_7 = new lib.InnerShelllowerFiltration_mc02("synched",0,false);
	this.instance_7.setTransform(562.4,1154.1,1.086,0.992,0,8,8.2,1361.2,832.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(141).to({_off:false},0).to({_off:true},24).wait(135));

	// filter-stage01
	this.instance_8 = new lib.InnerShelllowerFiltration_mc02("synched",0,false);
	this.instance_8.setTransform(562.4,1154.1,1.086,0.992,0,8,8.2,1361.2,832.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60).to({_off:false},0).to({_off:true},81).wait(159));

	// filter-stage04
	this.instance_9 = new lib.InnerShelllowerFiltration_mc04("synched",0,false);
	this.instance_9.setTransform(563.7,1154.2,1.086,0.992,0,8,8.2,1362.2,833.4);

	this.instance_10 = new lib.InnerShelllowerFiltration_mc05("synched",0);
	this.instance_10.setTransform(563.7,1154.2,1.086,0.992,0,8,8.2,1362.2,833.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},218).to({state:[{t:this.instance_10}]},70).wait(12));

	// dirt overlay
	this.FiltrationDirt = new lib.dirt_mc();
	this.FiltrationDirt.setTransform(578.1,1016.3,1,1,0,0,0,-221.4,861.6);
	this.FiltrationDirt.alpha = 0;
	this.FiltrationDirt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.FiltrationDirt).wait(60).to({_off:false},0).wait(1).to({regX:-477.2,regY:850.9,x:322.3,y:1005.6,alpha:0.056},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.169},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.338},0).wait(1).to({alpha:0.394},0).wait(1).to({alpha:0.45},0).wait(197).to({alpha:0.437},0).wait(1).to({alpha:0.424},0).wait(1).to({alpha:0.411},0).wait(1).to({alpha:0.399},0).wait(1).to({alpha:0.386},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.347},0).wait(1).to({alpha:0.334},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.309},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.27},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.206},0).wait(1).to({alpha:0.193},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.116},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.051},0).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).wait(1));

	// BackgroundOverlay
	this.instance_11 = new lib.overlay();
	this.instance_11.setTransform(578.1,1016.3,1,1,0,0,0,594.1,1032.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20).to({_off:false},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.169},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.338},0).wait(1).to({alpha:0.394},0).wait(1).to({alpha:0.45},0).wait(272));

	// BackgroundLogo
	this.instance_12 = new lib.Group();
	this.instance_12.setTransform(540.1,154.2,1,1,0,0,0,140.8,96.2);
	this.instance_12.shadow = new cjs.Shadow("rgba(35,31,32,0.749)",0,2,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(300));

	// BackgroundLoop
	this.BackgroundLoop = new lib.BackgroundLoop();
	this.BackgroundLoop.setTransform(574.1,626.7,1,1,0,0,0,574.1,626.7);

	this.timeline.addTween(cjs.Tween.get(this.BackgroundLoop).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.3,380.7,2941.3,2704.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;