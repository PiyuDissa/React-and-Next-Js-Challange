'use client';
import React, { useRef } from 'react';

export default function UncontrolledForm () {
	const nameInput = useRef();
	const ageInput = useRef();
	const hairColorInput = useRef();
	const resultDiv = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const names = nameInput.current.value;
		const age = ageInput.current.value;	
		const hairColor = hairColorInput.current.value;
		
		resultDiv.current.innerHTML = `
			<p><strong>Name:</strong> ${names}</p>
			<p><strong>Age:</strong> ${age}</p>
			<p><strong>Hair Color:</strong> ${hairColor}</p>
		`;
	}

    return (
			<>
				<form onSubmit={handleSubmit}>
					<input type="text" name="Name" placeholder="Name" className="border p-2 h-[35px] mr-1" ref={nameInput}/>
					<input type="number" name="Age" placeholder="Age" className="border p-2 h-[35px] mr-1" ref={ageInput}/>
					<input type="text" name="HairColor" placeholder="Hair Color" className="border p-2 h-[35px] mr-1" ref={hairColorInput}/>
					<button type="submit" value="Submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"> 
						Submit 
					</button>
				</form>
				
				<div ref={resultDiv} className="mt-4"></div>
			</>
		)
}