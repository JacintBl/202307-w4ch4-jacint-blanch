import { render, screen } from "@testing-library/react";
import SlothForm from "./SlothForm";

describe("Given a SlothForm component", () => {
  describe("When it receives a text in first input'", () => {
    test("Then it should show a text Name:", () => {
      render(<SlothForm />);
      const inputText = "Name:";

      const text = screen.getByRole("textbox", { name: inputText });

      expect(text).toBeInTheDocument();
    });
  });
});
