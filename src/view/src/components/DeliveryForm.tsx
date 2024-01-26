import axios from "axios";
import "../css/UIElements.css";

interface DeliveryFormProps {}

const DeliveryForm = ({}: DeliveryFormProps) => {
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
      axios.post("http://localhost:7936/deliveries", body);
      alert("Cadastro realizado com sucesso");
    }
  };

  const API_KEY = "AIzaSyB7Q6umkMcCwXwVb2wl5B4Htdy84fw89F0";
  const getGeolocation = () => {
    const lat = document.getElementById("lat") as HTMLInputElement;
    const lng = document.getElementById("lng") as HTMLInputElement;
    const address = document.getElementById("address") as HTMLInputElement;

    const addressValue = address.value;

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressValue}&key=${API_KEY}`;

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

  return (
    <section className="p-5 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
      <form
        action="POST"
        className="flex flex-col h-1/2 justify-evenly "
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
              fill-rule="evenodd"
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
        <button className="styledButton" type="submit">
          Cadastrar Cliente
        </button>
        <button className="styledButton" type="submit">
          Resetar Cadastro
        </button>
      </form>
    </section>
  );
};

export default DeliveryForm;
