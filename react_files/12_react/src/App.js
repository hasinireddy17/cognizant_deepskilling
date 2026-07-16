import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Ticket Booking App</h1>

      {/* Buttons */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

      <hr />

      {/* Conditional Rendering */}
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;