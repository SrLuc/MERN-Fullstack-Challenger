import DeliveryForm from "./components/DeliveryForm";
import DeliveryMap from "./components/Map";
import DeliveryTable from "./components/DeliveryTable";
import "./css/App.css";

function App() {
  return (
    <main className="xl:flex lg:flex md:flex justify-center main w-full">
      <DeliveryForm />
      <section className="flex flex-col h-full w-screen">
        <DeliveryMap />
        <DeliveryTable />
      </section>
    </main>
  );
}

export default App;
