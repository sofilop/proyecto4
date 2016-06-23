/**
 * Pemex maps and markers
 */

var directionsDisplay;
var directionsService=new google.maps.DirectionsService();
var map;

function initialize(){
	var directionsRerenderOptions={
			markerOptions:{
				icon:new google.maps.MarkerImage("images/gas3.png")
			}
	};
	directionsDisplay=new google.maps.DirectionsRenderer();
	directionsDisplay.setOptions(directionsRerenderOptions);
	var mexico_city =new google.maps.LatLng(22.1564699, -100.98554089999999);
	var my_options={
			zoom:5,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			center :mexico_city
	}
	 var map=new google.maps.Map(document.getElementById('map'), my_options);
	directionsDisplay.setMap(map);
	
		var infoWindow1 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Mexico City</h3><img src="images/mexi.png" /><br> <p>Tipo de sitio: Gas;leo</p><br />   latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="http://en.wikipedia.org/wiki/Mexico_city">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });
		

	   var mkr = new google.maps.Marker({
				draggable: true,
				icon : 'images/pozo1.gif',
				
				position:{lat: 19.4978, lng: -99.1269},
				map: map,
				title: 'Ciudad de Mexico'
				
			});
	    google.maps.event.addListener(mkr, 'mouseover', onMarkerMouseOver);

			var infoWindow1= new google.maps.InfoWindow;
	   
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Campeche</h3><img src="images/chi.png" /><br> <p>Syte Type: Petr&oacute;leo</p><br />  latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="http://en.wikipedia.org/wiki/Mexico_city">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });
		

	  var mkr1 = new google.maps.Marker({
				draggable: true,
				icon : 'images/pozo1.gif',
				
				position:{lat: 18.866509, lng: -89.997500},
				map: map,
				title: 'Monterrey'
			
			});
	 

	    google.maps.event.addListener(mkr1, 'mouseover', onMarkerMouseOver);
		
		
			var infoWindow1= new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Tampico</h3><img src="images/tam.jng" /><br> <p>Syte Type: Petr&oacute;leo</p><br />   latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://es.wikipedia.org/wiki/Tampico">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });
		
	  var mkr1 = new google.maps.Marker({
				draggable: true,
				icon : 'images/pozo1.gif',
				
				position:{ lat: 22.216  , lng: -97.850},
				map: map,
				title: 'Tampico'
			
			});
	 

	    google.maps.event.addListener(mkr1, 'mouseover', onMarkerMouseOver);
		

			var infoWindow1 = new google.maps.InfoWindow;

	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Veracruz</h3><img src="images/ver.png" /><br>  <p>Tipo de sitio: Petr&oacute;leo</p><br /> latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="http://en.wikipedia.org/wiki/Veracruz">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });
		

	  var mkr1 = new google.maps.Marker({
				draggable: true,
				icon : 'images/pozo1.gif',
				
				position:{ lat: 19.1738 , lng: -96.1342},
				map: map,
				title: 'Veracruz'
			
			});
	 
			
	    google.maps.event.addListener(mkr1, 'mouseover', onMarkerMouseOver);
		
		

			var infoWindow1 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Monterrey</h3><img src="images/mty.jpg" /><br>  <p>Tipo de sitio: Petr&oacute;leo</p><br /> latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://en.wikipedia.org/wiki/Monterrey">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });
		

	  var mkr1 = new google.maps.Marker({
				draggable: true,
				icon : 'images/pozo1.gif',
				
				position:{ lat: 25.6667, lng: -100.3167},
				map: map,
				title: 'Monterrey'
			
			});
	 
	    google.maps.event.addListener(mkr1, 'mouseover', onMarkerMouseOver);

		var infoWindow1 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>San Luis Potosi</h3><img src="images/slp.png" /><br /> <p>Tipo de sitio: Petr&oacute;leo & Gas</p><br />  latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://en.wikipedia.org/wiki/San_Luis_Potos%C3%AD_City">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });
	
	   var mkrslp = new google.maps.Marker({
				draggable: true,
				icon : 'images/pozo1.gif',
				
				position:{lat: 23.116667, lng: -101.099998},
				map: map,
				title: 'San Luis Potosi'
				
			});
	   google.maps.event.addListener(mkrslp, 'mouseover', onMarkerMouseOver);
	   
	   
	   var infoWindow1 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Campeche</h3><img src="images/camp.jpg" /><br> <p>Tipo de sitio: Petr&oacute;leo</p><br />  latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="http://en.wikipedia.org/wiki/Mexico_city">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });
	   var mkrcam = new google.maps.Marker({
			draggable: true,
			icon : 'images/pozo1.gif',
			
			position:{lat: 18.866509, lng: -89.997500},
			map: map,
			title: 'Campeche'

		});
	   google.maps.event.addListener(mkrcam, 'mouseover', onMarkerMouseOver);
	   
	   
	   var infoWindow1 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Tula</h3><img src="images/th.jpg" /><br>  <p>Tipo de sitio: Petr&oacute;leo & Gas</p><br />  latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://es.wikipedia.org/wiki/Tula">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });
	   var markhlg = new google.maps.Marker({
			draggable: true,
			icon : 'images/pozo1.gif',
			
			position:{lat: 20.053249, lng: -99.339386},
			map: map,
			title: 'Tula'
		});
	   google.maps.event.addListener(markhlg, 'mouseover', onMarkerMouseOver);
	   
	   /*
	   var infoWindow1 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Cadereyta</h3><img src="images/CADEY.jpg" /><br> <p>Tipo de sitio: Petr&oacute;leo & Gas</p><br />  latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://en.wikipedia.org/wiki/Cadereyta_Jim%C3%A9nez,_Nuevo_Le%C3%B3n">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });
	   var mark1 = new google.maps.Marker({
			draggable: true,
			icon : 'images/pozo1.gif',
			
			position:{lat: 25.586632, lng: -99.942761},
			map: map,
			title: 'Cadereyta'
		});
	   google.maps.event.addListener(mark1, 'mouseover', onMarkerMouseOver);
	   */
	   
	   
	   var infoWindow1 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Salamanca</h3><img src="images/sala.jng" /><br /> <p>Tipo de sitio: Petr&oacute;leo</p><br />latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="href="https://es.wikipedia.org/wiki/Salamanca_(M%C3%A9xico)">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });

	   var marksg = new google.maps.Marker({
				draggable: true,
				icon : 'images/pozo1.gif',
				
				position:{lat: 20.577230, lng: -101.186946},
		 
				map: map,
				title: 'Salamanca'
		});

	    google.maps.event.addListener(marksg, 'mouseover', onMarkerMouseOver);

	    
		var infoWindow1 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Tabasco</h3><img src="images/tab.jpg" /><br /> <p>Tipo de sitio: Petr&oacute;leo</p><br /> latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://es.wikipedia.org/wiki/Tabasco">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });

	   var marktab = new google.maps.Marker({
				draggable: true,
				icon : 'images/pozo1.gif',
				
				position:{lat: 18.018078, lng: -92.953069 },
		 
				map: map,
				title: 'Tabasco'
				
			});
	    google.maps.event.addListener(marktab, 'mouseover', onMarkerMouseOver);
	    
	    
	    
	    var infoWindow1 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Ojeda</h3><img src="images/Ojeda.JPG" /><br /> <p>Tipo de sitio: Petr&oacute & Gas;leo</p><br /> latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://es.wikipedia.org/wiki/Tabasco">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });

	   var marktab = new google.maps.Marker({
				draggable: true,
				icon : 'images/pozo1.gif',
				
				position:{lat: 25.384035, lng: -94.461221 },
		 
				map: map,
				title: 'Ojeda'
				
			});
	    google.maps.event.addListener(marktab, 'mouseover', onMarkerMouseOver);
	    
	    
	    
	    
	    var infoWindow1 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Arana</h3><img src="images/P04_Arana.jpg" /><br /> <p>Tipo de sitio: Petr&oacute & Gas;leo</p><br /> latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://es.wikipedia.org/wiki/Tabasco">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });

	   var marktab = new google.maps.Marker({
				draggable: true,
				icon : 'images/pozo1.gifg',
				
				position:{lat: 24.576132, lng: -93.117247 },
		 
				map: map,
				title: 'Arana'
				
			});
	    google.maps.event.addListener(marktab, 'mouseover', onMarkerMouseOver);
	    
	    
	    
	    
	    var infoWindow1 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Quiroga</h3><img src="images/quiroga.jpg" /><br /> <p>Tipo de sitio: Petr&oacute & Gas;leo</p><br /> latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://es.wikipedia.org/wiki/Tabasco">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });

	   var marktab = new google.maps.Marker({
				draggable: true,
				icon : 'images/pozo1.gif',
				
				position:{lat: 24.163744, lng: -95.085735},
		 
				map: map,
				title: 'Quiroga'
				
			});
	    google.maps.event.addListener(marktab, 'mouseover', onMarkerMouseOver);
	    
	    
	    
	    var infoWindow1 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Orizaba</h3><img src="images/Orizba.PNG" /><br /> <p>Tipo de sitio: Petr&oacute;leo & Gas</p><br /> latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://es.wikipedia.org/wiki/Tabasco">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });

	   var marktab = new google.maps.Marker({
				draggable: true,
				icon : 'images/pozo1.gif',
				
				position:{lat: 18.442144, lng: -96.346442 },
		 
				map: map,
				title: 'Orizaba'
				
			});
	    google.maps.event.addListener(marktab, 'mouseover', onMarkerMouseOver);
	    
	    
	    
	
	
}

