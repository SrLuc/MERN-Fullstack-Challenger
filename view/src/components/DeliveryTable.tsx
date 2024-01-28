import { useEffect, useState } from "react";
import axios from "axios";
import encrypted from "../../encrypted";

interface DeliveryTableProps {}

const DeliveryTable = ({}: DeliveryTableProps) => {
  const [deliveryDataTable, setDeliveryDataTable] = useState([]);

  useEffect(() => {
    axios
      .get(encrypted.ALL_DELIVERIES)
      .then((response) => {
        setDeliveryDataTable(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="teste">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Rua</th>
            <th>Cidade</th>
            <th>País</th>
            <th>Peso</th>
            <th>Lat</th>
            <th>Lng</th>
          </tr>
        </thead>
        <tbody>
          {deliveryDataTable.map((deliveryData: any) => {
            return (
              <tr key={deliveryData.id}>
                <td>{deliveryData.name}</td>
                <td>{deliveryData.address.publicPlace}</td>
                <td>{deliveryData.address.city}</td>
                <td>{deliveryData.address.country}</td>
                <td>{deliveryData.kg}</td>
                <td>{deliveryData.address.location[0]}</td>
                <td>{deliveryData.address.location[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default DeliveryTable;
