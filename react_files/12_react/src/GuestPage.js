import React from "react";

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest</h2>
      <p>You can view flight details below:</p>

      <ul>
        <li>Flight A - Chennai to Delhi</li>
        <li>Flight B - Mumbai to Bangalore</li>
        <li>Flight C - Hyderabad to Kolkata</li>
      </ul>

      <p>Please login to book tickets.</p>
    </div>
  );
}

export default GuestPage;