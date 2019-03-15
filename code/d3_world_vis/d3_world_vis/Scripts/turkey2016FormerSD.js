            /*
			|------------------------------------------|
			| Vizualizacija EU Parlamentarnih izbora   |
			|                - S&D -                   |
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
				background:     ['#ef3b2c']
			});

			/** Additional functions for coloring choroplets  **/

			function Colorize()
			{
				var retcolor;
				for (var i = 0; i < data.length ; i++)
				{
				   if(data[i].id == this.id)
				    {
						retcolor = getColor(data[i].kg_per_capitaTurkey);
					}
				}
			  return retcolor;
			}

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

			function hover()
			{
				d3.select(this).transition()
					.duration(340)
					.style("stroke-width","30");
				var p = this;
				d3.select("#tooltip")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 30) +"px")
					.select("#country")
					.text(function()
						{
							for (var i = 0; i < data.length ; i++)
								{
									if(data[i].id == p.id)
										{
											return data[i].name;
										}
								}
						});
				d3.select("#value")
					.text(function()
						{
							for (var i = 0; i < data.length ; i++)
								{
									if(data[i].id == p.id)
										{
											return data[i].kg_per_capitaTurkey;
										}
								}
						});
				d3.select("#value2")
					.text(function()
						{
							for (var i = 0; i < data.length ; i++)
								{
									if(data[i].id == p.id)
										{
											return data[i].seats;
										}
								}
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
