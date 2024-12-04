import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  //side effects kept here to be called after render
  useEffect(() => {
    // Side effect
    if (ref.current) ref.current.focus();
  });

  return (
    <div>
      <input type="text" className="form-control" />
    </div>
  );
}

export default App;
