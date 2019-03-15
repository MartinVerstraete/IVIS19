 /*

 	CHANGE COLOR OF COUNTRIES BASED ON VALUES HERE!!!!!

sheep2016FormerALDE.js

			|------------------------------------------|
			| Vizualizacija EU Parlamentarnih izbora   |
			|                - ALDE -                  |
			|------------------------------------------|
			| @author:  Egredžija Alen                 |
			| @version: 1.5 (12.6.2014)                |
			| @website: http://aquafeed.cleverapps.io  |
			|------------------------------------------|
			*/

			//Preloader
			Royal_Preloader.config({
				mode:           'text', // 'number', "text" ili "logo"
				text:           'Country Heat Map - IVIS19',
				timeout:        0,
				showInfo:       true,
				opacity:        1,
				background:     ['#fec44f']
			});

			/** Additional functions for coloring choroplets **/
			var animal = "Sheep";
			var year = "2016";
			var impExp = "Import Quantity";

			function changeImport_Export(import_export) {
				impExp = import_export;
				var id_list = ["be","dk","de","ie","fr","it","lu","nl","uk","gr","es","pt","se","at","fi","cz","ee","lt","lv","hu","mt","pl","si","sk","bg","ro","hr"];
				for (var id in id_list){
					d3.select("#"+id_list[id]).style("fill",Colorize2(id_list[id]));
				}
			}

			function changeMeat(newAnimal) {
							animal = newAnimal;
							var id_list = ["be","dk","de","ie","fr","it","lu","nl","uk","gr","es","pt","se","at","fi","cz","ee","lt","lv","hu","mt","pl","si","sk","bg","ro","hr"];
							for (var id in id_list){
								d3.select("#"+id_list[id]).style("fill",Colorize2(id_list[id]));
							}
						}

			function changeYear(newYear) {
					year = newYear;
					var id_list = ["be","dk","de","ie","fr","it","lu","nl","uk","gr","es","pt","se","at","fi","cz","ee","lt","lv","hu","mt","pl","si","sk","bg","ro","hr"];
					for (var id in id_list){
						d3.select("#"+id_list[id]).style("fill",Colorize2(id_list[id]));
					}
				}

			function Colorize()
			{
			//	console.log("animal " + animal + " year " + year + " Imp or exp " + impExp);
				var retcolor;
				var p = this;
			//	alert(data.id);
			//console.log(window.data["Import Quantity"]["2016"]["fr"]["meat"][animal]);
				retcolor = getColor(window.data[impExp][year][p.id]["meat"][animal]);

			  return retcolor;
			}

			function Colorize2(id)
			{
				var retcolor;
				//console.log("id: "+id +" animal " + animal);
				//console.log(window.data[impExp][year][id]["meat"][animal]);
				retcolor = getColor(window.data[impExp][year][id]["meat"][animal]);

			  return retcolor;
			}

			function getColor(d)
			{
				return d > 5.130  ? '#662506' :
					   d > 1.309 ? '#993404' :
					   d > 0.425  ? '#cc4c02' :
					   d > 0.149  ? '#ec7014' :
					   d > 0.041  ? '#fe9929' :
					   d > 0.009  ? '#fec44f' :
					   d > 0.001  ? '#fee391' :
								  '#fff7bc';
			}



			function hover()
			{
				d3.select(this).transition()
					.duration(340)
					.style("stroke-width","30");
				var p = this;
				d3.select("#tooltip")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 30) +"px")
					.select("#country_id")
					.text(function()
						{
							return window.data[impExp][year][p.id]["name"];
					});
				d3.select("#value")
					.text(function()
						{return window.data[impExp][year][p.id]["meat"][animal].toFixed(3);
						});
				d3.select("#value2")
					.text(function()
						{
							return window.data[impExp][year][p.id]["meat"]["pop"];
						});
			    d3.select("#tooltip").classed("hidden", false);
			}
			function out()
			{
				d3.select(this).transition()
					.duration(380)
					.style("stroke-width","8");
				d3.select("#tooltip").classed("hidden", true);
			}
