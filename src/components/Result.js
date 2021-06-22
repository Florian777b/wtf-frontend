import React, { useRef, useEffect, useState, useContext } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { AppData } from "../app-data-context";

mapboxgl.accessToken = process.env.REACT_APP_API_KEY;

function Result() {
    const {
        middlePoint,
    } = useContext(AppData);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lat, setLat] = useState(53.55053178941791);
    const [lng, setLng] = useState(9.992306454463948);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
        });
    });

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
            <p>{middlePoint}</p>
        </div>
    );
}

export default Result;