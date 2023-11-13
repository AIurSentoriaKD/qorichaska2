"use client";
import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import keys from "@/keys";
import { FaTruckLoading } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -13.517237776146944,
  lng: -71.9838542980435,
};
function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: keys.mapsApiKey,
  });

  const [map, setMap] = React.useState(null);

  const [infopanel, setInfopanel] = useState(false);
  const activateInfo = () => {
    setInfopanel(!infopanel);
    console.log("info change");
  };

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF
        position={center}
        onClick={() => {
          activateInfo();
        }}
      />
      {infopanel && (
        <InfoWindowF
          position={center}
          zIndex={1}
          onCloseClick={() => {
            activateInfo();
          }}
        >
          <div>Hostal Qorichaska C. Nueva Alta 458, Cusco 08000</div>
        </InfoWindowF>
      )}
    </GoogleMap>
  ) : (
    <div className="flex justify-center align-middle items-center w-full h-[500px]">
      <AiOutlineLoading/>
    </div>
  );
}

export default MapComponent;
