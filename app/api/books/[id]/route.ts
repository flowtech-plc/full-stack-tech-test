import { NextResponse } from "next/server";

let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number.parseInt(params.id);
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  books = books.filter((book) => book.id !== id);

  return NextResponse.json({ message: "Book deleted successfully" });
}
