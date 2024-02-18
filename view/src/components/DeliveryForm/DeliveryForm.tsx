import axios from "axios";
import "../../css/UIElements.css";
//const API_GEOLOCATION_KEY = import.meta.env.VITE_GEOLOCATION_GOOGLE_API_KEY;
const API_GEOLOCATION_KEY = "AIzaSyB7Q6umkMcCwXwVb2wl5B4Htdy84fw89F0";
//const API_URL = import.meta.env.VITE_API_URL;
const API_URL = "https://delivery-api-7rc8.onrender.com";

const DeliveryForm = () => {
  const handleDeliverySubmit = () => {
    const name = document.getElementById("name") as HTMLInputElement;
    const kg = document.getElementById("kg") as HTMLInputElement;
    const address = document.getElementById("address") as HTMLInputElement;

    const body = {
      name: name.value,
      kg: kg.value,
      address: address.value,
    };

    if (name.value === "" || kg.value === "" || address.value === "") {
      return alert("Preencha todos os campos");
    } else {
      axios.post(`${API_URL}/deliveries`, body);
      alert("Cadastro realizado com sucesso");
      window.location.reload();
    }
  };

  const getGeolocation = () => {
    const lat = document.getElementById("lat") as HTMLInputElement;
    const lng = document.getElementById("lng") as HTMLInputElement;
    const address = document.getElementById("address") as HTMLInputElement;

    const addressValue = address.value;

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
      addressValue
    )}&key=${API_GEOLOCATION_KEY}`;

    axios
      .get(url)
      .then((response) => {
        lat.value = response.data.results[0].geometry.location.lat;
        lng.value = response.data.results[0].geometry.location.lng;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteAllDeliveries = () => {
    axios.delete(`${API_URL}/deliveries`);
    alert("Todos os cadastros foram deletados");
    window.location.reload();
  };

  return (
    <section className="">
      <form
        action="POST"
        className="flex flex-col"
        onSubmit={() => {
          handleDeliverySubmit();
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nome do Cliente"
          className="text-center userInputs"
          id="name"
        />
        <input
          type="text"
          name="Kg"
          placeholder="Peso da Entrega"
          className="text-center userInputs"
          id="kg"
        />
        <input
          type="text"
          name="address"
          placeholder="Endereço Cliente"
          className="text-center userInputs"
          id="address"
        />
        <button className="searchButton" onClick={getGeolocation} type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-repeat"
            viewBox="0 0 16 16"
          >
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
            <path
              fillRule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
            ></path>
          </svg>
          Buscar
        </button>
        <div className="flex justify-around">
          <input
            type="text"
            placeholder="latitude"
            disabled
            className="sm:w-2/3 text-center latLong"
            id="lat"
          />
          <input
            type="text"
            placeholder="longitude"
            disabled
            className="sm:w-2/3 text-center latLong"
            id="lng"
          />
        </div>
        <div className="flex flex-col p-2 ">
          <button className="styledButton" type="submit">
            Cadastrar Cliente
          </button>
          <button
            className="styledButton"
            type="button"
            onClick={deleteAllDeliveries}
          >
            Resetar Cadastro
          </button>
        </div>
      </form>
    </section>
  );
};

export default DeliveryForm;
