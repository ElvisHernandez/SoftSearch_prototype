import React, { useEffect } from "react";

const HelloWorld = ({API_KEY, coords}) => {
  const style = {
    width: "100%",
    height: "500px"
  };

    // var from = turf.point(coords);
    // var to = turf.point([-80.1373,26.1224]);
    // var options = {units: 'miles'};
    // var distance = turf.distance(from, to, options);


    var center = coords;
    var radius = 50;
    var options = {steps: 64, units: 'miles', properties: {foo: 'bar'}};
    var circle = turf.circle(center, radius, options);


    var points = turf.points([
      coords,
      [-80.1373,26.1224],
      [-81.7948,26.1420]
    ]);

    var ptsWithin = turf.pointsWithinPolygon(points, circle).features;

    function makeMarkers(pointsArray) {
      for(let i = 0; i < pointsArray.length; i++ ) {
        new mapboxgl.Marker()
        .setLngLat(pointsArray[i].geometry.coordinates)
        .addTo(map);
        console.log(pointsArray[i].geometry.coordinates)
      }
      
    }


  useEffect(() => {
    mapboxgl.accessToken = API_KEY;
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: coords,
    zoom: 8
    });
    // var marker = new mapboxgl.Marker()
    // .setLngLat(coords)
    // .addTo(map);

    // var ftlauderdale = new mapboxgl.Marker()
    // .setLngLat([-80.1373,26.1224])
    // .addTo(map);
    
    // var naples = new mapboxgl.Marker()
    // .setLngLat([-81.7948,26.1420])
    // .addTo(map);
    
    ptsWithin.forEach(({geometry}) => {
      new mapboxgl.Marker()
      .setLngLat(geometry.coordinates)
      .addTo(map);
    })
    


  }, []);

  return (
    <div>
      <h1>Hello World!! React is back! {console.log(ptsWithin[0].geometry.coordinates)}</h1>
      <div id="map" style={style}></div>
    </div>
  );
};

export default HelloWorld;
