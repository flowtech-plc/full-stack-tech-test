import { render, screen, waitFor } from "@testing-library/react";
import BookList from "../app/components/BookList";
import { jest } from "@jest/globals";

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        books: [
          { id: 1, title: "Test Book", author: "Test Author", year: 2023 },
        ],
      }),
  })
) as jest.Mock;

describe("BookList", () => {
  it("renders loading state initially", () => {
    render(<BookList />);
  });

  it("renders books after loading", async () => {
    render(<BookList />);
    await waitFor(() => {
      expect(screen.getByText("Test Book")).toBeInTheDocument();
    });
  });
});
