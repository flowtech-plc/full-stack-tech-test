import BookList from "./components/BookList";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Library</h1>
      <BookList />
    </main>
  );
}
