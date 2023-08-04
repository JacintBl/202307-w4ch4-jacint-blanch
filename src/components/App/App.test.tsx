import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given a App component", () => {
  describe("When it receives a text inside the header'", () => {
    test("Then it should show Add a sloth in the header", () => {
      render(<App />);
      const texto = "Add a sloth";

      const header = screen.getByRole("heading", { name: texto });

      expect(header).toBeInTheDocument();
    });
  });
});
