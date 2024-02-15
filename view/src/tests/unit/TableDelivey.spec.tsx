import "@testing-library/jest-dom";
import DeliveryTable from "../../components/DeliveryTable/DeliveryTable";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import mockResolvedValueOnce from "axios-mock-adapter";

describe("Render Delivery Table Componet Elements", () => {
  beforeEach(() => {
    render(<DeliveryTable />);
  });

  it("Render Table", () => {
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  it("Should render table head items", () => {
    const thObject = [
      "Nome",
      "Rua",
      "Cidade",
      "País",
      "Peso(kg)",
      "Lat",
      "Lng",
    ];
    const th = screen.getAllByRole("columnheader");
    th.forEach((item, index) => {
      expect(item).toHaveTextContent(thObject[index]);
    });
  });

  it("Should rende correctly datas from api", async () => {
    const mockDeliveryData = [
      {
        id: "65c7b70ac2c05a9fbef98757",
        name: "Ruan",
        address: {
          publicPlace: "Rua Cláudio Brotherhood",
          city: "Recife",
          country: "Brazil",
          location: [10, 20],
        },
        kg: 20,
      },
    ];

    const mock = new mockResolvedValueOnce(axios);
    mock.onGet("https://delivery-api-7rc8.onrender.com/deliveries").reply(200, {
      deliveries: mockDeliveryData,
    });

    render(<DeliveryTable />);

    await waitFor(() => {
      const td = screen.getAllByRole("cell");
      expect(td[0]).toHaveTextContent("Ruan");
      expect(td[1]).toHaveTextContent("Rua Cláudio Brotherhood");
      expect(td[2]).toHaveTextContent("Recife");
      expect(td[3]).toHaveTextContent("Brazil");
      expect(td[4]).toHaveTextContent("20");
      expect(td[5]).toHaveTextContent("10");
      expect(td[6]).toHaveTextContent("20");
    });
  });

  

});
