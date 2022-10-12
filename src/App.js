import "./components/styles.css";
import ParentComponent from "./components/ParentComponent";
import Products from "./components/Products";

function App() {
  const items = [
    { title: "Cat Food", slug: "cat-food" },
    { title: "Dog Food", slug: "dog-food" },
    { title: "Waffles", slug: "waffles" },
  ];

  return (
    <div className="app">
      <h1>Shop</h1>
      <Products items={items} />
      <ParentComponent open data="data" />
    </div>
  );
}

export default App;
