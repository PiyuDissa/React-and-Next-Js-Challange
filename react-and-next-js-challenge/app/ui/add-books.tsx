"use client";
import React, { useState } from "react";
import { booksDetails } from '../lib/definitions'

export default function AddBooks () {
	const [booklist, setBooklist] = useState<booksDetails[]>([]);
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");

	const saveBooks = (e: React.FormEvent) => {
		e.preventDefault();
		if (title && author) {
			const newBook = {id: booklist.length + 1, title, author};
			setBooklist([...booklist, newBook]);
			setTitle("");
			setAuthor("");
		}
	}
	return (
		<>
			<p>Implement a component to display list of books details (conditionally render list)</p> 
			<div className="flex flex-col gap-2 p-5 bg-sky-100 mt-[20px] mb-[35px]">
				<form onSubmit={saveBooks}>
					<div>
						<label>Enter Book title</label>
						<input 
							type="text" 
							value={title} 
							placeholder="Book title" 
							name="book-title"
							onChange={(e)=>setTitle(e.target.value)}
							className="border p-2 h-[35px]"
						/>
					</div>
					<div>
						<label>Enter Author Name</label>
						<input 
							type="text" 
							value={author} 
							placeholder="Author Name" 
							name="author-name"
							onChange={(e)=>setAuthor(e.target.value)}
							className="border p-2 h-[35px]"
						/>
					</div>
					<div>
						<button type="submit" onClick={saveBooks} 
							className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
								Add
						</button>
					</div>
				</form>

				<ul>
					{booklist.length > 0 ? (
						booklist.map((book) => (
							<li key={book.id}>
								<p>{book.title}</p>
								<p>{book.author}</p>
							</li>
						))
					) : (
						<p>No books added</p>
					)}
				</ul>
			</div>
		</>
	)
}