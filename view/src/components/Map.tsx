import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import axios from "axios";

interface DeliveryMapProps {
  children?: React.ReactNode;
}

const DeliveryMap = ({}: DeliveryMapProps) => {
  const [deliveryMap, setDeliveryMap] = useState([]);

  useEffect(() => {
    axios
      .get("https://merndeliveryapi.onrender.com/deliveries")
      .then((response) => {
        setDeliveryMap(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="w-full">
      <div id="map">
        <MapContainer
          center={[-14.235, -51.9253]}
          zoom={5}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {deliveryMap.map((delivery: any) => {
            return (
              <Marker
                key={delivery.id}
                position={delivery.address.location}
              ></Marker>
            );
          })}
        </MapContainer>
      </div>
    </section>
  );
};

export default DeliveryMap;