var robot;
var tRob =0;
var tDist=0;

var arrgc =new Array;
var arrgcs =new Array;
var arrgcuen=new Array;
var robotarrg= new Array;
var disarrg =  new Array;


function handleDirectionsResponse(start,end,directionsResult){
	directionsDisplay.setDirections(directionsResult);*
	var routes=directionsResult.routes;
	for(var i=0;i<routes.length;i++){
		var totalDistance=0;
		
		var legs=routes[i].legs;
		for( j=0;j<legs.length;j++){
			totalDistance +=legs[j].distance.value;
		}
		document.getElementById("distance").innerHTML=Math.round(totalDistance/1000);
		var month = ((totalDistance/1000) /730)/0.1;
		
		
		
		if ((totalDistance/1000) <=403.2 ){
			robot = 1;
		}
		if ((totalDistance/1000) >403.2 && (totalDistance/1000)<=806.4){
			robot = 2;
		}
		if ((totalDistance/1000) >806.4 && (totalDistance/1000)<=1209.6){
			robot = 3;
		}
		if ((totalDistance/1000) >1209.6 && (totalDistance/1000)<=1612.8){
			robot = 4;
		}
		if ((totalDistance/1000) >1612.8 && (totalDistance/1000)<=2016){
			robot = 5;
		}
		
		tRob=tRob+robot;
		tDist=tDist+(totalDistance/1000);
	

		arrgcs=arrgcs + start +'<br />';
		arrgcuen=arrgcuen+end+'<br />';

		robotarrg=robotarrg+robot+'<br />';
		   
		disarrg=disarrg+(totalDistance/1000)+'<br />';
		   
		   
	
		document.getElementById("robot").innerHTML= robot;
		document.getElementById("distance").innerHTML=Math.round(totalDistance/1000);
		document.getElementById("months").innerHTML= month.toFixed(2)/robot;
		document.getElementById("trobs").innerHTML= tRob;
		
		document.getElementById("Tdisarrg").innerHTML= disarrg;
		
		document.getElementById("robotarrg").innerHTML= robotarrg;
		
		
		document.getElementById("totaldis").innerHTML= Math.round(tDist);
		document.getElementById("endAcumludador").innerHTML= arrgcuen +"\n";
		document.getElementById("combost").innerHTML= arrgcs  ;

		
		
		
		
		
	}
	
}

function calcRoute(){
	var start=document.getElementById("start").value;
	var end=document.getElementById("end").value;
	var request={
			origin:start,
			destination:end,
			travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(directionsResult,status){
		if(status==google.maps.DirectionsStatus.OK){
			handleDirectionsResponse(start, end, directionsResult);
		}
	});
}


