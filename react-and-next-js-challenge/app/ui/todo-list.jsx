"use client";

import React, { useState } from "react"
import clsx from 'clsx'

export default function TodoList () {
	const [inputValue, setInputValue] = useState("");
	const [items, setItems] = useState([]);
	const [done, setDone] = useState(false);

	const handleAdd = () => {
		if (inputValue === "") return;
		setItems([...items, { text: inputValue, done: false }]);
		setInputValue("");
	}

	const handleDelete = (indexToRemove) => {
    const filteredItems = items.filter((_, index) => index !== indexToRemove);
    setItems(filteredItems);
  };

	const toggleDone = (index) => {
		const newItems = [...items];
		newItems[index].done = !newItems[index].done;
		setItems(newItems);
	};

	return (
		<>
			<p>Add and remove items from a list. Mark as completed using a checkbox.</p>
			<div className="flex flex-col gap-2 p-5 bg-sky-100 mt-[20px] mb-[35px]">
				<input 
					type="text"
					name="to-do-item"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder = "Enter to-do item"
					className="border p-2 h-[35px]"
				/>
				<div className="flex flex-row gap-2">
					<button type="button" onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add</button>
					<button type="button" onClick={() => setItems("")} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">reset</button>
				</div>
				<ul>
					 {items.length > 0 ? (
						items.map((item, index) => (
							<li key={index} className={clsx("mb-1", item.done && "line-through")}>
								<input 
									type="checkbox"
									checked={item.done}
     							onChange={() => toggleDone(index)}
								/>
								{item.text}
								<button type="button" onClick={() => handleDelete(index)} className="bg-green-600 text-white px-4 py-2 ml-1 text-[12px] rounded-lg hover:bg-green-700">Delete</button>
							</li>
						))
					 ) : (
						<li className="text-gray-500 italic">No items yet</li>
					)}
				</ul>
			</div>
		</>
	)
}