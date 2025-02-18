interface Author {
  firstName: string;
  lastName: string;
}

interface Book {
  title: string;
  author: Author;
  publicationDate: number;
  genres: string[];
}

const book: Book = {
  title: "The Great Gatsby",
  author: {
    firstName: "F. Scott",
    lastName: "Fitzgerald",
  },
  publicationDate: 1925,
  genres: ["Tragedy", "Realism"],
};