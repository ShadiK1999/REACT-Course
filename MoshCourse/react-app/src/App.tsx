import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [visible, setVisibility] = useState(false);
  return (
    <div>
      {visible && (
        <Alert>
          Alert!!!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setVisibility(false)}
          ></button>
        </Alert>
      )}
      <Button onClick={() => setVisibility(true)}>hello</Button>
    </div>
  );
}

export default App;
