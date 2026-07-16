import React from "react";

function BookDetails() {
  const books = [
    { id: 1, name: "React Basics", price: 500 },
    { id: 2, name: "JavaScript Guide", price: 400 }
  ];

  return (
    <div>
      <h2>Book Details</h2>
      {books.map((book) => (
        <p key={book.id}>
          {book.name} - ₹{book.price}
        </p>
      ))}
    </div>
  );
}

export default BookDetails;