import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "john",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { name: "james" } });
  };
  return (
    <div>
      {game.player.name}
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
