import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Player1", score: 80 },
    { name: "Player2", score: 65 },
    { name: "Player3", score: 90 },
    { name: "Player4", score: 50 },
    { name: "Player5", score: 75 },
    { name: "Player6", score: 60 },
    { name: "Player7", score: 85 },
    { name: "Player8", score: 40 },
    { name: "Player9", score: 95 },
    { name: "Player10", score: 55 },
    { name: "Player11", score: 70 }
  ];

  // filter players < 70
  const lowScorePlayers = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      {players.map((p, index) => (
        <p key={index}>
          {p.name} - {p.score}
        </p>
      ))}

      <h2>Players with score below 70</h2>
      {lowScorePlayers.map((p, index) => (
        <p key={index}>
          {p.name} - {p.score}
        </p>
      ))}
    </div>
  );
}

export default ListofPlayers;