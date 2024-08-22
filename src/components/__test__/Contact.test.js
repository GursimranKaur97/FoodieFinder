import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {

// it and test are one and the same thing we can use anyone of those to write test case
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    const submit = screen.getByText("Submit");
    // Assertion
    expect(button).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");
    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });

});
