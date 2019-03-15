			/*
			|------------------------------------------|
			| Vizualizacija EU Parlamentarnih izbora   |
			|             - izlaznost -                |
			|------------------------------------------|
			| @author:  Egredžija Alen                 |
			| @version: 1.5 (12.6.2014)                |
			| @website: http://aquafeed.cleverapps.io  |
			|------------------------------------------|
			*/

			//Preloader
			Royal_Preloader.config({
				mode:           'text', // 'number', "text" ili "logo"
				text:           'EU Izbori 2014 - Izlaznost',
				timeout:        0,
				showInfo:       true,
				opacity:        1,
				background:     ['#74c476']
			});

			/** Dopunske funkcije za bojanje choropletha **/

			//Color pencil color is invoked for each of the states
			function Colorize()
			{ var retcolor;//The variable through which we will return the value for filling

			   for (var i = 0; i < data.length ; i++)//Passes 28 times, through all the elements in the data
				{
				   if(data[i].id == this.id)
				   { retcolor = getColor(data[i].turnout);}
				   //console.log(""+data[i].turnout+""+retcolor+"");
				}
			  return retcolor;

			}

			//Color to select color by percentage ... Brew for choropleth, chooses style and gets : http://colorbrewer2.org/
			function getColor(d)
			{
				return d > 1.9  ? '#662506' :
					   d > 1.6 ? '#993404' :
					   d > 1.3  ? '#cc4c02' :
					   d > 1  ? '#ec7014' :
					   d > 0.7  ? '#fe9929' :
					   d > 0.4  ? '#fec44f' :
					   d > 0.1  ? '#fee391' :
								  '#fff7bc';
			}

			/** A supplementary f is to interact with the map **/

			//Fje za hover mišem
			function hover()
			{
				d3.select(this).transition()
					.duration(340)
					.style("stroke-width","30")
					var p = this;
					d3.select("#tooltip")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 30) +"px")
					.select("#country")
					.text(function() //Vraća ime države u tooltip
						{
							for (var i = 0; i < data.length ; i++)
								{
									if(data[i].id == p.id)
										{
											//console.log(""+data[i].name+"");
											return data[i].name;
										}

								}

						});
				d3.select("#value")
					.text(function()//Return rate, for some reason, did not work with the previous one, but need another d3.select () call
						{
							for (var i = 0; i < data.length ; i++)
								{
									if(data[i].id == p.id)
										{
											return data[i].turnout;
										}
								}
						});
				d3.select("#tooltip").classed("hidden", false);//It changes to hidden in false, and displays a tooltip
			}

			function out()
			{
				d3.select(this).transition()
					.duration(380)
					.style("stroke-width","8");//It should be called otherwise the thickness of the border would remain
				//Hide tooltip
				d3.select("#tooltip").classed("hidden", true);
			}
