import { render, screen } from "@testing-library/react";
import SlothForm from "./SlothForm";

describe("Given a SlothForm component", () => {
  describe("When it receives a text input'", () => {
    test("Then it should show a text Name:", () => {
      render(<SlothForm />);

      const inputText = "Name:";

      const text = screen.getByRole("textbox", { name: inputText });

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it renders", () => {
    test("Then it should show a button with text Add a sloth ", () => {
      render(<SlothForm />);

      const buttonText = "Add a sloth";

      const labelButtonText = screen.getByRole("button", { name: buttonText });

      expect(labelButtonText).toBeInTheDocument();
    });
  });

  describe("When it receives a number input'", () => {
    test("Then it should show the text Fingers:", () => {
      render(<SlothForm />);

      const inputText = "Fingers:";

      const text = screen.getByRole("spinbutton", { name: inputText });

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it receives a url input'", () => {
    test("Then it should show the text Picture URL:", () => {
      render(<SlothForm />);

      const inputText = "Picture URL:";

      const text = screen.getByRole("textbox", { name: inputText });

      expect(text).toBeInTheDocument();
    });
  });
});
