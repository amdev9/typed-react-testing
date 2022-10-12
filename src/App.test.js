import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen, within } from "@testing-library/react";

import App from "./App";
import * as api from "./api";
import TopLevelComponent from "./components/TopLevelComponent";

import ParentComponent from "./components/ParentComponent";
import ImageComponent from "./components/ImageComponent";
const mockChildComponent = jest.fn();

jest.mock("./components/ChildComponent", () => (props) => {
  mockChildComponent(props);
  return <mock-childComponent />;
});

const spyPurchaseFunction = jest.spyOn(api, "purchaseFunction");

const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

test("If ParentComponent is passed open and has data, ChildComponent is called with them", () => {
  render(<ParentComponent open data="some data" />);
  expect(mockChildComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      open: true,
      data: "some data",
    })
  );
});

test("If ParentComponent is not passed open, ChildComponent is not called", () => {
  render(<ParentComponent />);
  expect(mockChildComponent).not.toHaveBeenCalled();
});

jest.mock("./components/Modal", () => () => {
  return <mock-modal data-testid="modal" />;
});

test("If TopLevelComponent is passed the open prop Modal is rendered", () => {
  const { queryByTestId } = render(<TopLevelComponent open />);
  expect(queryByTestId("modal")).toBeTruthy();
});

test("If TopLevelComponent is not passed the open prop Modal is not rendered", () => {
  const { queryByTestId } = render(<TopLevelComponent />);
  expect(queryByTestId("modal")).toBe(null);
});

test("purchaseFunction called with correct product slug on second button click", () => {
  render(<App />);

  // Get the dog food buy button from an array of all buy buttons.
  const DogFoodButton = screen.queryAllByText("Buy Item")[1];

  userEvent.click(DogFoodButton);

  expect(spyPurchaseFunction).toHaveBeenCalledWith("dog-food");
});

test("purchaseFunction called with correct product slug on Dog Food click", () => {
  render(<App />);

  // Get the specific card and bind to query functions.
  const DogFoodCard = within(screen.getByText("Dog Food").parentElement);

  // Now we can click the specific button within that card.
  userEvent.click(DogFoodCard.getByRole("button", { name: "Buy Item" }));

  expect(spyPurchaseFunction).toHaveBeenCalledWith("dog-food");
});

describe("The image component", () => {
  test("alt contains correct value", () => {
    render(<ImageComponent size="large" />);
    const testImage = document.querySelector("img"); // as HTMLImageElement
    expect(testImage.alt).toContain("The image alt tag for the large image");
  });

  test("src contains correct value", () => {
    render(<ImageComponent size="large" />);
    const testImage = document.querySelector("img");
    expect(testImage.src).toContain("https://www.example.com/image-large.png");
  });
});


const setLocalStorage = (id, data) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

describe("Set local storage item", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("data is added into local storage", () => {
    const mockId = "111";
    const mockJson = { data: "json data" };
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });

  test("data in local storage which is overwritten", () => {
    const mockId = "222";
    const mockOldData = { data: "json data" };
    const mockNewData = { data: "new data" };

    window.localStorage.setItem(mockId, JSON.stringify(mockOldData));
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockOldData));

    setLocalStorage(mockId, mockNewData);
    window.localStorage.setItem(mockId, JSON.stringify(mockNewData));
  });

  test("only one ID is in localStorage", () => {
    const mockId = "333";
    const mockOldData = { data: "json data" };
    const mockNewData = { data: "new data" };

    window.localStorage.setItem(mockId, JSON.stringify(mockOldData));
    setLocalStorage(mockId, mockNewData);

    const allItems = window.localStorage.getAll();

    expect(Object.keys(allItems).length).toBe(1);
  });
});
