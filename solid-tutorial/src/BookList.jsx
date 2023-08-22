import { For, createSignal } from "solid-js";

const initialBooks = [
  { title: "Code Complete", author: "SteveMcConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];
export function BookList() {
  const [books, setBooks] = createSignal(initialBooks);
  return (
    <ul>
      <For each={books()}>
        {(book) => {
          return (
            <li>
              {book.title}{" "}
              <span style={{ "font-style": "italic" }}>({book.author})</span>
            </li>
          );
        }}
      </For>
    </ul>
  );
}
