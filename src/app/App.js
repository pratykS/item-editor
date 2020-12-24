import { List } from "../components/List/List";
import "./App.css";
const items = [
  { id: 1, content: "I am content 1" },
  { id: 2, content: "I am content 2" },
  { id: 3, content: "I am content 3" },
];

function App() {
  return (
    <div className="App">
      I am the app <List items={items}></List>
    </div>
  );
}

export default App;
