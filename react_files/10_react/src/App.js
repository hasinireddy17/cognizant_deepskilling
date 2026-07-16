import React from "react";

function App() {
  // Office object list
  const offices = [
    {
      name: "Tech Park",
      rent: 55000,
      address: "Chennai",
      image: "https://via.placeholder.com/200"
    },
    {
      name: "Business Hub",
      rent: 75000,
      address: "Bangalore",
      image: "https://via.placeholder.com/200"
    },
    {
      name: "Startup Space",
      rent: 45000,
      address: "Hyderabad",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div>
      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Loop through offices */}
      {offices.map((office, index) => (
        <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          
          {/* Image */}
          <img src={office.image} alt="office" />

          {/* Details */}
          <h2>{office.name}</h2>

          <p>
            Rent:{" "}
            <span
              style={{
                color: office.rent < 60000 ? "red" : "green"
              }}
            >
              {office.rent}
            </span>
          </p>

          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;