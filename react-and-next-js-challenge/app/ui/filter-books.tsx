"use client";
import React, { useState } from "react";

export const books = [
	{ id: 1, title: "Clean Code", author: "Robert C. Martin" },
	{ id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas" },
	{ id: 3, title: "You Don't Know JS", author: "Kyle Simpson" },
	{ id: 4, title: "JavaScript from Beginner to Professional", author: "Maaike van Putten, Laurence Svekis, Rob Percival" },
	{ id: 5, title: "Design Patterns", author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides" }
];

export default function FilterBooks () {
	const [query, setQuery] = useState("");

	const filterbooks = books.filter((book) =>
		book.title.toLowerCase().includes(query.toLowerCase()) || 
		book.author.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<>
			<p>Search books by title or author</p> 
      <div className="flex flex-col gap-2 p-5 bg-sky-100 mt-[20px] mb-[35px]">
				<h2>Search Books</h2>
				<input 
					type="text"
					value={query}
					name="search-books"
					placeholder="Search by title/author"
					onChange={(e) => setQuery(e.target.value)}
					className="border p-2 h-[35px]"/>
				<ol>
					{filterbooks.length > 0 ? (
						filterbooks.map((book) => (
							<li key= {book.id}>{book.title} by {book.author}</li>
						))
					) : (
						<p>No books found</p>
					)}
				</ol>
			</div>
		</>
	)
}
