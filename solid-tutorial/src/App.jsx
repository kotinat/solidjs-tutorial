import { BookList } from "./Booklist";
import { AddBook } from "./AddBook";

function Bookshelf() {
  return (
    <div>
      <h1>My Bookshelf</h1>
      <BookList />
      <AddBook />
    </div>
  )
}
function App() {
  return (
    <Bookshelf/>
  );
}
export default App;