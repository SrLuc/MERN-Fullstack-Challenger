import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
//const API_URL = import.meta.env.VITE_API_URL;
const API_URL = "https://delivery-api-7rc8.onrender.com";

interface DeliveryMapProps {
  children?: React.ReactNode;
}

const DeliveryMap = ({}: DeliveryMapProps) => {
  const [deliveryMap, setDeliveryMap] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/deliveries`)
      .then((response) => {
        const deliveries = response.data.deliveries;
        setDeliveryMap(deliveries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <div id="map" className="mapContainer">
        <MapContainer
          center={[-5.022581064784649, -18.28778813528943]}
          zoom={3}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {deliveryMap.map((delivery: any) => {
            return (
              <Marker key={delivery._id} position={delivery.address.location}>
                <Popup>
                  <p>
                    Entrega para : <strong>{delivery.name}</strong>
                  </p>
                  <p>
                    Endereço: <strong>{delivery.address.publicPlace}</strong>
                  </p>
                  <p>
                    País : <strong>{delivery.address.country}</strong>
                  </p>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </section>
  );
};

export default DeliveryMap;
