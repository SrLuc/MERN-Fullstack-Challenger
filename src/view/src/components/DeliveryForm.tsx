

interface DeliveryFormProps {}

const DeliveryForm = ({}: DeliveryFormProps) => {
  return (
    <section className="p-5 w-1/4">
      <form action="POST" className="flex flex-col ">
        <input
          type="text"
          name="name"
          placeholder="Nome do Cliente"
          className="text-center"
        />
        <input
          type="text"
          name="Kg"
          placeholder="Peso da Entrega"
          className="text-center"
        />
        <input
          type="text"
          name="address"
          placeholder="Endereço Cliente"
          className="text-center"
        />
        <button type="submit">Buscar</button>
        <div className="flex">
          <input
            type="text"
            placeholder="latitude"
            disabled
            className="sm:w-1/2 text-center"
          />
          <input
            type="text"
            placeholder="longitude"
            disabled
            className="sm:w-1/2 text-center"
          />
        </div>
        <button type="submit">Cadastrar Cliente</button>
        <button type="submit">Resetar Cadastro</button>
      </form>
    </section>
  );
};

export default DeliveryForm;
