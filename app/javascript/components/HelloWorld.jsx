import React, { useEffect } from 'react'

const HelloWorld = () => {

    const style = {
        width: "500px",
        height: "500px"
    }

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZWx2aXNoZXJuYW5kZXoiLCJhIjoiY2s3a2JkMGViMTRlOTNlbXV4c3EwMXl4aiJ9.Qw2GhP9wSD3182I1Voj2lw';
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
        });
    },[])

    return(
        <div>
            <h1>Hello World!! React is back!</h1>
            <div id='map' style={style}></div>
        </div>
    )
}

export default HelloWorld