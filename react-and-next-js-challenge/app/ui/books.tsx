import React from "react";
import { booksDetails } from '../lib/definitions'

export default function BookList ({id, title, author, year}: booksDetails) {
	return (
		<>
			<div className="mb-2">
				<h2>Famous React Books</h2>
				<h3>Title: {title}</h3>
				<p>Author: {author}</p>
				<p>Published Year: {year}</p>
			</div>
		</>
	)
}