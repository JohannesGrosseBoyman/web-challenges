import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const handleChange = jest.fn();

  render(
    <Input
      labelText="Name of game"
      name="nameOfGame"
      placeholder="e.g. Dodelido"
      value="Go"
      onChange={handleChange}
      required
    />
  );
  const input = screen.getByLabelText("Name of game");
  const label = screen.getByText("Name of game");
  expect(input).toBeInTheDocument();
  expect(label).toBeInTheDocument();

  expect(input).toHaveAttribute("placeholder", "e.g. Dodelido");
  expect(input).toHaveAttribute("value", "Go");
  expect(input).toHaveAttribute("name", "nameOfGame");
  expect(input).toBeRequired();
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();
  const user = userEvent.setup();

  render(<Input labelText="Name" name="name.input" onChange={handleChange} />);

  const input = screen.getByLabelText("Name");
  expect(input).toBeInTheDocument();
  expect(handleChange).toHaveBeenCalledTimes(0);

  await user.type(input, "Johannes");

  expect(handleChange).toHaveBeenCalledTimes(8);
});
