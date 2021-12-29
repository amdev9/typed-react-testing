import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../Portal";

test("modal shows the children and a close button", async () => {
  // Arrange
  const handleClose = jest.fn();

  // Act
  render(
    <Modal onClose={handleClose}>
      <div data-testid="modal-child">test</div>
    </Modal>
  );
  // Assert

  const elem = screen.getByText("test")
  expect(elem).toBeTruthy();

  // Act
  userEvent.click(screen.getByText(/close/i));
  // Assert

  await waitFor(() => expect(handleClose).toHaveBeenCalledTimes(1)); 
});
