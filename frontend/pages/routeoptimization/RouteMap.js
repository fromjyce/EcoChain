import { useEffect, useState } from "react";

const RouteMap = ({ source, destination, waypoints, onRouteDetails }) => {
    useEffect(() => {
        const loadMap = () => {
          const mapElement = document.getElementById("map");
          if (!mapElement) {
            return;
          }
      
          const map = new window.google.maps.Map(mapElement, {
            center: { lat: 20.5937, lng: 78.9629 },
            zoom: 6,
          });
        };
      
        if (window.google) {
          setTimeout(loadMap, 100); // Delay for DOM readiness
        } else {
          const script = document.createElement("script");
          script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
          script.async = true;
          document.head.appendChild(script);
          script.onload = () => setTimeout(loadMap, 100);
        }
      }, []);      

  return <div id="map" style={{ width: "100%", height: "100%" }} className="rounded-lg shadow-lg" />;
};

export default RouteMap;
