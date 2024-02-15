import "@testing-library/jest-dom";
import DeliveryForm from "../../components/DeliveryForm/DeliveryForm";
import { render, screen } from "@testing-library/react";


describe("Render Delivery Form Componet Elements", () => {
  beforeEach(() => {
    render(<DeliveryForm />);
  });

  it("should render the name input", () => {
    const name = screen.getByPlaceholderText(/Nome do Cliente/i);
    expect(name).toBeInTheDocument();
  });

  it("should render the kg input", () => {
    const kg = screen.getByPlaceholderText(/Peso da Entrega/i);
    expect(kg).toBeInTheDocument();
  });

  it("should render the address input", () => {
    const address = screen.getByPlaceholderText(/Endereço Cliente/i);
    expect(address).toBeInTheDocument();
  });

  it("should render the geolocation button", () => {
    const button = screen.getByRole("button", { name: "Buscar" });
    expect(button).toBeInTheDocument();
  });

  it("should render the latitude input", () => {
    const latitude = screen.getByPlaceholderText("latitude");
    expect(latitude).toBeInTheDocument();
  });

  it("should render the longitude input", () => {
    const longitude = screen.getByPlaceholderText("longitude");
    expect(longitude).toBeInTheDocument();
  });

  it("should render the submit button", () => {
    const submit = screen.getByText("Cadastrar Cliente");
    expect(submit).toBeInTheDocument();
  });

  it("should render the latitude input as disabled", () => {
    const latitude = screen.getByPlaceholderText("latitude");
    expect(latitude).toBeDisabled();
  });

  it("should render the longitude input as disabled", () => {
    const longitude = screen.getByPlaceholderText("longitude");
    expect(longitude).toBeDisabled();
  });
});

describe("Call functions of Delivery Form Component", () => {
  it("should call the getGeolocation function when the button is clicked", () => {
    render(<DeliveryForm />);
    const button = screen.getByRole("button", { name: "Buscar" });
    const getGeolocation = jest.fn();
    button.onclick = getGeolocation;
    button.click();
    expect(getGeolocation).toHaveBeenCalled();
  });

});
