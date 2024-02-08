import Test from "../../components/Test";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Test Componet", () => {
  it("should render the component", () => {
    render(<Test />);
  });

  it("should rende Pedro Name", () => {
    render(<Test />);
    screen.getByText(/hello pedro/i);
  });

  it("should change the name of title", () => {
    render(<Test />);

    screen.getByText("Hello Pedro");

    const button = screen.getByText(/click here/i);

    fireEvent.click(button);

    screen.getByText("Hello Ruan");
  });
});
