"use client";
import React, { useState } from "react";

export const books = [
	{ id: 1, title: "JavaScript from Beginner to Professional", price: 30, rating: 4.7 },
	{ id: 2, title: "You Don't Know JS", price: 30, rating: 4.9 },
	{ id: 3, title: "Clean Code", price: 35, rating: 4.8 },
	{ id: 4, title: "JavaScript from Beginner to Professional", price: 30, rating: 4.7 },
	{ id: 5, title: "You Don't Know JS", price: 30, rating: 4.9 },
	{ id: 6, title: "Clean Code", price: 35, rating: 4.8 },
	{ id: 7, title: "JavaScript from Beginner to Professional", price: 30, rating: 4.7 },
	{ id: 8, title: "You Don't Know JS", price: 30, rating: 4.9 },
	{ id: 9, title: "Clean Code", price: 35, rating: 4.8 }
];

export default function Pagination() {
	const [page, setPage] = useState(1);
	const booksPerPage = 2;
	const totalPages = Math.ceil(books.length / booksPerPage);
	const displayedBooks = books.slice((page-1)* booksPerPage, page *booksPerPage );

	return (
			<>
				<p>Paginated Book List</p> 
				<div className="flex flex-col gap-2 p-5 bg-sky-100 mt-[20px] mb-[35px]">
					<ul>
							{displayedBooks.map((book) => (
									<li key={book.id}>{book.title}</li>
							))}
					</ul>
					<div className="flex flex-row gap-2 items-center">
						<button disabled={page === 1} onClick={() => setPage(page -1)} className="px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700">Previous</button>
						<span className="text-gray-600 font-medium">{page} / {totalPages}</span>
						<button disabled={page === totalPages}  onClick={() => setPage(page +1)} className="px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700">Next</button>
					</div>
			</div>
		</>
	);
}	