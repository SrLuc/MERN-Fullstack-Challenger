import DeliveryForm from "./components/DeliveryForm";
import DeliveryMap from "./components/Map";
import "./css/App.css";

function App() {
  return (
    <main className="flex h-screen">
      <DeliveryForm />
      <DeliveryMap />
    </main>
  );
}

export default App;
