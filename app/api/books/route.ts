import { NextResponse } from "next/server";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];

export async function GET() {
  // Simulating a delay to mimic database query
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({ books });
}

export async function POST(request: Request) {
  const book = await request.json();

  books.push({ ...book, id: books.length + 1 });

  return NextResponse.json({ message: "Book added successfully" });
}
