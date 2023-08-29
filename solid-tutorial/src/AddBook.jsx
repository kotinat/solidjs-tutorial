import { createSignal } from "solid-js";

export function AddBook(props) {
  const [input, setInput] = createSignal("");
  const [query, setQuery] = createSignal("");

  return (
    <form>
      <div>
        <label for="title">Search books</label>
        <input
          id="title"
          value={input()}
          onInput={(e) => setInput(e.currentTarget.value)}
        />
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setQuery(input());
        }}
      >
        Search
      </button>
    </form>
  );
}
