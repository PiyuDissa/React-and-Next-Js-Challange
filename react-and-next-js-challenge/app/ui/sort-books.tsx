"use client";
import React, { useState } from "react";

export const books = [
	{ id: 1, title: "JavaScript from Beginner to Professional", price: 30, rating: 4.7 },
	{ id: 2, title: "You Don't Know JS", price: 30, rating: 4.9 },
	{ id: 3, title: "Clean Code", price: 35, rating: 4.8 }
];

export default function SortBooks () {
	const [sortType, setSortType] = useState("");

	const sortedBooks = [...books].sort((a, b) => {
			if (sortType == "title") return a.title.localeCompare(b.title);
			else if (sortType === "price") return a.price - b.price;
			return b.rating - a.rating;
	});

	return (
		<>
			<p>Search books by title or author</p> 
      <div className="flex flex-col gap-2 p-5 bg-sky-100 mt-[20px] mb-[35px]">
				<h2>Sorted Books</h2>
				<select onChange={(e) => setSortType(e.target.value)} className="border p-2">
					<option value="">Select a sorting option</option>
					<option value="title">Sort by title</option>
					<option value="price">Sort by price</option>
					<option value="rating">Sort by rating</option>
				</select>
				<ul>
					{sortedBooks.map((book) => (
							<li key={book.id}>{book.title} - ${book.price} - {book.rating}⭐</li>
					))}
				</ul>
			</div>
		</>
	);
}
