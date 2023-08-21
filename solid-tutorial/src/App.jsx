import { BookList } from "./BookList";
import { AddBook } from "./AddBook";

function Bookshelf(props) {
  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList />
      <AddBook />
    </div>
  )
}
function App() {
  return (
    <Bookshelf name='solid'/>
  );
}
export default App;