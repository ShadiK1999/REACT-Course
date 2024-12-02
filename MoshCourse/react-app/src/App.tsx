import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [visible, setVisibility] = useState(false);
  return (
    <div>
      {visible && <Alert onClose={() => setVisibility(false)}>Alert!!!</Alert>}
      <Button onClick={() => setVisibility(true)}>hello</Button>
    </div>
  );
}

export default App;
