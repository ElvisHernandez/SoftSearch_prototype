import React, { useEffect } from "react";

const HelloWorld = () => {
  const style = {
    width: "100%",
    height: "500px"
  };

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWx2aXNoZXJuYW5kZXoiLCJhIjoiY2s3azJ5cHByMTJteTNsbWIwa2c2ZjR3YiJ9.FSjCSG-su1IiJqC4Hugp0Q';
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
