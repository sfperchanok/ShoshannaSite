
var ourLoc;
var view;
var map;
var GWCLoc;

// Step 3: We should initalize our variables!
function init() {
	// Initalize things here
	ourLoc = ol.proj.fromLonLat([41.043316, 28.862457]);
	GWCLoc = ol.proj.fromLonLat([-87.641886, 41.882416]);
	view = new ol.View({
		center: ourLoc,
		zoom: 6 // Students can play around with the starting zoom.
	});

	map = new ol.Map({
		target: 'map', // The "Target" is our <div> name.
		layers: [
		  new ol.layer.Tile({
		    source: new ol.source.OSM() // Explain: this is a required variable.
		  })
		  // Explain: Open Layer offers different types of layers. Layers are like
		  // different brushes used to make the same image. They look different.
		  // Some might take more time than others.
		],
		// Note from the View Animation website:
		// Improve user experience by loading tiles while animating. Will make
		// animations stutter on mobile or slow devices.
		loadTilesWhileAnimating: true,
		view: view
	});
}

function panHome() {
  view.animate({
    center:ourLoc,
    duration:2000
  });
}

function panGWC() {
	view.animate({
    center:GWCLoc,
    duration:2000
  });
}

function panToLocation() {
  var countryName=document.getElementById("country-name").value;
	var lon=0.0
	var lat=0.0

  var query="https://restcountries.eu/rest/v2/name/"+countryName;
  query=query.replace(/ /g,"%20");
  //alert(query);

  var countryRequest=new XMLHttpRequest();
  countryRequest.open('GET',query,false);
  countryRequest.send();

	if (countryRequest.readyState != 4 || countryRequest.status != 200 || countryRequest.response === "") {
		window.console.error("Request had an error!");
		return;
	}

  //alert("Ready State "+countryRequest.readyState);
  //alert("Status "+countryRequest.status);
  //alert("Response "+countryRequest.response);

	var countryInformation=JSON.parse(countryRequest.responseText);

	lat=countryInformation[0].latlng[0];
	lon=countryInformation[0].latlng[1];

	//alert(countryName+": lon "+lon+"& lat "+lat);

	var location=ol.proj.fromLonLat([lon,lat]);
	view.animate({
    center:location,
    duration:2000
  });
}
//Rotate Animation

function spinToRome() {
        // Rotation animation takes the shortest arc, so animate in two parts
				var countryName=document.getElementById("country-name").value;
				var lon=0.0
				var lat=0.0

			  var query="https://restcountries.eu/rest/v2/name/"+countryName;
			  query=query.replace(/ /g,"%20");
			  alert(query);

			  var countryRequest=new XMLHttpRequest();
			  countryRequest.open('GET',query,false);
			  countryRequest.send();

			  //alert("Ready State "+countryRequest.readyState);
			  //alert("Status "+countryRequest.status);
			  alert("Response "+countryRequest.response);

				var countryInformation=JSON.parse(countryRequest.responseText);

				lat=countryInformation[0].latlng[0];
				lon=countryInformation[0].latlng[1];

				alert(countryName+": lon "+lon+"& lat "+lat);

				var location=ol.proj.fromLonLat([lon,lat]);
				var rotation = view.getRotation();
        view.animate({
          rotation: rotation + Math.PI,
          anchor: location,
          easing: easeIn
        }, {
          rotation: rotation + 2 * Math.PI,
          anchor: location,
          easing: easeOut
        });
      }

// Step 4: We can run the init function when the window loads.
window.onload = init;
