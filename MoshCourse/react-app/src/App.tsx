import ListGroup from "./components/ListGroup";

function App() {
  const items = ["NY", "SF", "LA"];
  let heading = "cities";
  const handleSelectItem = (item: String) => {
    console.log(item);
  };
  return (
    <ListGroup
      items={items}
      heading={heading}
      onSelectItem={handleSelectItem}
    ></ListGroup>
  );
}

export default App;
