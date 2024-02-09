import "@testing-library/jest-dom";
import DeliveryForm from "../../components/DeliveryForm/DeliveryForm";
import { render, screen } from "@testing-library/react";

describe("Delivery Form Componet Test", () => {

  it("should render the name input", () => {
    render(<DeliveryForm />);
    const name = screen.getByPlaceholderText(/Nome do Cliente/i);
    expect(name).toBeInTheDocument();
  });

  it("should render the geolocation button", () => {
    render(<DeliveryForm />);
    const button = screen.getByRole("button", { name: "Buscar" });
    expect(button).toBeInTheDocument();
  });

  it("should render the latitude input", () => {
    render(<DeliveryForm />);
    const latitude = screen.getByPlaceholderText("latitude");
    expect(latitude).toBeInTheDocument();
  });

  it("should render the longitude input", () => {
    render(<DeliveryForm />);
    const longitude = screen.getByPlaceholderText("longitude");
    expect(longitude).toBeInTheDocument();
  });
});
