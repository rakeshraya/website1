/* Cooke Map*/     

function map() {       
    var mapCanvas1 = document.getElementById("CookeMap");     
    /* title google map */  
    var myCenter1 = new google.maps.LatLng(52.676486,  -1.158571); 
    /* location of map */   
    var mapOptions1 = {
        center: myCenter1,
        zoom: 17
        };         
                
    var map1 = new google.maps.Map(mapCanvas1, mapOptions1); 
    var marker1 = new google.maps.Marker({       
        /* marker on google maps*/
        position: myCenter1,
        animation: google.maps.Animation.BOUNCE 
        /* bounce marker on google map*/     
        });       
		
        marker1.setMap(map1);         
    var infowindow1 = new google.maps.InfoWindow({       
        content: "The Cooke E Learning Foundation <br> 250 Astill Lodge Road <br> Tongwell <br> Leicester <br> LE4 1EF <br> UK"
        });               
        /* address presented on map */   
        infowindow1.open(map1, marker1);
}
  