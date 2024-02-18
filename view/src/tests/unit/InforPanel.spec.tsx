import "@testing-library/jest-dom";
import InfoPanel from "../../components/InfoPanel/InfoPanel";
import { render, screen } from "@testing-library/react";

describe("Render InfoPanel Componet Elements", () => {
  beforeEach(() => {
    render(<InfoPanel />);
  });

  it("Render Register Clients", () => {
    const clients = screen.getByText(/Clientes Cadastrados:/i);
    expect(clients).toBeInTheDocument();
  });

});
