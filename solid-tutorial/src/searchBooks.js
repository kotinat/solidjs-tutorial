export async function searchBooks(query) {
  if (query.trim() === "") return [];
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURI(query)}`
  );
  const results = await response.json();
  return results.docs.slice(0, 10).map(({ title, author_name }) => ({
    title,
    author: author_name?.join(", "),
  }));
}
