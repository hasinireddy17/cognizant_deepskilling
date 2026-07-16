import React from "react";

function IndianPlayers() {
  const players = [
    "Virat",
    "Rohit",
    "Gill",
    "Rahul",
    "Hardik",
    "Jadeja"
  ];

  // Destructuring
  const [p1, p2, p3, p4, p5, p6] = players;

  const oddTeam = [p1, p3, p5];
  const evenTeam = [p2, p4, p6];

  // Merge arrays
  const T20players = ["Virat", "Rohit"];
  const RanjiPlayers = ["Pujara", "Rahane"];

  const merged = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team</h2>
      {oddTeam.map((p, i) => <p key={i}>{p}</p>)}

      <h2>Even Team</h2>
      {evenTeam.map((p, i) => <p key={i}>{p}</p>)}

      <h2>Merged Players</h2>
      {merged.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
}

export default IndianPlayers;