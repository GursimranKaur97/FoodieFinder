import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByRole("button");
  //   const loginTxt = screen.getByText("Login");
  //   expect(loginButton).toBeInTheDocument();
  //   expect(loginTxt).toBeInTheDocument();

  // OR
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - (0 items)");
  expect(cartItems).toBeInTheDocument();

  const cartItems1 = screen.getByText(/Cart/); // Regex
  expect(cartItems1).toBeInTheDocument();
});

it("Should change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login"});
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", {name: "Logout"});
  expect(logoutButton).toBeInTheDocument();
});
