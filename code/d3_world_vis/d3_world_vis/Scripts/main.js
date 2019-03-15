			/*
			|------------------------------------------|
			| Vizualizacija EU Parlamentarnih izbora   |
			|              - main.js -                 |
			|------------------------------------------|
			| @author:  Egredžija Alen                 |
			| @version: 1.5 (12.6.2014)                |
			| @website: http://aquafeed.cleverapps.io  |
			|------------------------------------------|
			*/

			/** Common functions to all choropleths **/
			//Importing extern SVG-a
			//SVG Map of Europe modified, downloaded from : https://upload.wikimedia.org/wikipedia/commons/b/b3/Blank_map_of_Europe.svg
			var svgMap = d3.select("#map"); //Select a div in the DOM that will contain the map
			d3.xml("Map/europe.svg", "image/svg+xml", function(error, mapFragment) {
				if (error) {console.log(error); return;}
				var svg = mapFragment.getElementsByTagName("svg")[0];
				svgMap.node().appendChild(svg);

				//Invoking separate functions for all countries via # id in the whole element
				d3.select("#be").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#dk").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#de").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#ie").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#fr").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#it").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#lu").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#nl").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#uk").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#gr").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#es").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#pt").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#se").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#at").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#fi").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#cz").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#ee").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#cy").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#lt").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#lv").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#hu").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#mt").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#pl").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#si").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#sk").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#bg").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#ro").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#hr").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#tr").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);

				//Sets the scroller to the bottom
				$('html, body').scrollTop($(document).height());

			});

			//Data that contains the country id(ISO-3116-1-ALPHA2 code in lower case),
			//Exit rate and full name for tooltip and data on individual results (izvor: http://www.results-elections2014.eu/en/turnout.html)
			//sheep,2016 :)
			var data =[
				{"id":"al","no":40,"name":"Albania","population":2938428,"element":"Import Quantity","year":2016,"unit":"tonnes","value":77,"kg_per_capitaTurkey":0.02620448757,"kg_per_capitaSheep":0.04015752641},
				{"id":"at","no":157,"name":"Austria","population":8766201,"element":"Import Quantity","year":2016,"unit":"tonnes","value":34588,"kg_per_capitaTurkey":3.945608822,"kg_per_capitaSheep":0.3111952373},
				{"id":"by","no":260,"name":"Belarus","population":9433874,"element":"Import Quantity","year":2016,"unit":"tonnes","value":5569,"kg_per_capitaTurkey":0.590319523,"kg_per_capitaSheep":0.002756025785},
				{"id":"be","no":380,"name":"Belgium","population":11562784,"element":"Import Quantity","year":2016,"unit":"tonnes","value":40062,"kg_per_capitaTurkey":3.46473652,"kg_per_capitaSheep":1.977637911},
				{"id":"ba","no":450,"name":"Bosnia and Herzegovina","population":3501774,"element":"Import Quantity","year":2016,"unit":"tonnes","value":1248,"kg_per_capitaTurkey":0.3563907894,"kg_per_capitaSheep":0.03512505376},
				{"id":"bg","no":564,"name":"Bulgaria","population":6988739,"element":"Import Quantity","year":2016,"unit":"tonnes","value":9783,"kg_per_capitaTurkey":1.399823344,"kg_per_capitaSheep":0.1661243895},
				{"id":"hr","no":674,"name":"Croatia","population":4140148,"element":"Import Quantity","year":2016,"unit":"tonnes","value":5081,"kg_per_capitaTurkey":1.227250813,"kg_per_capitaSheep":0.3920149714},
				{"id":"cz","no":793,"name":"Czechia","population":10630589,"element":"Import Quantity","year":2016,"unit":"tonnes","value":13264,"kg_per_capitaTurkey":1.24772014,"kg_per_capitaSheep":0.04101371994},
				{"id":"dk","no":911,"name":"Denmark","population":5775224,"element":"Import Quantity","year":2016,"unit":"tonnes","value":5306,"kg_per_capitaTurkey":0.9187522423,"kg_per_capitaSheep":0.6546932206},
				{"id":"ee","no":1025,"name":"Estonia","population":1303798,"element":"Import Quantity","year":2016,"unit":"tonnes","value":1546,"kg_per_capitaTurkey":1.185766507,"kg_per_capitaSheep":0.2439028132},
				{"id":"fo","no":1085,"name":"Faroe Islands","population":49692,"element":"Import Quantity","year":2016,"unit":"tonnes","value":20,"kg_per_capitaTurkey":0.4024792723,"kg_per_capitaSheep":8.713676246},
				{"id":"fi","no":1192,"name":"Finland","population":5561389,"element":"Import Quantity","year":2016,"unit":"tonnes","value":1787,"kg_per_capitaTurkey":0.3213226048,"kg_per_capitaSheep":0.3488337176},
				{"id":"fr","no":1312,"name":"France","population":65480710,"element":"Import Quantity","year":2016,"unit":"tonnes","value":29683,"kg_per_capitaTurkey":0.4533090738,"kg_per_capitaSheep":1.336225585},
				{"id":"de","no":1432,"name":"Germany","population":82438639,"element":"Import Quantity","year":2016,"unit":"tonnes","value":114756,"kg_per_capitaTurkey":1.392017158,"kg_per_capitaSheep":0.4821040289},
				{"id":"gr","no":1550,"name":"Greece","population":11124603,"element":"Import Quantity","year":2016,"unit":"tonnes","value":11503,"kg_per_capitaTurkey":1.034014427,"kg_per_capitaSheep":0.7301833603},
				{"id":"hu","no":1669,"name":"Hungary","population":9655361,"element":"Import Quantity","year":2016,"unit":"tonnes","value":3919,"kg_per_capitaTurkey":0.4058885007,"kg_per_capitaSheep":0.02848158655},
				{"id":"is","no":1749,"name":"Iceland","population":340566,"element":"Import Quantity","year":2016,"unit":"tonnes","value":54,"kg_per_capitaTurkey":0.1585595744,"kg_per_capitaSheep":0.002936288414},
				{"id":"ie","no":1862,"name":"Ireland","population":4847139,"element":"Import Quantity","year":2016,"unit":"tonnes","value":10727,"kg_per_capitaTurkey":2.213058053,"kg_per_capitaSheep":0.7534341392},
				{"id":"it","no":1982,"name":"Italy","population":59216525,"element":"Import Quantity","year":2016,"unit":"tonnes","value":10807,"kg_per_capitaTurkey":0.182499733,"kg_per_capitaSheep":0.4768770204},
				{"id":"lv","no":2101,"name":"Latvia","population":1911108,"element":"Import Quantity","year":2016,"unit":"tonnes","value":1180,"kg_per_capitaTurkey":0.6174428656,"kg_per_capitaSheep":0.06488382656},
				{"id":"lt","no":2218,"name":"Lithuania","population":2864459,"element":"Import Quantity","year":2016,"unit":"tonnes","value":3396,"kg_per_capitaTurkey":1.185564185,"kg_per_capitaSheep":0.0317686516},
				{"id":"lu","no":2335,"name":"Luxembourg","population":596992,"element":"Import Quantity","year":2016,"unit":"tonnes","value":902,"kg_per_capitaTurkey":1.510908019,"kg_per_capitaSheep":1.269698756},
				{"id":"mt","no":2417,"name":"Malta","population":433245,"element":"Import Quantity","year":2016,"unit":"tonnes","value":242,"kg_per_capitaTurkey":0.5585754019,"kg_per_capitaSheep":1.204860991},
				{"id":"me","no":2503,"name":"Montenegro","population":629355,"element":"Import Quantity","year":2016,"unit":"tonnes","value":193,"kg_per_capitaTurkey":0.306663171,"kg_per_capitaSheep":0.2002049718},
				{"id":"nl","no":2621,"name":"Netherlands","population":17132908,"element":"Import Quantity","year":2016,"unit":"tonnes","value":20315,"kg_per_capitaTurkey":1.185729825,"kg_per_capitaSheep":1.812243432},
				{"id":"no","no":2727,"name":"Norway","population":5400916,"element":"Import Quantity","year":2016,"unit":"tonnes","value":9,"kg_per_capitaTurkey":0.001666383999,"kg_per_capitaSheep":0.1634907856},
				{"id":"pl","no":2852,"name":"Poland","population":38028278,"element":"Import Quantity","year":2016,"unit":"tonnes","value":9176,"kg_per_capitaTurkey":0.2412941233,"kg_per_capitaSheep":0.02729547733},
				{"id":"pt","no":2972,"name":"Portugal","population":10254666,"element":"Import Quantity","year":2016,"unit":"tonnes","value":29564,"kg_per_capitaTurkey":2.882980294,"kg_per_capitaSheep":0.5585749941},
				{"id":"md","no":3044,"name":"Republic of Moldova","population":4029750,"element":"Import Quantity","year":2016,"unit":"tonnes","value":3009,"kg_per_capitaTurkey":0.7466964452,"kg_per_capitaSheep":0.000248154352},
				{"id":"ro","no":3155,"name":"Romania","population":19483360,"element":"Import Quantity","year":2016,"unit":"tonnes","value":15598,"kg_per_capitaTurkey":0.800580598,"kg_per_capitaSheep":0.0194524969},
				{"id":"ru","no":3272,"name":"Russian Federation","population":143895551,"element":"Import Quantity","year":2016,"unit":"tonnes","value":6050,"kg_per_capitaTurkey":0.04204438538,"kg_per_capitaSheep":0.02259972582},
				{"id":"rs","no":3367,"name":"Serbia","population":8733407,"element":"Import Quantity","year":2016,"unit":"tonnes","value":841,"kg_per_capitaTurkey":0.09629689765,"kg_per_capitaSheep":0.02015250177},
				{"id":"sk","no":3478,"name":"Slovakia","population":5450987,"element":"Import Quantity","year":2016,"unit":"tonnes","value":6723,"kg_per_capitaTurkey":1.23335462,"kg_per_capitaSheep":0.02036328467},
				{"id":"si","no":3596,"name":"Slovenia","population":2081900,"element":"Import Quantity","year":2016,"unit":"tonnes","value":5126,"kg_per_capitaTurkey":2.462173976,"kg_per_capitaSheep":0.1940535088},
				{"id":"es","no":3716,"name":"Spain","population":46441049,"element":"Import Quantity","year":2016,"unit":"tonnes","value":42809,"kg_per_capitaTurkey":0.9217922705,"kg_per_capitaSheep":0.1914685433},
				{"id":"se","no":3831,"name":"Sweden","population":10053135,"element":"Import Quantity","year":2016,"unit":"tonnes","value":3082,"kg_per_capitaTurkey":0.3065710348,"kg_per_capitaSheep":1.047136043},
				{"id":"ch","no":3945,"name":"Switzerland","population":8608259,"element":"Import Quantity","year":2016,"unit":"tonnes","value":9615,"kg_per_capitaTurkey":1.116950594,"kg_per_capitaSheep":0.7804133217},
				{"id":"ua","no":4120,"name":"Ukraine","population":43795220,"element":"Import Quantity","year":2016,"unit":"tonnes","value":3342,"kg_per_capitaTurkey":0.07630969773,"kg_per_capitaSheep":0.0003425031316},
				{"id":"uk","no":4240,"name":"United Kingdom","population":66959016,"element":"Import Quantity","year":2016,"unit":"tonnes","value":35399,"kg_per_capitaTurkey":0.5286666698,"kg_per_capitaSheep":1.301975525}];
				/*
			{id:"be",turnout:1.977637911,name:"Belgium",ep:4,sd:4,seats:21,ad:90},
			{id:"dk",turnout:0.6546932206,name:"Denmark",ep:1,sd:3,seats:13,ad:95},
			{id:"de",turnout:0.4821040289,name:"Germany",ep:34,sd:27,seats:96,ad:80},
			{id:"ie",turnout:0.7534341392,name:"Ireland",ep:4,sd:0,seats:11,ad:70},
			{id:"fr",turnout:1.336225585,name:"France",ep:20,sd:13,seats:74,ad:72},
			{id:"it",turnout:0.4768770204,name:"Italy",ep:17,sd:31,seats:73,ad:50},
			{id:"lu",turnout:1.269698756,name:"Luxembourg",ep:3,sd:1,seats:6,ad:48},
			{id:"nl",turnout:1.812243432,name:"Netherlands",ep:5,sd:3,seats:26,ad:21},
			{id:"uk",turnout:1.301975525,name:"United Kingdom",ep:0,sd:20,seats:73,ad:11},
			{id:"gr",turnout:0.7301833603,name:"Greece",ep:5,sd:4,seats:21,ad:8},
			{id:"es",turnout:0.1914685433,name:"Spain",ep:17,sd:14,seats:54,ad:16},
			{id:"pt",turnout:0.5585749941,name:"Portugal",ep:7,sd:8,seats:21,ad:65},
			{id:"se",turnout:1.047136043,name:"Sweden",ep:4,sd:5,seats:20,ad:43},
			{id:"at",turnout:0.3111952373,name:"Austria",ep:5,sd:5,seats:18,ad:38},
			{id:"fi",turnout:0.3488337176,name:"Finland",ep:3,sd:2,seats:13,ad:98},
			{id:"cz",turnout:0.04101371994,name:"Czechia",ep:7,sd:4,seats:21,ad:100},
			{id:"ee",turnout:0.2439028132,name:"Estonia",ep:1,sd:1,seats:6,ad:78},
			{id:"cy",turnout:2,name:"Cyprus",ep:2,sd:2,seats:6,ad:45},
			{id:"lt",turnout:0.0317686516,name:"Lithuania",ep:2,sd:2,seats:11,ad:48},
			{id:"lv",turnout:0.06488382656,name:"Latvia",ep:4,sd:1,seats:8,ad:58},
			{id:"hu",turnout:0.02848158655,name:"Hungary",ep:12,sd:4,seats:21,ad:86},
			{id:"mt",turnout:1.204860991,name:"Malta",ep:3,sd:3,seats:6,ad:16},
			{id:"pl",turnout:0.02729547733,name:"Poland",ep:23,sd:5,seats:51,ad:26},
			{id:"si",turnout:0.1940535088,name:"Slovenia",ep:5,sd:1,seats:8,ad:56},
			{id:"sk",turnout:0.02036328467,name:"Slovakia",ep:6,sd:4,seats:13,ad:36},
			{id:"bg",turnout:0.1661243895,name:"Bulgary",ep:7,sd:4,seats:17,ad:21},
			{id:"ro",turnout:0.0194524969,name:"Romania",ep:15,sd:16,seats:32,ad:31},
			{id:"hr",turnout:0.3920149714,name:"Croatia",ep:5,sd:2,seats:11,ad:10},
			{id:"tr",turnout:2,name:"Turkey",ep:1,sd:1,seats:6,ad:90}]; */

			//Disables linking to 'fake' link, ie '#'
			[].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el) {
				el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
			} );
