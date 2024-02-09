import "@testing-library/jest-dom";
import DeliveryForm from "../../components/DeliveryForm/DeliveryForm";
import { render, screen } from "@testing-library/react";

describe("Delivery Form Componet Test", () => {


  it("should render the geolocation button", () => {
    render(<DeliveryForm />);
    const button = screen.findByText(/Buscar/i);
    expect(button).toBeInTheDocument();
  });

 
});
