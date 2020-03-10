import React, { useEffect } from "react";

const HelloWorld = ({API_KEY, coords, jobs}) => {
  const style = {
    width: "100%",
    height: "500px"
  };

    // var from = turf.point(coords);
    // var to = turf.point([-80.1373,26.1224]);
    // var options = {units: 'miles'};
    // var distance = turf.distance(from, to, options);


  function filterGeoJsonPoints(points) {
    var center = coords;
    var radius = 500;
    var options = {steps: 64, units: 'miles', properties: {foo: 'bar'}};
    var circle = turf.circle(center, radius, options);
    var geoPoints = turf.points(points)
    return( turf.pointsWithinPolygon(geoPoints, circle).features )
  }

  function geoJsonPoints(array) {
    let points = array.map( ({longitude,latitude}) => {
      return [longitude,latitude]
    })
    // console.log(points)
    return points //points is an array of 2D LngLat arrays
  }

  useEffect(() => {
    mapboxgl.accessToken = API_KEY;
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: coords,
    zoom: 6
    });
    // var marker = new mapboxgl.Marker()
    // .setLngLat(coords)
    // .addTo(map);
    

    filterGeoJsonPoints(geoJsonPoints(jobs))
    .forEach(({geometry}) => {
      new mapboxgl.Marker()
      .setLngLat(geometry.coordinates)
      .addTo(map);
    })

  }, []);

  return (
    <div>
      {/* <h1>Hello World!! React is back! {console.log(ptsWithin[0].geometry.coordinates)}</h1> */}
  <p>{console.log(filterGeoJsonPoints(geoJsonPoints(jobs)))}</p>
      {/* <h2>Testingggggg {console.log(jobs)}</h2> */}
      <div id="map" style={style}></div>
    </div>
  );
};

export default HelloWorld;
