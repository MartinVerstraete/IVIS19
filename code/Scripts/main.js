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
var data;
$.getJSON("Scripts/superjson.json", function( json ) {
	data = json;
});

/** Common functions to all choropleths **/
//Importing extern SVG-a
//SVG Map of Europe modified, downloaded from : https://upload.wikimedia.org/wikipedia/commons/b/b3/Blank_map_of_Europe.svg
var svgMap = d3.select("#map"); //Select a div in the DOM that will contain the map
d3.xml("Map/europe.svg", "image/svg+xml", function(error, mapFragment) {
	if (error) {console.log(error); return;}
	var svg = mapFragment.getElementsByTagName("svg")[0];
	svgMap.node().appendChild(svg);

	//Invoking separate functions for all countries via # id in the whole element

	d3.select("#be").on("mouseover",hover).on("click",function(){country="Belgium";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#dk").on("mouseover",hover).on("click",function(){country="Denmark";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#de").on("mouseover",hover).on("click",function(){country="Germany";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#ie").on("mouseover",hover).on("click",function(){country="Ireland";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#fr").on("mouseover",hover).on("click",function(){country="France";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#it").on("mouseover",hover).on("click",function(){country="Italy";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#lu").on("mouseover",hover).on("click",function(){country="Luxembourg";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#nl").on("mouseover",hover).on("click",function(){country="Netherlands";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#uk").on("mouseover",hover).on("click",function(){country="United Kingdom";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#gr").on("mouseover",hover).on("click",function(){country="Greece";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#es").on("mouseover",hover).on("click",function(){country="Spain";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#pt").on("mouseover",hover).on("click",function(){country="Portugal";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#se").on("mouseover",hover).on("click",function(){country="Sweden";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#at").on("mouseover",hover).on("click",function(){country="Austria";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#fi").on("mouseover",hover).on("click",function(){country="Finland";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#cz").on("mouseover",hover).on("click",function(){country="Czechia";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#ee").on("mouseover",hover).on("click",function(){country="Estonia";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	//d3.select("#cy").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
	d3.select("#lt").on("mouseover",hover).on("click",function(){country="Lithuania";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#lv").on("mouseover",hover).on("click",function(){country="Latvia";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#hu").on("mouseover",hover).on("click",function(){country="Hungary";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#mt").on("mouseover",hover).on("click",function(){country="Malta";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#pl").on("mouseover",hover).on("click",function(){country="Poland";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#si").on("mouseover",hover).on("click",function(){country="Slovenia";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#sk").on("mouseover",hover).on("click",function(){country="Slovakia";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#bg").on("mouseover",hover).on("click",function(){country="Bulgaria";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#ro").on("mouseover",hover).on("click",function(){country="Romania";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	d3.select("#hr").on("mouseover",hover).on("click",function(){country="Croatia";parent.document.getElementsByTagName( 'frameset' )[ 0 ].cols="50%,50%";console.log(country);window.open("Sankey-Diagram/sankeySpain.html?country=" + encodeURI(country)+"&year=" + encodeURI(year)+"&impExp=" + encodeURI(impExp),'rightframe');}).on("mouseout",out).style("fill",Colorize);
	//d3.select("#tr").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);


	//Sets the scroller to the bottom
	$('html, body').scrollTop($(document).height());

});


//Disables linking to 'fake' link, ie '#'
[].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el) {
	el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
} );
