"use client";

import { useState, useEffect } from "react";
import BookItem from "./BookItem";

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await fetch("/api/books");
      if (!res.ok) throw new Error("Failed to fetch books");
      const data = await res.json();
      setBooks(data.books);
      setLoading(false);
    } catch (err) {
      setError("Failed to load books. Please try again later.");
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/books/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete book");
      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      setError("Failed to delete book. Please try again later.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} onDelete={handleDelete} />
      ))}
    </div>
  );
}
