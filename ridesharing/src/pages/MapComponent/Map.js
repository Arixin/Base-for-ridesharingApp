import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styled from "styled-components";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(51.77637022647593);
  const [lat] = useState(19.489080507824035);
  const [zoom] = useState(14);
  const [API_KEY] = useState("BkfzqKjoskDfJvKOsLOY");

  //   51.77637022647593, 19.489080507824035;
  const MapComp = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
  `;

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lat, lng],
      zoom: zoom,
    });
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([lat, lng])
      .addTo(map.current);
  });

  return <MapComp ref={mapContainer} />;
};

export default Map;
