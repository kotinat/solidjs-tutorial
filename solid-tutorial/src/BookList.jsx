import { createSignal } from "solid-js";

const initialBooks = [
  { title: "Code Complete", author: "SteveMcConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];
export function BookList() {
  const [books, setBooks] = createSignal(initialBooks);
  return (
    <ul>
      <li>
        {books[0].title}{" "}
        <span style={{ "font-style": "italic" }}>({books[0].author})</span>
      </li>
      <li>
        {books[1].title}{" "}
        <span style={{ "font-style": "italic" }}>({books[1].author})</span>
      </li>
    </ul>
  );
}
