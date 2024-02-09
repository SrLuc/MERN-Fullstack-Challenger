import "@testing-library/jest-dom";
import DeliveryForm from "../../components/DeliveryForm/DeliveryForm";
import { render, screen, waitFor } from "@testing-library/react";

describe("Delivery Form Componet Test", () => {
  it("should render the geolocation button", async () => {
    render(<DeliveryForm />);
    await waitFor(() => {
      const button = screen.getByText(/Buscar/i);
      expect(button).toBeInTheDocument();
    });
  });
});
