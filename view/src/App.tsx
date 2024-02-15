import DeliveryForm from "./components/DeliveryForm/DeliveryForm";
import DeliveryMap from "./components/Map";
import InfoPanel from "./components/InfoPanel/InfoPanel";
import DeliveryTable from "./components/DeliveryTable/DeliveryTable";
import "./css/App.css";

function App() {
  return (
    <main className="xl:flex lg:flex">
      <DeliveryForm />
      <section className="flex flex-col h-full w-screen">
        <DeliveryMap />
        <InfoPanel />
        <DeliveryTable />
      </section>
    </main>
  );
}

export default App;
