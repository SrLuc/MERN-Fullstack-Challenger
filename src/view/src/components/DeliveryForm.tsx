import axios from "axios";

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
        className="flex flex-col "
        onSubmit={() => {
          handleDeliverySubmit();
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nome do Cliente"
          className="text-center"
          id="name"
        />
        <input
          type="text"
          name="Kg"
          placeholder="Peso da Entrega"
          className="text-center"
          id="kg"
        />
        <input
          type="text"
          name="address"
          placeholder="Endereço Cliente"
          className="text-center"
          id="address"
        />
        <button onClick={getGeolocation} type="button">
          Buscar
        </button>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="latitude"
            disabled
            className="sm:w-1/2 text-center"
            id="lat"
          />
          <input
            type="text"
            placeholder="longitude"
            disabled
            className="sm:w-1/2 text-center"
            id="lng"
          />
        </div>
        <button type="submit">Cadastrar Cliente</button>
        <button type="submit">Resetar Cadastro</button>
      </form>
    </section>
  );
};

export default DeliveryForm;
