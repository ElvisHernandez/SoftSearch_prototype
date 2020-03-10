import React, { useEffect } from "react";

const HelloWorld = ({API_KEY}) => {
  const style = {
    width: "100%",
    height: "500px"
  };

  useEffect(() => {
    mapboxgl.accessToken = API_KEY;
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-80.1936589, 25.7742658],
    zoom:10
    });
    var marker = new mapboxgl.Marker()
    .setLngLat([-80.1936589, 25.7742658])
    .addTo(map);
  }, []);

  return (
    <div>
      <h1>Hello World!! React is back!</h1>
      <div id="map" style={style}></div>
    </div>
  );
};

export default HelloWorld;
