import React, { useEffect } from "react";

const HelloWorld = ({API_KEY, coords}) => {
  const style = {
    width: "100%",
    height: "500px"
  };

    var from = turf.point(coords);
    var to = turf.point([-80.1373,26.1224]);
    var options = {units: 'miles'};

    var distance = turf.distance(from, to, options);

  useEffect(() => {
    mapboxgl.accessToken = API_KEY;
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: coords,
    zoom: 9
    });
    var marker = new mapboxgl.Marker()
    .setLngLat(coords)
    .addTo(map);

    var ftlauderdale = new mapboxgl.Marker()
    .setLngLat([-80.1373,26.1224])
    .addTo(map);    
  }, []);

  return (
    <div>
      <h1>Hello World!! React is back! {distance}</h1>
      <div id="map" style={style}></div>
    </div>
  );
};

export default HelloWorld;
