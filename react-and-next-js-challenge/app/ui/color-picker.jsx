"use client";
import React, { useState } from "react";
import clsx from 'clsx';

export default function ColorPicker () {
	const [value, setValue] = useState('');

	return (
		<>
			<p>Show a box with the selected color and display the color’s hex code</p>
			<div className="flex flex-col gap-2 p-5 bg-sky-100 mt-[20px] mb-[35px]">
				<label>Select Color:</label>
				<input 
					type="color" 
					name="color-picker"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					className="w-[200px]"
				/>
				<p>{value}</p>
			</div>
		</>
	)
}