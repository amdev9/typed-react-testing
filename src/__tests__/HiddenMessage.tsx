//@ts-nocheck
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CSSTransition } from "react-transition-group";
import HiddenMessage from "../HiddenMessage";

jest.mock("react-transition-group", () => {
  const FakeCSSTransition = jest.fn();
  return { CSSTransition: FakeCSSTransition };
});

beforeEach(() => {
  CSSTransition.mockImplementation(() => null);
});

test("you can mock things with jest.mock", async () => {
  render(<HiddenMessage initialShow={true} />);
  // const context = expect.any(Object);
  // const children = expect.any(Object);

  // const defaultProps = { children, className: "fade" };

  // TODO: fix transition expect
  
  // expect(CSSTransition).toHaveBeenCalledWith(
  //   { in: true, ...defaultProps },
  //   context
  // );
  userEvent.click(screen.getByText(/Show Message/i));
  
  

  // expect(CSSTransition).toHaveBeenCalledWith(
  //   { in: true, ...defaultProps },
  //   context
  // );
});
