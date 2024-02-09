import Test from "../../components/Test";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test Componet", () => {
  it("should render the test component", () => {
    render(<Test />);
  });

  it("should render the button in Test Component", () => {
    render(<Test />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should render the button with text 'Click me'", () => {
    render(<Test />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/Click me/i);
  });

  it("should render the next state of the button when clicked", () => {
    render(<Test />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toHaveTextContent(/Click me clicked/i);
  });

  it("should call the function when button is clicked", () => {
    const onClick = jest.fn();
    render(<Test />);
    const button = screen.getByRole("button");
    button.onclick = onClick;
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("should render the button with red background", () => {
    render(<Test />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle("background-color: red");
  });
});
