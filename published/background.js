(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1080,
	height: 1920,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



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
	this.shape_17.graphics.lf(["#A5CC8A","rgba(158,196,133,0.804)","rgba(143,179,124,0.357)","rgba(135,170,119,0.086)","rgba(132,167,117,0)"],[0,0.098,0.392,0.69,1],0,708.9,0,-722.7).s().p("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");
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


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-126.1,-27.1,126.1,27.2).s().p("Egw6CDaMA6bkPSMAnaAIgMg6aEPRg");
	this.shape.setTransform(313.1,895.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

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

	this.instance_2 = new lib.Path_2();
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
	this.instance.setTransform(189.5,858.2,0.386,0.385,0,-6.8,0,242.8,583.6);
	this.instance.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:431.4,regY:322,skewX:-6.6,x:250.6,y:758},0).wait(1).to({skewX:-6.5,x:250.9},0).wait(1).to({skewX:-6.3,x:251.2},0).wait(1).to({skewX:-6.2,x:251.4,y:757.9},0).wait(1).to({skewX:-6,x:251.7},0).wait(1).to({skewX:-5.9,x:251.9},0).wait(1).to({skewX:-5.7,x:252.2},0).wait(1).to({skewX:-5.6,x:252.5,y:757.8},0).wait(1).to({skewX:-5.4,x:252.8},0).wait(1).to({skewX:-5.3,x:253},0).wait(1).to({skewX:-5.1,x:253.3},0).wait(1).to({skewX:-4.9,x:253.6,y:757.7},0).wait(1).to({skewX:-4.8,x:253.8},0).wait(1).to({skewX:-4.6,x:254.1,y:757.6},0).wait(1).to({skewX:-4.5,x:254.3},0).wait(1).to({skewX:-4.3,x:254.6},0).wait(1).to({skewX:-4.2,x:254.9},0).wait(1).to({skewX:-4,x:255.2},0).wait(1).to({skewX:-3.9,x:255.4,y:757.5},0).wait(1).to({skewX:-3.7,x:255.7},0).wait(1).to({skewX:-3.6,x:256},0).wait(1).to({skewX:-3.4,x:256.2},0).wait(1).to({skewX:-3.3,x:256.5},0).wait(1).to({skewX:-3.1,x:256.7},0).wait(1).to({skewX:-3,x:257,y:757.4},0).wait(1).to({skewX:-2.8,x:257.3},0).wait(1).to({skewX:-2.7,x:257.5},0).wait(1).to({skewX:-2.6,x:257.6},0).wait(1).to({scaleY:0.39,x:257.7},0).wait(1).to({skewX:-2.5,x:257.8},0).wait(1).to({x:257.9,y:757.3},0).wait(1).to({skewX:-2.4,x:258,y:757.4},0).wait(1).to({x:258.1},0).wait(1).to({skewX:-2.3,x:258.2,y:757.3},0).wait(1).to({x:258.3},0).wait(1).to({skewX:-2.2},0).wait(1).to({x:258.4},0).wait(1).to({skewX:-2.1,x:258.5},0).wait(1).to({x:258.6},0).wait(1).to({skewX:-2,x:258.7},0).wait(2).to({skewX:-1.9,x:258.8},0).wait(1).to({x:258.9},0).wait(1).to({skewX:-1.8,x:259},0).wait(1).to({x:259.1},0).wait(1).to({skewX:-1.7,x:259.2},0).wait(2).to({skewX:-1.6,x:259.3},0).wait(1).to({x:259.4},0).wait(1).to({skewX:-1.5,x:259.5,y:757.2},0).wait(1).to({x:259.6},0).wait(1).to({skewX:-1.4,x:259.7,y:757.3},0).wait(1).to({x:259.8},0).wait(1).to({skewX:-1.5,x:259.5},0).wait(1).to({skewX:-1.7,x:259.3,y:757.2},0).wait(1).to({skewX:-1.8,x:259.1},0).wait(1).to({skewX:-1.9,x:258.8},0).wait(1).to({skewX:-2.1,x:258.6},0).wait(1).to({skewX:-2.2,x:258.3,y:757.3},0).wait(1).to({skewX:-2.3,x:258.1},0).wait(1).to({skewX:-2.5,x:257.9},0).wait(1).to({skewX:-2.6,x:257.7},0).wait(1).to({skewX:-2.7,x:257.4},0).wait(1).to({skewX:-2.9,x:257.2},0).wait(1).to({skewX:-3,x:257},0).wait(1).to({skewX:-3.1,x:256.7},0).wait(1).to({skewX:-3.3,x:256.5},0).wait(1).to({skewX:-3.4,x:256.2},0).wait(1).to({skewX:-3.5,x:256,y:757.4},0).wait(1).to({skewX:-3.7,x:255.8},0).wait(1).to({skewX:-3.8,x:255.6},0).wait(1).to({skewX:-3.9,x:255.3},0).wait(1).to({skewX:-4.1,x:255.1},0).wait(1).to({skewX:-4.2,x:254.9},0).wait(1).to({skewX:-4.3,x:254.6},0).wait(1).to({skewX:-4.5,x:254.4,y:757.5},0).wait(1).to({skewX:-4.6,x:254.1},0).wait(1).to({skewX:-4.7,x:253.9},0).wait(1).to({skewX:-4.9,x:253.7},0).wait(1).to({skewX:-5,x:253.4},0).wait(1).to({skewX:-5.1,x:253.2,y:757.6},0).wait(1).to({skewX:-5.3,x:253,y:757.5},0).wait(1).to({skewX:-5.4,x:252.8,y:757.6},0).wait(1).to({skewX:-5.5,x:252.5},0).wait(1).to({skewX:-5.7,x:252.3},0).wait(1).to({skewX:-5.8,x:252},0).wait(1).to({skewX:-5.9,x:251.8,y:757.7},0).wait(1).to({skewX:-6.1,x:251.5},0).wait(1).to({skewX:-5.9,x:251.8},0).wait(1).to({skewX:-5.8,x:252,y:757.6},0).wait(1).to({skewX:-5.7,x:252.2},0).wait(1).to({skewX:-5.6,x:252.4},0).wait(1).to({skewX:-5.4,x:252.7,y:757.5},0).wait(1).to({skewX:-5.3,x:252.8},0).wait(1).to({skewX:-5.2,x:253.1},0).wait(1).to({skewX:-5.1,x:253.3},0).wait(1).to({skewX:-4.9,x:253.5,y:757.4},0).wait(1).to({skewX:-4.8,x:253.7},0).wait(1).to({skewX:-4.7,x:254},0).wait(1).to({skewX:-4.6,x:254.2},0).wait(1).to({skewX:-4.5,x:254.4,y:757.3},0).wait(1).to({skewX:-4.3,x:254.6,y:757.4},0).wait(1).to({skewX:-4.2,x:254.8,y:757.3},0).wait(1).to({skewX:-4.1,x:255},0).wait(1).to({skewX:-4,x:255.3},0).wait(1).to({skewX:-3.8,x:255.5},0).wait(1).to({skewX:-3.7,x:255.7,y:757.2},0).wait(1).to({skewX:-3.6,x:255.9,y:757.3},0).wait(1).to({skewX:-3.5,x:256.1,y:757.2},0).wait(1).to({skewX:-3.3,x:256.4},0).wait(1).to({skewX:-3.2,x:256.6},0).wait(1).to({skewX:-3.1,x:256.8},0).wait(1).to({skewX:-3,x:257},0).wait(1).to({skewX:-2.8,x:257.2},0).wait(1).to({scaleY:0.39,skewX:-2.7,x:257.4,y:757.1},0).wait(1).to({skewX:-2.6,x:257.7},0).wait(1).to({skewX:-2.5,x:257.9},0).wait(1).to({skewX:-2.3,x:258.1},0).wait(1).to({skewX:-2.2,x:258.3},0).wait(1).to({skewX:-2.1,x:258.5},0).wait(1).to({skewX:-2,x:258.8},0).wait(1).to({skewX:-1.9,x:259,y:757},0).wait(1).to({skewX:-1.7,x:259.2,y:757.1},0).wait(1).to({skewX:-1.6,x:259.4,y:757},0).wait(1).to({skewX:-1.5,x:259.6},0).wait(1).to({skewX:-1.4,x:259.8},0).wait(1).to({skewX:-1.2,x:260.1},0).wait(1).to({skewX:-1.1,x:260.3},0).wait(1).to({skewX:-1,x:260.5},0).wait(1).to({skewX:-0.9,x:260.7},0).wait(1).to({skewX:-0.7,x:260.9},0).wait(1).to({skewX:-0.6,x:261.2},0).wait(1).to({skewX:-0.5,x:261.3},0).wait(1).to({skewX:-0.4,x:261.6,y:756.9},0).wait(1).to({skewX:-0.2,x:261.8},0).wait(1).to({skewX:-0.1,x:262,y:757},0).wait(1).to({skewX:0,x:262.2},0).wait(1).to({skewX:-0.3,x:261.8},0).wait(1).to({skewX:-0.5,x:261.3},0).wait(1).to({skewX:-0.8,x:260.9},0).wait(1).to({skewX:-1,x:260.4},0).wait(1).to({skewX:-1.3,x:260,y:756.9},0).wait(1).to({skewX:-1.5,x:259.5,y:757},0).wait(1).to({skewX:-1.8,x:259.1},0).wait(1).to({skewX:-2,x:258.6},0).wait(1).to({skewX:-2.3,x:258.2},0).wait(1).to({skewX:-2.5,x:257.7},0).wait(1).to({skewX:-2.8,x:257.3,y:757.1},0).wait(1).to({skewX:-3,x:256.8},0).wait(1).to({skewX:-3.3,x:256.4},0).wait(1).to({skewX:-3.6,x:255.9},0).wait(1).to({skewX:-3.8,x:255.5},0).wait(1).to({skewX:-4.1,x:255.1,y:757.2},0).wait(1).to({skewX:-4.3,x:254.6},0).wait(1).to({skewX:-4.6,x:254.2},0).wait(1).to({skewX:-4.8,x:253.7},0).wait(1).to({skewX:-5.1,x:253.3,y:757.3},0).wait(1).to({skewX:-5.3,x:252.8},0).wait(1).to({skewX:-5.6,x:252.4},0).wait(1));

	// grass copy
	this.instance_1 = new lib.grass_mccopy();
	this.instance_1.setTransform(45.7,868.8,0.386,0.385,0,-6.8,0,242.1,583.6);
	this.instance_1.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:431.4,regY:322,skewX:-6.7,x:107.1,y:768.7},0).wait(1).to({skewX:-6.6,x:107.2},0).wait(1).to({skewX:-6.5,x:107.4},0).wait(1).to({skewX:-6.4,x:107.5,y:768.6},0).wait(1).to({skewX:-6.3,x:107.7,y:768.7},0).wait(1).to({skewX:-6.2,x:107.8,y:768.6},0).wait(1).to({x:108},0).wait(1).to({skewX:-6.1,x:108.1},0).wait(1).to({skewX:-6,x:108.3,y:768.5},0).wait(1).to({skewX:-5.9,x:108.4,y:768.6},0).wait(1).to({skewX:-5.8,x:108.6,y:768.5},0).wait(1).to({skewX:-5.7,x:108.7},0).wait(1).to({skewX:-5.6,x:108.9},0).wait(1).to({skewX:-5.5,x:109.1},0).wait(1).to({x:109.2},0).wait(1).to({skewX:-5.4,x:109.3,y:768.4},0).wait(1).to({skewX:-5.3,x:109.5},0).wait(1).to({skewX:-5.2,x:109.7},0).wait(1).to({skewX:-5.1,x:109.8},0).wait(1).to({skewX:-5,x:110},0).wait(1).to({skewX:-4.9,x:110.1},0).wait(1).to({skewX:-4.8,x:110.3,y:768.3},0).wait(1).to({x:110.4,y:768.4},0).wait(1).to({skewX:-4.7,x:110.6,y:768.3},0).wait(1).to({skewX:-4.6,x:110.7},0).wait(1).to({skewX:-4.5,x:110.9},0).wait(1).to({skewX:-4.4,x:111},0).wait(1).to({skewX:-4.3,x:111.2},0).wait(1).to({skewX:-4.2,x:111.3},0).wait(1).to({skewX:-4.1,x:111.5},0).wait(1).to({x:111.7,y:768.2},0).wait(1).to({skewX:-4,x:111.8},0).wait(1).to({skewX:-3.9,x:111.9},0).wait(1).to({skewX:-3.8,x:112.1},0).wait(1).to({skewX:-3.7,x:112.3},0).wait(1).to({skewX:-3.6,x:112.4},0).wait(1).to({skewX:-3.5,x:112.6},0).wait(1).to({x:112.7,y:768.1},0).wait(1).to({skewX:-3.4,x:112.9},0).wait(1).to({skewX:-3.3,x:113,y:768.2},0).wait(1).to({skewX:-3.2,x:113.2,y:768.1},0).wait(1).to({skewX:-3.1,x:113.3},0).wait(1).to({skewX:-3,x:113.5},0).wait(1).to({skewX:-2.9,x:113.7},0).wait(1).to({skewX:-2.8,x:113.8},0).wait(1).to({x:113.9},0).wait(1).to({skewX:-2.7,x:114.1},0).wait(1).to({skewX:-2.6,x:114.2,y:768},0).wait(1).to({skewX:-2.5,x:114.3,y:768.1},0).wait(1).to({x:114.4},0).wait(1).to({skewX:-2.4,x:114.5},0).wait(1).to({skewX:-2.3,x:114.7,y:768},0).wait(1).to({x:114.8},0).wait(1).to({skewX:-2.2,x:114.9},0).wait(1).to({x:115},0).wait(1).to({skewX:-2.1,x:115.1},0).wait(1).to({skewX:-2,x:115.2},0).wait(1).to({x:115.3},0).wait(1).to({skewX:-1.9,x:115.5},0).wait(1).to({skewX:-1.8,x:115.6},0).wait(1).to({x:115.7},0).wait(1).to({skewX:-1.7,x:115.8},0).wait(1).to({x:115.9},0).wait(1).to({skewX:-1.6,x:116},0).wait(1).to({skewX:-1.5,x:116.1},0).wait(1).to({x:116.2},0).wait(1).to({skewX:-1.4,x:116.3},0).wait(1).to({skewX:-1.5,x:116.1},0).wait(1).to({skewX:-1.7,x:115.8},0).wait(1).to({skewX:-1.8,x:115.6},0).wait(1).to({scaleY:0.39,skewX:-2,x:115.3},0).wait(1).to({skewX:-2.1,x:115.1},0).wait(1).to({skewX:-2.2,x:114.8},0).wait(1).to({skewX:-2.4,x:114.6},0).wait(1).to({skewX:-2.5,x:114.4},0).wait(1).to({skewX:-2.7,x:114.1},0).wait(1).to({skewX:-2.8,x:113.8,y:768.1},0).wait(1).to({skewX:-3,x:113.6,y:768},0).wait(1).to({skewX:-3.1,x:113.3,y:768.1},0).wait(1).to({skewX:-3.2,x:113.1},0).wait(1).to({skewX:-3.4,x:112.8},0).wait(1).to({skewX:-3.5,x:112.6},0).wait(1).to({skewX:-3.7,x:112.3},0).wait(1).to({skewX:-3.8,x:112.1},0).wait(1).to({skewX:-3.9,x:111.9},0).wait(1).to({skewX:-4.1,x:111.6,y:768.2},0).wait(1).to({skewX:-4.2,x:111.4},0).wait(1).to({skewX:-4.4,x:111.1},0).wait(1).to({skewX:-4.5,x:110.9},0).wait(1).to({skewX:-4.6,x:110.6},0).wait(1).to({skewX:-4.8,x:110.4,y:768.3},0).wait(1).to({skewX:-4.9,x:110.1},0).wait(1).to({skewX:-5.1,x:109.8},0).wait(1).to({skewX:-5.2,x:109.6},0).wait(1).to({skewX:-5.4,x:109.4},0).wait(1).to({skewX:-5.5,x:109.1,y:768.4},0).wait(1).to({skewX:-5.6,x:108.9},0).wait(1).to({skewX:-5.8,x:108.6},0).wait(1).to({skewX:-5.9,x:108.4},0).wait(1).to({skewX:-6.1,x:108.1,y:768.5},0).wait(1).to({skewX:-5.8,x:108.5,y:768.4},0).wait(1).to({skewX:-5.6,x:108.9},0).wait(1).to({skewX:-5.4,x:109.3,y:768.3},0).wait(1).to({skewX:-5.2,x:109.7},0).wait(1).to({skewX:-5,x:110},0).wait(1).to({skewX:-4.8,x:110.4,y:768.2},0).wait(1).to({skewX:-4.5,x:110.8},0).wait(1).to({skewX:-4.3,x:111.2},0).wait(1).to({skewX:-4.1,x:111.6,y:768.1},0).wait(1).to({skewX:-3.9,x:111.9},0).wait(1).to({skewX:-3.7,x:112.3},0).wait(1).to({skewX:-3.5,x:112.7},0).wait(1).to({skewX:-3.2,x:113.1},0).wait(1).to({skewX:-3,x:113.4,y:768},0).wait(1).to({skewX:-2.8,x:113.8},0).wait(1).to({skewX:-2.6,x:114.2},0).wait(1).to({skewX:-2.4,x:114.6},0).wait(1).to({skewX:-2.2,x:115,y:767.9},0).wait(1).to({skewX:-1.9,x:115.3,y:768},0).wait(1).to({skewX:-1.7,x:115.7,y:767.9},0).wait(1).to({skewX:-1.5,x:116.1},0).wait(1).to({skewX:-1.3,x:116.5},0).wait(1).to({skewX:-1.1,x:116.9},0).wait(1).to({skewX:-0.9,x:117.2},0).wait(1).to({skewX:-0.6,x:117.6},0).wait(1).to({skewX:-0.4,x:118},0).wait(1).to({skewX:-0.2,x:118.4},0).wait(1).to({skewX:0,x:118.8,y:767.8},0).wait(1).to({skewX:-0.1,x:118.6},0).wait(1).to({skewX:-0.2,x:118.4},0).wait(1).to({skewX:-0.3,x:118.2},0).wait(1).to({skewX:-0.5,x:118},0).wait(1).to({skewX:-0.6,x:117.8},0).wait(1).to({skewX:-0.7,x:117.6},0).wait(1).to({skewX:-0.8,x:117.4,y:767.9},0).wait(1).to({skewX:-0.9,x:117.2},0).wait(1).to({skewX:-1,x:117},0).wait(1).to({skewX:-1.1,x:116.8},0).wait(1).to({skewX:-1.3,x:116.6},0).wait(1).to({skewX:-1.4,x:116.4},0).wait(1).to({skewX:-1.5,x:116.2},0).wait(1).to({skewX:-1.6,x:116},0).wait(1).to({skewX:-1.7,x:115.8},0).wait(1).to({skewX:-1.8,x:115.6},0).wait(1).to({skewX:-2,x:115.4},0).wait(1).to({skewX:-2.1,x:115.2},0).wait(1).to({skewX:-2.2,x:115},0).wait(1).to({skewX:-2.3,x:114.8},0).wait(1).to({skewX:-2.4,x:114.5},0).wait(1).to({skewX:-2.5,x:114.3,y:768},0).wait(1).to({skewX:-2.6,x:114.1,y:767.9},0).wait(1).to({skewX:-2.8,x:113.9},0).wait(1).to({skewX:-2.9,x:113.7,y:768},0).wait(1).to({skewX:-3,x:113.5},0).wait(1).to({skewX:-3.1,x:113.3},0).wait(1).to({skewX:-3.2,x:113.1},0).wait(1).to({skewX:-3.3,x:112.9},0).wait(1).to({skewX:-3.4,x:112.7},0).wait(1).to({skewX:-3.6,x:112.5},0).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).wait(1).to({regY:83.2,x:1348.2,y:311.9},0).wait(1).to({x:1311},0).wait(1).to({x:1273.9},0).wait(1).to({x:1236.7},0).wait(1).to({x:1199.6},0).wait(1).to({x:1162.4},0).wait(1).to({x:1125.3},0).wait(1).to({x:1088.2},0).wait(1).to({x:1051},0).wait(1).to({x:1013.9},0).wait(1).to({x:976.7},0).wait(1).to({x:939.6},0).wait(1).to({x:902.5},0).wait(1).to({x:865.3},0).wait(1).to({x:828.2},0).wait(1).to({x:791},0).wait(1).to({x:753.9},0).wait(1).to({x:716.7},0).wait(1).to({x:679.6},0).wait(1).to({x:642.5},0).wait(1).to({x:605.3},0).wait(1).to({x:568.2},0).wait(1).to({x:531},0).wait(1).to({x:493.9},0).wait(1).to({x:456.7},0).wait(1).to({x:419.6},0).wait(1).to({x:382.5},0).wait(1).to({x:345.3},0).wait(1).to({x:308.2},0).wait(1).to({x:271},0).wait(1).to({x:233.9},0).wait(1).to({x:196.8},0).wait(1).to({x:159.7},0).wait(1).to({x:122.5},0).wait(1).to({x:85.4},0).wait(1).to({x:48.2},0).wait(1).to({x:11.1},0).wait(1).to({x:-26},0).wait(1).to({x:-63.2},0).wait(1).to({x:-100.3},0).wait(1).to({x:-137.5},0).wait(1).to({x:-174.6},0).wait(1).to({x:-211.8},0).wait(1).to({x:-248.9},0).wait(1).to({regY:85,x:1385.3,y:313.7},0).wait(88));

	// bubbles- copy
	this.instance_10 = new lib.bubbles_mccopy();
	this.instance_10.setTransform(1014.5,1611.7,0.531,0.531,0,0,0,65.2,324.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).wait(1).to({regX:55.2,regY:162.5,scaleX:0.54,scaleY:0.54,x:1009.1,y:1477.2},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:1009,y:1428.8},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:1008.8,y:1380.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:1008.7,y:1332.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:1008.5,y:1283.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:1008.4,y:1235.4},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:1008.3,y:1187},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:1008.2,y:1138.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:1008,y:1090.3},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:1007.9,y:1041.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:1007.8,y:993.6},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:1007.6,y:945.2},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:1007.5,y:896.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:1007.4,y:848.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:1007.2,y:800.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:1007.1,y:751.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:1007,y:703.4},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:1006.9,y:655.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:1006.7,y:606.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1006.6,y:558.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:1006.4,y:510},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:1006.3,y:461.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1006.2,y:413.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1006.1,y:364.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1005.9,y:316.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1005.8,y:268.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1005.6,y:219.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1005.5,y:171.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1005.4,y:123.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1005.3,y:74.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1005.1,y:26.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1005,y:-21.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1004.9,y:-70.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1004.7,y:-118.6},0).wait(1).to({scaleX:1,scaleY:1,x:1004.6,y:-166.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:1004.5,y:-215.3},0).to({_off:true},1).wait(121));

	// bubbles- copy 2
	this.instance_11 = new lib.bubbles_mccopy();
	this.instance_11.setTransform(149.1,1120,0.531,0.531,0,0,0,65.2,324.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60).to({_off:false},0).wait(1).to({regX:55.2,regY:162.5,scaleX:0.54,scaleY:0.54,x:143.6,y:985.6},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:143.5,y:937.2},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:143.4,y:888.9},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:143.3,y:840.5},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:143.1,y:792.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:143,y:743.8},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:142.8,y:695.5},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:142.7,y:647.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:142.6,y:598.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:142.5,y:550.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:142.3,y:502},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:142.2,y:453.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:142,y:405.3},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:141.9,y:357},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:141.8,y:308.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:141.7,y:260.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:141.5,y:211.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:141.4,y:163.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:141.2,y:115.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:141.1,y:66.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:141,y:18.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:140.9,y:-29.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:140.7,y:-78.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:140.6,y:-126.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:140.5,y:-174.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:140.4,y:-223.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:140.2,y:-271.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:140.1,y:-320},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:139.9,y:-368.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:139.8,y:-416.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:139.7,y:-465},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:139.6,y:-513.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:139.4,y:-561.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:139.3,y:-610.1},0).wait(1).to({scaleX:1,scaleY:1,x:139.1,y:-658.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:139,y:-706.7},0).to({_off:true},1).wait(63));

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


// stage content:
(lib.FWWMM_all_v01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BackgroundLogo
	this.instance = new lib.Group();
	this.instance.setTransform(540.1,154.2,1,1,0,0,0,140.8,96.2);
	this.instance.shadow = new cjs.Shadow("rgba(35,31,32,0.749)",0,2,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(913));

	// BackgroundLoop
	this.BackgroundLoop = new lib.BackgroundLoop();
	this.BackgroundLoop.setTransform(574.1,626.7,1,1,0,0,0,574.1,626.7);

	this.timeline.addTween(cjs.Tween.get(this.BackgroundLoop).wait(913));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.3,380.7,2941.3,2704.5);

})(libBackground = libBackground||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libBackground, images, createjs, ss;