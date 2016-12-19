(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.MMlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoWAKIAAgTIQtAAIAAATg");
	this.shape.setTransform(228,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoWAKIAAgTIQtAAIAAATg");
	this.shape_1.setTransform(53.5,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3BVIAAipIBvAAIAAAdIhOAAIAAAoIBCAAIAAAdIhCAAIAAAqIBOAAIAAAdg");
	this.shape_2.setTransform(156.8,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBVIAAhHIg5AAIAABHIghAAIAAipIAhAAIAABFIA5AAIAAhFIAhAAIAACpg");
	this.shape_3.setTransform(140.4,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBVIAAiMIgtAAIAAgdIB7AAIAAAdIgtAAIAACMg");
	this.shape_4.setTransform(124.7,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiYFaIAAq0IB3AAIAAJNIC6AAIAABng");
	this.shape_5.setTransform(263.8,156.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AilFaIAAq0IE+AAIAABpIjHAAIAACyICYAAIAABmIiYAAIAADMIDUAAIAABng");
	this.shape_6.setTransform(220.6,156.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiFErQgtg1gFhSIBygQQAEAzATAbQASAaAdAAQAgAAASgQQATgRAAgeQAAgtgmgrQgQgThCg4Qg6gwgZgmQgmg3AAhDQAAhTAxgtQAvgtBYAAQBHAAAsAvQAqAtAHBMIhxAMQgDgpgUgUQgQgQgYAAQgcAAgPASQgQASAAAhQABAmAlAqQANAOBGA9QA5AwAaAnQAmA4gBA/QABBVg1AvQgzAuhUAAQhPAAgyg5g");
	this.shape_7.setTransform(174.3,156.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiFErQgug1gDhSIBxgQQADAzAUAbQASAaAdAAQAgAAASgQQATgRAAgeQAAgtgmgrQgQgThCg4Qg5gwgagmQgmg3AAhDQAAhTAwgtQAwgtBXAAQBHAAAsAvQAqAtAJBMIhyAMQgDgpgUgUQgRgQgXAAQgcAAgPASQgQASAAAhQAAAmAmAqQANAOBFA9QA5AwAaAnQAmA4AAA/QAABUg0AwQgzAuhUAAQhPAAgyg5g");
	this.shape_8.setTransform(129.2,156.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiFEwQgxgxAAhYIAAoGIB3AAIAAILQAABMA/AAQBAAAgBhMIAAoLIB4AAIAAIGQAABYgyAxQgvAvhWAAQhVAAgwgvg");
	this.shape_9.setTransform(81.8,157.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACKFaIAAocIgCAAIhrIcIg5AAIhrocIgCAAIAAIcIhoAAIAAq0ICdAAIBUGUIABAAIBUmUICdAAIAAK0g");
	this.shape_10.setTransform(26,156.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmFwIAAk4IirmnIBVAAIB+FCIB6lCIBWAAIipGnIAAE4g");
	this.shape_11.setTransform(258.5,72.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnFwIAAqcIiXAAIAAhDIF9AAIAABDIiXAAIAAKcg");
	this.shape_12.setTransform(213.4,72.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABsFwIAAleIjXAAIAAFeIhQAAIAArfIBQAAIAAE+IDXAAIAAk+IBQAAIAALfg");
	this.shape_13.setTransform(165.5,72.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiRElQg5hcAAjJQAAjIA5hdQA0hUBmAAQBdAAAzBJQApA9AJBmIhPAAQgLiphoAAQhEAAgfBFQggBIgBCpQABCpAgBKQAfBEBEAAQA4AAAdgeQAegeAAg4IAAhoIhlAAIAAhEIC0AAIAAFZIgzAAIgKg3QgwBChVAAQhmAAg0hWg");
	this.shape_14.setTransform(111.5,72.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnFwIAArfIBPAAIAALfg");
	this.shape_15.setTransform(72.6,72.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AC2FwIAAqiIgCAAIiaKiIgzAAIiZqiIgCAAIAAKiIhKAAIAArfIB/AAICAIsIACAAIB+osIB+AAIAALfg");
	this.shape_16.setTransform(27.6,72.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MMlogo, new cjs.Rectangle(0,0,281.5,192.6), null);


(lib.LCsunbeams_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E7EB9F","#B1D58D","rgba(170,206,137,0.82)","rgba(153,191,131,0.318)","rgba(142,183,127,0)"],[0,0.51,0.667,0.89,1],0,638.3,0,-638.2).s().p("EiWJBjvMAAAjHdMEsTAAAMAAADHdg");
	this.shape.setTransform(963.2,1278.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B1D58D","#8EB77F","#779363","#727D50"],[0,0.247,0.624,1],0,961,0,-961).s().p("EiWJCWKMAAAksTMEsTAAAMAAAEsTg");
	this.shape_1.setTransform(963.2,956.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LCsunbeams_mc, new cjs.Rectangle(2.2,-4.8,1922,1922), null);


(lib.MKReDs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1244.5,0,-186.2).s().p("ApiOWQomgzmRhyQj1hGiShpQiNhmgch3Qgdh3Bah0QBdh3DOhgQDkhrB/ioQBPhpBUjXQAnhhAwg4QA0g9BPgfQCUg6FrAWQJ0AnJKCaQISCMIADvQEIB7BVCeQBVCdhmC3QgVAlgOAwQgJAfgLA3QgtD1jQB8QjTB+nFAxQiQAPjTAJQjmAIhoAFQrTgfksgbg");
	this.shape.setTransform(485.6,180.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,36.3,0,-1394.4).s().p("A/wGnQgKAAgbgHIhigbQBsgyDAheQCnhQB7gsQInjEKuiJQJPh1LrhTQKLhIEQE2QCWCqBaD6QAbBNhHAyQhNA2iiAAIkxAAUgUHAAAgkOgAEg");
	this.shape_1.setTransform(1028.7,1388.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,36.2,0,-1394.5).s().p("AlQGsQ5DgEsxAAQEMhCH3h3QGuhoEThWQCJgqCyhsQDfiJBKgiQBhgtBogeQB6giBngEQFYgNIvgJQLFgLDEgFQGjgKCSAOQEsAdC1CBQB/BbAQB4QAQBwhWBsQhXBsihBCQiuBIjZACQtdAKyyAAIk/AAg");
	this.shape_2.setTransform(1898,1388.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,64.6,0,-1366.1).s().p("ABULKIptgBI02gBQiRAAgygTQhIgcAwhPQCykqDNl+QBki7D+iRQDziKFShMQFShMFpADQF6ADFMBZQEuBRN7DnQDRA2A1BGQA4BKh4BfQjJCfkHC1QjLCLkoC8QguAehxAPQhZAMhwACQjmAEk/AAIhIAAg");
	this.shape_3.setTransform(691.6,1360.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,234.9,0,-1195.8).s().p("AwhSeQhLgggjhGQghg/gJh0Qgonhh0nSQhEkWBqj0QBtj7EqjdQDjipFlgCQFngDEWCrQCxBtDYCrQB6BiDwDEQHLFnimGsQjxDumqDQQlHCfoZC6QifA3iqAWQjFAaiGAAQiQAAhHgeg");
	this.shape_4.setTransform(582.1,1189.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,60.1,0,-1370.6).s().p("EgorAJ1QhPgogFhbQgDg6gYiMQgXh+ABhIQACibB4hvQCGh7EBgoQDHgfH8hXQG/hNEGgmQM5h4KEANQJRAMHgBwQH0B0GADjQB2BFAAA5QgBA7h/A5QmFCypFCjQjCA2tXDVQg8APhjACIirAAQjPABwNAAIAAAAIqrgBQmVAAkXACIgIAAQimAAhOgog");
	this.shape_5.setTransform(1520.6,1364.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,48,0,-1382.7).s().p("AxFIiQg7AAhegDIi5gHIB3hKIBjg8QCRhUA9hXQBDhfgchtQgUhSAAhqQAAhEAKh7QANiQCKgmQCJgnDoBMQCIAtDABEIFEB1ILvELQBEAmCSBLQB9BEA7A3QA5A1AVBGQAVBEgSA/QgGATiEASQh5AQhrABQnSAEphAAIw0gCg");
	this.shape_6.setTransform(2292.3,1376.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,223.9,0,-1206.8).s().p("AhpkNQAmAjBkBGQBQA/gHAoQgLBEhJBiQgpA3hWBug");
	this.shape_7.setTransform(10.6,1200.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1049.4,0,-381.3).s().p("Aikm8QD8BPA7CDQAwBrhRCaQguBXhVB7IiTDQg");
	this.shape_8.setTransform(16.5,375.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,30.4,0,-1400.3).s().p("AxRF0IgpgwIOSm0IChgoIDDg7QB1gjBOgaQCvg6BRgTQBogZBMADQBNAEBcAiQBJAbCWBKIAAJcg");
	this.shape_9.setTransform(2620.5,1394.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1375.3,0,-55.4).s().p("AlZHrQjVgYkSg3InchnQk3hEhdhwQhbhwBwinIDglXMAyVAAAQr0C4mtF9Qi3CigLAJQh1BghyA6QhbAviNAdQhsAVhVAAQgiAAgegDg");
	this.shape_10.setTransform(1392.8,49.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,390.9,0,-1039.8).s().p("ApgyYQJ/ADEkCZQElCagIFMQgGEWhCESQhdGEjlEDQkZE+odDCg");
	this.shape_11.setTransform(60.9,1033.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1371,0,-59.7).s().p("AkZHVQjmgjkfg5QiNgdluhOQlLhIhhhvQhhhvB7itQAyhIBmhjICsipMAxYAAAQkICUh8DMQhjCkgZDuQgOCJjJBcQjGBbkRAAIgGAAQmIABnOhFg");
	this.shape_12.setTransform(606.4,53.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,381.4,0,-1049.3).s().p("AiTUAQnDhNkDlBQkGlEg6lRQg7lSCVlTQA5iCB9hzQCKiBCug+QHxixFXhXQHoh6HMgZMAAAAlxIiYAkQhbAVg6ARQmaB0lUAAQiYAAiLgYg");
	this.shape_13.setTransform(2615.6,1043.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1282,0,-148.7).s().p("EghUAWRQlMgUj5jZQiNh7ijjDQivjYhfhsQgvlGgWijQgokhAAjHQgBjmDLisQDQixGQhfQF5haFjAQQFyAQFLCDQA4AVBYAbICXAtIA4gsImPiTQjqhXifhBQgxgUgvguQgyg2gcgYMBQtAAAQk+BwigA3QmSCKjDBsQkYCchaDFQg3B7iqBJQivBLjwgFQjbgFk6gdQlegiirgOQB8CNgTCfQgUCeijCeQgrArg3BAQg6BIgfAkIh/BLQhMAvgnAjQnSGwrLFIQlSCbkpAAQgiAAghgCgAgHFjIADgCIgEADIABgBgAgHFjIAAAAg");
	this.shape_14.setTransform(1775.5,142.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1140,0,-290.7).s().p("EAAyAsdQn3gZn/kXQkKiSlIjLIo6lqQg1ghgegsQgigyATgfQBDh2A+jBQBUkDAXg4QBIivBrh9QCFiaDYhyItKjwMAAAgkRIMjg7IsjkDIAAm+MBHOAAAIjXDbQiACChhBWQixCeihBeQipBji6AzQldBdpogzQjIgQkwgmIn3g+QgvgFhHgDIh3gFIgOAuILwBpQIkBNDEC7QDCC6iiEdQg7BpgZBnQgaBwARBjQAvEVinDxQihDplsDNQhaAziSBDQinBLhSAnIAkAOQAQAGAKABQAdADA+gBQOTgHIHE9QFdDWCDBUQEICpC3CNQCOBtCOCXQBSBYCcC7QBwCGhPB6QhIBvjlBfQkRByh5AxQjeBZi3BAQovDGnNAAQg0AAgygDg");
	this.shape_15.setTransform(230.5,284.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,1156.2,0,-274.5).s().p("EAnhAn/QnLiwjIixQj4jcBPkQQg3AYgtAnQjeDFjrA7QjmA5m3gaQopggnaAAQkVAAn/ALQogAKj1ACQlcACi+g3Qj6hIhMi6IheBbQgsArgfAbQkHDlmdAgQmeAhlwi1QjJhjjDiMQidhxoLmAQmlk1kKi6Qi4iBg1hMQhRh2BmhuQBrhzDQg9QDBg5EIgHQTmggPuF4QJSDeCxDjQDBD4jjFQQgDAEAMAKIAgAeICIi6QAzhFBgiMQBYh8BKhRQBphzCvg0QC6g3DkAaQJUBGLYh2QDegkGLhTQGphXC9ghQhKhzgjg5QhAhmgVhIQgUhHAEhpQAJh3AAg8QhiBQhzCEQiQCigsArQkrEimkBnQnIBwpIhxQhdgSiMgBQg1AAi/AFQhhADjcARQjMAQhwACQjeAEiGhAQiIhAgFhyQgDg4AXhFQAQgxAlhLQAkhICPkFQBwjPA3iBQCJlEEaixQF9juKOARQAGAAAKgIIAWgRIiigtQhfgbg/gTQmciCixi+Qi3jEB7jLQBIh2CiijIETkSMBEYAAAQnjF9hfBHQlRD7koCoQr/Gxu7B5IOJGnQAMgiAEgYQAyljFUjaQFTjaJ9hWQKmhcJHBqQJRBtFDEcQCMB7CVDGIB6CnQBJBkAyA/IAAgBIACAEIgCgDQAgBDBBCEQA5B3AgBSQBFC0hqCMQhtCTkhBhQkhBilUAyQreBsvDBzQhgAMiNgBQihgDhQgBQgyAAg+gFIg6gFIEzK4IBAhLQAqgyAagkQDikzGGioQGbiwJyglQD8gPE8hIQCgglGBhrQFDhZFFABQFiACD7BwQBuAyBNBQQBRBVgNBAQgfCRA9CKQA2B6CLCMQBkBmANBfQAMBdhHBLQiVCfmhAaQpjAlnpDmQjDBbjSCKQh7BRjzCwIgfAPIiOA7QhUAjg3AaQlDCYlBAKIgoAAQkwAAlKh+g");
	this.shape_16.setTransform(963.6,268.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,708.9,0,-722.7).s().p("EiVJBv2QtSgCy/AAMggRAABIAAh/IBAiDQAlhOAQg1QAniGARgrQAnhiA+hGQCfiyGKhYQlQgNi8gzQjQg5hfh4IAAleID6nqQCSkiBSjKQBokBCribQDXjFF4hjQCrgtEXgqIHohJQlTgUilgJQjLgKiCgqQicgwgYhXQgpiTgNhhQgSiGAWhrQAzkHExi9QCNhWDXh+IFzjXMgj6gDEIAA+0QB0gIDmgUQDNgRCNgBQODgPH8CLQKNC0CmHJIB4jpQBLiPBThbQCHiUDmg1QDng0ECA7QEJA9EiARQEBAPE2gTQCJgHE9gKQElgICggLQBqgIBkgXQBsgZBDgjQCkhXC4gZQC6gaDUAkQApAGAwAfIBRA0IhmAYQg+APgrAEQhWAJh8AIIjVAPIACA2IOpDvQAEgoAXhXQAUhQACgoQAFiDifhKQi3hUhnhwQhZhhgriGQgTg8goigQgiiMgdhQQhJjGh5h+Qh5h9i2hBIA+BEQAgAjATAXQCiDFAjCyQAoDHh0C5Qh7DFiGBwQi7CbkSBAQnGBpmmAKQnXALmhhsQmIhlmygcQmNgZnNAiQjcARh1gEQiDgDhLgeQhLgdgwhCQgng2gohsQi2BZhaArQijBOiAAWQkCAtmDAnIqSBAMAAAgizQBlAqDTBQQC5BKBoA8QCGBNDqClQDuCnCBBMID5CPQCLBSBUA/QDgCoABChIHZidQEbhfDGhDQBTgdArgRQBDgcAlgcQDfipFwiUQDwhgHViSQEVhVEMgGQERgHETBNQBcAZCLAsIEDBQQg8ioCNhyQB7hkENgzQI7huH/gSQEqgKGOALQA5ABKAAXQFuANDgAMQFDASEFAaQE6AfC+ArQDIAvBwBIQBvBHAvBwQAsBogCClQB0AFDOAEQCyAFBzALQFxAjDEAEQE3AFEDgyQGnhRElBcQEjBbBRDqQATA4AjCNQAfB9AcBGQAPAlA0A0IBcBaIhJkwQgoisgLh2QgJhlhChMQhEhOiKhAQifhJg+glQhMgugQgqQgRgpAkg7QAagtBZhmIAegOIEOiMQChhUBrg5QEdiYF/hPQFWhFG5gOQEugKDOA4QDgA8CICNQDyD6CBB7QDYDMDMCYQEBC+BaBTQCSCFAeBuQAjB8hjCHQhoCOkQC0QCjAEBQAnQBBAgAXBAQAFAOATBvQAPBSAmAwIAnhGQANgYAEgMQBmlXFRjLQFojZJ/hCQBfgKCDgrIDLhEQsDCKq0i3QkwhPj4iHQjrh/iXidQmLmbjSlCQkJmVg2l6QgUiHAJg9QALhMA6glQA8gmCJgOQB2gND7gCQAFAAAJgJIASgRIjqg4QiKgghdgZQjMg2h6hPQh1hMgVhYQgWhYBPhVQBThZC1hIQGmimEqjxQEBjPDAkhIgDABIAEgDIgBACIGWjIQDyh4CfhVQLkmKMrFpQCKA+ElBxQElBwCKA+QEZB9CAB7QBYBWBjCEICjDdIIvm5Ii8gNQhzgJg/gVQo6i1kahdQntijk5iMQj5hwhxhYQh2hcAChXQADhVB4hhQBwhaDwh5QDihyFTihII6kQMAuiAAAIiEDbQhQCCg/BXQgmA0hCBIIhwB6QiHCWgmBlQh9FGiKCuQjNEBl2CkQCmhDCxhgQBug8DDh1QBMguGikAQh/g1AAheQgBhKBRhyQC0j/DdjOQD2jnE4i5MAjIAAAQAIAoAMBPQALBHAPAvQBJDsiAC+QiGDElcCOQhOAgkRB9QjYBjiRAyQm5CYnqgoIH+EqQBSg+CPh+QCDhrB0g3QEFh8GOimIKkkZMAAAAjSIkWhSQilgxh2gcQkLg+irhqQinhnhTiUQgjg+g4heIhdidQASCCA6CPQAxB5BUCOQA1BbgzBBQgxA/iaAxQhNAXhyArQiGAzhOAcIBGAKQARADAEgBIBUgSQAygKAggKQFshwFfAgQFCAdFECWIBoAuIBqAuIAASZQhtB4i9BJQi5BJjyAUQpHAxrlAPQoxAMlGhIQmxhfjOkJQhoEohlCsQiNDtjQCUQn2Fmw7gwQDgA9B1AvQB9AzA6A6QA4A4AQBUQANBCgICGQgICQA8DUIA1CyQAiBuAQBEIBVgFIgVhPQgLgugFggQgUiVgCheQgCiDAbhqQBEkCETi+QB3hTBzhuQBWhTBrh7QCfi2DPgeQDSgeEtB4QAzAUA+AgIBrA5QDCBlBkClQAlA8AkBaIA8CXQA6CMA0A7QBaBnCuAwIjRmtQh7j7heitQgrhQAag1QAcg7B3gtQIsjQKOhLQJlhFLIAvMAAAAizQjyAbiTABQigAAhwgeQhwgehihHQhYg/huh5Qg1g6hwhMQiChVg8gsQAoBYBgB9QB7CgAZAoQBUCChIBAQhGA+kAAcQvWBpxPBtQmRAnj+gbQlRgkjbieQhECDgfAqQgvA/hAAXQhBAXiCACQhSABkKgLQiQgFjdABQkBADiNAAIAwAYQALAGAFAAIGJAMQDxAHCXAGQFjANCFBHQCIBKgPC0QgcE+igElQikEsksEMQhNBEimBXQjBBghcAzQFyAwCCB6QCQCIiuDXQA8gqAwgtQAggeAsgyQBFhOAsgiQA0gpA7gOQA6gOBbAHQBNAFCaAZQAyAIBNAJICBANQnmifiRiNQhRhOgIhcQgIhbA+h1QB+jvDAkaQCLjNDnk0QBoiJC6hZQDGhfEXghQJAhFH+hOQD/gnDLAYQDVAaC6BjQBqA5C4BFIE1B0QAOgigLgYQgIgRgbgSQjyijAqhgQAshiFqhLQC6gnEjgeIHsgwIAAeUQjvgyh+h+QgxgxgthIIhJiBQhUEAkAC2QkDC5mvBqQpoCXnpA7Qj/AemCAVQm4AVjiAOIDGAZQFfAqDeA4QDqA6CRBVQCQBWBUCBQBPB6ArC8QBNFSCZGNQApBrAEA+QAEBHgoAyQgoAyhhArQhaAoisAxQCVAXEpAyQEIArC6ATQFxAlGHgQQDIgJEigaIHoguIAAJ8QgaB8g7D3QgxDbgNCXQgNCOiJBoQh1BajyBTQh9ArijBPQi1BbheArIihAoIk1A+Qi3Akh5AfQjlA7jdgEQjbgEjchDQh3gki1g1IkthYIrwkLIj7iKQiWhThfg6QkYithBisQhHi8C1jJQFqmOLvkCIDkhOIgEg1QltCFkyAOQkMALj0hPQjAg/jeiJQj7ioh/hTQAoBIBRB4QBaCGAgA1QB7DPAtCkQA1DAguCgQhpFuqHEAQnfC+lNBaQnQB9nIATQn/AVk4hhQk6hihejTQh+khhYlcQgShHAEhpQAJh2AAg7QjFCkhDDNQgyCaANDnQALC0iNA3QiLA1lTgvQgpgGhYgQQhUgQgugGIrDhZQmgg0kngUQiggKhMgGQiDgLhWgPQjigsheh2IlyCQQjUBSibArQkmBSnEBwIrzC7QnPB1mFhWQmEhWifj9QinkJgykwQgskFApk9QAgj5DUi1QDii/GjhpQGmhpIdhXQJnhkHZCfQDhBLCVB9QCYB/A3ClQAsCABoC6ICxE5IBtgPIhpj+Qg+iXguhmQhLilBZiIQBZiLD4hiQFUiJHDhcQHBhcHrAgQGhAbHgB4QkNiaifjGQiWi8g/j3IiGCXQhCBKg4ApQltEKqdCUQj7A4lsA3Ip5BbQgiAFg1gEIhcgKQjqgXjOhOQjHhMiPh0QiRh2hBiLQhEiSAdiVQBbnVI7l7QHSk1NQkbQHximFtBSQFcBODqExQBNBkBwCcIDLEeQDXlrHJiGQG3iAKiBOImskBQopEImDgpQmEgqkOliQiJi0lvgRQlqgSj6hpQjyhlh0iuQhSh7icg6QiLg0jpgNQBZA7DLBvQCtBnArBQQBoDEhzCrQh0CplICJQpQD3oyFKQlpDVkyARQk6ASmjiwIiahAQhXgng4ghQj+iUiLioQiViyAGiqQAIi5DAiaQDTipGlh5QDSg8Guh2QoFjeh2gmQhRgahFgHQgugFhvgBIAkAdQATAQARAIQCEA/A7AvQA/AyAAAsQgBAsg/AyQg6AuiCBAQjeBskiC3QieBkizAoQjAArjxgTQjzgTiJADQicAEhkAgQhkAghNBJQhGBBhOB9QhpCpjLBSQjMBRlJADQhLABh5AJQiXALgtACQlbAQiehKQiehKgFi1QgDhWABh8IABjSQgsBahLC1QhICghNBlQjWEbncCBQnVCAoagCQnDgCoQheIMMGNQAwgPB+grQB8gpBcgZQOOj6IJiHQEBhCDfARQDyASCZBzQCFBjCKCXQBPBXCXCxQAvA1A1BSIBZCLIBXgSIgmhkQgWg7gIgpQgaiKgEgbQgNheAKhGQAYi1DAh0QD9iYCAhnQC1iRBMiTQAqhSBwgZQBxgZCHAsQEkBeCVA2QDxBWCqBRQCjBODxCTQEgCxBoA4QBjA2DsBrQDhBmBrA8QDdB9B1CQQBxCNACCPQACCQhuCCQhwCFjZBoQk4CVl9BgQl0BdmjAmQiWANjngjQkIgviBgRQgtgHg8gXQhDgbgigMQBRBeAlBBQAvBUgGBFQgMCjk5CBQGZAsCpCbQBFBAAmBbQAcBCATBpQBpJKAoGrQAPCdjPBrQjMBpkugBQiwgBhcgWQq/iildhTQpoiRmdh7Qmlh8jKjGQjRjMA0kDIgEADQDllqLdiTQlwAOjzguQkrg5iyieQhohckdjvQj5jSiGh8QgWgUi5iaQh/hrg8hKQhThngJhiQgKhzBZh6Ij/DOQiFBthVBCIlaEEQjRCeh9BqQj2DRkFAoQkHAnmehvQhbgZiNgeQifgghOgSIgsAqQGLBVErCvQD5CSDQDgQD7ENAsEJQAuELirDdQizDnmGCUQmiCeppAvIktAaQC4AhEvAeQFoAjByAQQGDA3DPAlQFGA5DwBEQDzBEAjB6QAeBsh8DVQhEB1ikAqQh6Ahj1AAIgHgBgEhV7BHAITYhkIgcg9gEBKjBCnQBpiVDTheQCwhOEXgyQCmgeFqgqQFpgqCtggQpvAYpGBEQngA3jFABQlsADkThqgEB0LA3CIGmCTICqrDgEBagAedIKoBpIARgmIqihsgEifbAd3QDSASG3BZQjXhphzg5QjRhphphXQhwhbhmiUQhjidgug9IlXLwQDWg6ECAAQBsAAB1AKgEBfmAGuQA4AbgfBbQgTA5AEBYIAJCcQDrhjBViQQAphGgLg9QgMhBhFgvQifhqkwgPQhogFioAEQjzAGgiAAQBABhCBAsQCAAsCwgOQA9gFAuAAQBWAAAiARgEhUzAAJQhFALhEAmQhHAogDAgQgPB7ABCuIAEEpIA7ADIAjhSQAVgyAXggQAyhEBbhwQBsiGAjguQAXgdAbgtIAthMIibghQhAgNgsAAQgSAAgPACgAJ2HTIIOCIQA6gTBsgtQBmgmBNgLQCXgUA0goQA1gqgchQgAdggCQg3ASgbAXQgPAOAaAkQAZAkAZADQA0AFA+gHQBAgIAjgRQBsg1CUhTID6iNIgtggIkwAaQAwBdg5AoQg8Aqi1gMIgJAAQgnAAgzARgEg1NgCMQA/ALA+A5QAkAhBMAnICCBFICngeQprkKgfkiQgdkVH5kzQkYCMh8BKQjNB6hoBxQisC8i0BqQjhCEk8A7QgvAJg0AeQg6AkgdAQQgDACAfAUQAfAVAKgBICFgRQBLgNAegTQBTg3BRgBQBCgBB9AlQFjBsEAh1QBDgfA5AAQASAAARADgEBazg2XQBbAhBEBCQA+A8A7BpQBzDKAzDsQApC/AGD6QABBWgGFlQgGERAQCqQADAjgpA2QgwA3gTAeQA7gcBtg5QBpg0BTgXQDEg2EghDIHchvQnHgajzi4Qi/iQhYkQQiCmMhWksQhrl4hElDQgVhlAuiZQA7imAUhWIiQB8QhXBMgiA4QhxC6j2BeQjvBalzAGQiMADjKgBIlIAAQBoAoA1APQBGAUBRAEQB7AHHKgkQCDgKBrAAQDYAAB0AqgECZPg1uQDlCbAZDOILDqAQl4BWmIAGQlxAFmQhCQF7BxDFCHgEBqVhBsQCrAaFQBfQEGBKGXBSIKwCKIA8g3QlKhZjGiVQi9iOhIjJQiPBghXArQhnAyhjASQhjAQiMgJQh0gIjgggQj3gkhoABQi8ADh9BSQCHgXCMAAQCDAACGAUg");
	this.shape_17.setTransform(1367.6,715.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MKReDs, new cjs.Rectangle(0,0,2735.2,1431.7), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-120.1,-47,120.2,46.9).s().p("EhMpCMrMBzwkoBMAljAOsMhzwEoAg");
	this.shape.setTransform(490.6,994.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,981.2,1988.5), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-121.4,-43.4,121.5,43.4).s().p("EhBqB75MBdXkFVMAl+ANkMhdXEFVg");
	this.shape.setTransform(420.3,879.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,840.6,1759.4), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-124.6,-33.3,124.7,33.4).s().p("Eg3UCA2MBHskMGMAm9AKbMhHsEMGg");
	this.shape.setTransform(354.1,891.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,708.1,1782.5), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-125.6,-29,125.7,29.1).s().p("Egy6CCpMA+jkOXMAnSAJGMg+jEOXg");
	this.shape.setTransform(325.9,894.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,651.8,1788.6), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-125.6,-29,125.7,29.1).s().p("Egy6CCpMA+jkOXMAnSAJGMg+jEOXg");
	this.shape.setTransform(325.9,894.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,651.8,1788.6), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-126.1,-27.1,126.1,27.2).s().p("Egw6CDaMA6bkPSMAnaAIfMg6aEPSg");
	this.shape.setTransform(313.1,895.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,626.2,1790.7), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-126.9,-23,126.9,23.1).s().p("EgsqCE6MAxqkRBMAnrAHOMgxqERBg");
	this.shape.setTransform(285.9,896.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,571.8,1793.7), null);


(lib.rock10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC79A","#C9AC68","#BE9C48"],[0,0.498,1],-34.1,0,34.3,0).s().p("AlSB6QgJg1ANhsQAOh6AegaQArgnCGAHIBqAIQA6AEAegEQBxgPBIAZQBiAigbBkQgWBUhyA7QhAAhiAAzQhrA3hdAGIgSAAQhxAAgQhjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rock10_mc, new cjs.Rectangle(-34.2,-22.1,68.5,44.3), null);


(lib.rock09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-31.9,-12.1,37.3,13.3).s().p("AikESIh6gzQgggOgfgTQgXh7Aih9QAdhsA2g+QApgwCwgIQCIgGBOANQgGAiAOA8QATBQACAQQgeAOglArIhEBUQhdBzhhAPQANAUBSgRQBcgSAgAMQAqAQBDgFQAlgEBEgOQAKgCAMABQALABAOgDQhjAmhzAhQiWAthWAAQguAAgcgNg");
	this.shape.setTransform(35.9,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-23.5,-6,29.5,13.5).s().p("AhGDoIipAIQhTADgPgYQBigPCGh2IBfhXQAygtAdgNQgBgRgThQQgOg7AFgjQAJgBABAEQATAIBCAGQA/AFAcAQQAnAVAmBOQAlBNgDAwQgCAog4BMQgcAmgbAgQgNAEgLgBQgMgCgKADQhNAbguANQgkAJgbAAQgnAAgXgTg");
	this.shape_1.setTransform(49.5,25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rock09, new cjs.Rectangle(0,0,83.3,57.3), null);


(lib.rock08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3F3120","#5A4C3C","#9A8B7E"],[0,0.333,1],-7.1,13.1,10.7,-8.1).s().p("AhtBiQAOgMANgZQAOgcAIgNQAdgvA9ABQABgPAQgZQANgYgCgUQBCANgRBVQgRBRg8AdQg2AKgRACIgVABQgiAAgNgNg");
	this.shape.setTransform(79.8,68.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3F3120","#5A4C3C","#9A8B7E"],[0,0.333,1],-23.9,19.8,8.9,-19.3).s().p("AAaEHQAIhHg5gMQAEhMgXgoQgXgkhIgoIgDhVQgHhOAHgnQAHgpAXgLQgBgLgLgCIAAgUQgMgJgCgXIAAgpQBNAuAxA6QAAAIgFAFIATAIQALABACAKQACAFgBAPQgMABAVAZQAXAZAKACQAIAAADAHIADANQgZAIgDADQgEAEAxCCQA1CPAAAuQgZAKgagFQgogGgVABQAVA/gSAuQgQAmgwAkQAxgrAGhEg");
	this.shape_1.setTransform(88.1,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3F3120","#5A4C3C","#9A8B7E"],[0,0.333,1],-27.7,47.1,37.4,-30.5).s().p("AmQFoQhwg+gtibQA4jdD4i+QBVhCBagvQBLgnAVgBQBLgXBXAPQBbAQAOAtQBPBCATBlQgKgBgWgaQgWgZAMAAQABgPgBgGQgDgKgLgBIg/AGQgkAFgOAAQgWBBgGAcQgNBCAbAIIAAgVQBAAkAXBQQASA+gGBdQACAUgOAXQgPAZgBAPQg/AAgdAvQgIANgNAcQgNAZgPANQARAQA0gFQAQgBA4gKQA9goAVgnQAbgygZhGQAWgBAnAHQAaAEAagKQgBgug1iOQgxiDAEgEQAEgDAYgHQAWBIBlCnQBKCShGA/QhZBQhYAYQhcAah9gaQgaANhCASQg/ASgbAOQj0gQhog7g");
	this.shape_2.setTransform(55.8,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rock08, new cjs.Rectangle(0,0,111.6,87.1), null);


(lib.rock07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8F9194","#8C8E91","#76787A","#66686A","#5D5E60","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.012,0.11,0.216,0.333,0.49,0.714,0.886,1],-27.4,0,27.5,0).s().p("ACzBsQiehJgcgKQhygnh+AFQAAgOgMgMQgNgOgCgIQBOAIBqgiQBmghBXAMQADBMAXAHQAWAHAFgrQgCAeAaAYQANAMAoAXQAiATAIANQALATgXAZg");
	this.shape.setTransform(62.4,135);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#8F9194","#8C8E91","#76787A","#66686A","#5D5E60","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.012,0.11,0.216,0.333,0.49,0.714,0.886,1],-105.5,0,105.6,0).s().p("AkyIDIBQAAQAXgZgLgUQgIgNgigTQgogXgNgMQgagYACgeQgFAqgWgGQgXgHgDhNQhXgMhnAhQhqAihOgHQhUgsgxhLQASgCAogcQAogRAjAvQAbgHgDgIQgBgFgUgNQgwgfATgfQAaAWA2geQAogXAogoQihgmhSgSQiXgfAUAoQgnAigLgaQgHgSAEg9QA6gbCQAWQBVAMDBApQAUgcAVgWIATgUQACgGgHgJIgcgiQBHALAagCQAUgCAFgOIAKgeQAOgUAogOQAKAZAIA3QAKA6AHAaQAdBfBgAZQgthWgWgsQgmhOgBhMQBhgXCcgRQCngTBEgNQEOg4DujbQgQAvCeBtQAnAbBJAvQA1AkACAKQAeAHAUAxQAVA0gsAKQgMBlgwBeQgeA8hGBkQgnAWg1AtQhFA6gRANQhtBQiMgEQAEAOgJAFQgFADgQACQgmAIhrAdQhaAYg7AKQg8AdiYAAQiYAAg9gdg");
	this.shape_1.setTransform(111,94.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#8F9194","#8C8E91","#76787A","#66686A","#5D5E60","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.012,0.11,0.216,0.333,0.49,0.714,0.886,1],-24.1,0,24.2,0).s().p("AjuhqQgLhIAmgvIAaAAQgEA+AIASQAKAaAogiQgUgpCWAgQBSATCgAlQgnAogoAXQg2AegbgWQgSAfAwAeQATANACAFQACAIgaAIQgjgwgoARQgoAdgSACQAxBKBUAsQACAHANAPQALAMAAANQjMiZioiyg");
	this.shape_2.setTransform(24.2,111.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#8F9194","#8C8E91","#76787A","#66686A","#5D5E60","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.012,0.11,0.216,0.333,0.49,0.714,0.886,1],-49,0,49.4,0).s().p("AEJFiQgHgagKg6QgIg3gKgZQgoAOgOAUIgKAeQgFAOgUACQgaAChHgLIAcAiQAHAJgCAGIgTAUQgVAWgUAcQjAgphVgMQiQgWg6AbIgbAAQAvpFGXjhQAPACAGADQAJAGgEANQgJCNA9CoQAsB2AFAQQAZBOAHBHIFogNQArADjzA6QABBMAmBOQAWAtAtBWQhggZgdhgg");
	this.shape_3.setTransform(51.9,55.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#8F9194","#8C8E91","#76787A","#66686A","#5D5E60","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.012,0.11,0.216,0.333,0.49,0.714,0.886,1],-19.7,0,19.7,0).s().p("AhKB1QhMhcgehzQgYheANhCQAFgbALgHQALgHAMARQANAXBNBdQBgB2AsA5QCvDqhTAkQiWg4hehyg");
	this.shape_4.setTransform(196.9,45.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#8F9194","#8C8E91","#76787A","#66686A","#5D5E60","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.012,0.11,0.216,0.333,0.49,0.714,0.886,1],-68,0,68,0).s().p("ABSGOQhYgGjYgzQi/gthqAEQgGhHgahPQgFgQgsh2Qg+ioAJiMQAEgOgJgFQgFgEgQgBQAOgWArgKIBMgQQBZgXCigIQCkgJBBARIBqAAQA+APDFAcQClAXBSAdQADAQATAGQAIADAfAEQA1AHgHAjQgXgigLAaQgKAXAGA2QAFA3AQApQAUAvAYABIAAAXQiGDligBaQh0BBiSAAIgqgBg");
	this.shape_5.setTransform(116.3,39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rock07, new cjs.Rectangle(0.1,0,216.6,148.8), null);


(lib.rock06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4D").s().p("AjjHFQgKgBgBgHQAagBAxgUQAogRAgAIQAAgWAUgIQgBgOAJgMQAKgQACgHQAzhqAFhxQgFiQAHhuIAAhPQgDhIgbg5QgSgmgyg8IAAgJQAkgEAuAGQAzAIAZgBQALABgBAJIgoAAQgCALAJANQAHALgFAPQAIABACAJQACAGgCANQgCAOAQgIQAPgIABgIQAPAMgUAUQgZAZAAAMQBDguAcgZQApgnANgmQAFAAAFAFIAJAFQgDAYANAvQALAogLASQgRCFgCEOQgUBPghBVQgwCAgkAKQgOAKg7ANQg+AOgYgDQg+AUhCAAIgSgCg");
	this.shape.setTransform(66.3,46.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AgGAIQgegkgRAAQACgJAegEQAXgEgGgXQAUASANAuQATA9AGAMQgXgPglgug");
	this.shape_1.setTransform(27.1,82.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("AgHASQhMghg2gmQAYgcAUAXIAHAIQABgBgDgWQBLAFAyAtIAsAtQAfAfAaAVQhaggg3gYg");
	this.shape_2.setTransform(17.7,84.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgxAwQAUgUgPgMQgBAIgPAIQgPAIACgOQABgNgCgGQgCgIgHgBQAEgPgHgLQgJgNACgLIAoAAQABgJgLgBQAmgZArADQArADAhAdIgJgFQgGgFgFAAQgMAmgqAmQgaAZhDAuQgBgMAZgZg");
	this.shape_3.setTransform(79.4,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgKHHQgJgEAAgHQgagVgfgfIgsguQgzgthLgFQADAWgBABIgHgIQgUgXgYAcQgZg7gJhCQgLhNAPhBQAvgwBQhfQBZhrAogrQCciqCWgxIAAAKQAxA8ASAlQAdA5ACBJIAABPQgGBtAECQQgEByg1BqQgBAGgLAQQgJANABAOQgUAHABAXQghgIgoAQQgxAUgaABQABAHAKACIASABQgTAKgkAEIg/AGQAAgFgKgEgAhVEvQgeAFgDAIQASAAAeAlQAlAuAYAPQgGgMgTg9QgOgvgUgSQAHAYgYADg");
	this.shape_4.setTransform(33.5,47.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rock06, new cjs.Rectangle(0,0,90.3,94.1), null);


(lib.rock05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#434345","#4E4E50","#57585A","#5A5B5D","#5D5E60","#66686A","#76787A","#8C8E91","#8F9194"],[0,0.114,0.286,0.51,0.667,0.784,0.89,0.988,1],48.8,0,-48.8,0).s().p("AHhLQQgIgHgYgmQg9hkgLAAQgeAagkgGQgIgChageQAXgGAIgGQAPgLgMghQggAMhLgLQhGgKgkASQgLAMgbgWQgZgWgMAXQAGAMAPASQAMAPAIAUQgdgXgJAJQgGAHAFAeIALA7QAGAkgGARQgDgDgggeQgQgPAJgQQAFABAPAOQAMAMAHgDIgdhFQgagRhUgcQhEgWgrgsQAMgrgfgnQgagjgngMQgGgqguh0Qgwh8gJgpQgVhOANgpQgDihAjiMQgHgSAOhzQAQh5AUg0QAgAwBBBZQA5BRAoBFQAKgugxhlQg9h1gVg2QAmgBBGByQBWCMAZAXQBlA2BhB6QB+CeAWCvQAEAsALBcQAFBNgRAgQAKAVALACQAGABANAAQgGBbBVAeQAhAMAlgCQAkgBAXgOQAGAfgPAPQgGAHgbAMQgXAKgGAPQgJAVAOApQAqBDAbAaQAGAegGAAIgEgDg");
	this.shape.setTransform(48.8,75.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#434345","#4E4E50","#57585A","#5A5B5D","#5D5E60","#66686A","#76787A","#8C8E91","#8F9194"],[0,0.114,0.286,0.51,0.667,0.784,0.89,0.988,1],10.9,-5.4,-8.6,2.9).s().p("AhVAdQgPgoAJgVQAHgOAWgKQAbgNAHgGQAOgQgFgeQASgFAmAVQAnAVATgEQgrBAgUAiQggA5gQA4QgcgagphEg");
	this.shape_1.setTransform(99,132.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#434345","#4E4E50","#57585A","#5A5B5D","#5D5E60","#66686A","#76787A","#8C8E91","#8F9194"],[0,0.114,0.286,0.51,0.667,0.784,0.89,0.988,1],54.2,0.1,-54.1,0.1).s().p("AmLJhQg8hRgbhrQgShFABgwQAnAMAbAiQAeAogMAqQAsAsBDAXQBVAcAZAQIAeBGQgHADgNgMQgOgOgGgBQgIAPAQAPQAgAeACAEQAGgRgFgkIgMg8QgFgeAHgGQAIgJAeAWQgIgTgNgQQgPgSgGgLQAMgXAaAVQAcAXAKgMQAlgTBFALQBKAKAhgLQAMAhgPAKQgJAGgXAHQBaAeAIABQAkAGAfgZQALAAA9BjQAYAnAIAHQALAKgHglQARg4Agg5QAUgjArhAQgTAEgngVQgngVgSAFQgYANgjACQgmACghgMQhUgfAFhbQgMABgHgBQgLgDgJgVQARgggGhMQgLhdgDgsQgWivh+ieQhhh6hlg1QgZgXhWiMQhGhygmABQAVA1A9B1QAwBmgJAuQgphFg5hRQhAhaghgvQA6iGExCFQBrAvBrBDQBeA7AUAaQBBA/AZA+QAeBMA9BKQACAGBfCjIBgCpQAGBNALBrQAEBZgVBwQgaCOhOBcQhWBniFAQQhIAJhBAAQk1AAiWjMg");
	this.shape_2.setTransform(62.1,81.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rock05, new cjs.Rectangle(0,-0.2,116.3,162.6), null);


(lib.rock04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A8B7E","#8A7B6D","#615343","#483A2A","#3F3120"],[0,0.137,0.522,0.82,1],-50.2,-32.8,51,25.6).s().p("AhKHAQgJg2gxhbQhCh6gKgZQBNg4AAiYQABiWhIhGQg2AShYAKQhOAKhAgBQgMAEgQAAQgQAAgQAHIALAVIgLADQgwhYEThTQBpgfB+gXQBygUBLgDICVAyQBaAeA0AbQADAqAnBHQA0BfAIAUQA2A7AGBaQABAQgJCPQgrALh0BOQg6Aog1AmQhMAkhmAbQhdAYg3AAIgYgBg");
	this.shape.setTransform(61.2,44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9A8B7E","#8A7B6D","#615343","#483A2A","#3F3120"],[0,0.137,0.522,0.82,1],-35.6,-25.5,29.9,12.3).s().p("ACTFwQgCAAgCgDQANgGgagHQgggIgCgEQAJgBANADQANADAEAEQAHgHghgLQglgMADgRIAKgJQAGgGgDgEQgHgOgThbQgPhGgkgeQgLgKgugHQglgHgEgPQgkAFgqgFIhGgHQg3gCgagDQgtgFgTgRQAAgBgBgBQAAAAAAgBQAAAAAAgBQABgBAAAAIAJgDQAwhqgBg5QAigIA+gBQA3AAAvgPQhkAFgigCQg4gCAFgdQAqgdB0gXQCMgcAjgNQgHgIgYADQgkAEgEAAIgFABQgfgDhhAUQhaASgfgIQgCgEgJgJQgJgKgBgDQAQgHAUgDQAWgCAMgEQA7ABBTgMQBVgMA3gTQAzAxCOBLQCKBIAXAaQiEAlhYBEQhXBOg1AmQALAaBCB5QAwBbAKA2IgHACIgDgBg");
	this.shape_1.setTransform(38.3,53.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9A8B7E","#8A7B6D","#615343","#483A2A","#3F3120"],[0,0.137,0.522,0.82,1],-26.8,-17.3,28.3,14.5).s().p("AAGCTQgPgUhIheQg0hEgigeQgNgYgigiQglglgMgTQATARAsAFQAaADA3ACIADAFIABAAIgBgDIBGAIQAqAEAjgFQAEAQAlAGQAuAIAMAKQAkAeAPBGQATBaAHANIgBAAQACAHgHAKQgCARAfAMQAcALgHAHQgDgEgJAAIgQAAQABAFAbAFQAVAEgNAGQhdgjigACg");
	this.shape_2.setTransform(26.4,71.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9A8B7E","#8A7B6D","#615343","#483A2A","#3F3120"],[0,0.137,0.522,0.82,1],-13.4,-8,11.4,6.3).s().p("AiQAOQADgVggABQgFgFAOgEIALgDQAgAIBagSQBggUAeADQAJADAigFQAegEAHAIQgjAOiMAcQh0AWgpAcQAMgYABgLg");
	this.shape_3.setTransform(23,26.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9A8B7E","#8A7B6D","#615343","#483A2A","#3F3120"],[0,0.137,0.522,0.82,1],-13.4,-3.6,5.3,7.2).s().p("Ah7CEQgBgpAfhcQAdhUgLgzQAggBgDAWQgCALgMAYQgFAdA4ADQAhABBkgFQgvAPg3ABQg9ABgiAIQABAigNAlIgdBQQAHAIgNAGg");
	this.shape_4.setTransform(13.2,39.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9A8B7E","#8A7B6D","#615343","#483A2A","#3F3120"],[0,0.137,0.522,0.82,1],-8.7,-5,8.8,5.1).s().p("AgIgBQgnhGgDgqQAJAWAyBdQAnBHADApQgIgUgzhfg");
	this.shape_5.setTransform(105.6,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rock04, new cjs.Rectangle(0,0,116.6,90.2), null);


(lib.rock03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C4A873","#AA863B","#8C6F2D"],[0,0.498,1],-22.3,0,22.4,0).s().p("AjRJQQgGgUALgPQALgRgCgOQgCgTAMgSQAOgVACgJQBHiPAFiZQgFjCAJiUIAAhqQgEhigmhNQgZgzhChQQA4gBAaA0QAPAdAXBCQAmACAQgOQAUgQgIgmQALABACAMQACAIgBATQgDASAUgLQAUgLABgKQAVAQgcAbQggAhABARQBahAAjghQA5g0AQgyQAHAAAHAGQAIAGAFABQgFAgASBAQAPA1gPAYQgWCzgFFuQgOA5h7CmQiACtg1AQQgLAJgVAUQgRAMgWAAIgJgBg");
	this.shape.setTransform(99.4,62.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C4A873","#AA863B","#8C6F2D"],[0,0.498,1],-45.1,0,45.2,0).s().p("AAzJrQhNgBAAgNQgkgcgpgqQgxg0gLgKQhEg9hlgHQAEAegBACIgKgLQgbggghAmQgihQgMhYQgOhoAUhYQA/hABtiCQB4iPA1g6QDUjmDJhBIAAANQBCBQAZAzQAmBNAEBiIAABqQgJCUAFDCQgFCZhHCPQgCAJgOAVQgMASACATQACAOgLARQgLAPAGAUQhTAbhaAAQgdAOhKAAIgFAAg");
	this.shape_1.setTransform(45.2,63.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C4A873","#AA863B","#8C6F2D"],[0,0.498,1],-18.6,0,18.7,0).s().p("AgJAYQhngthJgzQAggmAbAgIAKALQABgCgEgeQBmAHBCA9QALAKAyAzQAoAqAkAcQh6grhJghg");
	this.shape_2.setTransform(23.8,114.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C4A873","#AA863B","#8C6F2D"],[0,0.498,1],-11.3,0,11.4,0).s().p("AAHBRQgWhCgPgdQgag0g4ABIAAgNQAvgFA+AJQBGAKAhgBQAIABACACQAFADgCAIIg1AAQgDAOAMARQAKAPgGATQAIAngUAQQgPAMggAAIgHAAg");
	this.shape_3.setTransform(88.4,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C4A873","#AA863B","#8C6F2D"],[0,0.498,1],-12.6,0,12.7,0).s().p("AhCBBQAcgbgVgQQgBAKgVALQgUAKADgSQABgTgCgHQgCgLgLgCQAGgUgKgPQgMgRADgOIA1AAQACgIgFgDQgCgCgIgBQA0ghA5ADQA7AEAsAoQgFgBgIgHQgHgGgHAAQgQAzg5AzQgiAhhbBAQgBgRAhghg");
	this.shape_4.setTransform(107,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rock03, new cjs.Rectangle(0,0,121.8,125.6), null);


(lib.rock02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#867278","#5C4A56","#433545"],[0,0.498,1],-18.1,0,18.1,0).s().p("AhhB+QgZgLg6gNQAJAAAMgGQANgFAHgBQAVABAegQQAagOABgGQgNgEgLgLIgSgVQgVgaAYgeQASgYAggOQAHgFAKgZQAKgVAPgCIgEAeQgCARAMAGQAEgMAJgQIAQgZQASAGA1AgQAyAgAQANQAMAFAFANQgNAKgLAVQgPAggOATIgIAMQgHAGgJAAQABAHAFgCIAAAMQADAAAEgCIAEgEQAHACgEADIgIAHQgFgCgKgPQgHgJgOAIQAAgDADgDIADgFQgJgDgGAFQgIAFgGgBQgSgBgbAGQgcAGgQAAQACAIgMAGQgNAGgSgCQgEABgJASQgDAIgEAAQgCAAgCgDg");
	this.shape.setTransform(30.8,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#867278","#5C4A56","#433545"],[0,0.498,1],-4.4,0,4.5,0).s().p("AgrAwQAJAAAGgGIAIgMQAOgTAPgfQAKgWANgKQAFAGABAVQACAUAFAFQgOAEgFAHQgGAHAMAGQgJAJgXAHQgeAJgIAEIgBAAQgEAAAAgFg");
	this.shape_1.setTransform(45.7,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#867278","#5C4A56","#433545"],[0,0.498,1],-26,0,26,0).s().p("Ai6CGQhXhJARg8QAIgbAbgVQAhgVAPgNQAMgQBYghQBlgmAvAQIgQAZQgJAQgFAMQgLgGACgRIADgeQgPACgJAVQgLAZgFAFQggAOgTAYQgYAeAWAbIASAUQAKALANAEQAAAGgbAOQgeAQgUgBQgIABgNAFQgMAGgJAAQA6ANAZALQAGAJAGgOQAIgSAEgBQASACAMgGQAMgGgBgIQAPAAAdgGQAbgGASABQAGABAIgFQAGgFAJADIgDAFQgDADAAADQAMgGApgIQAngHAJgIQgMgGAFgHQAFgHAOgEQAZAUgHAcQgFAShEAfQhLAig8AAQgZAAglAIIg+AOQgWAEgTAAQgsAAgcgYg");
	this.shape_2.setTransform(26,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rock02, new cjs.Rectangle(0,0,52.1,31.6), null);


(lib.rock01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-12.5,0,12.5,0).s().p("Ah8CWQAQgTAPglQAPgsAKgUQAhhHBGAAQABgWARgnQAQgkgCgfQAlAKAOAsQAMAogIA4QgIA1gYAvQgYAxgfAUQg4APgZADIgZACQgnAAgOgUg");
	this.shape.setTransform(110.1,105.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-7.2,0.1,7.3,0.1).s().p("AgnBgQgBgVgBgJQgCgRgMgBIAAggQgOgNgCgiIAAhAQBXBHA4BYQgBAcgmAEQgxgBgXABg");
	this.shape_1.setTransform(111.2,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-72,0,72.2,0).s().p("Am9IvQjihigwjbQABgdAdgdQAegeAEgYQAJgNAghKQAYg1AfgTQAZgxAthtQArhrAcgzQBcisCXgoQASgaBAgMQBKgOATgMQAfACAjgQQAngRAXgBQB0gKBGAPQBUATAiA4QBaBmAWCaQgMgBgZgoQgagnAPAAQABgWgCgKQgDgPgMgBQgcACggASQgoAYgMAEQAOgPgEgJQgEgJgWABQgZBigHAtQgQBmAgALIAAggQBJA3AaB7QAUBegHCPQACAfgQAjQgRAngBAXQhHgBghBJQgKAUgPArQgPAmgQATQASAYA8gHQAZgDA5gOQBGg9AYg8QAdhMgbhrQAYgCAtAKQAdAGAegOQgBhHg8jZQg3jJAEgGQAEgFAKgFIASgGQAPBCAnBeQA6CLAGARQBGDCgsCxQhQBdhpAuQiDA5iEgkQgeAThLAcQhIAcgfAVQlOgfifhEgAGom9QAngEABgcQg4hZhYhHIAABAQACAjAOANIAAAgQAMABACARQABAJABAVIAdgBIArABg");
	this.shape_2.setTransform(72,67.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-15.2,0,15.2,0).s().p("AASEzQAIhthBgSQAHiPgUhdQgah8hJg3QALgXAChMQAChHARgWQAMgEAogXQAggTAcgCQALABAEAPQABAKgBAWQgOAAAZAnQAZAoAMABQAJAAADAMIAEAUIgRAHQgLAEgEAFQgEAGA4DJQA7DZABBHQgeAOgdgFQgsgLgZACQAZBhgVBGQgTA7g2A2QA2hCAJhng");
	this.shape_3.setTransform(120.8,70.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-15.2,0,15.2,0).s().p("AAigXQhFgPh0AKQBWgkBhAXQBoAYAQBEQghg3hVgTg");
	this.shape_4.setTransform(100,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9A8B7E","#3F3120"],[0,1],-3.1,0,3.2,0).s().p("AgaAQQAHgtAYhiQAWAAAEAJQAEAIgOAPQgRAXgCBGQgCBLgKAXIAAAgQgfgLAPhlg");
	this.shape_5.setTransform(106.7,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rock01, new cjs.Rectangle(0,-0.1,144.1,133.4), null);


(lib.rockShadow_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqbInQlSgTlVhpQlKhmghk1IDciLIDwhQMAjngFUIAogUIFoBQQAKAKACALQAIAxAAAyIEECMQAAAKgDAJQgHAVgKAUIvACMIC0BjIjICMQAAAUAIADQAvAWAFA3IDICMQo3Bsp1AAQjZAAjggNg");
	this.shape.setTransform(171,56.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rockShadow_01, new cjs.Rectangle(0,0,342.1,112.9), null);


(lib.grass_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7CD61").s().p("AwgTXQAihxBEiGQA2iMFtn4QB6ipB8ikQBtiQACABIBxiOQCJiqCAiTQCKigCoi0QCKiTBMhMQBlhmBehNQBBg2B9hbQhXBvhABLQhKBWhoBrQhQBQiECNQipC2iHCcQiACSiICqIhwCMQgBgChtCPQh7Cjh6CqQlqH1gzCGQhSCbgkBMQg0BngyBwQATiLAdhhg");
	this.shape.setTransform(451.4,304.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7CD61").s().p("ArAV/QAdhwAuiGQCinVBWjoQBBizBPjHIBDiiIBEiiQBXjGBTipQBZi3B7jTQBgilA9hbQBQh4BLhXQA+hIBlhgIh0DKQg+BlhKBzQg/BchdChQh5DQhXC1QhUCnhVDFQgrBhgaA/IhBChQhPDGhBCyQhACwhVDyIhiEaQgwCGgvBpQgmBThCB+QAciQAWhUg");
	this.shape_1.setTransform(526.4,338.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7CD61").s().p("A/PYDIB9huIEbkCQA2gvEPkDQEvkkC2imQDQjAD0jQQB6hnBQhBIDMinQD8jIDlimQD4i2EvjCQD3igCIhMQC7hsCahHQB/g7DDhLQjNCBhaA3QiYBeiwBmQiJBOj0CcQkuDDj1C0QjkCkj7DIIjKCkQhQBCh5BmQjzDPjQDBQiwCgkyEnQkNECg7AyQiQCDibByQhtBKgjASQhXAvhVAHQBPgXBMg6g");
	this.shape_2.setTransform(307.3,162);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B7CD61").s().p("EghlAcDQBRiyCRjeQBUiMDskhQEDlAEEkTQDjj3EVkHQCJiEBchSQgFgCDwjMQEdj2EPjNQEYjYFoj2QECixC6h1QDXiHCzhhQCOhODhhsQjSCUiABXQiqByjTCHQi3BzkCCxQlnD1kXDXQkMDMkcD1IjqDNQhbBRiJCCQkREFjhD2QkFESkBE9QjoEehTCJQiaDqhVCVQhgClhbDHQA8jgBLimg");
	this.shape_3.setTransform(409.3,226.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7CD61").s().p("A+gecQAcjFBejvQAkhYA2hoQBIiNBWiFQCej5Erl8QDQkED5kSQDQjlACAFIDXjbQEHkHD3jdQD+jnFOkSQDSirDHibQDDiXCnhwQB/hVDXiDQiyCbiCBrQiVB7jHCbQjHCbjQCqQlNESj8DlQj2DckGEFIjWDaQhTBVh9CKQj4ERjNECQkmF0ifD5QhUCChHCKQgzBkgkBWQheDqgsC3QgpCmgYDmQgPjsAYirg");
	this.shape_4.setTransform(611.9,310.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B7CD61").s().p("A6xLpQBahfCOhpQB/h0J4lKQDThuDUhpQC6hcABACIC6hZQDkhqDOhXQDihhEDhmQDehXBtgmQCag5CHgiQBcgZCvgkQiMBEhtAvQh1AxijA9QhuAnjbBWQkEBmjfBgQjNBXjjBpIi5BYQgBgCi6BcQjRBnjUBvQp0FJh6BvQiqB9hEA2QhpBThkBfQBTiDBThZg");
	this.shape_5.setTransform(590.8,466.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B7CD61").s().p("Ay6N6QAwhhBShzQA3hPB+iTQCWitCPiLQB+h9CZiMIB7hzIB/hwQCciHCShrQCch2DKh2QCfhcBhgrQB+g6BpgeQBYgZCEgVIjHBjQhxA4hpAxQhhAsiaBZQjGB0iZBzQiQBqiZCEIh9BuIh7ByQiXCMh+B+QiMCIiUCrQh8CQg1BMIiRDEQhIBig4BSQAlh7AqhXg");
	this.shape_6.setTransform(567.8,404);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B7CD61").s().p("AyWR0QA8hoBXh3QBGhfB6iWQCfjFCNiaQCBiRCcihICAiCICAiAQCgicCPiEQERj/EqkHQBuhhBghHQBKg3B9hSQhhBxhABDQhSBWhuBiQl7FSi+CyQiPCEifCbIiAB/Ih+CBQicChiACPQiKCYifDEQh0CPhKBjQhYB2hLBbQg6BHhjBwQA/iGAvhRg");
	this.shape_7.setTransform(565.3,311.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B7CD61").s().p("EgkfAeTQCJi+CijOQDokjCEifQE4l1EHkMQD8kJEykZQCYiMBlhXIECjfQE9kJEmjbQEvjnGNkNQEBiuDkiRQDoiSDDhrQCXhSD5h6QjiCdiQBhQi4B6joCTQj0CdjtChQmNENktDkQkkDak8EJIkBDcQhjBXiYCMQkwEYj6EGQkFEKk2F0QhsCAkAFAQi0DhiICdQiBCViuC2QC/kQBEheg");
	this.shape_8.setTransform(501.5,332.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B7CD61").s().p("A/ve8QBJjAB3jpQBai2C0kjQDol3DkkfQDQkOEHkhQCCiPBXhaQBXhZCLiHQEWkPEEjeQEQjrFikPQD3i7C+iGQDUiVCwhsQCOhVDgh5QjQChh9BdQioB9jPCUQjACGjyC5QliEOkNDpQkEDdkUENQiJCFhXBaQhWBZiCCOQkEEdjOENQjhEcjmF0QiwEbhcC4Qh/D3hRCkQhVCshgDOQBDjwA9igg");
	this.shape_9.setTransform(367.8,314);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B7CD61").s().p("Av5TLQAkhtBAiDQAxhmBeinQB6jWB0iqQBqifCEitQBChVArg3QArg3BFhTQCIinCBiOQCGiXCri0QB8iCBXhWQBlhnBZhLQBFg6B1hWQhVByg9BHQhKBYhkBnQkzE4jODpQiACNiICmQhEBSgrA3QgrA2hBBUQiCCshpCeQhyCnh4DTQhdCjgxBlQg9B8g5BpQgkBDhOCKQAgiJAehbg");
	this.shape_10.setTransform(486.7,461.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B7CD61").s().p("AsHT1QgJhrAciMQAOhVBHi+QBMjKBai5QBOigBjixQAyhXAhg4QCFjhChjsQBqibCKi6QBjiHBHhaQBShpBLhQQA6g8BkhcQhCB0gvBIQg6BahSBqQhJBfhgCBQiKC6hoCaQhlCShpCqQg1BUghA3QghA4gxBWQhiCvhMCeQhZC2hKDHQhFC5gOBPQgdCSgJBUQgKBlAHBzQguh0gIhkg");
	this.shape_11.setTransform(468.1,377.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B7CD61").s().p("EgPdAh2IgYgjQgUgjgQgnQgdhHgLhUQgUicArjNQAOhEAchfQAjh2Ath4QAkhhBMi0QBbjWAehNQBhj0CAkLIBtjZQArhVBIiBQCQkDCMjdQCXjrDIkPQCajRBkh3QB8iYBwhyQBXhYCTiEQh3CjhIBfQhhB/h6CWQhjB4iYDOQjHEMiVDpQiLDbiPEBQhHCAgrBUIhsDXQh/EJhgDyQggBRhZDTQhLCzgjBfQgsB0gjB0QgbBbgOBCQgqDJAACMQABBUANBCQAKAqALAhIAQAnQgBAGAMgGQAKgFAIgIIgPARQgGAFgFAAQgGAAgFgFg");
	this.shape_12.setTransform(542.7,386.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B7CD61").s().p("A0OaQQA6iwA9iVQAkhWAchAQA2h1A6hlQCzksCNjPQCMjTCujpICOi9QDhknEHk4QEflWF0mcQCAiMBwhtQBUhQCTiDQhvCYhOBiQhgB3h/CPQmSHAkAEwQkGE3jgEmIiNC7QisDoiMDRQiHDIi2EwQg4Bgg1B0QgbA9gkBVQhVDPg1BtQhCCJhXCJQAUg2BQjxg");
	this.shape_13.setTransform(190.3,367.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B7CD61").s().p("AwnZlQAZh+BMizQAvhrBxjhQCBkCB7jjQBujMCGjkIBvi5QCukiDMk4QCHjOCqj3QCAi7BShzQBkiNBbhuQBEhRB6iFQhVCYg6BfQhKB3hkCQQkYGOjpFjQh+DAiLDgIhxC3IhuC4QiGDlhsDJQh4DfiDEDQhvDegwBsQhaDUgaBLQguCFgRCNQgSiYAZiIg");
	this.shape_14.setTransform(244.9,378.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BDCD7A").s().p("EgZ7AgzIAAgBIADgfIAEgsQAOhgAWhLQAuikBpjMQA8h6CjkYQDNlvCSjaQCfj1DGkEQBkiDBEhSQgFgBCxjOQDSj3DNjTQDUjdEWj/QDIi4CQh5QCiiLCThpQBmhJDCh8QiRCKhzBoQh6BuitCUQicCFi5CrQkWD/jQDZQjMDTjRD0QivDLAEADQhDBRhiCAQjGEEicDyQiODUjPFxQihEVg9B6QhpDKg9CUQgeBJgbBXIgNAvQAXgTAeglQgPAcgJAOQgPAWgQAPIgKAJg");
	this.shape_15.setTransform(537.8,361.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8EAE64").s().p("A7nfnQB9kDBIiDQBDiADYkuQDUkrDyk0QDIkADrkWQB1iKBOhYQBNhZB5iIQDykPDdjsQFymLIAoEQCqirCSiEQBvhlC8ieQiaC2hoB2QiCCPisCuQoQIWlgF4QlhF3kyFiQgCgBjBDjQjoETjJEAQjtEwjXEtQjWEthAB5QiwE8goBAQhrCviBCQQBTiHBojUg");
	this.shape_16.setTransform(437.3,321);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8EAE64").s().p("EgYwAjyQAvgIASgxQAPg9AOgbIAihQQAUgvAMghQAZhAAmhsIBKjJQAkh/CUkxQCVk2CtkwQCQkBC2kaICXjkQA9hZBgiIQDDkSC6jjQDDj1EBkZQDCjWCAh9QCZibCLh2QBkhUC5iMQiFCThwB2QhvB2imCpQiBCAi/DRQj/EYjCDyQi4DhjBERQhhCGg8BZIiVDiQi0EZiQD+QisEwiUEyQiREsgkB9QhZDthFCEQgRAjgaArIguBLQgJANgMAYIgVAqQgKAXgXAOQgVANgYAAIgDAAg");
	this.shape_17.setTransform(245.3,415);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8EAE64").s().p("AwsWQQAah9A5ibQAnh0BdjGQB1j4B3jFQBti3CLjIQBFhjAug/IB4ifQCSi/CKikQDokYFDleQBqh1BghaQBHhCB/hrQhbCChBBRQhPBlhsB4IjiD6Qi7DUiLCmQiJCjiRC+Ih3CdQgtA/hEBhQiKDHhrC0Qh2DBhyD2QhaDAgpB0IhlEMIhbD1QAOibAWhqg");
	this.shape_18.setTransform(555.2,398.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8EAE64").s().p("EgKOAgTIgBgKQgHgmgDgoQgJiRArijQgDBdAIBXIAGgrQAOhTAgk0QAznjALhkQAaj6A9kVIA4jjQAYhXAsiHQBXkQBjjlQBjjxCTklQBci4BcimQBaikBVh/QBAhhByiZQhMCrg1BrQhCCIhaCkQkMHrieGCQhiDjhWEMQgrCEgYBXIg3DfQg7EQgaD4Ig9JGQghEzgPBWQgGAygZCCIgOBDIAAABIhCACg");
	this.shape_19.setTransform(403.1,331.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8EAE64").s().p("AsLWJQAWhxAyiOQAniLERosIEKoPQgEgCEaoHQEjoQBSiFQBIh9BDhhQA0hKBch0Qg2CHgoBTQgxBqhJB+QhRCHkiIPQkbIEAFACIkIIOQkQIpgmCGIhaDzQgvCAghBfQAHiMAShig");
	this.shape_20.setTransform(174.3,347.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8EAE64").s().p("AtnUnIBCj4QAUhCAQgzQAghdAnhOQBSiwB9jeQBbikB1i5QBhiTgBgBIBjiTQB6i0BxiWQB4ijCYjBQBwiOBNhdQBZhuBShUQA9g+BuhiQhJB4g1BNQhBBehbBwQkAE7jKERQhwCWh6CyIhhCSIhgCTQh0C3haCjQhzDNhaC8QglBJgeBaQgPAvgUBCQgzCpgkBNQgyBthSBXQAuhdAgh7g");
	this.shape_21.setTransform(173.8,321.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8EAE64").s().p("As/XcQAMh7AjiaQAYh2A8jHQBNj+BUjOQBMjABljUIBVirIBaiqQBvjOBsiwQBxi7CYjcQBtigBQhrQBch9BUhdQBChJBwhsQhRCIg0BQQhEBqhaB7QhVBzhmCWQiYDdhvC3QhrCuhuDMIhZCoIhUCqQhkDShLC9QhSDJhMD9Qg6C+gbB6QggCLghCCIhBD1QgBiXAJhog");
	this.shape_22.setTransform(523.9,359.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8EAE64").s().p("AtYWUQADh6AbiYQATh1A3jDQBHj7BVjGQBMi6BqjMQA1hlAkhAQAkhAA6hiQB2jEByilQB3iuCijOQBwiQBZhoQBih0BZhTQBGhDB1hfQhbCAg2BIQhKBihgByQhZBphuCMQigDNh2CsQhwCih1DDQg6BggjA/QgkBAgzBiQhoDKhLC2QhUDEhFD1Qg2C9gTB0IgyEJQgYCAgTByQgQiRAChmg");
	this.shape_23.setTransform(507,446.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8EAE64").s().p("AyfU8QAZh/A7ibQAohzBljHQB/j2CEjBQB6i0CRjBIB6igQAwg+BNhfQCci+CTicQCaiqDPi7QCciOBphQQCAhmBxhDQBZg3CRhGIjJCrQhrBah2BdQhoBRiZCLQjMC5iZCoQiSCaiZC8QhNBdgwA+QgBgCh3CgQiQC/h5CzQiCC/h8DxQhjDDgnBvQhDCtgjBhQgrB2grCDQAKieAVhrg");
	this.shape_24.setTransform(193.3,349.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8EAE64").s().p("A2RcbQAEgNAniJIArihQAbhlAZhVQA9jgA9i1QB1lVCQjoQCEjqC1jyICajEQA9hLBmhxQDKjfDGi1QDKi+ESjaQCviMCfh0QCih3CKhVQBrhBCxhgQiWB/hlBRQh8BkiiB3QiiB4irCIQkODYjJC8QjECyjHDdQhlBvg8BKIiYDAQixDviCDlQiMDkhyFOQg8Cwg/DgQg/DZg0B+QgrBqgZAoQgxBQhKAlQA+gyAghRg");
	this.shape_25.setTransform(323.8,376);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8EAE64").s().p("A4IWPQBAiBB1imQAshADKj9QD4k3B0ibQCdjKC5jYQCZiyACACICfitQDFjRC7irQDGi6EDjFQDLidB8hNQCghpCKhDQBvg3CvhEIkCCsQiQBgiLBbQh8BOjHCaQj/DDjEC4Qi5CpjDDOIieCsQg9BDhdBsQi4DXibDHQh5Cij0ExQjLD/gpA8QiVDSgtBDQhXCBhJCHQAvimA/h+g");
	this.shape_26.setTransform(490.3,371.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9ACC57").s().p("A12WrQAzh8BwiiQBciFH4paQD6kkDuj/QgFgFH7oQQH/oUCTiPQB+h/BuhhQBThLCOhzQhvCQhKBVQheBwh+B/QiXCVn6IOQn6IPAEAFQjtD+j5EkQnxJQheCIQiAC5gwBRQhJB9gxCLQASifA1iCg");
	this.shape_27.setTransform(382.8,435);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9ACC57").s().p("A9+b0QA+h4AXgiQBSiNCJjDIEQl9QDrlPC+jZQDAjiD0jnIDKi8QBRhHCAhsQD/jWDwiwQDuizFGjjQCsh4DUiSQCzh7CchgQBphCDPh4QiiCMh1BcQiKBsi6CBImAEKQlGDkjsCwQjvCwj8DUQiABrhPBHIjIC5QjwDli/DfQi1DQjvFTIkQF8QhlCOiHC1QgJAKhfCCQhBBXhAAyQAyg4Azhjg");
	this.shape_28.setTransform(284.8,438.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9ACC57").s().p("EgmzAiRQABgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgCgHQgFgUAAgJQgIg0AKg+QAQhcA1hzIBkjLQBCiCBBhlQBbieDxk3QETliEUklQD4kIE3kKQCbiFBphRQBnhSClh5QFHjxE0jAQH+lELSl9QDuh+DIhcQCXhGD+hrQjdCJieBaQi4Brj0CBQrpGOnhEyQkyC/lFDuQikB4hmBSQhnBQiaCEQk0EHj1EFQkQEhkSFgQjuEzhaCbQg5BYhMCIQhQCPghA0Qg/BtgYBQQgSA6AAAvQAAAMABAQIAGgFQAigVAPgNQgNAPgeAaIgMANQgMgDAAgBg");
	this.shape_29.setTransform(249.3,282.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9ACC57").s().p("AsdbnQADguAAgUQACgoALhWQARiCAliZQAsizAmiSQBKkTBIjJQBFjHBdjfIBOi0QAfhGA0htQBojbBki3QBnjECRjrQBficBViAQBYiEBRhkQA/hOBuh1QhKCKg0BZQhABuhXCFQkDGPilE2QhkC4hnDXQgzBrgfBGIhNCyQhcDchEDGQhHDFhJETQgmCPgsCzQgsCtgeBnIgSA8QgMAkgGAYQgFAUgNAqQgKAlAIAdQgQgcAAgog");
	this.shape_30.setTransform(437.1,362.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9ACC57").s().p("EgEKAiGIhKiIQhLiGhBjEQg3iWgukCQg7lQALkbQADkJA5knQA3jvgBABQAXhdAviPQBdkaBwjwQBwj3CokvQBSiSB+jVQBkimBdiFQBChdB9imQhPCog/B4QhHCIhnCuQiBDahOCLQinEuhuDzQhwDshbEWQguCLgXBcQABgBg1DrQg3EfgDEDQgLEUA6FIQArD6A2CTQBGDUAwB2QAlBfAPA2QAZBUAEBQQgUhKgnhPg");
	this.shape_31.setTransform(491.7,398.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9ACC57").s().p("AsCWYQhHhqghifQgLg5gDhLQgEhkANhiQAMhtAqh7QAoh3A7hvQBfi1CMi8QB2iTgCgBQgDgEGNnZQFAl9DBjkQBghzBVhaQBBhEBvhsQhOCFg1BPQhGBmhgB2IoBJgQmNHaAEACQACABh0CSQiJC3hbCuQg6BtglBuQgmBygMBnQgMBdADBbQADBHAKAzQAfCXAuBlQAsBgBWBtQh1hTg/hfg");
	this.shape_32.setTransform(153.8,422);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9ACC57").s().p("EgkQAgQQAChLAjiFQA7jZCNjaQAzhQBPhnQBkiDBzh7QDajtFwlQQECjoEzj4QCYh8BkhPQgEgGNTp9QOtq/CVh3QDIicCviBQByhWDmimQi0C0iAB0QibCLjQCjQibB9uoK7QtTJ7AFAGQhjBPiYB7QkyD4j/DnQlmFEjfDzQhxB5hiCAQhLBhgzBQQiEDLhQDQQgyCNgIA0QgTBxAwBfQhBhZADh6g");
	this.shape_33.setTransform(630.7,352.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9ACC57").s().p("EgicAVuID5lbQBRh9D/j7QEQkMEdjhQD3jFEpjJQCUhkBig8QgEgDD+iXQEwi0EciTQHbj5KGkcQDYhfC0hCQCLg0DkhJQjOBtiKBEQipBTjaBhQqGEdnWD3QkbCSkuCzQj6CUABAEQhhA8iSBkQkmDFj1DFQkaDfkMEIQj7D1hPB6QjDD/hIBRQiFCUicBvQB3h5B+iug");
	this.shape_34.setTransform(591.8,395.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9ACC57").s().p("A5DS3QBCiCBqiXQBNh1Cfi7QDIjtC9ixQCuimDUivQBqhWBGg2ICziHQDciiDJiFQFejrHIkJQCbhbCFhAQBkgxCqhIQiQBqhiBBQh4BQidBdQnYEUlKDdQjICEjZChIiyCFQhFA2hoBWQjTCsirCkQi7CvjFDqQiaC1hOB1QjlFDh7C6QA9ilA3hsg");
	this.shape_35.setTransform(484.8,368);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9ACC57").s().p("Am3fMQhTiHhIi9Qg9iRgukFQg7lRAZkbQAPkJBHkiQAVhZAZhUIAUg/QAbhdA1iKQBqkWB9jqQB+j2C8kdQCGjLBqiIQB5ieBshzQBZheCPiBIi8EEQhjCIhwCSQhsCNiBDEQi5EZh8DyQh7DohpEQQg0CIgbBaQABAAhBDnQhFEcgPECQgYETA5FHQAsD7A7COQBGC7A/CJQA3B6BXCjQh8iShFhxg");
	this.shape_36.setTransform(336.4,290.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9ACC57").s().p("AxbZsQABiQAgi4QAUiKBIjrQBbkpBzjpQBnjZCOjsQB4i9gBgBQAwhJBPhvQCdjhCYi6QCejEDUjoQCRifB0h2QB/iCBvhfQBWhKCRhuQhyCKhNBWQhgBth+CCQh/CDiECQQjTDpicDBQiXC5ibDcQhOBugvBJQABAAh3C7QiMDohlDWQhwDmhaEiQhGDlgUCIQgjC+gSB/QgTCEgQCgQgXitABh7g");
	this.shape_37.setTransform(329.1,377);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9ACC57").s().p("EgjOAmBQgIgXgCglQgCgaAEggIAHg5QAPhdAmh5QA9jGB7kNQBfjQChk8QBrjaBWicQB4jaByikQDPkzEekzQCOiaBjhbQBhhfCeiIQE8kPExjSQEzjbGmj5QCFhOF2jSIGzjzQAtgaCThOQA6gfAggfQAFgFAOgQIAHgIIgDgBQgLgCgRADIgeAIIAcgMQARgGAOAAIAIABQAGAAAAAMIgIANQgJAPgIAKQgeAlg3ApIi0B8QizB6j3CNQmKDehvBCQmkD3kxDZQkvDQk4ENQicCGhgBdQhiBaiMCYQkZEujMEvQhyCkh0DTQhUCZhsDbQiaEvhlDbQiMEwg+CVQg2CIgUBCQgUBJgEAjQgDAlAEAUQAGAhAYAQQgbgNgLghg");
	this.shape_38.setTransform(369.5,354.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.grass_mc, new cjs.Rectangle(0,0,862.8,644), null);


(lib.fishShadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhLDeQgugpgKgEQgVgIhygPQhzgPgSgHQhMgagqgSQhNgggMgZIACgJQADgEAFACQBBAUgQgIIgmgPQAAgZA0gcIBZgrQCHg1AGgBIBMgPQAxgJAEgFIBUhgQACAcA8AqQAdAUAfARIgsAQQAiAJDCA7QBrAgAuAAQAugBAXgNQAKgGAgggQANgOAtggQAwgiAGABIACAAQgVBRgjAsQgcAkAAAHIArA9QAsBBAKAZIAAADQgBABgHAAQgUAAgZgPIgygiQhHgyhIAAIgMABIgFABQAHAGACAEQhLAjgnAkIgeAbQgKAAgYgNQgYgOgKAAQgdAIgpAJQhQARg7ACQAWADAGADQAFADAAAJQACAdAeAjQgfgBgpgkg");
	this.shape.setTransform(60.7,25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fishShadow, new cjs.Rectangle(0,0,121.3,51.8), null);


(lib.bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.329)").s().p("ABsCNQgdgegwhCQgxhEgcgdQgwgzg2gYIg8hQQCkgHCBB6QCHB/gMCuQg1gVgvgvg");
	this.shape.setTransform(28.3,-35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.11)").s().p("AnkHlQjJjJAAkcQAAkbDJjJQBfhfB7g0QB/g2CLAAQEcAADJDJQDJDJAAEbQAAEcjJDJQjJDJkcAAQkbAAjJjJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubble, new cjs.Rectangle(-68.5,-68.5,137.1,137.1), null);


(lib.bkgrcolor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C7B676","#BFAF70","#A99C5F","#9C9055","#978C51","#B0A67A","#C3B996","#B2BA7A","#4F5530","#739065","#688457","#4E7450"],[0,0.012,0.047,0.082,0.114,0.247,0.341,0.475,0.635,0.776,0.89,0.969],0,1012.5,0,-1012.5).s().p("Eha3CeNMAAAk8ZMC1vAAAMAAAE8Zg");
	this.shape.setTransform(581.7,1012.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bkgrcolor_mc, new cjs.Rectangle(0,0,1163.3,2025), null);


(lib.sunbeams_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.MKReDs();
	this.instance.parent = this;
	this.instance.setTransform(934.2,1243.9,1,1,0,0,0,1367.5,715.9);
	this.instance.alpha = 0.398;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E7EB9F","#B1D58D","rgba(170,206,137,0.82)","rgba(153,191,131,0.318)","rgba(142,183,127,0)"],[0,0.51,0.667,0.89,1],0,638.3,0,-638.2).s().p("EiWJBjvMAAAjHdMEsTAAAMAAADHdg");
	this.shape.setTransform(963.2,1278.9);

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1741.5,543,1,1,0,0,0,285.9,896.8);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1402.4,735,1,1,0,0,0,313.1,895.3);
	this.instance_2.alpha = 0.398;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1315.4,315,1,1,0,0,0,325.9,894.3);
	this.instance_3.alpha = 0.148;

	this.instance_4 = new lib.Path_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1022.1,498,1,1,0,0,0,325.9,894.2);
	this.instance_4.alpha = 0.398;

	this.instance_5 = new lib.Path_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(782.1,471,1,1,0,0,0,354.1,891.2);
	this.instance_5.alpha = 0.148;

	this.instance_6 = new lib.Path_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(550.9,528,1,1,0,0,0,420.2,879.7);
	this.instance_6.alpha = 0.25;

	this.instance_7 = new lib.Path_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(222,435.2,1,1,0,0,0,490.6,994.2);
	this.instance_7.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sunbeams_mc, new cjs.Rectangle(-433.3,-579.3,2735.2,2539), null);


(lib.bkgrfishGroup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fishShadow
	this.instance = new lib.fishShadow();
	this.instance.parent = this;
	this.instance.setTransform(300.6,40.3,1.543,1.543,0,0,0,60.9,26.1);
	this.instance.alpha = 0.078;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:60.6,regY:25.9,x:299.5,y:39,alpha:0.08},0).wait(1).to({x:298.9,y:38},0).wait(1).to({x:298.3,y:37},0).wait(1).to({x:297.7,y:36},0).wait(1).to({x:297.1,y:35},0).wait(1).to({x:296.5,y:34},0).wait(1).to({x:295.9,y:33},0).wait(1).to({x:295.3,y:32},0).wait(1).to({x:294.7,y:31.1},0).wait(1).to({x:294.1,y:30.1},0).wait(1).to({x:293.5,y:29.1},0).wait(1).to({x:292.9,y:28.1},0).wait(1).to({x:292.3,y:27.1},0).wait(1).to({x:291.7,y:26.1},0).wait(1).to({x:291.1,y:25.1},0).wait(1).to({x:290.5,y:24.1},0).wait(1).to({x:290.3,y:25.2},0).wait(1).to({x:290,y:26.3},0).wait(1).to({x:289.8,y:27.3},0).wait(1).to({x:289.5,y:28.4},0).wait(1).to({x:289.2,y:29.5},0).wait(1).to({x:289,y:30.6},0).wait(1).to({x:288.7,y:31.6},0).wait(1).to({x:288.4,y:32.7},0).wait(1).to({x:288.2,y:33.8},0).wait(1).to({x:287.9,y:34.9},0).wait(1).to({x:287.7,y:36},0).wait(1).to({x:287.4,y:37},0).wait(1).to({x:287.1,y:38.1},0).wait(1).to({x:286.9,y:39.2},0).wait(1).to({x:286.6,y:40.2},0).wait(1).to({x:286.3,y:41.3},0).wait(1).to({x:287.1,y:41.2},0).wait(1).to({x:287.8},0).wait(1).to({x:288.5,y:41.1},0).wait(1).to({x:289.3,y:41},0).wait(1).to({x:290,y:40.9},0).wait(1).to({x:290.7},0).wait(1).to({x:291.4,y:40.8},0).wait(1).to({x:292.2,y:40.7},0).wait(1).to({x:292.9},0).wait(1).to({x:293.6,y:40.6},0).wait(1).to({x:294.3,y:40.5},0).wait(1).to({x:295.1,y:40.4},0).wait(1).to({x:295.8},0).wait(1).to({x:296.5,y:40.3},0).wait(1).to({x:297.2,y:40.2},0).wait(1).to({x:298},0).wait(1).to({x:298.7,y:40.1},0).wait(1).to({x:299.4,y:40},0).wait(1).to({x:300.1},0).wait(1));

	// fishShadow
	this.instance_1 = new lib.fishShadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.6,25.9,1,1,0,0,0,60.6,25.9);
	this.instance_1.alpha = 0.078;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:61.3,y:25.5,alpha:0.08},0).wait(1).to({x:61.9,y:25.1},0).wait(1).to({x:62.6,y:24.7},0).wait(1).to({x:63.2,y:24.2},0).wait(1).to({x:63.9,y:23.8},0).wait(1).to({x:64.5,y:23.4},0).wait(1).to({x:65.1,y:23},0).wait(1).to({x:65.8,y:22.5},0).wait(1).to({x:66.5,y:22.1},0).wait(1).to({x:67.1,y:21.7},0).wait(1).to({x:67.7,y:21.2},0).wait(1).to({x:68.4,y:20.8},0).wait(1).to({x:69.1,y:20.4},0).wait(1).to({x:69.7,y:20},0).wait(1).to({x:70.3,y:19.5},0).wait(1).to({x:71,y:19.1},0).wait(1).to({x:72.4,y:19.5},0).wait(1).to({x:73.8,y:19.8},0).wait(1).to({x:75.3,y:20.2},0).wait(1).to({x:76.7,y:20.5},0).wait(1).to({x:78.1,y:20.9},0).wait(1).to({x:79.5,y:21.2},0).wait(1).to({x:81,y:21.6},0).wait(1).to({x:82.4,y:21.9},0).wait(1).to({x:83.8,y:22.3},0).wait(1).to({x:85.2,y:22.6},0).wait(1).to({x:86.6,y:23},0).wait(1).to({x:88.1,y:23.3},0).wait(1).to({x:89.5,y:23.7},0).wait(1).to({x:90.9,y:24},0).wait(1).to({x:92.3,y:24.4},0).wait(1).to({x:93.8,y:24.7},0).wait(1).to({x:92,y:24.8},0).wait(1).to({x:90.3,y:24.9},0).wait(1).to({x:88.5},0).wait(1).to({x:86.8,y:25},0).wait(1).to({x:85,y:25.1},0).wait(1).to({x:83.3},0).wait(1).to({x:81.5,y:25.2},0).wait(1).to({x:79.8,y:25.3},0).wait(1).to({x:78},0).wait(1).to({x:76.3,y:25.4},0).wait(1).to({x:74.6},0).wait(1).to({x:72.8,y:25.5},0).wait(1).to({x:71.1,y:25.6},0).wait(1).to({x:69.3},0).wait(1).to({x:67.6,y:25.7},0).wait(1).to({x:65.8,y:25.8},0).wait(1).to({x:64.1},0).wait(1).to({x:62.3,y:25.9},0).wait(1).to({x:60.6},0).wait(1));

	// fishShadow
	this.instance_2 = new lib.fishShadow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(372.3,90.2,1,1,0,0,0,60.6,25.9);
	this.instance_2.alpha = 0.078;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:371.5,y:90.3,alpha:0.08},0).wait(1).to({x:370.8,y:90.4},0).wait(1).to({x:370,y:90.5},0).wait(1).to({x:369.3},0).wait(1).to({x:368.6,y:90.6},0).wait(1).to({x:367.8,y:90.7},0).wait(1).to({x:367.1,y:90.8},0).wait(1).to({x:366.4,y:90.9},0).wait(1).to({x:365.6,y:91},0).wait(1).to({x:364.9},0).wait(1).to({x:364.2,y:91.1},0).wait(1).to({x:363.4,y:91.2},0).wait(1).to({x:362.7,y:91.3},0).wait(1).to({x:362,y:91.4},0).wait(1).to({x:361.2,y:91.5},0).wait(1).to({x:360.5,y:91.6},0).wait(1).to({x:361.3,y:90.7},0).wait(1).to({x:362.1,y:89.9},0).wait(1).to({x:362.8,y:89.1},0).wait(1).to({x:363.6,y:88.3},0).wait(1).to({x:364.4,y:87.5},0).wait(1).to({x:365.2,y:86.7},0).wait(1).to({x:365.9,y:85.8},0).wait(1).to({x:366.7,y:85},0).wait(1).to({x:367.5,y:84.2},0).wait(1).to({x:368.3,y:83.4},0).wait(1).to({x:369.1,y:82.6},0).wait(1).to({x:369.8,y:81.8},0).wait(1).to({x:370.6,y:80.9},0).wait(1).to({x:371.4,y:80.1},0).wait(1).to({x:372.2,y:79.3},0).wait(1).to({x:373,y:78.5},0).wait(1).to({x:372.9,y:79.1},0).wait(1).to({y:79.7},0).wait(1).to({x:372.8,y:80.3},0).wait(1).to({y:81},0).wait(1).to({y:81.6},0).wait(1).to({x:372.7,y:82.2},0).wait(1).to({y:82.8},0).wait(1).to({y:83.4},0).wait(1).to({x:372.6,y:84},0).wait(1).to({y:84.7},0).wait(1).to({x:372.5,y:85.3},0).wait(1).to({y:85.9},0).wait(1).to({y:86.5},0).wait(1).to({x:372.4,y:87.1},0).wait(1).to({y:87.7},0).wait(1).to({y:88.4},0).wait(1).to({x:372.3,y:89},0).wait(1).to({y:89.6},0).wait(1).to({y:90.2},0).wait(1));

	// fishShadow
	this.instance_3 = new lib.fishShadow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(176.6,76.8,1,1,0,0,0,85.7,36.6);
	this.instance_3.alpha = 0.078;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:60.6,regY:25.9,x:151.4,y:66.7,alpha:0.08},0).wait(1).to({x:151.3,y:67.2},0).wait(1).to({x:151.2,y:67.8},0).wait(1).to({x:151.1,y:68.3},0).wait(1).to({x:151,y:68.9},0).wait(1).to({x:150.9,y:69.5},0).wait(1).to({x:150.8,y:70},0).wait(1).to({y:70.6},0).wait(1).to({x:150.7,y:71.1},0).wait(1).to({x:150.6,y:71.7},0).wait(1).to({x:150.5,y:72.3},0).wait(1).to({x:150.4,y:72.8},0).wait(1).to({x:150.3,y:73.4},0).wait(1).to({x:150.2,y:73.9},0).wait(1).to({x:150.1,y:74.5},0).wait(1).to({y:75.1},0).wait(1).to({x:148.9,y:75.4},0).wait(1).to({x:147.7,y:75.7},0).wait(1).to({x:146.6,y:76.1},0).wait(1).to({x:145.4,y:76.4},0).wait(1).to({x:144.2,y:76.8},0).wait(1).to({x:143.1,y:77.1},0).wait(1).to({x:141.9,y:77.4},0).wait(1).to({x:140.7,y:77.8},0).wait(1).to({x:139.6,y:78.1},0).wait(1).to({x:138.4,y:78.5},0).wait(1).to({x:137.2,y:78.8},0).wait(1).to({x:136.1,y:79.1},0).wait(1).to({x:134.9,y:79.5},0).wait(1).to({x:133.7,y:79.8},0).wait(1).to({x:132.6,y:80.2},0).wait(1).to({x:131.4,y:80.5},0).wait(1).to({x:132.5,y:79.7},0).wait(1).to({x:133.5,y:79},0).wait(1).to({x:134.6,y:78.2},0).wait(1).to({x:135.6,y:77.5},0).wait(1).to({x:136.7,y:76.7},0).wait(1).to({x:137.7,y:76},0).wait(1).to({x:138.8,y:75.2},0).wait(1).to({x:139.8,y:74.4},0).wait(1).to({x:140.9,y:73.7},0).wait(1).to({x:142,y:72.9},0).wait(1).to({x:143,y:72.2},0).wait(1).to({x:144.1,y:71.4},0).wait(1).to({x:145.1,y:70.6},0).wait(1).to({x:146.2,y:69.9},0).wait(1).to({x:147.2,y:69.1},0).wait(1).to({x:148.3,y:68.4},0).wait(1).to({x:149.3,y:67.6},0).wait(1).to({x:150.4,y:66.9},0).wait(1).to({x:151.5,y:66.1},0).wait(1));

	// fishShadow
	this.instance_4 = new lib.fishShadow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(262.8,142.4,1,1,0,0,0,64.8,27.6);
	this.instance_4.alpha = 0.078;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:60.6,regY:25.9,x:257.6,y:140.3,alpha:0.08},0).wait(1).to({x:256.6,y:140},0).wait(1).to({x:255.6,y:139.6},0).wait(1).to({x:254.6,y:139.3},0).wait(1).to({x:253.6,y:138.9},0).wait(1).to({x:252.6,y:138.6},0).wait(1).to({x:251.6,y:138.2},0).wait(1).to({x:250.6,y:137.9},0).wait(1).to({x:249.6,y:137.5},0).wait(1).to({x:248.6,y:137.2},0).wait(1).to({x:247.6,y:136.8},0).wait(1).to({x:246.6,y:136.5},0).wait(1).to({x:245.6,y:136.1},0).wait(1).to({x:244.6,y:135.8},0).wait(1).to({x:243.6,y:135.4},0).wait(1).to({x:242.7,y:135.1},0).wait(1).to({x:242.9,y:134.1},0).wait(1).to({x:243.2,y:133.1},0).wait(1).to({x:243.4,y:132.1},0).wait(1).to({x:243.7,y:131.1},0).wait(1).to({x:244,y:130.1},0).wait(1).to({x:244.2,y:129.2},0).wait(1).to({x:244.5,y:128.2},0).wait(1).to({x:244.8,y:127.2},0).wait(1).to({x:245,y:126.2},0).wait(1).to({x:245.3,y:125.2},0).wait(1).to({x:245.5,y:124.2},0).wait(1).to({x:245.8,y:123.2},0).wait(1).to({x:246.1,y:122.2},0).wait(1).to({x:246.3,y:121.2},0).wait(1).to({x:246.6,y:120.2},0).wait(1).to({x:246.9,y:119.3},0).wait(1).to({x:247.5,y:120.4},0).wait(1).to({x:248.1,y:121.5},0).wait(1).to({x:248.7,y:122.6},0).wait(1).to({x:249.3,y:123.8},0).wait(1).to({x:249.9,y:124.9},0).wait(1).to({x:250.5,y:126},0).wait(1).to({x:251.2,y:127.1},0).wait(1).to({x:251.8,y:128.3},0).wait(1).to({x:252.4,y:129.4},0).wait(1).to({x:253,y:130.5},0).wait(1).to({x:253.6,y:131.6},0).wait(1).to({x:254.2,y:132.8},0).wait(1).to({x:254.9,y:133.9},0).wait(1).to({x:255.5,y:135},0).wait(1).to({x:256.1,y:136.1},0).wait(1).to({x:256.7,y:137.3},0).wait(1).to({x:257.3,y:138.4},0).wait(1).to({x:257.9,y:139.5},0).wait(1).to({x:258.6,y:140.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,433,166.5);


(lib.BKGRbubbles_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubble
	this.bubble = new lib.bubble();
	this.bubble.parent = this;
	this.bubble.setTransform(28,157.5,0.088,0.076);

	this.timeline.addTween(cjs.Tween.get(this.bubble).wait(1).to({x:32.8},0).wait(1).to({x:37.7},0).wait(1).to({x:42.5},0).wait(1).to({x:47.4},0).wait(1).to({x:44.1},0).wait(1).to({x:40.9},0).wait(1).to({x:37.7},0).wait(1).to({x:34.5},0).wait(1).to({x:31.2},0).wait(1).to({x:28},0).wait(1));

	// bubble
	this.bubble_1 = new lib.bubble();
	this.bubble_1.parent = this;
	this.bubble_1.setTransform(55.2,320.5,0.067,0.067);

	this.timeline.addTween(cjs.Tween.get(this.bubble_1).wait(1).to({x:58.4},0).wait(1).to({x:61.5},0).wait(1).to({x:64.7},0).wait(1).to({x:67.8},0).wait(1).to({x:71},0).wait(1).to({x:74.2},0).wait(1).to({x:69.4},0).wait(1).to({x:64.7},0).wait(1).to({x:59.9},0).wait(1).to({x:55.2},0).wait(1));

	// bubble
	this.bubble_2 = new lib.bubble();
	this.bubble_2.parent = this;
	this.bubble_2.setTransform(78.3,285,0.067,0.067);

	this.timeline.addTween(cjs.Tween.get(this.bubble_2).wait(1).to({x:72.5},0).wait(1).to({x:66.7},0).wait(1).to({x:61},0).wait(1).to({x:55.2},0).wait(1).to({x:56.7},0).wait(1).to({x:58.3},0).wait(1).to({x:59.8},0).wait(1).to({x:61.3},0).wait(1).to({x:62.9},0).wait(1).to({x:64.4},0).wait(1));

	// bubble
	this.bubble_3 = new lib.bubble();
	this.bubble_3.parent = this;
	this.bubble_3.setTransform(65.4,59.8,0.111,0.111);

	this.timeline.addTween(cjs.Tween.get(this.bubble_3).wait(1).to({x:59.8,y:59.4},0).wait(1).to({x:54.2,y:59.1},0).wait(1).to({x:48.6,y:58.7},0).wait(1).to({x:43,y:58.4},0).wait(1).to({x:48.3,y:58.6},0).wait(1).to({x:53.7,y:58.8},0).wait(1).to({x:59.1,y:59.1},0).wait(1).to({x:64.5,y:59.3},0).wait(1).to({x:69.8,y:59.6},0).wait(1).to({x:75.2,y:59.8},0).wait(1));

	// bubble
	this.bubble_4 = new lib.bubble();
	this.bubble_4.parent = this;
	this.bubble_4.setTransform(25.4,25.4,0.369,0.369);

	this.timeline.addTween(cjs.Tween.get(this.bubble_4).wait(1).to({x:30},0).wait(1).to({x:34.7},0).wait(1).to({x:39.4},0).wait(1).to({x:44},0).wait(1).to({x:48.7},0).wait(1).to({x:53.4},0).wait(1).to({x:40.7,y:25.7},0).wait(1).to({x:28,y:26.1},0).wait(1).to({x:15.3,y:26.4},0).wait(1).to({x:2.7,y:26.8},0).wait(1));

	// bubble
	this.bubble_5 = new lib.bubble();
	this.bubble_5.parent = this;
	this.bubble_5.setTransform(48.8,211.1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_5).wait(1).to({x:63.9},0).wait(1).to({x:79},0).wait(1).to({x:94.2},0).wait(1).to({x:83},0).wait(1).to({x:71.9},0).wait(1).to({x:60.7},0).wait(1).to({x:49.6},0).wait(1).to({x:38.4},0).wait(1).to({x:27.3},0).wait(1).to({x:16.1},0).wait(1));

	// bubble
	this.bubble_6 = new lib.bubble();
	this.bubble_6.parent = this;
	this.bubble_6.setTransform(112.7,147.6,0.345,0.345);

	this.timeline.addTween(cjs.Tween.get(this.bubble_6).wait(1).to({x:107.8,y:147},0).wait(1).to({x:102.9,y:146.4},0).wait(1).to({x:98,y:145.7},0).wait(1).to({x:93.1,y:145.1},0).wait(1).to({x:88.2,y:144.5},0).wait(1).to({x:83.4,y:143.9},0).wait(1).to({x:85.3,y:143.8},0).wait(1).to({x:87.3},0).wait(1).to({x:89.2},0).wait(1).to({x:91.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,0,156.1,325.1);


(lib.bkgr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bkgr color
	this.instance = new lib.bkgrcolor_mc();
	this.instance.parent = this;
	this.instance.setTransform(581.6,1012.6,1,1,0,0,0,581.6,1012.5);
	this.instance.alpha = 0.43;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},229).wait(1));

	// sun beams copy
	this.instance_1 = new lib.sunbeams_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93.1,1012.5,1,1,0,0,0,574.5,1012.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:934.2,regY:690.2,x:452,y:690.2,alpha:0.995},0).wait(1).to({x:451.2,alpha:0.991},0).wait(1).to({x:450.3,alpha:0.986},0).wait(1).to({x:449.5,alpha:0.982},0).wait(1).to({x:448.6,alpha:0.977},0).wait(1).to({x:447.8,alpha:0.973},0).wait(1).to({x:447,alpha:0.968},0).wait(1).to({x:446.1,alpha:0.963},0).wait(1).to({x:445.3,alpha:0.959},0).wait(1).to({x:444.4,alpha:0.954},0).wait(1).to({x:443.6,alpha:0.95},0).wait(1).to({x:442.8,alpha:0.945},0).wait(1).to({x:441.9,alpha:0.941},0).wait(1).to({x:441.1,alpha:0.936},0).wait(1).to({x:440.2,alpha:0.932},0).wait(1).to({x:439.4,alpha:0.927},0).wait(1).to({x:438.6,alpha:0.922},0).wait(1).to({x:437.7,alpha:0.918},0).wait(1).to({x:436.9,alpha:0.913},0).wait(1).to({x:436,alpha:0.909},0).wait(1).to({x:435.2,alpha:0.904},0).wait(1).to({x:434.4,alpha:0.9},0).wait(1).to({x:433.5,alpha:0.895},0).wait(1).to({x:432.7,alpha:0.89},0).wait(1).to({x:431.8,alpha:0.886},0).wait(1).to({x:431,alpha:0.881},0).wait(1).to({x:430.2,alpha:0.877},0).wait(1).to({x:429.3,alpha:0.872},0).wait(1).to({x:428.5,alpha:0.868},0).wait(1).to({x:427.6,alpha:0.863},0).wait(1).to({x:426.8,alpha:0.858},0).wait(1).to({x:426,alpha:0.854},0).wait(1).to({x:425.1,alpha:0.849},0).wait(1).to({x:424.3,alpha:0.845},0).wait(1).to({x:423.4,alpha:0.84},0).wait(1).to({x:422.6,alpha:0.836},0).wait(1).to({x:421.8,alpha:0.831},0).wait(1).to({x:420.9,alpha:0.827},0).wait(1).to({x:420.1,alpha:0.822},0).wait(1).to({x:419.2,alpha:0.817},0).wait(1).to({x:418.4,alpha:0.813},0).wait(1).to({x:417.6,alpha:0.808},0).wait(1).to({x:416.7,alpha:0.804},0).wait(1).to({x:415.9,alpha:0.799},0).wait(1).to({x:415,alpha:0.795},0).wait(1).to({x:414.2,alpha:0.79},0).wait(1).to({x:414.8,alpha:0.788},0).wait(1).to({x:415.5,alpha:0.787},0).wait(1).to({x:416.1,alpha:0.785},0).wait(1).to({x:416.7,alpha:0.783},0).wait(1).to({x:417.3,alpha:0.781},0).wait(1).to({x:418,alpha:0.78},0).wait(1).to({x:418.6,alpha:0.778},0).wait(1).to({x:419.2,alpha:0.776},0).wait(1).to({x:419.8,alpha:0.774},0).wait(1).to({x:420.5,alpha:0.773},0).wait(1).to({x:421.1,alpha:0.771},0).wait(1).to({x:421.7,alpha:0.769},0).wait(1).to({x:422.4,alpha:0.767},0).wait(1).to({x:423,alpha:0.766},0).wait(1).to({x:423.6,alpha:0.764},0).wait(1).to({x:424.2,alpha:0.762},0).wait(1).to({x:424.9,alpha:0.76},0).wait(1).to({x:425.5,alpha:0.759},0).wait(1).to({x:426.1,alpha:0.757},0).wait(1).to({x:426.8,alpha:0.755},0).wait(1).to({x:427.4,alpha:0.754},0).wait(1).to({x:428,alpha:0.752},0).wait(1).to({x:428.6,alpha:0.75},0).wait(1).to({x:429.3,alpha:0.748},0).wait(1).to({x:429.9,alpha:0.747},0).wait(1).to({x:430.5,alpha:0.745},0).wait(1).to({x:431.1,alpha:0.743},0).wait(1).to({x:431.8,alpha:0.741},0).wait(1).to({x:432.4,alpha:0.74},0).wait(1).to({x:433,alpha:0.738},0).wait(1).to({x:433.7,alpha:0.736},0).wait(1).to({x:434.3,alpha:0.734},0).wait(1).to({x:434.9,alpha:0.733},0).wait(1).to({x:435.5,alpha:0.731},0).wait(1).to({x:436.2,alpha:0.729},0).wait(1).to({x:436.8,alpha:0.728},0).wait(1).to({x:437.4,alpha:0.726},0).wait(1).to({x:438,alpha:0.724},0).wait(1).to({x:438.7,alpha:0.722},0).wait(1).to({x:439.3,alpha:0.721},0).wait(1).to({x:439.9,alpha:0.719},0).wait(1).to({x:440.6,alpha:0.717},0).wait(1).to({x:441.2,alpha:0.715},0).wait(1).to({x:441.8,alpha:0.714},0).wait(1).to({x:442.4,alpha:0.712},0).wait(1).to({x:443.1,alpha:0.71},0).wait(1).to({x:443.7,alpha:0.708},0).wait(1).to({x:444.3,alpha:0.707},0).wait(1).to({x:445,alpha:0.705},0).wait(1).to({x:445.6,alpha:0.703},0).wait(1).to({x:446.2,alpha:0.701},0).wait(1).to({x:446.8,alpha:0.7},0).wait(1).to({x:447.5,alpha:0.698},0).wait(1).to({x:448.1,alpha:0.696},0).wait(1).to({x:448.7,alpha:0.695},0).wait(1).to({x:449.3,alpha:0.693},0).wait(1).to({x:450,alpha:0.691},0).wait(1).to({x:450.6,alpha:0.689},0).wait(1).to({x:451.2,alpha:0.688},0).wait(1).to({x:451.9,alpha:0.686},0).wait(1).to({x:452.5,alpha:0.684},0).wait(1).to({x:453.1,alpha:0.682},0).wait(1).to({x:453.7,alpha:0.681},0).wait(1).to({x:454.4,alpha:0.679},0).wait(1).to({x:455,alpha:0.677},0).wait(1).to({x:455.6,alpha:0.675},0).wait(1).to({x:456.2,alpha:0.674},0).wait(1).to({x:456.9,alpha:0.672},0).wait(1).to({x:457.5,alpha:0.67},0).wait(1).to({x:458.1,alpha:0.668},0).wait(1).to({x:458.8,alpha:0.667},0).wait(1).to({x:459.4,alpha:0.665},0).wait(1).to({x:460,alpha:0.663},0).wait(1).to({x:460.6,alpha:0.662},0).wait(1).to({x:461.3,alpha:0.66},0).wait(1).to({x:461.9,alpha:0.658},0).wait(1).to({x:462.5,alpha:0.656},0).wait(1).to({x:463.2,alpha:0.655},0).wait(1).to({x:463.8,alpha:0.653},0).wait(1).to({x:464.4,alpha:0.651},0).wait(1).to({x:465,alpha:0.649},0).wait(1).to({x:465.7,alpha:0.648},0).wait(1).to({x:466.3,alpha:0.646},0).wait(1).to({x:466.9,alpha:0.644},0).wait(1).to({x:467.5,alpha:0.642},0).wait(1).to({x:468.2,alpha:0.641},0).wait(1).to({x:468.8,alpha:0.639},0).wait(1).to({x:469.4,alpha:0.637},0).wait(1).to({x:470.1,alpha:0.635},0).wait(1).to({x:470.7,alpha:0.634},0).wait(1).to({x:471.3,alpha:0.632},0).wait(1).to({x:471.9,alpha:0.63},0).wait(1).to({x:472.6,alpha:0.629},0).wait(1).to({x:473.2,alpha:0.627},0).wait(1).to({x:473.8,alpha:0.625},0).wait(1).to({x:474.4,alpha:0.623},0).wait(1).to({x:475.1,alpha:0.622},0).wait(1).to({x:475.7,alpha:0.62},0).wait(1).to({x:476.3,alpha:0.618},0).wait(1).to({x:477,alpha:0.616},0).wait(1).to({x:477.6,alpha:0.615},0).wait(1).to({x:478.2,alpha:0.613},0).wait(1).to({x:478.8,alpha:0.611},0).wait(1).to({x:479.5,alpha:0.609},0).wait(1).to({x:480.1,alpha:0.608},0).wait(1).to({x:480.7,alpha:0.606},0).wait(1).to({x:481.4,alpha:0.604},0).wait(1).to({x:482,alpha:0.603},0).wait(1).to({x:482.6,alpha:0.601},0).wait(1).to({x:483.2,alpha:0.599},0).wait(1).to({x:483.9,alpha:0.597},0).wait(1).to({x:484.5,alpha:0.596},0).wait(1).to({x:485.1,alpha:0.594},0).wait(1).to({x:485.7,alpha:0.592},0).wait(1).to({x:486.4,alpha:0.59},0).wait(1).to({x:487,alpha:0.589},0).wait(1).to({x:487.6,alpha:0.587},0).wait(1).to({x:488.3,alpha:0.585},0).wait(1).to({x:488.9,alpha:0.583},0).wait(1).to({x:489.5,alpha:0.582},0).wait(1).to({x:490.1,alpha:0.58},0).wait(1).to({x:490.8,alpha:0.578},0).wait(1).to({x:491.4,alpha:0.576},0).wait(1).to({x:492,alpha:0.575},0).wait(1).to({x:492.6,alpha:0.573},0).wait(1).to({x:493.3,alpha:0.571},0).wait(1).to({x:493.9,alpha:0.57},0).wait(1).to({x:494.5,alpha:0.568},0).wait(1).to({x:495.2,alpha:0.566},0).wait(1).to({x:495.8,alpha:0.564},0).wait(1).to({x:496.4,alpha:0.563},0).wait(1).to({x:497,alpha:0.561},0).wait(1).to({x:497.7,alpha:0.559},0).wait(1).to({x:498.3,alpha:0.557},0).wait(1).to({x:498.9,alpha:0.556},0).wait(1).to({x:499.6,alpha:0.554},0).wait(1).to({x:500.2,alpha:0.552},0).wait(1).to({x:500.8,alpha:0.55},0).wait(1).to({x:501.4,alpha:0.549},0).wait(1).to({x:502.1,alpha:0.547},0).wait(1).to({x:502.7,alpha:0.545},0).wait(1).to({x:503.3,alpha:0.543},0).wait(1).to({x:503.9,alpha:0.542},0).wait(1).to({x:504.6,alpha:0.54},0).wait(1).to({x:503.2,alpha:0.552},0).wait(1).to({x:501.9,alpha:0.564},0).wait(1).to({x:500.6,alpha:0.575},0).wait(1).to({x:499.3,alpha:0.587},0).wait(1).to({x:497.9,alpha:0.599},0).wait(1).to({x:496.6,alpha:0.611},0).wait(1).to({x:495.3,alpha:0.623},0).wait(1).to({x:494,alpha:0.634},0).wait(1).to({x:492.6,alpha:0.646},0).wait(1).to({x:491.3,alpha:0.658},0).wait(1).to({x:490,alpha:0.67},0).wait(1).to({x:488.6,alpha:0.682},0).wait(1).to({x:487.3,alpha:0.693},0).wait(1).to({x:486,alpha:0.705},0).wait(1).to({x:484.7,alpha:0.717},0).wait(1).to({x:483.3,alpha:0.729},0).wait(1).to({x:482,alpha:0.741},0).wait(1).to({x:480.7,alpha:0.752},0).wait(1).to({x:479.4,alpha:0.764},0).wait(1).to({x:478,alpha:0.776},0).wait(1).to({x:476.7,alpha:0.788},0).wait(1).to({x:475.4,alpha:0.799},0).wait(1).to({x:474,alpha:0.811},0).wait(1).to({x:472.7,alpha:0.823},0).wait(1).to({x:471.4,alpha:0.835},0).wait(1).to({x:470.1,alpha:0.847},0).wait(1).to({x:468.7,alpha:0.858},0).wait(1).to({x:467.4,alpha:0.87},0).wait(1).to({x:466.1,alpha:0.882},0).wait(1).to({x:464.7,alpha:0.894},0).wait(1).to({x:463.4,alpha:0.906},0).wait(1).to({x:462.1,alpha:0.917},0).wait(1).to({x:460.8,alpha:0.929},0).wait(1).to({x:459.4,alpha:0.941},0).wait(1).to({x:458.1,alpha:0.953},0).wait(1).to({x:456.8,alpha:0.965},0).wait(1).to({x:455.5,alpha:0.976},0).wait(1).to({x:454.1,alpha:0.988},0).to({_off:true},1).wait(1));

	// sun beams
	this.instance_2 = new lib.LCsunbeams_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(299.3,1012.5,1,1,0,0,0,574.5,1012.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},229).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-914.7,-579.3,2735.2,2604.3);


(lib.BackgroundLoop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rocks-foreground
	this.rock11 = new lib.rock09();
	this.rock11.parent = this;
	this.rock11.setTransform(214.3,1248.9,1.048,1.048,0,0,0,-3.1,-8.1);

	this.rock12 = new lib.rock08();
	this.rock12.parent = this;
	this.rock12.setTransform(256.1,1170,1.408,1.408,0,0,0,-3.2,-8.1);

	this.rock11_1 = new lib.rock09();
	this.rock11_1.parent = this;
	this.rock11_1.setTransform(1021.1,1967.3,1.331,1.331,0,0,0,-3.1,-8.1);

	this.rock10 = new lib.rock10_mc();
	this.rock10.parent = this;
	this.rock10.setTransform(1050.4,1553.8,1.331,1.331,22.2);

	this.rock12_1 = new lib.rock08();
	this.rock12_1.parent = this;
	this.rock12_1.setTransform(868.5,1845,1.787,1.787,0,0,0,-3.2,-8.1);

	this.rock05 = new lib.rock02();
	this.rock05.parent = this;
	this.rock05.setTransform(169.6,1824.6,1.993,1.993,0,0,0,-3.1,-8.2);

	this.rock08 = new lib.rock04();
	this.rock08.parent = this;
	this.rock08.setTransform(9.8,1789.2,1.331,1.331,0,0,0,-3.1,-8.2);

	this.rock09 = new lib.rock03();
	this.rock09.parent = this;
	this.rock09.setTransform(1275.9,1796.1,1.816,1.816,0,0,180,-3.1,-8.2);

	this.rock = new lib.rock07();
	this.rock.parent = this;
	this.rock.setTransform(845.5,1409.8,1,1,0,0,0,-3.1,-8.2);

	this.rock02 = new lib.rock01();
	this.rock02.parent = this;
	this.rock02.setTransform(1014.2,1372,1.331,1.331,0,0,0,-3.1,-8.2);

	this.rock03 = new lib.rock06();
	this.rock03.parent = this;
	this.rock03.setTransform(62.6,1708.9,1.908,1.908,0,0,0,-3.1,-8.1);

	this.rock04 = new lib.rock05();
	this.rock04.parent = this;
	this.rock04.setTransform(-53.5,1652.7,1.331,1.331,0,0,0,-3,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rock04},{t:this.rock03},{t:this.rock02},{t:this.rock},{t:this.rock09},{t:this.rock08},{t:this.rock05},{t:this.rock12_1},{t:this.rock10},{t:this.rock11_1},{t:this.rock12},{t:this.rock11}]}).wait(229));

	// grass copy 2
	this.instance = new lib.grass_mc();
	this.instance.parent = this;
	this.instance.setTransform(189.5,858.2,0.386,0.385,0,-6.8,0,238.2,583.6);
	this.instance.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:431.4,regY:322,skewX:-6.7,x:252.3,y:758.1},0).wait(1).to({skewX:-6.6,x:252.5,y:758},0).wait(1).to({skewX:-6.5,x:252.7},0).wait(1).to({skewX:-6.3,x:252.8},0).wait(1).to({skewX:-6.2,x:253},0).wait(1).to({skewX:-6.1,x:253.2},0).wait(1).to({skewX:-6,x:253.4,y:757.9},0).wait(1).to({skewX:-5.9,x:253.6},0).wait(1).to({skewX:-5.8,x:253.8},0).wait(1).to({skewX:-5.7,x:253.9},0).wait(1).to({skewX:-5.6,x:254.1,y:757.8},0).wait(1).to({skewX:-5.5,x:254.3},0).wait(1).to({skewX:-5.4,x:254.5},0).wait(1).to({skewX:-5.3,x:254.7},0).wait(1).to({skewX:-5.2,x:254.8,y:757.7},0).wait(1).to({skewX:-5.1,x:255.1,y:757.8},0).wait(1).to({skewX:-5,x:255.2,y:757.7},0).wait(1).to({skewX:-4.9,x:255.4},0).wait(1).to({skewX:-4.8,x:255.6},0).wait(1).to({skewX:-4.7,x:255.8,y:757.6},0).wait(1).to({skewX:-4.6,x:256,y:757.7},0).wait(1).to({skewX:-4.5,x:256.2,y:757.6},0).wait(1).to({skewX:-4.3,x:256.3},0).wait(1).to({skewX:-4.2,x:256.5},0).wait(1).to({skewX:-4.1,x:256.7},0).wait(1).to({skewX:-4,x:256.9},0).wait(1).to({skewX:-3.9,x:257.1,y:757.5},0).wait(1).to({skewX:-3.8,x:257.2},0).wait(1).to({skewX:-3.7,x:257.5},0).wait(1).to({skewX:-3.6,x:257.6},0).wait(1).to({skewX:-3.5,x:257.8},0).wait(1).to({skewX:-3.4,x:258},0).wait(1).to({skewX:-3.3,x:258.2},0).wait(1).to({skewX:-3.2,x:258.4,y:757.4},0).wait(1).to({skewX:-3.1,x:258.6,y:757.5},0).wait(1).to({skewX:-3,x:258.7,y:757.4},0).wait(1).to({skewX:-2.9,x:259},0).wait(1).to({skewX:-2.8,x:259.1},0).wait(1).to({skewX:-2.7,x:259.3},0).wait(1).to({skewX:-2.6,x:259.4},0).wait(1).to({scaleY:0.39},0).wait(1).to({x:259.5},0).wait(1).to({skewX:-2.5,x:259.6},0).wait(1).to({y:757.3},0).wait(1).to({skewX:-2.4,x:259.7,y:757.4},0).wait(1).to({x:259.8},0).wait(2).to({skewX:-2.3,x:259.9},0).wait(1).to({y:757.3},0).wait(1).to({x:260},0).wait(1).to({skewX:-2.2,x:260.1},0).wait(2).to({skewX:-2.1,x:260.2,y:757.4},0).wait(1).to({x:260.3,y:757.3},0).wait(1).to({x:260.4},0).wait(1).to({skewX:-2},0).wait(1).to({x:260.5},0).wait(2).to({skewX:-1.9,x:260.6},0).wait(1).to({x:260.7},0).wait(1).to({skewX:-1.8},0).wait(1).to({x:260.8},0).wait(1).to({x:260.9},0).wait(1).to({skewX:-1.7},0).wait(1).to({x:261},0).wait(1).to({x:261.1},0).wait(1).to({skewX:-1.6},0).wait(1).to({x:261.2},0).wait(1).to({skewX:-1.5,x:261.3},0).wait(1).to({y:757.2},0).wait(1).to({x:261.4},0).wait(1).to({skewX:-1.4},0).wait(1).to({x:261.5},0).wait(1).to({skewX:-1.5,x:261.3},0).wait(1).to({skewX:-1.6,x:261.1},0).wait(1).to({skewX:-1.7,x:260.9},0).wait(1).to({skewX:-1.8,x:260.7},0).wait(1).to({skewX:-2,x:260.6,y:757.3},0).wait(1).to({skewX:-2.1,x:260.4},0).wait(1).to({skewX:-2.2,x:260.1},0).wait(1).to({skewX:-2.3,x:259.9},0).wait(1).to({skewX:-2.4,x:259.8},0).wait(1).to({skewX:-2.5,x:259.6},0).wait(1).to({skewX:-2.6,x:259.4},0).wait(1).to({skewX:-2.7,x:259.2},0).wait(1).to({skewX:-2.8,x:259},0).wait(1).to({skewX:-3,x:258.8},0).wait(1).to({skewX:-3.1,x:258.6,y:757.4},0).wait(1).to({skewX:-3.2,x:258.4,y:757.3},0).wait(1).to({skewX:-3.3,x:258.2},0).wait(1).to({skewX:-3.4,x:258,y:757.4},0).wait(1).to({skewX:-3.5,x:257.8},0).wait(1).to({skewX:-3.6,x:257.6},0).wait(1).to({skewX:-3.7,x:257.4},0).wait(1).to({skewX:-3.8,x:257.2},0).wait(1).to({skewX:-4,x:257},0).wait(1).to({skewX:-4.1,x:256.8},0).wait(1).to({skewX:-4.2,x:256.6},0).wait(1).to({skewX:-4.3,x:256.5,y:757.5},0).wait(1).to({skewX:-4.4,x:256.2,y:757.4},0).wait(1).to({skewX:-4.5,x:256,y:757.5},0).wait(1).to({skewX:-4.6,x:255.9},0).wait(1).to({skewX:-4.7,x:255.7},0).wait(1).to({skewX:-4.8,x:255.5},0).wait(1).to({skewX:-5,x:255.3},0).wait(1).to({skewX:-5.1,x:255.1},0).wait(1).to({skewX:-5.2,x:254.9,y:757.6},0).wait(1).to({skewX:-5.3,x:254.7},0).wait(1).to({skewX:-5.4,x:254.5},0).wait(1).to({skewX:-5.5,x:254.3},0).wait(1).to({skewX:-5.6,x:254.1},0).wait(1).to({skewX:-5.7,x:253.9},0).wait(1).to({skewX:-5.8,x:253.7},0).wait(1).to({skewX:-5.9,x:253.5,y:757.7},0).wait(1).to({skewX:-6.1,x:253.3},0).wait(1).to({skewX:-6,x:253.5},0).wait(1).to({skewX:-5.9,x:253.6,y:757.6},0).wait(1).to({skewX:-5.8,x:253.8},0).wait(1).to({skewX:-5.7,x:253.9},0).wait(1).to({skewX:-5.6,x:254.1},0).wait(1).to({x:254.2},0).wait(1).to({skewX:-5.5,x:254.3},0).wait(1).to({skewX:-5.4,x:254.5},0).wait(1).to({skewX:-5.3,x:254.6,y:757.5},0).wait(1).to({skewX:-5.2,x:254.8},0).wait(1).to({skewX:-5.1,x:254.9},0).wait(1).to({x:255},0).wait(1).to({skewX:-5,x:255.2},0).wait(1).to({skewX:-4.9,x:255.3},0).wait(1).to({skewX:-4.8,x:255.5,y:757.4},0).wait(1).to({skewX:-4.7,x:255.6},0).wait(1).to({skewX:-4.6,x:255.8},0).wait(1).to({x:255.9},0).wait(1).to({skewX:-4.5,x:256.1},0).wait(1).to({skewX:-4.4,x:256.2},0).wait(1).to({skewX:-4.3,x:256.4,y:757.3},0).wait(1).to({skewX:-4.2,x:256.5,y:757.4},0).wait(1).to({x:256.7,y:757.3},0).wait(1).to({skewX:-4.1,x:256.8},0).wait(1).to({skewX:-4,x:257},0).wait(1).to({skewX:-3.9,x:257.1},0).wait(1).to({skewX:-3.8,x:257.3},0).wait(1).to({skewX:-3.7,x:257.4},0).wait(1).to({x:257.5},0).wait(1).to({skewX:-3.6,x:257.7},0).wait(1).to({skewX:-3.5,x:257.8,y:757.2},0).wait(1).to({skewX:-3.4,x:258,y:757.3},0).wait(1).to({skewX:-3.3,x:258.1,y:757.2},0).wait(1).to({skewX:-3.2,x:258.3},0).wait(1).to({x:258.4},0).wait(1).to({skewX:-3.1,x:258.6},0).wait(1).to({skewX:-3,x:258.7},0).wait(1).to({skewX:-2.9,x:258.9},0).wait(1).to({skewX:-2.8,x:259,y:757.1},0).wait(1).to({skewX:-2.7,x:259.2,y:757.2},0).wait(1).to({x:259.3},0).wait(1).to({skewX:-2.6,x:259.5,y:757.1},0).wait(1).to({skewX:-2.5,x:259.6},0).wait(1).to({skewX:-2.4,x:259.7},0).wait(1).to({skewX:-2.3,x:259.9},0).wait(1).to({skewX:-2.2,x:260},0).wait(1).to({x:260.2},0).wait(1).to({skewX:-2.1,x:260.3},0).wait(1).to({scaleY:0.39,skewX:-2,x:260.4},0).wait(1).to({skewX:-1.9,x:260.6},0).wait(1).to({skewX:-1.8,x:260.8},0).wait(1).to({skewX:-1.7,x:260.9},0).wait(1).to({x:261.1},0).wait(1).to({skewX:-1.6,x:261.2,y:757},0).wait(1).to({skewX:-1.5,x:261.4},0).wait(1).to({skewX:-1.4,x:261.5,y:757.1},0).wait(1).to({skewX:-1.3,x:261.7,y:757},0).wait(1).to({skewX:-1.2,x:261.8},0).wait(1).to({x:261.9},0).wait(1).to({skewX:-1.1,x:262.1},0).wait(1).to({skewX:-1,x:262.2},0).wait(1).to({skewX:-0.9,x:262.4},0).wait(1).to({skewX:-0.8,x:262.5},0).wait(1).to({skewX:-0.7,x:262.6},0).wait(1).to({x:262.8},0).wait(1).to({skewX:-0.6,x:263},0).wait(1).to({skewX:-0.5,x:263.1},0).wait(1).to({skewX:-0.4,x:263.3},0).wait(1).to({skewX:-0.3,x:263.4},0).wait(1).to({skewX:-0.2,x:263.6},0).wait(1).to({x:263.7},0).wait(1).to({skewX:-0.1,x:263.9},0).wait(1).to({skewX:0,x:264},0).wait(1).to({skewX:-0.1,x:263.7},0).wait(1).to({skewX:-0.3,x:263.5},0).wait(1).to({skewX:-0.4,x:263.2},0).wait(1).to({skewX:-0.6,x:263},0).wait(1).to({skewX:-0.7,x:262.7},0).wait(1).to({skewX:-0.8,x:262.5},0).wait(1).to({skewX:-1,x:262.2},0).wait(1).to({skewX:-1.1,x:262},0).wait(1).to({skewX:-1.3,x:261.8},0).wait(1).to({skewX:-1.4,x:261.5},0).wait(1).to({skewX:-1.5,x:261.3},0).wait(1).to({skewX:-1.7,x:261},0).wait(1).to({skewX:-1.8,x:260.8},0).wait(1).to({skewX:-2,x:260.5},0).wait(1).to({skewX:-2.1,x:260.3},0).wait(1).to({skewX:-2.2,x:260},0).wait(1).to({skewX:-2.4,x:259.8},0).wait(1).to({skewX:-2.5,x:259.5},0).wait(1).to({skewX:-2.7,x:259.3,y:757.1},0).wait(1).to({skewX:-2.8,x:259,y:757},0).wait(1).to({skewX:-2.9,x:258.8,y:757.1},0).wait(1).to({skewX:-3.1,x:258.6},0).wait(1).to({skewX:-3.2,x:258.3},0).wait(1).to({skewX:-3.4,x:258.1},0).wait(1).to({skewX:-3.5,x:257.8},0).wait(1).to({skewX:-3.6,x:257.6},0).wait(1).to({skewX:-3.8,x:257.3},0).wait(1).to({skewX:-3.9,x:257.1,y:757.2},0).wait(1).to({skewX:-4.1,x:256.8,y:757.1},0).wait(1).to({skewX:-4.2,x:256.6,y:757.2},0).wait(1).to({skewX:-4.3,x:256.3},0).wait(1).to({skewX:-4.5,x:256.1},0).wait(1).to({skewX:-4.6,x:255.8},0).wait(1).to({skewX:-4.8,x:255.6},0).wait(1).to({skewX:-4.9,x:255.3,y:757.3},0).wait(1).to({skewX:-5,x:255.1},0).wait(1).to({skewX:-5.2,x:254.9},0).wait(1).to({skewX:-5.3,x:254.6,y:757.4},0).wait(1).to({skewX:-5.4,x:254.4},0).wait(1).to({skewX:-5.6,x:254.1,y:757.3},0).wait(1));

	// grass copy
	this.instance_1 = new lib.grass_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.7,868.8,0.386,0.385,0,-6.8,0,234.8,583.6);
	this.instance_1.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:431.4,regY:322,skewX:-6.7,x:109.8,y:768.7},0).wait(1).to({skewX:-6.6,x:109.9},0).wait(1).to({x:110},0).wait(1).to({skewX:-6.5,x:110.1},0).wait(1).to({x:110.2},0).wait(1).to({skewX:-6.4,x:110.4,y:768.6},0).wait(1).to({skewX:-6.3,x:110.5,y:768.7},0).wait(1).to({y:768.6},0).wait(1).to({skewX:-6.2,x:110.7},0).wait(1).to({x:110.8},0).wait(1).to({skewX:-6.1,x:110.9},0).wait(1).to({skewX:-6,x:111},0).wait(1).to({x:111.1,y:768.5},0).wait(1).to({skewX:-5.9,x:111.2,y:768.6},0).wait(1).to({x:111.3,y:768.5},0).wait(1).to({skewX:-5.8,x:111.4},0).wait(1).to({skewX:-5.7,x:111.5},0).wait(1).to({x:111.6},0).wait(1).to({skewX:-5.6,x:111.7},0).wait(1).to({skewX:-5.5,x:111.9},0).wait(1).to({x:112},0).wait(1).to({skewX:-5.4},0).wait(1).to({x:112.2,y:768.4},0).wait(1).to({skewX:-5.3,x:112.3},0).wait(1).to({skewX:-5.2,x:112.4},0).wait(1).to({x:112.5},0).wait(1).to({skewX:-5.1,x:112.6},0).wait(1).to({x:112.7},0).wait(1).to({skewX:-5,x:112.8},0).wait(1).to({skewX:-4.9,x:112.9},0).wait(1).to({x:113,y:768.3},0).wait(1).to({skewX:-4.8,x:113.1},0).wait(1).to({skewX:-4.7,x:113.2,y:768.4},0).wait(1).to({x:113.4,y:768.3},0).wait(1).to({skewX:-4.6,x:113.5},0).wait(2).to({skewX:-4.5,x:113.7},0).wait(1).to({skewX:-4.4,x:113.8},0).wait(1).to({x:113.9},0).wait(1).to({skewX:-4.3,x:114},0).wait(1).to({x:114.1,y:768.2},0).wait(1).to({skewX:-4.2,x:114.2,y:768.3},0).wait(1).to({skewX:-4.1,x:114.3,y:768.2},0).wait(1).to({x:114.4},0).wait(1).to({skewX:-4,x:114.6},0).wait(2).to({skewX:-3.9,x:114.7},0).wait(1).to({skewX:-3.8,x:114.9},0).wait(1).to({x:115},0).wait(1).to({skewX:-3.7,x:115.1},0).wait(1).to({skewX:-3.6,x:115.2},0).wait(1).to({x:115.3},0).wait(1).to({skewX:-3.5,x:115.4},0).wait(1).to({x:115.5},0).wait(1).to({skewX:-3.4,x:115.6,y:768.1},0).wait(1).to({skewX:-3.3,x:115.7},0).wait(1).to({x:115.8,y:768.2},0).wait(1).to({skewX:-3.2,x:115.9,y:768.1},0).wait(1).to({x:116},0).wait(1).to({skewX:-3.1,x:116.2},0).wait(1).to({skewX:-3},0).wait(1).to({x:116.4},0).wait(1).to({skewX:-2.9,x:116.5},0).wait(1).to({skewX:-2.8,x:116.6},0).wait(1).to({x:116.7},0).wait(1).to({skewX:-2.7,x:116.8},0).wait(1).to({x:116.9},0).wait(1).to({skewX:-2.6,x:117,y:768},0).wait(1).to({skewX:-2.5,x:117.1},0).wait(1).to({x:117.2,y:768.1},0).wait(1).to({skewX:-2.4,x:117.3},0).wait(1).to({skewX:-2.3,x:117.5,y:768},0).wait(1).to({x:117.6},0).wait(1).to({skewX:-2.2,x:117.7},0).wait(1).to({x:117.8},0).wait(1).to({skewX:-2.1,x:117.9},0).wait(1).to({skewX:-2,x:118},0).wait(1).to({x:118.1},0).wait(1).to({skewX:-1.9,x:118.3},0).wait(1).to({skewX:-1.8,x:118.4},0).wait(1).to({x:118.5},0).wait(1).to({skewX:-1.7,x:118.6},0).wait(1).to({x:118.7},0).wait(1).to({skewX:-1.6,x:118.8},0).wait(1).to({skewX:-1.5,x:118.9},0).wait(1).to({x:119},0).wait(1).to({skewX:-1.4,x:119.1},0).wait(1).to({skewX:-1.5,x:118.9},0).wait(1).to({skewX:-1.6,x:118.7},0).wait(1).to({skewX:-1.8,x:118.5},0).wait(1).to({skewX:-1.9,x:118.3},0).wait(1).to({skewX:-2,x:118.1},0).wait(1).to({skewX:-2.1,x:117.9},0).wait(1).to({skewX:-2.2,x:117.7},0).wait(1).to({skewX:-2.3,x:117.5},0).wait(1).to({skewX:-2.4,x:117.3},0).wait(1).to({skewX:-2.6,x:117.1},0).wait(1).to({skewX:-2.7,x:116.9,y:768.1},0).wait(1).to({scaleY:0.39,skewX:-2.8,x:116.7},0).wait(1).to({skewX:-2.9,x:116.4,y:768},0).wait(1).to({skewX:-3,x:116.2,y:768.1},0).wait(1).to({skewX:-3.1,x:116},0).wait(1).to({skewX:-3.3,x:115.8},0).wait(1).to({skewX:-3.4,x:115.6},0).wait(1).to({skewX:-3.5,x:115.4},0).wait(1).to({skewX:-3.6,x:115.2},0).wait(1).to({skewX:-3.7,x:115},0).wait(1).to({skewX:-3.8,x:114.8},0).wait(1).to({skewX:-4,x:114.6,y:768.2},0).wait(1).to({skewX:-4.1,x:114.4},0).wait(1).to({skewX:-4.2,x:114.2},0).wait(1).to({skewX:-4.3,x:114},0).wait(1).to({skewX:-4.4,x:113.8},0).wait(1).to({skewX:-4.5,x:113.6},0).wait(1).to({skewX:-4.7,x:113.4,y:768.3},0).wait(1).to({skewX:-4.8,x:113.2},0).wait(1).to({skewX:-4.9,x:113},0).wait(1).to({skewX:-5,x:112.8},0).wait(1).to({skewX:-5.1,x:112.6},0).wait(1).to({skewX:-5.2,x:112.4,y:768.4},0).wait(1).to({skewX:-5.4,x:112.2},0).wait(1).to({skewX:-5.5,x:112},0).wait(1).to({skewX:-5.6,x:111.8},0).wait(1).to({skewX:-5.7,x:111.6},0).wait(1).to({skewX:-5.8,x:111.3},0).wait(1).to({skewX:-5.9,x:111.1,y:768.5},0).wait(1).to({skewX:-6.1,x:110.9},0).wait(1).to({skewX:-5.9,x:111.2},0).wait(1).to({skewX:-5.8,x:111.4,y:768.4},0).wait(1).to({skewX:-5.6,x:111.6},0).wait(1).to({skewX:-5.5,x:111.9},0).wait(1).to({skewX:-5.4,x:112.1,y:768.3},0).wait(1).to({skewX:-5.2,x:112.4},0).wait(1).to({skewX:-5.1,x:112.7},0).wait(1).to({skewX:-5,x:112.9},0).wait(1).to({skewX:-4.8,x:113.1},0).wait(1).to({skewX:-4.7,x:113.4,y:768.2},0).wait(1).to({skewX:-4.5,x:113.6},0).wait(1).to({skewX:-4.4,x:113.8},0).wait(1).to({skewX:-4.3,x:114.1},0).wait(1).to({skewX:-4.1,x:114.3},0).wait(1).to({skewX:-4,x:114.6,y:768.1},0).wait(1).to({skewX:-3.9,x:114.8},0).wait(1).to({skewX:-3.7,x:115},0).wait(1).to({skewX:-3.6,x:115.3},0).wait(1).to({skewX:-3.4,x:115.5},0).wait(1).to({skewX:-3.3,x:115.8,y:768},0).wait(1).to({skewX:-3.2,x:116,y:768.1},0).wait(1).to({skewX:-3,x:116.2,y:768},0).wait(1).to({skewX:-2.9,x:116.5},0).wait(1).to({skewX:-2.8,x:116.7},0).wait(1).to({skewX:-2.6,x:117},0).wait(1).to({skewX:-2.5,x:117.2},0).wait(1).to({skewX:-2.3,x:117.4},0).wait(1).to({skewX:-2.2,x:117.7},0).wait(1).to({skewX:-2.1,x:118,y:767.9},0).wait(1).to({skewX:-1.9,x:118.2},0).wait(1).to({skewX:-1.8,x:118.5,y:768},0).wait(1).to({skewX:-1.7,x:118.7,y:767.9},0).wait(1).to({skewX:-1.5,x:118.9},0).wait(1).to({skewX:-1.4,x:119.2},0).wait(1).to({skewX:-1.2,x:119.4},0).wait(1).to({skewX:-1.1,x:119.7},0).wait(1).to({skewX:-1,x:119.9},0).wait(1).to({skewX:-0.8,x:120.1},0).wait(1).to({skewX:-0.7,x:120.4},0).wait(1).to({skewX:-0.6,x:120.6},0).wait(1).to({skewX:-0.4,x:120.9},0).wait(1).to({skewX:-0.3,x:121.1},0).wait(1).to({skewX:-0.1,x:121.4},0).wait(1).to({skewX:0,x:121.6},0).wait(1).to({skewX:-0.1,x:121.5},0).wait(1).to({x:121.4},0).wait(1).to({skewX:-0.2,x:121.3},0).wait(1).to({x:121.2},0).wait(1).to({skewX:-0.3,x:121},0).wait(1).to({skewX:-0.4,x:120.9},0).wait(1).to({x:120.8},0).wait(1).to({skewX:-0.5,x:120.7},0).wait(1).to({skewX:-0.6,x:120.6},0).wait(1).to({x:120.5},0).wait(1).to({skewX:-0.7,x:120.4},0).wait(1).to({x:120.2},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.9,x:120.1},0).wait(1).to({x:120},0).wait(1).to({skewX:-1,x:119.8},0).wait(1).to({skewX:-1.1,x:119.7},0).wait(1).to({x:119.6},0).wait(1).to({skewX:-1.2,x:119.5},0).wait(1).to({x:119.4},0).wait(1).to({skewX:-1.3,x:119.3},0).wait(1).to({skewX:-1.4,x:119.2},0).wait(1).to({x:119},0).wait(1).to({skewX:-1.5},0).wait(1).to({skewX:-1.6,x:118.9},0).wait(1).to({x:118.7},0).wait(1).to({skewX:-1.7,x:118.6},0).wait(1).to({x:118.5},0).wait(1).to({skewX:-1.8,x:118.4},0).wait(1).to({skewX:-1.9,x:118.3},0).wait(1).to({x:118.2},0).wait(1).to({skewX:-2,x:118.1},0).wait(1).to({skewX:-2.1,x:117.9},0).wait(1).to({x:117.8},0).wait(1).to({skewX:-2.2},0).wait(1).to({x:117.6},0).wait(1).to({skewX:-2.3,x:117.5},0).wait(1).to({skewX:-2.4,x:117.4},0).wait(1).to({x:117.3,y:768},0).wait(1).to({skewX:-2.5,x:117.2},0).wait(1).to({skewX:-2.6,x:117.1,y:767.9},0).wait(1).to({x:117},0).wait(1).to({skewX:-2.7,x:116.8},0).wait(1).to({x:116.7},0).wait(1).to({skewX:-2.8,y:768},0).wait(1).to({skewX:-2.9,x:116.6},0).wait(1).to({x:116.4},0).wait(1).to({skewX:-3,x:116.3},0).wait(1).to({skewX:-3.1,x:116.2},0).wait(1).to({x:116.1},0).wait(1).to({skewX:-3.2,x:116},0).wait(1).to({x:115.9},0).wait(1).to({skewX:-3.3,x:115.7},0).wait(1).to({skewX:-3.4,x:115.6},0).wait(1).to({x:115.5},0).wait(1).to({skewX:-3.5},0).wait(1).to({skewX:-3.6,x:115.3},0).wait(1));

	// grass
	this.instance_2 = new lib.grass_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(857.5,1484.1,1,1,0,0,0,255.3,584.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:431.4,regY:322,skewX:-0.2,x:1032.9,y:1221.9},0).wait(1).to({skewX:-0.3,x:1032.2},0).wait(1).to({skewX:-0.5,x:1031.5,y:1221.8},0).wait(1).to({scaleY:1,skewX:-0.6,x:1030.8},0).wait(1).to({skewX:-0.8,x:1030.1},0).wait(1).to({skewX:-0.9,x:1029.4},0).wait(1).to({skewX:-1.1,x:1028.7,y:1221.7},0).wait(1).to({skewX:-1.2,x:1028},0).wait(1).to({skewX:-1.4,x:1027.3},0).wait(1).to({skewX:-1.5,x:1026.6},0).wait(1).to({scaleY:1,skewX:-1.7,x:1025.9,y:1221.6},0).wait(1).to({skewX:-1.8,x:1025.2,y:1221.7},0).wait(1).to({skewX:-2,x:1024.5,y:1221.6},0).wait(1).to({skewX:-2.1,x:1023.8},0).wait(1).to({skewX:-2.3,x:1023.1},0).wait(1).to({skewX:-2.4,x:1022.4},0).wait(1).to({skewX:-2.6,x:1021.7},0).wait(1).to({scaleY:1,skewX:-2.7,x:1021},0).wait(1).to({skewX:-2.9,x:1020.3},0).wait(1).to({skewX:-3,x:1019.6},0).wait(1).to({skewX:-3.2,x:1018.9},0).wait(1).to({skewX:-3.3,x:1018.2},0).wait(1).to({skewX:-3.5,x:1017.6},0).wait(1).to({skewX:-3.6,x:1016.9},0).wait(1).to({scaleY:1,skewX:-3.8,x:1016.2},0).wait(1).to({skewX:-3.9,x:1015.5},0).wait(1).to({skewX:-4.1,x:1014.8},0).wait(1).to({skewX:-4.2,x:1014.1,y:1221.7},0).wait(1).to({skewX:-4.4,x:1013.4,y:1221.6},0).wait(1).to({skewX:-4.5,x:1012.7,y:1221.7},0).wait(1).to({skewX:-4.7,x:1012},0).wait(1).to({scaleY:1,skewX:-4.8,x:1011.3},0).wait(1).to({skewX:-5,x:1010.6},0).wait(1).to({skewX:-5.2,x:1009.9,y:1221.8},0).wait(1).to({skewX:-5.3,x:1009.2},0).wait(1).to({skewX:-5.5,x:1008.5},0).wait(1).to({skewX:-5.6,x:1007.8,y:1221.9},0).wait(1).to({skewX:-5.8,x:1007.1},0).wait(1).to({scaleY:1.01,skewX:-5.9,x:1006.4},0).wait(1).to({skewX:-6.1,x:1005.7},0).wait(1).to({skewX:-5.9,x:1006.3},0).wait(1).to({scaleY:1,skewX:-5.8,x:1006.8},0).wait(1).to({skewX:-5.7,x:1007.3},0).wait(1).to({skewX:-5.6,x:1007.8},0).wait(1).to({skewX:-5.5,x:1008.3},0).wait(1).to({skewX:-5.4,x:1008.8,y:1221.8},0).wait(1).to({skewX:-5.3,x:1009.4},0).wait(1).to({skewX:-5.2,x:1009.9},0).wait(1).to({scaleY:1,skewX:-5,x:1010.4},0).wait(1).to({skewX:-4.9,x:1011},0).wait(1).to({skewX:-4.8,x:1011.5},0).wait(1).to({skewX:-4.7,x:1012},0).wait(1).to({skewX:-4.6,x:1012.5},0).wait(1).to({skewX:-4.5,x:1013.1},0).wait(1).to({skewX:-4.4,x:1013.6,y:1221.7},0).wait(1).to({scaleY:1,skewX:-4.2,x:1014.1,y:1221.8},0).wait(1).to({skewX:-4.1,x:1014.6},0).wait(1).to({skewX:-4,x:1015.1},0).wait(1).to({skewX:-3.9,x:1015.6},0).wait(1).to({skewX:-3.8,x:1016.2},0).wait(1).to({skewX:-3.7,x:1016.7},0).wait(1).to({skewX:-3.6,x:1017.2,y:1221.7},0).wait(1).to({skewX:-3.4,x:1017.8},0).wait(1).to({scaleY:1,skewX:-3.3,x:1018.3,y:1221.8},0).wait(1).to({skewX:-3.2,x:1018.8},0).wait(1).to({skewX:-3.1,x:1019.3},0).wait(1).to({skewX:-3,x:1019.9},0).wait(1).to({skewX:-2.9,x:1020.4},0).wait(1).to({skewX:-2.8,x:1020.9},0).wait(1).to({skewX:-2.7,x:1021.4},0).wait(1).to({scaleY:1,skewX:-2.5,x:1021.9},0).wait(1).to({skewX:-2.4,x:1022.5},0).wait(1).to({skewX:-2.3,x:1023,y:1221.9},0).wait(1).to({skewX:-2.2,x:1023.5},0).wait(1).to({skewX:-2.1,x:1024},0).wait(1).to({skewX:-2,x:1024.5},0).wait(1).to({skewX:-1.9,x:1025.1},0).wait(1).to({scaleY:1,skewX:-1.7,x:1025.6,y:1222},0).wait(1).to({skewX:-1.6,x:1026.1,y:1221.9},0).wait(1).to({skewX:-1.5,x:1026.6,y:1222},0).wait(1).to({skewX:-1.4,x:1027.1},0).wait(1).to({skewX:-1.5,x:1026.9},0).wait(1).to({x:1026.6},0).wait(1).to({skewX:-1.6,x:1026.4},0).wait(1).to({x:1026.2},0).wait(1).to({skewX:-1.7,x:1025.9},0).wait(1).to({x:1025.7},0).wait(1).to({skewX:-1.8,x:1025.5},0).wait(1).to({x:1025.2},0).wait(1).to({skewX:-1.9,x:1025},0).wait(1).to({x:1024.7},0).wait(1).to({skewX:-2,x:1024.5},0).wait(1).to({x:1024.2},0).wait(1).to({skewX:-2.1,x:1024},0).wait(1).to({scaleY:1,x:1023.7},0).wait(1).to({skewX:-2.2,x:1023.5},0).wait(1).to({x:1023.3},0).wait(1).to({skewX:-2.3,x:1023},0).wait(1).to({x:1022.8},0).wait(1).to({skewX:-2.4,x:1022.6},0).wait(1).to({skewX:-2.5,x:1022.3},0).wait(1).to({x:1022.1},0).wait(1).to({skewX:-2.6,x:1021.9},0).wait(1).to({x:1021.6},0).wait(1).to({skewX:-2.7,x:1021.4},0).wait(1).to({x:1021.1},0).wait(1).to({skewX:-2.8,x:1020.8,y:1222.1},0).wait(1).to({x:1020.5},0).wait(1).to({scaleY:1,skewX:-2.9,x:1020.3,y:1222.2},0).wait(1).to({skewX:-3,x:1020},0).wait(1).to({x:1019.8},0).wait(1).to({skewX:-3.1,x:1019.5,y:1222.3},0).wait(1).to({x:1019.2},0).wait(1).to({skewX:-3.2,x:1019},0).wait(1).to({skewX:-3.3,x:1018.7,y:1222.4},0).wait(1).to({x:1018.4},0).wait(1).to({skewX:-3.4,x:1018.1,y:1222.5},0).wait(1).to({x:1017.9},0).wait(1).to({skewX:-3.5,x:1017.6},0).wait(1).to({x:1017.3},0).wait(1).to({skewX:-3.6,x:1017.1},0).wait(1).to({skewX:-3.7,x:1016.8},0).wait(1).to({x:1016.5},0).wait(1).to({skewX:-3.8,x:1016.3},0).wait(1).to({x:1016,y:1222.4},0).wait(1).to({skewX:-3.9,x:1015.7,y:1222.5},0).wait(1).to({scaleY:1,skewX:-4,x:1015.4},0).wait(1).to({x:1015.2,y:1222.4},0).wait(1).to({skewX:-4.1,x:1014.9},0).wait(1).to({x:1014.6},0).wait(1).to({skewX:-4.2,x:1014.4},0).wait(1).to({x:1014.1},0).wait(1).to({skewX:-4.3,x:1013.8},0).wait(1).to({skewX:-4.4,x:1013.6},0).wait(1).to({x:1013.3},0).wait(1).to({skewX:-4.5,x:1013,y:1222.3},0).wait(1).to({scaleY:1,x:1012.8,y:1222.4},0).wait(1).to({skewX:-4.6,x:1012.5},0).wait(1).to({skewX:-4.7,x:1012.2},0).wait(1).to({x:1012,y:1222.3},0).wait(1).to({skewX:-4.8,x:1011.7},0).wait(1).to({x:1011.4},0).wait(1).to({skewX:-4.9,x:1011.1},0).wait(1).to({skewX:-5,x:1010.8},0).wait(1).to({x:1010.6},0).wait(1).to({scaleY:1,skewX:-5.1,x:1010.3},0).wait(1).to({x:1010},0).wait(1).to({skewX:-5.2,x:1009.8},0).wait(1).to({x:1009.5},0).wait(1).to({skewX:-5.3,x:1009.2},0).wait(1).to({skewX:-5.4,x:1009},0).wait(1).to({x:1008.7},0).wait(1).to({skewX:-5.5,x:1008.4},0).wait(1).to({x:1008.2},0).wait(1).to({skewX:-5.6,x:1007.9},0).wait(1).to({scaleY:1,skewX:-5.7,x:1007.6},0).wait(1).to({x:1007.4},0).wait(1).to({skewX:-5.8,x:1007.1},0).wait(1).to({x:1006.8},0).wait(1).to({skewX:-5.9,x:1006.5},0).wait(1).to({skewX:-6,x:1006.3},0).wait(1).to({x:1006},0).wait(1).to({skewX:-6.1,x:1005.7},0).wait(1).to({x:1005.5},0).wait(1).to({scaleY:1,skewX:-6.2,x:1005.2},0).wait(1).to({x:1004.9},0).wait(1).to({skewX:-6.3,x:1004.6},0).wait(1).to({skewX:-6.4,x:1004.4},0).wait(1).to({x:1004.1},0).wait(1).to({skewX:-6.5,x:1003.8},0).wait(1).to({x:1003.5},0).wait(1).to({skewX:-6.6,x:1003.3},0).wait(1).to({skewX:-6.7,x:1003},0).wait(1).to({x:1002.7},0).wait(1).to({scaleY:1.01,skewX:-6.8,x:1002.5},0).wait(1).to({x:1002.2,y:1222.4},0).wait(1).to({skewX:-6.7,x:1002.8,y:1222.3},0).wait(1).to({scaleY:1,skewX:-6.6,x:1003.4},0).wait(1).to({skewX:-6.4,x:1004,y:1222.2},0).wait(1).to({skewX:-6.3,x:1004.6,y:1222.1},0).wait(1).to({skewX:-6.2,x:1005.2},0).wait(1).to({skewX:-6,x:1005.8},0).wait(1).to({skewX:-5.9,x:1006.4},0).wait(1).to({skewX:-5.8,x:1007,y:1222},0).wait(1).to({skewX:-5.7,x:1007.6},0).wait(1).to({skewX:-5.5,x:1008.2},0).wait(1).to({scaleY:1,skewX:-5.4,x:1008.8,y:1221.9},0).wait(1).to({skewX:-5.3,x:1009.4},0).wait(1).to({skewX:-5.1,x:1010.1},0).wait(1).to({skewX:-5,x:1010.7},0).wait(1).to({skewX:-4.9,x:1011.2,y:1221.8},0).wait(1).to({skewX:-4.7,x:1011.8},0).wait(1).to({skewX:-4.6,x:1012.4},0).wait(1).to({skewX:-4.5,x:1013.1},0).wait(1).to({skewX:-4.3,x:1013.7},0).wait(1).to({skewX:-4.2,x:1014.3,y:1221.7},0).wait(1).to({scaleY:1,skewX:-4.1,x:1014.9},0).wait(1).to({skewX:-3.9,x:1015.5},0).wait(1).to({skewX:-3.8,x:1016.1},0).wait(1).to({skewX:-3.7,x:1016.7},0).wait(1).to({skewX:-3.5,x:1017.3},0).wait(1).to({skewX:-3.4,x:1017.9},0).wait(1).to({skewX:-3.3,x:1018.5},0).wait(1).to({skewX:-3.2,x:1019.1},0).wait(1).to({skewX:-3,x:1019.7,y:1221.6},0).wait(1).to({scaleY:1,skewX:-2.9,x:1020.3},0).wait(1).to({skewX:-2.8,x:1020.9},0).wait(1).to({skewX:-2.6,x:1021.5},0).wait(1).to({skewX:-2.5,x:1022.1},0).wait(1).to({skewX:-2.4,x:1022.7,y:1221.7},0).wait(1).to({skewX:-2.2,x:1023.3},0).wait(1).to({skewX:-2.1,x:1023.9},0).wait(1).to({skewX:-2,x:1024.5},0).wait(1).to({skewX:-1.8,x:1025.1},0).wait(1).to({scaleY:1,skewX:-1.7,x:1025.7},0).wait(1).to({skewX:-1.6,x:1026.3},0).wait(1).to({skewX:-1.4,x:1026.9},0).wait(1).to({skewX:-1.3,x:1027.5},0).wait(1).to({skewX:-1.2,x:1028.1,y:1221.8},0).wait(1).to({skewX:-1.1,x:1028.7},0).wait(1).to({skewX:-0.9,x:1029.3},0).wait(1).to({skewX:-0.8,x:1030},0).wait(1).to({skewX:-0.7,x:1030.5},0).wait(1).to({scaleY:1,skewX:-0.5,x:1031.1},0).wait(1).to({skewX:-0.4,x:1031.7,y:1221.9},0).wait(1).to({skewX:-0.3,x:1032.3},0).wait(1).to({skewX:-0.1,x:1033},0).wait(1).to({skewX:0,x:1033.6,y:1222},0).wait(1));

	// rocks-bkgr
	this.instance_3 = new lib.rockShadow_01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1042.3,2025.5,1.245,0.799,0,-2.2,-179.5,170.4,57.1);
	this.instance_3.alpha = 0.129;

	this.instance_4 = new lib.rockShadow_01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(20.6,1888.8,1.599,0.799,0,-2.2,-179.5,170.4,57.1);
	this.instance_4.alpha = 0.129;

	this.instance_5 = new lib.rockShadow_01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1074.6,1557.7,1.214,2.056,0,-74.1,0.5,170.6,57);
	this.instance_5.alpha = 0.129;

	this.instance_6 = new lib.rockShadow_01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(340.7,1296.6,0.816,0.848,0,-69.4,-6,171.1,56.4);
	this.instance_6.alpha = 0.129;

	this.rock03_1 = new lib.rock06();
	this.rock03_1.parent = this;
	this.rock03_1.setTransform(893.4,845,0.518,0.355,0,0,0,-3.1,-8.2);
	this.rock03_1.alpha = 0.641;

	this.rock09_1 = new lib.rock03();
	this.rock09_1.parent = this;
	this.rock09_1.setTransform(986.3,826.3,0.425,0.398,0,19.5,-160.5,-3,-8.2);
	this.rock09_1.alpha = 0.781;

	this.rock_1 = new lib.rock07();
	this.rock_1.parent = this;
	this.rock_1.setTransform(-75.1,946,0.788,0.788,0,0,0,-3.1,-8.2);

	this.rock05_1 = new lib.rock02();
	this.rock05_1.parent = this;
	this.rock05_1.setTransform(1046.8,813.9,0.785,1.695,0,0,0,-3.1,-8.2);
	this.rock05_1.alpha = 0.988;

	this.rock02_1 = new lib.rock01();
	this.rock02_1.parent = this;
	this.rock02_1.setTransform(1078.2,794.9,0.574,0.574,0,0,0,-3.1,-8.2);

	this.rock10_1 = new lib.rock10_mc();
	this.rock10_1.parent = this;
	this.rock10_1.setTransform(150.7,988.5,0.497,0.767,4.7);

	this.rock04_1 = new lib.rock05();
	this.rock04_1.parent = this;
	this.rock04_1.setTransform(952,781.6,1.189,0.554,0,0,0,-3.1,-8.2);
	this.rock04_1.alpha = 0.75;

	this.rock08_1 = new lib.rock04();
	this.rock08_1.parent = this;
	this.rock08_1.setTransform(149.5,924.3,0.782,0.782,0,0,180,-3.1,-8.1);

	this.rock09_2 = new lib.rock03();
	this.rock09_2.parent = this;
	this.rock09_2.setTransform(103.1,907.2,1.208,0.768,0,12.3,-167.7,-3.2,-8.2);

	this.instance_7 = new lib.rockShadow_01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(35,1026.6,1,1,0,0,0,171,56.4);
	this.instance_7.alpha = 0.129;

	this.instance_8 = new lib.rockShadow_01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1044.4,871.2,1.017,0.465,0,-169.8,-175.9,171,56.4);
	this.instance_8.alpha = 0.09;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.rock09_2},{t:this.rock08_1},{t:this.rock04_1},{t:this.rock10_1},{t:this.rock02_1},{t:this.rock05_1},{t:this.rock_1},{t:this.rock09_1},{t:this.rock03_1},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(229));

	// fish
	this.instance_9 = new lib.bkgrfishGroup_mc("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(1385.3,313.7,1,1,0,0,0,216.5,85);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({_off:false},0).wait(1).to({regX:216.8,regY:75.3,x:1354.2,y:304,startPosition:1},0).wait(1).to({x:1322.7,startPosition:2},0).wait(1).to({x:1291.3,startPosition:3},0).wait(1).to({x:1259.9,startPosition:4},0).wait(1).to({x:1228.5,startPosition:5},0).wait(1).to({x:1197,startPosition:6},0).wait(1).to({x:1165.6,startPosition:7},0).wait(1).to({x:1134.2,startPosition:8},0).wait(1).to({x:1102.7,startPosition:9},0).wait(1).to({x:1071.3,startPosition:10},0).wait(1).to({x:1039.9,startPosition:11},0).wait(1).to({x:1008.5,startPosition:12},0).wait(1).to({x:977,startPosition:13},0).wait(1).to({x:945.6,startPosition:14},0).wait(1).to({x:914.2,startPosition:15},0).wait(1).to({x:882.8,startPosition:16},0).wait(1).to({x:851.3,startPosition:17},0).wait(1).to({x:819.9,startPosition:18},0).wait(1).to({x:788.5,startPosition:19},0).wait(1).to({x:757,startPosition:20},0).wait(1).to({x:725.6,startPosition:21},0).wait(1).to({x:694.2,startPosition:22},0).wait(1).to({x:662.8,startPosition:23},0).wait(1).to({x:631.3,startPosition:24},0).wait(1).to({x:599.9,startPosition:25},0).wait(1).to({x:568.5,startPosition:26},0).wait(1).to({x:537,startPosition:27},0).wait(1).to({x:505.7,startPosition:28},0).wait(1).to({x:474.2,startPosition:29},0).wait(1).to({x:442.8,startPosition:30},0).wait(1).to({x:411.4,startPosition:31},0).wait(1).to({x:379.9,startPosition:32},0).wait(1).to({x:348.5,startPosition:33},0).wait(1).to({x:317.1,startPosition:34},0).wait(1).to({x:285.6,startPosition:35},0).wait(1).to({x:254.2,startPosition:36},0).wait(1).to({x:222.8,startPosition:37},0).wait(1).to({x:191.4,startPosition:38},0).wait(1).to({x:160,startPosition:39},0).wait(1).to({x:128.5,startPosition:40},0).wait(1).to({x:97.1,startPosition:41},0).wait(1).to({x:65.7,startPosition:42},0).wait(1).to({x:34.3,startPosition:43},0).wait(1).to({x:2.9,startPosition:44},0).wait(1).to({x:-28.6,startPosition:45},0).wait(1).to({x:-60,startPosition:46},0).wait(1).to({x:-91.5,startPosition:47},0).wait(1).to({x:-122.9,startPosition:48},0).wait(1).to({x:-154.3,startPosition:49},0).wait(1).to({x:-185.7,startPosition:50},0).wait(1).to({x:-217.1,startPosition:51},0).wait(1).to({x:-248.6,startPosition:0},0).wait(1).to({regX:216.5,regY:85,x:1385.3,y:313.7,mode:"independent"},0).wait(137));

	// bubbles- copy
	this.instance_10 = new lib.BKGRbubbles_mc("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(1014.5,1611.7,0.531,0.531,0,0,0,65.2,324.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).wait(1).to({regX:55.1,regY:162.5,scaleX:0.54,scaleY:0.54,x:1009,y:1489.2,startPosition:1},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:1008.9,y:1453,startPosition:2},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:1008.8,y:1416.7,startPosition:3},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:1380.5,startPosition:4},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:1008.7,y:1344.2,startPosition:5},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:1008.6,y:1307.9,startPosition:6},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:1008.5,y:1271.6,startPosition:7},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:1008.4,y:1235.4,startPosition:8},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:1008.2,y:1199.1,startPosition:9},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:1008.1,y:1162.8,startPosition:10},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:1008,y:1126.6,startPosition:0},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:1090.3,startPosition:1},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:1007.9,y:1054.1,startPosition:2},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:1007.8,y:1017.8,startPosition:3},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:1007.7,y:981.6,startPosition:4},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:1007.6,y:945.2,startPosition:5},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:1007.5,y:909,startPosition:6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:1007.3,y:872.7,startPosition:7},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:1007.2,y:836.5,startPosition:8},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:800.2,startPosition:9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:1007.1,y:763.9,startPosition:10},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:1007,y:727.6,startPosition:0},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:1006.9,y:691.4,startPosition:1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:1006.8,y:655.1,startPosition:2},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:1006.7,y:618.8,startPosition:3},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:1006.5,y:582.6,startPosition:4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1006.4,y:546.3,startPosition:5},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:510,startPosition:6},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:1006.3,y:473.8,startPosition:7},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:1006.2,y:437.5,startPosition:8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1006.1,y:401.2,startPosition:9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1006,y:364.9,startPosition:10},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1005.9,y:328.7,startPosition:0},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1005.8,y:292.4,startPosition:1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1005.6,y:256.2,startPosition:2},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:219.9,startPosition:3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1005.5,y:183.6,startPosition:4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1005.4,y:147.4,startPosition:5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1005.3,y:111.1,startPosition:6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1005.2,y:74.9,startPosition:7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1005.1,y:38.6,startPosition:8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1005,y:2.4,startPosition:9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1004.9,y:-34,startPosition:10},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1004.8,y:-70.2,startPosition:0},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1004.7,y:-106.5,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1,x:1004.6,y:-142.7,startPosition:2},0).wait(1).to({scaleX:1,scaleY:1,x:1004.5,y:-179,startPosition:3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:1004.4,y:-215.3,startPosition:4},0).to({_off:true},1).wait(178));

	// bubbles- copy 2
	this.instance_11 = new lib.BKGRbubbles_mc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(149.1,1120,0.531,0.531,0,0,0,65.2,324.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80).to({_off:false},0).wait(1).to({regX:55.1,regY:162.5,scaleX:0.54,scaleY:0.54,x:143.6,y:993.4},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:143.5,y:953},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:143.4,y:912.5},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:143.3,y:872},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:143.1,y:831.5},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:791},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:142.9,y:750.5},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:142.8,y:710},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:142.7,y:669.6},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:142.6,y:629.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:142.5,y:588.6},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:142.4,y:548.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:142.2,y:507.6},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:467.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:142,y:426.7},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:141.9,y:386.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:141.8,y:345.7},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:141.7,y:305.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:141.6,y:264.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:141.5,y:224.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:141.4,y:183.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:141.2,y:143.3},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:102.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:141,y:62.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:140.9,y:21.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:140.8,y:-18.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:140.7,y:-59.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:140.6,y:-99.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:140.5,y:-140},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:140.4,y:-180.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:140.3,y:-220.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:140.1,y:-261.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:140,y:-302},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:139.9,y:-342.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:139.8,y:-382.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:139.7,y:-423.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:139.6,y:-463.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:139.5,y:-504.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:139.3,y:-544.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-585.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:139.1,y:-625.8},0).wait(1).to({scaleX:1,scaleY:1,y:-666.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:138.9,y:-706.7},0).to({_off:true},1).wait(105));

	// bubbles-
	this.instance_12 = new lib.BKGRbubbles_mc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(866.5,851.2,0.25,0.25,0,0,0,65.2,324.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(84).to({_off:false},0).wait(1).to({regX:55.1,regY:162.5,x:864,y:786.4},0).wait(1).to({y:762.2},0).wait(1).to({y:737.9},0).wait(1).to({y:713.7},0).wait(1).to({y:689.5},0).wait(1).to({y:665.2},0).wait(1).to({y:641},0).wait(1).to({y:616.7},0).wait(1).to({y:592.5},0).wait(1).to({y:568.3},0).wait(1).to({y:544},0).wait(1).to({y:519.8},0).wait(1).to({y:495.5},0).wait(1).to({y:471.3},0).wait(1).to({x:864.1,y:447.1},0).wait(1).to({y:422.8},0).wait(1).to({y:398.6},0).wait(1).to({y:374.4},0).wait(1).to({y:350.1},0).wait(1).to({y:325.9},0).wait(1).to({y:301.7},0).wait(1).to({y:277.4},0).wait(1).to({y:253.2},0).wait(1).to({y:228.9},0).wait(1).to({y:204.7},0).wait(1).to({y:180.4},0).wait(1).to({y:156.2},0).wait(1).to({y:132},0).wait(1).to({y:107.8},0).wait(1).to({y:83.5},0).wait(1).to({y:59.3},0).wait(1).to({y:35.1},0).wait(1).to({y:10.8},0).wait(1).to({y:-13.4},0).wait(1).to({y:-37.6},0).wait(1).to({y:-61.9},0).wait(1).to({y:-86.1},0).wait(1).to({y:-110.4},0).wait(1).to({y:-134.6},0).wait(1).to({y:-158.8},0).wait(1).to({y:-183.1},0).wait(1).to({y:-207.3},0).wait(1).to({y:-231.6},0).to({_off:true},1).wait(101));

	// bkgr
	this.instance_13 = new lib.bkgr("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(591.7,1094.6,1,1,0,0,0,599.2,1094.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(229));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-922.3,-579.3,2735.1,2651.1);


// stage content:
(lib.FWWMM_all_v01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.BackgroundLoop.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(750));

	// BackgroundLogo
	this.instance = new lib.MMlogo();
	this.instance.parent = this;
	this.instance.setTransform(540.1,154.2,1,1,0,0,0,140.8,96.2);
	this.instance.shadow = new cjs.Shadow("rgba(35,31,32,0.749)",0,2,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(750));

	// BackgroundLoop
	this.instance_1 = new lib.BackgroundLoop();
	this.instance_1.parent = this;
	this.instance_1.setTransform(574.1,626.7,1,1,0,0,0,574.1,626.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(750));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.3,380.7,2735.1,2651.1);
// library properties:
lib.properties = {
	width: 1080,
	height: 1920,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(libBackground = libBackground||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var libBackground, images, createjs, ss, AdobeAn;