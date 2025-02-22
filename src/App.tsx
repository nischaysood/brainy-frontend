import { useState } from 'react';

import { Button } from "../components/ui/Button.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="primary" size = "lg" text="Sign Up" onClick={() => alert("clicked")} />
      <Button variant="secondary" size = "md" text="Add Content" onClick={() => alert("content clicked")} /> 
    </>
  );
}

export default App;

