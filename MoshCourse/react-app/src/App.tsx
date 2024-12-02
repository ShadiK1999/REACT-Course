import Button from "./components/Button";
function App() {
  return (
    <div>
      <Button onClick={() => console.log("clicked")}>hello</Button>
    </div>
  );
}

export default App;
