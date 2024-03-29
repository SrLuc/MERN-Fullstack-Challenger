import axios from "axios";
import { useEffect, useState } from "react";

const InfoPanel = () => {
  const API_URL = "https://delivery-api-7rc8.onrender.com/deliveries";
  const [deliveries, setDeliveries] = useState([]);
  const [totalWeight, setTotalWeight] = useState<number>(0);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      const deliveriesData = response.data.deliveries;
      setDeliveries(deliveriesData);

      const total = deliveriesData.reduce(
        (acc: number, delivery: any) => acc + parseInt(delivery.kg),
        0
      );
      setTotalWeight(total);
    });
  }, []);

  return (
    <section className="flex h-full justify-start p-2 border bg-stone-100">
      <p className="">
        Clientes Cadastrados: <strong>{deliveries.length}</strong>
      </p>
      <p className="ml-5">
        Peso Total/kg: <strong>{totalWeight}</strong>
      </p>
    </section>
  );
};

export default InfoPanel;
