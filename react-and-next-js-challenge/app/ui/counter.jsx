"use client";
import React, { useState } from "react";

export default function CounterApp () {
	const [count, setCount] = useState(0);
	return (
		<>
			<p>Create a counter App. simple counter with + and – buttons. Bonus: Add a reset button.</p>
			<div className="flex flex-col gap-2  p-5 bg-sky-100 mt-[20px] mb-[35px]">
				<h3>Counter: {count}</h3>
				<div className="flex flex-row gap-2">
					<button onClick={() => setCount(count + 1)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Increment</button>
					<button onClick={() => setCount(count - 1) } className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Decrement</button>
					<button onClick={() => setCount(0)} className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">Reset</button>
				</div>
			</div>
		</>
	)
}