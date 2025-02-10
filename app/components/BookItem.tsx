import { TrashIcon } from "@heroicons/react/24/outline";
import IconButton from "@/components/ui/icon-button";

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

interface BookItemProps {
  book: Book;
  onDelete: (id: number) => void;
}

export default function BookItem({ book, onDelete }: BookItemProps) {
  const { id, title, author, year } = book;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="border p-4 mb-4 rounded flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
      </div>
      <IconButton
        onClick={handleDelete}
        icon={<TrashIcon className="h-5 w-5" />}
      />
    </div>
  );
}
