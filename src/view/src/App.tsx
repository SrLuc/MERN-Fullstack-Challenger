import DeliveryForm from "./components/DeliveryForm";
import DeliveryMap from "./components/Map";
import DeliveryTable from "./components/DeliveryTable";
import "./css/App.css";

function App() {
  return (
    <main className="xl:flex lg:flex md:flex justify-center">
      <DeliveryForm />
      <section className="flex flex-col w-screen">
        <DeliveryMap />
        <DeliveryTable />
      </section>
    </main>
  );
}

export default App;
